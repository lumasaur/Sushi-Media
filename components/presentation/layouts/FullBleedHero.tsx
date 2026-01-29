'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export interface FullBleedHeroProps {
  imageSrc: string
  imageAlt: string
  title: string
  subtitle?: string
  overlayOpacity?: number  // 0.3 to 0.7, default 0.4
  textPosition?: 'center' | 'bottom-left' | 'bottom-center'
  titleSize?: 'xl' | '2xl' | '3xl'  // Maps to text-5xl, text-6xl, text-7xl
}

export function FullBleedHero({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  overlayOpacity = 0.4,
  textPosition = 'center',
  titleSize = '2xl'
}: FullBleedHeroProps) {
  const [imageLoaded, setImageLoaded] = useState(false)

  // Map titleSize prop to Tailwind classes
  const titleSizeClasses = {
    'xl': 'text-5xl md:text-6xl',
    '2xl': 'text-6xl md:text-7xl',
    '3xl': 'text-7xl md:text-8xl'
  }

  // Map textPosition to flexbox positioning classes
  const textPositionClasses = {
    'center': 'items-center justify-center text-center',
    'bottom-left': 'items-end justify-start text-left pb-16 pl-8 md:pb-24 md:pl-16',
    'bottom-center': 'items-end justify-center text-center pb-16 md:pb-24'
  }

  return (
    <div className="relative w-full h-full min-h-screen overflow-hidden bg-sumi">
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        onLoad={() => setImageLoaded(true)}
        className={`object-cover transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        sizes="100vw"
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"
        style={{
          opacity: overlayOpacity
        }}
      />

      {/* Text Content */}
      <div className={`absolute inset-0 flex flex-col ${textPositionClasses[textPosition]} p-8 md:p-16`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-5xl"
        >
          <h1
            className={`hero-title font-cormorant font-bold ${titleSizeClasses[titleSize]} text-washi tracking-tight mb-4`}
          >
            {title}
          </h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              className="hero-subtitle text-2xl md:text-3xl text-washi/90 font-eb-garamond font-light"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>
    </div>
  )
}
