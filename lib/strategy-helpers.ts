import { Strategy, EffortLevel, ValueLevel, EFFORT_SCORE, VALUE_SCORE } from './types';

/**
 * Determine if a strategy is a "Quick Win" (minimal/low effort + high/very-high value)
 */
export function isQuickWin(strategy: Strategy): boolean {
  const effortScore = EFFORT_SCORE[strategy.effort];
  const valueScore = VALUE_SCORE[strategy.value];

  return effortScore <= 2 && valueScore >= 4; // Minimal/Low effort + High/Very High value
}

/**
 * Determine if a strategy is a "Strategic Investment" (high/very-high effort + very-high value)
 */
export function isStrategicInvestment(strategy: Strategy): boolean {
  const effortScore = EFFORT_SCORE[strategy.effort];
  const valueScore = VALUE_SCORE[strategy.value];

  return effortScore >= 4 && valueScore === 5; // High/Very High effort + Very High value
}

/**
 * Get the category badge for a strategy
 */
export function getStrategyCategory(strategy: Strategy): 'quick-win' | 'strategic-investment' | 'standard' {
  if (isQuickWin(strategy)) return 'quick-win';
  if (isStrategicInvestment(strategy)) return 'strategic-investment';
  return 'standard';
}

/**
 * Determine which phase a strategy belongs to based on ID patterns and characteristics
 * Phase 1 (Months 1-3): Quick Wins - 12 strategies
 * Phase 2 (Months 4-6): Strategic Investments - 5 strategies
 * Phase 3 (Months 7-12): Portfolio Expansion - 10+ strategies
 */
export function getStrategyPhase(strategy: Strategy): 1 | 2 | 3 {
  const category = getStrategyCategory(strategy);

  // Quick Wins go to Phase 1
  if (category === 'quick-win') return 1;

  // Strategic Investments go to Phase 2
  if (category === 'strategic-investment') return 2;

  // Everything else is Phase 3
  return 3;
}

/**
 * Get color classes for objective badges
 */
export function getObjectiveColor(category: string): string {
  const colors: Record<string, string> = {
    'bar-sales': 'bg-purple-100 text-purple-800 border-purple-300',
    'lunch': 'bg-blue-100 text-blue-800 border-blue-300',
    'neighborhood': 'bg-green-100 text-green-800 border-green-300',
    'events': 'bg-orange-100 text-orange-800 border-orange-300',
    'doordash': 'bg-red-100 text-red-800 border-red-300'
  };

  return colors[category] || 'bg-gray-100 text-gray-800 border-gray-300';
}

/**
 * Get color classes for phase badges
 */
export function getPhaseColor(phase: 1 | 2 | 3): string {
  const colors: Record<number, string> = {
    1: 'bg-green-500 text-white',
    2: 'bg-amber-500 text-white',
    3: 'bg-blue-500 text-white'
  };

  return colors[phase] || 'bg-gray-500 text-white';
}

/**
 * Get color classes for category badges
 */
export function getCategoryBadgeColor(category: 'quick-win' | 'strategic-investment' | 'standard'): string {
  const colors: Record<string, string> = {
    'quick-win': 'bg-green-100 text-green-800 border-green-500',
    'strategic-investment': 'bg-amber-100 text-amber-800 border-amber-500',
    'standard': 'bg-gray-100 text-gray-600 border-gray-300'
  };

  return colors[category];
}

/**
 * Get icon for category badge
 */
export function getCategoryIcon(category: 'quick-win' | 'strategic-investment' | 'standard'): string {
  const icons: Record<string, string> = {
    'quick-win': '⚡',
    'strategic-investment': '🏗️',
    'standard': ''
  };

  return icons[category];
}
