import { strategies } from '@/lib/strategy-data';
import { notFound } from 'next/navigation';
import { getStrategyCategory, getStrategyPhase, getCategoryIcon } from '@/lib/strategy-helpers';
import { CATEGORY_LABELS, EFFORT_SCORE, VALUE_SCORE } from '@/lib/types';
import { BackButton } from '../components/BackButton';

export function generateStaticParams() {
  return strategies.map((strategy) => ({
    id: strategy.id,
  }));
}

export default function StrategyDetailPage({ params }: { params: { id: string } }) {
  const strategy = strategies.find((s) => s.id === params.id);

  if (!strategy) {
    notFound();
  }

  const category = getStrategyCategory(strategy);
  const phase = getStrategyPhase(strategy);
  const categoryIcon = getCategoryIcon(category);
  const effortScore = EFFORT_SCORE[strategy.effort];
  const valueScore = VALUE_SCORE[strategy.value];

  // Determine category color scheme
  const isQuickWin = category === 'quick-win';
  const isStrategicInvestment = category === 'strategic-investment';

  const headerColor = isQuickWin
    ? 'bg-green-50 border-green-500'
    : isStrategicInvestment
    ? 'bg-amber-50 border-amber-500'
    : 'bg-blue-50 border-blue-500';

  const badgeColor = isQuickWin
    ? 'bg-green-600'
    : isStrategicInvestment
    ? 'bg-amber-600'
    : 'bg-blue-600';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className={`${headerColor} border-l-4 p-6`}>
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-bold text-gray-500 bg-white px-2 py-1 rounded">
                {strategy.id}
              </span>
              <span className={`${badgeColor} text-white text-xs font-bold px-3 py-1 rounded`}>
                Phase {phase}
              </span>
              <span className="text-xs font-medium text-gray-600 bg-white px-2 py-1 rounded border border-gray-300">
                {CATEGORY_LABELS[strategy.category]}
              </span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {strategy.name}
            </h1>
            <p className="text-sm text-gray-700">
              {strategy.description}
            </p>
          </div>
          {categoryIcon && (
            <div className="text-4xl ml-4">
              {categoryIcon}
            </div>
          )}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-4 gap-4 mt-6">
          <div className="bg-white rounded p-3 border border-gray-200">
            <div className="text-xs text-gray-600 mb-1">Implementation Effort</div>
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full ${
                      i < effortScore ? 'bg-gray-700' : 'bg-gray-200'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-semibold capitalize">{strategy.effort}</span>
            </div>
          </div>

          <div className="bg-white rounded p-3 border border-gray-200">
            <div className="text-xs text-gray-600 mb-1">Potential Business Value</div>
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-base ${
                      i < valueScore ? 'text-yellow-500' : 'text-gray-300'
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="text-sm font-semibold capitalize">{strategy.value}</span>
            </div>
          </div>

          <div className="bg-white rounded p-3 border border-gray-200">
            <div className="text-xs text-gray-600 mb-1">Category</div>
            <div className="text-sm font-semibold capitalize">
              {category.replace('-', ' ')}
            </div>
          </div>

          <div className="bg-white rounded p-3 border border-gray-200">
            <div className="text-xs text-gray-600 mb-1">Implementation Phase</div>
            <div className="text-sm font-semibold">
              Phase {phase} (Months {phase === 1 ? '1-3' : phase === 2 ? '4-6' : '7-12'})
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="p-6 space-y-6">
        {/* Executive Summary */}
        <section className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Executive Summary</h2>
          <div className="prose prose-sm max-w-none">
            <p className="text-gray-700 leading-relaxed">{strategy.rationale}</p>
          </div>
        </section>

        {/* Business Case Analysis */}
        <section className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Business Case Analysis</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Revenue Potential */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Revenue Potential</h3>
              <div className="bg-gray-50 rounded p-4 space-y-2">
                {valueScore === 5 && (
                  <>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Monthly Incremental Revenue</span>
                      <span className="text-sm font-bold text-green-700">$15,000+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Annual Revenue Impact</span>
                      <span className="text-sm font-bold text-green-700">$180,000+</span>
                    </div>
                  </>
                )}
                {valueScore === 4 && (
                  <>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Monthly Incremental Revenue</span>
                      <span className="text-sm font-bold text-green-700">$8,000-15,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Annual Revenue Impact</span>
                      <span className="text-sm font-bold text-green-700">$96,000-180,000</span>
                    </div>
                  </>
                )}
                {valueScore === 3 && (
                  <>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Monthly Incremental Revenue</span>
                      <span className="text-sm font-bold text-blue-700">$3,000-8,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Annual Revenue Impact</span>
                      <span className="text-sm font-bold text-blue-700">$36,000-96,000</span>
                    </div>
                  </>
                )}
                {valueScore <= 2 && (
                  <>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Monthly Incremental Revenue</span>
                      <span className="text-sm font-bold text-gray-700">$1,000-3,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Annual Revenue Impact</span>
                      <span className="text-sm font-bold text-gray-700">$12,000-36,000</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Implementation Requirements */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Implementation Requirements</h3>
              <div className="bg-gray-50 rounded p-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Timeline</span>
                  <span className="text-sm font-medium">
                    {effortScore === 1 && '1 week'}
                    {effortScore === 2 && '2-3 weeks'}
                    {effortScore === 3 && '1-2 months'}
                    {effortScore === 4 && '2-3 months'}
                    {effortScore === 5 && '3+ months'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Estimated Investment</span>
                  <span className="text-sm font-medium">
                    {effortScore <= 2 && '$500-2,000'}
                    {effortScore === 3 && '$2,000-8,000'}
                    {effortScore >= 4 && '$8,000-20,000'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Resource Intensity</span>
                  <span className="text-sm font-medium capitalize">{strategy.effort}</span>
                </div>
              </div>
            </div>
          </div>

          {/* ROI Calculation */}
          <div className="mt-6 bg-red-50 border border-red-200 rounded p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-red-900">Estimated ROI</div>
                <div className="text-xs text-red-700">First 12 months</div>
              </div>
              <div className="text-2xl font-bold text-red-700">
                {valueScore === 5 && effortScore <= 2 && '800-1200%'}
                {valueScore === 5 && effortScore === 3 && '300-600%'}
                {valueScore === 5 && effortScore >= 4 && '150-300%'}
                {valueScore === 4 && effortScore <= 2 && '400-800%'}
                {valueScore === 4 && effortScore === 3 && '200-400%'}
                {valueScore === 4 && effortScore >= 4 && '100-200%'}
                {valueScore === 3 && '100-300%'}
                {valueScore <= 2 && '50-150%'}
              </div>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Success Metrics & KPIs</h2>

          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded">
              <div className="text-green-600 font-bold text-lg">✓</div>
              <div className="flex-1">
                <div className="text-sm font-semibold text-gray-900">Primary Revenue Metric</div>
                <div className="text-xs text-gray-600">Track monthly incremental revenue directly attributed to this initiative</div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded">
              <div className="text-green-600 font-bold text-lg">✓</div>
              <div className="flex-1">
                <div className="text-sm font-semibold text-gray-900">Customer Engagement</div>
                <div className="text-xs text-gray-600">Monitor customer participation rates, repeat visits, and feedback scores</div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded">
              <div className="text-green-600 font-bold text-lg">✓</div>
              <div className="flex-1">
                <div className="text-sm font-semibold text-gray-900">Operational Efficiency</div>
                <div className="text-xs text-gray-600">Measure time investment, resource utilization, and process improvements</div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Roadmap */}
        <section className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Implementation Roadmap</h2>

          <div className="space-y-4">
            {/* Week 1 */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-sm font-bold">
                  1
                </div>
                <div className="w-0.5 h-full bg-gray-200 mt-2"></div>
              </div>
              <div className="flex-1 pb-6">
                <div className="font-semibold text-sm text-gray-900 mb-1">Planning & Preparation</div>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Define specific goals and success criteria</li>
                  <li>• Identify required resources and stakeholders</li>
                  <li>• Create detailed action plan with milestones</li>
                </ul>
              </div>
            </div>

            {/* Week 2-3 */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-sm font-bold">
                  2
                </div>
                <div className="w-0.5 h-full bg-gray-200 mt-2"></div>
              </div>
              <div className="flex-1 pb-6">
                <div className="font-semibold text-sm text-gray-900 mb-1">Execution & Launch</div>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Implement core initiative components</li>
                  <li>• Train staff on new processes or offerings</li>
                  <li>• Launch marketing and customer communication</li>
                </ul>
              </div>
            </div>

            {/* Ongoing */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-sm font-bold">
                  3
                </div>
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm text-gray-900 mb-1">Monitoring & Optimization</div>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Track KPIs against success metrics</li>
                  <li>• Gather customer feedback and iterate</li>
                  <li>• Optimize based on performance data</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Competitive Context */}
        <section className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Competitive Context</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-green-600">↑</span>
                Strategic Advantages
              </h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• First-mover advantage in local market</li>
                <li>• Leverages existing customer relationships</li>
                <li>• Difficult for competitors to replicate quickly</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-amber-600">⚠</span>
                Implementation Risks
              </h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Requires consistent execution and monitoring</li>
                <li>• Customer adoption may vary by segment</li>
                <li>• ROI timeline depends on market conditions</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-6 border-t border-gray-200">
          <BackButton />
          <div className="text-xs text-gray-500">
            Strategy {strategy.id} • Phase {phase} Implementation
          </div>
        </div>
      </div>
    </div>
  );
}
