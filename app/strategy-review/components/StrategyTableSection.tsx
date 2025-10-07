'use client';

import { useState } from 'react';
import { strategies } from '@/lib/strategy-data';
import { StrategyTable } from './StrategyTable';
import { IframeContainer } from './IframeContainer';

export function StrategyTableSection() {
  const [selectedStrategyId, setSelectedStrategyId] = useState<string | null>(null);

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 bg-white">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Complete Strategy Portfolio: 50 Initiatives
      </h2>
      <p className="text-gray-600 mb-8">
        Click any strategy row to view detailed business case analysis in panel below. Use filters and sorting to focus on specific objectives, effort levels, or value ratings.
      </p>

      <StrategyTable
        strategies={strategies}
        onStrategySelect={setSelectedStrategyId}
        selectedStrategyId={selectedStrategyId}
      />

      <IframeContainer selectedStrategyId={selectedStrategyId} />
    </section>
  );
}
