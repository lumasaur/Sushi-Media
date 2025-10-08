'use client';

import { Strategy, CATEGORY_LABELS, EFFORT_SCORE, VALUE_SCORE } from '@/lib/types';
import { getStrategyCategory, getStrategyPhase, getCategoryIcon } from '@/lib/strategy-helpers';
import { EffortDots } from './EffortDots';
import { ValueStars } from './ValueStars';

interface StrategyDetailProps {
  strategy: Strategy;
  onClose: () => void;
}

export function StrategyDetail({ strategy, onClose }: StrategyDetailProps) {
  const category = getStrategyCategory(strategy);
  const phase = getStrategyPhase(strategy);
  const categoryIcon = getCategoryIcon(category);
  const effortScore = EFFORT_SCORE[strategy.effort];
  const valueScore = VALUE_SCORE[strategy.value];

  const objectiveColors = {
    'bar-sales': 'bg-purple-500',
    lunch: 'bg-blue-500',
    neighborhood: 'bg-green-500',
    events: 'bg-orange-500',
    doordash: 'bg-red-500',
  };

  const categoryBadgeColors = {
    'quick-win': 'bg-green-600',
    'strategic-investment': 'bg-amber-600',
    standard: 'bg-blue-600',
  };

  const phaseColors = {
    1: 'bg-green-600',
    2: 'bg-amber-600',
    3: 'bg-blue-600',
  };

  // Calculate financial estimates based on value score
  const getRevenueEstimate = () => {
    if (valueScore === 5) return { monthly: '$15,000+', annual: '$180,000+' };
    if (valueScore === 4) return { monthly: '$8,000-15,000', annual: '$96,000-180,000' };
    if (valueScore === 3) return { monthly: '$3,000-8,000', annual: '$36,000-96,000' };
    return { monthly: '$1,000-3,000', annual: '$12,000-36,000' };
  };

  const getInvestmentEstimate = () => {
    if (effortScore <= 2) return '$500-2,000';
    if (effortScore === 3) return '$2,000-8,000';
    return '$8,000-20,000';
  };

  const getTimeline = () => {
    if (effortScore === 1) return '1 week';
    if (effortScore === 2) return '2-3 weeks';
    if (effortScore === 3) return '1-2 months';
    if (effortScore === 4) return '2-3 months';
    return '3+ months';
  };

  const getROI = () => {
    if (valueScore === 5 && effortScore <= 2) return '800-1200%';
    if (valueScore === 5 && effortScore === 3) return '300-600%';
    if (valueScore === 5 && effortScore >= 4) return '150-300%';
    if (valueScore === 4 && effortScore <= 2) return '400-800%';
    if (valueScore === 4 && effortScore === 3) return '200-400%';
    if (valueScore === 4 && effortScore >= 4) return '100-200%';
    if (valueScore === 3) return '100-300%';
    return '50-150%';
  };

  const revenue = getRevenueEstimate();

  return (
    <div className="bg-gray-900 border-2 border-gray-700 rounded-lg p-8 shadow-lg animate-fadeIn">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="text-sm text-red-400 hover:text-red-300 font-medium mb-4 flex items-center gap-1"
      >
        ← Back to Strategy List
      </button>

      {/* Header Section */}
      <div className="border-b-2 border-gray-700 pb-6 mb-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-white mb-3">
              {strategy.id} - {strategy.name}
            </h2>
            <div className="flex flex-wrap gap-2">
              <span className={`px-3 py-1 text-xs font-medium text-white rounded-full ${objectiveColors[strategy.category]}`}>
                {CATEGORY_LABELS[strategy.category]}
              </span>
              <span className={`px-3 py-1 text-xs font-bold text-white rounded ${phaseColors[phase]}`}>
                Phase {phase}
              </span>
              {categoryIcon && (
                <span className={`px-3 py-1 text-xs font-bold text-white rounded ${categoryBadgeColors[category]}`}>
                  {categoryIcon} {category === 'quick-win' ? 'Quick Win' : category === 'strategic-investment' ? 'Strategic Investment' : 'Standard'}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <span className="text-base font-medium text-gray-300">Implementation Effort:</span>
            <div className="flex items-center gap-2">
              <EffortDots level={strategy.effort} />
              <span className="text-sm text-gray-400 capitalize">({strategy.effort})</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-base font-medium text-gray-300">Potential Business Value:</span>
            <div className="flex items-center gap-2">
              <ValueStars level={strategy.value} />
              <span className="text-sm text-gray-400 capitalize">({strategy.value})</span>
            </div>
          </div>
        </div>
      </div>

      {/* Executive Summary */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold text-white mb-3">Executive Summary</h3>
        <p className="text-base leading-relaxed text-gray-300">{strategy.rationale}</p>
      </section>

      {/* Competitive Context + Success Metrics - Side by Side */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Competitive Context */}
        <section className="bg-gray-800 border-l-4 border-blue-500 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Competitive Context</h3>

          <div className="mb-4">
            <h4 className="text-lg font-medium text-gray-200 mb-2 flex items-center gap-2">
              <span className="text-green-400">✓</span> Strategic Advantages
            </h4>
            <ul className="space-y-2 text-base text-gray-300 ml-6">
              <li className="list-disc">First-mover advantage in local market</li>
              <li className="list-disc">Leverages existing customer relationships</li>
              <li className="list-disc">Difficult for competitors to replicate quickly</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium text-gray-200 mb-2 flex items-center gap-2">
              <span className="text-amber-400">⚠</span> Implementation Risks
            </h4>
            <ul className="space-y-2 text-base text-gray-300 ml-6">
              <li className="list-disc">
                <span className="font-medium">Execution consistency required</span>
                <br />
                <span className="text-sm italic">Mitigation: Weekly performance reviews and staff accountability</span>
              </li>
              <li className="list-disc">
                <span className="font-medium">Customer adoption may vary</span>
                <br />
                <span className="text-sm italic">Mitigation: Pilot testing and iterative refinement based on feedback</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Success Metrics & KPIs */}
        <section className="bg-gray-800 border-l-4 border-purple-500 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Success Metrics & KPIs</h3>
          <ul className="space-y-3 text-base text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-lg">✓</span>
              <span>Monthly incremental revenue tracking with direct attribution</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-lg">✓</span>
              <span>Customer participation rates and repeat visit frequency</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-lg">✓</span>
              <span>Operational efficiency metrics (time investment, resource utilization)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-lg">✓</span>
              <span>Customer satisfaction scores and feedback sentiment analysis</span>
            </li>
          </ul>
        </section>
      </div>

      {/* Implementation Roadmap - Horizontal Layout */}
      <section className="mb-8 bg-gray-800 border-l-4 border-green-500 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-white mb-4">Implementation Roadmap</h3>

        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <div className="mb-4">
              <span className="text-lg font-medium text-red-400">Timeline: {getTimeline()}</span>
            </div>
            <h4 className="text-base font-medium text-gray-200 mb-2">Dependencies</h4>
            <p className="text-base text-gray-300">None - can be implemented independently</p>
          </div>

          <div>
            <h4 className="text-base font-medium text-gray-200 mb-2">Required Resources</h4>
            <ul className="space-y-1 text-base text-gray-300 ml-6">
              <li className="list-disc">Marketing materials and promotional content</li>
              <li className="list-disc">Staff training and briefing sessions</li>
              <li className="list-disc">Tracking and measurement systems</li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-medium text-gray-200 mb-2">Week-by-Week Plan</h4>
            <ul className="space-y-1 text-base text-gray-300">
              <li><strong>Week 1:</strong> Planning, resource preparation, design materials</li>
              <li><strong>Week 2:</strong> Staff training, system setup, soft launch preparation</li>
              <li><strong>Week 3+:</strong> Launch, monitor performance, gather feedback, iterate</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business Case Financials - LAST SECTION */}
      <section className="mb-8 bg-gray-800 border-l-4 border-amber-500 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-white mb-4">Business Case Financials</h3>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="flex justify-between">
            <span className="font-medium text-gray-300">Monthly Incremental Revenue:</span>
            <span className="font-bold text-white">{revenue.monthly}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-300">Annual Revenue Impact:</span>
            <span className="font-bold text-white">{revenue.annual}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-300">Estimated Investment:</span>
            <span className="font-bold text-white">{getInvestmentEstimate()}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-300">Resource Intensity:</span>
            <span className="font-bold text-white capitalize">{strategy.effort}</span>
          </div>
          <div className="flex justify-between md:col-span-2">
            <span className="font-medium text-gray-300">First 12 Months ROI:</span>
            <span className="font-bold text-red-400 text-lg">{getROI()}</span>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-base font-medium text-gray-200 mb-2">Effort Justification ({strategy.effort} rating)</h4>
          <p className="text-base text-gray-300 leading-relaxed">
            {strategy.description}
          </p>
        </div>

        <div>
          <h4 className="text-base font-medium text-gray-200 mb-2">Value Justification ({strategy.value} rating)</h4>
          <p className="text-base text-gray-300 leading-relaxed">
            {strategy.rationale}
          </p>
        </div>
      </section>

      {/* Footer Actions */}
      <div className="border-t-2 border-gray-700 pt-6">
        <button
          onClick={onClose}
          className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          ← Back to Strategy List
        </button>
      </div>
    </div>
  );
}
