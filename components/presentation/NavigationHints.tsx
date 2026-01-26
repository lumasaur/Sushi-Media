'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface NavigationHintsProps {
  onDismiss?: () => void
}

export function NavigationHints({ onDismiss }: NavigationHintsProps) {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    // Check localStorage for previous visit
    const hasSeenHints = localStorage.getItem('sushi-media-nav-hints-seen')
    if (!hasSeenHints) {
      // Delay showing hints slightly for better UX
      const timer = setTimeout(() => setVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const dismiss = () => {
    setDismissed(true)
    localStorage.setItem('sushi-media-nav-hints-seen', 'true')
    setTimeout(() => {
      setVisible(false)
      onDismiss?.()
    }, 300)
  }

  // Auto-dismiss after 5 seconds
  useEffect(() => {
    if (visible && !dismissed) {
      const timer = setTimeout(dismiss, 5000)
      return () => clearTimeout(timer)
    }
  }, [visible, dismissed])

  // Dismiss on any user interaction
  useEffect(() => {
    if (visible && !dismissed) {
      const handleInteraction = () => dismiss()
      window.addEventListener('click', handleInteraction, { once: true })
      window.addEventListener('keydown', handleInteraction, { once: true })
      window.addEventListener('touchstart', handleInteraction, { once: true })
      return () => {
        window.removeEventListener('click', handleInteraction)
        window.removeEventListener('keydown', handleInteraction)
        window.removeEventListener('touchstart', handleInteraction)
      }
    }
  }, [visible, dismissed])

  if (!visible) return null

  return (
    <AnimatePresence>
      {!dismissed && (
        <>
          {/* Left zone hint */}
          <motion.div
            className="fixed left-0 top-0 bottom-0 w-1/4 pointer-events-none z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent" />
            <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-white/60">
              <ChevronLeft className="w-6 h-6" />
              <span className="text-sm font-medium">Back</span>
            </div>
          </motion.div>

          {/* Right zone hint */}
          <motion.div
            className="fixed right-0 top-0 bottom-0 w-3/4 pointer-events-none z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-l from-white/10 to-transparent" />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-white/60">
              <span className="text-sm font-medium">Next</span>
              <ChevronRight className="w-6 h-6" />
            </div>
          </motion.div>

          {/* Bottom hint text */}
          <motion.div
            className="fixed bottom-24 left-1/2 -translate-x-1/2 z-30 pointer-events-none"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <div className="bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full text-white/80 text-sm">
              Double-tap or swipe to navigate
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
