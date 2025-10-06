'use client';

import { FilterState, Category, EffortLevel, ValueLevel, CATEGORY_LABELS } from '@/lib/types';

interface FilterControlsProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  totalCount: number;
  filteredCount: number;
}

export function FilterControls({
  filters,
  onFilterChange,
  totalCount,
  filteredCount
}: FilterControlsProps) {

  const categories: Category[] = ['bar-sales', 'lunch', 'neighborhood', 'events', 'doordash'];
  const efforts: EffortLevel[] = ['minimal', 'low', 'medium', 'high', 'very-high'];
  const values: ValueLevel[] = ['minimal', 'low', 'medium', 'high', 'very-high'];

  const toggleCategory = (category: Category) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter(c => c !== category)
      : [...filters.categories, category];
    onFilterChange({ ...filters, categories: newCategories });
  };

  const toggleEffort = (effort: EffortLevel) => {
    const newEfforts = filters.efforts.includes(effort)
      ? filters.efforts.filter(e => e !== effort)
      : [...filters.efforts, effort];
    onFilterChange({ ...filters, efforts: newEfforts });
  };

  const toggleValue = (value: ValueLevel) => {
    const newValues = filters.values.includes(value)
      ? filters.values.filter(v => v !== value)
      : [...filters.values, value];
    onFilterChange({ ...filters, values: newValues });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ ...filters, searchText: e.target.value });
  };

  const clearAllFilters = () => {
    onFilterChange({
      categories: [],
      efforts: [],
      values: [],
      searchText: ''
    });
  };

  const hasActiveFilters =
    filters.categories.length > 0 ||
    filters.efforts.length > 0 ||
    filters.values.length > 0 ||
    filters.searchText.length > 0;

  return (
    <div className="filter-controls bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
      {/* Header with Results Count */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Filter Strategies</h2>
          <p className="text-sm text-gray-600 mt-1">
            Showing {filteredCount} of {totalCount} strategies
          </p>
        </div>

        {hasActiveFilters && (
          <button
            onClick={clearAllFilters}
            className="text-sm text-red-700 hover:text-red-900 font-medium"
          >
            Clear All Filters
          </button>
        )}
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
          Search Strategies
        </label>
        <input
          id="search"
          type="text"
          placeholder="Search by name, description, or rationale..."
          value={filters.searchText}
          onChange={handleSearchChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
        />
      </div>

      {/* Category Filters */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Objective Categories
        </label>
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => toggleCategory(category)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filters.categories.includes(category)
                  ? 'bg-red-700 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {CATEGORY_LABELS[category]}
            </button>
          ))}
        </div>
      </div>

      {/* Effort Level Filters */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Implementation Effort
        </label>
        <div className="flex flex-wrap gap-2">
          {efforts.map(effort => (
            <button
              key={effort}
              onClick={() => toggleEffort(effort)}
              className={`px-4 py-2 rounded-md text-sm font-medium capitalize transition-colors ${
                filters.efforts.includes(effort)
                  ? 'bg-red-700 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {effort}
            </button>
          ))}
        </div>
      </div>

      {/* Value Level Filters */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Business Value
        </label>
        <div className="flex flex-wrap gap-2">
          {values.map(value => (
            <button
              key={value}
              onClick={() => toggleValue(value)}
              className={`px-4 py-2 rounded-md text-sm font-medium capitalize transition-colors ${
                filters.values.includes(value)
                  ? 'bg-red-700 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
