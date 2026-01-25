'use client'

import React from 'react'

interface LogoProps {
  currentSlide?: number
}

export function Logo({ currentSlide = 0 }: LogoProps) {
  // Apply white color on slides with dark backgrounds
  // This will need to be updated based on actual Sushi-Media slide backgrounds
  const isDarkBackground = currentSlide === 0 || currentSlide === 16
  const textColor = isDarkBackground ? 'text-white' : 'text-[#b22222]'

  return (
    <div className="absolute top-6 left-6 z-40 pointer-events-none">
      <div className="px-4 py-3 flex items-center gap-3">
        <span className={`text-2xl font-bold ${textColor} drop-shadow-sm`}>Ami Sushi</span>
      </div>
    </div>
  )
}
