import dotenv from "dotenv";
import fs from "fs";
import path from "path";

dotenv.config();

const dbPath = path.join(process.cwd(), "src/data/rag_db.json");

const loadRagContext = (): string => {
  try {
    const dbContent = fs.readFileSync(dbPath, "utf-8");
    const parsed = JSON.parse(dbContent);
    return parsed.context || "";
  } catch (error) {
    console.warn("Failed to load RAG DB context:", error);
    return "";
  }
};

function getLocalFallbackResponse(msg: string, context: string): string {
  const query = msg.toLowerCase();

  const extractSection = (startMarker: string, endMarker?: string): string => {
    const startIdx = context.toLowerCase().indexOf(startMarker.toLowerCase());
    if (startIdx === -1) return "";

    let endIdx = context.length;
    if (endMarker) {
      const foundEnd = context.toLowerCase().indexOf(endMarker.toLowerCase(), startIdx);
      if (foundEnd !== -1) {
        endIdx = foundEnd;
      }
    }
    return context.substring(startIdx, endIdx).trim();
  };

  const section1 = extractSection("1. PROGRAM YANG TERSEDIA", "2. RINCIAN BIAYA");
  const section2 = extractSection("2. RINCIAN BIAYA LPK", "3. LOWONGAN KERJA");
  const section3 = extractSection("3. LOWONGAN KERJA TERBARU", "4. PROSES PENDAFTARAN");
  const section4 = extractSection("4. PROSES PENDAFTARAN");

  const greetings = ["halo", "hai", "pagi", "siang", "sore", "malam", "assalamualaikum", "permisi", "test", "hi"];
  const isGreeting = greetings.some((g) => query.includes(g)) || query.length <= 4;

  if (isGreeting) {
    return "Halo! Saya asisten LPK Minna No Gakkou. Ada yang bisa saya bantu terkait informasi pendaftaran, program, atau biaya?";
  }

  if (["biaya", "harga", "tarif", "bayar", "ongkos", "rupiah", "rp", "dokumen"].some((kw) => query.includes(kw))) {
    return section2
      ? `Berikut informasi mengenai rincian biaya di LPK Minna No Gakkou:\n\n${section2}\n\nApakah ada pertanyaan lain seputar biaya atau proses dokumen?`
      : "Untuk informasi detail mengenai rincian biaya pendaftaran, pelatihan, dan proses dokumen, silakan hubungi WhatsApp kami langsung di 085536601150.";
  }

  if (["program", "ssw", "tokutei", "ginou", "kaigo", "caregiver", "perawat", "lansia", "bahasa", "belajar", "kursus", "kelas", "mbg"].some((kw) => query.includes(kw))) {
    return section1
      ? `Berikut adalah program pelatihan yang tersedia di LPK Minna No Gakkou:\n\n${section1}\n\nApakah Anda ingin berkonsultasi mengenai salah satu program ini?`
      : "Kami menyediakan program pelatihan SSW (Tokutei Ginou), Kaigo (Caregiver), dan Kelas Bahasa Jepang Reguler. Ada program spesifik yang ingin Anda tanyakan?";
  }

  if (["lowongan", "kerja", "loker", "job", "gaji", "syarat", "persyaratan", "waras", "cinta sejati", "perusahaan"].some((kw) => query.includes(kw))) {
    return section3
      ? `Berikut detail lowongan kerja terbaru ke Jepang melalui LPK Minna No Gakkou:\n\n${section3}\n\nApakah Anda berminat mendaftar untuk posisi ini?`
      : "Kami memiliki informasi lowongan kerja terbaru (seperti program SSW Tokutei Ginou/Kaigo) dengan gaji menarik. Silakan hubungi WA 085536601150 untuk kuota terkini.";
  }

  if (["daftar", "pendaftaran", "cara", "gabung", "kantor", "lokasi", "alamat", "kontak", "wa", "telepon", "no hp", "hubungi"].some((kw) => query.includes(kw))) {
    return section4
      ? `Berikut panduan proses pendaftaran di LPK Minna No Gakkou:\n\n${section4}`
      : "Pendaftaran dapat dilakukan langsung di kantor kami atau secara online. Hubungi kontak WhatsApp resmi kami di **085536601150** untuk panduan pendaftaran.";
  }

  return (
    "Maaf, sistem AI utama kami sedang overload. Namun, jangan khawatir! Berikut ringkasan informasi LPK Minna No Gakkou yang dapat kami sampaikan:\n\n" +
    (section1 ? `**1. Program Terdaftar:**\n${section1.replace("1. PROGRAM YANG TERSEDIA:", "").trim()}\n\n` : "") +
    (section2 ? `**2. Rincian Biaya LPK:**\n${section2.replace("2. RINCIAN BIAYA LPK:", "").trim()}\n\n` : "") +
    (section4 ? `**3. Cara Pendaftaran:**\n${section4.replace("4. PROSES PENDAFTARAN:", "").trim()}\n\n` : "") +
    "Untuk chat dan konsultasi langsung dengan staf kami, silakan hubungi **WhatsApp resmi di 085536601150**."
  );
}

const getRequestBody = async (req: any) => {
  if (req.body) return req.body;

  const rawBody = await new Promise<string>((resolve, reject) => {
    let data = "";
    req.on("data", (chunk: Buffer | string) => {
      data += chunk.toString();
    });
    req.on("end", () => resolve(data));
    req.on("error", reject);
  });

  try {
    return JSON.parse(rawBody || "{}");
  } catch {
    return {};
  }
};

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.statusCode = 405;
    res.setHeader("Allow", "POST");
    return res.end(JSON.stringify({ error: "Method not allowed" }));
  }

  const requestBody = await getRequestBody(req);
  const message = requestBody?.message;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  const contextData = loadRagContext();

  const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
  const configuredModel = process.env.GEMINI_MODEL?.trim();

  if (!apiKey) {
    console.warn("Missing Gemini API Key, using local fallback response.");
    const fallbackReply = getLocalFallbackResponse(message, contextData);
    return res.status(200).json({ reply: fallbackReply, fallback: true });
  }

  const systemPrompt = `Bertindaklah sebagai asisten LPK Minna No Gakkou yang ramah dan profesional.

ATURAN KETAT:
1. Anda HANYA boleh menjawab pertanyaan berdasarkan Teks Konteks yang ditarik dari database di bawah ini.
2. Jika kandidat bertanya di luar topik lowongan kerja, biaya, dan program LPK yang tercantum, atau sekadar basa-basi yang tidak umum untuk LPK, tolak dengan sopan dengan mengatakan Anda hanya bisa membantu seputar informasi LPK Minna No Gakkou.
3. Dilarang keras mengarang jawaban (halusinasi) yang tidak ada di Teks Konteks.
4. Gunakan gaya bahasa yang sopan dan mudah dipahami, berikan poin-poin yang rapi.
5. Jika ditanya ada "lowongan apa" atau detail job tertentu, sebutkan lowongan pekerjaan sesuai dengan yang tercantum dalam Teks Konteks di bawah ini, termasuk biaya, lokasi, dan syaratnya.

==== TEKS KONTEKS ====
${contextData}
======================
`;

  try {
    const { GoogleGenAI } = await import("@google/genai");
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: configuredModel || "gemini-2.5-flash",
      contents: message,
      config: {
        systemInstruction: systemPrompt,
      },
    });

    return res.status(200).json({ reply: response.text });
  } catch (error: any) {
    console.warn("Gemini failing/exhausted or import failed, using local fallback parsing:", error?.message || error);
    const fallbackReply = getLocalFallbackResponse(message, contextData);
    return res.status(200).json({ reply: fallbackReply });
  }
}
