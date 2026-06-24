import { motion } from "motion/react";
import { Target, Lightbulb, CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  const misi = [
    "Menghasilkan SDM berkualitas dan kompeten",
    "Membantu penempatan kerja ke Jepang secara resmi",
    "Mengembangkan kemampuan bahasa Jepang aplikatif",
    "Menyiapkan tenaga kerja profesional siap pakai",
    "Menjadi jembatan budaya Indonesia dan Jepang",
  ];

  return (
    <section id="tentang-kami" className="py-20 bg-neutral-gray scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tentang Kami
          </h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600">
            Dedikasi kami untuk mencetak tenaga profesional yang tidak hanya
            menguasai bahasa, tetapi juga etika dan budaya kerja Jepang.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Visi */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-primary/5 border border-gray-100 flex flex-col items-center text-center group hover:-translate-y-1 transition-transform"
          >
            <div className="w-20 h-20 bg-primary-light rounded-2xl flex items-center justify-center text-primary mb-8 rotate-3 group-hover:rotate-6 transition-transform">
              <Lightbulb className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Visi Kami</h3>
            <p className="text-gray-600 leading-relaxed text-lg font-medium">
              "Menjadi pusat pendidikan dan pelatihan Jepang terbaik di
              Indonesia yang menghasilkan sumber daya manusia profesional dan
              siap bersaing secara global."
            </p>
          </motion.div>

          {/* Misi */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-primary/5 border border-gray-100 flex flex-col"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-primary-light rounded-2xl flex items-center justify-center text-primary -rotate-3">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Misi Kami</h3>
            </div>

            <ul className="space-y-4 text-gray-700 flex-1">
              {misi.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <span className="font-medium text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
