'use client'

import { useEffect, useState } from 'react'

export function AnimatedBackground() {
  const [particles, setParticles] = useState<
    Array<{
      id: number
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
    }>
  >([])

  useEffect(() => {
    // Create floating particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 4 + 2,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.3 + 0.1,
    }))
    setParticles(newParticles)

    const animateParticles = () => {
      setParticles((prev) =>
        prev.map((particle) => {
          let newX = particle.x + particle.speedX
          let newY = particle.y + particle.speedY

          // Wrap around screen boundaries
          if (newX > window.innerWidth) newX = 0
          else if (newX < 0) newX = window.innerWidth

          if (newY > window.innerHeight) newY = 0
          else if (newY < 0) newY = window.innerHeight

          return {
            ...particle,
            x: newX,
            y: newY,
          }
        }),
      )
    }

    const interval = setInterval(animateParticles, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Gradient Background */}
      <div
        className="from-primary/5 to-accent/5 absolute inset-0 animate-pulse bg-gradient-to-br via-transparent"
        style={{ animationDuration: '8s' }}
      />

      {/* Floating Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="bg-primary/20 absolute animate-pulse rounded-full"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            animationDuration: `${2 + Math.random() * 3}s`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}

      {/* Geometric Shapes */}
      <div
        className="border-primary/10 absolute top-1/4 left-1/4 h-32 w-32 rotate-45 animate-spin border"
        style={{ animationDuration: '20s' }}
      />
      <div
        className="border-accent/10 absolute right-1/4 bottom-1/4 h-24 w-24 rotate-12 animate-bounce border"
        style={{ animationDuration: '6s' }}
      />
      <div
        className="bg-primary/5 absolute top-1/2 right-1/3 h-16 w-16 animate-ping rounded-full"
        style={{ animationDuration: '4s' }}
      />
    </div>
  )
}
