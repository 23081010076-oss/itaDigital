/* =========================================================================
   PUSAT DATA WEBSITE — ITA DIGITAL
   -------------------------------------------------------------------------
   ⚠️  SEMUA ISI DI FILE INI ADALAH PLACEHOLDER (contoh).
   Ganti nilai-nilai di bawah dengan data asli perusahaan Anda.
   Setelah diubah, seluruh halaman (Beranda, Layanan, Produk, Portofolio,
   Tentang, Kontak, dan Footer) otomatis ikut berubah.
   ========================================================================= */

export const site = {
  name: 'ITA Digital',
  nameFirst: 'ITA',
  nameSecond: 'Digital',
  tagline: 'Innovate with Intelligence',
  taglineId: 'Inovasi digital yang tepat guna',

  /* --- Kontak (GANTI dengan data asli) --- */
  email: 'hello@itadigital.id',
  phoneDisplay: '+62 812-3456-7890',
  whatsapp: '6281234567890', // format internasional tanpa tanda +
  address: 'Jl. Contoh Raya No. 123, Sukolilo, Surabaya, Jawa Timur 60111',
  addressShort: 'Surabaya, Jawa Timur',
  hours: 'Senin – Jumat, 09.00 – 18.00 WIB',
  mapsUrl: 'https://maps.google.com/?q=Surabaya',

  /* --- Media sosial --- */
  socials: [
    { name: 'Instagram', icon: 'instagram', href: 'https://instagram.com/' },
    { name: 'LinkedIn', icon: 'linkedin', href: 'https://linkedin.com/' },
    { name: 'Facebook', icon: 'facebook', href: 'https://facebook.com/' },
  ],

  /* --- Angka pencapaian --- */
  stats: [
    { value: 150, suffix: '+', label: 'Proyek digital terselesaikan' },
    { value: 68, suffix: '+', label: 'Klien & mitra aktif' },
    { value: 8, suffix: ' thn', label: 'Pengalaman membangun produk' },
    { value: 99, suffix: '%', label: 'Tingkat kepuasan klien' },
  ],
}

/** Angka pencapaian (dipakai langsung di beberapa halaman). */
export const stats = site.stats
export const socials = site.socials

