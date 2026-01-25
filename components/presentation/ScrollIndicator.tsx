'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface ScrollIndicatorProps {
  slideRef?: React.RefObject<HTMLDivElement>
}

export function ScrollIndicator({ slideRef }: ScrollIndicatorProps) {
  const [hasOverflow, setHasOverflow] = useState(false)
  const [isAtBottom, setIsAtBottom] = useState(false)

  useEffect(() => {
    const checkOverflow = () => {
      if (slideRef?.current) {
        const element = slideRef.current
        const hasVerticalOverflow = element.scrollHeight > element.clientHeight
        setHasOverflow(hasVerticalOverflow)

        // Check if scrolled to bottom
        const isBottom = element.scrollHeight - element.scrollTop <= element.clientHeight + 10
        setIsAtBottom(isBottom)
      }
    }

    checkOverflow()

    const element = slideRef?.current
    if (element) {
      element.addEventListener('scroll', checkOverflow)
      window.addEventListener('resize', checkOverflow)

      return () => {
        element.removeEventListener('scroll', checkOverflow)
        window.removeEventListener('resize', checkOverflow)
      }
    }
  }, [slideRef])

  if (!hasOverflow || isAtBottom) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-30 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <div className="text-xs text-gray-500 font-medium bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
            Scroll for more
          </div>
          <ChevronDown className="text-gray-400" size={20} />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
