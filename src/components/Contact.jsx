import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { profile } from '../data'

gsap.registerPlugin(ScrollTrigger)

const title = ["Let's", 'Build', 'Something', 'Meaningful.']

export default function Contact() {
  const root = useRef(null)

  useGSAP(
    () => {
      gsap.from('.split-word', {
        yPercent: 110,
        opacity: 0,
        stagger: 0.06,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: root.current, start: 'top 75%' },
      })
      gsap.from('.contact-card', {
        y: 24,
        opacity: 0,
        stagger: 0.1,
        duration: 0.7,
        scrollTrigger: { trigger: root.current, start: 'top 70%' },
      })
    },
    { scope: root },
  )

  return (
    <section className="section contact" id="contact" ref={root}>
      <div className="container contact-wrap">
        <div>
          <p className="kicker">06 — Contact</p>
          <h2>
            {title.map((word) => (
              <span className="word-mask" key={word}>
                <span className="split-word">{word}</span>
              </span>
            ))}
          </h2>
          <p className="muted contact-copy">
            I&apos;m open to connecting with developers, mentors, organizations, and innovators
            interested in software development, education technology, and meaningful
            collaboration.
          </p>
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>
            Email me
          </a>
        </div>
        <div className="contact-links">
          <a className="contact-card" href={`mailto:${profile.email}`}>
            <div>
              <span>Email</span>
              <strong>{profile.email}</strong>
            </div>
            →
          </a>
          <a className="contact-card" href={`tel:${profile.phone}`}>
            <div>
              <span>Phone</span>
              <strong>{profile.phone}</strong>
            </div>
            →
          </a>
          <a className="contact-card" href={profile.github} target="_blank" rel="noreferrer">
            <div>
              <span>GitHub</span>
              <strong>abenezerakalu3-star</strong>
            </div>
            →
          </a>
          <a className="contact-card" href={profile.linkedin} target="_blank" rel="noreferrer">
            <div>
              <span>LinkedIn</span>
              <strong>Abenezer Akalu</strong>
            </div>
            →
          </a>
        </div>
      </div>
    </section>
  )
}
