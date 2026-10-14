import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo.jsx'
import { ArrowRight, Close, Mail, Menu, Phone, WhatsApp } from './Icons.jsx'
import { navLinks, site, waLink } from '../data/site.js'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Tutup drawer setiap kali rute berubah
  useEffect(() => setOpen(false), [pathname])

  // Kunci scroll body saat drawer terbuka
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Tutup dengan tombol Escape
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
        <div className="container header-inner">
          <NavLink to="/" aria-label={`${site.name} - beranda`}>
            <Logo />
          </NavLink>

          <nav className="nav" aria-label="Navigasi utama">
            <ul className="nav__list">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) => `nav__link${isActive ? ' is-active' : ''}`}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header__actions">
            <a
              className="btn btn--dark btn--sm"
              href={waLink()}
              target="_blank"
              rel="noreferrer noopener"
            >
              <WhatsApp size={17} />
              Konsultasi Gratis
            </a>
            <button
              type="button"
              className="nav-toggle"
              aria-label="Buka menu navigasi"
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* ---------- Drawer navigasi mobile ---------- */}
      <div className={`drawer${open ? ' is-open' : ''}`} aria-hidden={!open}>
        <div className="drawer__overlay" onClick={() => setOpen(false)} />
        <aside className="drawer__panel" role="dialog" aria-modal="true" aria-label="Menu navigasi">
          <div className="drawer__head">
            <Logo size={38} showTagline={false} />
            <button
              type="button"
              className="drawer__close"
              aria-label="Tutup menu"
              onClick={() => setOpen(false)}
            >
              <Close size={20} />
            </button>
          </div>

          <nav className="drawer__nav" aria-label="Navigasi mobile">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => `drawer__link${isActive ? ' is-active' : ''}`}
              >
                {link.label}
                <ArrowRight size={17} />
              </NavLink>
            ))}
          </nav>

          <div className="drawer__foot">
            <a
              className="btn btn--primary btn--block"
              href={waLink()}
              target="_blank"
              rel="noreferrer noopener"
            >
              <WhatsApp size={18} />
              Chat via WhatsApp
            </a>
            <span className="drawer__contact">
              <Mail size={16} /> {site.email}
            </span>
            <span className="drawer__contact">
              <Phone size={16} /> {site.phoneDisplay}
            </span>
          </div>
        </aside>
      </div>
    </>
  )
}
