import { ArrowRight, WhatsApp } from './Icons.jsx'
import ImageSlot from './ImageSlot.jsx'
import { site, waLink } from '../data/site.js'

export default function ProductCard({ product }) {
  return (
    <article className="card">
      <ImageSlot
        src={product.image}
        alt={`Tampilan ${product.title}`}
        note={`Tangkapan layar ${product.title}, rasio 16:10.`}
        className="prod__shot"
      />

      <div className="card__body">
        <span className="chip">{product.kind}</span>
        <h3>{product.title}</h3>
        <p style={{ color: 'var(--ink-soft)', fontSize: '0.96rem' }}>{product.line}</p>

        <div className="card__foot">
          <span className="chip chip--red">{product.status}</span>
          <a
            className="link"
            href={waLink(`Halo ${site.name}, saya ingin demo produk ${product.title}.`)}
            target="_blank"
            rel="noreferrer noopener"
          >
            Minta demo
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </article>
  )
}
