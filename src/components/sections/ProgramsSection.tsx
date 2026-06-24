import { motion } from "motion/react";
import { BookOpenText, HeartHandshake, BriefcaseBusiness } from "lucide-react";

export default function ProgramsSection() {
  const programs = [
    {
      title: "Program Bahasa Jepang",
      icon: <BookOpenText className="w-8 h-8" />,
      desc: "Kuasai Bahasa Jepang dari dasar hingga tingkat mahir untuk komunikasi dan persiapan sertifikasi JLPT.",
      items: [
        "Hiragana & Katakana",
        "Kanji Dasar & Lanjut",
        "Kaiwa (Percakapan)",
        "JLPT N5 - N1",
      ],
    },
    {
      title: "Program Kaigo",
      icon: <HeartHandshake className="w-8 h-8" />,
      desc: "Pelatihan khusus perawat lansia dengan standar operasional dan etika pelayanan panti jompo di Jepang.",
      items: [
        "Dasar Kaigo",
        "Simulasi Kerja",
        "SOP Kaigo Jepang",
        "Budaya Kerja Jepang",
        "Persiapan Interview",
      ],
    },
    {
      title: "Program Tokutei Ginou (SSW)",
      icon: <BriefcaseBusiness className="w-8 h-8" />,
      desc: "Persiapan lengkap menghadapi ujian skill khusus dan interview dengan perusahaan Jepang.",
      items: [
        "Pengolahan Makanan",
        "Pertanian & Perhotelan",
        "Manufaktur & Perikanan",
        "Simulasi & Etika Kerja",
      ],
    },
  ];

  return (
    <section id="program" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Program Unggulan
          </h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600">
            Kurikulum terstruktur dan aplikatif yang dirancang khusus untuk
            memenuhi standar kualifikasi bekerja di Jepang.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-white rounded-[2rem] border border-gray-100 p-8 shadow-xl shadow-primary/5 hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group flex flex-col h-full"
            >
              <div className="w-16 h-16 bg-primary-light text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {program.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {program.title}
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed flex-1">
                {program.desc}
              </p>

              <ul className="space-y-3 pt-6 border-t border-gray-100">
                {program.items.map((item, idxi) => (
                  <li
                    key={idxi}
                    className="flex items-center gap-3 text-sm font-medium text-gray-700"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
