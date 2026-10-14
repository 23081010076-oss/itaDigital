import { clients } from '../data/site.js'

/* Dua baris nama klien yang berjalan berlawanan arah, seperti pada acuan.
   Isinya digandakan supaya putarannya tidak terputus. Nama ditampilkan
   sebagai teks karena berkas logo asli belum ada; kalau logo sudah tersedia,
   ganti isi `.slider__tile` dengan <img>. */
export default function ClientSlider({ items = clients }) {
  const half = Math.ceil(items.length / 2)
  const rows = [items.slice(0, half), items.slice(half)]

  return (
    <div className="sliders">
      {rows.map((row, index) => (
        <div className={`slider${index === 1 ? ' slider--reverse' : ''}`} key={index}>
          <div className="slider__track">
            {[...row, ...row].map((client, i) => (
              <span className="slider__item" key={`${client}-${i}`}>
                <span className="slider__tile">{client}</span>
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
