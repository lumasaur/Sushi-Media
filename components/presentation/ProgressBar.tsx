'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface ProgressBarProps {
  currentSlide: number
  totalSlides: number
}

export function ProgressBar({ currentSlide, totalSlides }: ProgressBarProps) {
  const progress = (currentSlide / (totalSlides - 1)) * 100

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-transparent">
      <motion.div
        className="h-full bg-[#b22222]"
        initial={{ width: '0%' }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      />
    </div>
  )
}
