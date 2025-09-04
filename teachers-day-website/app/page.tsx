"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Blackboard from "@/components/Blackboard"
import EnhancedSubjectButton from "@/components/EnhancedSubjectButton"
import { FloatingHearts } from "@/components/InteractiveElements"

const subjects = [
  { name: "Math", path: "/math", color: "bg-blue-500", icon: "🔢" },
  { name: "English", path: "/english", color: "bg-purple-500", icon: "📝" },
  { name: "Hindi", path: "/hindi", color: "bg-orange-500", icon: "🕉️" },
  { name: "Physics", path: "/physics", color: "bg-green-500", icon: "⚛️" },
  { name: "Chemistry", path: "/chemistry", color: "bg-red-500", icon: "🧪" },
  { name: "Biology", path: "/biology", color: "bg-emerald-500", icon: "🌱" },
  { name: "History", path: "/history", color: "bg-amber-500", icon: "🏛️" },
  { name: "Geography", path: "/geography", color: "bg-teal-500", icon: "🌍" },
  { name: "Computer", path: "/computer", color: "bg-indigo-500", icon: "💻" },
  { name: "Mental Ability", path: "/mental-ability", color: "bg-pink-500", icon: "🧠" },
]

export default function HomePage() {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null)
  const [showCelebration, setShowCelebration] = useState(false)

  const handleSubjectClick = (subject: string) => {
    setSelectedSubject(subject)
  }

  const handleBlackboardClick = () => {
    if (selectedSubject) {
      setShowCelebration(true)
      setTimeout(() => {
        const subjectData = subjects.find((s) => s.name === selectedSubject)
        if (subjectData) {
          window.location.href = subjectData.path
        }
      }, 3000)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 p-4 md:p-8 relative overflow-hidden">
      <FloatingHearts />

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8 relative z-10"
      >
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          className="absolute top-0 left-1/4 text-4xl"
        >
          📚
        </motion.div>
        <motion.div
          animate={{ rotate: [0, -5, 5, 0] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
          className="absolute top-0 right-1/4 text-4xl"
        >
          🍎
        </motion.div>

        <h1 className="text-4xl md:text-6xl font-bold text-amber-800 mb-4 font-serif text-balance">
          Teacher's Day Celebration
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-xl text-amber-700 font-medium"
        >
          Select a subject to honor your beloved teacher
        </motion.p>
      </motion.div>

      {/* Subject Buttons Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8 max-w-6xl mx-auto relative z-10"
      >
        {subjects.map((subject, index) => (
          <EnhancedSubjectButton
            key={subject.name}
            subject={subject.name}
            color={subject.color}
            icon={subject.icon}
            onClick={() => handleSubjectClick(subject.name)}
            isSelected={selectedSubject === subject.name}
            delay={index * 0.1}
          />
        ))}
      </motion.div>

      {/* Blackboard */}
      <div className="flex justify-center relative z-10">
        <Blackboard
          selectedSubject={selectedSubject}
          onClick={handleBlackboardClick}
          showCelebration={showCelebration}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-4 right-4 bg-white bg-opacity-90 rounded-lg p-2 shadow-lg z-20"
      >
        <audio controls className="opacity-80 hover:opacity-100 transition-opacity">
          <source src="/music/background.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <p className="text-xs text-gray-600 text-center mt-1">Background Music</p>
      </motion.div>
    </div>
  )
}
