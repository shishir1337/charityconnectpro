'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { PlayCircle, Heart, Users, Smile } from 'lucide-react'

export default function Hero() {
  const [currentStatIndex, setCurrentStatIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStatIndex((prevIndex) => (prevIndex + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          className="absolute top-0 left-0 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 dark:bg-green-700 dark:opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute top-0 right-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 dark:bg-purple-700 dark:opacity-30"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 dark:bg-blue-700 dark:opacity-30"
          animate={{
            scale: [1, 1.4, 1],
            x: [-100, 100, -100],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Empowering Change Through{" "}
              <span className="text-green-600 dark:text-green-400 relative inline-block">
                Compassion
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-2 bg-green-400 dark:bg-green-600"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                />
              </span>
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Join our global community of changemakers and make a lasting impact on lives around the world. Every act of kindness counts.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Button size="lg" className="text-lg px-8 py-6 bg-green-600 hover:bg-green-700 text-white transition-all duration-300 ease-in-out transform hover:scale-105">
                Start Donating
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 transition-all duration-300 ease-in-out transform hover:scale-105">
                <PlayCircle className="mr-2 h-5 w-5" /> Watch Our Story
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-[400px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
              <Image
                src="/hero.jpg"
                alt="Charity in action"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStatIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-white"
                  >
                    <h3 className="text-3xl font-bold mb-2">{stats[currentStatIndex].value}</h3>
                    <p className="text-lg">{stats[currentStatIndex].title}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-yellow-400 rounded-full flex items-center justify-center text-4xl font-bold text-white shadow-lg transform rotate-12">
              Make a<br />Difference!
            </div>
          </motion.div>
        </div>
      </div>

      {/* Feature icons */}
      <div className="absolute bottom-0 left-0 right-0 bg-white dark:bg-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-around items-center">
            {[
              { icon: Heart, text: "Spread Love" },
              { icon: Users, text: "Build Community" },
              { icon: Smile, text: "Create Happiness" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
              >
                <item.icon className="w-8 h-8 text-green-600 dark:text-green-400 mb-2" />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const stats = [
  { value: "65%", title: "Success Rate" },
  { value: "2,597", title: "Children Helped" },
  { value: "500+", title: "People Joined" },
  { value: "New Hope", title: "for Help" },
]

