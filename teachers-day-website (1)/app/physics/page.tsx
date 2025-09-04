"use client"

import { motion } from "framer-motion"
import PolaroidString from "@/components/PolaroidString"
import Link from "next/link"

export default function PhysicsTeacherPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
        <Link href="/" className="inline-block mb-4 text-green-600 hover:text-green-800 transition-colors">
          ← Back to Home
        </Link>
        <h1 className="text-5xl font-bold text-green-800 mb-4 font-serif">Physics Teacher</h1>
        <p className="text-xl text-green-600">Explorer of the universe's hidden laws</p>
      </motion.div>

      {/* Polaroid String */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
        <PolaroidString teacherName="Physics Teacher" subject="Physics" />
      </motion.div>

      {/* Poem Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="max-w-4xl mx-auto bg-white bg-opacity-80 rounded-lg p-8 shadow-lg backdrop-blur-sm"
      >
        <h2 className="text-3xl font-bold text-green-800 mb-6 text-center font-serif">
          A Tribute to Our Physics Teacher
        </h2>

        <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center space-y-4 font-serif text-lg"
          >
            <p>You showed us the universe in equations and laws,</p>
            <p>Gravity's pull, momentum's cause.</p>
            <p>Light split into rainbows, time bent its knee,</p>
            <p>Einstein whispered through your clarity.</p>

            <div className="my-6"></div>

            <p>From Newton's apple to black holes that spin,</p>
            <p>You opened the cosmos we carry within.</p>
            <p>Waves and particles, nature's grand play,</p>
            <p>You taught us the language in which stars sway.</p>

            <div className="my-6"></div>

            <p className="font-bold text-green-800">
              Physics was never cold numbers or charts,
              <br />
              It was the poetry of motion, the science of hearts.
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
          <source src="/music/physics-background.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <p className="text-xs text-gray-600 text-center mt-1">Cosmic Melody</p>
      </motion.div>
    </div>
  )
}
