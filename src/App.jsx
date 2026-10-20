import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Loader from './components/Loader'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Highlights from './components/Highlights'
import Contact from './components/Contact'
import { profile } from './data'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const [ready, setReady] = useState(false)
  const orb = useRef(null)
  const xTo = useRef(null)
  const yTo = useRef(null)

  useEffect(() => {
    xTo.current = gsap.quickTo(orb.current, 'left', { duration: 0.9, ease: 'power3.out' })
    yTo.current = gsap.quickTo(orb.current, 'top', { duration: 0.9, ease: 'power3.out' })
    const move = (e) => {
      xTo.current(e.clientX)
      yTo.current(e.clientY)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      {!ready && <Loader onDone={() => setReady(true)} />}
      <Cursor />
      <div className="grain" />
      <div className="grid-bg" />
      <div className="orb" ref={orb} />
      <div className="app">
        <Navbar />
        <main>
          <Hero ready={ready} />
          <Marquee />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Highlights />
          <Contact />
        </main>
        <footer className="container footer">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span>Hawassa, Ethiopia · Built with React & GSAP</span>
        </footer>
      </div>
    </>
  )
}
