import { ArrowUp, WhatsApp } from './Icons.jsx'
import { useEffect, useState } from 'react'
import { waLink } from '../data/site.js'

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <a
        className="fab"
        href={waLink()}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Hubungi kami melalui WhatsApp"
      >
        <WhatsApp size={24} />
        <span className="fab__label">Chat WhatsApp</span>
      </a>

      <button
        type="button"
        className={`to-top${showTop ? ' is-visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Kembali ke atas"
      >
        <ArrowUp size={18} />
      </button>
    </>
  )
}
