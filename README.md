# ITA Digital — Landing Page

Satu halaman profil perusahaan untuk **ITA Digital**, dibangun dengan **Vite + React**.
Tanpa router dan tanpa halaman lain. Susunan bagiannya mengikuti acuan
**nalartech.id**, dengan warna brand ITA Digital (merah/hitam).

```
Header → Hero (teks + gambar) → Layanan (4 kartu) → Produk (3 kartu bergambar)
      → Portofolio (4 kartu bergambar) → Klien (dinding nama) → Ajakan
      → Hubungi Kami (formulir + kontak) → Footer
```

---

## 1. Fitur

- Satu halaman, satu tujuan: mengundang calon klien menghubungi lewat
  formulir atau WhatsApp.
- Menu atas melompat ke bagian halaman; bagian yang sedang terlihat ditandai.
- **Efek mengikuti acuan**: layar pembuka, muncul saat scroll, kartu yang
  terangkat saat disentuh, gambar yang membesar, dan dua baris klien berjalan.
  Semuanya berhenti sendiri kalau pengunjung memilih mengurangi animasi.
- **Slot gambar jujur.** Halaman belum memakai gambar apa pun. Selama berkas
  gambarnya belum ada di `public/images/`, yang tampil adalah keterangan nama
  berkas yang diharapkan. Begitu berkasnya disimpan dengan nama yang sama,
  gambarnya langsung muncul — tanpa perlu mengubah kode.
- Formulir dengan validasi; pesannya diteruskan ke WhatsApp.
- Ikon SVG seperlunya (bukan emoji, tanpa paket ikon eksternal).
- Responsif: desktop, tablet, dan mobile (menu drawer).
- Menghormati `prefers-reduced-motion`.

> ⚠️ **Data yang masih CONTOH:** produk, proyek, klien, dan alamat. Semuanya
> diubah dari `src/data/site.js`. Keterangan "masih contoh" ditulis sebagai teks
> biasa di halaman dan bisa dihapus setelah data asli masuk.

---

## 2. Menjalankan

Butuh **Node.js 18 atau lebih baru**.

```bash
npm install     # sekali saja
npm run dev     # http://localhost:5173
npm run build   # hasil produksi ke folder dist/
npm run preview # mencoba hasil build, http://localhost:4173
```

---

## 3. Struktur Folder

```
itaDigital/
├─ index.html                  # kerangka HTML (meta SEO, Google Fonts)
├─ vite.config.js              # base relatif supaya dist bisa dibuka dari mana saja
├─ public/
│  ├─ favicon.svg · logo.svg · logo-white.svg
│  └─ images/
│     └─ README.md             # daftar berkas gambar yang diharapkan
├─ tools/
│  └─ shot.mjs                 # opsional: tangkapan layar lewat Chrome headless
├─ src/
│  ├─ main.jsx                 # entry point React
│  ├─ App.jsx                  # Navbar + Landing + Footer
│  ├─ data/
│  │  └─ site.js               # ⭐ SEMUA ISI DIUBAH DI SINI
│  ├─ pages/
│  │  └─ Landing.jsx           # seluruh bagian halaman, berurutan
│  ├─ components/
│  │  ├─ Logo.jsx · Icons.jsx
│  │  ├─ Navbar.jsx            # header, menu lompat bagian, drawer mobile
│  │  ├─ ServiceCard.jsx · ProductCard.jsx · ProjectCard.jsx
│  │  ├─ ClientWall.jsx        # dinding nama klien
│  │  ├─ ImageSlot.jsx         # kotak gambar dengan keterangan berkas
│  │  ├─ CtaBand.jsx · ContactSection.jsx
│  │  └─ Footer.jsx · FloatingActions.jsx
│  └─ styles/
│     ├─ tokens.css            # warna, huruf, kartu, tombol, utilitas
│     ├─ components.css        # header, footer, slot gambar, dinding logo, formulir
│     └─ pages.css             # hero, kartu layanan, penutup, kontak
└─ dist/                       # hasil build
```

---

## 4. Mengubah Konten

Semua isi diambil dari **`src/data/site.js`**.

