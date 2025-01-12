'use client'

import { motion, useScroll, useSpring } from "framer-motion"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Fundraisers from "@/components/fundraisers"
import Community from "@/components/community"
import ImpactStories from "@/components/impact-stories"
import DonationCalculator from "@/components/donation-calculator"
import Team from "@/components/team"
import FAQ from "@/components/faq"
import Newsletter from "@/components/newsletter"
import Footer from "@/components/footer"

export default function Page() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-green-600 origin-left z-50"
        style={{ scaleX }}
      />
      <Header />
      <main className="pt-20">
        <Hero />
        <Features />
        <Fundraisers />
        <Community />
        <ImpactStories />
        <DonationCalculator />
        <div className="relative overflow-hidden">
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
            className="bg-[#9AE66E] py-4 whitespace-nowrap"
          >
            <span className="text-xl font-medium px-4">
              let&apos;s help each other * let&apos;s help each other * let&apos;s help each other *
            </span>
          </motion.div>
        </div>
        <Team />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

