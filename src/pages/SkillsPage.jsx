import { Link } from 'react-router-dom'
import { skillCategories } from '../data/skills'
import { useReveal } from '../hooks/useReveal'
import styles from './SkillsPage.module.css'

function CategoryBlock({ cat, delay = 0 }) {
  const [ref, visible] = useReveal({ threshold: 0.08 })
  return (
    <div
      ref={ref}
      className={`${styles.categoryBlock} ${visible ? styles.catVisible : ''}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      <div className={styles.catHeader}>
        <span className={styles.catId}>{cat.id}</span>
        <div>
          <h2 className={styles.catTitle}>{cat.category}</h2>
          <p className={styles.catDescription}>{cat.description}</p>
        </div>
      </div>

      <div className={styles.skillsGrid}>
        {cat.skills.map(({ name, level, note }) => (
          <div key={name} className={styles.skillCard}>
            <div className={styles.skillTop}>
              <span className={styles.skillName}>{name}</span>
              <span className={styles.skillLevel}>{level}%</span>
            </div>
            <div className={styles.barTrack}>
              <div
                className={styles.barFill}
                style={{ '--target': `${level}%` }}
              />
            </div>
            <p className={styles.skillNote}>{note}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function SkillsPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link to="/" className={styles.back}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M15 8H1M8 1L1 8l7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back
        </Link>
        <span className={styles.headerMeta}>Technical Profile</span>
      </header>

      {/* Hero — immediately visible, no reveal */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.heroLabel}>Skills & Expertise</p>
          <h1 className={styles.heroTitle}>
            Technical<br />
            <span className={styles.heroAccent}>Capabilities.</span>
          </h1>
          <p className={styles.heroSub}>
             Throughout my engineering career, I've garnered skills through years of cross-system FSAE project work and fast-paced R&D work at the largest defense company in the world.
          </p>
        </div>
      </section>

      {/* Skill categories */}
      <section className={styles.categories}>
        <div className={styles.inner}>
          {skillCategories.map((cat, i) => (
            <CategoryBlock key={cat.id} cat={cat} delay={0} />
          ))}
        </div>
      </section>

      {/* Context strip */}
      <section className={styles.context}>
        <div className={styles.contextInner}>
          <div className={styles.contextItem}>
            <p className={styles.contextLabel}>Primary CAD</p>
            <p className={styles.contextValue}>SolidWorks</p>
          </div>
          <div className={styles.contextItem}>
            <p className={styles.contextLabel}>Primary Simulation</p>
            <p className={styles.contextValue}>Ansys Fluent + Mechanical</p>
          </div>
          <div className={styles.contextItem}>
            <p className={styles.contextLabel}>Manufacturing Focus</p>
            <p className={styles.contextValue}>LPBF / Metal AM</p>
          </div>
          <div className={styles.contextItem}>
            <p className={styles.contextLabel}>Industry Experience</p>
            <p className={styles.contextValue}>RTX · Lockheed Martin</p>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <Link to="/" className={styles.footerBack}>← Return to Portfolio</Link>
        <span className={styles.footerName}>Matthew M. Parker</span>
      </footer>
    </div>
  )
}
