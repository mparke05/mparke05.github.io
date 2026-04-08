import { useState, useEffect, useRef } from 'react'
import styles from './Hero.module.css'

const accolades = [
  {
    type: 'award',
    eyebrow: 'RTX Technology Research Center',
    title: 'RTX Collaboration Award',
    body: 'Awarded for cross-team impact designing and building an automated gas flow measurement robot for LPBF machines.',
  },
  {
    type: 'award',
    eyebrow: 'ME3950 Final Project',
    title: 'Best Computational Analysis',
    body: 'Recognized for the CFD thermal simulation of cycling hand temperatures and windshield geometry optimization.',
  },
  {
    type: 'quote',
    body: 'The process engineers have been very impressed with the quality of work that Matt has done and his quick turnaround on tasks.',
    attribution: 'Principal Engineer, RTX',
  },
]

export default function Hero() {
  const [idx,  setIdx]  = useState(0)
  const [show, setShow] = useState(true)
  const videoRef = useRef(null)

  useEffect(() => {
    const loop = setInterval(() => {
      setShow(false)
      setTimeout(() => {
        setIdx(i => (i + 1) % accolades.length)
        setShow(true)
      }, 380)
    }, 4800)
    return () => clearInterval(loop)
  }, [])

  const a = accolades[idx]

  return (
    <section id="hero" className={styles.hero}>
      <video
        ref={videoRef}
        className={styles.video}
        src="/hero.mp4"
        autoPlay muted loop playsInline
        onCanPlay={() => { if (videoRef.current) videoRef.current.playbackRate = 0.75 }}
      />
      <div className={styles.overlay} />

      <div className={styles.content}>
        <p className={styles.label}>Mechanical Engineering · Villanova University</p>
        <h1 className={styles.title}>
          Hi, I'm Matthew<br />
          <span>Parker.</span>
        </h1>
        <p className={styles.subtitle}>
          I'm a junior mechanical engineering student at Villanova University pursuing an aerospace minor and a thermal fluids concentration.
        </p>
        <div className={styles.actions}>
          <a href="#projects" className={styles.btnPrimary}>View Work</a>
          <a href="#about"    className={styles.btnSecondary}>About Me</a>
        </div>
      </div>

      {/* ── Accolades panel ───────────────────────────── */}
      <div className={styles.accoladesPanel}>
        <p className={styles.accoladesLabel}>Accolades</p>

        <div className={`${styles.accolade} ${show ? styles.accoladeVisible : ''}`}>
          {a.type === 'award' ? (
            <>
              <div className={styles.awardIcon}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1l1.545 3.13L12 4.635l-2.5 2.435.59 3.44L7 8.885l-3.09 1.625L4.5 7.07 2 4.635l3.455-.505L7 1z"
                    stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" fill="none"/>
                </svg>
              </div>
              <p className={styles.accoladeEyebrow}>{a.eyebrow}</p>
              <p className={styles.accoladeTitle}>{a.title}</p>
              <p className={styles.accoladeBody}>{a.body}</p>
            </>
          ) : (
            <>
              <span className={styles.quoteMark}>"</span>
              <p className={styles.accoladeBody}>{a.body}</p>
              <p className={styles.accoladeAttribution}>— {a.attribution}</p>
            </>
          )}
        </div>

        {/* Dot indicators */}
        <div className={styles.dots}>
          {accolades.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === idx ? styles.dotActive : ''}`}
              onClick={() => { setShow(false); setTimeout(() => { setIdx(i); setShow(true) }, 380) }}
              aria-label={`Accolade ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span className={styles.scrollLabel}>Scroll</span>
        <div className={styles.scrollLine} />
      </div>

      <div className={styles.statsRow}>
        {[
          { value: '3.86',            label: 'GPA · Dean\'s List' },
          { value: 'RTX',             label: 'Summer 2025 Intern' },
          { value: 'LMT',             label: 'Summer 2026 Intern' },
        ].map(({ value, label }) => (
          <div key={label} className={styles.stat}>
            <span className={styles.statValue}>{value}</span>
            <span className={styles.statLabel}>{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
