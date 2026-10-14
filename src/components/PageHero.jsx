import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'

/** Header halaman untuk sub-halaman (Layanan, Produk, dst). */
export default function PageHero({ eyebrow, title, desc, crumb, children }) {
  return (
    <section className="page-hero">
      <span className="page-hero__grid-bg" aria-hidden="true" />
      <span className="page-hero__glow" aria-hidden="true" />
      <span className="page-hero__glow page-hero__glow--left" aria-hidden="true" />

      <div className="container">
        <Reveal className="page-hero__inner">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Beranda</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{crumb || title}</span>
          </nav>

          {eyebrow && <span className="eyebrow eyebrow--light">{eyebrow}</span>}
          <h1>{title}</h1>
          {desc && <p className="page-hero__lead">{desc}</p>}
          {children && <div className="page-hero__actions">{children}</div>}
        </Reveal>
      </div>
    </section>
  )
}
