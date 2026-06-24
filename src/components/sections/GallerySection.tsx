import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Image, X, ZoomIn } from "lucide-react";

interface GalleryItem {
  id: number;
  category: string;
  title: string;
  imgUrl: string;
}

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const categories = [
    "Semua",
    "Kegiatan Belajar",
    "Kelas Bahasa Jepang",
    "Simulasi Kaigo",
    "Alumni",
    "Event",
    "Jepang",
  ];

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      category: "Kelas Bahasa Jepang",
      title: "Kelas Intensif Tata Bahasa",
      imgUrl:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 2,
      category: "Simulasi Kaigo",
      title: "Simulasi Alat Bantu Transfer Lansia",
      imgUrl:
        "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 3,
      category: "Alumni",
      title: "Keberangkatan Kloter 12 Ke Tokyo",
      imgUrl:
        "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 4,
      category: "Kegiatan Belajar",
      title: "Pembelajaran Budaya Jepang & Origami",
      imgUrl:
        "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 5,
      category: "Event",
      title: "Sosialisasi Program Kerja SSW Sukabumi",
      imgUrl:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 6,
      category: "Jepang",
      title: "Lingkungan Kerja Mitra di Osaka",
      imgUrl:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 7,
      category: "Kelas Bahasa Jepang",
      title: "Latihan Kaiwa dengan Native Speaker",
      imgUrl:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 8,
      category: "Simulasi Kaigo",
      title: "Praktik Komunikasi Terapeutik",
      imgUrl:
        "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=600&auto=format&fit=crop",
    },
  ];

  const filteredItems =
    activeCategory === "Semua"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-light text-primary-dark text-xs font-bold rounded-full mb-4 uppercase tracking-wider">
            <Image className="w-3.5 h-3.5" />
            Dokumentasi Kegiatan
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Galeri Kegiatan
          </h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600">
            Aktivitas harian, kelas pelatihan, suasana simulasi, hingga
            momen-momen keberangkatan alumni kami ke Jepang.
          </p>
        </div>

        {/* Categories Tab */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((lvl) => (
            <button
              key={lvl}
              onClick={() => setActiveCategory(lvl)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === lvl
                  ? "bg-primary text-white shadow-lg shadow-primary/20 scale-105"
                  : "bg-neutral-gray text-gray-600 hover:bg-primary-light hover:text-primary-dark border border-gray-100"
              }`}
            >
              {lvl}
            </button>
          ))}
        </div>

        {/* Masonry / Grid Layout */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-gray border border-gray-100 shadow-md hover:shadow-xl transition-all cursor-pointer overflow-hidden"
              >
                <img
                  src={item.imgUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <span className="text-xs text-accent-gold font-semibold uppercase tracking-wider mb-1">
                    {item.category}
                  </span>
                  <h4 className="text-white font-bold text-sm leading-tight mb-2">
                    {item.title}
                  </h4>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center self-end">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 text-white/80 hover:text-white p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col max-h-[90vh]"
              >
                <div className="overflow-y-auto flex-1 flex flex-col">
                  <div className="relative shrink-0 bg-slate-950 overflow-hidden aspect-[4/3] sm:aspect-video flex items-center justify-center">
                    <img
                      src={selectedItem.imgUrl}
                      alt={selectedItem.title}
                      className="max-w-full max-h-[50vh] sm:max-h-[60vh] object-contain"
                      referrerPolicy="no-referrer"
                    />
                    {/* Close button layered on the image */}
                    <button
                      onClick={() => setSelectedItem(null)}
                      className="absolute top-4 right-4 text-white hover:text-white/80 p-2.5 bg-black/60 hover:bg-black/80 rounded-full transition-colors cursor-pointer z-10"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="p-6 bg-white shrink-0">
                    <span className="text-xs text-primary font-bold uppercase tracking-wider mb-1 block">
                      {selectedItem.category}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 leading-snug">
                      {selectedItem.title}
                    </h3>
                    <div className="flex justify-end pt-2 border-t border-gray-100">
                      <button
                        onClick={() => setSelectedItem(null)}
                        className="px-5 py-2 bg-gray-900 hover:bg-gray-800 text-white text-xs font-bold rounded-xl transition-all cursor-pointer"
                      >
                        Tutup Galeri
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
