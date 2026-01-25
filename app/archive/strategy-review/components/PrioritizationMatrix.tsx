'use client';

import { useState, useMemo } from 'react';
import { FilterState, SortConfig } from '@/lib/types';
import { strategies } from '@/lib/strategy-data';
import { applyFilters, applySorting } from '@/lib/filter-utils';
import { FilterControls } from './FilterControls';
import { QuickWinsSection } from './QuickWinsSection';
import { StrategyCard } from './StrategyCard';

export function PrioritizationMatrix() {
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    efforts: [],
    values: [],
    searchText: ''
  });

  const [sortConfig, setSortConfig] = useState<SortConfig>({
    column: null,
    direction: 'asc'
  });

  // Compute filtered strategies (memoized to prevent recalculation)
  const filteredStrategies = useMemo(() =>
    applyFilters(strategies, filters),
    [filters]
  );

  // Compute sorted strategies (memoized)
  const sortedStrategies = useMemo(() =>
    applySorting(filteredStrategies, sortConfig),
    [filteredStrategies, sortConfig]
  );

  // Identify quick wins within filtered set
  const quickWins = useMemo(() =>
    filteredStrategies.filter(s =>
      (s.effort === 'minimal' || s.effort === 'low') &&
      (s.value === 'high' || s.value === 'very-high')
    ),
    [filteredStrategies]
  );

  return (
    <div className="prioritization-matrix max-w-7xl mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Marketing Strategy Prioritization
        </h1>
        <p className="text-gray-600">
          Review and prioritize 50 strategic initiatives across 5 core objectives:
          Bar Sales Growth, Lunch Business Development, Neighborhood Positioning,
          Events Calendar Strategy, and DoorDash Business Growth.
        </p>
      </div>

      {/* Filter Controls */}
      <FilterControls
        filters={filters}
        onFilterChange={setFilters}
        totalCount={strategies.length}
        filteredCount={filteredStrategies.length}
      />

      {/* Quick Wins Highlight Section */}
      <QuickWinsSection quickWins={quickWins} />

      {/* All Strategies Section */}
      <div className="strategies-section">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">
            All Strategies
            <span className="ml-2 text-sm font-normal text-gray-600">
              ({sortedStrategies.length})
            </span>
          </h2>
        </div>

        {sortedStrategies.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-gray-600">
              No strategies match your current filters. Try adjusting your selection.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {sortedStrategies.map(strategy => (
              <StrategyCard key={strategy.id} strategy={strategy} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
