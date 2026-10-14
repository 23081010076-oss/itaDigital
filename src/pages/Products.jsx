import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import CtaBand from '../components/CtaBand.jsx'
import Faq from '../components/Faq.jsx'
import { ArrowRight, Check, Icon, WhatsApp } from '../components/Icons.jsx'
import { products, waLink } from '../data/site.js'

/* Paket kerja sama — harga di bawah ini hanya contoh, silakan ganti. */
const plans = [
  {
    name: 'Sewa Bulanan',
    price: 'Mulai Rp 750rb',
    unit: '/ bulan',
    desc: 'Cocok untuk yang ingin mencoba dulu tanpa investasi awal besar.',
    features: [
      'Akses penuh seluruh modul',
      'Server & pemeliharaan ditangani kami',
      'Pembaruan versi otomatis',
      'Dukungan teknis via WhatsApp',
    ],
    highlight: false,
  },
  {
    name: 'Lisensi Tahunan',
    price: 'Mulai Rp 6,5jt',
    unit: '/ tahun',
    desc: 'Pilihan paling sering dipakai klien kami — lebih hemat jangka panjang.',
    features: [
      'Hemat hingga 30% dibanding bulanan',
      'Domain & branding sendiri',
      'Pelatihan tim pengguna',
      'Sesi konsultasi tiap kuartal',
    ],
    highlight: true,
  },
  {
    name: 'Custom / On-Premise',
    price: 'Sesuai kebutuhan',
    unit: '',
    desc: 'Untuk instansi yang wajib menyimpan seluruh data di infrastruktur sendiri.',
    features: [
      'Instalasi di server Anda sendiri',
      'Penyesuaian modul & alur kerja',
      'Integrasi dengan sistem internal',
      'Kontrak pemeliharaan khusus',
    ],
    highlight: false,
  },
]

const productFaqs = [
  {
    q: 'Apakah produk bisa disesuaikan dengan alur kerja kami?',
    a: 'Bisa. Semua produk kami dibangun dengan struktur modular, sehingga penambahan kolom, alur persetujuan, atau laporan khusus dapat dikerjakan tanpa harus membangun ulang dari awal.',
  },
  {
    q: 'Di mana data kami disimpan?',
    a: 'Secara bawaan data disimpan pada server cloud yang kami kelola di wilayah Asia Tenggara dan dicadangkan harian. Untuk kebutuhan tertentu, produk juga bisa dipasang di server milik Anda sendiri.',
  },
  {
    q: 'Berapa lama proses pemasangan awal?',
    a: 'Untuk paket standar, akun dan data awal umumnya siap dalam 3–7 hari kerja. Pemasangan khusus dengan migrasi data lama biasanya memerlukan 2–4 pekan.',
  },
  {
    q: 'Apakah ada pelatihan untuk tim kami?',
    a: 'Ada. Setiap pemasangan disertai sesi pelatihan daring dan panduan penggunaan tertulis. Pelatihan tambahan bisa dijadwalkan sesuai kebutuhan.',
  },
]

