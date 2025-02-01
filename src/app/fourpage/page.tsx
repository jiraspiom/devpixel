'use client'
import { Button } from '@/components/ui/button'
import { motion, progress } from 'framer-motion'
import {
  Mail,
  Smile,
  Rewind,
  Play,
  FastForward,
  CheckSquare,
  Star,
} from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Progress } from '@radix-ui/react-progress'
import { useState, useEffect } from 'react'

export default function Page() {
  const [progress, setProgress] = useState(0)
  const [currentCard, setCurrentCard] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 0 : prev + 1))
    }, 30)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-[#E6E6FA] p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-6">
          {/* Card 1 - Swipe Up */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg p-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            <div className="space-y-4">
              <div className="flex gap-2 mb-4">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={Number(i)}
                    className="h-24 w-full bg-gray-100 border-2 border-black rounded relative -rotate-3"
                    style={{ transform: `rotate(${i * 2}deg)` }}
                  >
                    <div className="h-2 w-12 bg-gray-300 absolute top-3 left-3" />
                    <div className="h-2 w-8 bg-gray-300 absolute top-7 left-3" />
                  </div>
                ))}
              </div>
              <div className="text-center font-bold border-2 border-red-500 text-red-500 py-1 rounded">
                LOADING NEW POST COMPLETED!
              </div>
              <div className="flex justify-center">
                <Mail className="w-12 h-12 text-[#FFB6C1]" />
              </div>
              <div className="flex justify-between items-center">
                <Smile className="w-8 h-8 text-yellow-400" />
                <p className="font-bold">SWIPE UP</p>
              </div>
            </div>
          </motion.div>

          {/* Card 2 - Login */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-lg p-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            <div className="space-y-4">
              <div className="flex justify-center mb-4">
                <Smile className="w-16 h-16 text-yellow-400" />
              </div>
              <div className="bg-[#87CEEB] border-2 border-black p-4 rounded">
                <Input
                  type="text"
                  placeholder="username"
                  className="mb-2 border-2 border-black"
                />
                <Input
                  type="password"
                  placeholder="password"
                  className="border-2 border-black"
                />
              </div>
              <div className="bg-[#FFD1DC] border-2 border-black p-4 rounded">
                <p className="text-center mb-2">HAPPINESS LOADING...</p>
                <Progress
                  value={progress}
                  className="h-2 border border-black"
                />
                <Button className="w-full mt-4 bg-white hover:bg-gray-50 text-black border-2 border-black">
                  DO IT
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Card 3 - Media Player */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-lg p-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            <div className="space-y-4">
              <div className="bg-[#87CEEB] border-2 border-black p-4 rounded">
                <div className="flex justify-between items-center mb-4">
                  <span>01_file.txt</span>
                  <span>02_file.txt</span>
                </div>
                <div className="flex justify-center gap-4 mb-4">
                  <Rewind className="w-6 h-6" />
                  <Play className="w-6 h-6" />
                  <FastForward className="w-6 h-6" />
                </div>
                <Progress value={65} className="h-2 border border-black" />
              </div>
              <div className="flex items-center gap-2 bg-[#E6E6FA] border-2 border-black p-2 rounded">
                <CheckSquare className="w-5 h-5" />
                <span className="text-sm">I'M NOT A ROBOT</span>
              </div>
              <div className="flex justify-between items-center">
                <Smile className="w-8 h-8 text-yellow-400" />
                <Star className="w-8 h-8 text-[#FFB6C1]" />
              </div>
            </div>
          </motion.div>

          {/* Card 4 - New Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-lg p-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-center mb-4">
                <Star className="w-6 h-6 text-[#E6E6FA]" />
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  <span className="text-sm font-bold">NEW MESSAGE</span>
                </div>
              </div>
              <div className="bg-gray-100 border-2 border-black h-40 rounded grid place-items-center">
                <span className="text-gray-400">Message Content</span>
              </div>
              <Button className="w-full bg-[#E6E6FA] hover:bg-[#D8BFD8] text-black border-2 border-black">
                ENTER
              </Button>
              <div className="flex justify-end">
                <Mail className="w-8 h-8 text-[#FFB6C1]" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