/** Membuat tautan WhatsApp siap pakai (dengan pesan otomatis). */
export const waLink = (message) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    message || `Halo ${site.name}, saya ingin berkonsultasi mengenai kebutuhan digital bisnis saya.`,
  )}`

/* ============================== LAYANAN ============================== */
export const services = [
  {
    slug: 'software-development',
    icon: 'code',
    title: 'Software Development',
    short: 'Web, mobile, dan sistem internal yang dibangun sesuai alur bisnis Anda.',
    description:
      'Kami merancang dan membangun aplikasi yang benar-benar menyelesaikan masalah bisnis — bukan sekadar tampilan menarik. Mulai dari validasi ide, desain antarmuka, hingga rilis dan perawatan.',
    points: ['Aplikasi web & dashboard admin', 'Aplikasi mobile Android & iOS', 'Integrasi API & sistem pembayaran', 'Maintenance dan peningkatan berkala'],
    deliverables: ['Dokumen kebutuhan & arsitektur', 'Desain UI/UX siap develop', 'Kode sumber penuh + dokumentasi', 'Garansi perbaikan 3 bulan'],
  },
  {
    slug: 'cyber-security',
    icon: 'shield',
    title: 'Cyber Security',
    short: 'Uji keamanan, pengerasan sistem, dan pemantauan ancaman secara berkala.',
    description:
      'Keamanan bukan fitur tambahan, melainkan fondasi. Kami membantu mengidentifikasi celah pada sistem Anda sebelum pihak yang tidak bertanggung jawab menemukannya, lalu menutupnya secara terukur.',
    points: ['Penetration testing web & mobile', 'Hardening server & konfigurasi aman', 'Pemantauan log dan deteksi dini', 'Penyusunan kebijakan & SOP keamanan'],
    deliverables: ['Laporan temuan + tingkat risiko', 'Rekomendasi perbaikan berurutan', 'Pendampingan perbaikan', 'Simulasi ulang setelah patching'],
  },
  {
    slug: 'it-consulting',
    icon: 'compass',
    title: 'IT Consulting',
    short: 'Peta jalan digital, audit TI, dan pendampingan tim teknologi Anda.',
    description:
      'Banyak investasi teknologi gagal karena arah yang kurang jelas. Kami duduk bersama tim Anda untuk menyusun prioritas, memilih teknologi yang tepat, dan memastikan eksekusinya berjalan.',
    points: ['Penyusunan IT roadmap & prioritas', 'Audit infrastruktur dan proses', 'Pemilihan teknologi & vendor', 'Pendampingan tim internal'],
    deliverables: ['Peta jalan 12–24 bulan', 'Analisis biaya & manfaat', 'Rekomendasi arsitektur', 'Sesi pendampingan berkala'],
  },
  {
    slug: 'data-analyst',
    icon: 'chart',
    title: 'Data Analyst',
    short: 'Ubah data operasional menjadi laporan dan keputusan yang terukur.',
    description:
      'Data yang menumpuk tanpa diolah hanya menjadi beban. Kami rapikan, hubungkan, dan ubah data Anda menjadi dashboard yang mudah dibaca serta insight yang bisa langsung ditindaklanjuti.',
    points: ['Dashboard bisnis & KPI real-time', 'Pembersihan dan penggabungan data', 'Analisis tren & laporan berkala', 'Model prediksi sederhana'],
    deliverables: ['Dashboard interaktif', 'Kamus data & dokumentasi', 'Laporan analisis awal', 'Pelatihan penggunaan dashboard'],
  },
]

/* ============================== PRODUK ============================== */
export const products = [
  {
    slug: 'ita-panel',
    icon: 'server',
    title: 'ITA Panel',
    category: 'Panel Cloud',
    status: 'Tersedia',
    statusTone: 'green',
    description:
      'Platform pengelolaan server dan aplikasi berbasis cloud secara terpusat — pantau resource, deploy layanan, dan atur akses tim dari satu dasbor.',
    features: ['Monitoring CPU, RAM & storage', 'Manajemen akses berbasis peran', 'Deploy aplikasi satu klik', 'Notifikasi ambang batas otomatis'],
  },
  {
    slug: 'ita-pay',
    icon: 'card',
    title: 'ITA Pay',
    category: 'Pembayaran Digital',
    status: 'Tersedia',
    statusTone: 'green',
    description:
      'Sistem pembayaran tagihan dan transaksi digital yang cepat, aman, serta mudah diintegrasikan dengan sistem yang sudah Anda gunakan.',
    features: ['Multi kanal pembayaran', 'Rekonsiliasi otomatis', 'Riwayat transaksi & ekspor laporan', 'Webhook & API terdokumentasi'],
  },
  {
    slug: 'ita-learn',
    icon: 'book',
    title: 'ITA Learn',
    category: 'Learning Platform',
    status: 'Segera',
    statusTone: 'amber',
    description:
      'Platform bimbingan belajar dan pelatihan daring dengan kelas, tugas, kuis, serta laporan perkembangan peserta yang mudah dipantau.',
    features: ['Kelas daring & materi terstruktur', 'Kuis dan penilaian otomatis', 'Rapor perkembangan peserta', 'Pembayaran kelas terintegrasi'],
  },
  {
    slug: 'ita-pos',
    icon: 'store',
    title: 'ITA POS',
    category: 'Kasir & Inventori',
    status: 'Tersedia',
    statusTone: 'green',
    description:
      'Aplikasi kasir untuk UMKM dan toko ritel: catat penjualan, kelola stok, dan pantau laba harian langsung dari ponsel.',
    features: ['Transaksi cepat & mode offline', 'Stok multi gudang', 'Laporan penjualan harian', 'Cetak struk via Bluetooth'],
  },
]

/* ============================ PORTOFOLIO ============================ */
export const portfolioCategories = ['Semua', 'Web App', 'Mobile App', 'Sistem Informasi', 'Cloud & Data']

export const projects = [
  {
    slug: 'panel-cloud-nusantara',
    title: 'Panel Cloud Nusantara',
    category: 'Cloud & Data',
    tone: 'a',
    icon: 'server',
    year: '2025',
    client: 'Perusahaan Teknologi',
    description:
      'Dasbor terpusat untuk mengelola puluhan server pelanggan: pemantauan resource, penjadwalan cadangan, dan kontrol akses tim teknis dalam satu tempat.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    results: ['Waktu penanganan insiden turun 42%', 'Pemantauan 60+ server dari satu dasbor'],
  },
  {
    slug: 'reward-poin',
    title: 'Platform Reward Poin',
    category: 'Web App',
    tone: 'b',
    icon: 'gift',
    year: '2025',
    client: 'Retail & Loyalitas',
    description:
      'Platform loyalitas tempat pengguna mengumpulkan poin dari menyelesaikan tugas dan menukarkannya dengan hadiah, lengkap dengan panel mitra dan laporan penukaran.',
    stack: ['React', 'Laravel', 'MySQL', 'Redis'],
    results: ['30.000+ pengguna terdaftar', 'Tingkat retensi bulanan 61%'],
  },
  {
    slug: 'informasi-santri',
    title: 'Sistem Informasi Santri',
    category: 'Sistem Informasi',
    tone: 'c',
    icon: 'users',
    year: '2024',
    client: 'Lembaga Pendidikan',
    description:
      'Basis data terpusat untuk menyimpan dan mengelola data santri — pendaftaran, keuangan, absensi, dan rapor — dengan hak akses berlapis dan jejak audit.',
    stack: ['Laravel', 'MySQL', 'Bootstrap'],
    results: ['Administrasi manual berkurang 70%', '1.200+ data santri terkelola'],
  },
  {
    slug: 'dashboard-analitik-kesehatan',
    title: 'Dashboard Analitik Kesehatan',
    category: 'Cloud & Data',
    tone: 'd',
    icon: 'chart',
    year: '2024',
    client: 'Fasilitas Kesehatan',
    description:
      'Penggabungan data kunjungan dari beberapa cabang menjadi satu dashboard manajemen untuk memantau tren layanan, okupansi, dan efisiensi tenaga medis.',
    stack: ['Python', 'Metabase', 'PostgreSQL'],
    results: ['Pelaporan mingguan 5 jam → 10 menit', '8 indikator KPI dipantau real-time'],
  },
  {
    slug: 'portal-pembayaran-tagihan',
    title: 'Portal Pembayaran Tagihan',
    category: 'Web App',
    tone: 'a',
    icon: 'card',
    year: '2023',
    client: 'Penyedia Layanan',
    description:
      'Portal pembayaran tagihan pelanggan dengan multi kanal pembayaran, rekonsiliasi otomatis, serta notifikasi jatuh tempo melalui WhatsApp.',
    stack: ['React', 'Node.js', 'Midtrans', 'MySQL'],
    results: ['Transaksi berhasil naik 34%', 'Rekonsiliasi otomatis hemat 20 jam/bulan'],
  },
  {
    slug: 'kasir-umkm',
    title: 'Aplikasi Kasir UMKM',
    category: 'Mobile App',
    tone: 'b',
    icon: 'store',
    year: '2023',
    client: 'UMKM & Ritel',
    description:
      'Aplikasi kasir mobile untuk toko kelontong: pencatatan penjualan cepat, pengelolaan stok, dan laporan laba harian yang bisa dilihat langsung dari ponsel.',
    stack: ['Flutter', 'Laravel', 'SQLite'],
    results: ['Digunakan 400+ toko', 'Waktu transaksi turun 55%'],
  },
]

/* ================================ KLIEN ================================ */
export const clients = [
  'Nusantara Group',
  'Bank Mitra Rakyat',
  'Universitas Cendekia',
  'Sehatra Clinic',
  'Logistik Prima',
  'Pesantren Al-Hikmah',
  'Kopi Kita Nusantara',
  'Data Sinergi',
  'Kreatif Studio',
  'Yayasan Bina Insan',
  'Retail Amanah',
  'Toko Bangun Jaya',
]

/* ============================== TESTIMONI ============================== */
export const testimonials = [
  {
    quote:
      'Proses kerja timnya rapi dan komunikatif. Setiap minggu ada laporan kemajuan, jadi kami selalu tahu posisi proyek. Aplikasi rilis tepat waktu dan dipakai penuh oleh tim lapangan.',
    name: 'Andi Prasetyo',
    role: 'Manajer Operasional',
    initials: 'AP',
  },
  {
    quote:
      'Awalnya kami hanya minta website profil, tetapi tim ITA Digital membantu memetakan kebutuhan sistem internal yang jauh lebih mendesak. Hasilnya pekerjaan administrasi jadi jauh lebih ringkas.',
    name: 'Siti Nurhaliza',
    role: 'Direktur',
    initials: 'SN',
  },
  {
    quote:
      'Laporan audit keamanannya jelas — bukan sekadar daftar temuan, tetapi ada urutan prioritas perbaikan dan pendampingan sampai tuntas. Kami jadi jauh lebih tenang.',
    name: 'Bayu Ramadhan',
    role: 'Head of IT',
    initials: 'BR',
  },
]

/* ================================ PROSES ================================ */
export const process = [
  {
    title: 'Diskusi & Analisis',
    desc: 'Kami dengarkan masalah dan tujuan bisnis Anda, lalu petakan kebutuhan sistem secara tertulis dan terukur.',
  },
  {
    title: 'Desain & Arsitektur',
    desc: 'Alur pengguna dirancang, teknologi dipilih sesuai skala, dan estimasi waktu serta biaya disepakati bersama.',
  },
  {
    title: 'Pengembangan & Uji',
    desc: 'Pengerjaan berjalan dengan demo berkala setiap pekan, diuji fungsional maupun keamanannya sebelum rilis.',
  },
  {
    title: 'Peluncuran & Pendampingan',
    desc: 'Sistem dirilis, tim Anda dilatih, lalu kami dampingi perawatan dan pengembangan berikutnya.',
  },
]

/* ================================== FAQ ================================== */
export const faqs = [
  {
    q: 'Berapa lama waktu pengerjaan satu proyek?',
    a: 'Durasi sangat bergantung pada kompleksitas. Website profil sederhana umumnya 2–4 pekan, sedangkan sistem internal atau aplikasi dengan banyak peran pengguna berkisar 2–4 bulan. Setelah sesi diskusi awal, kami kirimkan estimasi waktu yang rinci per modul.',
  },
  {
    q: 'Bagaimana skema pembayarannya?',
    a: 'Pembayaran dibagi bertahap mengikuti titik serah terima proyek, umumnya 30% saat kesepakatan, 40% saat demo utama, dan 30% saat rilis. Tidak ada biaya tersembunyi di luar penawaran tertulis.',
  },
  {
    q: 'Apakah kode sumber dan data sepenuhnya milik kami?',
    a: 'Ya. Setelah pelunasan, seluruh kode sumber, aset desain, dan hak akses infrastruktur menjadi milik Anda. Kami juga menyiapkan dokumentasi dan server yang dipindahkan ke akun Anda.',
  },
  {
    q: 'Bagaimana kalau terjadi kendala setelah rilis?',
    a: 'Setiap proyek mendapat garansi perbaikan bug selama 3 bulan. Setelah itu tersedia paket pemeliharaan bulanan yang mencakup pembaruan keamanan, pencadangan, dan jam dukungan teknis.',
  },
  {
    q: 'Bisakah sistem lama kami diintegrasikan?',
    a: 'Bisa, selama sistem lama menyediakan akses data (API, file ekspor, atau basis data). Kami mulai dengan penilaian integrasi untuk memastikan risiko dan pendekatannya aman.',
  },
  {
    q: 'Apakah menerima pekerjaan dari luar kota?',
    a: 'Tentu. Sebagian besar klien kami berada di luar kota dan proses berjalan daring melalui rapat berkala. Untuk kebutuhan tertentu, kunjungan ke lokasi bisa dijadwalkan.',
  },
]

/* =========================== TENTANG PERUSAHAAN =========================== */
export const about = {
  intro:
    'ITA Digital adalah perusahaan teknologi yang berfokus pada pengembangan solusi digital inovatif. Kami membantu bisnis, lembaga pendidikan, dan instansi beradaptasi di era digital melalui teknologi yang tepat guna, modern, dan mudah diakses.',
  vision:
    'Menjadi mitra transformasi digital yang paling dipercaya di Indonesia — diakui karena kualitas hasil kerja, kejujuran proses, dan dampak nyata bagi pertumbuhan klien.',
  missions: [
    'Menghadirkan solusi digital yang benar-benar menyelesaikan masalah, bukan sekadar mengikuti tren teknologi.',
    'Menjaga keterbukaan proses: progres, biaya, dan risiko disampaikan apa adanya kepada klien.',
    'Membangun sistem yang aman, terukur, dan mudah dirawat agar tidak menimbulkan beban baru di kemudian hari.',
    'Menumbuhkan talenta digital lokal melalui pelatihan, pendampingan, dan pengerjaan proyek yang menantang.',
  ],
  values: [
    { icon: 'shield', title: 'Amanah', desc: 'Kami memperlakukan data dan sistem klien dengan standar tanggung jawab seperti milik sendiri.' },
    { icon: 'target', title: 'Tepat Guna', desc: 'Teknologi dipilih karena kebutuhan dan anggaran Anda, bukan karena sedang populer.' },
    { icon: 'sparkles', title: 'Rapi & Berkualitas', desc: 'Kode yang bersih, dokumentasi lengkap, dan hasil yang bisa dikembangkan orang lain.' },
    { icon: 'users', title: 'Kolaboratif', desc: 'Kami bekerja bersama tim Anda sebagai mitra, bukan sebagai pihak luar yang sesekali muncul.' },
    { icon: 'zap', title: 'Cepat Tanggap', desc: 'Keluhan dan permintaan dipercayakan pada jalur komunikasi yang jelas dengan waktu respons terukur.' },
    { icon: 'chart', title: 'Berorientasi Hasil', desc: 'Setiap proyek diukur dengan indikator yang disepakati sejak awal, bukan sekadar selesai dibangun.' },
  ],
  milestones: [
    { year: '2018', title: 'Lahir dari proyek kecil', desc: 'Dimulai oleh tim yang menangani pembuatan website dan sistem internal berbagai usaha di Surabaya.' },
    { year: '2020', title: 'Fokus ke sistem terintegrasi', desc: 'Mulai mengerjakan aplikasi berbasis peran pengguna untuk lembaga pendidikan dan penyedia layanan.' },
    { year: '2022', title: 'Layanan keamanan & data', desc: 'Menambah layanan audit keamanan serta analisis data untuk mendukung keputusan manajemen.' },
    { year: '2025', title: 'Produk digital sendiri', desc: 'Meluncurkan lini produk seperti ITA Panel, ITA Pay, dan ITA POS yang dipakai berbagai mitra.' },
  ],
  team: [
    { name: 'Nama Lengkap', role: 'Founder & Solution Architect', initials: 'NL' },
    { name: 'Nama Lengkap', role: 'Lead Software Engineer', initials: 'NL' },
    { name: 'Nama Lengkap', role: 'UI/UX Designer', initials: 'NL' },
    { name: 'Nama Lengkap', role: 'Security & Data Analyst', initials: 'NL' },
  ],
}

/* ============================== TEKNOLOGI ============================== */
export const techStack = [
  'React',
  'Vue',
  'Node.js',
  'Laravel',
  'Flutter',
  'Python',
  'Go',
  'PostgreSQL',
  'MySQL',
  'Redis',
  'Docker',
  'Kubernetes',
  'Nginx',
  'AWS',
  'Cloudflare',
  'Metabase',
]

/* ============================ NAVIGASI MENU ============================ */
export const navLinks = [
  { to: '/', label: 'Beranda' },
  { to: '/layanan', label: 'Layanan' },
  { to: '/produk', label: 'Produk' },
  { to: '/portofolio', label: 'Portofolio' },
  { to: '/tentang', label: 'Tentang' },
  { to: '/kontak', label: 'Kontak' },
]
