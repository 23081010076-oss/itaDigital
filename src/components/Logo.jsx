import { useId } from 'react'
import { site } from '../data/site.js'

/* =========================================================================
   LOGO ITA DIGITAL — rekreasi vektor (SVG) dari logo asli.
   Terdiri dari: bola merah (titik huruf "i"), batang hitam, cincin hitam
   melingkar, pita merah yang menyapu diagonal, serta deretan kotak piksel.

   Ingin memakai file PNG/JPG logo asli? Simpan gambar Anda di
   `public/logo.png` lalu ganti pemakaian <LogoMark /> pada komponen
   Navbar/Footer dengan <img src="./logo.png" ... />.
   ========================================================================= */

export function LogoMark({ size = 44, className = '', title = 'Logo ITA Digital' }) {
  const uid = useId().replace(/[:]/g, '')
  const dot = `dot-${uid}`
  const stem = `stem-${uid}`
  const ring = `ring-${uid}`
  const ribbon = `ribbon-${uid}`
  const shadow = `sh-${uid}`

  return (
    <svg
      viewBox="0 0 122 118"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id={dot} cx="34%" cy="30%" r="78%">
          <stop offset="0%" stopColor="#ff8f99" />
          <stop offset="38%" stopColor="#ef2b3d" />
          <stop offset="78%" stopColor="#c40f20" />
          <stop offset="100%" stopColor="#8b0814" />
        </radialGradient>

        <linearGradient id={stem} x1="18%" y1="0%" x2="88%" y2="100%">
          <stop offset="0%" stopColor="#4a4a55" />
          <stop offset="45%" stopColor="#1d1d23" />
          <stop offset="100%" stopColor="#050507" />
        </linearGradient>

        <linearGradient id={ring} x1="10%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%" stopColor="#3a3a45" />
          <stop offset="50%" stopColor="#131318" />
          <stop offset="100%" stopColor="#040406" />
        </linearGradient>

        <linearGradient id={ribbon} x1="20%" y1="100%" x2="85%" y2="0%">
          <stop offset="0%" stopColor="#8b0814" />
          <stop offset="35%" stopColor="#e11d2e" />
          <stop offset="72%" stopColor="#ff5566" />
          <stop offset="100%" stopColor="#ff8f99" />
        </linearGradient>

        <filter id={shadow} x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="2.5" stdDeviation="2.6" floodColor="#000" floodOpacity="0.22" />
        </filter>
      </defs>

      <g filter={`url(#${shadow})`}>
        {/* Bola merah — titik huruf "i" */}
        <circle cx="35" cy="26" r="13.4" fill={`url(#${dot})`} />

        {/* Batang hitam huruf "i" yang menyatu dengan cincin */}
        <path
          d="M23 52c0-7.2 5.8-13 13-13s13 5.8 13 13v38c0 5.5-4.5 10-10 10H33c-5.5 0-10-4.5-10-10z"
          fill={`url(#${stem})`}
        />

        {/* Cincin hitam melingkar (lengkung membuka di kiri atas) */}
        <circle
          cx="75"
          cy="75"
          r="26.5"
          fill="none"
          stroke={`url(#${ring})`}
          strokeWidth="17"
          strokeLinecap="round"
          strokeDasharray="118 49"
          transform="rotate(-118 75 75)"
        />

        {/* Pita hitam (lapisan belakang pita merah) */}
        <path
          d="M106 12c-4 26-18 44-30 60-10 12-12 26-5 34-17-2-26-16-26-32 1-18 21-28 38-46 5-5 13-14 23-16z"
          fill={`url(#${stem})`}
        />

        {/* Pita merah menyapu diagonal */}
        <path
          d="M99 7c-2 27-16 45-31 61-11 13-14 29-4 37-17-2-28-17-27-35 1-19 22-30 42-48 7-7 12-14 20-15z"
          fill={`url(#${ribbon})`}
        />

        {/* Deretan kotak piksel di kanan atas */}
        <rect x="94" y="3" width="11.5" height="11.5" rx="2.2" fill="#e11d2e" />
        <rect x="108.5" y="9.5" width="7" height="7" rx="1.6" fill="#2b2b33" />
        <rect x="95.5" y="19" width="6.4" height="6.4" rx="1.5" fill="#2b2b33" />
        <rect x="107" y="21.5" width="5" height="5" rx="1.2" fill="#57575f" />
        <rect x="115" y="3" width="5" height="5" rx="1.2" fill="#e11d2e" />
      </g>
    </svg>
  )
}

/** Logo lengkap: lambang + tulisan "ITA DIGITAL". */
export default function Logo({ size = 44, theme = 'dark', showTagline = true, className = '' }) {
  return (
    <span className={`brand ${className}`.trim()}>
      <LogoMark size={size} className="brand__mark" />
      <span className="brand__text">
        <span className="brand__name" style={theme === 'light' ? { color: '#fff' } : undefined}>
          {site.nameFirst} <span>{site.nameSecond.toUpperCase()}</span>
        </span>
        {showTagline && <span className="brand__sub">{site.tagline}</span>}
      </span>
    </span>
  )
}
