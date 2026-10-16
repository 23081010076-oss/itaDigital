/* =========================================================================
   PUSAT DATA :: ITA DIGITAL
   -------------------------------------------------------------------------
   Seluruh isi halaman diambil dari berkas ini.
   Data CONTOH: produk, proyek, klien, dan alamat. Ganti dengan data asli,
   lalu hapus keterangan "contoh" yang ada di halaman.

   Gambar: simpan berkas di folder `public/images/` dengan nama yang sama
   seperti yang tertulis di bawah (mis. `images/hero.png`). Selama berkasnya
   belum ada, halaman menampilkan kotak slot gambar, bukan gambar palsu.
   ========================================================================= */

export const site = {
  name: 'ITA Digital',
  nameFirst: 'ITA',
  nameSecond: 'DIGITAL',
  tagline: 'Digital solutions that move business forward',
  taglineId: 'Solusi digital untuk bisnis',

  headline: 'Transform Your Business with Intelligent Digital Solutions.',
  lead: 'Kami membantu bisnis beradaptasi di era digital melalui teknologi yang tepat guna, inovatif, dan dirancang untuk mendorong efisiensi.',

  summary:
    'Perusahaan teknologi yang berfokus pada pengembangan solusi digital: software, keamanan siber, konsultasi TI, dan pengolahan data.',

  /* --- Kontak: ganti dengan data asli --- */
  email: 'hello@itadigital.id',
  phoneDisplay: '+62 812-3456-7890',
  whatsapp: '6281234567890', // format internasional tanpa tanda +
  address: 'Jl. Contoh Raya No. 123, Sukolilo, Surabaya, Jawa Timur 60111',
  city: 'Surabaya, Jawa Timur',
  hours: 'Senin sampai Jumat, 09.00 sampai 18.00 WIB',
  mapsUrl: 'https://maps.google.com/?q=Surabaya',

  socials: [
    { name: 'Instagram', icon: 'instagram', href: 'https://instagram.com/' },
    { name: 'LinkedIn', icon: 'linkedin', href: 'https://linkedin.com/' },
    { name: 'Facebook', icon: 'facebook', href: 'https://facebook.com/' },
  ],

  /* Gambar hero */
  heroImage: 'images/hero-devices.png',
  heroImageNote: 'Perangkat kerja digital ITA Digital.',
}

/** Tautan WhatsApp siap pakai, lengkap dengan pesan otomatis. */
export const waLink = (message) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    message || `Halo ${site.name}, saya ingin berkonsultasi mengenai kebutuhan sistem di tempat saya.`,
  )}`

/* Menu melompat ke bagian halaman */
export const sections = [
  { id: 'layanan', label: 'Layanan' },
  { id: 'portofolio', label: 'Portofolio' },
  { id: 'klien', label: 'Klien' },
  { id: 'kontak', label: 'Kontak' },
]

/* ============================== LAYANAN ============================== */
export const services = [
  {
    icon: 'code',
    title: 'Company Profile',
    line: 'Tampilkan profil bisnis, layanan, dan keunggulan Anda dengan profesional dan terpercaya.',
  },
  {
    icon: 'compass',
    title: 'Landing Page',
    line: 'Halaman promosi yang fokus pada produk, layanan, atau kampanye bisnis Anda.',
  },
  {
    icon: 'chart',
    title: 'Website Pendidikan',
    line: 'Website sekolah atau kampus untuk profil institusi, informasi akademik, dan penerimaan siswa baru.',
  },
]

/* ============================== PRODUK ============================== */
export const products = [
  {
    title: 'ITA Panel',
    kind: 'Panel cloud',
    status: 'Tersedia',
    line: 'Pantau resource server, deploy layanan, dan atur akses tim dari satu dasbor.',
    image: 'images/produk-panel.png',
  },
  {
    title: 'ITA Pay',
    kind: 'Pembayaran tagihan',
    status: 'Tersedia',
    line: 'Multi kanal pembayaran, rekonsiliasi otomatis, dan riwayat transaksi.',
    image: 'images/produk-pay.png',
  },
  {
    title: 'ITA POS',
    kind: 'Kasir dan inventori',
    status: 'Tersedia',
    line: 'Transaksi cepat, stok multi gudang, dan laporan penjualan harian.',
    image: 'images/produk-pos.png',
  },
]

/* ============================ PORTOFOLIO ============================ */
export const projects = [
  {
    title: 'Panel Cloud Nusantara',
    category: 'Cloud',
    year: '2025',
    line: 'Dasbor untuk memantau puluhan server pelanggan dan mengatur akses tim teknis.',
    image: 'images/proyek-1.png',
  },
  {
    title: 'Platform Reward Poin',
    category: 'Web App',
    year: '2025',
    line: 'Pengumpulan poin dari tugas, penukaran hadiah, dan panel mitra.',
    image: 'images/proyek-2.png',
  },
  {
    title: 'Sistem Informasi Santri',
    category: 'Sistem Informasi',
    year: '2024',
    line: 'Pendaftaran, keuangan, absensi, dan rapor dalam satu basis data berlapis.',
    image: 'images/proyek-3.png',
  },
  {
    title: 'Portal Pembayaran Tagihan',
    category: 'Web App',
    year: '2024',
    line: 'Pembayaran multi kanal dengan rekonsiliasi otomatis dan pengingat jatuh tempo.',
    image: 'images/proyek-4.png',
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

/* ============================ PERANGKAT KERJA ============================ */
export const techStack = [
  'React',
  'Node.js',
  'Laravel',
  'Flutter',
  'Python',
  'Go',
  'PostgreSQL',
  'MySQL',
  'Redis',
  'Docker',
  'Nginx',
]
