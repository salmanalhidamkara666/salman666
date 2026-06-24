import { motion } from "motion/react";
import {
  MessageCircle,
  PenTool,
  ClipboardList,
  BookOpen,
  Presentation,
  Users,
  FileCheck,
  PlaneTakeoff,
  Compass,
} from "lucide-react";

export default function TimelineSection() {
  const steps = [
    {
      title: "Konsultasi Gratis",
      icon: <MessageCircle className="w-6 h-6" />,
      desc: "Diskusi awal mengenai minat kerja, program yang sesuai, serta analisis rekam medis dan fisik ringan secara gratis.",
    },
    {
      title: "Tes Awal & Evaluasi",
      icon: <PenTool className="w-6 h-6" />,
      desc: "Ujian tertulis kemampuan kognitif dasar, wawancara motivasi diri, serta pengecekan fisik menyeluruh untuk kesiapan kerja.",
    },
    {
      title: "Pendaftaran Siswa",
      icon: <ClipboardList className="w-6 h-6" />,
      desc: "Registrasi resmi, melengkapi berkas administrasi awal, pembuatan kontrak bimbingan, serta pembagian jadwal kelas.",
    },
    {
      title: "Pelatihan Bahasa Jepang",
      icon: <BookOpen className="w-6 h-6" />,
      desc: "Masa belajar intensif 3-6 bulan meliputi tata bahasa dasar (N5-N4), hafalan kosakata, serta pemahaman budaya kerja Jepang.",
    },
    {
      title: "Simulasi Interview",
      icon: <Presentation className="w-6 h-6" />,
      desc: "Pelatihan teknik interview, tata krama (ojigi), intonasi bicara formal, serta simulasi mental menghadapi user Jepang.",
    },
    {
      title: "Interview User Jepang",
      icon: <Users className="w-6 h-6" />,
      desc: "Pelaksanaan wawancara kerja terarah (daring/luring) langsung dengan perwakilan perusahaan/institusi dari Jepang.",
    },
    {
      title: "Pemberkasan Dokumen",
      icon: <FileCheck className="w-6 h-6" />,
      desc: "Pengurusan Certificate of Eligibility (CoE) dari imigrasi Jepang, penandatanganan akad kerja, paspor, hingga Visa kerja resmi.",
    },
    {
      title: "Berangkat ke Jepang",
      icon: <PlaneTakeoff className="w-6 h-6" />,
      desc: "Pemberangkatan resmi secara berkelompok, penjemputan di bandara Jepang, orientasi lokal, dan penempatan di asrama kerja.",
    },
  ];

  return (
    <section className="py-24 bg-neutral-gray relative scroll-mt-20">
      {/* Background Japanese circle ornament */}
      <div className="absolute right-0 bottom-24 w-80 h-80 bg-primary/5 rounded-full border border-primary/10 pointer-events-none flex items-center justify-center opacity-40">
        <div className="w-64 h-64 bg-primary/5 rounded-full border border-dashed border-primary/25" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-light text-primary-dark text-xs font-bold rounded-full mb-4 uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            Langkah Teratur & Terarah
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-sans tracking-tight">
            Alur Keberangkatan Resmi
          </h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 leading-relaxed font-medium">
            Proses sistematis bimbingan terintegrasi dari mulai konsultasi
            gratis hingga Anda siap berangkat dan bekerja di Jepang.
          </p>
        </div>

        <div className="relative">
          {/* Main vertical line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary/10 via-primary/30 to-primary/10 rounded-full" />

          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className={`relative flex flex-col lg:flex-row items-center justify-between ${
                  idx % 2 === 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Desktop Empty spacer */}
                <div className="hidden lg:block w-[45%]" />

                {/* Center dot desktop */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white border-4 border-primary rounded-full items-center justify-center z-10 shadow-lg font-bold text-primary text-sm hover:scale-110 transition-transform">
                  {idx + 1}
                </div>

                {/* Content Card */}
                <div className="w-full lg:w-[45%]">
                  <div
                    className={`bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl border border-gray-100/80 flex flex-col sm:flex-row gap-5 hover:-translate-y-1.5 transition-all duration-300 relative group overflow-hidden ${
                      idx % 2 === 0
                        ? "lg:text-right lg:flex-row-reverse"
                        : "lg:text-left"
                    }`}
                  >
                    {/* Tiny visual ribbon hover */}
                    <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-primary rounded-l-2xl opacity-100 lg:group-hover:opacity-100 transition-opacity" />

                    {/* Icon Dot */}
                    <div className="w-14 h-14 shrink-0 bg-primary-light text-primary rounded-2xl flex items-center justify-center self-start mx-auto sm:mx-0 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                      {step.icon}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2 justify-center sm:justify-start lg:justify-start lg:group-hover:text-primary transition-colors">
                        <span className="lg:hidden text-xs font-bold text-primary bg-primary-light px-2.5 py-1 rounded-full">
                          {idx + 1}
                        </span>
                        <h4 className="font-bold text-xl text-gray-900 group-hover:text-primary transition-colors">
                          {step.title}
                        </h4>
                      </div>
                      <p className="text-sm font-medium text-gray-500 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
