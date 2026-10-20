import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { splitChars } from '../lib/split'

export default function Loader({ onDone }) {
  const root = useRef(null)

  useGSAP(
    () => {
      const name = root.current.querySelector('.loader-name')
      const chars = splitChars(name)
      const bar = root.current.querySelector('.loader-bar i')
      const finish = () => {
        gsap.to(root.current, {
          yPercent: -100,
          duration: 0.9,
          ease: 'power4.inOut',
          onComplete: onDone,
        })
      }

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        finish()
        return
      }

      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        onComplete: finish,
      })

      tl.from(chars, {
        yPercent: 120,
        opacity: 0,
        stagger: 0.035,
        duration: 0.7,
      })
        .to(bar, { width: '100%', duration: 0.9, ease: 'power2.inOut' }, '-=0.2')
        .to(chars, { yPercent: -120, opacity: 0, stagger: 0.02, duration: 0.45 }, '+=0.15')
    },
    { scope: root },
  )

  return (
    <div className="loader" ref={root}>
      <div className="loader-inner">
        <div className="loader-name">Abenezer Akalu</div>
        <div className="loader-bar">
          <i />
        </div>
      </div>
    </div>
  )
}
