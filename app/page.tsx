'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  SlideContainer,
  ProgressBar,
  SlideCounter,
  NavigationHints
} from '@/components/presentation'
import { Timeline, SystemDiagram, RevenueChart } from '@/components/presentation/visualizations'
import {
  FullBleedHero,
  AsymmetricSplit,
  CenteredMinimal,
  ImageBackground
} from '@/components/presentation/layouts'
import { Users, Calendar, TrendingUp, LayoutTemplate } from 'lucide-react'
import { useSlideNavigation, useTouchGestures } from '@/hooks'
import { slides, systemsData, timelineData, februaryEventsData, februaryRevenueTarget, metricsData } from '@/lib/slides/content'

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
      ease: [0.4, 0, 0.2, 1] as const  // Material Design easing
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


  // Render slide content based on layout type
  const renderSlideContent = (slide: typeof slides[0]) => {
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
            miniStoryLink={slide.miniStoryLink}
          />
        ) : null

      // Keep existing layout renderings for other types
      case 'systems':
      case 'timeline':
      case 'calendar':
      case 'metrics':
      case 'two-column':
      case 'content':
      case 'title':
      case 'cta':
      default:
        return null // Will be rendered in the legacy code path
    }
  }

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Navigation hints for first-time users */}
      <NavigationHints />

      {/* Progress indicators */}
      <ProgressBar currentSlide={currentSlide} totalSlides={totalSlides} />
      <SlideCounter currentSlide={currentSlide} totalSlides={totalSlides} />

      {/* Dynamic slide rendering from centralized content */}
      {slides.map((slide) => {
        const usesCustomLayout = ['fullBleed', 'asymmetric', 'imageBackground'].includes(slide.layout || '')
        const newLayoutContent = renderSlideContent(slide)

        return (
          <SlideContainer
            key={slide.id}
            slideNumber={slide.id}
            isActive={currentSlide === slide.id}
            background={usesCustomLayout ? 'bg-transparent' : (slide.background || 'bg-gradient-to-b from-sumi to-sumi-light')}
          >
            {newLayoutContent ? (
              // New custom layouts handle their own padding and backgrounds
              newLayoutContent
            ) : (
              // Traditional layouts use the standard padding container
              <div className="min-h-full flex items-center py-8 px-8 md:px-16 lg:px-24">
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
                      <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
                        {/* Left column - Preserve (Kincha/Gold) */}
                        <div className="bg-kincha/10 rounded-lg p-8 border-l-4 border-kincha">
                          <div className="inline-block bg-kincha text-sumi px-3 py-1 rounded text-sm font-bold uppercase tracking-wider mb-6">
                            What We Preserve
                          </div>
                          <h3 className="text-2xl font-semibold mb-6 text-washi">{slide.twoColumns.leftTitle}</h3>
                          <ul className="space-y-4">
                            {slide.twoColumns.leftItems.map((item, i) => (
                              <li key={i} className="flex items-start">
                                <span className="text-kincha mr-3 mt-1.5">•</span>
                                <span className="text-lg text-washi/90">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {/* Right column - Change (Beni/Red) */}
                        <div className="bg-beni/10 rounded-lg p-8 border-l-4 border-beni">
                          <div className="inline-block bg-beni text-washi px-3 py-1 rounded text-sm font-bold uppercase tracking-wider mb-6">
                            What Changes
                          </div>
                          <h3 className="text-2xl font-semibold mb-6 text-washi">{slide.twoColumns.rightTitle}</h3>
                          <ul className="space-y-4">
                            {slide.twoColumns.rightItems.map((item, i) => (
                              <li key={i} className="flex items-start">
                                <span className="text-beni mr-3 mt-1.5">•</span>
                                <span className="text-lg text-washi/90">{item}</span>
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
                      {/* Replaces SystemDiagram with custom card layout per spec */}
                      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {systemsData.map((system, i) => {
                          const Icon = {
                            users: Users,
                            calendar: Calendar,
                            trending: TrendingUp
                          }[system.icon] as any

                          return (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.2, duration: 0.4 }}
                              viewport={{ once: true }}
                              className="bg-sumi/50 backdrop-blur-md border border-washi/10 rounded-lg p-6 flex flex-col h-full hover:border-kincha/50 transition-colors duration-300"
                            >
                              <div className="mb-4 text-kincha">
                                <Icon className="w-8 h-8" />
                              </div>
                              <h3 className="text-xl font-bold mb-2 text-kincha">{system.title}</h3>
                              <p className="text-hai text-lg leading-relaxed">{system.description}</p>
                            </motion.div>
                          )
                        })}
                      </div>
                    </div>
                  )}

                  {/* Timeline slide layout */}
                  {slide.layout === 'timeline' && (
                    <div className="text-washi">
                      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center font-cormorant">{slide.title}</h2>
                      {slide.subtitle && (
                        <p className="text-xl md:text-2xl text-hai mb-12 text-center">{slide.subtitle}</p>
                      )}
                      {/* Visual Timeline Layout */}
                      <div className="relative max-w-7xl mx-auto pt-8">
                        {/* Connector Line */}
                        <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-hai/30 to-transparent dashed-line hidden md:block" />

                        <div className="grid md:grid-cols-3 gap-6">
                          {timelineData.map((week, i) => {
                            // Map specific icons to timeline weeks
                            const WeekIcon = i === 0 ? LayoutTemplate : (i === 1 ? Users : TrendingUp);

                            return (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.15, duration: 0.4 }}
                                viewport={{ once: true }}
                                className="relative bg-gradient-to-b from-charcoal to-sumi border-l-4 border-kincha p-6 rounded-r-lg shadow-lg hover:shadow-kincha/5 transition-shadow duration-300 h-full"
                              >
                                {/* Week Badge */}
                                <div className="absolute -top-4 left-6 bg-kincha text-sumi text-xs font-bold uppercase px-3 py-1 rounded-full">
                                  {week.title}
                                </div>

                                {/* Icon */}
                                <div className="mb-4 mt-2 text-kincha/80">
                                  <WeekIcon className="w-6 h-6" />
                                </div>

                                <h3 className="text-lg font-bold mb-3 text-washi">{week.title === 'Week 4' ? 'Review & Optimize' : (i === 0 ? 'Setup & Creation' : 'Outreach & Activation')}</h3>
                                <ul className="space-y-2">
                                  {week.items.map((item, j) => (
                                    <li key={j} className="text-sm text-hai leading-snug flex items-start">
                                      <span className="text-kincha/50 mr-2 mt-0.5">•</span>
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </motion.div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Calendar layout (February 2026) */}
                  {slide.layout === 'calendar' && (
                    <div className="text-washi">
                      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center font-cormorant">{slide.title}</h2>
                      {slide.subtitle && (
                        <p className="text-xl md:text-2xl text-hai mb-8 text-center">{slide.subtitle}</p>
                      )}
                      {/* Calendar Image Implementation */}
                      <div className="max-w-5xl mx-auto relative h-[600px] w-full">
                        <div className="relative w-full h-full rounded-lg overflow-hidden border border-washi/10 shadow-2xl">
                          <Image
                            src="/images/february-2026-calendar.png"
                            alt="February 2026 Programming Calendar"
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Metrics layout (How We Track Success) */}
                  {slide.layout === 'metrics' && (
                    <div className="text-washi">
                      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center font-cormorant">{slide.title}</h2>
                      {slide.subtitle && (
                        <p className="text-xl md:text-2xl text-hai mb-8 text-center">{slide.subtitle}</p>
                      )}

                      {/* Tracking cadence intro */}
                      <div className="max-w-2xl mx-auto mb-12 space-y-3">
                        {slide.bullets.map((bullet, i) => (
                          <div key={i} className="flex items-center justify-center">
                            <span className="text-beni mr-3 text-xl">•</span>
                            <span className="text-lg md:text-xl font-medium">{typeof bullet === 'string' ? bullet : bullet.main}</span>
                          </div>
                        ))}
                      </div>

                      {/* Three-column metrics grid */}
                      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {metricsData.map((category, i) => (
                          <div key={i} className="bg-sumi/40 backdrop-blur-sm rounded-lg p-8 border border-washi/10 h-full flex flex-col hover:border-kincha/30 transition-colors">
                            <h3 className="text-xl font-bold mb-6 text-kincha border-b border-washi/5 pb-2">{category.system}</h3>
                            <ul className="space-y-3 flex-grow">
                              {category.metrics.map((metric, j) => (
                                <li key={j} className="flex items-start text-base">
                                  <span className="text-hai mr-2 mt-1.5">•</span>
                                  <span className="text-washi/90">{metric}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
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
                            group px-8 py-5 rounded-lg transition-all duration-200 min-w-[280px] text-center
                            ${cta.primary
                                  ? 'bg-beni text-washi hover:bg-beni/90 hover:-translate-y-1 shadow-lg shadow-beni/20'
                                  : 'bg-transparent border-2 border-kincha text-kincha hover:bg-kincha/10 hover:-translate-y-1'
                                }
                          `}
                            >
                              <div className="font-bold text-xl mb-1 font-cormorant">{cta.label}</div>
                              <div className={`text-sm tracking-wide ${cta.primary ? 'text-washi/90' : 'text-kincha/80'}`}>
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
            )}
          </SlideContainer>
        )
      })}

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
