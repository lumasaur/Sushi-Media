'use client'

import React, { useState } from 'react'
import { SlideContainer, ProgressBar, SlideCounter } from '@/components/presentation'

export default function PresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 3

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Progress and counter to verify components work */}
      <ProgressBar currentSlide={currentSlide} totalSlides={totalSlides} />
      <SlideCounter currentSlide={currentSlide} totalSlides={totalSlides} />

      {/* Test slides */}
      <SlideContainer slideNumber={0} isActive={currentSlide === 0} background="bg-brand-black">
        <div className="h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Ami Sushi Presentation</h1>
            <p className="text-xl text-gray-300">Premium Sushi with Social Soul</p>
            <p className="mt-8 text-sm text-gray-400">
              Components migrated successfully. Phase 2 will add navigation.
            </p>
          </div>
        </div>
      </SlideContainer>

      <SlideContainer slideNumber={1} isActive={currentSlide === 1} background="bg-brand-red">
        <div className="h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Phase 1 Complete</h2>
            <p className="text-lg text-gray-200">
              Archive routes created, components migrated, foundation ready
            </p>
          </div>
        </div>
      </SlideContainer>

      <SlideContainer slideNumber={2} isActive={currentSlide === 2} background="bg-gradient-to-br from-gray-900 to-black">
        <div className="h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Next: Phase 2</h2>
            <p className="text-lg text-gray-200">
              Core navigation system with keyboard shortcuts and transitions
            </p>
          </div>
        </div>
      </SlideContainer>

      {/* Navigation for testing */}
      <div className="fixed bottom-8 right-8 z-50 flex gap-2">
        <button
          onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
          className="px-4 py-2 bg-brand-red text-white rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentSlide === 0}
        >
          Prev
        </button>
        <button
          onClick={() => setCurrentSlide(Math.min(totalSlides - 1, currentSlide + 1))}
          className="px-4 py-2 bg-brand-red text-white rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentSlide === totalSlides - 1}
        >
          Next
        </button>
      </div>

      {/* Link to archive */}
      <a
        href="/archive"
        className="fixed bottom-8 left-8 z-50 text-sm text-gray-500 hover:text-brand-red underline"
      >
        View Archive
      </a>
    </div>
  )
}
