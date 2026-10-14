import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import { Clock, Mail, MapPin, Phone, WhatsApp, Icon } from './Icons.jsx'
import { navLinks, services, site, waLink } from '../data/site.js'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="site-footer">
      <span className="footer__glow" aria-hidden="true" />

      <div className="container footer__top">
        <div className="footer__brand">
          <Logo theme="light" />
          <p className="footer__desc">
            {site.name} adalah perusahaan teknologi yang berfokus pada pengembangan solusi digital
            inovatif. Kami berkomitmen menghadirkan layanan yang efisien, modern, dan mudah diakses.
          </p>
          <div className="footer__socials">
            {site.socials.map((social) => (
              <a
                key={social.name}
                className="social-btn"
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={social.name}
                title={social.name}
              >
                <Icon name={social.icon} size={19} />
              </a>
            ))}
            <a
              className="social-btn"
              href={waLink()}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="WhatsApp"
              title="WhatsApp"
            >
              <WhatsApp size={19} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="footer__title">Menu</h4>
          <nav className="footer__links" aria-label="Navigasi footer">
            {navLinks.map((link) => (
              <Link key={link.to} className="footer__link" to={link.to}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h4 className="footer__title">Layanan</h4>
          <nav className="footer__links" aria-label="Daftar layanan">
            {services.map((service) => (
              <Link key={service.slug} className="footer__link" to="/layanan">
                {service.title}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h4 className="footer__title">Hubungi Kami</h4>
          <div className="footer__contact">
            <span className="footer__contact-item">
              <MapPin size={18} />
              <span>{site.address}</span>
            </span>
            <span className="footer__contact-item">
              <Mail size={18} />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </span>
            <span className="footer__contact-item">
              <Phone size={18} />
              <a href={waLink()} target="_blank" rel="noreferrer noopener">
                {site.phoneDisplay}
              </a>
            </span>
            <span className="footer__contact-item">
              <Clock size={18} />
              <span>{site.hours}</span>
            </span>
          </div>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>
          Copyright &copy; {year} {site.name}. Seluruh hak cipta dilindungi.
        </span>
        <span className="footer__bottom-links">
          <Link to="/tentang">Tentang Kami</Link>
          <Link to="/kontak">Kontak</Link>
          <a href={waLink()} target="_blank" rel="noreferrer noopener">
            Dukungan
          </a>
        </span>
      </div>
    </footer>
  )
}
