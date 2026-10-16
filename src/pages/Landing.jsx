import Reveal from '../components/Reveal.jsx'
import { ArrowRight, Icon, WhatsApp } from '../components/Icons.jsx'
import { services, site, waLink } from '../data/site.js'

const clientLogos = [
  { src: 'images/bi.png', name: 'Bank Indonesia' },
  { src: 'images/mind-id.png', name: 'MIND ID' },
  { src: 'images/uin-jambi.png', name: 'UIN Jambi' },
  { src: 'images/umsida.png', name: 'Universitas Muhammadiyah Sidoarjo' },
  { src: 'images/untag-sby.png', name: 'Universitas 17 Agustus 1945 Surabaya' },
  { src: 'images/ryper.png', name: 'Ryper' },
]

const portfolio = [
  {
    kind: 'company',
    label: 'Company Profile — Studio Arsitektur',
    title: 'Arsitektur yang membuat ruang terasa hidup.',
    accent: 'Lihat proyek',
  },
  {
    kind: 'commerce',
    label: 'Landing Page — Produk Lokal',
    title: 'Lebih dekat dengan pelanggan Anda.',
    accent: 'Lihat demo',
  },
]

function PortfolioPreview({ kind, title }) {
  return (
    <div className={`portfolio-preview portfolio-preview--${kind}`} aria-label={title}>
      <div className="preview-topbar">
        <span className="preview-brand">ITA</span>
        <span>Beranda</span>
        <span>Layanan</span>
        <span>Tentang</span>
        <span className="preview-topbar__button">Hubungi</span>
      </div>

      {kind === 'company' ? (
        <div className="preview-company">
          <div className="preview-company__copy">
            <b>Ruang digital<br />untuk bisnis<br />masa depan.</b>
            <span>Website yang memberi kesan pertama yang kuat.</span>
            <i>Pelajari lebih lanjut <ArrowRight size={10} /></i>
          </div>
          <div className="preview-company__house">
            <span className="house-sun" />
            <span className="house-main" />
            <span className="house-roof" />
            <span className="house-window house-window--one" />
            <span className="house-window house-window--two" />
            <span className="house-ground" />
          </div>
          <div className="preview-company__tiles"><span /><span /><span /><span /></div>
        </div>
      ) : (
        <div className="preview-commerce">
          <div className="coffee-copy">
            <small>LOCAL PRODUCT</small>
            <b>Rasa yang<br />selalu diingat.</b>
            <span>Kemasan dan pengalaman belanja yang lebih berkesan.</span>
            <i>Belanja sekarang <ArrowRight size={10} /></i>
          </div>
          <div className="coffee-cup"><span /></div>
          <div className="coffee-steam coffee-steam--one" />
          <div className="coffee-steam coffee-steam--two" />
          <div className="coffee-strip"><span /><span /><span /></div>
        </div>
      )}
    </div>
  )
}

export default function Landing() {
  return (
    <>
      <section className="hero hero--studio" id="top">
        <div className="container hero__inner">
          <Reveal className="hero__copy">
            <h1>{site.headline}</h1>
            <p className="lead">{site.lead}</p>
            <a className="btn btn--accent btn--lg" href={waLink()} target="_blank" rel="noreferrer noopener">
              Konsultasi
            </a>
          </Reveal>

          <Reveal delay={140} className="hero-device">
            <img src="./images/hero-ruang-studio.png" alt="Mockup website Ruang Studio pada komputer dan ponsel" />
          </Reveal>
        </div>
      </section>

      <section className="sec services-section" id="layanan">
        <div className="container">
          <Reveal className="section-heading">
            <p className="eyebrow">Layanan</p>
            <h2>Website untuk setiap kebutuhan bisnis.</h2>
            <p>Kami menyediakan layanan pembuatan website yang dirancang untuk membantu bisnis Anda berkembang.</p>
          </Reveal>

          <div className="service-grid">
            {services.map((service, index) => (
              <Reveal className="service-card" delay={index * 100} key={service.title}>
                <span className="service-card__icon"><Icon name={service.icon} size={27} /></span>
                <h3>{service.title}</h3>
                <p>{service.line}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sec portfolio-section" id="portofolio">
        <div className="container">
          <Reveal className="section-heading">
            <p className="eyebrow">Portofolio</p>
            <h2>Gambaran website untuk bisnis Anda.</h2>
            <p>Setiap tampilan disusun dari karakter brand, kebutuhan pelanggan, dan tujuan bisnis Anda.</p>
          </Reveal>

          <div className="portfolio-grid">
            {portfolio.map((project, index) => (
              <Reveal className="portfolio-card" delay={index * 120} key={project.label}>
                <PortfolioPreview kind={project.kind} title={project.title} />
                <div className="portfolio-card__bottom">
                  <p>{project.label}</p>
                  <a href="#kontak" className="portfolio-card__link">
                    {project.accent}
                    <ArrowRight size={15} />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sec clients-section" id="klien">
        <div className="container">
          <Reveal className="section-heading section-heading--compact">
            <p className="eyebrow">Klien kami</p>
            <h2>Dipercaya untuk bertumbuh.</h2>
            <p>Beberapa organisasi dan bisnis yang pernah bekerja bersama kami.</p>
          </Reveal>

          <div className="client-grid">
            {clientLogos.map((client, index) => (
              <Reveal className="client-card" delay={index * 70} key={client.name}>
                <img src={`./${client.src}`} alt={`Logo ${client.name}`} loading="lazy" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sec cta-section" id="kontak">
        <div className="container">
          <Reveal className="cta-band">
            <div>
              <p className="eyebrow">Mulai dari sekarang</p>
              <h2>Siap punya website untuk bisnis Anda?</h2>
              <p>Ceritakan kebutuhan Anda dan mulai langkah digital bisnis Anda bersama ITA Digital.</p>
            </div>
            <a className="btn btn--dark btn--lg" href={waLink()} target="_blank" rel="noreferrer noopener">
              <WhatsApp size={18} />
              Hubungi via WhatsApp
              <ArrowRight size={16} />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  )
}
