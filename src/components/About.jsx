import { useReveal } from '../hooks/useReveal'
import styles from './About.module.css'

const skills = [
  { category: 'CAD / Design', items: ['SolidWorks', 'Creo', 'SolidWorks FEA', 'nTop'] },
  { category: 'Simulation', items: ['Ansys Fluent', 'Ansys Mechanical', 'SolidWorks Thermal', 'CFD / FEA'] },
  { category: 'Programming', items: ['MATLAB', 'Python', 'C++ (exposure)', 'Materialise Magics'] },
  { category: 'Manufacturing', items: ['LPBF Additive Mfg.', '3D Printing', 'Mechatronics', 'Prototyping'] },
]

export default function About() {
  const [leftRef,  leftVisible]  = useReveal({ threshold: 0.08 })
  const [rightRef, rightVisible] = useReveal({ threshold: 0.08 })

  return (
    <section id="about" className={styles.about}>
      <div className={styles.inner}>

        <div
          ref={leftRef}
          className={`${styles.left} ${leftVisible ? styles.revealed : ''}`}
        >
          <div className={styles.portraitWrap}>
            <img src="/images/pfp.jpg" alt="Matthew Parker" className={styles.portrait} />
          </div>

          <p className={styles.sectionLabel}>About</p>
          <h2 className={styles.heading}>
            About me<br />
        
          </h2>
          <p className={styles.body}>
            I'm a junior Mechanical Engineering student at Villanova University (Class of 2027)
            with a concentration in Thermal Fluids and an Aerospace minor. I hold a 3.86 GPA.
          </p>
          <p className={styles.body}>
            My experience spans hands-on hardware development at RTX, where I built an
            automated gas flow measurement robot for laser powder bed fusion machines, to
            leading the drivetrain subsystem on Villanova's Formula SAE team. This summer
            I join Lockheed Martin as a Quality Engineer Intern in Orlando.
          </p>
          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>University</span>
              <span className={styles.metaValue}>Villanova · Class of 2027</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Degree</span>
              <span className={styles.metaValue}>B.S. Mechanical Engineering</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Focus</span>
              <span className={styles.metaValue}>Thermal Fluids · Aerospace</span>
            </div>
          </div>
        </div>

        <div
          ref={rightRef}
          className={`${styles.right} ${rightVisible ? styles.revealed : ''}`}
          style={{ transitionDelay: rightVisible ? '160ms' : '0ms' }}
        >
          <p className={styles.skillsHeading}>Technical Skills</p>
          <div className={styles.skillsGrid}>
            {skills.map(({ category, items }) => (
              <div key={category} className={styles.skillGroup}>
                <p className={styles.skillCategory}>{category}</p>
                <ul className={styles.skillList}>
                  {items.map((item) => (
                    <li key={item} className={styles.skillItem}>
                      <span className={styles.skillDot} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
      <div className={styles.divider} />
    </section>
  )
}
