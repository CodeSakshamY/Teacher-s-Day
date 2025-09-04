"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface BlackboardProps {
  selectedSubject: string | null
  onClick: () => void
  showCelebration: boolean
}

const subjectContent = {
  Math: ["E = mc²", "a² + b² = c²", "∫ f(x)dx", "π = 3.14159...", "sin²θ + cos²θ = 1"],
  English: ['"To be or not to be"', "- Shakespeare", "Metaphor & Simile", "Past Perfect Tense", "Alliteration"],
  Hindi: ["कबीर की साखी", "तुलसी के दोहे", "मीरा के भजन", "रहीम के कवित्त", "सूर के पद"],
  Physics: ["F = ma", "v = u + at", "E = hf", "P = VI", "λ = c/f"],
  Chemistry: ["H₂O", "NaCl", "C₆H₁₂O₆", "pH = -log[H⁺]", "PV = nRT"],
  Biology: ["DNA → RNA → Protein", "Mitosis & Meiosis", "Photosynthesis", "Evolution", "Ecosystem"],
  History: ["Mughal Empire", "1857 Revolt", "Independence 1947", "Ashoka Pillars", "Harappan Civilization"],
  Geography: ["Himalayas", "Ganges River", "Monsoons", "Tectonic Plates", "Climate Zones"],
  Computer: ["if (condition) {", "  return true;", "}", "Binary: 101010", "Algorithm Design"],
  "Mental Ability": [
    "Pattern Recognition",
    "Logic Puzzles",
    "Sequence: 2,4,8,16,?",
    "Spatial Reasoning",
    "Critical Thinking",
  ],
}

const ChalkText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayedText, setDisplayedText] = useState("")

  useEffect(() => {
    setDisplayedText("")
    const timer = setTimeout(() => {
      let currentIndex = 0
      const writeInterval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex))
          currentIndex++
        } else {
          clearInterval(writeInterval)
        }
      }, 50) // Character by character animation

      return () => clearInterval(writeInterval)
    }, delay)

    return () => clearTimeout(timer)
  }, [text, delay])

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-lg font-mono relative">
      {displayedText}
      {displayedText.length < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
          className="inline-block w-2 h-5 bg-white ml-1"
        />
      )}
    </motion.div>
  )
}

const Confetti = () => {
  const confettiPieces = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 2,
    color: ["bg-yellow-400", "bg-red-400", "bg-blue-400", "bg-green-400", "bg-purple-400"][
      Math.floor(Math.random() * 5)
    ],
  }))

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {confettiPieces.map((piece) => (
        <motion.div
          key={piece.id}
          initial={{ y: -10, x: `${piece.x}%`, rotate: 0 }}
          animate={{
            y: "100vh",
            rotate: 360,
            x: `${piece.x + (Math.random() - 0.5) * 20}%`,
          }}
          transition={{
            duration: 3,
            delay: piece.delay,
            ease: "easeOut",
          }}
          className={`absolute w-3 h-3 ${piece.color} rounded`}
        />
      ))}
    </div>
  )
}

export default function Blackboard({ selectedSubject, onClick, showCelebration }: BlackboardProps) {
  const [animatedLines, setAnimatedLines] = useState<string[]>([])
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [allLinesWritten, setAllLinesWritten] = useState(false)

  useEffect(() => {
    if (selectedSubject && subjectContent[selectedSubject as keyof typeof subjectContent]) {
      setAnimatedLines([])
      setCurrentLineIndex(0)
      setAllLinesWritten(false)

      const content = subjectContent[selectedSubject as keyof typeof subjectContent]
      const timer = setInterval(() => {
        setCurrentLineIndex((prev) => {
          if (prev < content.length) {
            setAnimatedLines((prevLines) => [...prevLines, content[prev]])
            return prev + 1
          } else {
            clearInterval(timer)
            setTimeout(() => setAllLinesWritten(true), 1000)
            return prev
          }
        })
      }, 1200) // Increased delay between lines for better chalk effect

      return () => clearInterval(timer)
    }
  }, [selectedSubject])

  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.02 }}
        className="bg-green-800 p-8 rounded-lg shadow-2xl cursor-pointer min-h-[400px] w-[600px] relative overflow-hidden border-4 border-amber-600"
        onClick={onClick}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-700 to-green-900 opacity-50"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 text-white">
          {selectedSubject ? (
            <div>
              <motion.h2
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", duration: 0.8 }}
                className="text-2xl font-bold mb-6 text-center border-b-2 border-white pb-2 font-serif"
              >
                {selectedSubject}
              </motion.h2>

              <div className="space-y-4">
                {animatedLines.map((line, index) => (
                  <ChalkText key={index} text={line} delay={index * 200} />
                ))}
              </div>

              {allLinesWritten && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8 text-center"
                >
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    className="text-yellow-200 text-lg font-semibold bg-green-700 bg-opacity-50 rounded-lg p-3 border border-yellow-200"
                  >
                    Click the blackboard to visit your teacher's page →
                  </motion.div>
                </motion.div>
              )}
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <motion.p
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="text-xl text-gray-300 text-center font-serif"
              >
                Select a subject to see the magic happen!
              </motion.p>
            </div>
          )}
        </div>

        <AnimatePresence>
          {showCelebration && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 z-20"
            >
              <Confetti />
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", duration: 1.2 }}
                className="text-center relative z-10"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{ duration: 0.5, repeat: 3 }}
                  className="text-4xl font-bold text-yellow-400 mb-4 font-serif"
                >
                  Happy Teacher's Day!
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="text-xl text-white"
                >
                  Redirecting to your teacher's page...
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
