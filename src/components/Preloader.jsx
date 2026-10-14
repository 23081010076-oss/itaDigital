import { useEffect, useState } from 'react'
import { LogoMark } from './Logo.jsx'
import { site } from '../data/site.js'

/* Layar pembuka: lambang membesar, tagline menyusul, bilah memuat terisi,
   lalu seluruh layar memudar. Dihilangkan sama sekali kalau pengunjung
   memilih mengurangi animasi.

   Catatan: acuan memakai 3 detik. Di sini dipersingkat jadi sekitar 1 detik
   supaya tidak menahan orang menunggu. Ubah `DURATION` kalau ingin persis. */
const DURATION = 1100

export default function Preloader() {
  const [hidden, setHidden] = useState(false)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduce) {
      setGone(true)
      return
    }

    const timer = setTimeout(() => setHidden(true), DURATION)
    const cleanup = setTimeout(() => setGone(true), DURATION + 900)

    return () => {
      clearTimeout(timer)
      clearTimeout(cleanup)
    }
  }, [])

  if (gone) return null

  return (
    <div className={`preloader${hidden ? ' is-hidden' : ''}`} aria-hidden="true">
      <LogoMark size={62} tone="light" className="preloader__mark" />
      <p className="preloader__text">{site.tagline}</p>
      <span className="preloader__bar">
        <span />
      </span>
    </div>
  )
}
