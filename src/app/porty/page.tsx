'use client'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Star, Smile, X, ExternalLink, Mail } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Page() {
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
    <div className="min-h-screen bg-[#faf6f6] p-8 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star, i) => (
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
              left: star.left,
              top: star.top,
              color: star.color,
            }}
          >
            <Star className="w-4 h-4" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Header Window */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-[#FFB6C1] p-4 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-8"
        >
          <div className="flex justify-between items-center mb-2 border-b border-black pb-2">
            <span className="text-lg font-bold">Welcome.exe</span>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Smile className="w-6 h-6 text-yellow-400" />
              <h1 className="text-2xl font-bold">Web Developer Portfolio</h1>
            </div>
            <Button className="bg-[#98FB98] hover:bg-[#90EE90] text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 transition-all">
              Contact Me
            </Button>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[
            {
              title: 'E-commerce Project',
              desc: 'Online store with modern features',
              color: '#E6E6FA',
            },
            {
              title: 'Portfolio Website',
              desc: 'Showcase of creative works',
              color: '#FFD1DC',
            },
            {
              title: 'Blog Platform',
              desc: 'Content management system',
              color: '#98FB98',
            },
            {
              title: 'Landing Page',
              desc: 'High-converting design',
              color: '#87CEEB',
            },
          ].map((project, index) => (
            <motion.div
              key={Number(index)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div
                className="p-4 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                style={{ backgroundColor: project.color }}
              >
                <div className="flex justify-between items-center mb-3 border-b border-black pb-2">
                  <span className="font-bold">{project.title}</span>
                  <X className="w-4 h-4" />
                </div>
                <div className="aspect-video bg-white rounded border-2 border-black mb-3 overflow-hidden">
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-400">Preview Image</span>
                  </div>
                </div>
                <p className="mb-3">{project.desc}</p>
                <Button className="w-full bg-white hover:bg-gray-50 text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 transition-all">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Project
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-[#FFB6C1] p-6 rounded-lg border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-md mx-auto"
        >
          <div className="flex justify-between items-center mb-4 border-b-2 border-black pb-2">
            <span className="text-lg font-bold">Let's Work Together!</span>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
          </div>

          <div className="flex gap-2 items-center bg-white p-3 rounded border-2 border-black mb-4">
            <Mail className="w-5 h-5" />
            <span className="font-medium">your.email@example.com</span>
          </div>

          <Button className="w-full bg-[#98FB98] hover:bg-[#90EE90] text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
            Start a Project
          </Button>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-600">
            © 2024 Your Name • Made with ❤️
          </p>
        </motion.div>
      </div>
    </div>
  )
}
