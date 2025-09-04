"use client"

import { motion } from "framer-motion"
import PolaroidString from "@/components/PolaroidString"
import Link from "next/link"

export default function GeographyTeacherPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 p-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
        <Link href="/" className="inline-block mb-4 text-teal-600 hover:text-teal-800 transition-colors">
          ← Back to Home
        </Link>
        <h1 className="text-5xl font-bold text-teal-800 mb-4 font-serif">Geography Teacher</h1>
        <p className="text-xl text-teal-600">Explorer of Earth's wonders and natural beauty</p>
      </motion.div>

      {/* Polaroid String */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
        <PolaroidString teacherName="Geography Teacher" subject="Geography" />
      </motion.div>

      {/* Poem Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="max-w-4xl mx-auto bg-white bg-opacity-80 rounded-lg p-8 shadow-lg backdrop-blur-sm"
      >
        <h2 className="text-3xl font-bold text-teal-800 mb-6 text-center font-serif">
          A Tribute to Our Geography Teacher
        </h2>

        <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center space-y-4 font-serif text-lg"
          >
            <p>Maps unfolded like stories untold,</p>
            <p>Rivers of silver, deserts of gold.</p>
            <p>Monsoons roared, the glaciers cried,</p>
            <p>You taught us where continents collide.</p>

            <div className="my-6"></div>

            <p>Mountains rose with ancient grace,</p>
            <p>You traced the earth's weathered face.</p>
            <p>Each latitude, longitude, each ocean floor,</p>
            <p>Made us see the planet we adore.</p>

            <div className="my-6"></div>

            <p className="font-bold text-teal-800">
              More than maps, you gave us the art—
              <br />
              Of seeing the world with an open heart.
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
          <source src="/music/geography-background.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <p className="text-xs text-gray-600 text-center mt-1">Earth's Melody</p>
      </motion.div>
    </div>
  )
}
