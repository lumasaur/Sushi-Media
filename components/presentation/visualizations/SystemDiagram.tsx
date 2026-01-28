'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Users, Calendar, TrendingUp, ArrowRight } from 'lucide-react'

export interface SystemData {
  icon: 'users' | 'calendar' | 'trending'
  title: string
  description: string
}

interface SystemDiagramProps {
  systems: SystemData[]
}

const iconMap = {
  users: Users,
  calendar: Calendar,
  trending: TrendingUp
}

export function SystemDiagram({ systems }: SystemDiagramProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
      {systems.map((system, i) => {
        const Icon = iconMap[system.icon]

        return (
          <React.Fragment key={i}>
            {/* System box */}
            <motion.div
              className="bg-washi/5 border border-washi/10 rounded-lg p-6 flex-1 max-w-xs min-w-[250px]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2, duration: 0.4 }}
              viewport={{ once: true }}
              style={{ willChange: 'transform, opacity' }}
            >
              <Icon className="w-12 h-12 text-kincha mb-4" strokeWidth={2} aria-hidden="true" />
              <h3 className="font-bold text-xl mb-2 text-washi">{system.title}</h3>
              <p className="text-hai text-base">{system.description}</p>
            </motion.div>

            {/* Arrow between boxes (not after last box) */}
            {i < systems.length - 1 && (
              <ArrowRight className="w-6 h-6 text-kincha opacity-50 flex-shrink-0 hidden md:block" aria-hidden="true" />
            )}
          </React.Fragment>
        )
      })}
    </div>
  )
}
