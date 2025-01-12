'use client'

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQ() {
  return (
    <section className="py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Frequently asked questions</h2>
          <p className="text-gray-600 text-lg">
            Find answers to common questions about our platform and donation process
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl shadow-sm border px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="text-lg font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}

const faqs = [
  {
    question: "What types of charities can I donate to and how do I find them?",
    answer: "You can donate to various verified charities including humanitarian aid, education, healthcare, and environmental causes. Use our search feature to find specific charities or browse by category.",
  },
  {
    question: "Is my donation tax-deductible and how do I claim it on my taxes?",
    answer: "Yes, donations to registered charities are typically tax-deductible. You'll receive a receipt for your donation which you can use for tax purposes.",
  },
  {
    question: "Can I donate anonymously?",
    answer: "Yes, you can choose to make anonymous donations. Your personal information will not be shared with the charity or displayed publicly.",
  },
  {
    question: "What percentage of my donation actually goes to the charity for administration?",
    answer: "On average, 90-95% of your donation goes directly to the charity. Our platform fee is kept minimal to maximize the impact of your contribution.",
  },
  {
    question: "Can I donate goods or services instead of money?",
    answer: "Yes, many charities accept in-kind donations. Contact the specific charity to learn about their needs and donation acceptance policies.",
  },
]

