import { useState, useEffect, useRef } from 'react'

export default function AnimatedCounter({ value, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const hasAnimated = useRef(false)

  // Parse numeric target value and suffix (e.g. "100+" -> num 100, suffix "+", "100%" -> num 100, suffix "%")
  const numericMatch = String(value).match(/(\d+)/)
  const targetNum = numericMatch ? parseInt(numericMatch[0], 10) : 0
  const suffix = String(value).replace(/[\d]/g, '')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          let startTime = null

          const animate = (timestamp) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / duration, 1)
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3)
            const currentCount = Math.floor(easeProgress * targetNum)

            setCount(currentCount)

            if (progress < 1) {
              requestAnimationFrame(animate)
            } else {
              setCount(targetNum)
            }
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [targetNum, duration])

  return (
    <span ref={ref} className="animated-counter">
      {count}
      {suffix}
    </span>
  )
}
