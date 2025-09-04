"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import Link from "next/link"

const subjects = [
  { name: "Math", path: "/math", icon: "🔢" },
  { name: "English", path: "/english", icon: "📝" },
  { name: "Hindi", path: "/hindi", icon: "🕉️" },
  { name: "Physics", path: "/physics", icon: "⚛️" },
  { name: "Chemistry", path: "/chemistry", icon: "🧪" },
  { name: "Biology", path: "/biology", icon: "🌱" },
  { name: "History", path: "/history", icon: "🏛️" },
  { name: "Geography", path: "/geography", icon: "🌍" },
  { name: "Computer", path: "/computer", icon: "💻" },
  { name: "Mental Ability", path: "/mental-ability", icon: "🧠" },
]

export default function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed top-4 left-4 z-50">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white bg-opacity-90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
      >
        <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.3 }}>
          {isOpen ? "✕" : "☰"}
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            className="absolute top-16 left-0 bg-white bg-opacity-95 backdrop-blur-sm rounded-lg shadow-xl p-4 min-w-[200px]"
          >
            <div className="space-y-2">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <span className="text-xl">🏠</span>
                <span className="font-medium">Home</span>
              </Link>

              <div className="border-t border-gray-200 my-2"></div>

              {subjects.map((subject) => (
                <Link
                  key={subject.name}
                  href={subject.path}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span className="text-xl">{subject.icon}</span>
                  <span className="font-medium">{subject.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
