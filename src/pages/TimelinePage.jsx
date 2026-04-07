import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './TimelinePage.module.css'

const events = [
  {
    date: 'August 2023',
    title: 'Engineering Journey Begins',
    description: 'Enrolled at Villanova University in Mechanical Engineering with a thermal fluids concentration and aerospace minor.',
    tag: 'Milestone',
    slug: null,
  },
  {
    date: 'August 2024',
    title: 'Villanova Formula SAE — Drivetrain',
    description: 'Joined as a drivetrain member, leading design and manufacturing of the full drivetrain subsystem. Reduced rocker weight 14% via SolidWorks FEA.',
    tag: 'Competition',
    slug: 'formula-sae-drivetrain',
  },
  {
    date: 'May 2025',
    title: 'RTX Technology Research Center',
    description: 'Designed and built an automated gas flow robot for LPBF machines. Received the RTX Collaboration Award for cross-team impact.',
    tag: 'Internship',
    slug: 'gas-flow-robot',
  },
  {
    date: 'August 2025',
    title: 'Self-Study: Python, Creo & CFD',
    description: 'Independently pursued Python scripting, Creo parametric CAD, and computational fluid dynamics — applied through a CFD thermal simulation project.',
    tag: 'Self-Study',
    slug: 'cfd-bike-windshield',
  },
  {
    date: 'December 2025',
    title: 'FSAE Aerodynamics — nTop Integration',
    description: 'Began studying nTop to bring parametric lattice-optimized structures into the FSAE senior capstone aerodynamics package.',
    tag: 'Competition',
    slug: 'fsae-aerodynamics',
  },
  {
    date: 'May 2026',
    title: 'Lockheed Martin — Quality Engineering',
    description: 'Joining Lockheed Martin in Orlando as a Quality Engineer Intern, focused on aerospace production quality systems.',
    tag: 'Internship',
    slug: null,
    upcoming: true,
  },
]

function EventCard({ event }) {
  const Wrapper = event.slug ? Link : 'div'
  const wrapperProps = event.slug ? { to: `/projects/${event.slug}` } : {}

  return (
    <Wrapper
      {...wrapperProps}
      className={`${styles.card} ${event.slug ? styles.cardLinked : ''} ${event.upcoming ? styles.cardUpcoming : ''}`}
      draggable="false"
    >
      <span className={styles.cardTag}>{event.tag}</span>
      <p className={styles.cardDate}>{event.date}</p>
      <h3 className={styles.cardTitle}>{event.title}</h3>
      <p className={styles.cardDesc}>{event.description}</p>

      {event.slug && (
        <span className={styles.cardAction}>
          View Project
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
            <path d="M1 5.5h9M5.5 1l4.5 4.5L5.5 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      )}

      {event.upcoming && (
        <span className={styles.upcomingBadge}>
          <span className={styles.upcomingPulse} />
          Upcoming
        </span>
      )}
    </Wrapper>
  )
}

export default function TimelinePage() {
  const scrollRef  = useRef(null)
  const isDragging = useRef(false)
  const startX     = useRef(0)
  const scrollLeft = useRef(0)
  const hasDragged = useRef(false)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const onMouseDown = (e) => {
      isDragging.current = true
      hasDragged.current = false
      startX.current     = e.pageX
      scrollLeft.current = el.scrollLeft
      el.style.cursor    = 'grabbing'
    }

    const onMouseMove = (e) => {
      if (!isDragging.current) return
      e.preventDefault()
      const dx = e.pageX - startX.current
      if (Math.abs(dx) > 5) hasDragged.current = true
      el.scrollLeft = scrollLeft.current - dx
    }

    const onEnd = () => {
      isDragging.current = false
      el.style.cursor    = 'grab'
    }

    // Route vertical wheel to horizontal scroll
    const onWheel = (e) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return
      e.preventDefault()
      el.scrollLeft += e.deltaY
    }

    el.addEventListener('mousedown',  onMouseDown)
    el.addEventListener('mousemove',  onMouseMove)
    el.addEventListener('mouseup',    onEnd)
    el.addEventListener('mouseleave', onEnd)
    el.addEventListener('wheel',      onWheel, { passive: false })

    return () => {
      el.removeEventListener('mousedown',  onMouseDown)
      el.removeEventListener('mousemove',  onMouseMove)
      el.removeEventListener('mouseup',    onEnd)
      el.removeEventListener('mouseleave', onEnd)
      el.removeEventListener('wheel',      onWheel)
    }
  }, [])

  // Prevent link navigation when the user was dragging
  const handleClickCapture = (e) => {
    if (hasDragged.current) {
      e.preventDefault()
      e.stopPropagation()
      hasDragged.current = false
    }
  }

  return (
    <div className={styles.page}>

      <header className={styles.header}>
        <Link to="/" className={styles.back}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M15 8H1M8 1L1 8l7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back
        </Link>
        <span className={styles.headerMeta}>Career Timeline</span>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.heroLabel}>My Journey</p>
          <h1 className={styles.heroTitle}>
            From student<br />
            <span className={styles.heroAccent}>to engineer.</span>
          </h1>
          <p className={styles.heroSub}>
            2023 — present &nbsp;·&nbsp; Drag or scroll to explore →
          </p>
        </div>
      </section>

      <div className={styles.timelineOuter}>
        <div
          ref={scrollRef}
          className={styles.scrollWrapper}
          onClickCapture={handleClickCapture}
        >
          <div className={styles.track}>

            <div className={styles.endCap} />

            {events.map((event, i) => {
              const above = i % 2 === 0
              return (
                <div key={i} className={styles.eventCol}>

                  {/* Top half — holds card if "above" */}
                  <div className={`${styles.half} ${styles.topHalf}`}>
                    {above && (
                      <>
                        <EventCard event={event} />
                        <div className={styles.connector} />
                      </>
                    )}
                  </div>

                  {/* Dot row — forms the horizontal line */}
                  <div className={styles.dotRow}>
                    <div className={`${styles.dot} ${event.upcoming ? styles.dotUpcoming : ''}`} />
                  </div>

                  {/* Bottom half — holds card if "below" */}
                  <div className={`${styles.half} ${styles.bottomHalf}`}>
                    {!above && (
                      <>
                        <div className={styles.connector} />
                        <EventCard event={event} />
                      </>
                    )}
                  </div>

                </div>
              )
            })}

            <div className={styles.endCap} />

          </div>
        </div>

        {/* Fade hint at right edge */}
        <div className={styles.fadeRight} aria-hidden="true" />
      </div>

      <footer className={styles.footer}>
        <Link to="/" className={styles.footerBack}>← Return to Portfolio</Link>
        <span className={styles.footerName}>Matthew M. Parker</span>
      </footer>

    </div>
  )
}
