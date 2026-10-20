import { useEffect, useState } from 'react'
import { profile } from '../data'

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (href) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <a href="#top" className="logo" onClick={(e) => { e.preventDefault(); go('#top') }}>
            <span className="logo-mark">AA</span>
            <span>{profile.name}</span>
          </a>
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    go(link.href)
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="nav-cta" href={`mailto:${profile.email}`}>
            Let’s talk
          </a>
          <button
            className={`menu-btn ${open ? 'open' : ''}`}
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
          </button>
        </div>
      </header>
      <nav className={`mobile-panel ${open ? 'open' : ''}`}>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => {
              e.preventDefault()
              go(link.href)
            }}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </>
  )
}
