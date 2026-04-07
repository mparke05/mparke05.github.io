import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { projects } from '../data/projects'
import styles from './Nav.module.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)
  const location = useLocation()
  const isProjectPage = location.pathname.startsWith('/projects/') || location.pathname === '/skills' || location.pathname === '/timeline'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    // On project subpages the nav is always "scrolled" style
    if (isProjectPage) setScrolled(true)
    return () => window.removeEventListener('scroll', onScroll)
  }, [isProjectPage])

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const homeHref = (anchor) =>
    isProjectPage ? `/#${anchor}` : `#${anchor}`

  return (
    <nav className={`${styles.nav} ${scrolled || isProjectPage ? styles.scrolled : ''}`}>
      <Link to="/" className={styles.logo}>
        <span className={styles.logoAccent}>{'<'}</span>
        MMP
        <span className={styles.logoAccent}>{'/>'}</span>
      </Link>

      <ul className={styles.links}>
        <li>
          <a href={homeHref('about')} className={styles.link}>About</a>
        </li>

        {/* Projects with dropdown */}
        <li className={styles.dropdownItem} ref={dropdownRef}>
          <button
            className={`${styles.link} ${styles.dropdownTrigger}`}
            onClick={() => setDropdownOpen((o) => !o)}
            aria-expanded={dropdownOpen}
          >
            Projects
            <svg
              className={`${styles.chevron} ${dropdownOpen ? styles.chevronOpen : ''}`}
              width="10" height="10" viewBox="0 0 10 10" fill="none"
            >
              <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {dropdownOpen && (
            <div className={styles.dropdown}>
              <a
                href={homeHref('projects')}
                className={styles.dropdownAll}
                onClick={() => setDropdownOpen(false)}
              >
                View All Projects
              </a>
              <div className={styles.dropdownDivider} />
              {projects.map((p) => (
                <Link
                  key={p.slug}
                  to={`/projects/${p.slug}`}
                  className={styles.dropdownLink}
                  onClick={() => setDropdownOpen(false)}
                >
                  <span className={styles.dropdownId}>{p.id}</span>
                  <span className={styles.dropdownTitle}>{p.title}</span>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              ))}
            </div>
          )}
        </li>

        <li>
          <Link to="/skills" className={styles.link}>Skills</Link>
        </li>

        <li>
          <Link to="/timeline" className={styles.link}>Timeline</Link>
        </li>

        <li>
          <a href={homeHref('contact')} className={styles.link}>Contact</a>
        </li>
      </ul>

      <a href={homeHref('contact')} className={styles.cta}>Get in Touch</a>
    </nav>
  )
}
