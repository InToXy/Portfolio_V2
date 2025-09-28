'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

export function MouseFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { theme } = useTheme()

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        className={`absolute h-96 w-96 rounded-full blur-3xl transition-all duration-300 ease-out ${
          theme === 'dark'
            ? 'from-accent/10 to-primary/5 bg-gradient-to-r'
            : 'from-primary/5 to-accent/5 bg-gradient-to-r'
        }`}
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />
      <div
        className={`absolute h-64 w-64 rounded-full blur-2xl transition-all duration-500 ease-out ${
          theme === 'dark'
            ? 'from-accent/15 to-primary/10 bg-gradient-to-r'
            : 'from-accent/10 to-primary/10 bg-gradient-to-r'
        }`}
        style={{
          left: mousePosition.x - 128,
          top: mousePosition.y - 128,
        }}
      />
    </div>
  )
}
