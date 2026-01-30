'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'

export interface ImageBackgroundProps {
  imageSrc: string
  imageAlt: string
  title: string
  subtitle?: string
  bullets?: Array<string | { main: string; sub: string[] }>
  overlayType?: 'gradient-bottom' | 'gradient-left' | 'full-dark' | 'blur-bottom'
  overlayIntensity?: 'light' | 'medium' | 'heavy'  // 30%, 50%, 70% opacity
  contentPosition?: 'center' | 'top' | 'left' | 'right' | 'bottom'
}

export function ImageBackground({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  bullets,
  overlayType = 'gradient-bottom',
  overlayIntensity = 'medium',
  contentPosition = 'center'
}: ImageBackgroundProps) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  // Map overlayType to gradient classes
  const overlayClasses = {
    'gradient-bottom': 'bg-gradient-to-t from-black/70 via-black/30 to-transparent',
    'gradient-left': 'bg-gradient-to-r from-black/60 via-black/30 to-transparent',
    'full-dark': 'bg-black/50',
    'blur-bottom': 'bg-gradient-to-t from-black/70 via-black/40 to-transparent backdrop-blur-sm'
  }

  // Map overlayIntensity to opacity values
  const intensityOpacity = {
    'light': 0.3,
    'medium': 0.5,
    'heavy': 0.7
  }

  // Map contentPosition to flexbox positioning
  const positionClasses = {
    'center': 'items-center justify-center text-center',
    'top': 'items-start justify-center text-center pt-16 md:pt-24',
    'left': 'items-center justify-start text-left pl-8 md:pl-16 lg:pl-24',
    'right': 'items-center justify-end text-right pr-8 md:pr-16 lg:pr-24',
    'bottom': 'items-end justify-center text-center pb-16 md:pb-24'
  }

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-sumi">
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        onLoad={() => setImageLoaded(true)}
        className={`object-cover transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        sizes="100vw"
      />

      {/* Overlay */}
      <div
        className={`absolute inset-0 ${overlayClasses[overlayType]}`}
        style={{
          opacity: intensityOpacity[overlayIntensity]
        }}
      />

      {/* Content */}
      <div className={`absolute inset-0 flex flex-col ${positionClasses[contentPosition]} p-8 md:p-16`}>
        <div className="max-w-4xl space-y-6 bg-sumi/40 backdrop-blur-md rounded-2xl p-8 md:p-10 border border-washi/10">
          {/* Title */}
          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.3, ease: 'easeOut' }}
            className="text-overlay font-cormorant font-bold text-4xl md:text-5xl lg:text-6xl text-washi tracking-tight"
          >
            {title}
          </motion.h2>

          {/* Subtitle */}
          {subtitle && (
            <motion.p
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.3, ease: 'easeOut', delay: 0.1 }}
              className="text-overlay text-xl md:text-2xl text-washi/90 font-eb-garamond"
            >
              {subtitle}
            </motion.p>
          )}

          {/* Bullets */}
          {bullets && bullets.length > 0 && (
            <motion.ul
              className="space-y-4"
              initial="hidden"
              animate="visible"
            >
              {bullets.map((bullet, index) => {
                const isObject = typeof bullet === 'object'
                return (
                  <motion.li
                    key={index}
                    initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={prefersReducedMotion ? { duration: 0 } : {
                      duration: 0.3,
                      ease: 'easeOut',
                      delay: 0.2 + index * 0.1
                    }}
                    className="space-y-2"
                  >
                    {isObject ? (
                      <>
                        <div className="flex items-start space-x-3">
                          <span className="text-kincha text-xl mt-1">•</span>
                          <span className="text-overlay font-eb-garamond text-lg text-washi font-medium">
                            {bullet.main}
                          </span>
                        </div>
                        {bullet.sub && bullet.sub.length > 0 && (
                          <ul className="ml-8 space-y-2">
                            {bullet.sub.map((subBullet, subIndex) => (
                              <li
                                key={subIndex}
                                className="flex items-start space-x-3"
                              >
                                <span className="text-hai text-sm mt-1">–</span>
                                <span className="text-overlay font-eb-garamond text-base text-washi/80">
                                  {subBullet}
                                </span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <div className="flex items-start space-x-3">
                        <span className="text-kincha text-xl mt-1">•</span>
                        <span className="text-overlay font-eb-garamond text-lg text-washi">
                          {bullet}
                        </span>
                      </div>
                    )}
                  </motion.li>
                )
              })}
            </motion.ul>
          )}
        </div>
      </div>
    </div>
  )
}
