'use client';

import { Strategy } from '@/lib/types';
import { StrategyCard } from './StrategyCard';

interface QuickWinsSectionProps {
  quickWins: Strategy[];
}

export function QuickWinsSection({ quickWins }: QuickWinsSectionProps) {
  if (quickWins.length === 0) return null;

  return (
    <div className="quick-wins-section mb-8">
      <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
            ★
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Quick Wins</h2>
            <p className="text-sm text-gray-700">
              High-value strategies with low implementation effort — prioritize these for immediate impact
            </p>
          </div>
        </div>

        <div className="text-sm text-gray-600 mb-4">
          Found {quickWins.length} quick win{quickWins.length !== 1 ? 's' : ''}
          {' '}(Low/Minimal Effort + High/Very High Value)
        </div>

        <div className="space-y-4">
          {quickWins.map(strategy => (
            <StrategyCard key={strategy.id} strategy={strategy} />
          ))}
        </div>
      </div>
    </div>
  );
}
