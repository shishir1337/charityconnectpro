'use client'

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Community() {
  const countRef = useRef(null)
  const isInView = useInView(countRef)

  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-2xl mb-6">
            Join our community for donating and be a part of a positive change in the world. With over:
          </h2>
          <motion.div
            ref={countRef}
            className="text-7xl font-bold mb-6 text-green-600"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            120,859+
          </motion.div>
          <p className="text-xl text-gray-600 mb-8">people already joining</p>
          <Button size="lg" className="text-lg">
            Join our community
          </Button>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {[1, 2, 3, 4].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -5 }}
              className="aspect-square relative rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src="/placeholder.svg"
                alt="Community member"
                fill
                className="object-cover transition-transform hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

