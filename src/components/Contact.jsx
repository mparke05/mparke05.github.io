import styles from './Contact.module.css'

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/matthewmparker/', handle: 'in/matthewmparker' },
  { label: 'Email', href: 'mailto:mparke05@villanova.edu', handle: 'mparke05@villanova.edu' },
]

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.inner}>
        <p className={styles.sectionLabel}>Contact</p>
        <h2 className={styles.heading}>let's connect.</h2>
        <p className={styles.body}>
          I'm always open to new opportunities. If you have something in mind, I'd love to hear from you.
        </p>
        <div className={styles.socials}>
          {socialLinks.map(({ label, href, handle }) => (
            <a key={label} href={href} className={styles.socialLink} target="_blank" rel="noopener noreferrer">
              <span className={styles.socialLabel}>{label}</span>
              <span className={styles.socialHandle}>{handle}</span>
            </a>
          ))}
        </div>
      </div>

      <footer className={styles.footer}>
        <span className={styles.footerText}>
          Matthew M. Parker &mdash; Mechanical Engineering &mdash; Villanova University {new Date().getFullYear()}
        </span>
        <span className={styles.footerAccent}>MMP</span>
      </footer>
    </section>
  )
}
