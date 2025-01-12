'use client'

import { useState } from 'react'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"
import { Mail, Send, CheckCircle } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    console.log('Subscribing email:', email)
    toast({
      title: "Subscribed!",
      description: "You've successfully subscribed to our newsletter.",
    })
    setEmail('')
    setIsSubmitting(false)
    setIsSubscribed(true)
  }

  return (
    <section className="py-32 bg-gradient-to-br from-green-600 via-green-500 to-blue-600 dark:from-green-800 dark:via-green-700 dark:to-blue-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 container mx-auto px-4"
      >
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">Stay Updated</h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                  Join our newsletter and be the first to know about our latest projects, success stories, and how you can make a difference.
                </p>
              </motion.div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="pl-10 pr-4 py-3 w-full border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 focus:border-transparent"
                    disabled={isSubmitting || isSubscribed}
                  />
                </div>
                <Button 
                  type="submit" 
                  className={`w-full py-3 px-6 text-lg font-semibold rounded-lg transition-all duration-300 ${
                    isSubscribed 
                      ? 'bg-green-500 hover:bg-green-600 text-white' 
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                  disabled={isSubmitting || isSubscribed}
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <Send className="w-6 h-6" />
                    </motion.div>
                  ) : isSubscribed ? (
                    <>
                      <CheckCircle className="w-6 h-6 mr-2" />
                      Subscribed!
                    </>
                  ) : (
                    'Subscribe Now'
                  )}
                </Button>
              </form>
            </div>
            <div className="hidden md:block relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-500 opacity-90" />
              <img 
                src="/placeholder.svg" 
                alt="Newsletter background" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="text-white text-center"
                >
                  <h3 className="text-3xl font-bold mb-2">Make an Impact</h3>
                  <p className="text-lg">Your subscription helps us create positive change</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 48.3C840 50 960 60 1080 63.3C1200 67 1320 63 1380 61.7L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="currentColor" className="text-white dark:text-gray-900" />
        </svg>
      </div>
    </section>
  )
}

