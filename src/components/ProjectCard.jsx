import ImageSlot from './ImageSlot.jsx'

export default function ProjectCard({ project }) {
  return (
    <article className="card">
      <ImageSlot
        src={project.image}
        alt={`Tampilan ${project.title}`}
        note={`Tangkapan layar ${project.title}, rasio 4:3.`}
        className="proj__shot"
      />

      <div className="card__body">
        <div className="proj__meta">
          <span className="chip chip--red">{project.category}</span>
          <span className="note num">{project.year}</span>
        </div>

        <h3>{project.title}</h3>
        <p style={{ color: 'var(--ink-soft)', fontSize: '0.96rem' }}>{project.line}</p>
      </div>
    </article>
  )
}
