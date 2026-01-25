'use client';

import { Strategy } from '@/lib/types';
import { InitiativeCard } from './InitiativeCard';

interface InitiativeCardGridProps {
  strategies: Strategy[];
  selectedStrategyId: string | null;
  onStrategySelect: (strategyId: string) => void;
}

export function InitiativeCardGrid({
  strategies,
  selectedStrategyId,
  onStrategySelect,
}: InitiativeCardGridProps) {
  if (strategies.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-lg text-gray-600 mb-4">No strategies match the selected filters.</p>
        <p className="text-sm text-gray-500">Try adjusting your filter criteria or clear all filters.</p>
      </div>
    );
  }

  return (
    <div className="max-h-[600px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {strategies.map((strategy) => (
          <InitiativeCard
            key={strategy.id}
            strategy={strategy}
            isSelected={selectedStrategyId === strategy.id}
            onClick={() => onStrategySelect(strategy.id)}
          />
        ))}
      </div>
    </div>
  );
}
