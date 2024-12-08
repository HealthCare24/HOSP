'use client'

import { Handshake, PersonStanding, BookCheck, ScanHeart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const promises = [
  {
    icon: <Handshake className="h-12 w-12" />,
    title: "Personalized Care",
    description: "We tailor healthcare solutions to meet your individual needs, ensuring you get the care and attention you deserve."
  },
  {
    icon: <PersonStanding className="h-12 w-12" />,
    title: "Accessibility Anytime, Anywhere",
    description: "With user-friendly platforms and 24/7 support, we’re always within reach to provide seamless healthcare experiences."
  },
  {
    icon: <BookCheck className="h-12 w-12" />,
    title: "Trusted Expertise",
    description: "Partnering with certified professionals and advanced technologies, we ensure every interaction is reliable and effective."
  },
  {
    icon: <ScanHeart className="h-12 w-12" />,
    title: "Empowering Healthy Lives",
    description: "We are committed to educating and equipping you with tools and resources for proactive health management, fostering long-term well-being."
  }
]

export default function OurPromise() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Promise</h2>
          <p className="text-lg text-gray-700 mb-6">
            At HOSP, your health and well-being are our top priorities. Here's how we deliver on our promise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {promises.map((promise, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-4 p-4 rounded-full bg-gray-100 shadow-md text-gray-600 
                             group-hover:scale-110 group-hover:shadow-lg transition-transform duration-300">
                {promise.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                {promise.title}
              </h3>
              <p className="text-gray-700">
                {promise.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-full px-8 border border-gray-300"
          >
            Read About Our Process
          </Button>
        </div>
      </div>
    </section>
  )
}
