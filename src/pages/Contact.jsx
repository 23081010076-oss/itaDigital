import { useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Faq from '../components/Faq.jsx'
import { Clock, Icon, Mail, MapPin, Phone, Send, WhatsApp } from '../components/Icons.jsx'
import { faqs, services, site, waLink } from '../data/site.js'

const initialForm = { nama: '', email: '', telepon: '', layanan: '', pesan: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const update = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const validate = () => {
    const next = {}
    if (!form.nama.trim()) next.nama = 'Nama wajib diisi.'
    if (!form.email.trim()) next.email = 'Email wajib diisi.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim()))
      next.email = 'Format email belum benar.'
    if (form.telepon.trim() && form.telepon.replace(/\D/g, '').length < 8)
      next.telepon = 'Nomor telepon terlalu pendek.'
    if (!form.pesan.trim()) next.pesan = 'Ceritakan sedikit kebutuhan Anda.'
    else if (form.pesan.trim().length < 12) next.pesan = 'Mohon tuliskan minimal 12 karakter.'
    return next
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const found = validate()
    setErrors(found)

    if (Object.keys(found).length > 0) {
      const firstField = Object.keys(found)[0]
      const el = document.getElementById(`field-${firstField}`)
      if (el) el.focus()
      return
    }

    const message = [
      `Halo ${site.name}, saya ingin berkonsultasi.`,
      '',
      `Nama: ${form.nama}`,
      `Email: ${form.email}`,
      form.telepon ? `Telepon/WA: ${form.telepon}` : null,
      form.layanan ? `Layanan yang diminati: ${form.layanan}` : null,
      '',
      `Kebutuhan: ${form.pesan}`,
    ]
      .filter(Boolean)
      .join('\n')

    window.open(waLink(message), '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  const resetForm = () => {
    setForm(initialForm)
    setErrors({})
    setSent(false)
  }

  const fieldClass = (field) => `field${errors[field] ? ' has-error' : ''}`

  return (
    <>
      <PageHero
        eyebrow="Kontak"
        crumb="Kontak"
        title="Mari bicarakan kebutuhan digital Anda"
        desc="Isi formulir di bawah ini atau hubungi kami langsung melalui WhatsApp. Kami membalas pada hari kerja yang sama, umumnya dalam beberapa jam."
      >
        <a className="btn btn--primary btn--lg" href={waLink()} target="_blank" rel="noreferrer noopener">
          <WhatsApp size={19} />
          Chat WhatsApp
        </a>
        <a className="btn btn--light btn--lg" href={`mailto:${site.email}`}>
          <Mail size={18} />
          Kirim Email
        </a>
      </PageHero>

      {/* ============================ FORM + INFO ============================ */}
      <section className="section">
        <div className="container contact-layout">
          <Reveal className="contact-card">
            <SectionHeading
              eyebrow="Formulir"
              title="Ceritakan kebutuhan Anda"
              desc="Semakin detail keterangan Anda, semakin akurat estimasi yang bisa kami siapkan."
            />

            {sent ? (
              <div className="stack">
                <div className="form__success">
                  <Icon name="checkCircle" size={22} />
                  <div>
                    <strong>Terima kasih, {form.nama}!</strong>
                    <p style={{ marginTop: '4px' }}>
                      Pesan Anda sudah disiapkan di WhatsApp. Jika jendela WhatsApp belum terbuka,
                      kirimkan pesan tersebut secara manual atau hubungi kami di {site.phoneDisplay}.
                    </p>
                  </div>
                </div>
                <div className="cluster">
                  <a className="btn btn--primary" href={waLink()} target="_blank" rel="noreferrer noopener">
                    <WhatsApp size={18} />
                    Buka WhatsApp
                  </a>
                  <button type="button" className="btn btn--outline" onClick={resetForm}>
                    Kirim pesan lain
                  </button>
                </div>
              </div>
            ) : (
              <form className="form" onSubmit={handleSubmit} noValidate>
                <div className="form__row">
                  <div className={fieldClass('nama')}>
                    <label htmlFor="field-nama">
                      Nama lengkap <span className="req">*</span>
                    </label>
                    <input
                      id="field-nama"
                      type="text"
                      value={form.nama}
                      onChange={update('nama')}
                      placeholder="Nama Anda"
                      autoComplete="name"
                    />
                    {errors.nama && <span className="field__error">{errors.nama}</span>}
                  </div>

                  <div className={fieldClass('email')}>
                    <label htmlFor="field-email">
                      Email <span className="req">*</span>
                    </label>
                    <input
                      id="field-email"
                      type="email"
                      value={form.email}
                      onChange={update('email')}
                      placeholder="nama@perusahaan.com"
                      autoComplete="email"
                    />
                    {errors.email && <span className="field__error">{errors.email}</span>}
                  </div>
                </div>

                <div className="form__row">
                  <div className={fieldClass('telepon')}>
                    <label htmlFor="field-telepon">Nomor WhatsApp / Telepon</label>
                    <input
                      id="field-telepon"
                      type="tel"
                      value={form.telepon}
                      onChange={update('telepon')}
                      placeholder="0812xxxxxxx"
                      autoComplete="tel"
                    />
                    {errors.telepon && <span className="field__error">{errors.telepon}</span>}
                  </div>

                  <div className="field">
                    <label htmlFor="field-layanan">Layanan yang diminati</label>
                    <select id="field-layanan" value={form.layanan} onChange={update('layanan')}>
                      <option value="">Belum tahu / ingin berdiskusi</option>
                      {services.map((service) => (
                        <option key={service.slug} value={service.title}>
                          {service.title}
                        </option>
                      ))}
                      <option value="Produk">Produk siap pakai (ITA Panel / Pay / POS)</option>
                      <option value="Lainnya">Lainnya</option>
                    </select>
                  </div>
                </div>

                <div className={fieldClass('pesan')}>
                  <label htmlFor="field-pesan">
                    Ceritakan kebutuhan Anda <span className="req">*</span>
                  </label>
                  <textarea
                    id="field-pesan"
                    value={form.pesan}
                    onChange={update('pesan')}
                    placeholder="Contoh: kami butuh sistem pencatatan pesanan yang bisa diakses tim gudang dan pimpinan, target selesai 3 bulan ke depan."
                  />
                  {errors.pesan && <span className="field__error">{errors.pesan}</span>}
                </div>

                <div className="cluster" style={{ justifyContent: 'space-between' }}>
                  <button className="btn btn--primary btn--lg" type="submit">
                    <Send size={18} />
                    Kirim Pesan
                  </button>
                  <span className="form__note">
                    Pesan diteruskan melalui WhatsApp agar Anda dapat balasan cepat.
                  </span>
                </div>
              </form>
            )}
          </Reveal>

          {/* ---------------------------- Sisi informasi ---------------------------- */}
          <div className="contact-aside">
            <Reveal variant="right" className="contact-panel">
              <h4>Informasi kontak</h4>
              <p>Silakan pilih jalur yang paling nyaman untuk Anda.</p>

              <div className="contact-panel__list">
                <div className="contact-panel__item">
                  <Mail size={19} />
                  <div>
                    <b>Email</b>
                    <span>
                      <a href={`mailto:${site.email}`}>{site.email}</a>
                    </span>
                  </div>
                </div>

                <div className="contact-panel__item">
                  <Phone size={19} />
                  <div>
                    <b>Telepon / WhatsApp</b>
                    <span>
                      <a href={waLink()} target="_blank" rel="noreferrer noopener">
                        {site.phoneDisplay}
                      </a>
                    </span>
                  </div>
                </div>

                <div className="contact-panel__item">
                  <MapPin size={19} />
                  <div>
                    <b>Kantor</b>
                    <span>{site.address}</span>
                  </div>
                </div>

                <div className="contact-panel__item">
                  <Clock size={19} />
                  <div>
                    <b>Jam layanan</b>
                    <span>{site.hours}</span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal variant="right" delay={120} className="map-frame">
              <span className="map-frame__inner">
                <span className="map-frame__pin">
                  <MapPin size={24} />
                </span>
                <strong style={{ fontFamily: 'var(--font-display)' }}>Lokasi kantor kami</strong>
                <span className="muted" style={{ fontSize: '.86rem', maxWidth: '260px' }}>
                  {site.address}
                </span>
                <a
                  className="btn btn--outline btn--sm"
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Buka di Google Maps
                </a>
              </span>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================================ FAQ ================================ */}
      <section className="section section--soft">
        <div className="container contact-layout" style={{ alignItems: 'start' }}>
          <SectionHeading
            eyebrow="Pertanyaan Umum"
            title="Sebelum Anda menghubungi kami"
            desc="Beberapa pertanyaan ini paling sering muncul dari calon klien kami."
          />
          <Reveal variant="right">
            <Faq items={faqs.slice(0, 4)} />
          </Reveal>
        </div>
      </section>
    </>
  )
}
