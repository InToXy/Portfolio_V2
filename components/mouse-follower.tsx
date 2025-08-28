"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

export function MouseFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { theme } = useTheme()

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div
        className={`absolute w-96 h-96 rounded-full blur-3xl transition-all duration-300 ease-out ${
          theme === "dark"
            ? "bg-gradient-to-r from-accent/10 to-primary/5"
            : "bg-gradient-to-r from-primary/5 to-accent/5"
        }`}
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />
      <div
        className={`absolute w-64 h-64 rounded-full blur-2xl transition-all duration-500 ease-out ${
          theme === "dark"
            ? "bg-gradient-to-r from-accent/15 to-primary/10"
            : "bg-gradient-to-r from-accent/10 to-primary/10"
        }`}
        style={{
          left: mousePosition.x - 128,
          top: mousePosition.y - 128,
        }}
      />
    </div>
  )
}
