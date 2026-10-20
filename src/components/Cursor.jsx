import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Cursor() {
  const ring = useRef(null)
  const dot = useRef(null)

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    if (isTouch) {
      document.body.classList.add('is-touch')
      return
    }

    const xTo = gsap.quickTo(ring.current, 'left', { duration: 0.45, ease: 'power3' })
    const yTo = gsap.quickTo(ring.current, 'top', { duration: 0.45, ease: 'power3' })
    const dx = gsap.quickTo(dot.current, 'left', { duration: 0.15, ease: 'power3' })
    const dy = gsap.quickTo(dot.current, 'top', { duration: 0.15, ease: 'power3' })

    const move = (e) => {
      xTo(e.clientX)
      yTo(e.clientY)
      dx(e.clientX)
      dy(e.clientY)
    }

    const enter = () => ring.current.classList.add('is-hover')
    const leave = () => ring.current.classList.remove('is-hover')

    window.addEventListener('mousemove', move)
    document.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('mouseenter', enter)
      el.addEventListener('mouseleave', leave)
    })

    return () => {
      window.removeEventListener('mousemove', move)
    }
  }, [])

  return (
    <>
      <div className="cursor" ref={ring} />
      <div className="cursor-dot" ref={dot} />
    </>
  )
}
