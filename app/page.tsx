'use client'

import React from 'react'
import {
  SlideContainer,
  ProgressBar,
  SlideCounter,
  NavigationHints
} from '@/components/presentation'
import { useSlideNavigation, useTouchGestures } from '@/hooks'

export default function PresentationPage() {
  const totalSlides = 3  // Will increase when content is added in Phase 3

  const {
    currentSlide,
    nextSlide,
    previousSlide,
    goToSlide,
    isFirst,
    isLast
  } = useSlideNavigation({ totalSlides })

  // Touch gestures for mobile navigation
  useTouchGestures({
    onNavigateForward: nextSlide,
    onNavigateBackward: previousSlide
  })

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Navigation hints for first-time users */}
      <NavigationHints />

      {/* Progress indicators */}
      <ProgressBar currentSlide={currentSlide} totalSlides={totalSlides} />
      <SlideCounter currentSlide={currentSlide} totalSlides={totalSlides} />

      {/* Placeholder slides - will be replaced in Phase 3 */}
      <SlideContainer slideNumber={0} isActive={currentSlide === 0} background="bg-brand-black">
        <div className="h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Ami Sushi Presentation</h1>
            <p className="text-xl text-gray-300">Premium Sushi with Social Soul</p>
            <p className="mt-8 text-sm text-gray-400">
              Try: Arrow keys, swipe, or double-tap to navigate
            </p>
          </div>
        </div>
      </SlideContainer>

      <SlideContainer slideNumber={1} isActive={currentSlide === 1} background="bg-brand-red">
        <div className="h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Navigation System Complete</h2>
            <p className="text-lg text-gray-200">
              Keyboard, touch gestures, and URL state all working
            </p>
          </div>
        </div>
      </SlideContainer>

      <SlideContainer slideNumber={2} isActive={currentSlide === 2} background="bg-gradient-to-br from-gray-900 to-black">
        <div className="h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready for Content</h2>
            <p className="text-lg text-gray-200">
              Phase 3 will add the strategic narrative slides
            </p>
          </div>
        </div>
      </SlideContainer>

      {/* Archive link */}
      <a
        href="/archive"
        className="fixed bottom-8 left-8 z-50 text-sm text-gray-500 hover:text-brand-red underline"
      >
        View Archive
      </a>

      {/* Keyboard hint - desktop only */}
      <div className="hidden md:block fixed bottom-8 right-8 z-40 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-lg border border-gray-200 text-xs text-gray-600">
        <span className="font-mono">&#8592; &#8594;</span> Navigate
      </div>
    </div>
  )
}
