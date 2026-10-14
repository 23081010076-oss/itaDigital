import { Link } from 'react-router-dom'
import { Icon, ArrowUpRight } from './Icons.jsx'

export default function ProjectCard({ project, showStack = true }) {
  return (
    <article className="project-card">
      <div className={`project-card__thumb project-card__thumb--${project.tone || 'b'}`}>
        <span className="project-card__glyph">
          <Icon name={project.icon || 'layers'} size={54} strokeWidth={1.3} />
        </span>
        <span className="badge badge--glass project-card__cat">{project.category}</span>
      </div>

      <div className="project-card__body">
        <span className="muted" style={{ fontSize: '0.8rem', fontWeight: 600 }}>
          {project.client} &middot; {project.year}
        </span>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>

        {showStack && (
          <div className="tag-list">
            {project.stack.map((tech) => (
              <span className="tag" key={tech}>
                {tech}
              </span>
            ))}
          </div>
        )}

        <Link className="link-arrow" to="/portofolio">
          Lihat studi kasus
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </article>
  )
}
