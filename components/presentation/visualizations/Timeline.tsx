'use client'

import React from 'react'
import { motion } from 'framer-motion'

export interface Week {
  title: string
  items: string[]
}

interface TimelineProps {
  weeks: Week[]
}

/**
 * Timeline visualization component for First 30 Days execution slide
 *
 * Displays week-by-week progression with:
 * - Vertical center line connecting timeline dots
 * - Sequential reveal animations (150ms stagger)
 * - Clear visual hierarchy (week titles bold, items scannable)
 *
 * Built with CSS flexbox + Framer Motion (no external chart library needed)
 */
export function Timeline({ weeks }: TimelineProps) {
  return (
    <div className="relative pl-8">
      {/* Vertical timeline center line */}
      <div
        className="absolute left-0 top-4 bottom-4 w-0.5 bg-brand-red"
        aria-hidden="true"
      />

      {/* Week entries */}
      <div className="space-y-8">
        {weeks.map((week, i) => (
          <motion.div
            key={i}
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: i * 0.15,
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1] // Material Design standard easing
            }}
            viewport={{ once: true }}
          >
            {/* Timeline dot */}
            <div
              className="absolute left-[-2rem] top-2 w-4 h-4 rounded-full bg-brand-red ring-4 ring-white"
              aria-hidden="true"
            />

            {/* Week content */}
            <div>
              <h3 className="text-xl font-bold mb-2 text-white">{week.title}</h3>
              <ul className="space-y-1">
                {week.items.map((item, j) => (
                  <li key={j} className="flex items-start text-base text-gray-300">
                    <span className="text-brand-red mr-2 mt-1">◦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
