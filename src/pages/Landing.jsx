import ServiceCard from '../components/ServiceCard.jsx'
import ProductCard from '../components/ProductCard.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import ClientSlider from '../components/ClientSlider.jsx'
import CtaBand from '../components/CtaBand.jsx'
import ContactSection from '../components/ContactSection.jsx'
import ImageSlot from '../components/ImageSlot.jsx'
import Reveal from '../components/Reveal.jsx'
import { ArrowRight, WhatsApp } from '../components/Icons.jsx'
import { clients, products, projects, services, site, techStack, waLink } from '../data/site.js'

/* Jeda bertingkat untuk kartu-kartu dalam satu baris, seperti pola
   fade-delay pada acuan. */
const step = (index, unit = 120) => index * unit

export default function Landing() {
  return (
    <>
      {/* ================================ HERO ================================ */}
      <section className="hero" id="top">
        <div className="container hero__inner">
          <Reveal className="hero__text">
            <span className="chip chip--red">{site.taglineId}</span>

            <h1>{site.headline}</h1>

            <p className="lead">{site.lead}</p>

            <div className="hero__actions">
              <a
                className="btn btn--primary btn--lg"
                href={waLink()}
                target="_blank"
                rel="noreferrer noopener"
              >
                <WhatsApp size={17} />
                Mulai Konsultasi
              </a>
              <a className="btn btn--lg" href="#layanan">
                Lihat Layanan
                <ArrowRight size={16} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={step(2)}>
            <ImageSlot
              src={site.heroImage}
              alt="Ilustrasi layanan ITA Digital"
              note={site.heroImageNote}
              className="hero__shot"
            />
          </Reveal>
        </div>
      </section>

      {/* ============================== LAYANAN ============================== */}
      <section className="sec sec--tint" id="layanan">
        <div className="container">
          <Reveal className="sec__head">
            <h2>Layanan</h2>
            <p>
              Kami menyediakan empat layanan utama untuk membantu bisnis, lembaga pendidikan, dan
              instansi bekerja lebih efisien.
            </p>
          </Reveal>

          <div className="grid grid--4">
            {services.map((service, index) => (
              <Reveal delay={step(index)} key={service.title}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={step(2)}>
            <p className="note" style={{ marginTop: '24px', textAlign: 'center' }}>
              Perangkat kerja yang kami pakai: {techStack.join(', ')}.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============================== PRODUK ============================== */}
      <section className="sec" id="produk">
        <div className="container">
          <Reveal className="sec__head">
            <h2>Produk Kami</h2>
            <p>
              Dibangun dari pekerjaan yang berulang di banyak klien, jadi Anda tidak perlu memulai
              dari nol. Semuanya bisa disesuaikan dengan alur kerja Anda.
            </p>
          </Reveal>

          <div className="grid grid--3">
            {products.map((product, index) => (
              <Reveal delay={step(index)} key={product.title}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={step(2)}>
            <p className="note" style={{ marginTop: '20px', textAlign: 'center' }}>
              Keterangan, status, dan gambar produk di atas masih contoh.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============================ PORTOFOLIO ============================ */}
      <section className="sec sec--tint" id="portofolio">
        <div className="container">
          <Reveal className="sec__head">
            <h2>Portofolio</h2>
            <p>
              Beberapa pekerjaan yang sudah dipakai klien, dari sistem internal sampai portal publik.
            </p>
          </Reveal>

          <div className="grid grid--duo">
            {projects.map((project, index) => (
              <Reveal delay={step(index)} key={project.title}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={step(2)}>
            <p className="note" style={{ marginTop: '20px', textAlign: 'center' }}>
              Nama proyek, klien, dan gambarnya masih contoh.
            </p>
          </Reveal>
        </div>
      </section>

      {/* =============================== KLIEN =============================== */}
      <section className="sec" id="klien">
        <div className="container">
          <Reveal className="sec__head">
            <h2>Klien Kami</h2>
            <p>
              Usaha kecil, penyedia layanan, lembaga pendidikan, dan instansi yang memakai sistem
              buatan kami.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <ClientSlider items={clients} />
        </Reveal>

        <div className="container">
          <p className="note" style={{ marginTop: '20px', textAlign: 'center' }}>
            Nama klien di atas masih contoh. Ganti dengan berkas logo asli di
            <code> public/images/</code>.
          </p>
        </div>
      </section>

      <CtaBand />

      <ContactSection />
    </>
  )
}
