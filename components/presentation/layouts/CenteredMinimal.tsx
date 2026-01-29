'use client'

import React from 'react'
import { motion } from 'framer-motion'

export interface CenteredMinimalProps {
  headline: string
  subtext?: string
  accentText?: string  // Small text above headline (like "The Opportunity")
  backgroundColor?: string  // Tailwind class
  textColor?: 'light' | 'dark'  // Determines text color scheme
}

export function CenteredMinimal({
  headline,
  subtext,
  accentText,
  backgroundColor = 'bg-deepIndigo',
  textColor = 'light'
}: CenteredMinimalProps) {
  // Text color classes based on theme
  const textClasses = textColor === 'light'
    ? {
        accent: 'text-softGold',
        headline: 'text-washi',
        subtext: 'text-washi/80'
      }
    : {
        accent: 'text-coral',
        headline: 'text-charcoal',
        subtext: 'text-charcoal/70'
      }

  return (
    <div className={`min-h-screen w-full flex items-center justify-center ${backgroundColor} p-8 md:p-16`}>
      <div className="max-w-4xl w-full flex flex-col items-center justify-center text-center space-y-6">
        {/* Accent Text */}
        {accentText && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className={`uppercase tracking-widest text-sm md:text-base font-inter font-medium ${textClasses.accent}`}
          >
            {accentText}
          </motion.div>
        )}

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut', delay: 0.1 }}
          className={`font-cormorant font-bold text-4xl md:text-5xl lg:text-6xl ${textClasses.headline} tracking-tight leading-tight`}
          style={{
            maxWidth: '90%'
          }}
        >
          {headline}
        </motion.h1>

        {/* Subtext */}
        {subtext && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut', delay: 0.2 }}
            className={`font-eb-garamond text-xl md:text-2xl ${textClasses.subtext} leading-relaxed max-w-3xl`}
          >
            {subtext}
          </motion.p>
        )}
      </div>
    </div>
  )
}
