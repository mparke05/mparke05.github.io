import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { useReveal } from '../hooks/useReveal'
import styles from './Projects.module.css'

const cardImages = {
  'gas-flow-robot':          '/images/hmd.jpg',
  'formula-sae-drivetrain':  '/images/VU17_TopDownView.png',
  'cfd-bike-windshield':     '/images/fsae5.jpg',
  'fsae-aerodynamics':       '/images/VU17_TopDownView.png',
  'gpu-rack-cooling':        '/images/PID.jpg',
  'fiber-composites':        '/images/composites.jpg',
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const rest      = projects.filter((p) => !p.featured)
  const [headerRef, headerVisible] = useReveal()

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.inner}>

        <div
          ref={headerRef}
          className={`${styles.header} ${headerVisible ? styles.headerVisible : ''}`}
        >
          <p className={styles.sectionLabel}>Projects</p>
          <h2 className={styles.heading}>Selected Work</h2>
        </div>

        <div className={styles.featuredGrid}>
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} large delay={i * 120} />
          ))}
        </div>

        <div className={styles.restGrid}>
          {rest.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 100} />
          ))}
        </div>

      </div>
      <div className={styles.divider} />
    </section>
  )
}

function ProjectCard({ project, large, delay = 0 }) {
  const [ref, visible] = useReveal({ threshold: 0.08 })
  const image = cardImages[project.slug]

  return (
    <Link
      ref={ref}
      to={`/projects/${project.slug}`}
      className={`${styles.card} ${large ? styles.cardLarge : ''} ${visible ? styles.cardVisible : ''}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {image && (
        <>
          <div className={styles.cardBg} style={{ backgroundImage: `url(${image})` }} />
          <div className={styles.cardOverlay} />
        </>
      )}

      <div className={styles.cardContent}>
        <div className={styles.cardTop}>
          <span className={styles.cardId}>{project.id}</span>
          <span className={styles.cardCategory}>{project.category}</span>
        </div>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDescription}>{project.description}</p>
        <div className={styles.cardFooter}>
          <ul className={styles.tags}>
            {project.tags.map((tag) => (
              <li key={tag} className={styles.tag}>{tag}</li>
            ))}
          </ul>
          <span className={styles.cardLink}>
            View
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  )
}
