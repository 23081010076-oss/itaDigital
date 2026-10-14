import { ArrowRight, WhatsApp } from './Icons.jsx'
import { waLink } from '../data/site.js'

export default function CtaBand() {
  return (
    <section className="sec sec--tight">
      <div className="container">
        <div className="cta">
          <h2>Siap membangun sesuatu yang hebat?</h2>
          <p>
            Mari wujudkan ide Anda bersama kami. Ceritakan kebutuhannya, kami bantu susun lingkup,
            waktu, dan perkiraan biayanya lebih dulu.
          </p>

          <div className="cta__actions">
            <a className="btn btn--primary btn--lg" href="#kontak">
              Hubungi Kami
              <ArrowRight size={16} />
            </a>
            <a
              className="btn btn--light btn--lg"
              href={waLink()}
              target="_blank"
              rel="noreferrer noopener"
            >
              <WhatsApp size={17} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
