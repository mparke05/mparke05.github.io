import { useState } from 'react'
import styles from './Contact.module.css'

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/matthewmparker/', handle: 'in/matthewmparker' },
  { label: 'Email', href: 'mailto:mparke05@villanova.edu', handle: 'mparke05@villanova.edu' },
  
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <p className={styles.sectionLabel}>Contact</p>
          <h2 className={styles.heading}>
            Let's build<br />
            something<br />
            <span className={styles.accent}>remarkable.</span>
          </h2>
          <p className={styles.body}>
            I'm always open to new opportunities. If you have an opportunity in mind, I'd love to connect.
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

        <div className={styles.right}>
          {submitted ? (
            <div className={styles.success}>
              <div className={styles.successIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13l4 4L19 7" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className={styles.successTitle}>Message Sent</p>
              <p className={styles.successBody}>Thanks for reaching out. I'll get back to you shortly.</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="off"
                  className={styles.input}
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Smith"
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="off"
                  className={styles.input}
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jane@example.com"
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className={styles.textarea}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              <button type="submit" className={styles.submit}>
                Send Message
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M1 8h14M8 1l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </form>
          )}
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
