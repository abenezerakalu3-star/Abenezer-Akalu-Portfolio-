import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const items = [
  'React',
  'Node.js',
  'MongoDB',
  'TypeScript',
  'EdTech',
  'SaaS',
  'Problem Solving',
  'Entrepreneurship',
  'MERN',
  'UI/UX',
]

export default function Marquee() {
  const root = useRef(null)

  useGSAP(
    () => {
      const track = root.current.querySelector('.marquee-track')
      gsap.to(track, {
        xPercent: -50,
        repeat: -1,
        duration: 22,
        ease: 'none',
      })
    },
    { scope: root },
  )

  const row = [...items, ...items]

  return (
    <div className="marquee" ref={root} aria-hidden="true">
      <div className="marquee-track">
        {row.map((item, i) => (
          <span key={`${item}-${i}`}>
            <b>✦</b> {item}
          </span>
        ))}
      </div>
    </div>
  )
}
