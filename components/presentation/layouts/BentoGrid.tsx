'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export interface BentoItem {
  type: 'image' | 'text' | 'stat' | 'quote'
  // For image type
  imageSrc?: string
  imageAlt?: string
  // For text type
  title?: string
  description?: string
  // For stat type
  value?: string
  label?: string
  // For quote type
  quote?: string
  attribution?: string
  // Common
  size?: 'small' | 'medium' | 'large'  // Affects grid span
  accentColor?: string
}

export interface BentoGridProps {
  items: BentoItem[]
  columns?: 2 | 3 | 4  // Default 3
  gap?: 'tight' | 'normal' | 'loose'  // 8px, 16px, 24px
  backgroundColor?: string
}

export function BentoGrid({
  items,
  columns = 3,
  gap = 'normal',
  backgroundColor = 'bg-deepIndigo'
}: BentoGridProps) {
  // Map gap to Tailwind classes
  const gapClasses = {
    'tight': 'gap-2',
    'normal': 'gap-4',
    'loose': 'gap-6'
  }

  // Map columns to grid classes
  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  }

  // Map size to grid span classes
  const getSizeClasses = (size: BentoItem['size'] = 'small') => {
    const sizeMap = {
      'small': 'col-span-1 row-span-1',
      'medium': 'col-span-1 md:col-span-2 row-span-1',
      'large': 'col-span-1 md:col-span-2 row-span-2'
    }
    return sizeMap[size]
  }

  const renderItem = (item: BentoItem, index: number) => {
    const baseClasses = `${getSizeClasses(item.size)} rounded-lg overflow-hidden bg-sumi/50 backdrop-blur-sm`

    switch (item.type) {
      case 'image':
        return (
          <motion.div
            key={index}
            className={`${baseClasses} relative h-64 md:h-80 group cursor-pointer`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: 'easeOut',
              delay: index * 0.05
            }}
            whileHover={{ scale: 1.02 }}
          >
            {item.imageSrc && (
              <Image
                src={item.imageSrc}
                alt={item.imageAlt || ''}
                fill
                className="object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            )}
          </motion.div>
        )

      case 'text':
        return (
          <motion.div
            key={index}
            className={`${baseClasses} p-6 flex flex-col justify-center space-y-3 border border-washi/10`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              ease: 'easeOut',
              delay: index * 0.05
            }}
          >
            {item.title && (
              <h3 className="font-cormorant font-bold text-2xl md:text-3xl text-washi">
                {item.title}
              </h3>
            )}
            {item.description && (
              <p className="font-eb-garamond text-base md:text-lg text-washi/80">
                {item.description}
              </p>
            )}
          </motion.div>
        )

      case 'stat':
        return (
          <motion.div
            key={index}
            className={`${baseClasses} p-6 flex flex-col justify-center items-center text-center space-y-2 border border-washi/10`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: 'easeOut',
              delay: index * 0.05
            }}
          >
            {item.value && (
              <div
                className={`font-cormorant font-bold text-5xl md:text-6xl ${item.accentColor || 'text-kincha'}`}
              >
                {item.value}
              </div>
            )}
            {item.label && (
              <div className="font-eb-garamond text-sm md:text-base text-washi/70 uppercase tracking-wide">
                {item.label}
              </div>
            )}
          </motion.div>
        )

      case 'quote':
        return (
          <motion.div
            key={index}
            className={`${baseClasses} p-6 flex flex-col justify-center space-y-4 border border-washi/10`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              ease: 'easeOut',
              delay: index * 0.05
            }}
          >
            {item.quote && (
              <blockquote className="font-eb-garamond text-lg md:text-xl text-washi italic">
                "{item.quote}"
              </blockquote>
            )}
            {item.attribution && (
              <cite className="font-inter text-sm text-washi/60 not-italic">
                — {item.attribution}
              </cite>
            )}
          </motion.div>
        )

      default:
        return null
    }
  }

  return (
    <div className={`min-h-screen w-full ${backgroundColor} p-8 md:p-12 lg:p-16`}>
      <div className={`grid ${gridCols[columns]} ${gapClasses[gap]} auto-rows-auto`}>
        {items.map((item, index) => renderItem(item, index))}
      </div>
    </div>
  )
}
