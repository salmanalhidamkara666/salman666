import express from "express";
import path from "path";
import fs from "fs";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import initialRagDb from "./src/data/rag_db.json";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const dbPath = path.join(process.cwd(), "src/data/rag_db.json");

// API Routes
app.get("/api/rag-content", (req, res) => {
  try {
    if (fs.existsSync(dbPath)) {
      const data = fs.readFileSync(dbPath, "utf-8");
      res.json(JSON.parse(data));
    } else {
      res.json(initialRagDb);
    }
  } catch (error) {
    console.warn("Using initialRagDb fallback for reading RAG:", error);
    res.json(initialRagDb);
  }
});

app.post("/api/rag-content", (req, res) => {
  try {
    const { context } = req.body;
    fs.writeFileSync(dbPath, JSON.stringify({ context }, null, 2), "utf-8");
    res.json({ success: true });
  } catch (error) {
    console.error("Error writing RAG DB:", error);
    res.status(500).json({ error: "Gagal menyimpan data. (Pada serverless seperti Vercel, penyimpanan file bersifat read-only)" });
  }
});

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

  // Greetings checking
  const greetings = ["halo", "hai", "pagi", "siang", "sore", "malam", "assalamualaikum", "permisi", "test", "hi"];
  const isGreeting = greetings.some(g => query.includes(g)) || query.length <= 4;
  
  if (isGreeting) {
    return "Halo! Saya asisten LPK Minna No Gakkou. Ada yang bisa saya bantu terkait informasi pendaftaran, program, atau biaya?";
  }

  // Check intents
  if (["biaya", "harga", "tarif", "bayar", "ongkos", "rupiah", "rp", "dokumen"].some(kw => query.includes(kw))) {
    return section2 
      ? `Berikut informasi mengenai rincian biaya di LPK Minna No Gakkou:\n\n${section2}\n\nApakah ada pertanyaan lain seputar biaya atau proses dokumen?`
      : "Untuk informasi detail mengenai rincian biaya pendaftaran, pelatihan, dan proses dokumen, silakan hubungi WhatsApp kami langsung di 085536601150.";
  }

  if (["program", "ssw", "tokutei", "ginou", "kaigo", "caregiver", "perawat", "lansia", "bahasa", "belajar", "kursus", "kelas", "mbg"].some(kw => query.includes(kw))) {
    return section1 
      ? `Berikut adalah program pelatihan yang tersedia di LPK Minna No Gakkou:\n\n${section1}\n\nApakah Anda ingin berkonsultasi mengenai salah satu program ini?`
      : "Kami menyediakan program pelatihan SSW (Tokutei Ginou), Kaigo (Caregiver), dan Kelas Bahasa Jepang Reguler. Ada program spesifik yang ingin Anda tanyakan?";
  }

  if (["lowongan", "kerja", "loker", "job", "gaji", "syarat", "persyaratan", "waras", "cinta sejati", "perusahaan"].some(kw => query.includes(kw))) {
    return section3 
      ? `Berikut detail lowongan kerja terbaru ke Jepang melalui LPK Minna No Gakkou:\n\n${section3}\n\nApakah Anda berminat mendaftar untuk posisi ini?`
      : "Kami memiliki informasi lowongan kerja terbaru (seperti program SSW Tokutei Ginou/Kaigo) dengan gaji menarik. Silakan hubungi WA 085536601150 untuk kuota terkini.";
  }

  if (["daftar", "pendaftaran", "cara", "gabung", "kantor", "lokasi", "alamat", "kontak", "wa", "telepon", "no hp", "hubungi"].some(kw => query.includes(kw))) {
    return section4 
      ? `Berikut panduan proses pendaftaran di LPK Minna No Gakkou:\n\n${section4}`
      : "Pendaftaran dapat dilakukan langsung di kantor kami atau secara online. Hubungi kontak WhatsApp resmi kami di **085536601150** untuk panduan pendaftaran.";
  }

  // Fallback to a compiled overview of everything
  return "Maaf, sistem AI utama kami sedang overload. Namun, jangan khawatir! Berikut ringkasan informasi LPK Minna No Gakkou yang dapat kami sampaikan:\n\n" +
         (section1 ? `**1. Program Terdaftar:**\n${section1.replace("1. PROGRAM YANG TERSEDIA:", "").trim()}\n\n` : "") +
         (section2 ? `**2. Rincian Biaya LPK:**\n${section2.replace("2. RINCIAN BIAYA LPK:", "").trim()}\n\n` : "") +
         (section4 ? `**3. Cara Pendaftaran:**\n${section4.replace("4. PROSES PENDAFTARAN:", "").trim()}\n\n` : "") +
         "Untuk chat dan konsultasi langsung dengan staf kami, silakan hubungi **WhatsApp resmi di 085536601150**.";
}

