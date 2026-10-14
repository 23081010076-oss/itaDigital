import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import Counter from '../components/Counter.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import ProductCard from '../components/ProductCard.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import ClientMarquee from '../components/ClientMarquee.jsx'
import CtaBand from '../components/CtaBand.jsx'
import HeroMock, { HeroChip } from '../components/HeroMock.jsx'
import { ArrowRight, Check, Icon, Quote, WhatsApp } from '../components/Icons.jsx'
import { clients, products, projects, services, site, stats, techStack, testimonials, waLink } from '../data/site.js'

const whyPoints = [
  {
    icon: 'hub',
    title: 'Tim yang benar-benar mengerjakan',
    desc: 'Anda berkomunikasi langsung dengan orang yang menulis kodenya — bukan perantara yang hanya meneruskan pesan.',
  },
  {
    icon: 'layers',
    title: 'Proses transparan tiap pekan',
    desc: 'Demo berkala, laporan progres, dan akses ke lingkungan uji sejak awal sehingga tidak ada kejutan di akhir proyek.',
  },
  {
    icon: 'shield',
    title: 'Aman & mudah dirawat',
    desc: 'Standar penulisan kode dan pengujian keamanan diterapkan sejak baris pertama, lengkap dengan dokumentasi serah terima.',
  },
]

const capability = [
  { label: 'Kepuasan klien', value: 96 },
  { label: 'Ketepatan jadwal rilis', value: 92 },
  { label: 'Klien yang kembali bekerja sama', value: 88 },
]

const whyHighlights = ['Konsultasi awal tanpa biaya', 'Harga tetap sesuai penawaran', 'Serah terima kode & dokumentasi', 'Garansi perbaikan 3 bulan']

