import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import { ArrowRight, WhatsApp } from '../components/Icons.jsx'
import { navLinks, waLink } from '../data/site.js'

export default function NotFound() {
  return (
    <section className="notfound">
      <div className="container container--narrow">
        <Reveal>
          <span className="notfound__code">404</span>
          <h1 style={{ marginBottom: '14px' }}>Halaman tidak ditemukan</h1>
          <p className="section-desc" style={{ marginBottom: '28px' }}>
            Alamat yang Anda tuju mungkin sudah dipindahkan atau salah penulisan. Silakan pilih
            halaman berikut, atau kembali ke beranda.
          </p>

          <div className="cluster" style={{ justifyContent: 'center' }}>
            <Link className="btn btn--primary btn--lg" to="/">
              Kembali ke Beranda
              <ArrowRight size={18} />
            </Link>
            <a className="btn btn--outline btn--lg" href={waLink()} target="_blank" rel="noreferrer noopener">
              <WhatsApp size={19} />
              Laporkan masalah
            </a>
          </div>

          <div className="pill-nav" style={{ justifyContent: 'center', marginTop: '38px' }}>
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} className="pill-link">
                {link.label}
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
