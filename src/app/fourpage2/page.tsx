'use client'
import { Button } from '@/components/ui/button'
import { Progress } from '@radix-ui/react-progress'
import { motion } from 'framer-motion'
import {
  Star,
  Mail,
  Smile,
  SkipBack,
  Play,
  SkipForward,
  CheckSquare,
} from 'lucide-react'
import { Input } from '@/components/ui/input'
import { useState, useEffect } from 'react'

export default function Page() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 0 : prev + 1))
    }, 30)
    return () => clearInterval(timer)
  }, [])

  const [stars, setStars] = useState<
    { left: string; top: string; color: string }[]
  >([])

  useEffect(() => {
    const colors = ['#FFD1DC', '#E6E6FA', '#87CEEB', '#98FB98']
    const newStars = Array.from({ length: 12 }, (_, i) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      color: colors[i % colors.length],
    }))
    setStars(newStars)
  }, [])

  return (
    <div className="min-h-screen bg-[#E6E6FA] p-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(#8B81C1 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      {/* Decorative Stars */}
      {stars.map((_, i) => (
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
            delay: i * 0.2,
            repeat: Number.POSITIVE_INFINITY,
          }}
          style={{
            left: `${15 + Math.random() * 70}%`,
            top: `${15 + Math.random() * 70}%`,
            color: ['#FFB6C1', '#87CEEB', '#E6E6FA'][i % 3],
          }}
        >
          <Star className="w-4 h-4" />
        </motion.div>
      ))}

      <div className="max-w-6xl mx-auto relative">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Card 1 - Loading Post */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#FFF8F8] rounded-xl p-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative"
          >
            <div className="space-y-4">
              <div className="flex gap-2 mb-4">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={Number(i)}
                    className="h-20 w-full bg-white border-2 border-black rounded-lg relative"
                    style={{ transform: `rotate(${i * 2}deg)` }}
                  >
                    <div className="h-1.5 w-12 bg-gray-200 absolute top-3 left-3 rounded-full" />
                    <div className="h-1.5 w-8 bg-gray-200 absolute top-7 left-3 rounded-full" />
                  </div>
                ))}
              </div>
              <div className="text-center font-bold text-red-500 py-1 px-2 border-2 border-red-500 rounded-lg text-sm">
                LOADING NEW POST COMPLETED!
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <Mail className="w-10 h-10 text-[#FFB6C1]" />
                  <motion.div
                    className="absolute -right-1 -top-1"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  >
                    <Star className="w-4 h-4 text-[#FFD700]" />
                  </motion.div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <Smile className="w-8 h-8 text-yellow-400" />
                <p className="font-bold text-sm">SWIPE UP</p>
              </div>
            </div>
            {/* Dotted Line Decoration */}
            {/* <svg
              className="absolute -right-4 top-1/2 transform translate-x-full"
              width="40"
              height="2"
            >
              <line
                x1="0"
                y1="1"
                x2="40"
                y2="1"
                stroke="black"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
            </svg> */}
          </motion.div>

          {/* Card 2 - Login */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-[#FFF8F8] rounded-xl p-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative"
          >
            <div className="space-y-4">
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <Smile className="w-16 h-16 text-yellow-400" />
                  <motion.div
                    className="absolute -right-2 -top-2"
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  >
                    <Star className="w-6 h-6 text-[#87CEEB]" />
                  </motion.div>
                </div>
              </div>
              <div className="bg-[#87CEEB] border-2 border-black p-4 rounded-lg">
                <div className="flex items-center border-b-2 border-black pb-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <Input
                  type="text"
                  placeholder="username"
                  className="mb-2 border-2 border-black bg-white"
                />
                <Input
                  type="password"
                  placeholder="••••••••"
                  className="border-2 border-black bg-white"
                />
              </div>
              <div className="bg-[#FFD1DC] border-2 border-black p-4 rounded-lg">
                <p className="text-center mb-2 text-sm font-bold">
                  HAPPINESS LOADING...
                </p>
                <Progress
                  value={progress}
                  className="h-2 border border-black"
                />
                <Button className="w-full mt-4 bg-white hover:bg-gray-50 text-black border-2 border-black font-bold">
                  DO IT
                </Button>
              </div>
            </div>
            {/* <svg
              className="absolute -right-4 top-1/2 transform translate-x-full"
              width="40"
              height="2"
            >
              <line
                x1="0"
                y1="1"
                x2="40"
                y2="1"
                stroke="black"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
            </svg> */}
          </motion.div>

          {/* Card 3 - Media Player */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[#FFF8F8] rounded-xl p-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative"
          >
            <div className="space-y-4">
              <div className="bg-[#87CEEB] border-2 border-black p-4 rounded-lg">
                <div className="flex justify-between items-center mb-4 text-sm">
                  <span className="font-mono">01_file.txt</span>
                  <span className="font-mono">02_file.txt</span>
                </div>
                <div className="flex justify-center gap-6 mb-4">
                  <SkipBack className="w-6 h-6" />
                  <Play className="w-6 h-6" />
                  <SkipForward className="w-6 h-6" />
                </div>
                <Progress value={65} className="h-2 border border-black" />
              </div>
              <div className="flex items-center gap-2 bg-[#E6E6FA] border-2 border-black p-2 rounded-lg">
                <CheckSquare className="w-5 h-5" />
                <span className="text-sm font-bold">I'M NOT A ROBOT</span>
              </div>
              <div className="flex justify-between items-center">
                <motion.div
                  animate={{
                    rotate: [0, 10, 0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                >
                  <Smile className="w-8 h-8 text-yellow-400" />
                </motion.div>
                <Star className="w-8 h-8 text-[#FFB6C1]" />
              </div>
            </div>
            {/* <svg
              className="absolute -right-4 top-1/2 transform translate-x-full"
              width="40"
              height="2"
            >
              <line
                x1="0"
                y1="1"
                x2="40"
                y2="1"
                stroke="black"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
            </svg> */}
          </motion.div>

          {/* Card 4 - New Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-[#FFF8F8] rounded-xl p-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-center mb-4">
                <Star className="w-6 h-6 text-[#E6E6FA]" />
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  <span className="text-sm font-bold">NEW MESSAGE</span>
                </div>
              </div>
              <div className="bg-white border-2 border-black h-40 rounded-lg grid place-items-center">
                <div className="w-full h-full p-4">
                  <div className="grid grid-cols-4 gap-2 h-full">
                    {[...Array(16)].map((_, i) => (
                      <div key={Number(i)} className="bg-gray-100 rounded" />
                    ))}
                  </div>
                </div>
              </div>
              <Button className="w-full bg-[#E6E6FA] hover:bg-[#D8BFD8] text-black border-2 border-black font-bold">
                ENTER
              </Button>
              <div className="flex justify-end">
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                >
                  <Mail className="w-8 h-8 text-[#FFB6C1]" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
