import { useState } from 'react'
import { ImageIcon } from './Icons.jsx'

/* Kotak gambar. Berkasnya dicari di `public/`.
   Keterangan slot ditampilkan LEBIH DULU, dan gambar baru menimpa setelah
   benar-benar berhasil dimuat. Jadi:
   - kalau berkasnya belum ada, yang tampil keterangan berkasnya, bukan kotak kosong;
   - pemuatan tetap bisa ditunda (lazy) tanpa membuat slot tampak rusak. */
export default function ImageSlot({ src, alt, note, className = '' }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={`shot${className ? ` ${className}` : ''}`}>
      <img src={`./${src}`} alt={alt} loading="lazy" onLoad={() => setLoaded(true)} />

      {!loaded && (
        <div className="shot__ph">
          <ImageIcon size={22} />
          <span className="shot__label">Slot gambar</span>
          <span className="shot__file">{src}</span>
          {note && <span className="shot__hint">{note}</span>}
        </div>
      )}
    </div>
  )
}
