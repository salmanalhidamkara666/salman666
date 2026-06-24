import { motion } from "motion/react";
import {
  UserCheck,
  BookOpenCheck,
  ShieldCheck,
  MapPin,
  GraduationCap,
  Video,
  SearchCode,
  Route,
} from "lucide-react";

export default function FeaturesSection() {
  const features = [
    { icon: <UserCheck />, title: "Founder Berpengalaman Kerja di Jepang" },
    { icon: <BookOpenCheck />, title: "Pengajar Profesional Bersertifikasi" },
    { icon: <SearchCode />, title: "Kurikulum Terupdate Standar Jepang" },
    { icon: <Route />, title: "Pendampingan Hingga Berangkat" },
    { icon: <GraduationCap />, title: "Sertifikat Pelatihan Resmi" },
    { icon: <Video />, title: "Tersedia Kelas Online dan Offline" },
    { icon: <MapPin />, title: "Fasilitas Belajar & Asrama Nyaman" },
    { icon: <ShieldCheck />, title: "Bimbingan Karir & Konsultasi Gratis" },
  ];

  return (
    <section className="py-20 bg-primary-dark relative overflow-hidden text-white">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[80px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-[80px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mengapa Memilih Kami?
          </h2>
          <div className="w-20 h-1.5 bg-accent-gold mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-primary-light/80">
            Komitmen kami memberikan standar layanan dan pendidikan terbaik.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-accent-gold mb-4 inline-block p-3 rounded-xl bg-white/5">
                {item.icon}
              </div>
              <h4 className="font-semibold text-lg leading-tight">
                {item.title}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
