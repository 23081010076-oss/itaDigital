import { useState } from 'react'
import { ArrowRight, CheckCircle, Clock, Mail, MapPin, Phone, Send, WhatsApp } from './Icons.jsx'
import { services, site, waLink } from '../data/site.js'

const initialForm = { nama: '', email: '', telepon: '', layanan: '', pesan: '' }

export default function ContactSection() {
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
      const el = document.getElementById(`field-${Object.keys(found)[0]}`)
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

  const fieldClass = (field) => `field${errors[field] ? ' has-error' : ''}`

  return (
    <section className="sec sec--tint" id="kontak">
      <div className="container">
        <div className="sec__head sec__head--left">
          <h2>Hubungi Kami</h2>
          <p>
            Tuliskan kondisi yang sedang Anda hadapi, siapa yang akan memakai sistemnya, dan batas
            waktu yang Anda miliki. Kami balas pada hari kerja yang sama.
          </p>
        </div>

        <div className="contact">
          <div className="panel">
            {sent ? (
              <div className="stack">
                <div className="form__success">
                  <CheckCircle size={20} />
                  <div>
                    <strong>Terima kasih, {form.nama}.</strong>
                    <p style={{ marginTop: '6px' }}>
                      Pesan Anda sudah disiapkan di WhatsApp. Kalau jendela WhatsApp belum terbuka,
                      kirimkan pesan tersebut secara manual atau hubungi kami di{' '}
                      {site.phoneDisplay}.
                    </p>
                  </div>
                </div>
                <div className="cluster">
                  <a
                    className="btn btn--primary"
                    href={waLink()}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <WhatsApp size={16} />
                    Buka WhatsApp
                  </a>
                  <button
                    type="button"
                    className="btn"
                    onClick={() => {
                      setForm(initialForm)
                      setErrors({})
                      setSent(false)
                    }}
                  >
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
                    <label htmlFor="field-telepon">Nomor WhatsApp atau telepon</label>
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
                      <option value="">Belum tahu, ingin berdiskusi</option>
                      {services.map((service) => (
                        <option key={service.title} value={service.title}>
                          {service.title}
                        </option>
                      ))}
                      <option value="Produk">Produk siap pakai</option>
                      <option value="Lainnya">Lainnya</option>
                    </select>
                  </div>
                </div>

                <div className={fieldClass('pesan')}>
                  <label htmlFor="field-pesan">
                    Kebutuhan Anda <span className="req">*</span>
                  </label>
                  <textarea
                    id="field-pesan"
                    value={form.pesan}
                    onChange={update('pesan')}
                    placeholder="Contoh: kami butuh sistem pencatatan pesanan yang bisa diakses tim gudang dan pimpinan, target selesai 3 bulan."
                  />
                  {errors.pesan && <span className="field__error">{errors.pesan}</span>}
                </div>

                <div className="cluster" style={{ justifyContent: 'space-between' }}>
                  <button className="btn btn--primary btn--lg" type="submit">
                    <Send size={16} />
                    Kirim
                  </button>
                  <span className="note">Pesan diteruskan lewat WhatsApp agar cepat terjawab.</span>
                </div>
              </form>
            )}
          </div>

          <div className="contact__aside">
            <dl className="facts">
              <div className="facts__row">
                <Mail size={18} />
                <div>
                  <dt>Email</dt>
                  <dd>
                    <a href={`mailto:${site.email}`}>{site.email}</a>
                  </dd>
                </div>
              </div>

              <div className="facts__row">
                <Phone size={18} />
                <div>
                  <dt>Telepon dan WhatsApp</dt>
                  <dd>
                    <a href={waLink()} target="_blank" rel="noreferrer noopener">
                      {site.phoneDisplay}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="facts__row">
                <MapPin size={18} />
                <div>
                  <dt>Kantor</dt>
                  <dd>{site.address}</dd>
                </div>
              </div>

              <div className="facts__row">
                <Clock size={18} />
                <div>
                  <dt>Jam layanan</dt>
                  <dd>{site.hours}</dd>
                </div>
              </div>
            </dl>

            <a className="link" href={site.mapsUrl} target="_blank" rel="noreferrer noopener">
              Buka lokasi di Google Maps
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
