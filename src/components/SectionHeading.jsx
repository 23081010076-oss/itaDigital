import Reveal from './Reveal.jsx'

/** Judul bagian dengan label kecil (eyebrow), judul, dan deskripsi. */
export default function SectionHeading({
  eyebrow,
  title,
  desc,
  center = false,
  light = false,
  children,
}) {
  return (
    <Reveal className={`section-head${center ? ' section-head--center' : ''}`}>
      {eyebrow && <span className={`eyebrow${light ? ' eyebrow--light' : ''}`}>{eyebrow}</span>}
      {title && <h2 className="section-title">{title}</h2>}
      {desc && <p className="section-desc">{desc}</p>}
      {children}
    </Reveal>
  )
}
