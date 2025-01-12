'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function ImpactStories() {
  return (
    <section className="py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 dark:text-white">Impact Stories</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Real stories of lives changed through your generosity
          </p>
        </motion.div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {impactStories.map((story, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
              >
                <Image
                  src={story.image}
                  alt={story.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 dark:text-white">{story.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{story.story}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">- {story.location}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

const impactStories = [
  {
    name: "Sarah Johnson",
    story: "Thanks to your donations, I was able to receive life-saving cancer treatment.",
    location: "New York, USA",
    image: "/team-member-01.jpg",
  },
  {
    name: "Ahmed Hassan",
    story: "The earthquake relief fund helped my family rebuild our home after we lost everything.",
    location: "Gaziantep, Turkey",
    image: "/team-member-01.jpg",
  },
  {
    name: "Maria Garcia",
    story: "Your support provided me with the education I needed to pursue my dreams.",
    location: "Mexico City, Mexico",
    image: "/team-member-01.jpg",
  },
  {
    name: "Kwame Osei",
    story: "The clean water project in my village has transformed our community's health.",
    location: "Accra, Ghana",
    image: "/team-member-01.jpg",
  },
]

