'use client'

import { useState } from 'react'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function DonationCalculator() {
  const [amount, setAmount] = useState(50)
  const [frequency, setFrequency] = useState('monthly')

  const calculateImpact = () => {
    const monthlyAmount = frequency === 'monthly' ? amount : amount / 12
    return {
      meals: Math.floor(monthlyAmount * 10),
      water: Math.floor(monthlyAmount * 5),
      education: Math.floor(monthlyAmount * 0.5),
    }
  }

  const impact = calculateImpact()

  return (
    <section className="py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 dark:text-white">See Your Impact</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Calculate how your donation can make a difference
          </p>
        </motion.div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <Label htmlFor="amount">Donation Amount ($)</Label>
              <Input
                id="amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                min={1}
              />
            </div>
            <div>
              <Label htmlFor="frequency">Frequency</Label>
              <select
                id="frequency"
                value={frequency}
                onChange={(e) => setFrequency(e.target.value)}
                className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              >
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <p className="text-lg font-semibold dark:text-white">Your {frequency} donation can provide:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>{impact.meals} meals for hungry children</li>
              <li>{impact.water} liters of clean water</li>
              <li>{impact.education} hours of education for underprivileged students</li>
            </ul>
          </div>

          <Button className="w-full">Donate Now</Button>
        </div>
      </div>
    </section>
  )
}

