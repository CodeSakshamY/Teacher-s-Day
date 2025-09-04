"use client"

import { motion } from "framer-motion"
import PolaroidString from "@/components/PolaroidString"
import Link from "next/link"

export default function HistoryTeacherPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 p-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
        <Link href="/" className="inline-block mb-4 text-amber-600 hover:text-amber-800 transition-colors">
          ← Back to Home
        </Link>
        <h1 className="text-5xl font-bold text-amber-800 mb-4 font-serif">History Teacher</h1>
        <p className="text-xl text-amber-600">Keeper of time's treasures and humanity's legacy</p>
      </motion.div>

      {/* Polaroid String */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
        <PolaroidString teacherName="History Teacher" subject="History" />
      </motion.div>

      {/* Poem Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="max-w-4xl mx-auto bg-white bg-opacity-80 rounded-lg p-8 shadow-lg backdrop-blur-sm"
      >
        <h2 className="text-3xl font-bold text-amber-800 mb-6 text-center font-serif">
          A Tribute to Our History Teacher
        </h2>

        <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center space-y-4 font-serif text-lg"
          >
            <p>You walked us through time's ancient streets,</p>
            <p>Where empires rose and met defeats.</p>
            <p>Ashoka's pillars, Akbar's reign,</p>
            <p>The French Revolution's echoing pain.</p>

            <div className="my-6"></div>

            <p>Through wars and peace, through kings and queens,</p>
            <p>You painted centuries with living scenes.</p>
            <p>The world's great tragedies, victories, art—</p>
            <p>All stitched together in our minds and hearts.</p>

            <div className="my-6"></div>

            <p className="font-bold text-amber-800">
              History wasn't dates to be memorized,
              <br />
              But lessons of life, human and wise.
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
          <source src="/music/history-background.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <p className="text-xs text-gray-600 text-center mt-1">Echoes of Time</p>
      </motion.div>
    </div>
  )
}
