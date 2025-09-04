"use client"

import { motion } from "framer-motion"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="text-6xl mb-4"
        >
          📖
        </motion.div>

        <motion.h2
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="text-2xl font-bold text-amber-800 font-serif"
        >
          Loading Teacher's Day Magic...
        </motion.h2>

        <motion.div className="flex justify-center mt-6 space-x-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 0.8,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.2,
              }}
              className="w-3 h-3 bg-amber-500 rounded-full"
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