export default function Products() {
  return (
    <>
      <PageHero
        eyebrow="Produk"
        crumb="Produk"
        title="Produk digital siap pakai untuk kebutuhan umum"
        desc="Kami menghadirkan produk yang dibangun dari pengalaman mengerjakan proyek serupa — sehingga Anda tidak perlu memulai dari nol."
      >
        <a
          className="btn btn--primary btn--lg"
          href={waLink('Halo ITA Digital, saya ingin menjadwalkan demo produk Anda.')}
          target="_blank"
          rel="noreferrer noopener"
        >
          <WhatsApp size={19} />
          Jadwalkan demo
        </a>
        <Link className="btn btn--light btn--lg" to="/kontak">
          Ajukan pertanyaan
          <ArrowRight size={18} />
        </Link>
      </PageHero>

      {/* ============================ DAFTAR PRODUK ============================ */}
      <section className="section">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Katalog Produk"
            title="Pilih yang paling mendekati kebutuhan Anda"
            desc="Semua produk tersedia dalam versi sewa maupun lisensi, dan dapat disesuaikan dengan proses bisnis Anda."
          />

          <div className="grid grid--3">
            {products.map((product, index) => (
              <Reveal key={product.slug} delay={index * 90} id={product.slug}>
                <article className="card card--hover" style={{ overflow: 'hidden', height: '100%' }}>
                  <div className={`product-card__media project-card__thumb--${index % 2 === 0 ? 'b' : 'a'}`}>
                    <span className={`badge badge--${product.statusTone} product-card__badge`}>
                      {product.status}
                    </span>
                    <span className="product-card__glyph">
                      <Icon name={product.icon} size={32} />
                    </span>
                  </div>

                  <div className="product-card__body">
                    <span className="badge badge--red">{product.category}</span>
                    <h3>{product.title}</h3>
                    <p className="product-card__desc">{product.description}</p>

                    <ul className="list-check">
                      {product.features.map((feature) => (
                        <li key={feature}>
                          <Check size={16} />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="product-card__foot">
                      <a
                        className="link-arrow"
                        href={waLink(`Halo ITA Digital, saya ingin demo produk ${product.title}.`)}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        Minta demo
                        <ArrowRight size={16} />
                      </a>
                      <Link className="btn btn--outline btn--sm" to="/kontak">
                        Tanya detail
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== PAKET ============================== */}
      <section className="section section--soft">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Skema Kerja Sama"
            title="Cara Anda memakai produk kami"
            desc="Pilih skema yang paling sesuai dengan skala dan aturan pengelolaan data di tempat Anda."
          />

          <div className="grid grid--3">
            {plans.map((plan, index) => (
              <Reveal key={plan.name} delay={index * 100}>
                <article
                  className="card card--pad"
                  style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    borderColor: plan.highlight ? 'rgba(225,29,46,.35)' : undefined,
                    boxShadow: plan.highlight ? 'var(--sh-lg)' : undefined,
                    position: 'relative',
                  }}
                >
                  {plan.highlight && (
                    <span
                      className="badge badge--red"
                      style={{ position: 'absolute', top: '-13px', left: '26px' }}
                    >
                      Paling dipilih
                    </span>
                  )}

                  <h3>{plan.name}</h3>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--ink-900)' }}>
                    {plan.price}
                    <span style={{ fontSize: '.85rem', fontWeight: 500, color: 'var(--text-muted)' }}>
                      {' '}
                      {plan.unit}
                    </span>
                  </p>
                  <p style={{ fontSize: '.92rem', color: 'var(--text-soft)' }}>{plan.desc}</p>

                  <ul className="list-check" style={{ flex: 1 }}>
                    {plan.features.map((feature) => (
                      <li key={feature}>
                        <Check size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    className={`btn ${plan.highlight ? 'btn--primary' : 'btn--outline'} btn--block`}
                    href={waLink(`Halo ITA Digital, saya ingin informasi paket ${plan.name}.`)}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Pilih paket ini
                  </a>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={140} className="text-center" style={{ marginTop: '30px' }}>
            <p className="muted" style={{ fontSize: '.86rem' }}>
              Harga pada bagian ini masih berupa contoh. Hubungi kami untuk penawaran resmi sesuai
              kebutuhan Anda.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================================ FAQ ================================ */}
      <section className="section">
        <div className="container contact-layout" style={{ alignItems: 'start' }}>
          <SectionHeading
            eyebrow="Pertanyaan Produk"
            title="Hal yang perlu Anda ketahui"
            desc="Kalau ada hal lain yang belum terjawab, tim kami siap membantu melalui WhatsApp pada hari kerja."
          />
          <Reveal variant="right">
            <Faq items={productFaqs} />
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Ingin melihat produknya secara langsung?"
        desc="Kami sediakan sesi demo daring 30 menit tanpa biaya, lengkap dengan contoh data agar Anda bisa menilai kesesuaiannya."
      />
    </>
  )
}
