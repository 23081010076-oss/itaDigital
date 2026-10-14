import { Icon } from './Icons.jsx'

const bars = [42, 68, 54, 82, 61, 94, 72]

/** Visual mockup dashboard untuk bagian hero beranda. */
export default function HeroMock() {
  return (
    <div className="mock">
      <div className="mock__bar">
        <span className="mock__dot mock__dot--red" />
        <span className="mock__dot" />
        <span className="mock__dot" />
        <span className="mock__url">app.itadigital.id/dashboard</span>
      </div>

      <div className="mock__body">
        <div className="mock__kpis">
          <div className="mock__kpi">
            <span className="mock__kpi-label">Uptime</span>
            <span className="mock__kpi-value">
              99.9 <span>+0.2%</span>
            </span>
          </div>
          <div className="mock__kpi">
            <span className="mock__kpi-label">Respon API</span>
            <span className="mock__kpi-value">128ms</span>
          </div>
          <div className="mock__kpi">
            <span className="mock__kpi-label">Proyek Aktif</span>
            <span className="mock__kpi-value">12</span>
          </div>
        </div>

        <div className="mock__chart" aria-hidden="true">
          {bars.map((height, index) => (
            <span
              className="mock__bar-col"
              key={index}
              style={{ height: `${height}%`, animationDelay: `${index * 70 + 200}ms` }}
            />
          ))}
        </div>

        <div className="mock__rows" aria-hidden="true">
          {[
            { w: '58%', tag: 'Selesai' },
            { w: '42%', tag: 'Uji coba' },
            { w: '66%', tag: 'Berjalan' },
          ].map((row, index) => (
            <div className="mock__row" key={index}>
              <span className="mock__row-dot" />
              <span className="mock__row-line" style={{ width: row.w }} />
              <span className="mock__row-tag">{row.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/** Chip mengambang di sekitar mockup. */
export function HeroChip({ position = 'tl', icon = 'shield', title, sub }) {
  return (
    <div className={`float-chip float-chip--${position}`}>
      <span className="float-chip__icon">
        <Icon name={icon} size={18} />
      </span>
      <span>
        <span className="float-chip__title">{title}</span>
        <br />
        <span className="float-chip__sub">{sub}</span>
      </span>
    </div>
  )
}
