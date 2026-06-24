import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Apakah bisa belajar Bahasa Jepang dari nol?",
      answer:
        "Tentu saja bisa! Kurikulum kami dirancang secara berjenjang dari tingkat paling dasar (Hiragana, Katakana, tata bahasa dasar) hingga tingkat mahir yang siap untuk ujian JLPT maupun Tokutei Ginou.",
    },
    {
      question: "Apakah dibantu sampai proses keberangkatan ke Jepang?",
      answer:
        "Ya, betul sekali. LPK Minna No Gakkou memberikan bimbingan, pendampingan, hingga penyelesaian seluruh berkas administrasi dan visa keberangkatan Anda sampai Anda benar-benar terbang dan mendarat di Jepang.",
    },
    {
      question: "Apakah setelah lulus pelatihan akan mendapatkan sertifikat?",
      answer:
        "Ya, setiap peserta yang menyelesaikan masa pelatihan dan lulus evaluasi akan mendapatkan Sertifikat Pelatihan Resmi dari LPK Minna No Gakkou yang dapat digunakan sebagai bukti kelayakan kerja.",
    },
    {
      question: "Apakah tersedia pilihan kelas online?",
      answer:
        "Kami menyediakan kelas pembelajaran daring (online) bagi peserta yang berada di luar daerah Sukabumi, serta kelas luring (offline) dengan fasilitas lengkap di Sukabumi.",
    },
    {
      question: "Apa saja syarat utama untuk mendaftar?",
      answer:
        "Syarat umum meliputi usia minimal 18 tahun, sehat jasmani dan rohani, lulusan minimal SMA/SMK/Sederajat, serta memiliki tekad yang kuat untuk belajar dan berkarir di Jepang.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-neutral-gray scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-light text-primary-dark text-xs font-bold rounded-full mb-4 uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            Paling Sering Ditanyakan
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            FAQ & Pertanyaan Umum
          </h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600">
            Berikut beberapa jawaban dari pertanyaan yang sering ditanyakan oleh
            calon peserta didik kami.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold text-gray-900 hover:text-primary transition-colors cursor-pointer"
                >
                  <span className="text-base sm:text-lg">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-transform text-gray-400 ${
                      isOpen ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-gray-600 leading-relaxed border-t border-gray-50 text-sm sm:text-base">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
