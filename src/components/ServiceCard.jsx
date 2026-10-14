import { Icon } from './Icons.jsx'

export default function ServiceCard({ service }) {
  return (
    <article className="serv">
      <span className="badge">
        <Icon name={service.icon} size={26} />
      </span>
      <h3>{service.title}</h3>
      <p>{service.line}</p>
    </article>
  )
}
