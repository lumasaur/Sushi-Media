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
  ImageBackground,
  BentoGrid
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





      case 'bento':
        return (
          <div className="w-full min-h-full flex flex-col justify-center py-8 px-8 md:px-16 lg:px-24">
            <div className="max-w-[1400px] w-full mx-auto">
              <div className="text-washi mb-12 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 font-cormorant">{slide.title}</h2>
                {slide.subtitle && (
                  <p className="text-xl md:text-2xl text-hai">{slide.subtitle}</p>
                )}
              </div>
              {slide.bentoItems && (
                <BentoGrid
                  items={slide.bentoItems}
                  columns={slide.bentoColumns}
                  gap={slide.bentoGap}
                />
              )}
            </div>
          </div>
        )

      case 'systems':
        return (
          <div className="w-full min-h-full flex flex-col justify-center py-8 px-8 md:px-16 lg:px-24">
            <div className="max-w-[1400px] w-full mx-auto text-washi">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center font-cormorant">{slide.title}</h2>
              {slide.subtitle && (
                <p className="text-xl md:text-2xl text-hai mb-12 text-center">{slide.subtitle}</p>
              )}
              <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {slide.bullets.map((bullet, i) => {
                  const Icon = [Users, Calendar, TrendingUp][i]
                  const isObject = typeof bullet === 'object'
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.15, duration: 0.4 }}
                      viewport={{ once: true }}
                      className="bg-sumi/60 backdrop-blur-md border border-kincha/30 rounded-xl p-8 flex flex-col h-full hover:border-kincha/60 hover:bg-sumi/70 transition-all duration-300"
                    >
                      <div className="mb-6 text-kincha">
                        <Icon className="w-10 h-10" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-kincha font-cormorant">
                        {isObject ? bullet.main : bullet}
                      </h3>
                      {isObject && bullet.sub && (
                        <ul className="space-y-3 flex-grow">
                          {bullet.sub.map((subBullet, j) => {
                            // Parse and bold the header (text before colon)
                            const parts = subBullet.split(':')
                            const header = parts[0]
                            const content = parts.slice(1).join(':')

                            return (
                              <li key={j} className="flex items-start">
                                <span className="text-kincha/60 mr-3 mt-1">•</span>
                                <span className="text-washi/90 text-base leading-relaxed">
                                  {content ? (
                                    <>
                                      <strong className="font-semibold text-washi">{header}:</strong>
                                      {content}
                                    </>
                                  ) : (
                                    subBullet
                                  )}
                                </span>
                              </li>
                            )
                          })}
                        </ul>
                      )}
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        )

      case 'two-column':
        return slide.twoColumns ? (
          <div className="w-full min-h-full flex flex-col justify-center py-8 px-8 md:px-16 lg:px-24">
            <div className="max-w-[1400px] w-full mx-auto text-washi">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center font-cormorant">{slide.title}</h2>
              {slide.subtitle && (
                <p className="text-xl md:text-2xl text-hai mb-12 text-center">{slide.subtitle}</p>
              )}
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
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
          </div>
        ) : null

      case 'timeline':
        return (
          <div className="w-full min-h-full flex flex-col justify-center py-8 px-8 md:px-16 lg:px-24">
            <div className="max-w-[1400px] w-full mx-auto text-washi">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center font-cormorant">{slide.title}</h2>
              {slide.subtitle && (
                <p className="text-xl md:text-2xl text-hai mb-12 text-center">{slide.subtitle}</p>
              )}
              <div className="relative max-w-7xl mx-auto pt-8">
                <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-hai/30 to-transparent dashed-line hidden md:block" />
                <div className="grid md:grid-cols-3 gap-6">
                  {slide.bullets.map((bullet: any, i: number) => {
                    const WeekIcon = i === 0 ? LayoutTemplate : (i === 1 ? Users : TrendingUp);
                    const phaseTitle = typeof bullet === 'string' ? bullet : bullet.main.split(':')[0];
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.15, duration: 0.4 }}
                        viewport={{ once: true }}
                        className="relative bg-gradient-to-b from-charcoal to-sumi border-l-4 border-kincha p-6 rounded-r-lg shadow-lg hover:shadow-kincha/5 transition-shadow duration-300 min-h-[500px]"
                      >
                        <div className="absolute -top-4 left-6 bg-kincha text-sumi text-xs font-bold uppercase px-3 py-1 rounded-full">
                          {phaseTitle}
                        </div>
                        <div className="mb-4 mt-2 text-kincha/80">
                          <WeekIcon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-washi">{typeof bullet === 'string' ? bullet : bullet.main}</h3>
                        <ul className="space-y-3">
                          {typeof bullet !== 'string' && bullet.sub && bullet.sub.map((item: string, j: number) => {
                            // Parse and bold the header (text before colon)
                            const parts = item.split(':')
                            const header = parts[0]
                            const content = parts.slice(1).join(':')

                            return (
                              <li key={j} className="flex items-start leading-relaxed">
                                <span className="text-kincha/50 mr-2 mt-1">•</span>
                                <span className="text-base text-hai">
                                  {content ? (
                                    <>
                                      <strong className="font-semibold text-washi">{header}:</strong>
                                      {content}
                                    </>
                                  ) : (
                                    item
                                  )}
                                </span>
                              </li>
                            )
                          })}
                        </ul>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        )

      case 'calendar':
        return (
          <div className="w-full min-h-full flex flex-col justify-center py-8 px-8 md:px-16 lg:px-24">
            <div className="max-w-[1400px] w-full mx-auto text-washi">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center font-cormorant">{slide.title}</h2>
              {slide.subtitle && (
                <p className="text-xl md:text-2xl text-hai mb-12 text-center">{slide.subtitle}</p>
              )}

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative h-[500px] w-full rounded-lg overflow-hidden">
                  <Image
                    src="/images/february-2026-calendar.png"
                    alt="February 2026 Programming Calendar"
                    fill
                    className="object-contain object-left"
                  />
                </div>

                <div className="bg-sumi/40 backdrop-blur-sm p-8 rounded-xl border border-washi/10">
                  <h3 className="text-2xl font-bold mb-6 text-kincha font-cormorant">Strategic Approach</h3>
                  <ul className="space-y-4">
                    {slide.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-kincha mr-3 mt-1 text-lg">•</span>
                        <span className="text-washi/90 text-lg leading-relaxed">{typeof bullet === 'string' ? bullet : bullet.main}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )

      case 'metrics':
        return (
          <div className="w-full min-h-full flex flex-col justify-center py-8 px-8 md:px-16 lg:px-24">
            <div className="max-w-[1400px] w-full mx-auto text-washi">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center font-cormorant">{slide.title}</h2>
              {slide.subtitle && (
                <p className="text-xl md:text-2xl text-hai mb-8 text-center">{slide.subtitle}</p>
              )}
              {slide.meetingCadence && (
                <div className="flex justify-center gap-8 mb-12">
                  <div className="text-center bg-kincha/10 px-6 py-3 rounded-full border border-kincha/20">
                    <span className="block text-xs uppercase tracking-wider text-kincha mb-1">Weekly</span>
                    <span className="font-bold text-washi">{slide.meetingCadence.weekly}*</span>
                  </div>
                  <div className="text-center bg-beni/10 px-6 py-3 rounded-full border border-beni/20">
                    <span className="block text-xs uppercase tracking-wider text-beni mb-1">Monthly</span>
                    <span className="font-bold text-washi">{slide.meetingCadence.monthly}*</span>
                  </div>
                </div>
              )}

              {/* Toast Analytics Box - New Section */}
              {slide.analyticsBox && (
                <div className="grid md:grid-cols-2 gap-8 items-center mb-12 max-w-6xl mx-auto">
                  {/* Left: Content Box */}
                  <div className="bg-sumi/60 backdrop-blur-md border border-kincha/30 rounded-xl p-8">
                    <h3 className="text-2xl font-bold mb-6 text-kincha font-cormorant">
                      {slide.analyticsBox.title}
                    </h3>
                    <ul className="space-y-4">
                      {slide.analyticsBox.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-kincha mr-3 mt-1">•</span>
                          <span className="text-washi/90 text-base leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right: Toast Dashboard Image - CROP WHITE PADDING */}
                  <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
                    <Image
                      src={slide.analyticsBox.image}
                      alt="Toast POS Analytics Dashboard"
                      fill
                      className="object-cover scale-125"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              )}

              {/* Footnote */}
              {slide.meetingCadence?.footnote && (
                <p className="text-center text-sm text-hai/70 mt-8">
                  {slide.meetingCadence.footnote}
                </p>
              )}
            </div>
          </div>
        )

      case 'cta':
      case 'centered':
        return (
          <div className="w-full min-h-full flex flex-col justify-center py-8 px-8 md:px-16 lg:px-24">
            <div className="max-w-[1400px] w-full mx-auto text-washi">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center font-cormorant">{slide.title}</h2>
              {slide.subtitle && (
                <p className="text-xl md:text-2xl text-hai mb-8 text-center">{slide.subtitle}</p>
              )}
              {slide.bullets.length > 0 && (
                <ul className="space-y-3 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
                  {slide.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-beni mr-3 mt-1">•</span>
                      <span>{typeof bullet === 'string' ? bullet : bullet.main}</span>
                    </li>
                  ))}
                </ul>
              )}
              {slide.ctas && (
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-12 flex-wrap">
                  {slide.ctas.map((cta, i) => (
                    <a
                      key={i}
                      href={cta.href}
                      className={`
                            group px-8 py-5 rounded-lg transition-all duration-200 min-w-[280px] text-center flex flex-col items-center gap-3
                            ${cta.primary
                          ? 'bg-beni text-washi hover:bg-beni/90 hover:-translate-y-1 shadow-lg shadow-beni/20'
                          : 'bg-transparent border-2 border-kincha text-kincha hover:bg-kincha/10 hover:-translate-y-1'
                        }
                          `}
                    >
                      {/* Icon */}
                      {cta.icon && (
                        <div className="text-4xl">
                          {cta.icon.startsWith('/') ? (
                            <Image src={cta.icon} alt="" width={48} height={48} />
                          ) : (
                            <span>{cta.icon}</span>  // For emoji
                          )}
                        </div>
                      )}

                      <div>
                        <div className="font-bold text-xl mb-1 font-cormorant">{cta.label}</div>
                        <div className={`text-sm tracking-wide ${cta.primary ? 'text-washi/90' : 'text-kincha/80'}`}>
                          {cta.description}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        )

      default:
        return null
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
        const usesCustomLayout = ['fullBleed', 'asymmetric', 'imageBackground', 'bento', 'centered'].includes(slide.layout || '')
        const newLayoutContent = renderSlideContent(slide)

        return (
          <SlideContainer
            key={slide.id}
            slideNumber={slide.id}
            isActive={currentSlide === slide.id}
            background={usesCustomLayout ? 'bg-transparent' : (slide.background || 'bg-gradient-to-b from-sumi to-sumi-light')}
          >
            {newLayoutContent}
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
