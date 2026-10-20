import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { profile } from '../data'

const headline = ['Building', 'Software', 'That', 'Solves', 'Real', 'Problems.']

export default function Hero({ ready }) {
  const root = useRef(null)

  useGSAP(
    () => {
      if (!ready) return
      const words = root.current.querySelectorAll('.split-word')
      const fade = root.current.querySelectorAll('[data-fade]')

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from(words, {
        yPercent: 120,
        rotateX: -50,
        opacity: 0,
        stagger: 0.07,
        duration: 0.95,
      }).from(fade, { y: 28, opacity: 0, stagger: 0.08, duration: 0.7 }, '-=0.45')
    },
    { scope: root, dependencies: [ready] },
  )

  const jump = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero container" id="top" ref={root}>
      <div>
        <div className="hero-top" data-fade>
          <span className="pulse" />
          {profile.title} · {profile.location}
        </div>
        <h1>
          {headline.map((word) => (
            <span className="word-mask" key={word}>
              <span className="split-word">{word}</span>
            </span>
          ))}
        </h1>
        <p className="hero-copy" data-fade>
          I&apos;m Abenezer Akalu, a Grade 10 student, self-taught full-stack developer, and
          student innovator from Ethiopia. I build web applications, explore new technologies,
          and turn ideas into practical software solutions. I&apos;m passionate about software
          engineering, entrepreneurship, and using technology to solve real-world problems.
        </p>
        <div className="hero-actions" data-fade>
          <button className="btn btn-primary" onClick={() => jump('#projects')}>
            Explore My Projects
          </button>
          <button className="btn btn-ghost" onClick={() => jump('#about')}>
            About Me
          </button>
          <button className="btn btn-ghost" onClick={() => jump('#contact')}>
            Contact Me
          </button>
        </div>
        <div className="hero-meta" data-fade>
          <div>
            <strong>MERN + TypeScript</strong>
            Full-stack product building
          </div>
          <div>
            <strong>Founder</strong>
            SchoolOS & Formitect
          </div>
          <div>
            <strong>Open to</strong>
            Mentors, collaborators, opportunities
          </div>
        </div>
        <div className="scroll-hint" data-fade>
          <span className="scroll-line" />
          Scroll to explore
        </div>
      </div>
    </section>
  )
}
