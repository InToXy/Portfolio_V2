'use client'

import { useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'

export function MouseFollower() {
  const { theme } = useTheme()
  const follower1Ref = useRef<HTMLDivElement>(null)
  const follower2Ref = useRef<HTMLDivElement>(null)
  const mousePosition = useRef({ x: -200, y: -200 })
  const followerPosition1 = useRef({ x: -200, y: -200 })
  const followerPosition2 = useRef({ x: -200, y: -200 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY }
    }

    window.addEventListener('mousemove', updateMousePosition)

    let animationFrameId: number

    const animate = () => {
      // Lerp for smooth following
      followerPosition1.current.x += (mousePosition.current.x - followerPosition1.current.x) * 0.1
      followerPosition1.current.y += (mousePosition.current.y - followerPosition1.current.y) * 0.1

      followerPosition2.current.x += (mousePosition.current.x - followerPosition2.current.x) * 0.05
      followerPosition2.current.y += (mousePosition.current.y - followerPosition2.current.y) * 0.05

      if (follower1Ref.current) {
        follower1Ref.current.style.transform = `translate3d(${followerPosition1.current.x - 128}px, ${
          followerPosition1.current.y - 128
        }px, 0)`
      }
      if (follower2Ref.current) {
        follower2Ref.current.style.transform = `translate3d(${followerPosition2.current.x - 64}px, ${
          followerPosition2.current.y - 64
        }px, 0)`
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        ref={follower1Ref}
        className={`absolute h-64 w-64 rounded-full blur-3xl ${
          theme === 'dark'
            ? 'from-accent/5 to-primary/5 bg-gradient-to-r'
            : 'from-primary/5 to-accent/5 bg-gradient-to-r'
        }`}
      />
      <div
        ref={follower2Ref}
        className={`absolute h-32 w-32 rounded-full blur-2xl ${
          theme === 'dark'
            ? 'from-accent/10 to-primary/10 bg-gradient-to-r'
            : 'from-accent/10 to-primary/10 bg-gradient-to-r'
        }`}
      />
    </div>
  )
}
