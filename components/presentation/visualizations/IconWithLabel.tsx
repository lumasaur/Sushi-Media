'use client'

import { LucideIcon } from 'lucide-react'

interface IconWithLabelProps {
  icon: LucideIcon
  title: string
  description: string
  className?: string
}

export function IconWithLabel({ icon: Icon, title, description, className }: IconWithLabelProps) {
  const baseClasses = 'flex items-start gap-4'
  const combinedClasses = className ? `${baseClasses} ${className}` : baseClasses

  return (
    <div className={combinedClasses}>
      <Icon
        className="w-8 h-8 text-brand-red flex-shrink-0 mt-1"
        strokeWidth={2}
        aria-hidden="true"
      />
      <div>
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  )
}
