import { Link } from 'react-router-dom'
import { Icon, ArrowRight } from './Icons.jsx'

export default function ServiceCard({ service, maxPoints = 3, showLink = true }) {
  return (
    <article className="service-card">
      <span className="icon-box">
        <Icon name={service.icon} size={24} />
      </span>
      <h3 className="service-card__title">{service.title}</h3>
      <p className="service-card__desc">{service.short || service.description}</p>

      {maxPoints > 0 && (
        <ul className="service-card__points">
          {service.points.slice(0, maxPoints).map((point) => (
            <li key={point}>
              <Icon name="check" size={15} />
              {point}
            </li>
          ))}
        </ul>
      )}

      {showLink && (
        <Link className="link-arrow" to="/layanan">
          Selengkapnya
          <ArrowRight size={16} />
        </Link>
      )}
    </article>
  )
}
