'use client'

import React from 'react'

// A utility function to generate random numbers in a range
const random = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min

// A component to generate a single sparkle
const Sparkle = () => {
  const size = random(1, 4)
  const style = {
    top: `${random(0, 100)}%`,
    left: `${random(0, 100)}%`,
    width: `${size}px`,
    height: `${size}px`,
    animationDelay: `${random(0, 2000)}ms`,
    animationDuration: `${random(1000, 2500)}ms`,
  }
  return <span className="sparkle" style={style} />
}

// The main component for the title with sparkles
export const SparkleTitle = ({ text }: { text: string }) => {
  const sparkles = Array.from({ length: 25 }).map((_, i) => <Sparkle key={i} />)

  return (
    <h1 className="font-heading text-primary animate-in fade-in relative mb-6 text-4xl font-black text-balance duration-500 md:text-6xl">
      {sparkles}
      <span className="relative z-10">{text}</span>
    </h1>
  )
}
