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
    <div className="mb-8">
      {/* Executive Summary Card - Always Visible */}
      <div className="bg-gray-800 border-2 border-gray-700 rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-start gap-4 flex-1">
              {icon && <span className="text-4xl flex-shrink-0">{icon}</span>}
              <div className="flex-1">
                <div className="flex items-center gap-3 flex-wrap mb-2">
                  {sectionNumber && (
                    <span className="text-gray-400 font-semibold">{sectionNumber}</span>
                  )}
                  <h3 className="text-2xl font-bold text-white">{title}</h3>
                  {badge && (
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${getBadgeStyles()}`}>
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
              className="flex-shrink-0 ml-4 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-700 transition-colors text-[#b22222] hover:text-[#a01e1e] text-2xl"
              aria-label={isExpanded ? 'Collapse section' : 'Expand section'}
            >
              {isExpanded ? '▲' : '▼'}
            </button>
          </div>

          {!isExpanded && (
            <button
              onClick={() => setIsExpanded(true)}
              className="mt-4 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded transition-colors text-sm font-semibold"
            >
              Show Details →
            </button>
          )}
        </div>

        {/* Expandable Content */}
        {isExpanded && (
          <div className="border-t border-gray-700 bg-gray-900/50">
            <div className="p-6">
              {children}
            </div>
            <div className="p-4 bg-gray-900 border-t border-gray-700 flex justify-center">
              <button
                onClick={() => setIsExpanded(false)}
                className="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded transition-colors text-sm font-semibold"
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