export default function Home() {
  return (
    <>
      {/* ================================ HERO ================================ */}
      <section className="hero">
        <span className="hero__grid-bg" aria-hidden="true" />
        <span className="hero__glow hero__glow--a" aria-hidden="true" />
        <span className="hero__glow hero__glow--b" aria-hidden="true" />

        <div className="container hero__inner">
          <div>
            <Reveal className="hero__badge">
              <b>{site.tagline}</b>
              Dipercaya 68+ klien di seluruh Indonesia
            </Reveal>

            <Reveal delay={90}>
              <h1 className="hero__title">
                Transformasi Bisnis Anda dengan <em>Solusi Digital</em> yang Tepat Guna
              </h1>
            </Reveal>

            <Reveal delay={170}>
              <p className="hero__lead">
                {site.name} membantu bisnis beradaptasi di era digital melalui pengembangan software,
                keamanan siber, konsultasi TI, dan analisis data yang dirancang untuk mendorong
                efisiensi — bukan sekadar menambah beban teknologi baru.
              </p>
            </Reveal>

            <Reveal delay={250} className="hero__actions">
              <a
                className="btn btn--primary btn--lg"
                href={waLink()}
                target="_blank"
                rel="noreferrer noopener"
              >
                <WhatsApp size={19} />
                Mulai Konsultasi
              </a>
              <Link className="btn btn--light btn--lg" to="/layanan">
                Lihat Layanan
                <ArrowRight size={18} />
              </Link>
            </Reveal>

            <Reveal delay={330} className="hero__trust">
              <div className="hero__avatars" aria-hidden="true">
                {testimonials.map((person) => (
                  <span className="avatar" key={person.name}>
                    {person.initials}
                  </span>
                ))}
              </div>
              <p className="hero__trust-text">
                <b>99% klien puas</b> dan 88% kembali bekerja sama untuk proyek berikutnya.
              </p>
            </Reveal>
          </div>

          <div className="hero__visual">
            <HeroChip position="tl" icon="shield" title="Audit Keamanan" sub="Laporan siap tindak lanjut" />
            <HeroMock />
            <HeroChip position="br" icon="rocket" title="Rilis Tepat Waktu" sub="92% ketepatan jadwal" />
          </div>
        </div>
      </section>

      {/* ============================ STATISTIK ============================ */}
      <div className="hero__stats">
        <div className="container">
          <Reveal className="hero__stats-card">
            {stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <span className="stat__num">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </span>
                <p className="stat__label">{stat.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>

      {/* ============================= LAYANAN ============================= */}
      <section className="section section--soft">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Layanan Kami"
            title="Solusi digital untuk setiap tahap pertumbuhan bisnis"
            desc="Empat pilar layanan yang dapat dipakai terpisah maupun digabungkan sesuai kebutuhan dan anggaran Anda."
          />

          <div className="grid grid--4">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 90}>
                <ServiceCard service={service} maxPoints={2} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={120} className="text-center" style={{ marginTop: '38px' }}>
            <Link className="btn btn--dark" to="/layanan">
              Jelajahi semua layanan
              <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============================= MENGAPA KAMI ============================= */}
      <section className="section">
        <div className="container why">
          <div>
            <SectionHeading
              eyebrow="Mengapa ITA Digital"
              title="Mitra teknologi, bukan sekadar vendor"
              desc="Kami menilai keberhasilan proyek dari dampaknya pada pekerjaan harian tim Anda — bukan hanya dari daftar fitur yang selesai dibangun."
            />

            <div className="why__list">
              {whyPoints.map((point, index) => (
                <Reveal key={point.title} delay={index * 100} className="why__item">
                  <span className="icon-box icon-box--soft">
                    <Icon name={point.icon} size={22} />
                  </span>
                  <div>
                    <h4>{point.title}</h4>
                    <p>{point.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal variant="right" className="why__media">
            <div className="why__panel">
              <div className="why__panel-head">
                <span className="icon-box icon-box--lg">
                  <Icon name="chart" size={26} />
                </span>
                <div>
                  <h3 style={{ color: '#fff', fontSize: '1.08rem' }}>Indikator kerja kami</h3>
                  <p style={{ color: 'rgba(255,255,255,.6)', fontSize: '.86rem' }}>
                    Diukur dari proyek yang berjalan 3 tahun terakhir
                  </p>
                </div>
              </div>

              <div className="why__bars">
                {capability.map((item) => (
                  <div className="why__bar-row" key={item.label}>
                    <div className="why__bar-top">
                      <span>{item.label}</span>
                      <span>{item.value}%</span>
                    </div>
                    <div className="why__bar">
                      <span style={{ '--w': `${item.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="why__badge-float">
              <span className="icon-box">
                <Check size={20} />
              </span>
              <div>
                <span className="float-chip__title" style={{ color: 'var(--ink-900)' }}>
                  Garansi 3 bulan
                </span>
                <br />
                <span style={{ fontSize: '.76rem', color: 'var(--text-muted)' }}>
                  perbaikan bug pasca rilis
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="container">
          <Reveal delay={120} className="cluster" style={{ marginTop: '46px', gap: '10px 22px' }}>
            {whyHighlights.map((item) => (
              <span key={item} className="cluster" style={{ gap: '9px' }}>
                <Icon name="checkCircle" size={18} style={{ color: 'var(--red-500)' }} />
                <span style={{ fontSize: '.94rem', color: 'var(--text-soft)' }}>{item}</span>
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ============================== PRODUK ============================== */}
      <section className="section section--soft">
        <div className="container">
          <div className="row-between">
            <SectionHeading
              eyebrow="Produk Kami"
              title="Produk unggulan siap pakai"
              desc="Selain mengerjakan proyek khusus, kami membangun produk yang bisa langsung dipakai untuk kebutuhan umum."
            />
            <Reveal delay={100}>
              <Link className="btn btn--outline" to="/produk">
                Lihat semua produk
                <ArrowRight size={17} />
              </Link>
            </Reveal>
          </div>

          <div className="grid grid--3">
            {products.slice(0, 3).map((product, index) => (
              <Reveal key={product.slug} delay={index * 100}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================= PORTOFOLIO ============================= */}
      <section className="section">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Portofolio"
            title="Beberapa hasil karya terbaik kami"
            desc="Setiap proyek di bawah ini dikerjakan bersama klien dengan indikator keberhasilan yang disepakati sejak awal."
          />

          <div className="grid grid--3">
            {projects.slice(0, 3).map((project, index) => (
              <Reveal key={project.slug} delay={index * 100}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={140} className="text-center" style={{ marginTop: '40px' }}>
            <Link className="btn btn--dark" to="/portofolio">
              Jelajahi portofolio
              <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* =============================== KLIEN =============================== */}
      <section className="section section--soft section--tight">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Klien Kami"
            title="Dipercaya berbagai institusi dan usaha"
            desc="Dari UMKM dan penyedia layanan hingga lembaga pendidikan serta instansi."
          />
        </div>

        <div className="stack">
          <ClientMarquee items={clients.slice(0, 6)} />
          <ClientMarquee items={clients.slice(6)} reverse />
        </div>
      </section>

      {/* ============================= TEKNOLOGI ============================= */}
      <section className="section">
        <div className="container">
          <Reveal className="card card--pad" style={{ padding: 'clamp(26px, 3.4vw, 44px)' }}>
            <div className="row-between" style={{ alignItems: 'flex-start' }}>
              <div style={{ maxWidth: '470px' }}>
                <span className="eyebrow">Teknologi</span>
                <h3 style={{ marginBottom: '10px' }}>Perangkat yang kami kuasai</h3>
                <p style={{ color: 'var(--text-soft)', fontSize: '.95rem' }}>
                  Kami memilih teknologi berdasarkan kebutuhan, anggaran, dan kemudahan perawatan
                  jangka panjang — bukan karena sedang populer.
                </p>
              </div>

              <div className="tag-list" style={{ maxWidth: '460px' }}>
                {techStack.map((tech) => (
                  <span className="tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================ TESTIMONI ============================ */}
      <section className="section section--soft">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Testimoni"
            title="Apa kata klien kami"
            desc="Cerita langsung dari orang-orang yang memakai hasil kerja kami setiap hari."
          />

          <div className="grid grid--3">
            {testimonials.map((item, index) => (
              <Reveal key={item.name} delay={index * 100}>
                <figure className="testimonial">
                  <span className="testimonial__mark" aria-hidden="true">
                    <Quote size={30} />
                  </span>
                  <blockquote className="testimonial__text">&ldquo;{item.quote}&rdquo;</blockquote>
                  <figcaption className="testimonial__person">
                    <span className={`avatar${index === 1 ? ' avatar--dark' : ''}`}>
                      {item.initials}
                    </span>
                    <span>
                      <span className="testimonial__name">{item.name}</span>
                      <span className="testimonial__role">{item.role}</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
