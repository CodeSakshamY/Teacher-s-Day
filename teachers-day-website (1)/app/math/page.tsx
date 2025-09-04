"use client"

import { motion } from "framer-motion"
import PolaroidString from "@/components/PolaroidString"
import Link from "next/link"

export default function MathTeacherPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
        <Link href="/" className="inline-block mb-4 text-blue-600 hover:text-blue-800 transition-colors">
          ← Back to Home
        </Link>
        <h1 className="text-5xl font-bold text-blue-800 mb-4 font-serif">Mathematics Teacher</h1>
        <p className="text-xl text-blue-600">Celebrating the architect of logical thinking</p>
      </motion.div>

      {/* Polaroid String */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
        <PolaroidString teacherName="Math Teacher" subject="Mathematics" />
      </motion.div>

      {/* Poem Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="max-w-4xl mx-auto bg-white bg-opacity-80 rounded-lg p-8 shadow-lg backdrop-blur-sm"
      >
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center font-serif">A Tribute to Our Math Teacher</h2>

        <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center space-y-4 font-serif text-lg"
          >
            <p>In a world of chaos, you taught us to see,</p>
            <p>The silent poetry of geometry.</p>
            <p>Numbers became friends, equations a song,</p>
            <p>In your world of logic, we all belonged.</p>

            <div className="my-6"></div>

            <p>Pythagoras whispered through your steady hand,</p>
            <p>Calculus rose like castles in sand.</p>
            <p>You showed us infinity on a chalk-stained board,</p>
            <p>Where each formula sang, each graph soared.</p>

            <div className="my-6"></div>

            <p className="font-bold text-blue-800">
              More than sums, you taught us this art—
              <br />
              That every problem has a solution, if you have the heart.
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
          <source src="/music/math-background.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <p className="text-xs text-gray-600 text-center mt-1">Math Melody</p>
      </motion.div>
    </div>
  )
}