app.post("/api/chat", async (req, res) => {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    const configuredModel = process.env.GEMINI_MODEL?.trim();
    if (!apiKey) {
      return res.status(500).json({ error: "Server error: Missing Gemini API Key" });
    }

    const ai = new GoogleGenAI({ apiKey });
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    let contextData = "";
    try {
      if (fs.existsSync(dbPath)) {
        const dbContent = fs.readFileSync(dbPath, "utf-8");
        const parsed = JSON.parse(dbContent);
        contextData = parsed.context || "";
      } else {
        contextData = initialRagDb.context || "";
      }
    } catch (e) {
      console.warn("Using fallback context data:", e);
      contextData = initialRagDb.context || "";
    }

    const systemPrompt = `Bertindaklah sebagai asisten LPK Minna No Gakkou yang ramah dan profesional.
    
ATURAN KETAT:
1. Anda HANYA boleh menjawab pertanyaan berdasarkan Teks Konteks yang ditarik dari database di bawah ini.
2. Jika kandidat bertanya di luar topik lowongan kerja, biaya, dan program LPK yang tercantum, atau sekadar basa-basi yang tidak umum untuk LPK, tolak dengan sopan dengan mengatakan Anda hanya bisa membantu seputar informasi LPK Minna No Gakkou.
3. Dilarang keras mengarang jawaban (halusinasi) yang tidak ada di Teks Konteks.
4. Gunakan gaya bahasa yang sopan dan mudah dipahami, berikan poin-poin yang rapi.
5. Jika ditanya ada "lowongan apa" atau detail job tertentu, sebutkan lowongan pekerjaan sesuai dengan yang dicantumkan dalam Teks Konteks di bawah ini, termasuk biaya, lokasi, dan syaratnya.
    
==== TEKS KONTEKS ====
${contextData}
======================
`;

    const generateContentWithRetry = async (retries = 1) => {
      let lastError;
      const models = configuredModel
        ? [configuredModel]
        : ["gemini-2.5-flash", "gemini-2.5-pro"];
      
      for (const model of models) {
        for (let i = 0; i < retries; i++) {
          try {
            const response = await ai.models.generateContent({
              model,
              contents: message,
              config: {
                systemInstruction: systemPrompt,
              }
            });
            return response;
          } catch (error: any) {
            lastError = error;
            console.error(`Error with model ${model} (attempt ${i + 1}):`, error.message || JSON.stringify(error));
            if (
              error.message?.includes("503") ||
              error.status === "UNAVAILABLE" ||
              error.status === 503
            ) {
              await new Promise((resolve) => setTimeout(resolve, 1500)); // wait 1.5s
              continue;
            } else if (
              error.message?.includes("429") ||
              error.status === "RESOURCE_EXHAUSTED" ||
              error.status === 429 || error.status === 403
            ) {
              break; // Try next model on rate limit
            } else if (
              error.message?.includes("404") ||
              error.status === "NOT_FOUND" ||
              error.status === 404
            ) {
              // Model not found, break retry loop to try the next model
              break;
            } else {
              throw error; // Other errors
            }
          }
        }
      }
      throw lastError;
    };

    try {
      const response = await generateContentWithRetry();
      res.json({ reply: response.text });
    } catch (error: any) {
      console.warn("Gemini failing/exhausted, using local fallback parsing:", error.message || error);
      const fallbackReply = getLocalFallbackResponse(message, contextData);
      res.json({ reply: fallbackReply });
    }
  } catch (outerError: any) {
    console.error("Critical error in chat route:", outerError);
    res.status(500).json({ error: "Terjadi kesalahan internal. Silakan coba lagi." });
  }
});

async function startServer() {
  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

if (!process.env.VERCEL) {
  startServer();
}

export default app;
