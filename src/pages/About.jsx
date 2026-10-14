import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { LogoMark } from '../components/Logo.jsx'
import Counter from '../components/Counter.jsx'
import { ArrowRight, Check, Icon, WhatsApp } from '../components/Icons.jsx'
import { about, site, stats, waLink } from '../data/site.js'

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Tentang Kami"
        crumb="Tentang"
        title="Tim yang tumbuh bersama kliennya"
        desc="Kami perusahaan teknologi yang percaya bahwa pekerjaan yang baik lahir dari pemahaman mendalam atas masalah yang dikerjakan."
      >
        <Link className="btn btn--primary btn--lg" to="/kontak">
          Hubungi kami
          <ArrowRight size={18} />
        </Link>
        <a className="btn btn--light btn--lg" href={waLink()} target="_blank" rel="noreferrer noopener">
          <WhatsApp size={19} />
          WhatsApp kami
        </a>
      </PageHero>

      {/* ============================== PROFIL ============================== */}
      <section className="section">
        <div className="container about-intro">
          <div>
            <SectionHeading
              eyebrow={`Tentang ${site.name}`}
              title="Membangun teknologi yang benar-benar dipakai"
              desc={about.intro}
            />

            <Reveal delay={100} className="card card--pad" style={{ borderLeft: '3px solid var(--red-500)' }}>
              <span className="eyebrow" style={{ marginBottom: '10px' }}>
                Visi
              </span>
              <p style={{ color: 'var(--text-soft)' }}>{about.vision}</p>
            </Reveal>

            <div className="grid grid--4" style={{ marginTop: '26px' }}>
              {stats.slice(0, 4).map((stat, index) => (
                <Reveal key={stat.label} delay={index * 90} className="card card--pad">
                  <span className="stat__num" style={{ fontSize: '1.6rem' }}>
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </span>
                  <p className="stat__label">{stat.label}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal variant="right" className="about-media">
            <span className="about-media__grid" aria-hidden="true" />
            <div className="about-media__content">
              <LogoMark size={96} className="about-media__mark" />

              <div>
                <h3 style={{ color: '#fff', marginBottom: '8px' }}>{site.name}</h3>
                <p style={{ color: 'rgba(255,255,255,.68)', fontSize: '.94rem' }}>
                  {site.taglineId}. Berbasis di {site.addressShort} dan melayani klien dari berbagai
                  kota di Indonesia.
                </p>
              </div>

              <div className="about-media__stats">
                <div className="about-mini">
                  <b>2018</b>
                  <span>Tahun mulai berkarya</span>
                </div>
                <div className="about-mini">
                  <b>4</b>
                  <span>Pilar layanan utama</span>
                </div>
                <div className="about-mini">
                  <b>4</b>
                  <span>Produk digital aktif</span>
                </div>
                <div className="about-mini">
                  <b>24/7</b>
                  <span>Pemantauan sistem klien</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================ MISI ============================ */}
      <section className="section section--soft">
        <div className="container grid grid--2" style={{ alignItems: 'start' }}>
          <div>
            <SectionHeading
              eyebrow="Misi Kami"
              title="Empat hal yang selalu kami pegang"
              desc="Misi ini bukan sekadar tulisan di dinding — kami memakainya untuk menilai keputusan sehari-hari, termasuk saat harus menolak pekerjaan."
            />
            <Reveal delay={120}>
              <div className="why__badge-float" style={{ position: 'static', maxWidth: '330px' }}>
                <span className="icon-box">
                  <Icon name="target" size={20} />
                </span>
                <div>
                  <span className="float-chip__title" style={{ color: 'var(--ink-900)' }}>
                    Fokus pada dampak
                  </span>
                  <br />
                  <span style={{ fontSize: '.76rem', color: 'var(--text-muted)' }}>
                    bukan pada jumlah fitur
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="stack">
            {about.missions.map((mission, index) => (
              <Reveal key={mission} delay={index * 90} className="info-tile">
                <span className="icon-box icon-box--soft">
                  <Icon name="checkCircle" size={22} />
                </span>
                <p style={{ color: 'var(--text-soft)', fontSize: '.95rem' }}>{mission}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ NILAI ============================ */}
      <section className="section">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Nilai Kami"
            title="Cara kami bekerja setiap hari"
            desc="Nilai berikut menentukan bagaimana kami berkomunikasi, memilih teknologi, dan menyelesaikan masalah."
          />

          <div className="grid grid--3">
            {about.values.map((value, index) => (
              <Reveal key={value.title} delay={index * 80}>
                <article className="value-card">
                  <span className="icon-box icon-box--dark">
                    <Icon name={value.icon} size={22} />
                  </span>
                  <h4>{value.title}</h4>
                  <p>{value.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ PERJALANAN ============================ */}
      <section className="section section--soft">
        <div className="container grid grid--2" style={{ alignItems: 'start' }}>
          <div>
            <SectionHeading
              eyebrow="Perjalanan"
              title="Tahapan yang membentuk kami"
              desc="Setiap tahap mengajarkan cara kerja yang lebih baik — dan itu tercermin pada layanan kami hari ini."
            />
            <Reveal delay={120}>
              <Link className="btn btn--dark" to="/portofolio">
                Lihat hasil kerja kami
                <ArrowRight size={18} />
              </Link>
            </Reveal>
          </div>

          <div className="timeline">
            {about.milestones.map((milestone, index) => (
              <Reveal key={milestone.year} delay={index * 90} className="timeline__item">
                <span className="timeline__year">{milestone.year}</span>
                <h4>{milestone.title}</h4>
                <p>{milestone.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== TIM ============================== */}
      <section className="section">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Tim Kami"
            title="Orang-orang di balik pekerjaan ini"
            desc="Tim kecil dengan peran yang jelas — sehingga komunikasi tetap singkat dan keputusan cepat diambil."
          />

          <div className="grid grid--4">
            {about.team.map((person, index) => (
              <Reveal key={`${person.role}-${index}`} delay={index * 90}>
                <article className="team-card">
                  <span className="team-card__avatar">
                    <span>{person.initials}</span>
                  </span>
                  <h4>{person.name}</h4>
                  <p>{person.role}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={140} className="text-center" style={{ marginTop: '30px' }}>
            <p className="muted" style={{ fontSize: '.86rem' }}>
              Profil anggota tim akan ditampilkan pada bagian ini setelah data asli dimasukkan.
            </p>
          </Reveal>
        </div>
      </section>

      {/* =========================== KEUNGGULAN =========================== */}
      <section className="section section--soft">
        <div className="container">
          <Reveal className="card card--pad grid grid--2" style={{ padding: 'clamp(26px, 3.4vw, 44px)', gap: '28px' }}>
            <div>
              <span className="eyebrow">Komitmen Kerja</span>
              <h3 style={{ marginBottom: '12px' }}>Yang kami jamin sejak awal</h3>
              <p style={{ color: 'var(--text-soft)', fontSize: '.95rem' }}>
                Komitmen ini berlaku untuk semua proyek, tanpa memandang besar-kecilnya nilai
                pekerjaan.
              </p>
            </div>

            <ul className="list-check">
              {[
                'Estimasi waktu dan biaya tertulis sebelum mulai',
                'Demo berkala setiap pekan selama pengerjaan',
                'Kode sumber dan dokumentasi diserahkan penuh',
                'Garansi perbaikan bug selama 3 bulan',
              ].map((item) => (
                <li key={item}>
                  <Check size={16} />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Mari bekerja bersama"
        desc="Kami senang berdiskusi lebih dulu untuk memahami kebutuhan Anda — tanpa biaya dan tanpa kewajiban melanjutkan."
      />
    </>
  )
}