| Yang diubah | Bagian di `site.js` |
| --- | --- |
| Nama, tagline, judul utama, kalimat pembuka | `site` |
| Email, WhatsApp, alamat, jam layanan | `site` |
| Berkas gambar hero | `site.heroImage` |
| Media sosial di footer | `site.socials` |
| Menu lompat bagian | `sections` |
| Empat layanan | `services` |
| Produk (kartu bergambar) | `products` |
| Proyek (kartu bergambar) | `projects` |
| Nama klien | `clients` |
| Daftar perangkat kerja | `techStack` |

Catatan:

- **Nomor WhatsApp** harus format internasional tanpa `+` dan tanpa spasi,
  contoh `6281234567890`.
- Butuh menambah produk atau proyek? Cukup tambah satu objek baru di array
  `products` / `projects`; tata letaknya menyesuaikan sendiri.

---

## 5. Menambahkan Gambar

Tabel lengkap nama berkas ada di **`public/images/README.md`**. Ringkasnya:

| Berkas | Dipakai di | Rasio |
| --- | --- | --- |
| `hero.png` | Gambar utama di hero | 4:3 |
| `produk-panel.png`, `produk-pay.png`, `produk-pos.png` | Kartu produk | 16:10 |
| `proyek-1.png` sampai `proyek-4.png` | Kartu portofolio | 4:3 |

Cukup simpan berkasnya dengan nama tersebut, lalu jalankan ulang
`npm run dev` atau `npm run build`. Tidak ada kode yang perlu diubah.

Untuk logo klien: nama klien saat ini tampil sebagai teks. Cara menggantinya
dengan berkas logo dijelaskan di `public/images/README.md`.

---

## 6. Mengganti Logo dengan File Asli

**Pilihan A — tetap memakai SVG.** Sunting `public/logo.svg`,
`public/logo-white.svg`, `public/favicon.svg`, atau `src/components/Logo.jsx`.

**Pilihan B — memakai file PNG/JPG asli.**

1. Simpan berkasnya, misal `public/logo.png` (dan `public/logo-putih.png` bila perlu).
2. Ganti isi `LogoMark` di `src/components/Logo.jsx` menjadi:

   ```jsx
   export function LogoMark({ size = 40, tone = 'ink', className = '' }) {
     return (
       <img
         src={tone === 'light' ? './logo-putih.png' : './logo.png'}
         alt="Logo ITA Digital"
         width={size}
         height={size}
         className={className}
       />
     )
   }
   ```

3. Ganti `public/favicon.svg` dengan `public/favicon.png` dan perbarui
   `<link rel="icon" ...>` di `index.html`.

---

## 7. Catatan Desain

Acuan tata letak: **nalartech.id** (hero teks + gambar, kartu layanan gelap,
produk, portofolio bergambar, dinding logo klien, penutup ajakan).
Yang dipakai dari acuan itu adalah **susunan bagiannya**, bukan warnanya.

**Warna brand ITA Digital** (merah dari logo), diatur di `src/styles/tokens.css`:

```css
--ink: #121212;        /* teks */
--ink-soft: #4a4a48;   /* teks penjelas */
--muted: #6b6b63;      /* keterangan kecil */
--line: #e7e7e3;       /* garis dan tepi kartu */
--tint: #f7f7f5;       /* latar bagian selang-seling */
--dark: #17171a;       /* kartu layanan, blok ajakan, footer */
--red: #e11d2e;        /* aksen dari logo */
--red-deep: #cf1020;   /* tombol bertulisan putih, kontras 5.6:1 */
```

Hijau WhatsApp (`#25d366`) dipakai khusus di tombol mengambang supaya langsung
dikenali; sisanya tetap merah.

**Huruf.** Satu keluarga, dua bobot: `Archivo` 800 untuk judul, 400/600 untuk
teks dan label. Tidak ada huruf ketiga, dan judul tidak dibuat kapital semua.

**Geometri.** Sudut punya tiga tingkat, bukan satu nilai untuk semua:

| Nilai | Dipakai untuk |
| --- | --- |
| `--r-sm` (10px) | kolom isian, tombol kecil, chip |
| `--r-md` (16px) | kartu, panel, kotak gambar |
| `--r-pill` | tombol, lencana ikon, chip |

Bayangan bersifat halus dan hanya muncul di kartu serta panel, supaya kartu
tetap terbaca sebagai lapisan di atas latar. Tidak ada gradien warna.

**Diperiksa sebelum dikirim** (hasil pengukuran, bukan klaim): kontras teks
18,7:1 (judul), 8,9:1 (teks penjelas), 17,9:1 (teks di blok gelap),
5,6:1 (tautan merah), 5,0:1 (keterangan kecil). Semuanya di atas ambang WCAG AA.

