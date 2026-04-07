import { useEffect, useRef, useState } from 'react'

/**
 * Returns [ref, isVisible].
 * Attach ref to any DOM element; isVisible becomes true once
 * the element crosses the viewport threshold (fires once by default).
 */
export function useReveal({ threshold = 0.1, once = true } = {}) {
  const ref     = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, once])

  return [ref, visible]
}
