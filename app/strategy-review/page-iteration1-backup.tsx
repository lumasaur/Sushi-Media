import { StrategyTableSection } from './components/StrategyTableSection';
import { StatisticCard } from './components/StatisticCard';
import { PhaseCard } from './components/PhaseCard';
import { CTAButtons } from './components/CTAButtons';

export const metadata = {
  title: 'Marketing Strategy Deep Dive | Ami Sushi',
  description: 'Comprehensive 50-strategy portfolio with prioritized implementation roadmap'
};

export default function StrategyReviewPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Segment 1: Strategic Framework Introduction */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Marketing Strategy Enhancement Framework
        </h1>

        <p className="text-xl text-gray-600 mb-8">
          Systematic Revenue Optimization Through Prioritized Strategic Initiatives
        </p>

        <div className="prose prose-lg max-w-none">
          <p className="mb-4 text-gray-700 leading-relaxed">
            This framework organizes 50 marketing initiatives across five strategic objectives: Bar Sales Growth, Lunch Business Development, Neighborhood Positioning, Events Calendar Strategy, and DoorDash Platform Optimization. Each initiative evaluated through two-dimensional prioritization matrix assessing Implementation Effort against Potential Business Value.
          </p>

          <p className="mb-4 text-gray-700 leading-relaxed">
            The analytical approach identifies 14 &quot;Quick Win&quot; opportunities combining minimal implementation effort with high business value, alongside 5 &quot;Strategic Investment&quot; initiatives creating sustainable competitive advantages despite significant resource requirements. This balance enables near-term cash generation funding long-term capability building.
          </p>
        </div>

        {/* Market Context Callout */}
        <div className="bg-gray-50 border-l-4 border-red-700 p-6 my-8">
          <h3 className="text-lg font-bold mb-2">Market Positioning Imperative</h3>
          <p className="text-gray-700 leading-relaxed">
            Ami Sushi & Bar occupies strategic inflection point transitioning from casual operation toward premium positioning. Four underutilized assets present addressable opportunity: temporal capacity gaps (Sunday/Monday evenings, weekday lunch), geographic proximity to apartment complexes and corporate office parks, nascent digital platform presence, and unfulfilled neighborhood gathering spot potential.
          </p>
        </div>

        {/* Methodology Explainer */}
        <div className="my-8">
          <h3 className="text-2xl font-bold mb-6">Prioritization Methodology</h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Effort Dimension */}
            <div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900">Implementation Effort Assessment</h4>
              <p className="text-sm text-gray-600 mb-4">
                Quantifies total resource consumption including financial capital, operational complexity, time horizon, and organizational change management requirements.
              </p>
              <div className="space-y-2">
                {[
                  { level: 'Minimal', description: 'Executable within 1 week using existing resources' },
                  { level: 'Low', description: '2-3 week implementation; basic coordination required' },
                  { level: 'Medium', description: '1-2 month timeline; moderate investment and process adaptation' },
                  { level: 'High', description: '2-3 month commitment; significant operational integration' },
                  { level: 'Very High', description: '3+ months; substantial capital or business model adaptation' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-3 rounded border border-gray-200">
                    <div className="font-semibold text-sm text-gray-900">{item.level}</div>
                    <div className="text-xs text-gray-600">{item.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Value Dimension */}
            <div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900">Potential Business Value Assessment</h4>
              <p className="text-sm text-gray-600 mb-4">
                Expected impact across direct revenue generation, customer lifetime value enhancement, competitive positioning, strategic optionality, and operational efficiency.
              </p>
              <div className="space-y-2">
                {[
                  { level: 'Minimal', description: 'Marginal impact; primarily exploratory' },
                  { level: 'Low', description: '$1,000-3,000 monthly incremental revenue potential' },
                  { level: 'Medium', description: '$3,000-8,000 monthly revenue opportunity' },
                  { level: 'High', description: '$8,000-15,000 monthly potential' },
                  { level: 'Very High', description: '$15,000+ monthly; transformational opportunity' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-3 rounded border border-gray-200">
                    <div className="font-semibold text-sm text-gray-900">{item.level}</div>
                    <div className="text-xs text-gray-600">{item.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Segment 2: Portfolio Overview & Quick Insights */}
      <section className="max-w-7xl mx-auto px-6 py-12 bg-white">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Strategy Portfolio Composition
        </h2>

        {/* Portfolio Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <StatisticCard
            label="Total Strategies"
            value="50"
            icon="📊"
            description="Comprehensive initiatives across five objectives"
            color="blue"
          />
          <StatisticCard
            label="Quick Wins"
            value="14"
            icon="⚡"
            description="Low-effort, high-value immediate opportunities"
            color="green"
            emphasis={true}
          />
          <StatisticCard
            label="Strategic Investments"
            value="5"
            icon="🏗️"
            description="Transformational initiatives creating competitive moats"
            color="amber"
            emphasis={true}
          />
          <StatisticCard
            label="Implementation Phases"
            value="3"
            icon="📅"
            description="12-month sequential deployment timeline"
            color="purple"
          />
        </div>

        {/* Quick Wins Highlight */}
        <div className="bg-green-50 border-2 border-green-500 rounded-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-green-900 mb-4 flex items-center">
            <span className="mr-2">⚡</span>
            Quick Wins: Immediate-Impact Opportunities
          </h3>
          <p className="text-gray-700 mb-6">
            14 strategies (28% of portfolio) combining minimal/low implementation effort with high/very high business value. These initiatives generate near-term cash flow funding Strategic Investment deployment.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {[
              {
                id: '1.2',
                name: 'Mid-Week Happy Hour',
                objective: 'Bar Sales',
                effort: 'Minimal',
                value: 'High',
                impact: '$2,000 weekly incremental revenue; 30+ customers during 4-7 PM window'
              },
              {
                id: '2.7',
                name: 'Google My Business Lunch Optimization',
                objective: 'Lunch Business',
                effort: 'Minimal',
                value: 'High',
                impact: 'First-page ranking for "lunch near me"; 100+ Google-sourced inquiries monthly'
              },
              {
                id: '5.1',
                name: 'DoorDash SEO & Keyword Optimization',
                objective: 'DoorDash Growth',
                effort: 'Low',
                value: 'High',
                impact: '30% discoverability increase; first-page ranking for "sushi" searches'
              }
            ].map((strategy) => (
              <div key={strategy.id} className="bg-white rounded-lg p-4 border border-green-300">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-green-700 bg-green-100 px-2 py-1 rounded">{strategy.id}</span>
                  <span className="text-xs text-gray-500">{strategy.objective}</span>
                </div>
                <h4 className="font-semibold text-sm mb-2">{strategy.name}</h4>
                <div className="flex gap-2 mb-2">
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">Effort: {strategy.effort}</span>
                  <span className="text-xs bg-green-100 px-2 py-1 rounded">Value: {strategy.value}</span>
                </div>
                <p className="text-xs text-gray-600">{strategy.impact}</p>
              </div>
            ))}
          </div>

          <p className="text-sm text-green-900 font-medium">
            → View complete Quick Wins analysis in strategy table below
          </p>
        </div>

        {/* Strategic Investments Highlight */}
        <div className="bg-amber-50 border-2 border-amber-500 rounded-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-amber-900 mb-4 flex items-center">
            <span className="mr-2">🏗️</span>
            Strategic Investments: Transformational Opportunities
          </h3>
          <p className="text-gray-700 mb-6">
            5 initiatives (10% of portfolio count) representing concentrated impact potential. Despite high implementation effort, these create sustainable competitive advantages with 12-18 month replication barriers.
          </p>

          <div className="space-y-4 mb-6">
            {[
              {
                id: '2.1',
                name: 'Corporate Office Direct Outreach',
                pillar: 'Relationship Infrastructure',
                barrier: 'Personal relationship building creates high switching friction',
                impact: '$25,000+ quarterly B2B revenue from recurring corporate accounts'
              },
              {
                id: '5.2',
                name: 'Professional Food Photography Investment',
                pillar: 'Visual Quality Infrastructure',
                barrier: 'One-time investment creating lasting platform conversion advantage',
                impact: '40% view-to-order conversion improvement across all delivery platforms'
              }
            ].map((strategy) => (
              <div key={strategy.id} className="bg-white rounded-lg p-4 border border-amber-300">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-amber-700 bg-amber-100 px-2 py-1 rounded">{strategy.id}</span>
                  <span className="text-xs text-gray-500">{strategy.pillar}</span>
                </div>
                <h4 className="font-semibold text-sm mb-2">{strategy.name}</h4>
                <p className="text-xs text-gray-600 mb-2">
                  <strong>Barrier:</strong> {strategy.barrier}
                </p>
                <p className="text-xs text-amber-900 font-medium">
                  <strong>Impact:</strong> {strategy.impact}
                </p>
              </div>
            ))}
          </div>

          <p className="text-sm text-amber-900 font-medium">
            → Explore all Strategic Investments in detail view
          </p>
        </div>
      </section>

      {/* Segment 3: Implementation Phasing Overview */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          Three-Phase Implementation Roadmap
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Strategic sequencing balances near-term revenue generation (Quick Wins) with long-term competitive advantage building (Strategic Investments). Phase 1 creates cash flow and execution credibility funding Phase 2-3 deployment.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <PhaseCard
            phaseNumber={1}
            name="Momentum Building Through Quick Wins"
            duration="Months 1-3"
            strategyCount={12}
            investment="$5,000-8,000"
            expectedRevenue="$15,000-25,000 monthly incremental"
            roi="Break-even Month 2-3"
            strategyExamples={[
              '1.2 Mid-Week Happy Hour',
              '1.7 Cocktail Flight Program',
              '2.3 Corporate Lunch Packages',
              '3.6 Resident Loyalty Program',
              '5.1 DoorDash SEO Optimization'
            ]}
            keyOutcomes={[
              'Immediate revenue generation',
              'Stakeholder confidence through visible success',
              'Execution capability validation',
              'Cash flow funding Phase 2 investments'
            ]}
          />

          <PhaseCard
            phaseNumber={2}
            name="Strategic Investment Initiation"
            duration="Months 4-6"
            strategyCount={5}
            investment="$15,000-25,000"
            expectedRevenue="$8,000-12,000 monthly (ramp-up period)"
            roi="Break-even Month 8-10"
            strategyExamples={[
              '2.1 Corporate Direct Outreach',
              '2.4 DoorDash Photography',
              '3.1 Apartment Partnership',
              '4.1 Competitive Calendar Analysis',
              '5.2 Professional Photography'
            ]}
            keyOutcomes={[
              'Foundation-building in high-leverage areas',
              'Sustainable competitive advantages creation',
              '12-18 month replication barriers establishment',
              'Platform for Phase 3 expansion'
            ]}
          />

          <PhaseCard
            phaseNumber={3}
            name="Portfolio Expansion & Optimization"
            duration="Months 7-12"
            strategyCount={10}
            investment="$10,000-18,000"
            expectedRevenue="$20,000-35,000 monthly incremental"
            roi="Cumulative Year 1 ROI: 488-782%"
            strategyExamples={[
              '1.3 Signature Cocktail Program',
              '2.6 Lunch Club Subscription',
              '3.3 Walkable Distance Campaign',
              '4.3 Off-Peak Event Programming',
              '5.4 DoorDash Promotional Calendar'
            ]}
            keyOutcomes={[
              'Mature, diversified revenue portfolio',
              'Multiple simultaneous growth engines',
              'Market leadership consolidation',
              'Scalable operations infrastructure'
            ]}
          />
        </div>

        {/* Investment Summary */}
        <div className="bg-gray-100 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">12-Month Financial Overview</h3>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { metric: 'Total Investment', value: '$30,000-51,000' },
              { metric: 'Year 1 Incremental Revenue', value: '$300,000-450,000 cumulative' },
              { metric: 'Break-Even Timeline', value: 'Month 3-4' },
              { metric: '12-Month ROI', value: '488-782%' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-4 rounded">
                <div className="text-sm text-gray-600">{item.metric}</div>
                <div className="text-xl font-bold text-red-700">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Segment 4: Interactive Strategy Table */}
      <StrategyTableSection />

      {/* Segment 5: Success Framework & Next Steps */}
      <section className="max-w-7xl mx-auto px-6 py-12 bg-white">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Implementation Success Framework
        </h2>

        {/* Performance Expectations */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Performance Expectations</h3>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Phase 1 Expectations */}
            <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                  1
                </div>
                <div className="font-bold text-green-900">Months 1-3</div>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="text-xs text-green-700 font-semibold mb-1">Revenue Target</div>
                  <div className="text-lg font-bold text-green-900">$15K-25K/month</div>
                </div>
                <div>
                  <div className="text-xs text-green-700 font-semibold mb-1">Success Indicator</div>
                  <div className="text-sm text-gray-700">Visible revenue growth from Quick Wins</div>
                </div>
                <div>
                  <div className="text-xs text-green-700 font-semibold mb-1">Key Milestone</div>
                  <div className="text-sm text-gray-700">Break-even by Month 2-3</div>
                </div>
              </div>
            </div>

            {/* Phase 2 Expectations */}
            <div className="bg-amber-50 border-2 border-amber-500 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold">
                  2
                </div>
                <div className="font-bold text-amber-900">Months 4-6</div>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="text-xs text-amber-700 font-semibold mb-1">Revenue Target</div>
                  <div className="text-lg font-bold text-amber-900">$8K-12K/month</div>
                </div>
                <div>
                  <div className="text-xs text-amber-700 font-semibold mb-1">Success Indicator</div>
                  <div className="text-sm text-gray-700">Strategic foundation established</div>
                </div>
                <div>
                  <div className="text-xs text-amber-700 font-semibold mb-1">Key Milestone</div>
                  <div className="text-sm text-gray-700">Competitive advantages built</div>
                </div>
              </div>
            </div>

            {/* Phase 3 Expectations */}
            <div className="bg-blue-50 border-2 border-blue-500 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  3
                </div>
                <div className="font-bold text-blue-900">Months 7-12</div>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="text-xs text-blue-700 font-semibold mb-1">Revenue Target</div>
                  <div className="text-lg font-bold text-blue-900">$20K-35K/month</div>
                </div>
                <div>
                  <div className="text-xs text-blue-700 font-semibold mb-1">Success Indicator</div>
                  <div className="text-sm text-gray-700">Diversified revenue portfolio</div>
                </div>
                <div>
                  <div className="text-xs text-blue-700 font-semibold mb-1">Key Milestone</div>
                  <div className="text-sm text-gray-700">Market leadership position</div>
                </div>
              </div>
            </div>
          </div>

          {/* Cumulative Year 1 */}
          <div className="bg-red-50 border-2 border-red-700 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-red-900 mb-1">Year 1 Cumulative Results</div>
                <div className="text-xs text-red-700">Based on sequential phase deployment</div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-red-700 mb-1">$300K-450K</div>
                <div className="text-sm text-red-900">Total Incremental Revenue</div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-red-200">
              <div>
                <div className="text-xs text-red-700">Total Investment</div>
                <div className="text-lg font-bold text-red-900">$30K-51K</div>
              </div>
              <div>
                <div className="text-xs text-red-700">Net Profit Impact</div>
                <div className="text-lg font-bold text-red-900">$250K-400K</div>
              </div>
              <div>
                <div className="text-xs text-red-700">12-Month ROI</div>
                <div className="text-lg font-bold text-red-900">488-782%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Implementation Checklist */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Implementation Readiness Checklist</h3>

          <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
            <div className="space-y-4">
              {[
                {
                  category: 'Strategic Alignment',
                  items: [
                    'Leadership team aligned on portfolio priorities',
                    'Phase 1 Quick Wins identified and sequenced',
                    'Success metrics and KPIs defined for each initiative'
                  ]
                },
                {
                  category: 'Resource Readiness',
                  items: [
                    'Budget allocated for Phase 1 deployment ($5K-8K)',
                    'Staff training plan developed for new initiatives',
                    'Marketing materials and communication templates prepared'
                  ]
                },
                {
                  category: 'Execution Infrastructure',
                  items: [
                    'Project management system established for tracking',
                    'Weekly review cadence scheduled with stakeholders',
                    'Customer feedback mechanism implemented'
                  ]
                },
                {
                  category: 'Performance Monitoring',
                  items: [
                    'Baseline metrics captured for comparison',
                    'Dashboard or reporting system configured',
                    'Trigger points defined for strategy adjustments'
                  ]
                }
              ].map((section, idx) => (
                <div key={idx} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                  <h4 className="font-semibold text-gray-900 mb-3">{section.category}</h4>
                  <div className="space-y-2">
                    {section.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-start gap-3">
                        <div className="mt-0.5">
                          <div className="w-5 h-5 rounded border-2 border-gray-400 flex items-center justify-center">
                            <span className="text-xs text-gray-400">✓</span>
                          </div>
                        </div>
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Post-Phase 3 Decision Pathways */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Post-Phase 3 Decision Pathways</h3>
          <p className="text-gray-600 mb-6">
            After completing all three implementation phases, evaluate portfolio performance and select strategic direction:
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Pathway 1: Scale Success */}
            <div className="bg-white border-2 border-green-500 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="text-2xl">📈</div>
                <h4 className="text-lg font-bold text-green-900">Scale Success</h4>
              </div>
              <p className="text-sm text-gray-700 mb-4">
                ROI exceeds expectations ({">"} 600%). Double down on highest-performing initiatives.
              </p>
              <div className="space-y-2">
                <div className="text-xs font-semibold text-green-900">Next Steps:</div>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Increase investment in top 5 performers</li>
                  <li>• Expand successful strategies to new customer segments</li>
                  <li>• Develop second-generation initiatives</li>
                </ul>
              </div>
            </div>

            {/* Pathway 2: Optimize Portfolio */}
            <div className="bg-white border-2 border-amber-500 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="text-2xl">⚙️</div>
                <h4 className="text-lg font-bold text-amber-900">Optimize Portfolio</h4>
              </div>
              <p className="text-sm text-gray-700 mb-4">
                ROI meets expectations (400-600%). Refine and optimize existing portfolio.
              </p>
              <div className="space-y-2">
                <div className="text-xs font-semibold text-amber-900">Next Steps:</div>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Sunset underperforming initiatives</li>
                  <li>• A/B test variations on moderate performers</li>
                  <li>• Improve operational efficiency</li>
                </ul>
              </div>
            </div>

            {/* Pathway 3: Strategic Pivot */}
            <div className="bg-white border-2 border-red-500 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="text-2xl">🔄</div>
                <h4 className="text-lg font-bold text-red-900">Strategic Pivot</h4>
              </div>
              <p className="text-sm text-gray-700 mb-4">
                ROI below expectations ({"<"} 400%). Conduct strategic review and adjust approach.
              </p>
              <div className="space-y-2">
                <div className="text-xs font-semibold text-red-900">Next Steps:</div>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Analyze root causes of underperformance</li>
                  <li>• Identify market or execution gaps</li>
                  <li>• Develop alternative strategy set</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-red-50 to-amber-50 border-2 border-red-700 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Begin Implementation?</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Start with Phase 1 Quick Wins to generate immediate revenue and build execution momentum.
            Use the interactive strategy table above to explore specific initiatives and create your deployment plan.
          </p>
          <CTAButtons />
        </div>
      </section>
    </main>
  );
}
