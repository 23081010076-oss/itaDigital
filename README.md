# ITA Digital — Website Company Profile

Website profil perusahaan **ITA Digital** yang dibangun dengan **Vite + React**.
Struktur dan alur halaman mengikuti pola web company profile pada umumnya:
Beranda → Layanan → Produk → Portofolio → Tentang → Kontak.

> ⚠️ **Seluruh isi konten (email, nomor WhatsApp, alamat, layanan, produk, portofolio,
> testimoni, harga) masih berupa CONTOH/placeholder.** Semuanya diubah dari satu file:
> `src/data/site.js`.

---

## 1. Fitur

- 6 halaman lengkap + halaman 404, memakai React Router (`react-router-dom`).
- Desain responsif: desktop, tablet, dan mobile (menu drawer untuk layar kecil).
- Logo SVG (lambang + tulisan) yang dibuat ulang dari logo asli — tampil tajam di semua ukuran.
- Animasi halus: scroll reveal, angka berhitung naik, marquee logo klien, hover card.
- Tanpa dependensi UI berat — CSS ditulis sendiri, ikon inline SVG (tidak ada request ikon eksternal).
- Tombol WhatsApp mengapung, tombol kembali ke atas, form kontak dengan validasi.
- Hasil build bisa dibuka langsung dari `dist/index.html` maupun diletakkan di subfolder hosting.

---

## 2. Menjalankan Proyek

Butuh **Node.js 18 atau lebih baru**.

```bash
npm install        # sekali saja, memasang dependensi
npm run dev        # menjalankan server pengembangan → http://localhost:5173
```

Perintah lainnya:

```bash
npm run build      # membangun versi produksi ke folder dist/
npm run preview    # mencoba hasil build secara lokal → http://localhost:4173
```

---

## 3. Struktur Folder

```
itaDigital/
├─ index.html                  # kerangka HTML (meta SEO, Google Fonts)
├─ vite.config.js              # konfigurasi Vite (base relatif, port dev 5173)
├─ public/
│  ├─ favicon.svg              # ikon tab browser
│  ├─ logo.svg                 # logo lengkap (latar terang)
│  └─ logo-white.svg           # logo lengkap (latar gelap)
├─ src/
│  ├─ main.jsx                 # entry point + HashRouter
│  ├─ App.jsx                  # susunan layout & daftar rute halaman
│  ├─ data/
│  │  └─ site.js               # ⭐ SEMUA KONTEN WEBSITE DIUBAH DI SINI
│  ├─ components/              # komponen yang dipakai berulang
│  │  ├─ Logo.jsx              # lambang + tulisan ITA DIGITAL (SVG)
│  │  ├─ Icons.jsx             # kumpulan ikon SVG
│  │  ├─ Navbar.jsx            # header + menu mobile
│  │  ├─ Footer.jsx            # footer 4 kolom
│  │  ├─ HeroMock.jsx          # mockup dashboard di hero beranda
│  │  ├─ ServiceCard.jsx · ProductCard.jsx · ProjectCard.jsx
│  │  ├─ SectionHeading.jsx · PageHero.jsx · CtaBand.jsx
│  │  ├─ ClientMarquee.jsx · Faq.jsx · Counter.jsx · Reveal.jsx
│  │  └─ FloatingActions.jsx   # tombol WhatsApp & kembali ke atas
│  ├─ pages/                   # satu file per halaman
│  │  ├─ Home.jsx · Services.jsx · Products.jsx
│  │  ├─ Portfolio.jsx · About.jsx · Contact.jsx · NotFound.jsx
│  └─ styles/
│     ├─ tokens.css            # warna, font, tombol, utilitas
│     ├─ components.css        # header, footer, kartu, form, FAQ
│     └─ pages.css             # tata letak khusus tiap halaman
└─ dist/                       # hasil build (dibuat oleh npm run build)
```

---

## 4. Mengubah Konten

Buka **`src/data/site.js`** — semua bagian website mengambil data dari sana.