### Efek dan animasi

Efeknya disamakan dengan acuan. Semua ada di `src/styles/` kecuali layar
pembuka dan pemunculan saat scroll yang memakai komponen React.

| Efek | Di acuan | Di sini |
| --- | --- | --- |
| Layar pembuka | Logo membesar, tagline menyusul, bilah memuat terisi, lalu memudar (total ±3 detik) | Sama, durasi dipersingkat jadi ±1 detik lewat konstanta `DURATION` di `Preloader.jsx` |
| Muncul saat scroll | `.fade-element`: naik 40px, mengecil 0,98, memudar masuk, 0,8 detik, jeda bertingkat | Sama. Diterapkan per bagian dan per kartu dengan jeda 120 ms bertingkat (`Reveal.jsx`) |
| Kartu layanan disentuh | Terangkat 10px + membesar 1,05, sorotan muncul, ikon membesar 1,15 sambil miring 5° dan bercahaya | Sama, bayangannya diwarnai merah brand |
| Kartu produk disentuh | Gambar membesar | Sama (gambar membesar 1,06) |
| Kartu portofolio disentuh | Terangkat + bayangan menguat | Sama (terangkat 8px) |
| Klien | Dua baris berjalan berlawanan arah, 30 detik, logo membesar saat disentuh | Sama |
| Tombol bundar | Meluncur turun + memudar saat discroll | Sama, pada tombol kembali ke atas |
| Tombol | Transisi halus | Sama, tapi propertinya ditulis eksplisit, bukan `transition: all` |

Perbedaan yang disengaja:

1. **Layar pembuka 3 detik dipersingkat** jadi sekitar 1 detik supaya tidak
   menahan pengunjung. Ubah `DURATION` di `src/components/Preloader.jsx` bila
   ingin persis seperti acuan.
2. **Tidak ada logo melayang ganda**, karena header di sini sudah menempel di
   atas sehingga logo selalu terlihat.
3. **Pemudaran diterapkan pada isi bagian**, bukan pada seluruh pita warna,
   supaya latarnya tidak ikut berkedip.
4. **Latar layar pembuka rata**, bukan gradien, mengikuti aturan warna brand.
5. Pengunjung yang mengaktifkan *reduce motion* melewati layar pembuka dan
   langsung melihat isi tanpa animasi.

Bukti pengukuran saat kartu layanan disentuh: `scale(1.05) translateY(-10px)`,
bayangan `rgba(207,16,32,.35) 0 12px 25px`, ikon `scale(1.15) rotate(5deg)`
dengan `drop-shadow(0 0 10px rgba(255,255,255,.45))`.

---

## 8. Publikasi (Deploy)

```bash
npm run build
```

Unggah isi folder `dist/` ke hosting. Karena tanpa router:

- Tidak perlu konfigurasi rewrite atau `.htaccess`.
- Bisa di domain utama maupun di dalam subfolder.
- Bisa dibuka langsung dari berkas `dist/index.html`.
- Netlify: *publish directory* = `dist`. Vercel: framework Vite terdeteksi otomatis.

---

## 9. Catatan Pengembangan

- Formulir belum mengirim ke server atau basis data; pesannya diteruskan ke
  WhatsApp. Ingin masuk ke email atau database? Hubungkan `handleSubmit` di
  `src/components/ContactSection.jsx` ke Formspree, EmailJS, atau API sendiri.
- Ingin memeriksa tampilan tanpa membuka browser? Jalankan `npm run preview`
  di satu terminal, lalu `node tools/shot.mjs "#/"` di terminal lain.
  Hasilnya tersimpan di folder `shots/`. Skrip ini butuh Google Chrome
  (ubah `CHROME_PATH` bila lokasinya berbeda).
- Menambah bagian: buat komponennya di `src/components/`, pasang di
  `src/pages/Landing.jsx`, lalu tambahkan id-nya ke `sections` di
  `src/data/site.js` agar masuk menu.
- Kelas utilitas yang tersedia: `.container`, `.sec`, `.sec--tint`, `.grid`,
  `.grid--2/3/4`, `.grid--duo`, `.card`, `.btn`, `.chip`, `.badge`, `.panel`,
  `.lead`, `.note`, `.label`, `.sec__head`, `.tick-list`.
