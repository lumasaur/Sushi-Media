'use client'

import React from 'react'
import {
  SlideContainer,
  ProgressBar,
  SlideCounter,
  NavigationHints
} from '@/components/presentation'
import { useSlideNavigation, useTouchGestures } from '@/hooks'
import { slides } from '@/lib/slides/content'

export default function PresentationPage() {
  const totalSlides = slides.length

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

      {/* Dynamic slide rendering from centralized content */}
      {slides.map((slide) => (
        <SlideContainer
          key={slide.id}
          slideNumber={slide.id}
          isActive={currentSlide === slide.id}
          background={slide.background || 'bg-white'}
        >
          <div className="h-full flex items-center justify-center px-12 md:px-24">
            <div className="max-w-4xl w-full">
              {/* Title slide layout */}
              {slide.layout === 'title' && (
                <div className="text-center text-white">
                  <h1 className="text-5xl md:text-6xl font-bold">{slide.title}</h1>
                </div>
              )}

              {/* Content slide layout */}
              {slide.layout === 'content' && (
                <div className="text-white">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h2>
                  {slide.subtitle && (
                    <p className="text-xl md:text-2xl text-gray-300 mb-8">{slide.subtitle}</p>
                  )}
                  <ul className="space-y-4 text-lg md:text-xl">
                    {slide.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-brand-red mr-3 mt-1">•</span>
                        {typeof bullet === 'string' ? (
                          <span>{bullet}</span>
                        ) : (
                          <div>
                            <div>{bullet.main}</div>
                            <ul className="mt-2 ml-4 space-y-1 text-base md:text-lg text-gray-300">
                              {bullet.sub.map((subBullet, j) => (
                                <li key={j} className="flex items-start">
                                  <span className="text-brand-red mr-2">◦</span>
                                  <span>{subBullet}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </SlideContainer>
      ))}

      {/* Archive link */}
      <a
        href="/archive"
        className="fixed bottom-8 left-8 z-50 text-sm text-gray-500 hover:text-brand-red underline"
      >
        View Archive
      </a>
    </div>
  )
}
