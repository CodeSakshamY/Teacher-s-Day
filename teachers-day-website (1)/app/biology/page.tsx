"use client"

import { motion } from "framer-motion"
import PolaroidString from "@/components/PolaroidString"
import Link from "next/link"

export default function BiologyTeacherPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-lime-50 p-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
        <Link href="/" className="inline-block mb-4 text-emerald-600 hover:text-emerald-800 transition-colors">
          ← Back to Home
        </Link>
        <h1 className="text-5xl font-bold text-emerald-800 mb-4 font-serif">Biology Teacher</h1>
        <p className="text-xl text-emerald-600">Guardian of life's mysteries and nature's secrets</p>
      </motion.div>

      {/* Polaroid String */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
        <PolaroidString teacherName="Biology Teacher" subject="Biology" />
      </motion.div>

      {/* Poem Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="max-w-4xl mx-auto bg-white bg-opacity-80 rounded-lg p-8 shadow-lg backdrop-blur-sm"
      >
        <h2 className="text-3xl font-bold text-emerald-800 mb-6 text-center font-serif">
          A Tribute to Our Biology Teacher
        </h2>

        <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center space-y-4 font-serif text-lg"
          >
            <p>Cells came alive under your gaze so kind,</p>
            <p>The code of life slowly unwrapped in our mind.</p>
            <p>From tiny mitochondria to forests that breathe,</p>
            <p>You showed us the roots beneath every leaf.</p>

            <div className="my-6"></div>

            <p>Hearts that beat, rivers of veins,</p>
            <p>Brains of wonder, genetic chains.</p>
            <p>Darwin's voyage, Mendel's seeds,</p>
            <p>You planted in us life's deepest creeds.</p>

            <div className="my-6"></div>

            <p className="font-bold text-emerald-800">
              Biology became not just plants and bones—
              <br />
              But the song of nature in cellular tones.
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
          <source src="/music/biology-background.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <p className="text-xs text-gray-600 text-center mt-1">Nature's Symphony</p>
      </motion.div>
    </div>
  )
}
