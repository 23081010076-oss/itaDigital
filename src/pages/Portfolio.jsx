import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import ClientMarquee from '../components/ClientMarquee.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { Check, Icon, WhatsApp } from '../components/Icons.jsx'
import { clients, portfolioCategories, projects, waLink } from '../data/site.js'

const featured = [projects[0], projects[3]]

export default function Portfolio() {
  const [filter, setFilter] = useState('Semua')

  const filtered = useMemo(
    () => (filter === 'Semua' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  )

  return (
    <>
      <PageHero
        eyebrow="Portofolio"
        crumb="Portofolio"
        title="Hasil kerja yang sudah dipakai klien kami"
        desc="Kami lebih suka menunjukkan dampaknya daripada sekadar tampilannya. Berikut sebagian proyek yang telah kami kerjakan bersama klien."
      >
        <a
          className="btn btn--primary btn--lg"
          href={waLink('Halo ITA Digital, saya ingin melihat contoh proyek yang mirip kebutuhan kami.')}
          target="_blank"
          rel="noreferrer noopener"
        >
          <WhatsApp size={19} />
          Minta contoh serupa
        </a>
        <Link className="btn btn--light btn--lg" to="/layanan">
          Pelajari layanan
        </Link>
      </PageHero>

      {/* ============================ DAFTAR PROYEK ============================ */}
      <section className="section">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Katalog Proyek"
            title="Jelajahi berdasarkan jenis pekerjaan"
            desc="Setiap kategori punya tantangan tersendiri — pilih yang paling mirip dengan kebutuhan Anda."
          />

          <Reveal className="pill-nav" style={{ justifyContent: 'center', marginBottom: '34px' }}>
            {portfolioCategories.map((category) => (
              <button
                key={category}
                type="button"
                className={filter === category ? 'is-active' : ''}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </Reveal>

          <div className="portfolio-grid">
            {filtered.map((project, index) => (
              <Reveal key={project.slug} delay={index * 70} variant="zoom">
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center muted" style={{ marginTop: '30px' }}>
              Belum ada proyek pada kategori ini.
            </p>
          )}
        </div>
      </section>

      {/* =========================== STUDI KASUS PILIHAN =========================== */}
      <section className="section section--soft">
        <div className="container">
          <SectionHeading
            eyebrow="Studi Kasus"
            title="Dua proyek yang paling sering ditanyakan"
            desc="Kami uraikan proses, keputusan penting, dan hasil terukurnya secara ringkas."
          />

          <div className="stack-lg">
            {featured.map((project, index) => (
              <Reveal key={project.slug} className="work-item">
                <div className={`work-item__media project-card__thumb--${index === 0 ? 'b' : 'd'}`}>
                  <span className="badge badge--glass work-item__badge">{project.category}</span>
                  <Icon name={project.icon} size={86} strokeWidth={1.15} />
                </div>

                <div>
                  <span className="eyebrow">
                    {project.client} &middot; {project.year}
                  </span>
                  <h2 style={{ marginBottom: '14px' }}>{project.title}</h2>
                  <p style={{ color: 'var(--text-soft)', marginBottom: '22px' }}>{project.description}</p>

                  <h4 style={{ marginBottom: '12px' }}>Hasil terukur</h4>
                  <ul className="list-check" style={{ marginBottom: '24px' }}>
                    {project.results.map((result) => (
                      <li key={result}>
                        <Check size={16} />
                        {result}
                      </li>
                    ))}
                  </ul>

                  <div className="tag-list" style={{ marginBottom: '24px' }}>
                    {project.stack.map((tech) => (
                      <span className="tag" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    className="btn btn--dark"
                    href={waLink(`Halo ITA Digital, saya ingin menanyakan proyek ${project.title}.`)}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Tanya tentang proyek ini
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =============================== KLIEN =============================== */}
      <section className="section section--tight">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Klien Kami"
            title="Mereka yang mempercayakan sistemnya kepada kami"
          />
        </div>
        <div className="stack">
          <ClientMarquee items={clients.slice(0, 6)} />
          <ClientMarquee items={clients.slice(6)} reverse />
        </div>
      </section>

      <CtaBand
        title="Ingin proyek Anda jadi portofolio berikutnya?"
        desc="Mulai dari percakapan singkat. Kami bantu petakan lingkup, waktu, dan perkiraan biayanya lebih dulu."
      />
    </>
  )
}
