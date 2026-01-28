'use client'

import React, { Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import {
  SlideContainer,
  ProgressBar,
  SlideCounter
} from '@/components/presentation'
import { useSlideNavigation, useTouchGestures } from '@/hooks'
import { weekdayBarSlides } from '@/lib/slides/weekday-bar'
import { ArrowLeft } from 'lucide-react'

// Animation variants for staggered bullet entry
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,   // 100ms delay between bullets
      delayChildren: 0.2       // Initial delay before first bullet
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,  // 300ms
      ease: [0.4, 0, 0.2, 1] as const  // Material Design easing
    }
  }
}

function WeekdayBarContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const returnSlide = searchParams.get('returnSlide') || '6'
  const totalSlides = weekdayBarSlides.length

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

  const handleBackToMain = () => {
    router.push(`/?slide=${returnSlide}`)
  }

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Back button to main story */}
      <button
        onClick={handleBackToMain}
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-sumi/80 backdrop-blur-sm border border-washi/20 rounded-lg text-washi hover:bg-sumi transition-colors"
        aria-label="Back to main story"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="text-sm font-ui">Back to Main Story</span>
      </button>

      {/* Mini-story title badge */}
      <div className="fixed top-6 right-6 z-50 px-4 py-2 bg-beni/20 backdrop-blur-sm border border-beni/40 rounded-lg">
        <span className="text-sm font-ui text-beni">Mini Story 3: Weekday Bar</span>
      </div>

      {/* Progress indicators */}
      <ProgressBar currentSlide={currentSlide} totalSlides={totalSlides} />
      <SlideCounter currentSlide={currentSlide} totalSlides={totalSlides} />

      {/* Dynamic slide rendering */}
      {weekdayBarSlides.map((slide) => (
        <SlideContainer
          key={slide.id}
          slideNumber={slide.id}
          isActive={currentSlide === slide.id}
          background={slide.background || 'bg-gradient-to-b from-sumi to-sumi-light'}
        >
          <div className="h-full flex items-center justify-center px-12 md:px-24 pt-20">
            <div className="max-w-4xl w-full">
              {/* Content slide layout */}
              {slide.layout === 'content' && (
                <div className="text-washi">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 font-cormorant">{slide.title}</h2>
                  {slide.subtitle && (
                    <p className="text-xl md:text-2xl text-hai mb-8">{slide.subtitle}</p>
                  )}

                  <motion.ul
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-4 text-lg md:text-xl"
                  >
                    {slide.bullets.map((bullet, i) => (
                      <motion.li
                        key={i}
                        variants={itemVariants}
                        className="flex items-start"
                      >
                        <span className="text-beni mr-3 mt-1">•</span>
                        {typeof bullet === 'string' ? (
                          <span>{bullet}</span>
                        ) : (
                          <div>
                            <div className="font-semibold">{bullet.main}</div>
                            <ul className="mt-2 ml-4 space-y-1 text-base md:text-lg text-hai">
                              {bullet.sub.map((subBullet, j) => (
                                <li key={j} className="flex items-start">
                                  <span className="text-kincha mr-2">◦</span>
                                  <span>{subBullet}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              )}

              {/* Title slide layout */}
              {slide.layout === 'title' && (
                <div className="text-center text-washi">
                  <h1 className="text-5xl md:text-6xl font-bold font-cormorant">{slide.title}</h1>
                  {slide.subtitle && (
                    <p className="text-2xl md:text-3xl text-hai mt-6">{slide.subtitle}</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </SlideContainer>
      ))}
    </div>
  )
}

export default function WeekdayBarMiniStory() {
  return (
    <Suspense fallback={<div className="h-screen bg-sumi" />}>
      <WeekdayBarContent />
    </Suspense>
  )
}
