"use client"

import { motion } from "framer-motion"
import PolaroidString from "@/components/PolaroidString"
import Link from "next/link"

export default function ComputerTeacherPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 p-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
        <Link href="/" className="inline-block mb-4 text-indigo-600 hover:text-indigo-800 transition-colors">
          ← Back to Home
        </Link>
        <h1 className="text-5xl font-bold text-indigo-800 mb-4 font-serif">Computer Teacher</h1>
        <p className="text-xl text-indigo-600">Architect of digital dreams and technological futures</p>
      </motion.div>

      {/* Polaroid String */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
        <PolaroidString teacherName="Computer Teacher" subject="Computer Science" />
      </motion.div>

      {/* Poem Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="max-w-4xl mx-auto bg-white bg-opacity-80 rounded-lg p-8 shadow-lg backdrop-blur-sm"
      >
        <h2 className="text-3xl font-bold text-indigo-800 mb-6 text-center font-serif">
          A Tribute to Our Computer Teacher
        </h2>

        <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center space-y-4 font-serif text-lg"
          >
            <p>Bits and bytes became our play,</p>
            <p>In your class of logic and code each day.</p>
            <p>Zeroes and ones built castles of thought,</p>
            <p>Algorithms whispered what Google forgot.</p>

            <div className="my-6"></div>

            <p>Loops and arrays, machines that learn,</p>
            <p>You lit the fire for minds that yearn.</p>
            <p>From simple programs to AI's dream,</p>
            <p>You made us part of the digital stream.</p>

            <div className="my-6"></div>

            <p className="font-bold text-indigo-800">
              More than coding, you gave us the spark—
              <br />
              To shape the future, to leave a mark.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Background Music Controls */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-4 right-4 bg-white bg-opacity-90 rounded-lg p-3 shadow-lg"
      >
        <audio controls className="opacity-80 hover:opacity-100 transition-opacity">
          <source src="/music/computer-background.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <p className="text-xs text-gray-600 text-center mt-1">Digital Symphony</p>
      </motion.div>
    </div>
  )
}
