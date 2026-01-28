'use client'

import React from 'react'

interface SlideCounterProps {
  currentSlide: number
  totalSlides: number
}

export function SlideCounter({ currentSlide, totalSlides }: SlideCounterProps) {
  return (
    <div className="fixed bottom-8 left-8 z-40 bg-sumi/50 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border border-washi/10 min-h-[44px] flex items-center">
      <span className="text-sm font-medium text-hai">
        {String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
      </span>
    </div>
  )
}
