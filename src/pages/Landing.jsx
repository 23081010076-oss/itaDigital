import Reveal from '../components/Reveal.jsx'
import { ArrowRight, Icon, WhatsApp } from '../components/Icons.jsx'
import { services, site, waLink } from '../data/site.js'

const clientLogos = [
  { src: 'images/vocaseek-logo.webp', name: 'Vocaseek' },
  { src: 'images/besc-logo.webp', name: 'BESC — Biology Environmental Smart Competition' },
]

const portfolio = [
  {
    brand: 'Vocaseek',
    image: 'images/vocaseek-portfolio.webp',
    label: 'Vocaseek — Platform Karier Vokasi',
    url: 'https://vocaseek.id/',
    accent: 'Kunjungi website',
  },
  {
    brand: 'BESC',
    image: 'images/besc-portfolio.webp',
    label: 'BESC — Biology Environmental Smart Competition',
    url: 'https://beschimbio.online/',
    accent: 'Kunjungi website',
  },
]

function PortfolioPreview({ project }) {
  return (
    <img
      className="portfolio-preview"
      src={`./${project.image}`}
      alt={`Pratinjau situs ${project.brand}`}
      loading="lazy"
      decoding="async"
    />
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
            <img src="./images/hero-ruang-studio.webp" alt="Mockup website Ruang Studio pada komputer dan ponsel" />
          </Reveal>
        </div>
      </section>

      <section className="sec services-section" id="layanan">
        <div className="container">
          <Reveal className="section-heading">
            <p className="eyebrow">Layanan</p>
            <p>Kami menyediakan berbagai layanan untuk membantu bisnis Anda berkembang di era digital.</p>
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
            <p>Beberapa hasil karya terbaik kami.</p>
          </Reveal>

          <div className="portfolio-grid">
            {portfolio.map((project, index) => (
              <Reveal
                as="a"
                className="portfolio-card"
                delay={index * 120}
                href={project.url}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${project.label} — buka website di tab baru`}
                key={project.label}
              >
                <PortfolioPreview project={project} />
                <div className="portfolio-card__bottom">
                  <p>{project.label}</p>
                  <span className="portfolio-card__link">
                    {project.accent}
                    <ArrowRight size={15} />
                  </span>
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
