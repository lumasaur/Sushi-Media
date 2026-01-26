'use client'

import React from 'react'

interface BreadcrumbsProps {
  currentSlide: number
  onNavigate: (slideNumber: number) => void
}

const sections = [
  { name: 'Introduction', startSlide: 0, endSlide: 1 },
  { name: 'Three Systems', startSlide: 2, endSlide: 5 },
  { name: 'Execution', startSlide: 6, endSlide: 7 }
]

export function Breadcrumbs({ currentSlide, onNavigate }: BreadcrumbsProps) {
  const getCurrentSection = () => {
    return sections.find(
      (section) => currentSlide >= section.startSlide && currentSlide <= section.endSlide
    )
  }

  const currentSection = getCurrentSection()

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-40">
      <div className="flex flex-col items-end gap-4">
        {sections.map((section, index) => {
          const isActive = currentSection?.name === section.name
          return (
            <button
              key={section.name}
              onClick={() => onNavigate(section.startSlide)}
              className="group relative flex items-center gap-3"
              aria-label={`Go to ${section.name}`}
            >
              {/* Label - hidden by default, shows on hover */}
              <span
                className={`text-xs font-medium transition-all duration-300 opacity-0 group-hover:opacity-100 whitespace-nowrap bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-lg border border-gray-200 ${
                  isActive
                    ? 'text-[#b22222]'
                    : 'text-slate-500 group-hover:text-[#b22222]'
                }`}
              >
                {section.name}
              </span>
              {/* Dot indicator */}
              <div
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'bg-[#b22222] scale-150 shadow-lg shadow-[#b22222]/50'
                    : 'bg-slate-300 group-hover:bg-[#c44444] scale-100'
                }`}
              />
            </button>
          )
        })}
      </div>
    </nav>
  )
}
