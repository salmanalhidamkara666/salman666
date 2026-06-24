import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  BookOpen,
  Calendar,
  ChevronRight,
  User,
  X,
  Filter,
} from "lucide-react";

interface Article {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  imgUrl: string;
}

export default function BlogSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  const categories = [
    "Semua",
    "Tokutei Ginou",
    "Kaigo",
    "Bahasa Jepang",
    "Budaya Jepang",
    "Persiapan Ujian",
    "Tips Wawancara",
    "Alumni Sukses",
  ];

  const articles: Article[] = [
    {
      id: 1,
      category: "Tokutei Ginou",
      title: "Panduan Lengkap Kerja di Jepang Lewat Jalur Tokutei Ginou (SSW)",
      excerpt:
        "Ingin bekerja di Jepang dengan keahlian khusus? Pelajari apa saja jenis industri, berkas administratif, ujian kemampuan, dan tips lulus wawancara kerja.",
      content:
        "Bekerja di Jepang melalui jalur Pekerja Berketerampilan Khusus (Specified Skilled Worker / SSW) atau Tokutei Ginou saat ini menjadi salah satu pilihan utama bagi pemuda Indonesia. Berbeda dengan program magang biasa (Jisshusei), pemegang visa SSW memiliki hak yang setara dengan pekerja lokal Jepang, termasuk standar gaji penuh dan perlindungan ketenagakerjaan yang kuat.\n\nBeberapa sektor unggulan yang diminati antara lain industri makanan & minuman, manufaktur, pertanian, perawatan lansia (kaigo), dan perhotelan. Untuk lolos, Anda diwajibkan lulus dua ujian utama: Ujian Bahasa Jepang setara level N4 (JLPT N4 atau JFT-Basic A2) dan Ujian Keahlian Bidang (Skill Test) yang dipilih.\n\nTips sukses menghadapi wawancara user:\n1. Kuasai perkenalan diri (Jikoshoukai) yang lancar dan percaya diri.\n2. Tunjukkan antusiasme yang tinggi serta ketertarikan mendalam khusus untuk bidang tersebut.\n3. Berpakaian formal sangat rapi (Recruit Suit) dan menjaga etika membungkuk (Ojigi).",
      date: "14 Juni 2026",
      author: "Sensei Aji",
      imgUrl:
        "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 2,
      category: "Kaigo",
      title: "Mengenal Program Kaigo (Caregiver) dan Peluang Karir Masa Depan",
      excerpt:
        "Pariwisata lansia di Jepang sangat berkembang pesat. Program Kaigo memberikan jaminan kerja legal tinggi, upah menarik, serta fasilitas pendukung yang lengkap.",
      content:
        "Jepang menghadapi tantangan krisis demografi berupa fenomena super-aging society, di mana populasi lansia tumbuh jauh lebih cepat dibandingkan usia produktif. Akibatnya, kebutuhan akan tenaga caregiver profesional (Kaigo) melonjak luar biasa tinggi setiap tahunnya.\n\nProfesi ini sangat terhormat di Jepang. Lingkungan bekerjanya sangat bersih, modern, dan dilengkapi peralatan teknologi bantuan mutakhir demi kesejahteraan fisik lansia dan kenyamanan pekerja. Gaji bulanan yang ditawarkan berkisar antara 180.000 hingga 250.000 Yen (setara Rp 18 - 25 juta rupiah) belum termasuk bonus kerja tahunan.\n\nKualifikasi yang dibutuhkan:\n- Memiliki sertifikat kelulusan ujian bahasa Jepang (JFT A2 / JLPT N4).\n- Lulus ujian perawatan lansia (Nursing Care Skills Evaluation).\n- Berjiwa empati tinggi, sabar, serta komunikatif dalam melayani sesama.",
      date: "10 Juni 2026",
      author: "Sensei Ramdani",
      imgUrl:
        "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 3,
      category: "Bahasa Jepang",
      title: "5 Tips Ampuh Menghafal Kanji Tingkat Dasar N5 dengan Cepat",
      excerpt:
        "Apakah Anda mengalami kesulitan dalam mengingat huruf Kanji? Berikut adalah strategi cerdas menggabungkan flashcard, coretan stroke, dan metode asosiasi visual.",
      content:
        "Menghafal ribuan huruf Kanji seringkali menjadi momok tersendiri bagi para pembelajar pemula bahasa Jepang. Namun, untuk tingkat dasar N5, Anda sebenarnya hanya perlu menguasai sekitar 80-100 karakter dasar yang sangat sering digunakan dalam kehidupan sehari-hari.\n\nBerikut adalah 5 metode praktis yang kami gunakan di LPK Minna No Gakkou:\n\n1. Menggunakan Metode Asosiasi Visual: Bayangkan karakter Kanji sebagai gambar nyata (misalnya Kanji 'Kawa' 川 seperti aliran sungai bergambar 3 garis).\n2. Mempelajari Urutan Coretan (Hitsujun): Coretan yang benar akan menghasilkan ingatan motorik yang lebih awet pada otak bawah sadar.\n3. Mempraktikkan Flashcard interaktif harian melalui aplikasi digital gratis.\n4. Menghafal kosakata utuh dibanding menghalaf cara baca tunggal (Kunyomi & Onyomi).\n5. Latihan menulis mandiri minimal 10 menit setiap malam secara konsisten secara disiplin.",
      date: "05 Juni 2026",
      author: "Sensei Gakkou",
      imgUrl:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 4,
      category: "Budaya Jepang",
      title: "Mengenal Budaya Kerja 'Omoiyari' dan Penerapannya di Perusahaan",
      excerpt:
        "Pahami konsep kepekaan emosional, kerja sama tim, dan tata krama berempati dalam bekerja bersama rekan serta atasan di Jepang.",
      content:
        "Konsep utama 'Omoiyari' (思いやり) berarti memiliki rasa empati, mengerti perasaan orang lain tanpa perlu diucapkan secara eksplisit, dan bertindak secara tulus untuk memudahkan pekerjaan orang lain di tim yang sama.\n\nDalam dunia kerja Jepang, Omoiyari diwujudkan dengan berbagai kebiasaan kecil:\n- Merapikan barang setelah digunakan agar rekan berikutnya tidak kesusahan.\n- Menyiapkan berkas pertemuan sebelum rapat dimulai agar waktu orang lain tidak terbuang.\n- Menggunakan bahasa yang sopan dan selalu menjaga kebersihan area operasional.\n\nBagi pekerja Indonesia yang berhasil menyerap semangat Omoiyari ini, mereka dipastikan akan sangat disukai oleh atasan dan rekan kerja asli Jepang.",
      date: "02 Juni 2026",
      author: "Sensei Maya",
      imgUrl:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 5,
      category: "Tips Wawancara",
      title:
        "Panduan Lolos Wawancara (Menseki) dengan User Jepang untuk Pemula",
      excerpt:
        "Simak kunci sukses tata bahasa yang sopan, raut muka ceria, serta cara menjawab pertanyaan jebakan saat interview kerja.",
      content:
        "Wawancara dengan perusahaan Jepang (Menseki) terkenal memiliki standar etika yang sangat disiplin tinggi. Kepribadian, sikap (attitude), dan semangat belajar kerja Anda seringkali dinilai jauh lebih tinggi daripada kecerdasan semata.\n\nKunci penting dalam Menseki:\n- Jaga posture punggung tetap tegak sembari tersenyum dengan sorot mata fokus penuh.\n- Gunakan ungkapan formal sopan seperti 'Yoroshiku Onegaishimasu' secara mantap di awal dan akhir interaksi.\n- Tunjukkan ketulusan dengan menceritakan motivasi kuat Anda tanpa berlebihan.\n- Persiapkan jawaban taktis mengenai kegagalan masa lalu yang berhasil Anda atasi.",
      date: "28 Mei 2026",
      author: "Sensei Aji",
      imgUrl:
        "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 6,
      category: "Tokutei Ginou",
      title:
        "Visa Magang (Ginou Jisshusei) vs Pekerja Berketerampilan Khusus (SSW)",
      excerpt:
        "Jangan tertukar! Ketahui perbedaan mendasar mengenai kontrak kerja, standar sistem gaji bulanan, serta kepengurusan keluarga.",
      content:
        "Banyak calon pekerja masih bingung membedakan visa Magang (Ginou Jisshusei) dengan visa Pekerja Berketerampilan Khusus atau Tokutei Ginou (SSW).\n\nPerbedaan utamanya meliputi:\n- Status Pekerjaan: Visa magang bersifat melatih keahlian untuk dibawa pulang ke Indonesia, sedangkan SSW merupakan tenaga kerja langsung bersertifikat profesional.\n- Standar Gaji: Pekerja SSW menerima upah setara atau bahkan di atas pekerja lokal Jepang asli yang berpengalaman di bidangnya, sementara pemagang dasar terkadang memiliki keterbatasan.\n- Durasi Kontrak: Magang berkisar 1-3 tahun, sedangkan SSW dapat diperpanjang hingga total 5 tahun penuh dan berpeluang naik kelas ke SSW Tingkat II untuk tinggal selamanya.",
      date: "25 Mei 2026",
      author: "Admin LPK",
      imgUrl:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 7,
      category: "Persiapan Ujian",
      title:
        "Mengenal JLPT dan JFT-Basic: Ujian Mana yang Sebaiknya Anda Ambil?",
      excerpt:
        "Ketahui perbedaan materi uji, format komputerisasi, dan tingkat kemudahan kelulusan bagi pendaftar visa Tokutei Ginou.",
      content:
        "Untuk mendaftar program Pekerja Berketerampilan Khusus (SSW), syarat wajibnya adalah lulus sertifikasi bahasa Jepang level A2 / N4. Anda diberikan dua pilihan ujian resmi:\n\n1. JFT-Basic (Japan Foundation Test):\n   - Diselenggarakan dengan komputer (CBT) beberapa kali dalam setahun.\n   - Hasil langsung diketahui dalam beberapa hari, sangat ramah bagi yang butuh sertifikasi cepat.\n   - Fokus pada percakapan berbasis situasi nyata sehari-hari.\n\n2. JLPT (Japanese Language Proficiency Test):\n   - Diselenggarakan luring manual 2 kali setahun (Juli & Desember).\n   - Merupakan tes standar global paling bergengsi namun memiliki waktu rilis sertifikat lebih lama.\n\nSaran kami: Ambil JFT-Basic jika Anda berniat segera melamar lowongan kerja secepatnya.",
      date: "20 Mei 2026",
      author: "Sensei Gakkou",
      imgUrl:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 8,
      category: "Alumni Sukses",
      title:
        "Kisah Sukses Budi: Dari LPK Minna No Gakkou Hingga Menjadi Caregiver di Kyoto",
      excerpt:
        "Perjalanan luar biasa alumni kami yang kini berpenghasilan puluhan juta rupiah dan mendapatkan pujian dari institusi lansia Kyoto.",
      content:
        "Budi, pemuda asal daerah yang berbekal keyakinan tinggi, memutuskan mendaftar kelas persiapan intensif di LPK Minna No Gakkou. Dalam kurun waktu 5 bulan belajar, dia berhasil menyabet sertifikat N4 dan lulus Ujian Kompetensi Kaigo.\n\nKini, Budi telah bekerja selama hampir setahun di Shishikura Senior Care Facility di Kyoto. Dengan keramahan khas Indonesia dikombinasikan kepatuhan SOP Jepang, dia diakui sebagai salah satu karyawan asing teladan. 'LPK mendidik saya tidak cuma bahasa, tetapi mental baja bertahan hidup di luar negeri,' tutur Budi melalui panggilan video alumni.",
      date: "15 Mei 2026",
      author: "Admin LPK",
      imgUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 9,
      category: "Kaigo",
      title:
        "Biaya Hidup dan Estimasi Tabungan Bekerja Sebagai Perawat di Tokyo",
      excerpt:
        "Mari bedah rincian pengeluaran tempat tinggal, pajak kesejahteraan, konsumsi makan bulanan, dan sisa tabungan bersih yang bisa dikirim ke keluarga.",
      content:
        "Berapakah sisa bersih gaji perawat lansia di Tokyo setelah dipotong aneka pengeluaran wajib? Tokyo merupakan kota metropolitan dengan upah dasar tertinggi, namun biaya hidupnya juga perlu kalkulasi cermat.\n\nBerikut simulasi rata-rata pengeluaran bulanan:\n- Gaji Kotor: 210.000 Yen\n- Pajak Pendapatan & Asuransi Kesehatan: 35.000 Yen\n- Biaya Apartemen Subsidi/Asrama LPK: 25.000 Yen\n- Makan & Transport: 40.000 Yen\n- Utilitas (Listrik, Gas, Air, Internet): 15.000 Yen\n\nTotal Pengeluaran: 115.000 Yen.\nSisa Tabungan Bersih: ~95.000 Yen (setara Rp 9,8 - 10 juta rupiah per bulan) yang siap ditabung penuh oleh pekerja.",
      date: "10 Mei 2026",
      author: "Sensei Ramdani",
      imgUrl:
        "https://images.unsplash.com/photo-1524593689594-aae2f26b75ab?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 10,
      category: "Bahasa Jepang",
      title:
        "Pentingnya Menguasai 'Aisatsu' (Salam) Sebelum Memasuki Dunia Kerja Jepang",
      excerpt:
        "Pelajari cara berucap selamat pagi, ucapan minta tolong, hingga ungkapan kelelahan kerja bersama rekan profesional lainnya.",
      content:
        "Aisatsu (salam) adalah tiang utama sopan santun komunikasi sosial di negara Jepang. Mengucapkan salam secara lantang di saat pagi hari, sebelum makan, dan sebelum pulang kerja dipandang mencerminkan kepedulian tulus terhadap iklim kerja positif.\n\nTiga Aisatsu krusial di tempat kerja:\n- 'Ohayou Gozaimasu': Salam pagi hari yang penuh energi positif.\n- 'Otsukaresama Deshita': Diucapkan kepada rekan kerja saat mengakhiri sif kerja atas kerja keras bersama.\n- 'Shitsurei Shimasu': Diucapkan saat memasuki ruangan pimpinan atau mendahului pulang dari rekan lainnya.",
      date: "05 Mei 2026",
      author: "Sensei Maya",
      imgUrl:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop",
    },
  ];

  const filteredArticles =
    selectedCategory === "Semua"
      ? articles
      : articles.filter((a) => a.category === selectedCategory);

  return (
    <section
      id="artikel"
      className="py-24 bg-white scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-light text-primary-dark text-xs font-bold rounded-full mb-4 uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            Tips, Berita & Artikel Edukasi
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-sans tracking-tight">
            Kandungan Artikel & Informasi Terkini
          </h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 leading-relaxed font-medium">
            Ketahui edukasi seputar kebahasaan, regulasi pemerintah, kebudayaan
            Jepang, hingga cerita inspiratif alumni kami.
          </p>
        </div>

        {/* Categories Filtering Bar */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12 max-w-5xl mx-auto">
          <div className="flex items-center gap-2 text-gray-400 mr-2 md:mb-0 mb-2">
            <Filter className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold uppercase tracking-wider">
              Filter:
            </span>
          </div>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-xs font-bold rounded-full border transition-all cursor-pointer ${
                selectedCategory === category
                  ? "bg-primary text-white border-primary shadow-md shadow-primary/20 scale-105"
                  : "bg-gray-50 text-gray-500 border-gray-200/80 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Articles Grid layout */}
        {filteredArticles.length === 0 ? (
          <div className="text-center py-20 bg-gray-50 rounded-[2rem] border border-gray-100 max-w-xl mx-auto">
            <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 font-bold">
              Belum ada artikel untuk kategori ini.
            </p>
            <button
              onClick={() => setSelectedCategory("Semua")}
              className="mt-4 px-4 py-2 bg-primary text-white text-xs font-bold rounded-xl"
            >
              Tampilkan Semua Artikel
            </button>
          </div>
        ) : (
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredArticles.map((article) => (
                <motion.article
                  key={article.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 15 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setActiveArticle(article)}
                  className="bg-white rounded-[2rem] border border-gray-100/95 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full group cursor-pointer"
                >
                  {/* Media Container */}
                  <div className="aspect-[16/10] overflow-hidden bg-gray-50 relative pointer-events-none">
                    <img
                      src={article.imgUrl}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-primary-dark text-[10px] font-bold px-3 py-1.5 rounded-full border border-primary-light uppercase shadow-sm">
                      {article.category}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-4 text-xs text-gray-400 mb-3 font-medium">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-primary/70" />
                          {article.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="w-3.5 h-3.5 text-primary/70" />
                          {article.author}
                        </span>
                      </div>
                      <h3 className="font-bold text-lg text-gray-900 leading-snug mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed line-clamp-3 font-medium">
                        {article.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                      <button
                        onClick={() => setActiveArticle(article)}
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary-dark transition-colors cursor-pointer"
                      >
                        Baca Selengkapnya
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Modal Detail Artikel */}
        <AnimatePresence>
          {activeArticle && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveArticle(null)}
                className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm"
              />

              {/* Close Hotkey wrapper or modal canvas box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 250 }}
                className="bg-white rounded-3xl sm:rounded-[2.5rem] shadow-2xl border border-gray-100 w-full max-w-3xl overflow-hidden z-10 relative flex flex-col max-h-[92vh] md:max-h-[88vh]"
              >
                {/* Header Image with strict, responsive height limits (enforces plenty of space for article content) */}
                <div className="h-32 sm:h-48 md:h-56 w-full bg-gray-100 relative shrink-0 overflow-hidden">
                  <img
                    src={activeArticle.imgUrl}
                    alt={activeArticle.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <span className="absolute bottom-3 left-4 sm:bottom-4 sm:left-6 bg-primary text-white text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-full uppercase">
                    {activeArticle.category}
                  </span>

                  {/* Close button inside image top corner */}
                  <button
                    onClick={() => setActiveArticle(null)}
                    className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-sm transition-colors cursor-pointer shadow-lg z-10"
                  >
                    <X className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>

                {/* Content Area (Scrollable) */}
                <div className="p-6 sm:p-8 overflow-y-auto flex-1">
                  {/* Metadata */}
                  <div className="flex items-center gap-4 text-xs font-bold text-gray-400 mb-4 uppercase tracking-wider">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-primary" />
                      {activeArticle.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <User className="w-4 h-4 text-primary" />
                      {activeArticle.author}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3.5xl font-black text-gray-900 mb-6 leading-tight font-sans tracking-tight">
                    {activeArticle.title}
                  </h3>

                  <div className="text-gray-600 space-y-4 text-sm md:text-base leading-relaxed font-medium whitespace-pre-line">
                    {activeArticle.content}
                  </div>
                </div>

                {/* Footer action */}
                <div className="p-6 bg-gray-50 border-t border-gray-100 shrink-0 flex justify-end">
                  <button
                    onClick={() => setActiveArticle(null)}
                    className="px-6 py-2.5 bg-gray-900 text-white text-xs font-bold rounded-xl hover:bg-gray-800 transition-colors cursor-pointer"
                  >
                    Tutup Artikel
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
