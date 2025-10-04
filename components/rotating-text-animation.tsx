'use client'

import { useState, useEffect } from 'react'

interface RotatingTextAnimationProps {
  words: string[]
  className?: string
  typingSpeed?: number
  deletingSpeed?: number
  delay?: number
}

export function RotatingTextAnimation({
  words,
  className = '',
  typingSpeed = 100,
  deletingSpeed = 50,
  delay = 2000,
}: RotatingTextAnimationProps) {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex]
      if (isDeleting) {
        if (text.length > 0) {
          setText((prev) => prev.substring(0, prev.length - 1))
        } else {
          setIsDeleting(false)
          setWordIndex((prev) => (prev + 1) % words.length)
        }
      } else {
        if (text.length < currentWord.length) {
          setText((prev) => currentWord.substring(0, prev.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), delay)
        }
      }
    }

    const typingTimeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(typingTimeout)
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, delay])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <span className={className}>
      {text}
      <span
        className={`bg-primary ml-1 inline-block h-8 w-0.5 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}
        style={{ verticalAlign: 'middle' }}
      ></span>
    </span>
  )
}
