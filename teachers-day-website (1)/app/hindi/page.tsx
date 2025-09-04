"use client"

import { motion } from "framer-motion"
import PolaroidString from "@/components/PolaroidString"
import Link from "next/link"

export default function HindiTeacherPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 p-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
        <Link href="/" className="inline-block mb-4 text-orange-600 hover:text-orange-800 transition-colors">
          ← मुख्य पृष्ठ पर वापस जाएं
        </Link>
        <h1 className="text-5xl font-bold text-orange-800 mb-4 font-serif">हिंदी शिक्षक</h1>
        <p className="text-xl text-orange-600">भाषा के संरक्षक, संस्कृति के वाहक</p>
      </motion.div>

      {/* Polaroid String */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
        <PolaroidString teacherName="Hindi Teacher" subject="Hindi Literature" />
      </motion.div>

      {/* Poem Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="max-w-4xl mx-auto bg-white bg-opacity-80 rounded-lg p-8 shadow-lg backdrop-blur-sm"
      >
        <h2 className="text-3xl font-bold text-orange-800 mb-6 text-center font-serif">हमारे हिंदी शिक्षक को श्रद्धांजलि</h2>

        <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center space-y-4 font-serif text-lg"
          >
            <p>कवियों की धरती, रसों की धार,</p>
            <p>तुलसी की चौपाइयाँ, सूर का प्यार।</p>
            <p>कबीर की साखियाँ, मीरा के गीत,</p>
            <p>आपने हमें भाषा के दिए अनमोल मीत।</p>

            <div className="my-6"></div>

            <p>हर अक्षर में छुपी संवेदना की लौ,</p>
            <p>कविता की नदियों में बहता शब्दों का संजो।</p>
            <p>भाषा का सम्मान, साहित्य की रीत,</p>
            <p>आपने दी संस्कृति, मन का संगीत।</p>
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
          <source src="/music/hindi-background.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <p className="text-xs text-gray-600 text-center mt-1">हिंदी संगीत</p>
      </motion.div>
    </div>
  )
}
