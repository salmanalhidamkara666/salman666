import { Star, MessageSquareQuote } from "lucide-react";
import { motion } from "motion/react";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Budi Santoso",
      program: "Tokutei Ginou - Manufaktur",
      text: "Luar biasa! Materi yang diajarkan sangat sesuai dengan dunia kerja di Jepang. Berkat Minna No Gakkou, saya bisa lolos interview dengan cepat.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop",
    },
    {
      name: "Siti Rahmawati",
      program: "Program Kaigo",
      text: "Pelatihan Kaigo disini sangat detail. Kita diajarkan SOP yang benar dan simulasi langsung, jadi saya merasa sangat siap bekerja di panti lansia Jepang.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    },
    {
      name: "Ahmad Rizki",
      program: "Bahasa Jepang Intensif",
      text: "Senseinya sangat sabar dan menguasai materi dengan baik. Dari nol sampai akhirnya saya lulus JLPT N4 dalam waktu 4 bulan saja.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
    },
  ];

  return (
    <section id="testimoni" className="py-24 bg-primary-light scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kata Alumni Kami
          </h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600">
            Kisah sukses mereka adalah bukti nyata komitmen kami terhadap
            kualitas pendidikan.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testi, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-white rounded-[2rem] p-8 shadow-xl shadow-primary/5 relative"
            >
              <MessageSquareQuote className="absolute top-8 right-8 w-10 h-10 text-primary-light/80" />

              <div className="flex gap-1 mb-6">
                {[...Array(testi.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent-gold text-accent-gold"
                  />
                ))}
              </div>

              <p className="text-gray-700 italic mb-8 relative z-10 leading-relaxed text-lg">
                "{testi.text}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={testi.avatar}
                  alt={testi.name}
                  className="w-12 h-12 rounded-full border-2 border-primary-light"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testi.name}</h4>
                  <p className="text-sm text-primary font-medium">
                    {testi.program}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
