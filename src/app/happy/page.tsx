'use client'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Star, X, Smile, Mail } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

export default function Page() {
  const [email, setEmail] = useState('')
  const [showThankYou, setShowThankYou] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowThankYou(true)
    setEmail('')
  }

  return (
    <div className="min-h-screen bg-[#faf6f6] p-8 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={Number(i)}
            className="absolute"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              delay: i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              color: ['#FFD1DC', '#E6E6FA', '#87CEEB', '#98FB98'][i % 4],
            }}
          >
            <Star className="w-4 h-4" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Happy Message Window */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-[#FFEFD5] p-4 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-8 w-64"
        >
          <div className="flex justify-between items-center mb-2 border-b border-black pb-1">
            <span className="text-sm font-bold">Message</span>
            <X className="w-4 h-4" />
          </div>
          <div className="flex items-center gap-2">
            <Smile className="w-6 h-6 text-yellow-400" />
            <p className="font-medium">HAVE A NICE DAY!</p>
          </div>
        </motion.div>

        {/* Main Newsletter Window */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-[#FFB6C1] p-6 rounded-lg border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-md mx-auto"
        >
          <div className="flex justify-between items-center mb-4 border-b-2 border-black pb-2">
            <span className="text-lg font-bold">
              SUBSCRIBE TO OUR NEWSLETTER
            </span>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-2 items-center bg-white p-2 rounded border-2 border-black">
              <Mail className="w-5 h-5" />
              <Input
                type="email"
                placeholder="YOUR EMAIL"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="border-none focus-visible:ring-0 bg-transparent placeholder:text-black"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-[#98FB98] hover:bg-[#90EE90] text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              SUBMIT
            </Button>
          </form>
        </motion.div>

        {/* Thank You Message */}
        {showThankYou && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-[#E6E6FA] p-4 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mt-8 w-48 mx-auto"
          >
            <div className="flex justify-between items-center mb-2 border-b border-black pb-1">
              <span className="text-sm font-bold">Thank you!</span>
              <button type="button" onClick={() => setShowThankYou(false)}>
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-center font-medium">You're subscribed! 🎉</p>
          </motion.div>
        )}

        {/* Be Happy Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <h1 className="text-4xl font-bold text-[#FFD700] drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
            BE HAPPY
          </h1>
        </motion.div>
      </div>
    </div>
  )
}
