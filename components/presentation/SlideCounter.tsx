'use client'

import React from 'react'

interface SlideCounterProps {
  currentSlide: number
  totalSlides: number
}

export function SlideCounter({ currentSlide, totalSlides }: SlideCounterProps) {
  return (
    <div className="fixed bottom-8 left-8 z-40 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border border-gray-200">
      <span className="text-sm font-medium text-[#b22222]">
        {String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
      </span>
    </div>
  )
}
