'use client'

import React, { Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import {
  SlideContainer,
  ProgressBar,
  SlideCounter
} from '@/components/presentation'
import {
  FullBleedHero,
  AsymmetricSplit,
  ImageBackground,
  CenteredMinimal
} from '@/components/presentation/layouts'
import { useSlideNavigation, useTouchGestures } from '@/hooks'
import { socialMediaSlides } from '@/lib/slides/social-media'
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

function SocialMediaContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const returnSlide = searchParams.get('returnSlide') || '4' // Default to slide 4 (Social Media slide in main story)
  const totalSlides = socialMediaSlides.length

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

  const handleBackToMainStory = () => {
    router.push(`/?slide=${returnSlide}`)
  }

  const renderSlideContent = (slide: typeof socialMediaSlides[0]) => {
    switch (slide.layout) {
      case 'fullBleed':
        return slide.imageSrc ? (
          <FullBleedHero
            imageSrc={slide.imageSrc}
            imageAlt={slide.imageAlt || 'Presentation image'}
            title={slide.title}
            subtitle={slide.subtitle}
            overlayOpacity={slide.overlayOpacity}
            textPosition={slide.textPosition}
          />
        ) : null

      case 'asymmetric':
        return slide.imageSrc ? (
          <AsymmetricSplit
            imageSrc={slide.imageSrc}
            imageAlt={slide.imageAlt || 'Feature image'}
            imagePosition={slide.imagePosition || 'left'}
            splitRatio={slide.splitRatio || '60-40'}
            title={slide.title}
            subtitle={slide.subtitle}
            bullets={slide.bullets}
          />
        ) : null

      case 'imageBackground':
        return slide.imageSrc ? (
          <ImageBackground
            imageSrc={slide.imageSrc}
            imageAlt={slide.imageAlt || 'Background image'}
            title={slide.title}
            subtitle={slide.subtitle}
            bullets={slide.bullets}
            overlayType={slide.overlayType}
            overlayIntensity={slide.overlayIntensity}
            contentPosition={slide.contentPosition}
          />
        ) : null

      case 'centered':
        // Special handling for Slide 3 (Posting Rhythm) - display as stats
        if (slide.id === 3) {
          return (
            <div className="h-full min-h-full flex items-center justify-center px-8 py-16">
              <div className="max-w-4xl w-full text-center text-washi">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-cormorant">{slide.title}</h2>
                {slide.subtitle && (
                  <p className="text-xl md:text-2xl text-hai mb-16">{slide.subtitle}</p>
                )}

                {/* Stats display */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-12">
                  <div>
                    <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-kincha mb-4">4-6</div>
                    <div className="text-xl md:text-2xl text-hai">posts/week</div>
                  </div>
                  <div>
                    <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-kincha mb-4">Daily</div>
                    <div className="text-xl md:text-2xl text-hai">Stories</div>
                  </div>
                  <div>
                    <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-kincha mb-4">2-week</div>
                    <div className="text-xl md:text-2xl text-hai">event cycle</div>
                  </div>
                </div>
              </div>
            </div>
          )
        }
        // Default centered layout
        return (
          <CenteredMinimal
            headline={slide.title}
            subtext={slide.subtitle}
            backgroundColor={slide.background}
          />
        )

      case 'content':
      default:
        // Keep existing content/bullet rendering
        return (
          <div className="h-full min-h-full flex items-center justify-center px-8 py-16">
            <div className="max-w-4xl w-full">
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
                          <div className="text-kincha font-medium">{bullet.main}</div>
                          <ul className="mt-2 ml-4 space-y-1 text-base md:text-lg text-hai">
                            {bullet.sub.map((subBullet, j) => (
                              <li key={j} className="flex items-start">
                                <span className="text-beni mr-2">◦</span>
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
            </div>
          </div>
        )
    }
  }

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Back button */}
      <button
        onClick={handleBackToMainStory}
        className="fixed top-8 left-8 z-50 flex items-center gap-2 px-4 py-2 bg-sumi/80 border border-washi/20 rounded-lg text-washi hover:bg-sumi hover:border-washi/40 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="text-sm">Back to Main Story</span>
      </button>

      {/* Mini-story title badge */}
      <div className="fixed top-8 right-8 z-50 px-4 py-2 bg-beni/20 border border-beni/40 rounded-lg">
        <span className="text-sm text-washi font-medium">Mini Story 1: Social Media Engine</span>
      </div>

      {/* Progress indicators */}
      <ProgressBar currentSlide={currentSlide} totalSlides={totalSlides} />
      <SlideCounter currentSlide={currentSlide} totalSlides={totalSlides} />

      {/* Dynamic slide rendering */}
      {socialMediaSlides.map((slide) => (
        <SlideContainer
          key={slide.id}
          slideNumber={slide.id}
          isActive={currentSlide === slide.id}
          background={slide.background || 'bg-gradient-to-b from-sumi to-sumi-light'}
        >
          {renderSlideContent(slide)}
        </SlideContainer>
      ))}
    </div>
  )
}

export default function SocialMediaMiniStory() {
  return (
    <Suspense fallback={<div className="h-screen bg-sumi" />}>
      <SocialMediaContent />
    </Suspense>
  )
}
