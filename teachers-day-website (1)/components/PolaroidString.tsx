"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface PolaroidPhoto {
  id: string
  src: string
  caption: string
}

interface PolaroidStringProps {
  teacherName: string
  subject: string
  initialPhotos?: PolaroidPhoto[]
}

export default function PolaroidString({ teacherName, subject, initialPhotos = [] }: PolaroidStringProps) {
  const [photos, setPhotos] = useState<PolaroidPhoto[]>(
    initialPhotos.length > 0
      ? initialPhotos
      : [
          {
            id: "1",
            src: `/placeholder.svg?height=200&width=160&query=${subject} teacher in classroom`,
            caption: `${teacherName} Teaching`,
          },
          {
            id: "2",
            src: `/placeholder.svg?height=200&width=160&query=${subject} teacher with students`,
            caption: "With Students",
          },
          {
            id: "3",
            src: `/placeholder.svg?height=200&width=160&query=${subject} teacher at blackboard`,
            caption: "At the Blackboard",
          },
          {
            id: "4",
            src: `/placeholder.svg?height=200&width=160&query=${subject} teacher in staff room`,
            caption: "In Staff Room",
          },
        ],
  )

  const addPhoto = () => {
    const newPhoto: PolaroidPhoto = {
      id: Date.now().toString(),
      src: `/placeholder.svg?height=200&width=160&query=${subject} teacher memory ${photos.length + 1}`,
      caption: `Memory ${photos.length + 1}`,
    }
    setPhotos([...photos, newPhoto])
  }

  const removePhoto = (id: string) => {
    setPhotos(photos.filter((photo) => photo.id !== id))
  }

  // LED lights along the string
  const ledLights = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    color: ["bg-red-400", "bg-blue-400", "bg-green-400", "bg-yellow-400", "bg-purple-400"][i % 5],
    delay: i * 0.2,
  }))

  return (
    <div className="relative w-full mb-8">
      {/* LED String */}
      <div className="relative h-8 mb-4">
        <div className="absolute top-4 left-0 right-0 h-0.5 bg-gray-800"></div>
        <div className="flex justify-between items-center h-full px-4">
          {ledLights.map((led) => (
            <motion.div
              key={led.id}
              initial={{ opacity: 0.3 }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: led.delay,
                ease: "easeInOut",
              }}
              className={`w-3 h-3 rounded-full ${led.color} shadow-lg`}
              style={{
                boxShadow: `0 0 10px currentColor`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Polaroid Photos */}
      <div className="flex flex-wrap justify-center gap-6 px-4">
        <AnimatePresence>
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 50, rotate: -10 }}
              animate={{
                opacity: 1,
                y: 0,
                rotate: Math.random() * 20 - 10, // Random rotation between -10 and 10 degrees
              }}
              exit={{ opacity: 0, y: -50, rotate: -20 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.05,
                rotate: 0,
                zIndex: 10,
              }}
              className="relative group cursor-pointer"
            >
              {/* Polaroid Frame */}
              <div className="bg-white p-3 pb-8 shadow-lg transform hover:shadow-xl transition-shadow duration-300">
                <img src={photo.src || "/placeholder.svg"} alt={photo.caption} className="w-40 h-48 object-cover" />
                <p className="text-center text-sm font-handwriting mt-2 text-gray-700">{photo.caption}</p>

                {/* Remove button */}
                <motion.button
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  onClick={() => removePhoto(photo.id)}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  ×
                </motion.button>
              </div>

              {/* Clothespin */}
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                <div className="w-4 h-6 bg-amber-600 rounded-sm shadow-md"></div>
                <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-amber-800 rounded-full"></div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Add Photo Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={addPhoto}
          className="flex items-center justify-center w-40 h-60 border-2 border-dashed border-gray-400 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors group"
        >
          <div className="text-center text-gray-500 group-hover:text-gray-700">
            <div className="text-3xl mb-2">+</div>
            <div className="text-sm">Add Photo</div>
          </div>
        </motion.button>
      </div>
    </div>
  )
}
