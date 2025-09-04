"use client"

import { motion } from "framer-motion"

interface SubjectButtonProps {
  subject: string
  color: string
  onClick: () => void
  isSelected: boolean
  delay: number
}

export default function SubjectButton({ subject, color, onClick, isSelected, delay }: SubjectButtonProps) {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        ${color} text-white font-semibold py-4 px-6 rounded-lg shadow-lg
        transform transition-all duration-200 hover:shadow-xl
        ${isSelected ? "ring-4 ring-yellow-400 ring-opacity-75" : ""}
      `}
    >
      <div className="text-center">
        <div className="text-lg font-bold">{subject}</div>
      </div>
    </motion.button>
  )
}
