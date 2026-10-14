import Reveal from './Reveal.jsx'
import { ArrowRight, WhatsApp } from './Icons.jsx'
import { site, waLink } from '../data/site.js'

/** Blok ajakan (call to action) sebelum footer. */
export default function CtaBand({
  title = 'Siap membangun sesuatu yang hebat?',
  desc = 'Ceritakan kebutuhan Anda, kami bantu petakan solusi yang paling tepat — tanpa biaya di tahap konsultasi.',
}) {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="cta-band">
          <span className="cta-band__glow" aria-hidden="true" />
          <div className="cta-band__inner">
            <div>
              <h2>{title}</h2>
              <p>{desc}</p>
            </div>
            <div className="cta-band__actions">
              <a
                className="btn btn--primary btn--lg"
                href={waLink()}
                target="_blank"
                rel="noreferrer noopener"
              >
                <WhatsApp size={19} />
                WhatsApp Kami
              </a>
              <a className="btn btn--light btn--lg" href={`mailto:${site.email}`}>
                Kirim Email
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
