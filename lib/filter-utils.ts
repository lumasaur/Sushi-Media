import { Strategy, FilterState, SortConfig, EFFORT_SCORE, VALUE_SCORE } from './types';
import { getStrategyCategory, getStrategyPhase } from './strategy-helpers';

export interface ExtendedFilterState {
  categories: string[];  // quick-win, strategic-investment, standard
  phases: number[];      // 1, 2, 3
  objectives: string[];  // bar-sales, lunch, neighborhood, events, doordash
  effort: string[];      // minimal, low, medium, high, very-high
  value: string[];       // minimal, low, medium, high, very-high
}

/**
 * Apply all active filters to strategy list (Extended version with phases and objectives)
 */
export function applyExtendedFilters(
  strategies: Strategy[],
  filters: ExtendedFilterState
): Strategy[] {
  return strategies.filter(strategy => {
    const category = getStrategyCategory(strategy);
    const phase = getStrategyPhase(strategy);

    // Category filter (quick-win, strategic-investment, standard)
    if (filters.categories.length > 0 && !filters.categories.includes(category)) {
      return false;
    }

    // Phase filter (1, 2, 3)
    if (filters.phases.length > 0 && !filters.phases.includes(phase)) {
      return false;
    }

    // Objective filter (bar-sales, lunch, etc.)
    if (filters.objectives.length > 0 && !filters.objectives.includes(strategy.category)) {
      return false;
    }

    // Effort filter
    if (filters.effort.length > 0 && !filters.effort.includes(strategy.effort)) {
      return false;
    }

    // Value filter (support "high" to mean both high and very-high)
    if (filters.value.length > 0) {
      const matchesValue = filters.value.some(v => {
        if (v === 'high') {
          return strategy.value === 'high' || strategy.value === 'very-high';
        }
        return strategy.value === v;
      });
      if (!matchesValue) return false;
    }

    return true;
  });
}

/**
 * Apply all active filters to strategy list (Original version)
 */
export function applyFilters(
  strategies: Strategy[],
  filters: FilterState
): Strategy[] {
  return strategies.filter(strategy => {
    // Category filter
    if (filters.categories.length > 0 &&
        !filters.categories.includes(strategy.category)) {
      return false;
    }

    // Effort filter
    if (filters.efforts.length > 0 &&
        !filters.efforts.includes(strategy.effort)) {
      return false;
    }

    // Value filter
    if (filters.values.length > 0 &&
        !filters.values.includes(strategy.value)) {
      return false;
    }

    // Search text filter (searches name, description, and rationale)
    if (filters.searchText) {
      const searchLower = filters.searchText.toLowerCase();
      const matchesName = strategy.name.toLowerCase().includes(searchLower);
      const matchesDescription = strategy.description.toLowerCase().includes(searchLower);
      const matchesRationale = strategy.rationale.toLowerCase().includes(searchLower);

      if (!matchesName && !matchesDescription && !matchesRationale) {
        return false;
      }
    }

    return true;
  });
}

/**
 * Sort strategies by specified column and direction
 */
export function applySorting(
  strategies: Strategy[],
  sortConfig: SortConfig
): Strategy[] {
  if (!sortConfig.column) return strategies;

  return [...strategies].sort((a, b) => {
    const column = sortConfig.column!;
    let aValue: any = a[column];
    let bValue: any = b[column];

    // Special handling for effort and value (convert to numbers for proper sorting)
    if (column === 'effort') {
      aValue = EFFORT_SCORE[a.effort];
      bValue = EFFORT_SCORE[b.effort];
    } else if (column === 'value') {
      aValue = VALUE_SCORE[a.value];
      bValue = VALUE_SCORE[b.value];
    }

    // Compare values
    let comparison = 0;
    if (aValue > bValue) comparison = 1;
    if (aValue < bValue) comparison = -1;

    // Apply direction
    return sortConfig.direction === 'desc' ? comparison * -1 : comparison;
  });
}

/**
 * Get count of strategies matching current filters
 */
export function getFilteredCount(
  strategies: Strategy[],
  filters: FilterState
): number {
  return applyFilters(strategies, filters).length;
}

/**
 * Check if any filters are active
 */
export function hasActiveFilters(filters: FilterState): boolean {
  return (
    filters.categories.length > 0 ||
    filters.efforts.length > 0 ||
    filters.values.length > 0 ||
    filters.searchText.length > 0
  );
}

/**
 * Clear all filters
 */
export function clearFilters(): FilterState {
  return {
    categories: [],
    efforts: [],
    values: [],
    searchText: ''
  };
}
