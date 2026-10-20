import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { achievements, certifications, education, languages } from '../data'

gsap.registerPlugin(ScrollTrigger)

export default function Highlights() {
  const root = useRef(null)

  useGSAP(
    () => {
      gsap.from('.hl', {
        y: 32,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: { trigger: root.current, start: 'top 75%' },
      })
    },
    { scope: root },
  )

  return (
    <section className="section" id="achievements" ref={root}>
      <div className="container">
        <div className="section-head hl">
          <div>
            <p className="kicker">05 — Proof</p>
            <h2>Achievements, study, and language.</h2>
          </div>
        </div>
        <div className="two-col">
          <div className="hl">
            <h3 style={{ marginBottom: 8 }}>Achievements</h3>
            {achievements.map((item) => (
              <p className="achieve-item" key={item}>
                {item}
              </p>
            ))}
            <div className="lang-row">
              {languages.map((lang) => (
                <div className="lang-card" key={lang.name}>
                  <span className="kicker">{lang.level}</span>
                  <h3>{lang.name}</h3>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="hl" style={{ marginBottom: 14 }}>
              Certifications
            </h3>
            <div className="cert-grid">
              {certifications.map((cert) => (
                <article className="cert-card hl" key={cert.org}>
                  <h3>{cert.org}</h3>
                  <p className="muted">{cert.items.join(' · ')}</p>
                </article>
              ))}
            </div>
            <h3 className="hl" style={{ margin: '28px 0 14px' }}>
              Education
            </h3>
            <div className="edu-grid">
              {education.map((edu) => (
                <article className="edu-card hl" key={edu.school}>
                  <p className="years">{edu.years}</p>
                  <h3>{edu.school}</h3>
                  <p className="muted">{edu.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
