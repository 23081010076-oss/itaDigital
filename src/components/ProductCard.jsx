import { Link } from 'react-router-dom'
import { Icon, ArrowRight } from './Icons.jsx'

export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-card__media">
        <span className={`badge badge--${product.statusTone || 'green'} product-card__badge`}>
          {product.status}
        </span>
        <span className="product-card__glyph">
          <Icon name={product.icon} size={32} />
        </span>
      </div>

      <div className="product-card__body">
        <span className="badge badge--red">{product.category}</span>
        <h3>{product.title}</h3>
        <p className="product-card__desc">{product.description}</p>

        <ul className="list-check">
          {product.features.slice(0, 3).map((feature) => (
            <li key={feature}>
              <Icon name="checkCircle" size={17} />
              {feature}
            </li>
          ))}
        </ul>

        <div className="product-card__foot">
          <Link className="link-arrow" to="/kontak">
            Minta demo
            <ArrowRight size={16} />
          </Link>
          <Link className="btn btn--outline btn--sm" to="/produk">
            Detail
          </Link>
        </div>
      </div>
    </article>
  )
}
