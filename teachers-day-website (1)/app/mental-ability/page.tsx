"use client"

import { motion } from "framer-motion"
import PolaroidString from "@/components/PolaroidString"
import Link from "next/link"

export default function MentalAbilityTeacherPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 p-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
        <Link href="/" className="inline-block mb-4 text-pink-600 hover:text-pink-800 transition-colors">
          ← Back to Home
        </Link>
        <h1 className="text-5xl font-bold text-pink-800 mb-4 font-serif">Mental Ability Teacher</h1>
        <p className="text-xl text-pink-600">Trainer of minds and shaper of sharp thinking</p>
      </motion.div>

      {/* Polaroid String */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
        <PolaroidString teacherName="Mental Ability Teacher" subject="Mental Ability" />
      </motion.div>

      {/* Poem Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="max-w-4xl mx-auto bg-white bg-opacity-80 rounded-lg p-8 shadow-lg backdrop-blur-sm"
      >
        <h2 className="text-3xl font-bold text-pink-800 mb-6 text-center font-serif">
          A Tribute to Our Mental Ability Teacher
        </h2>

        <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center space-y-4 font-serif text-lg"
          >
            <p>Puzzles, patterns, logic unfurled,</p>
            <p>You taught us to untangle the world.</p>
            <p>Riddles that twist, mazes that bend,</p>
            <p>You trained our minds, sharp to the end.</p>

            <div className="my-6"></div>

            <p>Questions that challenged what we thought we knew,</p>
            <p>Exercises in thinking, creative and true.</p>
            <p>Mental ability was never just a test—</p>
            <p>It was a gift to train our very best.</p>
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
          <source src="/music/mental-ability-background.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <p className="text-xs text-gray-600 text-center mt-1">Mind's Melody</p>
      </motion.div>
    </div>
  )
}
