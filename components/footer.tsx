'use client'

import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">Pracima</h3>
            <p className="text-gray-300 mb-6">
              Make a change one step at a time. Join us in creating a better world through charitable giving.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-green-800 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            >
              <h4 className="font-semibold text-lg mb-6">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h4 className="font-semibold text-lg mb-6">Newsletter</h4>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter to get updates on our latest projects.
            </p>
            <div className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-green-800 border-green-700 text-white placeholder:text-gray-400"
              />
              <Button className="w-full bg-white text-green-900 hover:bg-gray-100">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-green-800 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Pracima. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

const socialLinks = [
  { name: "Facebook", icon: Facebook },
  { name: "Twitter", icon: Twitter },
  { name: "Instagram", icon: Instagram },
  { name: "LinkedIn", icon: Linkedin },
]

const footerLinks = [
  {
    title: "Company",
    links: ["About Us", "Our Work", "Contact", "Careers"],
  },
  {
    title: "Support",
    links: ["Help Center", "Safety Center", "Community Guidelines", "Terms of Service"],
  },
]

