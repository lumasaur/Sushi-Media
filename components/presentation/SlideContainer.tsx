'use client'

import React, { useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ScrollIndicator } from './ScrollIndicator'

interface SlideContainerProps {
  children: React.ReactNode
  slideNumber: number
  isActive: boolean
  background?: string
  className?: string
  enableScroll?: boolean
  showScrollIndicator?: boolean
}

export function SlideContainer({
  children,
  slideNumber,
  isActive,
  background = 'bg-white',
  className = '',
  enableScroll = false,
  showScrollIndicator = false
}: SlideContainerProps) {
  const contentRef = useRef<HTMLDivElement>(null)

  if (!isActive) return null

  return (
    <AnimatePresence mode="wait">
      <motion.section
        key={slideNumber}
        id={`slide-${slideNumber}`}
        className={`absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center ${background} ${className}`}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
        data-slide={slideNumber}
      >
        {/* Content area with proper padding to avoid header/footer overlap */}
        <div className="w-full h-full pt-20 pb-20 px-4 sm:px-8 lg:px-16">
          <div
            ref={contentRef}
            className={`w-full max-w-[1400px] h-full mx-auto ${
              enableScroll ? 'overflow-y-auto scrollable-slide' : 'overflow-hidden'
            } custom-scrollbar`}
          >
            {children}
          </div>
        </div>

        {/* Scroll indicator - only show if explicitly enabled */}
        {showScrollIndicator && enableScroll && <ScrollIndicator slideRef={contentRef} />}
      </motion.section>
    </AnimatePresence>
  )
}
