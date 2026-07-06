'use client'

import { useEffect, useState } from 'react'

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setScrollProgress(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed left-0 right-0 top-0 z-[60] h-1 bg-corporate-border">
      <div
        className="h-full bg-gradient-to-r from-primary-600 via-sky-500 to-accent-500 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  )
}
