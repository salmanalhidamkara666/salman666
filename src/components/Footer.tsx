import { Mail, MapPin, Phone, Shield } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-xl overflow-hidden shrink-0 shadow-md border border-white/15 flex items-center justify-center p-1">
                <img
                  src="/logo.png"
                  alt="Minna No Gakkou Logo"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg leading-tight text-white">
                  Minna No Gakkou
                </h3>
                <p className="text-xs text-primary-light font-medium font-mono">
                  みんなの学校
                </p>
              </div>
            </div>
            <p className="text-primary-light/80 text-sm leading-relaxed mb-6">
              Gerbang Menuju Karir dan Masa Depan di Jepang. Lembaga Pelatihan
              Kerja ahli di bidang Bahasa Jepang, Kaigo, dan persiapan Tokutei
              Ginou (SSW).
            </p>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="font-bold text-lg mb-6">Hubungi Kami</h4>
            <ul className="space-y-4 text-sm text-primary-light/90">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 shrink-0 text-accent-gold" />
                <span>Cinagen, Surade, Jampangkulon, Sukabumi, Jawa Barat</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0 text-accent-gold" />
                <span>
                  0855-3660-1150 (Pendaftaran)
                  <br />
                  0857-8112-4502 (Konsultasi)
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 shrink-0 text-accent-gold" />
                <span>admin@minnanogakkou.com</span>
              </li>
            </ul>
          </div>

          {/* Navigasi */}
          <div>
            <h4 className="font-bold text-lg mb-6">Tautan Cepat</h4>
            <ul className="space-y-3 text-sm text-primary-light/90">
              <li>
                <a
                  href="#beranda"
                  className="hover:text-white transition-colors"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="#tentang-kami"
                  className="hover:text-white transition-colors"
                >
                  Tentang Kami
                </a>
              </li>
              <li>
                <a
                  href="#program"
                  className="hover:text-white transition-colors"
                >
                  Program
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="hover:text-white transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#testimoni"
                  className="hover:text-white transition-colors"
                >
                  Testimoni
                </a>
              </li>
            </ul>
          </div>

          {/* Jam Operasional & Sosmed */}
          <div>
            <h4 className="font-bold text-lg mb-6">Jam Operasional</h4>
            <div className="bg-primary/50 p-4 rounded-xl mb-6 border border-white/10">
              <p className="text-sm text-white font-medium mb-1">
                Senin - Sabtu
              </p>
              <p className="text-primary-light/90 text-sm">08.00 - 17.00 WIB</p>
            </div>
            {/* Admin Login Box */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <Link
                to="/admin"
                className="inline-flex items-center gap-2 text-xs text-primary-light/50 hover:text-white transition-colors group"
                title="Akses Dashboard Admin"
              >
                <Shield className="w-4 h-4 group-hover:text-accent-gold transition-colors" />
                <span>Admin Login</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-light/60">
          <p>
            &copy; {new Date().getFullYear()} LPK Minna No Gakkou. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">
              Kebijakan Privasi
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Syarat & Ketentuan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
