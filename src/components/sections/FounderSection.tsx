import { motion } from "motion/react";
import { Award, Briefcase, BookOpen, UserCheck } from "lucide-react";

export default function FounderSection() {
  const badges = [
    {
      icon: <Briefcase className="w-4 h-4" />,
      text: "Perawat Kaigo Jepang 5 Tahun",
    },
    { icon: <Award className="w-4 h-4" />, text: "Praktisi Kaigo Profesional" },
    { icon: <BookOpen className="w-4 h-4" />, text: "Mentor Bahasa Jepang" },
    { icon: <UserCheck className="w-4 h-4" />, text: "Konsultan Karir Jepang" },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-neutral-gray rounded-[2.5rem] p-8 md:p-12 lg:p-16 border border-gray-100 shadow-2xl shadow-primary/5 relative"
        >
          {/* Accent decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-[100px] pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Image Side */}
            <div className="lg:col-span-5 relative group">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-lg relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                <img
                  src="/founder.jpeg"
                  alt="Aji Pangestu Ramdani - Founder"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent opacity-80" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary-light rounded-full -z-0 blur-2xl" />
            </div>

            {/* Content Side */}
            <div className="lg:col-span-7">
              <div className="inline-block px-4 py-2 bg-white rounded-full shadow-sm text-sm font-bold text-primary mb-6 uppercase tracking-wider border border-primary/10">
                Pesan Founder
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Aji Pangestu Ramdani
              </h2>
              <p className="text-xl text-primary font-medium mb-8">
                Founder & Direktur Minna No Gakkou
              </p>

              <div className="prose prose-lg text-gray-600 mb-10">
                <p className="leading-relaxed">
                  Aji Pangestu Ramdani merupakan seorang Perawat Kaigo
                  profesional yang pernah bekerja di Jepang selama 5 tahun.
                  Berbekal pengalaman langsung di dunia kerja Jepang, beliau
                  mendirikan Minna No Gakkou untuk membantu generasi muda
                  Indonesia.
                </p>
                <p className="leading-relaxed mt-4">
                  Tujuannya adalah memberikan kesempatan belajar, bekerja, dan
                  membangun karir di Jepang secara legal, profesional, dan
                  berkelanjutan. Pengetahuan lapangan yang komprehensif
                  memastikan kurikulum kami sesuai dengan standar industri
                  Jepang.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {badges.map((badge, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:border-primary hover:shadow-md transition-all group cursor-default"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary-light text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                      {badge.icon}
                    </div>
                    <span className="font-semibold text-gray-800 text-sm">
                      {badge.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
