'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  SlideContainer,
  ProgressBar,
  SlideCounter,
  NavigationHints
} from '@/components/presentation'
import { Timeline, SystemDiagram, RevenueChart } from '@/components/presentation/visualizations'
import { useSlideNavigation, useTouchGestures } from '@/hooks'
import { slides, systemsData, timelineData } from '@/lib/slides/content'

// Animation variants for staggered bullet entry
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,   // 100ms delay between bullets (faster, per DESIGN-SYSTEM.md)
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
      duration: 0.3,  // 300ms (faster, per DESIGN-SYSTEM.md)
      ease: [0.4, 0, 0.2, 1]  // Material Design easing
    }
  }
}

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
                <div className="text-center text-washi">
                  <h1 className="text-5xl md:text-6xl font-bold font-cormorant">{slide.title}</h1>
                </div>
              )}

              {/* Content slide layout */}
              {slide.layout === 'content' && (
                <div className="text-washi">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 font-cormorant">{slide.title}</h2>
                  {slide.subtitle && (
                    <p className="text-xl md:text-2xl text-hai mb-8">{slide.subtitle}</p>
                  )}

                  {/* Show revenue chart on Empty Hours slide (id 1) */}
                  {slide.id === 1 && (
                    <div className="mb-10">
                      <RevenueChart />
                    </div>
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
                            <div>{bullet.main}</div>
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

                  {/* Mini-story deep dive CTA */}
                  {slide.miniStoryLink && (
                    <div className="mt-8 text-center">
                      <a
                        href={`/presentation/${slide.miniStoryLink}?returnSlide=${slide.id}`}
                        className="inline-flex items-center px-6 py-3 bg-kincha/20 border border-kincha/40 rounded-lg text-kincha hover:bg-kincha/30 transition-colors"
                      >
                        Explore the full playbook
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              )}

              {/* Two-column layout (What Changes slide) */}
              {slide.layout === 'two-column' && slide.twoColumns && (
                <div className="text-washi">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center font-cormorant">{slide.title}</h2>
                  {slide.subtitle && (
                    <p className="text-xl md:text-2xl text-hai mb-12 text-center">{slide.subtitle}</p>
                  )}
                  <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    {/* Left column */}
                    <div className="bg-washi/5 rounded-lg p-6 border border-washi/10">
                      <h3 className="text-2xl font-semibold mb-4 text-kincha">{slide.twoColumns.leftTitle}</h3>
                      <ul className="space-y-3">
                        {slide.twoColumns.leftItems.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-kincha mr-3 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Right column */}
                    <div className="bg-washi/5 rounded-lg p-6 border border-washi/10">
                      <h3 className="text-2xl font-semibold mb-4 text-beni">{slide.twoColumns.rightTitle}</h3>
                      <ul className="space-y-3">
                        {slide.twoColumns.rightItems.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-beni mr-3 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Systems diagram layout */}
              {slide.layout === 'systems' && (
                <div className="text-washi">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center font-cormorant">{slide.title}</h2>
                  {slide.subtitle && (
                    <p className="text-xl md:text-2xl text-hai mb-12 text-center">{slide.subtitle}</p>
                  )}
                  <SystemDiagram systems={systemsData} />
                </div>
              )}

              {/* Timeline slide layout */}
              {slide.layout === 'timeline' && (
                <div className="text-washi">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center font-cormorant">{slide.title}</h2>
                  {slide.subtitle && (
                    <p className="text-xl md:text-2xl text-hai mb-12 text-center">{slide.subtitle}</p>
                  )}
                  <div className="max-w-3xl mx-auto">
                    <Timeline weeks={timelineData} />
                  </div>
                </div>
              )}

              {/* CTA slide layout */}
              {slide.layout === 'cta' && (
                <div className="text-washi">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center font-cormorant">{slide.title}</h2>
                  {slide.subtitle && (
                    <p className="text-xl md:text-2xl text-hai mb-8 text-center">{slide.subtitle}</p>
                  )}

                  {/* Summary bullets */}
                  <ul className="space-y-3 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
                    {slide.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-beni mr-3 mt-1">•</span>
                        <span>{typeof bullet === 'string' ? bullet : bullet.main}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA buttons */}
                  {slide.ctas && (
                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-12">
                      {slide.ctas.map((cta, i) => (
                        <a
                          key={i}
                          href={cta.href}
                          className={`
                            group px-8 py-4 rounded-lg transition-all duration-200 min-w-[280px] text-center
                            ${cta.primary
                              ? 'bg-beni text-washi hover:bg-beni/80 hover:scale-105'
                              : 'border border-washi/30 text-washi hover:bg-gray-100 hover:scale-105'
                            }
                          `}
                        >
                          <div className="font-semibold text-lg mb-1">{cta.label}</div>
                          <div className={`text-sm ${cta.primary ? 'text-washi/80' : 'text-hai'}`}>
                            {cta.description}
                          </div>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </SlideContainer>
      ))}

      {/* Archive link */}
      <a
        href="/archive"
        className="fixed bottom-8 left-8 z-50 text-sm text-hai hover:text-beni underline"
      >
        View Archive
      </a>
    </div>
  )
}
