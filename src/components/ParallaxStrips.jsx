import { useEffect, useRef } from 'react'
import styles from './ParallaxStrips.module.css'

export default function ParallaxStrips() {
  const leftRef  = useRef(null)
  const rightRef = useRef(null)

  useEffect(() => {
    let ticking = false

    const onMouseMove = (e) => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const cx = window.innerWidth  / 2
        const cy = window.innerHeight / 2
        const x  = ((e.clientX - cx) / cx) * 22   // ±22 px horizontal
        const y  = ((e.clientY - cy) / cy) * 30   // ±30 px vertical
        if (leftRef.current)  leftRef.current.style.backgroundPosition  = `${x}px ${y}px`
        if (rightRef.current) rightRef.current.style.backgroundPosition = `${x}px ${y}px`
        ticking = false
      })
    }

    window.addEventListener('mousemove', onMouseMove)
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [])

  return (
    <>
      <div ref={leftRef}  className={`${styles.strip} ${styles.left}`}  aria-hidden="true" />
      <div ref={rightRef} className={`${styles.strip} ${styles.right}`} aria-hidden="true" />
    </>
  )
}
