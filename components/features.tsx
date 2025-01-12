'use client'

import { motion } from "framer-motion"
import { Heart, Users, Smile } from 'lucide-react'

export default function Features() {
  return (
    <section className="py-32 bg-gradient-to-b from-[#9AE66E]/20 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 dark:text-white">
            Fundraising on Pracima takes just a few minutes
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Join thousands of people making a difference through our platform
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 mx-auto mb-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center"
              >
                <feature.icon className="w-8 h-8 text-green-600 dark:text-green-400" />
              </motion.div>
              <h3 className="text-xl font-bold mb-4 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const features = [
  {
    icon: Smile,
    title: "Give Happiness",
    description: "Giving happiness is always a great feeling and joy to help others in need.",
  },
  {
    icon: Heart,
    title: "Share Love",
    description: "When you share love with them, they will share double the amount of love back.",
  },
  {
    icon: Users,
    title: "Build Socially",
    description: "Building socially requires our best efforts to create a better community together.",
  },
]

