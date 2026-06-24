import { motion } from "motion/react";
import { ArrowRight, GraduationCap, Users, Trophy } from "lucide-react";
import { useEffect, useState } from "react";

const AnimatedCounter = ({
  end,
  duration = 2,
}: {
  end: number;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <>{count}</>;
};

export default function HeroSection() {
  return (
    <section
      id="beranda"
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden"
    >
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] bg-primary-light rounded-full blur-[100px] opacity-60 z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[600px] h-[600px] bg-accent-gold/10 rounded-full blur-[100px] opacity-60 z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-light text-primary-dark font-medium text-sm mb-6 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Tahun Ajaran Baru Dibuka
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.15] tracking-tight mb-6">
              Belajar Bahasa Jepang dan Raih Karir Impian di{" "}
              <span className="text-primary italic">Jepang</span>.
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              LPK Minna No Gakkou hadir untuk membantu generasi muda Indonesia
              menguasai Bahasa Jepang dan mempersiapkan diri bekerja di Jepang
              secara profesional, legal, dan terpercaya.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#daftar"
                className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all duration-300 shadow-xl shadow-primary/30"
              >
                Daftar Sekarang
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/6285781124502"
                target="_blank"
                rel="noreferrer"
                className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-white text-gray-800 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 border border-gray-200 shadow-sm"
              >
                Konsultasi Gratis
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-gray-200/60">
              <div>
                <h4 className="text-3xl font-bold text-gray-900 mb-1">
                  <AnimatedCounter end={500} />+
                </h4>
                <p className="text-sm font-medium text-gray-500">
                  Alumni Sukses
                </p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-gray-900 mb-1">
                  <AnimatedCounter end={100} />+
                </h4>
                <p className="text-sm font-medium text-gray-500">Siswa Aktif</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-gray-900 mb-1">5</h4>
                <p className="text-sm font-medium text-gray-500">
                  Thn Pengalaman
                </p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-gray-900 mb-1 flex items-center">
                  95%
                </h4>
                <p className="text-sm font-medium text-gray-500">
                  Tk. Kelulusan
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Imagery */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-10"
          >
            {/* Visual Container */}
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] sm:aspect-square lg:aspect-[4/5] bg-gradient-to-br from-primary-light to-white border-2 border-white shadow-2xl">
              {/* The founder image */}
              <img
                src="/founder.jpeg"
                alt="Aji Pangestu Ramdani"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent mix-blend-multiply" />

              {/* Floating Element 1 - Top Left */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
                className="absolute top-8 left-8 bg-white/90 backdrop-blur shadow-xl rounded-2xl p-4 border border-white/50 flex items-center gap-4"
              >
                <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center text-primary">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">
                    SSW & Kaigo
                  </p>
                  <p className="text-sm font-bold text-gray-900">
                    Kurikulum Valid
                  </p>
                </div>
              </motion.div>

              {/* Floating Element 2 - Bottom Right */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                }}
                className="absolute bottom-8 right-8 bg-white/90 backdrop-blur shadow-xl rounded-2xl p-4 border border-white/50"
              >
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=120&auto=format&fit=crop"
                      alt="Alumni"
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&auto=format&fit=crop"
                      alt="Alumni"
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=120&auto=format&fit=crop"
                      alt="Alumni"
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">
                      500+ Bekerja
                    </p>
                    <div className="flex items-center text-accent-gold text-xs">
                      ★★★★★
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
