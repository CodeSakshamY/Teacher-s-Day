"use client"

import { motion } from "framer-motion"
import PolaroidString from "@/components/PolaroidString"
import Link from "next/link"

export default function EnglishTeacherPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 p-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
        <Link href="/" className="inline-block mb-4 text-purple-600 hover:text-purple-800 transition-colors">
          ← Back to Home
        </Link>
        <h1 className="text-5xl font-bold text-purple-800 mb-4 font-serif">English Teacher</h1>
        <p className="text-xl text-purple-600">Master of words, architect of dreams</p>
      </motion.div>

      {/* Polaroid String */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
        <PolaroidString teacherName="English Teacher" subject="English Literature" />
      </motion.div>

      {/* Poem Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="max-w-4xl mx-auto bg-white bg-opacity-80 rounded-lg p-8 shadow-lg backdrop-blur-sm"
      >
        <h2 className="text-3xl font-bold text-purple-800 mb-6 text-center font-serif">
          A Tribute to Our English Teacher
        </h2>

        <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center space-y-4 font-serif text-lg"
          >
            <p>With Shakespeare's quill and Wordsworth's streams,</p>
            <p>You taught us language, the birth of dreams.</p>
            <p>Grammar became more than rules on a page,</p>
            <p>Poetry turned life into a stage.</p>

            <div className="my-6"></div>

            <p>You opened doors with every prose,</p>
            <p>Made us see the worlds only English knows.</p>
            <p>From stories of Dickens to Orwell's fears,</p>
            <p>You filled our minds for years and years.</p>

            <div className="my-6"></div>

            <p className="font-bold text-purple-800">
              Through metaphors, morals, through written delight,
              <br />
              You taught us to think, to speak, to write.
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
          <source src="/music/english-background.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <p className="text-xs text-gray-600 text-center mt-1">Literary Melody</p>
      </motion.div>
    </div>
  )
}
