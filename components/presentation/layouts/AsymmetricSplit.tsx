'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export interface AsymmetricSplitProps {
  imageSrc: string
  imageAlt: string
  imagePosition: 'left' | 'right'
  splitRatio?: '60-40' | '70-30' | '50-50' | '40-60'  // Default '60-40'
  title: string
  subtitle?: string
  bullets?: Array<string | { main: string; sub: string[] }>
  accentColor?: string  // Tailwind color class for bullet points
  backgroundColor?: string  // For content side
  miniStoryLink?: string  // Link to mini-story deep dive
}

export function AsymmetricSplit({
  imageSrc,
  imageAlt,
  imagePosition,
  splitRatio = '60-40',
  title,
  subtitle,
  bullets,
  accentColor = 'text-kincha',
  backgroundColor = 'bg-sumi',
  miniStoryLink
}: AsymmetricSplitProps) {
  // Map splitRatio to CSS Grid template columns
  const gridTemplates = {
    '60-40': imagePosition === 'left' ? 'grid-cols-1 lg:grid-cols-[60fr_40fr]' : 'grid-cols-1 lg:grid-cols-[40fr_60fr]',
    '70-30': imagePosition === 'left' ? 'grid-cols-1 lg:grid-cols-[70fr_30fr]' : 'grid-cols-1 lg:grid-cols-[30fr_70fr]',
    '50-50': 'grid-cols-1 lg:grid-cols-2',
    '40-60': imagePosition === 'left' ? 'grid-cols-1 lg:grid-cols-[40fr_60fr]' : 'grid-cols-1 lg:grid-cols-[60fr_40fr]'
  }

  const contentSide = (
    <div className={`${backgroundColor} flex items-center justify-center p-8 md:p-12 lg:p-16`}>
      <div className="max-w-2xl w-full space-y-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="font-cormorant font-bold text-4xl md:text-5xl text-washi tracking-tight"
        >
          {title}
        </motion.h2>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut', delay: 0.1 }}
            className="text-xl md:text-2xl text-washi/80 font-eb-garamond"
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
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeOut',
                    delay: 0.2 + index * 0.1
                  }}
                  className="space-y-2"
                >
                  {isObject ? (
                    <>
                      <div className="flex items-start space-x-3">
                        <span className={`${accentColor} text-xl mt-1`}>•</span>
                        <span className="font-eb-garamond text-lg text-washi font-medium">
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
                              <span className="font-eb-garamond text-base text-washi/70">
                                {subBullet}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <div className="flex items-start space-x-3">
                      <span className={`${accentColor} text-xl mt-1`}>•</span>
                      <span className="font-eb-garamond text-lg text-washi">
                        {bullet}
                      </span>
                    </div>
                  )}
                </motion.li>
              )
            })}
          </motion.ul>
        )}

        {/* Mini-story CTA link */}
        {miniStoryLink && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut', delay: 0.3 + (bullets?.length || 0) * 0.1 }}
            className="pt-4"
          >
            <a
              href={`/presentation/${miniStoryLink}`}
              className="inline-flex items-center px-6 py-3 bg-kincha/20 border border-kincha/40 rounded-lg text-kincha hover:bg-kincha/30 transition-colors"
            >
              Explore the full playbook
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        )}
      </div>
    </div>
  )

  const imageSide = (
    <motion.div
      className="relative h-64 md:h-96 lg:h-full min-h-[400px] lg:min-h-screen overflow-hidden"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 60vw"
      />
    </motion.div>
  )

  return (
    <div className="relative min-h-screen flex items-center">
      <div className={`grid ${gridTemplates[splitRatio]} w-full`}>
        {imagePosition === 'left' ? (
          <>
            {imageSide}
            {contentSide}
          </>
        ) : (
          <>
            {contentSide}
            {imageSide}
          </>
        )}
      </div>
    </div>
  )
}
