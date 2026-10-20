import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { skills } from '../data'

gsap.registerPlugin(ScrollTrigger)

export default function Skills() {
  const root = useRef(null)

  useGSAP(
    () => {
      gsap.from('.skill-card', {
        y: 36,
        opacity: 0,
        duration: 0.75,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: { trigger: root.current, start: 'top 75%' },
      })
    },
    { scope: root },
  )

  return (
    <section className="section" id="skills" ref={root}>
      <div className="container">
        <div className="section-head">
          <div>
            <p className="kicker">03 — Capabilities</p>
            <h2>Technical skills.</h2>
          </div>
        </div>
        <div className="skill-grid">
          {Object.entries(skills).map(([group, items]) => (
            <article className="skill-card" key={group}>
              <h3>{group}</h3>
              <ul>
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
