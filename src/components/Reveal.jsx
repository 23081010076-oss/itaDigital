import { useEffect, useRef, useState } from 'react'

/**
 * Membungkus konten dengan animasi muncul saat discroll.
 * variant: '' | 'left' | 'right' | 'zoom'
 */
export default function Reveal({
  children,
  delay = 0,
  variant = '',
  as: Tag = 'div',
  className = '',
  style,
  ...rest
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -70px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const classes = ['reveal', variant && `reveal--${variant}`, visible && 'is-visible', className]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag ref={ref} className={classes} style={{ '--reveal-delay': `${delay}ms`, ...style }} {...rest}>
      {children}
    </Tag>
  )
}
