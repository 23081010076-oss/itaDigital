import Logo from './Logo.jsx'
import { Icon, WhatsApp } from './Icons.jsx'
import { sections, site, waLink } from '../data/site.js'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <Logo tone="light" />
          <p className="footer__desc">{site.summary}</p>
          <div className="footer__socials">
            {site.socials.map((social) => (
              <a
                key={social.name}
                className="social-btn"
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={social.name}
              >
                <Icon name={social.icon} size={17} />
              </a>
            ))}
            <a
              className="social-btn"
              href={waLink()}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="WhatsApp"
            >
              <WhatsApp size={17} />
            </a>
          </div>
        </div>

        <div>
          <p className="footer__title">Bagian</p>
          <nav className="footer__links" aria-label="Bagian halaman">
            {sections.map((section) => (
              <a key={section.id} className="footer__link" href={`#${section.id}`}>
                {section.label}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <p className="footer__title">Kontak</p>
          <nav className="footer__links" aria-label="Kontak">
            <a className="footer__link" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <a className="footer__link" href={waLink()} target="_blank" rel="noreferrer noopener">
              {site.phoneDisplay}
            </a>
            <span className="footer__link">{site.city}</span>
            <span className="footer__link">{site.hours}</span>
          </nav>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>
          {year} {site.name}
        </span>
        <span className="footer__bottom-links">
          <a href="#layanan">Layanan</a>
          <a href="#produk">Produk</a>
          <a href="#kontak">Kontak</a>
        </span>
      </div>
    </footer>
  )
}
