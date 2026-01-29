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
  autoScroll?: boolean
}

export function SlideContainer({
  children,
  slideNumber,
  isActive,
  background = 'bg-night',
  className = '',
  enableScroll = false,
  showScrollIndicator = false,
  autoScroll = true
}: SlideContainerProps) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [hasOverflow, setHasOverflow] = React.useState(false)

  // Detect overflow to conditionally show scroll indicator
  React.useEffect(() => {
    const checkOverflow = () => {
      if (contentRef.current) {
        const { scrollHeight, clientHeight } = contentRef.current
        setHasOverflow(scrollHeight > clientHeight)
      }
    }

    // Check after render and on resize
    checkOverflow()
    window.addEventListener('resize', checkOverflow)
    return () => window.removeEventListener('resize', checkOverflow)
  }, [children, isActive])

  if (!isActive) return null

  return (
    <AnimatePresence mode="wait">
      <motion.section
        key={slideNumber}
        id={`slide-${slideNumber}`}
        className={`absolute inset-0 w-full h-full overflow-hidden ${background} ${className}`}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
        data-slide={slideNumber}
      >
        {/* Content area with flexible padding to avoid header/footer overlap */}
        <div className="w-full min-h-full flex flex-col pt-16 pb-16 md:pt-20 md:pb-24 px-4 sm:px-8 lg:px-16">
          <div
            ref={contentRef}
            className={`w-full max-w-[1400px] min-h-full mx-auto flex flex-col justify-center ${(autoScroll && enableScroll) || hasOverflow ? 'overflow-y-auto scrollable-slide' : 'overflow-hidden'
              } custom-scrollbar slide-content`}
          >
            {children}
          </div>
        </div>

        {/* Scroll indicator - show if requested OR if overflow detected */}
        {(showScrollIndicator || hasOverflow) && enableScroll && <ScrollIndicator slideRef={contentRef} />}
      </motion.section>
    </AnimatePresence>
  )
}
