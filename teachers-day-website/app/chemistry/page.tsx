"use client"

import { motion } from "framer-motion"
import PolaroidString from "@/components/PolaroidString"
import Link from "next/link"

export default function ChemistryTeacherPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-rose-50 p-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
        <Link href="/" className="inline-block mb-4 text-red-600 hover:text-red-800 transition-colors">
          ← Back to Home
        </Link>
        <h1 className="text-5xl font-bold text-red-800 mb-4 font-serif">Chemistry Teacher</h1>
        <p className="text-xl text-red-600">Master of molecular magic and elemental wonder</p>
      </motion.div>

      {/* Polaroid String */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
        <PolaroidString teacherName="Chemistry Teacher" subject="Chemistry" />
      </motion.div>

      {/* Poem Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="max-w-4xl mx-auto bg-white bg-opacity-80 rounded-lg p-8 shadow-lg backdrop-blur-sm"
      >
        <h2 className="text-3xl font-bold text-red-800 mb-6 text-center font-serif">
          A Tribute to Our Chemistry Teacher
        </h2>

        <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center space-y-4 font-serif text-lg"
          >
            <p>Beakers bubbled, colors bloomed bright,</p>
            <p>Reactions danced in a furious light.</p>
            <p>From acids and bases to bonds so strong,</p>
            <p>You made the periodic table a lifelong song.</p>

            <div className="my-6"></div>

            <p>Atoms combined in perfect embrace,</p>
            <p>Molecules whirled in a chemical chase.</p>
            <p>Endothermic dreams, exothermic delight,</p>
            <p>Equations balancing in the lab's soft light.</p>

            <div className="my-6"></div>

            <p className="font-bold text-red-800">
              More than compounds, you gave us this art—
              <br />
              The alchemy of curiosity in every heart.
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
          <source src="/music/chemistry-background.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <p className="text-xs text-gray-600 text-center mt-1">Chemical Harmony</p>
      </motion.div>
    </div>
  )
}
