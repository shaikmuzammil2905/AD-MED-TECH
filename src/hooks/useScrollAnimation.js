import { useEffect, useRef } from 'react'

export function useScrollAnimation() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    const elements = ref.current
      ? ref.current.querySelectorAll('.anim')
      : document.querySelectorAll('.anim')

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return ref
}

export function useHeaderScroll() {
  const headerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY > 40) {
          headerRef.current.classList.add('scrolled')
        } else {
          headerRef.current.classList.remove('scrolled')
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return headerRef
}
