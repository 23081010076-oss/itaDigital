import { site } from '../data/site.js'

/* =========================================================================
   LOGO ITA DIGITAL — versi rata (flat), tanpa gradien maupun bayangan blur.
   Bentuk merah diberi garis tinta supaya terbaca sebagai tempelan cetak di
   atas kertas, sesuai bahasa visual brutalis.
   tone="ink"   -> untuk latar terang (kertas/tulang)
   tone="light" -> untuk latar gelap (tinta)
   ========================================================================= */

export function LogoMark({ size = 40, tone = 'ink', className = '', title = 'Logo ITA Digital' }) {
  const dark = tone === 'light' ? '#f1efe8' : '#0b0b0b'
  const red = '#e11d2e'

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
      {/* Bola merah — titik huruf "i" */}
      <circle cx="35" cy="26" r="13.4" fill={red} stroke={dark} strokeWidth="2" />

      {/* Batang huruf "i" */}
      <path
        d="M23 52c0-7.2 5.8-13 13-13s13 5.8 13 13v38c0 5.5-4.5 10-10 10H33c-5.5 0-10-4.5-10-10z"
        fill={dark}
      />

      {/* Cincin melingkar (lengkung membuka di kiri atas) */}
      <circle
        cx="75"
        cy="75"
        r="26.5"
        fill="none"
        stroke={dark}
        strokeWidth="17"
        strokeDasharray="118 49"
        transform="rotate(-118 75 75)"
      />

      {/* Pita belakang, lalu pita merah di depan */}
      <path
        d="M106 12c-4 26-18 44-30 60-10 12-12 26-5 34-17-2-26-16-26-32 1-18 21-28 38-46 5-5 13-14 23-16z"
        fill={dark}
      />
      <path
        d="M99 7c-2 27-16 45-31 61-11 13-14 29-4 37-17-2-28-17-27-35 1-19 22-30 42-48 7-7 12-14 20-15z"
        fill={red}
        stroke={dark}
        strokeWidth="2"
      />

      {/* Kotak piksel */}
      <rect x="94" y="3" width="11.5" height="11.5" fill={red} stroke={dark} strokeWidth="1.6" />
      <rect x="108.5" y="9.5" width="7" height="7" fill={dark} />
      <rect x="95.5" y="19" width="6.4" height="6.4" fill={dark} />
      <rect x="107" y="21.5" width="5" height="5" fill={red} />
      <rect x="115" y="3" width="5" height="5" fill={dark} />
    </svg>
  )
}

/** Logo lengkap: lambang + tulisan ITA DIGITAL. */
export default function Logo({ size = 40, tone = 'ink', showTagline = true, className = '' }) {
  return (
    <span className={`brand ${className}`.trim()}>
      <LogoMark size={size} tone={tone} className="brand__mark" />
      <span className="brand__text">
        <span className="brand__name" style={tone === 'light' ? { color: '#ffffff' } : undefined}>
          {site.nameFirst} <span>{site.nameSecond}</span>
        </span>
        {showTagline && <span className="brand__sub">{site.tagline}</span>}
      </span>
    </span>
  )
}