| Yang ingin diubah | Bagian di `site.js` |
| --- | --- |
| Nama, tagline, email, WhatsApp, alamat, jam kerja | `site` |
| Akun media sosial di footer | `site.socials` |
| Angka pencapaian di beranda & halaman Tentang | `site.stats` |
| 4 layanan (judul, deskripsi, fitur, hasil serah terima) | `services` |
| Produk siap pakai | `products` |
| Proyek portofolio + kategori filter | `projects`, `portfolioCategories` |
| Daftar nama klien (marquee) | `clients` |
| Testimoni klien | `testimonials` |
| Alur kerja 4 tahap | `process` |
| Pertanyaan umum (FAQ) | `faqs` |
| Profil, visi, misi, nilai, sejarah, tim | `about` |
| Daftar teknologi | `techStack` |
| Menu navigasi | `navLinks` |

Catatan penting:

- **Nomor WhatsApp** harus format internasional tanpa `+` dan tanpa spasi,
  contoh: `6281234567890` (bukan `+62 812-3456-7890`).
- Harga pada halaman Produk diatur di `src/pages/Products.jsx` (konstanta `plans`).
- Foto/logo klien belum memakai file gambar — ditampilkan sebagai kotak inisial.
  Ingin memakai gambar? Simpan file di `public/` lalu ganti isi `ClientMarquee.jsx`.

---

## 5. Mengganti Logo dengan File Asli

Logo saat ini adalah **rekreasi vektor** yang dibuat ulang agar serupa dengan logo asli.

**Pilihan A — tetap memakai SVG (disarankan, paling tajam).**
Ubah `src/components/Logo.jsx`, atau sunting berkas SVG di `public/logo.svg`,
`public/logo-white.svg`, dan `public/favicon.svg`.

**Pilihan B — memakai file PNG/JPG logo asli.**
1. Simpan file Anda, misal `public/logo.png`.
2. Buka `src/components/Logo.jsx`, lalu ganti isi komponen `LogoMark` menjadi:

   ```jsx
   export function LogoMark({ size = 44, className = '' }) {
     return (
       <img src="./logo.png" alt="Logo ITA Digital" width={size} height={size} className={className} />
     )
   }
   ```

3. Ganti juga `public/favicon.svg` dengan `public/favicon.png`, lalu perbarui
   baris `<link rel="icon" ...>` di `index.html`.

---

## 6. Mengubah Warna & Tipografi

Warna brand merah/hitam diambil dari logo dan dikumpulkan sebagai variabel CSS
di bagian atas `src/styles/tokens.css`:

```css
--red-500: #e11d2e;   /* merah utama */
--ink-900: #08080a;   /* hitam utama  */
--bg-soft: var(--gray-50);
```

Ubah variabel tersebut dan seluruh website (tombol, badge, gradien, grafik)
ikut berubah. Font memakai Google Fonts (Poppins + Inter) yang dimuat di `index.html`.

---

## 7. Publikasi (Deploy)

Jalankan `npm run build`, lalu unggah **isi folder `dist/`** ke hosting.

Aplikasi memakai **HashRouter** (`/#/layanan`) dan `base` relatif, artinya:

- Tidak perlu konfigurasi rewrite/`.htaccess` — halaman tidak akan error 404 saat di-refresh.
- Bisa diletakkan di domain utama **atau** di dalam subfolder, misal `itadigital.id/web`.
- Bahkan bisa dibuka langsung dari berkas `dist/index.html` di komputer.

**GitHub Pages / Netlify / Vercel:** cukup arahkan ke folder `dist`
(Netlify: *publish directory* = `dist`; Vercel: framework *Vite* terdeteksi otomatis).

### Ingin URL tanpa tanda `#`?

Ganti `HashRouter` menjadi `BrowserRouter` di `src/main.jsx`:

```jsx
import { BrowserRouter } from 'react-router-dom'
...
<BrowserRouter>
  <App />
</BrowserRouter>
```

Konsekuensinya server harus mengarahkan semua rute ke `index.html`.
Untuk hosting cPanel/Apache, buat file `dist/.htaccess`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## 8. Catatan Pengembangan

- Sass/Less tidak dipakai; seluruh gaya memakai CSS biasa dengan variabel.
- Data form kontak belum dikirim ke server/database. Saat ini pesan **diteruskan ke WhatsApp**
  klien agar langsung terjawab. Ingin dikirim ke email/database? Hubungkan fungsi
  `handleSubmit` di `src/pages/Contact.jsx` ke layanan seperti Formspree, EmailJS, atau API sendiri.
- Belum ada halaman blog/karier. Bisa ditambahkan dengan membuat file baru di `src/pages/`
  lalu mendaftarkannya di `src/App.jsx` dan `navLinks` pada `src/data/site.js`.
