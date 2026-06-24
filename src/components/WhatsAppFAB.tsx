import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function WhatsAppFAB() {
  const [isOpen, setIsOpen] = useState(false);

  const getWaLink = (phone: string, text: string) => {
    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-20 left-0 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
          >
            <div className="bg-primary p-4 text-white flex justify-between items-center">
              <div>
                <h4 className="font-semibold">Hubungi Kami</h4>
                <p className="text-xs text-primary-light/80">
                  Pilih admin sesuai kebutuhan
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 flex flex-col gap-3">
              <a
                href={getWaLink(
                  "6285536601150",
                  "Halo Admin Minna No Gakkou, saya ingin mendapatkan informasi mengenai program pelatihan kerja ke Jepang.",
                )}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary-light/50 transition-colors border border-gray-100"
              >
                <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-semibold text-sm text-gray-900">
                    Admin Pendaftaran
                  </h5>
                  <p className="text-xs text-gray-500">Info Program & Kuota</p>
                </div>
              </a>

              <a
                href={getWaLink(
                  "6285781124502",
                  "Halo Admin Minna No Gakkou, saya ingin berkonsultasi mengenai program bahasa Jepang dan peluang kerja ke Jepang.",
                )}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary-light/50 transition-colors border border-gray-100"
              >
                <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-semibold text-sm text-gray-900">
                    Admin Konsultasi
                  </h5>
                  <p className="text-xs text-gray-500">Bimbingan Karir & SSW</p>
                </div>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-xl shadow-green-500/30 transition-transform hover:scale-105 active:scale-95"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-7 h-7" />
        )}
      </button>
    </div>
  );
}
