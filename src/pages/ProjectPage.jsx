import { useParams, Link, Navigate } from 'react-router-dom'
import { projects } from '../data/projects'
import { useReveal } from '../hooks/useReveal'
import styles from './ProjectPage.module.css'

const heroImages = {
  'gas-flow-robot':         '/images/rtx_background.png',
  'formula-sae-drivetrain': '/images/tuff.jpg',
  'fsae-aerodynamics':      '/images/VU17_OrthoView.png',
  'cfd-bike-windshield':    '/images/fluidLR_vector1.5.png',
  'gpu-rack-cooling':       '/images/PID.jpg',
  'fiber-composites':       '/images/composites.jpg',
}

function RevealSection({ children, delay = 0 }) {
  const [ref, visible] = useReveal({ threshold: 0.08 })
  return (
    <div
      ref={ref}
      className={`${styles.revealBlock} ${visible ? styles.revealVisible : ''}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  )
}

export default function ProjectPage() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) return <Navigate to="/" replace />

  const currentIndex = projects.indexOf(project)
  const prev = projects[currentIndex - 1] ?? null
  const next = projects[currentIndex + 1] ?? null

  return (
    <div className={styles.page}>
      {/* Top bar */}
      <header className={styles.header}>
        <Link to="/" className={styles.back}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M15 8H1M8 1L1 8l7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back
        </Link>
        <span className={styles.headerMeta}>{project.category}</span>
      </header>

      {/* Hero — immediately visible, no reveal */}
      <section className={styles.hero}>
        {heroImages[project.slug] && (
          <div
            className={styles.heroBg}
            style={{ backgroundImage: `url(${heroImages[project.slug]})` }}
          />
        )}
        <div className={styles.heroInner}>
          <p className={styles.projectId}>{project.id}</p>
          <h1 className={styles.title}>{project.title}</h1>
          <ul className={styles.tags}>
            {project.tags.map((tag) => (
              <li key={tag} className={styles.tag}>{tag}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Highlights */}
      <RevealSection>
        <section className={styles.highlights}>
          <div className={styles.inner}>
            {project.highlights.map(({ metric, label }) => (
              <div key={label} className={styles.highlight}>
                <span className={styles.highlightMetric}>{metric}</span>
                <span className={styles.highlightLabel}>{label}</span>
              </div>
            ))}
          </div>
        </section>
      </RevealSection>

      {/* Content */}
      <section className={styles.content}>
        <div className={styles.contentInner}>
          <RevealSection delay={80}>
            <div className={styles.overview}>
              <p className={styles.sectionLabel}>Overview</p>
              <p className={styles.overviewText}>{project.overview}</p>
            </div>
          </RevealSection>

          <div className={styles.sections}>
            {project.sections.map(({ heading, body }, i) => (
              <RevealSection key={heading} delay={i * 70}>
                <div className={styles.section}>
                  <h2 className={styles.sectionHeading}>{heading}</h2>
                  <p className={styles.sectionBody}>{body}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Photo gallery — only rendered when project.gallery is defined */}
      {project.gallery && (
        <section className={styles.gallerySection}>
          <div className={styles.galleryInner}>
            <p className={styles.galleryLabel}>Photo Library</p>
            <div className={`${styles.galleryGrid} ${!project.galleryFeatured ? styles.galleryGridSimple : ''}`}>
              {(project.galleryFeatured
                ? [...project.gallery.slice(0, 4), project.galleryFeatured, ...project.gallery.slice(4)]
                : project.gallery
              ).map((src, i) => {
                const isFeatured = project.galleryFeatured && i === 4
                return (
                  <div
                    key={i}
                    className={`${styles.galleryCell} ${isFeatured ? styles.galleryCellFeatured : ''}`}
                  >
                    <img
                      src={src}
                      alt={`Project photo ${i + 1}`}
                      className={styles.galleryImg}
                      draggable="false"
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Prev / Next */}
      <nav className={styles.pagination}>
        <div className={styles.paginationInner}>
          {prev ? (
            <Link to={`/projects/${prev.slug}`} className={styles.pageLink}>
              <span className={styles.pageLinkDir}>← Previous</span>
              <span className={styles.pageLinkTitle}>{prev.title}</span>
            </Link>
          ) : <div />}
          {next ? (
            <Link to={`/projects/${next.slug}`} className={`${styles.pageLink} ${styles.pageLinkRight}`}>
              <span className={styles.pageLinkDir}>Next →</span>
              <span className={styles.pageLinkTitle}>{next.title}</span>
            </Link>
          ) : <div />}
        </div>
      </nav>

      <footer className={styles.footer}>
        <Link to="/" className={styles.footerBack}>← Return to Portfolio</Link>
        <span className={styles.footerName}>Matthew M. Parker</span>
      </footer>
    </div>
  )
}
