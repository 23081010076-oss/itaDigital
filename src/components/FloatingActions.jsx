import { useEffect, useState } from 'react'
import { ArrowUp, WhatsApp } from './Icons.jsx'
import { waLink } from '../data/site.js'

/** Tombol WhatsApp mengambang + tombol kembali ke atas. */
export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 620)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <a
        className="fab-wa"
        href={waLink()}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Hubungi kami melalui WhatsApp"
      >
        <WhatsApp size={28} />
        <span className="fab-wa__label">Chat dengan kami</span>
      </a>

      <button
        type="button"
        className={`to-top${showTop ? ' is-visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Kembali ke atas"
      >
        <ArrowUp size={20} />
      </button>
    </>
  )
}
