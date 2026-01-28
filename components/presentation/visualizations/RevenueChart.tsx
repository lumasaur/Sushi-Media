'use client'

import React from 'react'
import { motion } from 'framer-motion'

/**
 * RevenueChart - Simple CSS-based revenue opportunity visualization
 *
 * Shows comparison between current state (~40% capacity) and potential
 * with systems (~100% capacity). Uses CSS-only approach with Framer Motion
 * for smooth animated reveal.
 */

interface Bar {
  label: string
  percentage: number
  color: string
  description: string
}

const bars: Bar[] = [
  {
    label: 'Current',
    percentage: 40,
    color: 'bg-hai',
    description: 'Empty Hours'
  },
  {
    label: 'With Systems',
    percentage: 100,
    color: 'bg-beni',
    description: 'Filled Hours'
  }
]

export function RevenueChart() {
  return (
    <div
      className="max-w-md mx-auto"
      aria-label="Revenue opportunity comparison: Current capacity at 40% versus 100% with systems"
    >
      <div className="flex justify-center items-end gap-8 h-80">
        {bars.map((bar, index) => (
          <div key={bar.label} className="flex flex-col items-center flex-1">
            {/* Bar container with fixed height */}
            <div className="relative w-full h-64 bg-washi/5 border border-washi/10 rounded-lg overflow-hidden">
              {/* Animated bar */}
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${bar.percentage}%` }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,  // Stagger: current bar first, then "with systems"
                  ease: [0.4, 0, 0.2, 1]  // Material Design easing
                }}
                className={`absolute bottom-0 w-full ${bar.color} rounded-t-lg`}
                style={{ willChange: 'transform' }}
              />
            </div>

            {/* Labels below bar */}
            <div className="mt-4 text-center">
              <div className="text-lg font-semibold text-washi">
                {bar.label}
              </div>
              <div className="text-sm text-hai mt-1">
                {bar.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
