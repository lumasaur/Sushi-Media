'use client';

import { useState, useMemo } from 'react';
import { Strategy, CATEGORY_LABELS, EFFORT_SCORE, VALUE_SCORE } from '@/lib/types';
import {
  getStrategyCategory,
  getStrategyPhase,
  getObjectiveColor,
  getPhaseColor,
  getCategoryBadgeColor,
  getCategoryIcon
} from '@/lib/strategy-helpers';
import { EffortDots } from './EffortDots';
import { ValueStars } from './ValueStars';

interface StrategyTableProps {
  strategies: Strategy[];
  onStrategySelect: (strategyId: string) => void;
  selectedStrategyId: string | null;
}

type SortColumn = 'id' | 'category' | 'name' | 'effort' | 'value' | 'phase' | null;
type SortDirection = 'asc' | 'desc';

export function StrategyTable({ strategies, onStrategySelect, selectedStrategyId }: StrategyTableProps) {
  const [sortColumn, setSortColumn] = useState<SortColumn>('phase');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const [searchText, setSearchText] = useState('');
  const [activeFilter, setActiveFilter] = useState<string>('all');

  // Sorting logic
  const sortedStrategies = useMemo(() => {
    let sorted = [...strategies];

    if (sortColumn) {
      sorted.sort((a, b) => {
        let aValue: any;
        let bValue: any;

        switch (sortColumn) {
          case 'id':
            aValue = a.id;
            bValue = b.id;
            break;
          case 'category':
            aValue = CATEGORY_LABELS[a.category];
            bValue = CATEGORY_LABELS[b.category];
            break;
          case 'name':
            aValue = a.name;
            bValue = b.name;
            break;
          case 'effort':
            aValue = EFFORT_SCORE[a.effort];
            bValue = EFFORT_SCORE[b.effort];
            break;
          case 'value':
            aValue = VALUE_SCORE[a.value];
            bValue = VALUE_SCORE[b.value];
            break;
          case 'phase':
            aValue = getStrategyPhase(a);
            bValue = getStrategyPhase(b);
            break;
          default:
            return 0;
        }

        if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
        return 0;
      });
    }

    return sorted;
  }, [strategies, sortColumn, sortDirection]);

  // Filtering logic
  const filteredStrategies = useMemo(() => {
    let filtered = sortedStrategies;

    // Apply active filter
    if (activeFilter !== 'all') {
      filtered = filtered.filter((strategy) => {
        const category = getStrategyCategory(strategy);
        const phase = getStrategyPhase(strategy);
        const valueScore = VALUE_SCORE[strategy.value];

        switch (activeFilter) {
          case 'quick-wins':
            return category === 'quick-win';
          case 'strategic-investments':
            return category === 'strategic-investment';
          case 'phase-1':
            return phase === 1;
          case 'high-value':
            return valueScore >= 4;
          case 'minimal-effort':
            return strategy.effort === 'minimal';
          default:
            return true;
        }
      });
    }

    // Apply search filter
    if (searchText) {
      const searchLower = searchText.toLowerCase();
      filtered = filtered.filter(
        (strategy) =>
          strategy.name.toLowerCase().includes(searchLower) ||
          strategy.description.toLowerCase().includes(searchLower)
      );
    }

    return filtered;
  }, [sortedStrategies, activeFilter, searchText]);

  const handleSort = (column: SortColumn) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const getSortIcon = (column: SortColumn) => {
    if (sortColumn !== column) return '↕';
    return sortDirection === 'asc' ? '↑' : '↓';
  };

  return (
    <div className="space-y-6">
      {/* Filter Controls */}
      <div className="flex flex-wrap gap-3 items-center justify-between">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeFilter === 'all'
                ? 'bg-red-700 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Strategies
          </button>
          <button
            onClick={() => setActiveFilter('quick-wins')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 ${
              activeFilter === 'quick-wins'
                ? 'bg-green-600 text-white'
                : 'bg-green-100 text-green-700 hover:bg-green-200'
            }`}
          >
            <span>⚡</span> Quick Wins
          </button>
          <button
            onClick={() => setActiveFilter('strategic-investments')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 ${
              activeFilter === 'strategic-investments'
                ? 'bg-amber-600 text-white'
                : 'bg-amber-100 text-amber-700 hover:bg-amber-200'
            }`}
          >
            <span>🏗️</span> Strategic Investments
          </button>
          <button
            onClick={() => setActiveFilter('phase-1')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeFilter === 'phase-1'
                ? 'bg-green-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Phase 1
          </button>
          <button
            onClick={() => setActiveFilter('high-value')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeFilter === 'high-value'
                ? 'bg-yellow-600 text-white'
                : 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
            }`}
          >
            High+ Value
          </button>
          <button
            onClick={() => setActiveFilter('minimal-effort')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeFilter === 'minimal-effort'
                ? 'bg-blue-600 text-white'
                : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
            }`}
          >
            Minimal Effort
          </button>
        </div>

        {/* Search Bar */}
        <div className="flex-1 min-w-[200px] max-w-md">
          <input
            type="text"
            placeholder="Search strategies..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
          />
        </div>
      </div>

      {/* Results Count */}
      <div className="text-sm text-gray-600">
        Showing {filteredStrategies.length} of {strategies.length} strategies
      </div>

      {/* Table */}
      <div className="overflow-x-auto border border-gray-200 rounded-lg">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100 sticky top-0">
            <tr>
              <th
                className="px-4 py-3 text-left text-sm font-semibold text-gray-700 cursor-pointer hover:bg-gray-200 transition-colors"
                onClick={() => handleSort('id')}
              >
                <div className="flex items-center gap-1">
                  ID <span className="text-xs">{getSortIcon('id')}</span>
                </div>
              </th>
              <th
                className="px-4 py-3 text-left text-sm font-semibold text-gray-700 cursor-pointer hover:bg-gray-200 transition-colors"
                onClick={() => handleSort('category')}
              >
                <div className="flex items-center gap-1">
                  Objective <span className="text-xs">{getSortIcon('category')}</span>
                </div>
              </th>
              <th
                className="px-4 py-3 text-left text-sm font-semibold text-gray-700 cursor-pointer hover:bg-gray-200 transition-colors"
                onClick={() => handleSort('name')}
              >
                <div className="flex items-center gap-1">
                  Strategy Name <span className="text-xs">{getSortIcon('name')}</span>
                </div>
              </th>
              <th
                className="px-4 py-3 text-center text-sm font-semibold text-gray-700 cursor-pointer hover:bg-gray-200 transition-colors"
                onClick={() => handleSort('effort')}
              >
                <div className="flex items-center justify-center gap-1">
                  Effort <span className="text-xs">{getSortIcon('effort')}</span>
                </div>
              </th>
              <th
                className="px-4 py-3 text-center text-sm font-semibold text-gray-700 cursor-pointer hover:bg-gray-200 transition-colors"
                onClick={() => handleSort('value')}
              >
                <div className="flex items-center justify-center gap-1">
                  Value <span className="text-xs">{getSortIcon('value')}</span>
                </div>
              </th>
              <th
                className="px-4 py-3 text-center text-sm font-semibold text-gray-700 cursor-pointer hover:bg-gray-200 transition-colors"
                onClick={() => handleSort('phase')}
              >
                <div className="flex items-center justify-center gap-1">
                  Phase <span className="text-xs">{getSortIcon('phase')}</span>
                </div>
              </th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">
                Category
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredStrategies.map((strategy) => {
              const category = getStrategyCategory(strategy);
              const phase = getStrategyPhase(strategy);
              const isSelected = selectedStrategyId === strategy.id;

              return (
                <tr
                  key={strategy.id}
                  onClick={() => onStrategySelect(strategy.id)}
                  className={`border-b border-gray-200 cursor-pointer transition-colors ${
                    isSelected
                      ? 'bg-red-50 border-l-4 border-l-red-700'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">
                    {strategy.id}
                  </td>
                  <td className="px-4 py-3">
                    <span className={`inline-block px-2 py-1 text-xs font-medium rounded border ${getObjectiveColor(strategy.category)}`}>
                      {CATEGORY_LABELS[strategy.category]}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm font-semibold text-gray-900">
                    {strategy.name}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex justify-center">
                      <EffortDots level={strategy.effort} />
                    </div>
                  </td>
                  <td className={`px-4 py-3 ${VALUE_SCORE[strategy.value] >= 4 ? 'bg-yellow-50' : ''}`}>
                    <div className="flex justify-center">
                      <ValueStars level={strategy.value} />
                    </div>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className={`inline-block px-3 py-1 text-xs font-bold rounded ${getPhaseColor(phase)}`}>
                      {phase}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded border ${getCategoryBadgeColor(category)}`}>
                      {getCategoryIcon(category) && <span>{getCategoryIcon(category)}</span>}
                      <span className="capitalize">{category.replace('-', ' ')}</span>
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {filteredStrategies.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No strategies match your current filters. Try adjusting your search or filter criteria.
        </div>
      )}
    </div>
  );
}
