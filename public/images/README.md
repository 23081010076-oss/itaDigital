# Folder gambar

Simpan berkas gambar di sini dengan nama yang sama seperti yang tertulis di
`src/data/site.js`. Selama berkasnya belum ada, halaman menampilkan kotak
keterangan "Slot gambar" (bukan gambar palsu), jadi tidak ada yang rusak.

| Berkas | Dipakai di | Rasio yang disarankan |
| --- | --- | --- |
| `hero.png` | Gambar utama di hero | 4:3 (mis. 1200x900) |
| `produk-panel.png` | Kartu produk ITA Panel | 16:10 (mis. 1280x800) |
| `produk-pay.png` | Kartu produk ITA Pay | 16:10 |
| `produk-pos.png` | Kartu produk ITA POS | 16:10 |
| `proyek-1.png` | Portofolio 1 (Panel Cloud Nusantara) | 4:3 |
| `proyek-2.png` | Portofolio 2 (Platform Reward Poin) | 4:3 |
| `proyek-3.png` | Portofolio 3 (Sistem Informasi Santri) | 4:3 |
| `proyek-4.png` | Portofolio 4 (Portal Pembayaran Tagihan) | 4:3 |

Ingin menambah atau mengganti nama berkas? Ubah nilai `image` pada `products`
dan `projects`, serta `site.heroImage`, di `src/data/site.js`.

## Logo klien

Nama klien saat ini ditampilkan sebagai teks di bagian "Klien Kami".
Kalau sudah punya berkas logonya, simpan di sini (mis. `klien-1.png`), lalu ubah
`src/components/ClientWall.jsx` menjadi:

```jsx
const logos = [
  { name: 'Nusantara Group', file: 'images/klien-1.png' },
  // ...
]

export default function ClientWall() {
  return (
    <div className="wall">
      {logos.map((logo) => (
        <span className="wall__tile" key={logo.name}>
          <img src={`./${logo.file}`} alt={logo.name} height="40" />
        </span>
      ))}
    </div>
  )
}
```
