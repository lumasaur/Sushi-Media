'use client';

import { useState } from 'react';
import { Strategy, EFFORT_COLORS, VALUE_COLORS, EFFORT_LABELS, VALUE_LABELS } from '@/lib/types';

interface StrategyCardProps {
  strategy: Strategy;
}

export function StrategyCard({ strategy }: StrategyCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="strategy-card border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow bg-white">
      {/* Header Row: ID, Name, Badges */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <span className="text-sm font-mono text-gray-500">{strategy.id}</span>
            <h3 className="text-lg font-semibold text-gray-900">{strategy.name}</h3>
          </div>
        </div>

        <div className="flex gap-2 flex-shrink-0">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${EFFORT_COLORS[strategy.effort]}`}>
            Effort: {EFFORT_LABELS[strategy.effort]}
          </span>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${VALUE_COLORS[strategy.value]}`}>
            Value: {VALUE_LABELS[strategy.value]}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="mt-3 text-gray-700 text-sm leading-relaxed">
        {strategy.description}
      </p>

      {/* Expand/Collapse Toggle */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-3 text-sm text-red-700 hover:text-red-900 font-medium transition-colors"
      >
        {isExpanded ? '− Hide Details' : '+ Show Strategic Rationale'}
      </button>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Strategic Rationale:</h4>
          <p className="text-sm text-gray-700 leading-relaxed">
            {strategy.rationale}
          </p>
        </div>
      )}
    </div>
  );
}
