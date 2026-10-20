import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { experience } from '../data'

gsap.registerPlugin(ScrollTrigger)

export default function Experience() {
  const root = useRef(null)

  useGSAP(
    () => {
      gsap.from('.exp-item', {
        x: -24,
        opacity: 0,
        duration: 0.75,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: root.current, start: 'top 75%' },
      })
    },
    { scope: root },
  )

  return (
    <section className="section" id="experience" ref={root}>
      <div className="container">
        <div className="section-head">
          <div>
            <p className="kicker">04 — Path</p>
            <h2>Experience.</h2>
          </div>
        </div>
        <div className="exp-list">
          {experience.map((item) => (
            <article className="exp-item" key={`${item.role}-${item.org}`}>
              <div>
                <span>{item.org}</span>
                <h3>{item.role}</h3>
              </div>
              <p className="muted">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
