import { useState } from 'react'
import { ChevronDown } from './Icons.jsx'

/** Accordion pertanyaan yang sering diajukan. */
export default function Faq({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="faq">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div className={`faq__item${isOpen ? ' is-open' : ''}`} key={item.q}>
            <button
              type="button"
              className="faq__q"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span>{item.q}</span>
              <span className="faq__icon" aria-hidden="true">
                <ChevronDown size={17} />
              </span>
            </button>
            <div className="faq__a">
              <div className="faq__a-inner">
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
