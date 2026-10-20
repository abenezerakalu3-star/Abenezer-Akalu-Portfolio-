import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const root = useRef(null)

  useGSAP(
    () => {
      gsap.from('.reveal', {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: root.current,
          start: 'top 75%',
        },
      })
    },
    { scope: root },
  )

  return (
    <section className="section" id="about" ref={root}>
      <div className="container">
        <div className="section-head reveal">
          <div>
            <p className="kicker">01 — About</p>
            <h2>A student builder with founder energy.</h2>
          </div>
        </div>
        <div className="about-grid">
          <div className="about-card reveal">
            <p className="muted">
              I am a Grade 10 student at Alamura High School with a strong passion for software
              development and technology. My journey began with curiosity about how digital
              products and applications work. Since then, I have been learning through online
              courses, technical documentation, books, and hands-on projects.
            </p>
            <p className="muted">
              I work with the MERN stack and TypeScript, building applications that help me
              develop my technical and problem-solving skills. I am also exploring
              entrepreneurship through projects such as SchoolOS and Formitect.
            </p>
            <p className="muted">
              My goal is to grow as a software engineer, build useful technology products,
              collaborate with talented people, and pursue opportunities that allow me to learn
              and contribute.
            </p>
          </div>
          <div className="about-aside">
            <article className="stat-card reveal">
              <strong>Real products</strong>
              I ship working software — from EdTech and SaaS to student tools.
            </article>
            <article className="stat-card reveal">
              <strong>Initiative</strong>
              Founder of SchoolOS and Formitect, not waiting for permission to build.
            </article>
            <article className="stat-card reveal">
              <strong>Always learning</strong>
              Self-taught, intern-tested, and committed to solving real problems.
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
