'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Clock, ShoppingCart, Gift, Percent } from 'lucide-react'
import { motion, useAnimation, AnimatePresence } from 'framer-motion'

export default function SpecialOffers() {
  const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime.days === 0 && prevTime.hours === 0 && prevTime.minutes === 0 && prevTime.seconds === 0) {
          clearInterval(timer)
          return prevTime
        }
        let newTime = { ...prevTime }
        if (newTime.seconds > 0) {
          newTime.seconds--
        } else if (newTime.minutes > 0) {
          newTime.minutes--
          newTime.seconds = 59
        } else if (newTime.hours > 0) {
          newTime.hours--
          newTime.minutes = 59
          newTime.seconds = 59
        } else if (newTime.days > 0) {
          newTime.days--
          newTime.hours = 23
          newTime.minutes = 59
          newTime.seconds = 59
        }
        return newTime
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (value: number) => value.toString().padStart(2, '0')

  return (
    <section className="bg-gradient-to-r from-primary to-purple-700 text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-pulse">
          🎉 Exclusive Special Offers 🎉
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <OfferCard
            title="Buy One Get One Free"
            description="On all vitamins and supplements. Limited time offer!"
            icon={<Gift className="w-8 h-8 text-primary" />}
            buttonText="Claim Offer"
            endTime={timeLeft}
          />
          <OfferCard
            title="20% Off All Orders Over ₹1000"
            description="Use code HEALTH20 at checkout. Valid for all products."
            icon={<Percent className="w-8 h-8 text-primary" />}
            buttonText="Shop Now"
            endTime={{ days: 5, hours: 0, minutes: 0, seconds: 0 }}
          />
        </div>
      </div>
    </section>
  )
}

interface OfferCardProps {
  title: string
  description: string
  icon: React.ReactNode
  buttonText: string
  endTime: { days: number; hours: number; minutes: number; seconds: number }
}

function OfferCard({ title, description, icon, buttonText, endTime }: OfferCardProps) {
  return (
    <motion.div
      className="bg-white text-gray-800 p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center mb-6">
        {icon}
        <h3 className="text-3xl font-semibold ml-4">{title}</h3>
      </div>
      <p className="text-xl mb-6">{description}</p>
      <div className="flex items-center justify-between">
        <AnimatedButton buttonText={buttonText} />
        <div className="flex items-center">
          <Clock className="mr-2 text-primary" size={24} />
          <motion.span
            className="text-lg font-semibold"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            Ends in {endTime.days}d {formatTime(endTime.hours)}h {formatTime(endTime.minutes)}m {formatTime(endTime.seconds)}s
          </motion.span>
        </div>
      </div>
    </motion.div>
  )
}

function AnimatedButton({ buttonText }: { buttonText: string }) {
  const controls = useAnimation()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={controls}
    >
      <Button
        variant="default"
        size="lg"
        className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-full transition-all duration-300 flex items-center overflow-hidden relative"
        onMouseEnter={() => controls.start('hover')}
        onMouseLeave={() => controls.start('initial')}
      >
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-0 bg-white opacity-20"
              initial={{ scale: 0, borderRadius: '100%' }}
              animate={{ scale: 2, borderRadius: '0%' }}
              exit={{ scale: 0, borderRadius: '100%' }}
              transition={{ duration: 0.3 }}
            />
          )}
        </AnimatePresence>
        <motion.div
          className="flex items-center"
          variants={{
            initial: { x: 0 },
            hover: { x: 5 },
          }}
          initial="initial"
          animate={controls}
        >
          <ShoppingCart className="mr-2" size={20} />
          {buttonText}
        </motion.div>
      </Button>
    </motion.div>
  )
}

function formatTime(value: number): string {
  return value.toString().padStart(2, '0')
}

