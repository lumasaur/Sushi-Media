'use client';

interface PortfolioCompositionProps {
  activeFilters: {
    categories: string[];
    phases: number[];
    objectives: string[];
    effort: string[];
    value: string[];
  };
  onFilterToggle: (filterType: string, value: string | number) => void;
  onClearFilters: () => void;
  filteredCount: number;
  totalCount: number;
}

export function PortfolioComposition({
  activeFilters,
  onFilterToggle,
  onClearFilters,
  filteredCount,
  totalCount,
}: PortfolioCompositionProps) {
  const hasActiveFilters =
    activeFilters.categories.length > 0 ||
    activeFilters.phases.length > 0 ||
    activeFilters.objectives.length > 0 ||
    activeFilters.effort.length > 0 ||
    activeFilters.value.length > 0;

  const isFilterActive = (filterType: string, value: string | number) => {
    const filters = activeFilters[filterType as keyof typeof activeFilters];
    return filters.includes(value as never);
  };

  const getCardClasses = (filterType: string, value: string | number, baseColor: string) => {
    const isActive = isFilterActive(filterType, value);
    if (isActive) {
      return `${baseColor} text-white border-2 shadow-md`;
    }
    return 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 hover:shadow-md';
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Strategy Portfolio Composition
      </h2>

      {/* Row 1: Primary Category Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {/* Total Strategies */}
        <button
          onClick={onClearFilters}
          className={`p-6 rounded-lg border-2 transition-all cursor-pointer text-center ${
            !hasActiveFilters
              ? 'bg-blue-600 text-white border-blue-700 shadow-md'
              : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
          }`}
        >
          <div className="text-4xl mb-2">📊</div>
          <div className="text-3xl font-bold mb-1">{totalCount}</div>
          <div className="text-sm font-medium">Total Strategies</div>
        </button>

        {/* Quick Wins */}
        <button
          onClick={() => onFilterToggle('categories', 'quick-win')}
          className={`p-6 rounded-lg transition-all cursor-pointer text-center ${getCardClasses(
            'categories',
            'quick-win',
            'bg-green-600 border-green-700'
          )}`}
        >
          <div className="text-4xl mb-2">⚡</div>
          <div className="text-3xl font-bold mb-1">14</div>
          <div className="text-sm font-medium">
            {isFilterActive('categories', 'quick-win') && '✓ '}Quick Wins
          </div>
        </button>

        {/* Strategic Investments */}
        <button
          onClick={() => onFilterToggle('categories', 'strategic-investment')}
          className={`p-6 rounded-lg transition-all cursor-pointer text-center ${getCardClasses(
            'categories',
            'strategic-investment',
            'bg-amber-600 border-amber-700'
          )}`}
        >
          <div className="text-4xl mb-2">🏗️</div>
          <div className="text-3xl font-bold mb-1">5</div>
          <div className="text-sm font-medium">
            {isFilterActive('categories', 'strategic-investment') && '✓ '}Strategic Investments
          </div>
        </button>

        {/* Implementation Phases */}
        <div className="p-6 rounded-lg border-2 border-gray-300 bg-gray-50 text-center">
          <div className="text-4xl mb-2">📅</div>
          <div className="text-3xl font-bold mb-1 text-gray-900">3</div>
          <div className="text-sm font-medium text-gray-700">Implementation Phases</div>
        </div>
      </div>

      {/* Row 2: Filter Buttons - Desktop */}
      <div className="hidden md:flex flex-wrap gap-3 justify-center mb-4">
        <button
          onClick={() => onFilterToggle('phases', 1)}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${getCardClasses(
            'phases',
            1,
            'bg-green-600 border-green-700'
          )}`}
        >
          {isFilterActive('phases', 1) && '✓ '}Phase 1 (Months 1-3)
        </button>

        <button
          onClick={() => onFilterToggle('phases', 2)}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${getCardClasses(
            'phases',
            2,
            'bg-amber-600 border-amber-700'
          )}`}
        >
          {isFilterActive('phases', 2) && '✓ '}Phase 2 (Months 4-6)
        </button>

        <button
          onClick={() => onFilterToggle('phases', 3)}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${getCardClasses(
            'phases',
            3,
            'bg-blue-600 border-blue-700'
          )}`}
        >
          {isFilterActive('phases', 3) && '✓ '}Phase 3 (Months 7-12)
        </button>

        <button
          onClick={() => onFilterToggle('value', 'high')}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${getCardClasses(
            'value',
            'high',
            'bg-yellow-600 border-yellow-700'
          )}`}
        >
          {isFilterActive('value', 'high') && '✓ '}High+ Value
        </button>

        <button
          onClick={() => onFilterToggle('effort', 'minimal')}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${getCardClasses(
            'effort',
            'minimal',
            'bg-blue-600 border-blue-700'
          )}`}
        >
          {isFilterActive('effort', 'minimal') && '✓ '}Minimal Effort
        </button>

        <button
          onClick={() => onFilterToggle('objectives', 'bar-sales')}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${getCardClasses(
            'objectives',
            'bar-sales',
            'bg-purple-600 border-purple-700'
          )}`}
        >
          {isFilterActive('objectives', 'bar-sales') && '✓ '}Bar Sales
        </button>

        <button
          onClick={() => onFilterToggle('objectives', 'lunch')}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${getCardClasses(
            'objectives',
            'lunch',
            'bg-blue-600 border-blue-700'
          )}`}
        >
          {isFilterActive('objectives', 'lunch') && '✓ '}Lunch Business
        </button>

        <button
          onClick={() => onFilterToggle('objectives', 'neighborhood')}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${getCardClasses(
            'objectives',
            'neighborhood',
            'bg-green-600 border-green-700'
          )}`}
        >
          {isFilterActive('objectives', 'neighborhood') && '✓ '}Neighborhood
        </button>

        <button
          onClick={() => onFilterToggle('objectives', 'doordash')}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${getCardClasses(
            'objectives',
            'doordash',
            'bg-red-600 border-red-700'
          )}`}
        >
          {isFilterActive('objectives', 'doordash') && '✓ '}DoorDash Growth
        </button>
      </div>

      {/* Row 2: Filter Dropdown - Mobile */}
      <div className="md:hidden mb-4">
        <select
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-base"
          onChange={(e) => {
            const [filterType, value] = e.target.value.split(':');
            if (filterType && value) {
              const numValue = ['1', '2', '3'].includes(value) ? parseInt(value) : value;
              onFilterToggle(filterType, numValue);
            }
          }}
          value=""
        >
          <option value="">Select a filter...</option>
          <optgroup label="Phase">
            <option value="phases:1">Phase 1 (Months 1-3)</option>
            <option value="phases:2">Phase 2 (Months 4-6)</option>
            <option value="phases:3">Phase 3 (Months 7-12)</option>
          </optgroup>
          <optgroup label="Value & Effort">
            <option value="value:high">High+ Value</option>
            <option value="effort:minimal">Minimal Effort</option>
          </optgroup>
          <optgroup label="Objectives">
            <option value="objectives:bar-sales">Bar Sales</option>
            <option value="objectives:lunch">Lunch Business</option>
            <option value="objectives:neighborhood">Neighborhood</option>
            <option value="objectives:doordash">DoorDash Growth</option>
          </optgroup>
        </select>

        {/* Show active filters on mobile */}
        {hasActiveFilters && (
          <div className="mt-3 flex flex-wrap gap-2">
            {activeFilters.categories.map((cat) => (
              <span
                key={cat}
                className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full"
              >
                {cat === 'quick-win' ? '⚡ Quick Wins' : '🏗️ Strategic'}
                <button onClick={() => onFilterToggle('categories', cat)} className="ml-1 font-bold">
                  ×
                </button>
              </span>
            ))}
            {activeFilters.phases.map((phase) => (
              <span
                key={phase}
                className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
              >
                Phase {phase}
                <button onClick={() => onFilterToggle('phases', phase)} className="ml-1 font-bold">
                  ×
                </button>
              </span>
            ))}
            {activeFilters.objectives.map((obj) => (
              <span
                key={obj}
                className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full"
              >
                {obj.charAt(0).toUpperCase() + obj.slice(1)}
                <button onClick={() => onFilterToggle('objectives', obj)} className="ml-1 font-bold">
                  ×
                </button>
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Results Counter and Clear Filters */}
      <div className="flex items-center justify-between text-base text-gray-600">
        <div>
          Showing <strong>{filteredCount}</strong> of <strong>{totalCount}</strong> strategies
        </div>
        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="text-red-600 hover:text-red-800 font-medium flex items-center gap-1"
          >
            <span>✕</span> Clear All Filters
          </button>
        )}
      </div>
    </section>
  );
}
