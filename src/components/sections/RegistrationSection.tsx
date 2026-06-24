import { useState, FormEvent, ChangeEvent } from "react";
import { motion } from "motion/react";
import {
  Send,
  UploadCloud,
  CheckCircle,
  Shield,
  Award,
  ClipboardCheck,
  MessageCircle,
} from "lucide-react";

export default function RegistrationSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nama: "",
    nik: "",
    whatsapp: "",
    program: "",
  });
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Construct WhatsApp message with pendaftar's data
    const programLabels: Record<string, string> = {
      bahasa: "Program Bahasa Jepang",
      kaigo: "Program Kaigo (Caregiver)",
      ssw: "Program Tokutei Ginou (SSW)",
    };

    const selectedProgram = programLabels[formData.program] || formData.program;

    // Save to localStorage for CRM Dashboard
    const newStudent = {
      id: `MG-${new Date().getFullYear()}-${Math.floor(Math.random() * 1000)
        .toString()
        .padStart(3, "0")}`,
      name: formData.nama,
      phone: formData.whatsapp,
      program: selectedProgram,
      status: "Pending",
      notes: "Siswa baru mendaftar via form online.",
      date: new Date().toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    };

    const existingStudents = JSON.parse(
      localStorage.getItem("crm_students") || "null",
    );
    if (existingStudents) {
      localStorage.setItem(
        "crm_students",
        JSON.stringify([newStudent, ...existingStudents]),
      );
    } else {
      // Initialize with default + new student if localStorage was empty
      const defaultStudents = [
        {
          id: "MG-2026-001",
          name: "Andi Wijaya",
          phone: "08123456789",
          program: "Program Tokutei Ginou (SSW)",
          status: "Pending",
          notes: "Siswa belum melengkapi berkas ijazah.",
          date: "16 Juni 2026",
        },
        {
          id: "MG-2026-002",
          name: "Siti Rahma",
          phone: "085781124502",
          program: "Program Kaigo (Caregiver)",
          status: "Diproses",
          notes: "Sudah dihubungi, sedang mempersiapkan berkas fisik.",
          date: "15 Juni 2026",
        },
        {
          id: "MG-2026-003",
          name: "Rian Prasetyo",
          phone: "085536601150",
          program: "Program Bahasa Jepang",
          status: "Diterima",
          notes:
            "Sudah membayar DP pendaftaran, masuk kelas offline minggu depan.",
          date: "14 Juni 2026",
        },
        {
          id: "MG-2026-004",
          name: "Dewi Lestari",
          phone: "08987654321",
          program: "Program Kaigo (Caregiver)",
          status: "Ditolak",
          notes: "Kesehatan fisik tidak memenuhi syarat medis dasar.",
          date: "12 Juni 2026",
        },
      ];
      localStorage.setItem(
        "crm_students",
        JSON.stringify([newStudent, ...defaultStudents]),
      );
    }

    const message = `*PENDAFTARAN ONLINE LPK MINNA NO GAKKOU*

Halo Admin LPK Minna No Gakkou, saya ingin mengajukan pendaftaran online dengan data diri sebagai berikut:

📝 *PROFIL PENDAFTAR:*
• *Nama Lengkap:* ${formData.nama}
• *NIK KTP:* ${formData.nik}
• *Nomor WhatsApp:* ${formData.whatsapp}
• *Program Pilihan:* ${selectedProgram}
${fileName ? `• *Dokumen Terlampir:* ${fileName}` : ""}

Mohon berkas dan pendaftaran saya diproses lebih lanjut. Terima kasih!`;

    const whatsappUrl = `https://wa.me/6285536601150?text=${encodeURIComponent(message)}`;

    // Open WhatsApp link in a new window/tab safely
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ nama: "", nik: "", whatsapp: "", program: "" });
      setFileName("");
    }, 7000);
  };

  return (
    <section
      id="daftar"
      className="py-24 bg-neutral-gray scroll-mt-20 relative overflow-hidden"
    >
      {/* Decorative blurry gradients */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-accent-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="px-3 py-1 bg-primary-light text-primary-dark text-xs font-bold rounded-full uppercase tracking-wider">
            Formulir Pendaftaran Resmi
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4 mb-2 tracking-tight">
            Mulai Perjalanan Anda
          </h2>
          <p className="text-gray-500 font-medium">
            Isi berkas pendaftaran online sekarang dan tim admin kami akan
            memverifikasi dalam 1x24 jam.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-[2.5rem] shadow-2xl border border-gray-100/80 overflow-hidden grid lg:grid-cols-12"
        >
          {/* Left Column: Visual Info Panel */}
          <div className="lg:col-span-5 bg-gradient-to-br from-primary-dark via-primary to-primary/95 text-white p-8 md:p-12 flex flex-col justify-between relative">
            {/* Pattern */}
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

            <div>
              <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest border border-white/10">
                LPK Minna No Gakkou
              </span>
              <h3 className="text-2xl md:text-3xl font-black mt-6 mb-4 leading-tight">
                Mengapa Melamar Lewat Online?
              </h3>
              <p className="text-primary-light/80 text-sm md:text-base leading-relaxed mb-8">
                Pendaftaran online mengunci antrian prioritas untuk verifikasi
                berkas, wawancara bimbingan awal, dan slot penempatan asrama
                eksklusif.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-accent-gold shrink-0 mt-1">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm">
                      Pemberangkatan 100% Legal
                    </h5>
                    <p className="text-xs text-primary-light/70 mt-0.5">
                      Berpayung hukum resmi di bawah kementerian
                      ketenagakerjaan.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-accent-gold shrink-0 mt-1">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm">
                      Kurikulum Lapangan Terbaik
                    </h5>
                    <p className="text-xs text-primary-light/70 mt-0.5">
                      Materi diajarkan langsung oleh praktisi eks-Japan
                      berpengalaman.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-accent-gold shrink-0 mt-1">
                    <ClipboardCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm">
                      Dampingan Dokumen Lengkap
                    </h5>
                    <p className="text-xs text-primary-light/70 mt-0.5">
                      Kami dampingi penuh dari COE, Paspor, Visa hingga Kontrak
                      Kerja.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-white/10 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-accent-gold/20 flex items-center justify-center text-accent-gold border border-accent-gold/10">
                <MessageCircle className="w-5 h-5 animate-pulse" />
              </div>
              <div className="text-xs">
                <p className="text-primary-light/60 font-medium">
                  Butuh Bantuan Cepat?
                </p>
                <p className="font-bold text-white mt-0.5">
                  WhatsApp Admin: 0857-8112-4502
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Form Panel */}
          <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-md"
                >
                  <CheckCircle className="w-10 h-10" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Pendaftaran Terkirim!
                </h3>
                <p className="text-gray-500 max-w-md text-sm leading-relaxed">
                  Data pendaftaran online Anda telah tersimpan dengan status{" "}
                  <span className="font-bold text-yellow-600">Pending</span>.
                  Tim admin LPK akan segera menghubungi Anda melalui nomor
                  WhatsApp yang terdaftar dalam waktu dekat. Terima kasih!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">
                    Informasi Identitas Diri
                  </h4>
                  <p className="text-xs text-gray-400">
                    Pastikan melengkapi data berlabel tanda bintang (*) dengan
                    data asli.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-700 tracking-wide uppercase">
                      Nama Lengkap *
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.nama}
                      onChange={(e) =>
                        setFormData({ ...formData, nama: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-sm bg-gray-50/50 hover:bg-white focus:bg-white"
                      placeholder="Masukkan nama sesuai KTP"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-700 tracking-wide uppercase">
                      NIK KTP *
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.nik}
                      onChange={(e) =>
                        setFormData({ ...formData, nik: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-sm bg-gray-50/50 hover:bg-white focus:bg-white"
                      placeholder="16 digit nomor NIK"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-700 tracking-wide uppercase">
                      Nomor WhatsApp *
                    </label>
                    <input
                      required
                      type="tel"
                      value={formData.whatsapp}
                      onChange={(e) =>
                        setFormData({ ...formData, whatsapp: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-sm bg-gray-50/50 hover:bg-white focus:bg-white"
                      placeholder="Contoh: 0812xxxxxxxx"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-700 tracking-wide uppercase">
                      Pilihan Program Utama *
                    </label>
                    <select
                      required
                      value={formData.program}
                      onChange={(e) =>
                        setFormData({ ...formData, program: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-sm bg-gray-50/50 hover:bg-white focus:bg-white cursor-pointer"
                    >
                      <option value="">-- Pilih Program --</option>
                      <option value="bahasa">Program Bahasa Jepang</option>
                      <option value="kaigo">Program Kaigo (Caregiver)</option>
                      <option value="ssw">Program Tokutei Ginou (SSW)</option>
                    </select>
                  </div>
                </div>

                {/* File Upload zone styled very elegantly */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-700 tracking-wide uppercase">
                    Upload Dokumen (Opsional)
                  </label>
                  <label
                    htmlFor="file-upload"
                    className="border border-dashed border-gray-300 rounded-2xl p-6 text-center bg-gray-50/50 hover:bg-gray-100/50 transition-colors cursor-pointer group flex flex-col items-center justify-center relative"
                  >
                    <input
                      id="file-upload"
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                    <UploadCloud className="w-8 h-8 text-gray-400 group-hover:text-primary transition-colors mb-2" />
                    {fileName ? (
                      <div>
                        <p className="text-xs text-primary font-bold">
                          {fileName}
                        </p>
                        <p className="text-[10px] text-gray-400 mt-1 font-medium">
                          Klik untuk mengganti berkas
                        </p>
                      </div>
                    ) : (
                      <>
                        <p className="text-xs text-gray-600 font-bold group-hover:text-primary transition-colors">
                          Seret berkas atau klik untuk upload KTP & Ijazah
                        </p>
                        <p className="text-[10px] text-gray-400 mt-1 font-medium">
                          Diterima format PDF, JPG atau PNG (Max 5MB)
                        </p>
                      </>
                    )}
                  </label>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-400 font-medium hidden sm:inline-block">
                    Minna No Gakkou menjamin kerahasiaan data Anda.
                  </span>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3.5 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/30 flex items-center justify-center gap-2 cursor-pointer text-sm"
                  >
                    Kirim Pendaftaran
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
