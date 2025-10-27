'use client';

import { useState, ReactNode } from 'react';

interface ExpandableSectionProps {
  title: string;
  icon?: string;
  executiveSummary: ReactNode;
  children: ReactNode;
  defaultExpanded?: boolean;
  badge?: 'recommended' | 'high-priority' | 'best' | null;
  sectionNumber?: string;
}

export function ExpandableSection({
  title,
  icon,
  executiveSummary,
  children,
  defaultExpanded = false,
  badge = null,
  sectionNumber
}: ExpandableSectionProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const getBadgeStyles = () => {
    switch (badge) {
      case 'recommended':
        return 'bg-yellow-500 text-black';
      case 'high-priority':
        return 'bg-red-600 text-white';
      case 'best':
        return 'bg-green-600 text-white';
      default:
        return '';
    }
  };

  const getBadgeText = () => {
    switch (badge) {
      case 'recommended':
        return '⭐ RECOMMENDED';
      case 'high-priority':
        return '🔥 HIGH PRIORITY';
      case 'best':
        return '⭐⭐ BEST';
      default:
        return '';
    }
  };

  return (
    <div className="mb-10">
      {/* Executive Summary Card - Always Visible */}
      <div className="card-dark card-dark-hover overflow-hidden">
        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-start gap-5 flex-1">
              {icon && <span className="text-5xl flex-shrink-0">{icon}</span>}
              <div className="flex-1">
                <div className="flex items-center gap-3 flex-wrap mb-3">
                  {sectionNumber && (
                    <span className="text-gray-400 font-semibold text-lg">{sectionNumber}</span>
                  )}
                  <h3 className="text-3xl font-bold text-white">{title}</h3>
                  {badge && (
                    <span className={`px-4 py-1.5 rounded-full text-sm font-bold ${getBadgeStyles()}`}>
                      {getBadgeText()}
                    </span>
                  )}
                </div>
                <div className="text-lg leading-relaxed text-gray-300">
                  {executiveSummary}
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`flex-shrink-0 ml-4 w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-700 transition-all duration-300 text-[#b22222] hover:text-[#a01e1e] text-2xl ${
                isExpanded ? 'rotate-180' : ''
              }`}
              aria-label={isExpanded ? 'Collapse section' : 'Expand section'}
            >
              ▼
            </button>
          </div>

          {!isExpanded && (
            <button
              onClick={() => setIsExpanded(true)}
              className="mt-4 px-6 py-3 bg-gradient-to-r from-[#b22222] to-[#a01e1e] hover:from-[#a01e1e] hover:to-[#8b1a1a] text-white rounded-lg transition-all duration-300 text-sm font-semibold shadow-medium hover:shadow-strong"
            >
              Show Details →
            </button>
          )}
        </div>

        {/* Expandable Content */}
        {isExpanded && (
          <div className="border-t border-gray-700 bg-gray-900/50 transition-all duration-300 ease-in-out">
            <div className="p-8">
              {children}
            </div>
            <div className="p-6 bg-gray-900 border-t border-gray-700 flex justify-center">
              <button
                onClick={() => setIsExpanded(false)}
                className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all duration-300 text-sm font-semibold"
              >
                ▲ Hide Details
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
