import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import CtaBand from '../components/CtaBand.jsx'
import Faq from '../components/Faq.jsx'
import { ArrowRight, Check, Icon, WhatsApp } from '../components/Icons.jsx'
import { faqs, process, services, waLink } from '../data/site.js'

const tones = ['a', 'b', 'c', 'd']

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Layanan"
        crumb="Layanan"
        title="Layanan yang kami kerjakan setiap hari"
        desc="Mulai dari membangun aplikasi baru, mengamankan sistem yang sudah berjalan, menyusun peta jalan digital, sampai mengolah data menjadi keputusan yang terukur."
      >
        <a className="btn btn--primary btn--lg" href={waLink()} target="_blank" rel="noreferrer noopener">
          <WhatsApp size={19} />
          Diskusikan kebutuhan Anda
        </a>
        <Link className="btn btn--light btn--lg" to="/portofolio">
          Lihat hasil kerja
          <ArrowRight size={18} />
        </Link>
      </PageHero>

      {/* ======================= DETAIL SETIAP LAYANAN ======================= */}
      <section className="section">
        <div className="container">
          {services.map((service, index) => (
            <Reveal key={service.slug} className="work-item" id={service.slug}>
              <div className={`work-item__media project-card__thumb--${tones[index]}`}>
                <span className="badge badge--glass work-item__badge">{`0${index + 1}`}</span>
                <Icon name={service.icon} size={86} strokeWidth={1.15} />
              </div>

              <div>
                <span className="eyebrow">{service.title}</span>
                <h2 style={{ marginBottom: '14px' }}>{service.short}</h2>
                <p style={{ color: 'var(--text-soft)', marginBottom: '22px' }}>{service.description}</p>

                <div className="grid grid--2" style={{ gap: '26px' }}>
                  <div>
                    <h4 style={{ marginBottom: '12px' }}>Yang kami kerjakan</h4>
                    <ul className="list-check">
                      {service.points.map((point) => (
                        <li key={point}>
                          <Check size={16} />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 style={{ marginBottom: '12px' }}>Yang Anda terima</h4>
                    <ul className="list-check">
                      {service.deliverables.map((item) => (
                        <li key={item}>
                          <Icon name="doc" size={16} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="cluster" style={{ marginTop: '26px' }}>
                  <a
                    className="btn btn--primary"
                    href={waLink(
                      `Halo ITA Digital, saya ingin bertanya tentang layanan ${service.title}.`,
                    )}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <WhatsApp size={18} />
                    Tanya layanan ini
                  </a>
                  <Link className="btn btn--outline" to="/kontak">
                    Ajukan penawaran
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============================ ALUR KERJA ============================ */}
      <section className="section section--soft">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Alur Kerja"
            title="Empat tahap yang selalu kami jalani"
            desc="Tahapan ini membuat progres mudah dipantau dan risiko bisa dideteksi lebih awal — oleh kami maupun oleh Anda."
          />

          <div className="process">
            {process.map((step, index) => (
              <Reveal key={step.title} delay={index * 100} className="step">
                <span className="step__num">{`0${index + 1}`}</span>
                <h3 className="step__title">{step.title}</h3>
                <p className="step__desc">{step.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================================ FAQ ================================ */}
      <section className="section">
        <div className="container contact-layout" style={{ alignItems: 'start' }}>
          <div>
            <SectionHeading
              eyebrow="Pertanyaan Umum"
              title="Hal yang paling sering ditanyakan"
              desc="Belum menemukan jawabannya? Silakan hubungi kami langsung, kami balas pada hari kerja yang sama."
            />
            <Reveal delay={120}>
              <a className="btn btn--primary" href={waLink()} target="_blank" rel="noreferrer noopener">
                <WhatsApp size={18} />
                Tanya langsung
              </a>
            </Reveal>
          </div>

          <Reveal variant="right">
            <Faq items={faqs} />
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Belum yakin layanan mana yang Anda butuhkan?"
        desc="Ceritakan kondisi bisnis Anda saat ini. Kami bantu tentukan prioritas yang paling masuk akal untuk dikerjakan lebih dulu."
      />
    </>
  )
}
