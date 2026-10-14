/* =========================================================================
   Kumpulan ikon garis (inline SVG) — tidak butuh paket eksternal.
   Semua ikon memakai currentColor sehingga mudah diwarnai lewat CSS.
   ========================================================================= */

const Stroke = ({ size = 22, strokeWidth = 1.75, children, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
    {...rest}
  >
    {children}
  </svg>
)

const Solid = ({ size = 22, children, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    {...rest}
  >
    {children}
  </svg>
)

/* ------------------------------- Ikon garis ------------------------------- */
export const Code = (p) => (
  <Stroke {...p}>
    <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
  </Stroke>
)

export const Shield = (p) => (
  <Stroke {...p}>
    <path d="M12 22s8-3.6 8-9.6V5.4L12 2.4 4 5.4v7c0 6 8 9.6 8 9.6z" />
    <path d="M9.4 11.8l1.9 1.9 3.5-3.8" />
  </Stroke>
)

export const Compass = (p) => (
  <Stroke {...p}>
    <circle cx="12" cy="12" r="9.2" />
    <path d="M15.6 8.4l-1.9 5.3-5.3 1.9 1.9-5.3 5.3-1.9z" />
  </Stroke>
)

export const Chart = (p) => (
  <Stroke {...p}>
    <path d="M3 3v18h18" />
    <path d="M7 15l3.5-4 3 2.5L20 7" />
  </Stroke>
)

export const Server = (p) => (
  <Stroke {...p}>
    <rect x="2.5" y="3" width="19" height="7.5" rx="2.2" />
    <rect x="2.5" y="13.5" width="19" height="7.5" rx="2.2" />
    <path d="M6.5 6.7h.01M6.5 17.2h.01" />
  </Stroke>
)

export const Card = (p) => (
  <Stroke {...p}>
    <rect x="2" y="4.5" width="20" height="15" rx="2.6" />
    <path d="M2 10h20M6 15h3" />
  </Stroke>
)

export const Book = (p) => (
  <Stroke {...p}>
    <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H19v18H6.5A2.5 2.5 0 0 0 4 22.5z" />
    <path d="M4 17.5A2.5 2.5 0 0 1 6.5 15H19" />
    <path d="M8.5 6.5h6" />
  </Stroke>
)

export const Store = (p) => (
  <Stroke {...p}>
    <path d="M3 9.5V20a1.5 1.5 0 0 0 1.5 1.5h15A1.5 1.5 0 0 0 21 20V9.5" />
    <path d="M2 9.5L4.4 3h15.2L22 9.5a3.2 3.2 0 0 1-5.4 1.4 3.2 3.2 0 0 1-4.6 0 3.2 3.2 0 0 1-4.6 0A3.2 3.2 0 0 1 2 9.5z" />
    <path d="M9.5 21.5v-5.2h5v5.2" />
  </Stroke>
)

export const Users = (p) => (
  <Stroke {...p}>
    <path d="M16.5 20.5v-1.8a3.7 3.7 0 0 0-3.7-3.7H6.7A3.7 3.7 0 0 0 3 18.7v1.8" />
    <circle cx="9.7" cy="7.6" r="3.6" />
    <path d="M21 20.5v-1.8a3.7 3.7 0 0 0-2.8-3.6M15.6 4.3a3.7 3.7 0 0 1 0 6.7" />
  </Stroke>
)

export const Target = (p) => (
  <Stroke {...p}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
  </Stroke>
)

export const Sparkles = (p) => (
  <Stroke {...p}>
    <path d="M12 3l1.7 4.6L18.3 9.3l-4.6 1.7L12 15.6l-1.7-4.6L5.7 9.3l4.6-1.7L12 3z" />
    <path d="M18.6 15.4l.8 2.1 2.1.8-2.1.8-.8 2.1-.8-2.1-2.1-.8 2.1-.8.8-2.1zM5.4 2.6l.5 1.4 1.4.5-1.4.5-.5 1.4-.5-1.4L3.5 4.5l1.4-.5.5-1.4z" />
  </Stroke>
)

export const Zap = (p) => (
  <Stroke {...p}>
    <path d="M13.5 2L4 14h6.5l-1 8L20 10h-6.5l1-8z" />
  </Stroke>
)

export const Rocket = (p) => (
  <Stroke {...p}>
    <path d="M5 15.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.9.7-2.2-.1-3a2.2 2.2 0 0 0-2.9 0z" />
    <path d="M12.5 15.5L9 12a20 20 0 0 1 2.2-4.2A12.5 12.5 0 0 1 21.5 3c0 2.7-.8 7.4-5.8 10.4a21 21 0 0 1-3.2 1.6z" />
    <path d="M9 12H4.5s.4-3 1.9-4c1.4-1 4.6 0 4.6 0M12.5 15.5v4.5s3-.4 4-1.9c1-1.4 0-4.6 0-4.6" />
  </Stroke>
)

export const Check = (p) => (
  <Stroke {...p} strokeWidth={2.4}>
    <path d="M20 6.5L9.4 17.1 4 11.7" />
  </Stroke>
)

export const CheckCircle = (p) => (
  <Stroke {...p}>
    <circle cx="12" cy="12" r="9.2" />
    <path d="M8.3 12.4l2.6 2.6 4.8-5.4" />
  </Stroke>
)

export const ArrowRight = (p) => (
  <Stroke {...p}>
    <path d="M4.5 12h15M13 5.5l6.5 6.5-6.5 6.5" />
  </Stroke>
)

export const ArrowUpRight = (p) => (
  <Stroke {...p}>
    <path d="M7 17L17 7M8.5 7H17v8.5" />
  </Stroke>
)

export const ArrowUp = (p) => (
  <Stroke {...p}>
    <path d="M12 19.5v-15M5.5 11L12 4.5 18.5 11" />
  </Stroke>
)

export const ChevronDown = (p) => (
  <Stroke {...p}>
    <path d="M6 9.5l6 6 6-6" />
  </Stroke>
)

export const ChevronRight = (p) => (
  <Stroke {...p}>
    <path d="M9.5 5.5l6.5 6.5-6.5 6.5" />
  </Stroke>
)

export const Menu = (p) => (
  <Stroke {...p}>
    <path d="M3.5 6.5h17M3.5 12h17M3.5 17.5h17" />
  </Stroke>
)

export const Close = (p) => (
  <Stroke {...p}>
    <path d="M18 6L6 18M6 6l12 12" />
  </Stroke>
)

export const Mail = (p) => (
  <Stroke {...p}>
    <rect x="2.5" y="4.5" width="19" height="15" rx="2.4" />
    <path d="M2.9 7.2L12 13l9.1-5.8" />
  </Stroke>
)

export const Phone = (p) => (
  <Stroke {...p}>
    <path d="M21.5 16.9v3a2 2 0 0 1-2.2 2 19.7 19.7 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.7 19.7 0 0 1 1.6 4.2 2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L7.6 9.8a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.8 2.1z" />
  </Stroke>
)

export const MapPin = (p) => (
  <Stroke {...p}>
    <path d="M20.5 10.4c0 6.4-8.5 11.6-8.5 11.6S3.5 16.8 3.5 10.4a8.5 8.5 0 0 1 17 0z" />
    <circle cx="12" cy="10.2" r="3.1" />
  </Stroke>
)

export const Clock = (p) => (
  <Stroke {...p}>
    <circle cx="12" cy="12" r="9.2" />
    <path d="M12 7v5.4l3.4 2" />
  </Stroke>
)

export const Send = (p) => (
  <Stroke {...p}>
    <path d="M21.5 2.5L10.8 13.2M21.5 2.5l-7 19-4.7-8.3-8.3-4.7 20-6z" />
  </Stroke>
)

export const Gift = (p) => (
  <Stroke {...p}>
    <path d="M20 12v9.5H4V12" />
    <rect x="2" y="7" width="20" height="5" rx="1.6" />
    <path d="M12 21.5V7" />
    <path d="M12 7H7.5a2.75 2.75 0 1 1 0-5.5C11 1.5 12 7 12 7zM12 7h4.5a2.75 2.75 0 1 0 0-5.5C13 1.5 12 7 12 7z" />
  </Stroke>
)

export const Globe = (p) => (
  <Stroke {...p}>
    <circle cx="12" cy="12" r="9.2" />
    <path d="M2.8 12h18.4M12 2.8a14.5 14.5 0 0 1 0 18.4 14.5 14.5 0 0 1 0-18.4z" />
  </Stroke>
)

export const Lock = (p) => (
  <Stroke {...p}>
    <rect x="3.5" y="10.5" width="17" height="10.5" rx="2.4" />
    <path d="M7.5 10.5V7a4.5 4.5 0 0 1 9 0v3.5" />
  </Stroke>
)

export const Layers = (p) => (
  <Stroke {...p}>
    <path d="M12 2.6l9 4.9-9 4.9-9-4.9 9-4.9z" />
    <path d="M3 12.4l9 4.9 9-4.9M3 17.2l9 4.9 9-4.9" />
  </Stroke>
)

export const Briefcase = (p) => (
  <Stroke {...p}>
    <rect x="2.5" y="7" width="19" height="14" rx="2.4" />
    <path d="M8.5 7V5.2A2.2 2.2 0 0 1 10.7 3h2.6a2.2 2.2 0 0 1 2.2 2.2V7" />
    <path d="M2.5 12.5h19" />
  </Stroke>
)

export const Refresh = (p) => (
  <Stroke {...p}>
    <path d="M20.5 12a8.5 8.5 0 1 1-2.8-6.3L21 8.4" />
    <path d="M21 3.5v5h-5" />
  </Stroke>
)

export const Hub = (p) => (
  <Stroke {...p}>
    <circle cx="12" cy="12" r="3" />
    <circle cx="5" cy="5" r="2.4" />
    <circle cx="19" cy="5" r="2.4" />
    <circle cx="5" cy="19" r="2.4" />
    <circle cx="19" cy="19" r="2.4" />
    <path d="M6.7 6.7l3.4 3.4M17.3 6.7l-3.4 3.4M6.7 17.3l3.4-3.4M17.3 17.3l-3.4-3.4" />
  </Stroke>
)

export const WhatsApp = (p) => (
  <Solid {...p}>
    <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.94.56 3.75 1.53 5.28L2 22l5-1.66a9.8 9.8 0 0 0 5.04 1.38h.01c5.43 0 9.84-4.4 9.84-9.84 0-2.63-1.02-5.1-2.88-6.96A9.78 9.78 0 0 0 12.04 2zm0 1.8c2.15 0 4.16.84 5.68 2.36a7.98 7.98 0 0 1 2.35 5.68c0 4.44-3.6 8.04-8.04 8.04a8 8 0 0 1-4.4-1.32l-.32-.2-2.96.98.99-2.9-.2-.33a7.98 7.98 0 0 1-1.24-4.27c0-4.44 3.61-8.04 8.05-8.04zm-3.6 3.9c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.72 2.75 4.24 3.75 2.1.83 2.53.68 2.98.63.46-.04 1.48-.6 1.69-1.19.2-.58.2-1.08.14-1.18-.06-.1-.23-.17-.48-.29-.25-.12-1.48-.73-1.71-.81-.23-.09-.4-.13-.56.12-.17.25-.65.83-.8 1-.14.16-.29.18-.54.06-.25-.12-1.06-.39-2.01-1.24-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.01-.38.11-.5.11-.11.29-.3.43-.45.14-.16.19-.27.29-.44.1-.17.05-.32-.01-.44-.06-.12-.56-1.42-.78-1.94-.2-.51-.4-.44-.55-.45h-.5z" />
  </Solid>
)

export const Instagram = (p) => (
  <Stroke {...p}>
    <rect x="2.5" y="2.5" width="19" height="19" rx="5.4" />
    <circle cx="12" cy="12" r="4.2" />
    <path d="M17.4 6.6h.01" />
  </Stroke>
)

export const Linkedin = (p) => (
  <Stroke {...p}>
    <path d="M15.6 8.6a5.6 5.6 0 0 1 5.6 5.6v6.3h-4v-6.3a1.7 1.7 0 0 0-3.4 0v6.3h-4V8.9h4v1.4a5.5 5.5 0 0 1 1.8-1.7z" />
    <rect x="2.4" y="8.9" width="4" height="11.6" />
    <circle cx="4.4" cy="4.4" r="2" />
  </Stroke>
)

export const Facebook = (p) => (
  <Solid {...p}>
    <path d="M13.5 21.9v-8.1h2.8l.5-3.3h-3.3V8.4c0-.9.3-1.6 1.7-1.6h1.7V3.9c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5v2.2H7.7v3.3h2.2v8.1h3.6z" />
  </Solid>
)

export const Quote = (p) => (
  <Solid {...p}>
    <path d="M9.6 5.2C6.3 6.7 4.2 9.6 4.2 13.1c0 3.3 1.9 5.5 4.5 5.5 2.3 0 3.9-1.6 3.9-3.7 0-2-1.4-3.4-3.3-3.4-.4 0-.8 0-1 .1.3-1.6 1.7-3 3.5-4l-2.2-2.4zm9.5 0c-3.3 1.5-5.4 4.4-5.4 7.9 0 3.3 1.9 5.5 4.5 5.5 2.3 0 3.9-1.6 3.9-3.7 0-2-1.4-3.4-3.3-3.4-.4 0-.8 0-1 .1.3-1.6 1.7-3 3.5-4l-2.2-2.4z" />
  </Solid>
)

export const Play = (p) => (
  <Solid {...p}>
    <path d="M8.2 5.4l11 6.6-11 6.6V5.4z" />
  </Solid>
)

export const Doc = (p) => (
  <Stroke {...p}>
    <path d="M14 2.5H6.8a2.3 2.3 0 0 0-2.3 2.3v14.4a2.3 2.3 0 0 0 2.3 2.3h10.4a2.3 2.3 0 0 0 2.3-2.3V8z" />
    <path d="M14 2.5V8h5.5M8.8 13.4h6.4M8.8 17.1h4.4" />
  </Stroke>
)

export const Database = (p) => (
  <Stroke {...p}>
    <ellipse cx="12" cy="5.2" rx="8.6" ry="3.1" />
    <path d="M20.6 12c0 1.7-3.85 3.1-8.6 3.1S3.4 13.7 3.4 12" />
    <path d="M3.4 5.2v13.6c0 1.7 3.85 3.1 8.6 3.1s8.6-1.4 8.6-3.1V5.2" />
  </Stroke>
)

/* --------------------- Peta nama ikon -> komponen --------------------- */
export const iconMap = {
  code: Code,
  shield: Shield,
  compass: Compass,
  chart: Chart,
  server: Server,
  card: Card,
  book: Book,
  store: Store,
  users: Users,
  target: Target,
  sparkles: Sparkles,
  zap: Zap,
  rocket: Rocket,
  check: Check,
  checkCircle: CheckCircle,
  arrowRight: ArrowRight,
  arrowUpRight: ArrowUpRight,
  arrowUp: ArrowUp,
  chevronDown: ChevronDown,
  chevronRight: ChevronRight,
  menu: Menu,
  close: Close,
  mail: Mail,
  phone: Phone,
  mapPin: MapPin,
  clock: Clock,
  send: Send,
  gift: Gift,
  globe: Globe,
  lock: Lock,
  layers: Layers,
  briefcase: Briefcase,
  refresh: Refresh,
  hub: Hub,
  whatsapp: WhatsApp,
  instagram: Instagram,
  linkedin: Linkedin,
  facebook: Facebook,
  quote: Quote,
  play: Play,
  doc: Doc,
  database: Database,
}

/** Komponen ikon dinamis: <Icon name="code" size={20} /> */
export const Icon = ({ name, ...rest }) => {
  const Cmp = iconMap[name] || Code
  return <Cmp {...rest} />
}

export default Icon
