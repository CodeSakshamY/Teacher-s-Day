"use client"

import { motion } from "framer-motion"
import { useState } from "react"

interface EnhancedSubjectButtonProps {
  subject: string
  color: string
  onClick: () => void
  isSelected: boolean
  delay: number
  icon: string
}

export default function EnhancedSubjectButton({
  subject,
  color,
  onClick,
  isSelected,
  delay,
  icon,
}: EnhancedSubjectButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.3 }}
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      className={`
        ${color} text-white font-semibold py-4 px-6 rounded-xl shadow-lg
        transform transition-all duration-200 hover:shadow-2xl relative overflow-hidden
        ${isSelected ? "ring-4 ring-yellow-400 ring-opacity-75 shadow-2xl" : ""}
      `}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
        initial={{ x: "-100%" }}
        animate={{ x: isHovered ? "100%" : "-100%" }}
        transition={{ duration: 0.6 }}
      />

      <div className="relative z-10 text-center">
        <motion.div
          animate={{ rotate: isHovered ? [0, 10, -10, 0] : 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl mb-1"
        >
          {icon}
        </motion.div>
        <div className="text-lg font-bold">{subject}</div>

        {isSelected && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs mt-1 text-yellow-200"
          >
            Selected ✨
          </motion.div>
        )}
      </div>
    </motion.button>
  )
}
