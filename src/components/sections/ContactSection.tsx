import { motion } from "motion/react";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Compass,
  ExternalLink,
} from "lucide-react";

export default function ContactSection() {
  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15830.088190772242!2d106.586111!3d-7.300556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4d106.586111!3d-7.300556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e680c44ec93e7f9%3A0xe6bf4462cb3e42ea!2sCinagen%2C%20Surade%2C%20Jampangkulon%2C%20Sukabumi%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid";
  const externalMapLink =
    "https://maps.google.com/?q=Cinagen,+Surade,+Jampangkulon,+Sukabumi,+Jawa+Barat";

  const contacts = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Alamat Kami",
      desc: "Cinagen, Surade, Jampangkulon, Sukabumi, Jawa Barat",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Pendaftaran & Konsultasi",
      desc: "WhatsApp: 0855-3660-1150 / 0857-8112-4502",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Resmi",
      desc: "admin@minnanogakkou.com",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Hari & Jam Kerja",
      desc: "Senin - Sabtu: 08.00 - 17.00 WIB",
    },
  ];

  return (
    <section id="kontak" className="py-24 bg-neutral-gray scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-light text-primary-dark text-xs font-bold rounded-full mb-4 uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            Hubungi Kami
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-sans tracking-tight">
            Kontak & Lokasi Lembaga
          </h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600">
            Kunjungi kampus kami atau hubungi tim administrasi untuk konsultasi
            langsung program pelatihan.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Contact Details Grid */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="grid gap-6">
              {contacts.map((contact, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-white p-6 rounded-2xl border border-gray-100 flex gap-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-light text-primary flex items-center justify-center shrink-0">
                    {contact.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      {contact.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed font-medium">
                      {contact.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons for Navigation */}
            <div className="bg-primary-dark text-white p-6 rounded-2xl flex flex-col gap-4 border border-primary-light/10">
              <h4 className="font-bold text-lg">Butuh Petunjuk Arah?</h4>
              <p className="text-sm text-primary-light/80">
                Dapatkan rute langsung menuju kampus dari lokasi Anda melalui
                aplikasi navigasi.
              </p>
              <div className="flex flex-wrap gap-3 mt-2">
                <a
                  href={externalMapLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-primary-dark font-bold text-sm rounded-xl hover:bg-neutral-gray transition-colors shrink-0 shadow-sm"
                >
                  <Compass className="w-4 h-4 text-primary" />
                  Petunjuk Arah
                </a>
                <a
                  href={externalMapLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/20 hover:bg-primary/40 text-white font-bold text-sm rounded-xl transition-colors shrink-0 border border-white/10"
                >
                  Buka di Google Maps
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Responsive Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white rounded-3xl border border-gray-100 p-4 shadow-xl shadow-primary/5 min-h-[400px] flex flex-col"
          >
            <div className="rounded-2xl overflow-hidden flex-1 border border-gray-200 relative">
              <iframe
                title="Google Maps LPK Minna No Gakkou"
                src={mapUrl}
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
