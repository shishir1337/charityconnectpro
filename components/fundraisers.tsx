'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Heart } from 'lucide-react'
import Image from "next/image"

export default function Fundraisers() {
  return (
    <section className="py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 dark:text-white">Fundraisers In Extreme Need</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Support these urgent causes and make a real difference in people's lives
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fundraisers.map((fundraiser, index) => (
            <motion.div
              key={fundraiser.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative">
                <Image
                  src={fundraiser.image}
                  alt={fundraiser.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-4 right-4 w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Heart className="w-5 h-5 text-red-500" />
                </motion.button>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 dark:text-white">{fundraiser.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{fundraiser.description}</p>
                <div className="space-y-4">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: fundraiser.progress + '%' }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="bg-green-600 dark:bg-green-400 h-2 rounded-full"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-2xl font-bold dark:text-white">${fundraiser.amount}</p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">raised of ${fundraiser.goal}</p>
                    </div>
                    <Button>Donate Now</Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const fundraisers = [
  {
    title: "Help Turkey and Syria Earthquake Relief Fund",
    description: "Support for those affected by the devastating earthquakes",
    amount: "50,244",
    goal: "100,000",
    progress: 50,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-7afad2838271295133f4f0a14bd76420-pxKupJUXKVF3dqdMEoS8kr7jej1l9o.webp",
  },
  {
    title: "Help Poor Children with Cancer to Access Treatment",
    description: "Medical support for children battling cancer",
    amount: "62,756",
    goal: "80,000",
    progress: 78,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-7afad2838271295133f4f0a14bd76420-pxKupJUXKVF3dqdMEoS8kr7jej1l9o.webp",
  },
  {
    title: "Provide Gift & food to 700 Street Children",
    description: "Bringing joy and sustenance to children in need",
    amount: "35,482",
    goal: "50,000",
    progress: 71,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-7afad2838271295133f4f0a14bd76420-pxKupJUXKVF3dqdMEoS8kr7jej1l9o.webp",
  },
]

