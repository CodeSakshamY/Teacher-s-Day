"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-purple-50 flex items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-md"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="text-8xl mb-6"
        >
          📚
        </motion.div>

        <h1 className="text-4xl font-bold text-gray-800 mb-4 font-serif">Oops! Page Not Found</h1>

        <p className="text-lg text-gray-600 mb-8">
          It seems like this teacher's page doesn't exist yet. Let's go back to celebrate our wonderful teachers!
        </p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Back to Home
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 text-sm text-gray-500"
        >
          "A teacher affects eternity; they can never tell where their influence stops." - Henry Adams
        </motion.div>
      </motion.div>
    </div>
  )
}
