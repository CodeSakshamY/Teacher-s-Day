"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

// Floating Hearts Animation
export const FloatingHearts = () => {
  const hearts = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 2,
  }))

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: "100vh", x: `${heart.x}%`, opacity: 0 }}
          animate={{ y: "-10vh", opacity: [0, 1, 0] }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeOut",
          }}
          className="absolute text-2xl text-red-300"
        >
          ♥
        </motion.div>
      ))}
    </div>
  )
}

// Interactive Quote Bubble
export const QuoteBubble = ({ quote, author }: { quote: string; author: string }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8, y: isVisible ? 0 : 20 }}
      className="fixed bottom-20 left-4 max-w-sm bg-yellow-100 border-2 border-yellow-300 rounded-lg p-4 shadow-lg"
    >
      <p className="text-sm italic text-gray-700">"{quote}"</p>
      <p className="text-xs text-gray-500 mt-2">- {author}</p>
      <div className="absolute -bottom-2 left-6 w-4 h-4 bg-yellow-100 border-r-2 border-b-2 border-yellow-300 transform rotate-45"></div>
    </motion.div>
  )
}

// Sparkle Effect
export const SparkleEffect = ({ trigger }: { trigger: boolean }) => {
  const sparkles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 0.5,
  }))

  if (!trigger) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
          transition={{ duration: 1, delay: sparkle.delay }}
          className="absolute w-2 h-2 bg-yellow-400 rounded-full"
          style={{ left: `${sparkle.x}%`, top: `${sparkle.y}%` }}
        />
      ))}
    </div>
  )
}
