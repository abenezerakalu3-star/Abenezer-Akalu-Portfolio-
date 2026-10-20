import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { projects } from '../data'

gsap.registerPlugin(ScrollTrigger)

export default function Projects() {
  const root = useRef(null)

  useGSAP(
    () => {
      gsap.from('.project-card', {
        y: 50,
        opacity: 0,
        duration: 0.85,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: root.current,
          start: 'top 72%',
        },
      })

      const cards = gsap.utils.toArray('.project-card')
      cards.forEach((card) => {
        const onMove = (e) => {
          const rect = card.getBoundingClientRect()
          const x = e.clientX - rect.left - rect.width / 2
          const y = e.clientY - rect.top - rect.height / 2
          gsap.to(card, {
            rotateY: x * 0.012,
            rotateX: -y * 0.02,
            transformPerspective: 800,
            duration: 0.4,
            ease: 'power3.out',
          })
        }
        const onLeave = () => {
          gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.6, ease: 'elastic.out(1, 0.5)' })
        }
        card.addEventListener('mousemove', onMove)
        card.addEventListener('mouseleave', onLeave)
      })
    },
    { scope: root },
  )

  return (
    <section className="section" id="projects" ref={root}>
      <div className="container">
        <div className="section-head">
          <div>
            <p className="kicker">02 — Work</p>
            <h2>Featured projects.</h2>
          </div>
          <p className="muted" style={{ maxWidth: 360 }}>
            Products I have founded, led, or built — each one started from a real problem.
          </p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <div className="project-id">{project.id}</div>
              <div>
                <div className="chip-row">
                  <span className="chip">{project.role}</span>
                  <span className="chip">{project.category}</span>
                </div>
                <h3>{project.name}</h3>
                <p className="muted">{project.description}</p>
                {project.achievement && <p className="project-note">{project.achievement}</p>}
                <div className="chip-row" style={{ marginTop: 16 }}>
                  {project.tags.map((tag) => (
                    <span className="chip" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              {project.link ? (
                <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                  {project.linkLabel} →
                </a>
              ) : (
                <span className="project-link" style={{ color: 'var(--muted)' }}>
                  In progress
                </span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
