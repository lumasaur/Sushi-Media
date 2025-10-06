/**
 * Type definitions for Ami Sushi Marketing Strategy Portal
 */

// Strategic objective categories
export type Category =
  | 'bar-sales'
  | 'lunch'
  | 'neighborhood'
  | 'events'
  | 'doordash';

// Implementation effort levels
export type EffortLevel =
  | 'minimal'
  | 'low'
  | 'medium'
  | 'high'
  | 'very-high';

// Business value levels
export type ValueLevel =
  | 'minimal'
  | 'low'
  | 'medium'
  | 'high'
  | 'very-high';

// Core strategy interface
export interface Strategy {
  id: string;                    // Format: "1.1", "2.3", etc.
  category: Category;
  name: string;
  description: string;
  effort: EffortLevel;
  value: ValueLevel;
  rationale: string;
}

// Filter state for interactive components
export interface FilterState {
  categories: Category[];
  efforts: EffortLevel[];
  values: ValueLevel[];
  searchText: string;
}

// Sort configuration
export interface SortConfig {
  column: keyof Strategy | null;
  direction: 'asc' | 'desc';
}

// Numeric mapping for effort levels (enables sorting)
export const EFFORT_SCORE: Record<EffortLevel, number> = {
  'minimal': 1,
  'low': 2,
  'medium': 3,
  'high': 4,
  'very-high': 5
};

// Numeric mapping for value levels (enables sorting)
export const VALUE_SCORE: Record<ValueLevel, number> = {
  'minimal': 1,
  'low': 2,
  'medium': 3,
  'high': 4,
  'very-high': 5
};

// Display labels for categories
export const CATEGORY_LABELS: Record<Category, string> = {
  'bar-sales': 'Bar Sales Growth',
  'lunch': 'Lunch Business Development',
  'neighborhood': 'Neighborhood Gathering Spot',
  'events': 'Events Calendar Strategy',
  'doordash': 'DoorDash Business Growth'
};

// Display labels for effort levels
export const EFFORT_LABELS: Record<EffortLevel, string> = {
  'minimal': 'Minimal',
  'low': 'Low',
  'medium': 'Medium',
  'high': 'High',
  'very-high': 'Very High'
};

// Display labels for value levels
export const VALUE_LABELS: Record<ValueLevel, string> = {
  'minimal': 'Minimal',
  'low': 'Low',
  'medium': 'Medium',
  'high': 'High',
  'very-high': 'Very High'
};

// Color coding for effort levels (Tailwind classes)
export const EFFORT_COLORS: Record<EffortLevel, string> = {
  'minimal': 'bg-green-100 text-green-800',
  'low': 'bg-blue-100 text-blue-800',
  'medium': 'bg-yellow-100 text-yellow-800',
  'high': 'bg-orange-100 text-orange-800',
  'very-high': 'bg-red-100 text-red-800'
};

// Color coding for value levels (Tailwind classes)
export const VALUE_COLORS: Record<ValueLevel, string> = {
  'minimal': 'bg-gray-100 text-gray-800',
  'low': 'bg-blue-100 text-blue-800',
  'medium': 'bg-purple-100 text-purple-800',
  'high': 'bg-green-100 text-green-800',
  'very-high': 'bg-emerald-100 text-emerald-800'
};
