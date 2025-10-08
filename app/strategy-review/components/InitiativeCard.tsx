'use client';

import { Strategy } from '@/lib/types';
import { EffortDots } from './EffortDots';
import { ValueStars } from './ValueStars';
import { getStrategyCategory, getStrategyPhase, getCategoryIcon } from '@/lib/strategy-helpers';
import { CATEGORY_LABELS } from '@/lib/types';

interface InitiativeCardProps {
  strategy: Strategy;
  isSelected: boolean;
  onClick: () => void;
}

export function InitiativeCard({ strategy, isSelected, onClick }: InitiativeCardProps) {
  const category = getStrategyCategory(strategy);
  const phase = getStrategyPhase(strategy);
  const categoryIcon = getCategoryIcon(category);

  const objectiveColors = {
    'bar-sales': 'bg-purple-500',
    lunch: 'bg-blue-500',
    neighborhood: 'bg-green-500',
    events: 'bg-orange-500',
    doordash: 'bg-red-500',
  };

  const phaseColors = {
    1: 'bg-green-600',
    2: 'bg-amber-600',
    3: 'bg-blue-600',
  };

  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
        isSelected
          ? 'border-red-700 bg-red-900 shadow-xl'
          : 'border-gray-700 bg-gray-900 hover:border-gray-600 hover:bg-gray-800 hover:shadow-lg'
      }`}
    >
      {/* Header: ID and Category Icon */}
      <div className="flex items-start justify-between mb-2">
        <span className="font-mono text-gray-400 font-bold">{strategy.id}</span>
        {categoryIcon && <span className="text-xl">{categoryIcon}</span>}
      </div>

      {/* Strategy Name */}
      <h3 className="font-semibold text-white mb-3 line-clamp-2 min-h-[3rem]">
        {strategy.name}
      </h3>

      {/* Objective Badge */}
      <div className="mb-3">
        <span
          className={`inline-block px-3 py-1 font-medium text-white rounded-full ${
            objectiveColors[strategy.category]
          }`}
        >
          {CATEGORY_LABELS[strategy.category]}
        </span>
      </div>

      {/* Effort and Value Indicators */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1">
          <EffortDots level={strategy.effort} />
        </div>
        <div className="flex items-center gap-1">
          <ValueStars level={strategy.value} />
        </div>
      </div>

      {/* Phase Badge */}
      <div>
        <span className={`inline-block px-3 py-1 font-bold text-white rounded ${phaseColors[phase]}`}>
          Phase {phase}
        </span>
      </div>
    </button>
  );
}
