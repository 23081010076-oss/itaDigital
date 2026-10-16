import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'
import { ArrowRight, Close, Mail, Menu, Phone, WhatsApp } from './Icons.jsx'
import { sections, site, waLink } from '../data/site.js'

/* Header satu halaman. Tautan menunjuk ke bagian di halaman yang sama dan
   bagian yang sedang terlihat ditandai garis merah. */
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const targets = sections.map((section) => document.getElementById(section.id)).filter(Boolean)
    if (!targets.length || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )

    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (event) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a href="#top" aria-label={`${site.name}, kembali ke atas`}>
            <Logo tone="light" showTagline={false} />
          </a>

          <nav className="nav" aria-label="Bagian halaman">
            <ul className="nav__list">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    className={`nav__link${active === section.id ? ' is-active' : ''}`}
                    href={`#${section.id}`}
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header__actions">
            <button
              type="button"
              className="nav-toggle"
              aria-label="Buka menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      <div className={`drawer${open ? ' is-open' : ''}`} aria-hidden={!open}>
        <div className="drawer__overlay" onClick={() => setOpen(false)} />

        <aside className="drawer__panel" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="drawer__head">
            <Logo size={34} showTagline={false} />
            <button
              type="button"
              className="drawer__close"
              aria-label="Tutup menu"
              onClick={() => setOpen(false)}
            >
              <Close size={18} />
            </button>
          </div>

          <nav className="drawer__nav" aria-label="Bagian halaman">
            {sections.map((section) => (
              <a
                key={section.id}
                className={`drawer__link${active === section.id ? ' is-active' : ''}`}
                href={`#${section.id}`}
                onClick={() => setOpen(false)}
              >
                {section.label}
                <ArrowRight size={16} />
              </a>
            ))}
          </nav>

          <div className="drawer__foot">
            <a
              className="btn btn--primary btn--block"
              href={waLink()}
              target="_blank"
              rel="noreferrer noopener"
            >
              <WhatsApp size={17} />
              Chat via WhatsApp
            </a>
            <span className="drawer__contact">
              <Mail size={15} /> {site.email}
            </span>
            <span className="drawer__contact">
              <Phone size={15} /> {site.phoneDisplay}
            </span>
          </div>
        </aside>
      </div>
    </>
  )
}
