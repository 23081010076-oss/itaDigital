import { clients } from '../data/site.js'

/** Inisial untuk kotak logo klien (tanpa perlu file gambar). */
const initialsOf = (name) =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase()

/** Baris logo klien berjalan otomatis (marquee). */
export default function ClientMarquee({ reverse = false, items = clients }) {
  // Daftar digandakan agar animasi berjalan mulus tanpa jeda
  const doubled = [...items, ...items]

  return (
    <div className={`marquee${reverse ? ' marquee--reverse' : ''}`}>
      <div className="marquee__track">
        {doubled.map((client, index) => (
          <div className="marquee__item" key={`${client}-${index}`}>
            <span className="marquee__logo">{initialsOf(client)}</span>
            <span className="marquee__name">{client}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
