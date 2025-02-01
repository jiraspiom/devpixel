'use client'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-yellow-400">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <header className="py-6 flex justify-between items-center">
          <div className="font-mono text-2xl font-bold pixel-text">
            DEV.PIXEL
          </div>
          <Button className="bg-black text-white hover:bg-gray-800 font-mono">
            CONTACT.EXE
          </Button>
        </header>

        <main className="py-20">
          <div className="relative">
            {/* <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wj8TYSZXRJGeMzBxYlWNHKHOSvIdbh.png"
              alt="Retro Windows"
              width={400}
              height={400}
              className="mx-auto mb-8"
            /> */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-mono font-bold mb-6 pixel-text">
                PIXEL PERFECT
                <br />
                WEBSITES
              </h1>
              <p className="text-xl font-mono mb-8 max-w-2xl mx-auto">
                CREATING MODERN WEBSITES WITH A RETRO TWIST
              </p>
              <Button className="bg-black text-white hover:bg-gray-800 font-mono text-lg px-8 py-6">
                START_PROJECT.EXE
              </Button>
            </motion.div>
          </div>
        </main>

        {/* Projects Grid */}
        <section className="py-20">
          <h2 className="text-3xl font-mono font-bold mb-12 text-center pixel-text">
            RECENT_PROJECTS
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map(project => (
              <motion.div
                key={project}
                className="bg-white p-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="h-8 bg-black mb-4 flex items-center px-2">
                  <div className="w-3 h-3 bg-white rounded-full mr-2" />
                  <div className="w-3 h-3 bg-white rounded-full mr-2" />
                  <div className="w-3 h-3 bg-white rounded-full" />
                </div>
                <div className="aspect-video bg-gray-200 mb-4" />
                <h3 className="font-mono font-bold mb-2">
                  PROJECT_{project}.EXE
                </h3>
                <p className="font-mono text-sm">
                  A pixel-perfect website with modern functionality
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 text-center">
          <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-3xl font-mono font-bold mb-6 pixel-text">
              READY_TO_START?
            </h2>
            <p className="font-mono mb-8 max-w-2xl mx-auto">
              LET'S CREATE SOMETHING AWESOME TOGETHER
            </p>
            <Button className="bg-black text-white hover:bg-gray-800 font-mono text-lg">
              CONTACT_NOW.EXE
            </Button>
          </div>
        </section>

        <footer className="py-6 text-center font-mono border-t-4 border-black">
          <p>
            &copy; 2025 DEV.PIXEL - ALL_RIGHTS_RESERVED.TXT by jiraspiom.exe
          </p>
        </footer>
      </div>

      {/* <style jsx global>{`
      .pixel-text {
        text-shadow: 2px 2px 0px rgba(0,0,0,1);
      }
    `}</style> */}
    </div>
  )
}
