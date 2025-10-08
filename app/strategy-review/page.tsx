'use client';

import { useState, useEffect, useRef } from 'react';
import { strategies } from '@/lib/strategy-data';
import { applyExtendedFilters, ExtendedFilterState } from '@/lib/filter-utils';
import { IntroSection } from './components/IntroSection';
import { Phase0Callout } from './components/Phase0Callout';
import { Phase0DetailedSection } from './components/Phase0DetailedSection';
import { PhaseCard } from './components/PhaseCard';
import { PortfolioComposition } from './components/PortfolioComposition';
import { InitiativeCardGrid } from './components/InitiativeCardGrid';
import { StrategyDetail } from './components/StrategyDetail';
import { EmptyDetailState } from './components/EmptyDetailState';
import { CTAButtons } from './components/CTAButtons';

export default function StrategyReviewPage() {
  const [selectedStrategyId, setSelectedStrategyId] = useState<string | null>(null);
  const [filters, setFilters] = useState<ExtendedFilterState>({
    categories: [],
    phases: [],
    objectives: [],
    effort: [],
    value: [],
  });

  const detailViewRef = useRef<HTMLDivElement>(null);
  const initiativeGridRef = useRef<HTMLDivElement>(null);

  const selectedStrategy = strategies.find((s) => s.id === selectedStrategyId);
  const filteredStrategies = applyExtendedFilters(strategies, filters);

  const handleFilterToggle = (filterType: string, value: string | number) => {
    setFilters((prev) => {
      const currentFilters = prev[filterType as keyof ExtendedFilterState] as (string | number)[];
      const valueIndex = currentFilters.indexOf(value as never);

      if (valueIndex > -1) {
        // Remove filter
        return {
          ...prev,
          [filterType]: currentFilters.filter((_, index) => index !== valueIndex),
        };
      } else {
        // Add filter
        return {
          ...prev,
          [filterType]: [...currentFilters, value as never],
        };
      }
    });
  };

  const handleClearFilters = () => {
    setFilters({
      categories: [],
      phases: [],
      objectives: [],
      effort: [],
      value: [],
    });
  };

  const handleStrategySelect = (strategyId: string) => {
    setSelectedStrategyId(strategyId);
  };

  const handleCloseDetail = () => {
    setSelectedStrategyId(null);
    // Scroll back to initiative grid
    setTimeout(() => {
      initiativeGridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  // Scroll to detail view when strategy is selected
  useEffect(() => {
    if (selectedStrategyId && detailViewRef.current) {
      setTimeout(() => {
        detailViewRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [selectedStrategyId]);

  return (
    <main className="min-h-screen bg-[#120c0d]">
      {/* Section 1: Introduction (Ultra-Condensed) */}
      <IntroSection />

      {/* Section 1.5: Phase 0 Callout */}
      <Phase0Callout />

      {/* Section 2: Four-Phase Roadmap (BEFORE Portfolio Composition) */}
      <section id="roadmap" className="max-w-7xl mx-auto px-6 py-8 scroll-mt-20">
        <h2 className="text-3xl font-bold text-white mb-4 text-center">
          Recommended Implementation Sequence
        </h2>
        <p className="text-center text-gray-300 mb-8 max-w-3xl mx-auto text-base">
          This framework suggests starting with infrastructure considerations (Phase 0), then deploying marketing
          initiatives across three phases. Stakeholders can adapt this sequence based on existing capabilities and
          strategic priorities.
        </p>

        {/* Phase 0 - Infrastructure Recommendation */}
        <div className="mb-8 max-w-3xl mx-auto">
          <div className="bg-blue-900/10 border-2 border-blue-500 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl">
                0
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-xl font-bold text-white">Infrastructure Recommendations</h3>
                  <span className="px-3 py-1 bg-blue-600 text-white font-bold rounded-full">
                    RECOMMENDED FIRST STEP
                  </span>
                </div>
                <p className="text-blue-300">Suggested Timeline: Months 0-2</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <span className="text-blue-300">Investment Range:</span>
                <span className="text-white font-semibold ml-2">$5,400-14,700</span>
              </div>
              <div>
                <span className="text-blue-300">Focus:</span>
                <span className="text-white font-semibold ml-2">Measurement, automation, content</span>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-white mb-2">Key Considerations:</h4>
              <ul className="space-y-1 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <span>Customer data capture systems for attribution</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <span>Marketing automation capabilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <span>Digital asset quality (photos, website)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <span>Content planning workflow and analytics setup</span>
                </li>
              </ul>
            </div>

            <p className="italic text-gray-400 mb-3">
              Note: Adapt based on existing capabilities. Can begin Phase 1 immediately or after infrastructure enhancements.
            </p>

            <a
              href="#phase-0-foundation"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition-colors font-semibold"
            >
              View Infrastructure Options →
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <PhaseCard
            phaseNumber={1}
            name="Momentum Building Through Quick Wins"
            duration="Months 1-3"
            strategyCount={12}
            investment="$5,000-8,000"
            expectedRevenue="$15,000-25,000 monthly"
            roi="Break-even Month 2-3"
            strategyExamples={[
              '1.2 Mid-Week Happy Hour',
              '1.7 Cocktail Flight Program',
              '2.3 Corporate Lunch Packages',
              '3.6 Resident Loyalty Program',
              '5.1 DoorDash SEO Optimization',
            ]}
            keyOutcomes={[
              'Immediate revenue generation',
              'Stakeholder confidence through visible success',
              'Execution capability validation',
              'Cash flow funding Phase 2 investments',
            ]}
          />

          <PhaseCard
            phaseNumber={2}
            name="Strategic Investment Initiation"
            duration="Months 4-6"
            strategyCount={5}
            investment="$15,000-25,000"
            expectedRevenue="$8,000-12,000 monthly"
            roi="Break-even Month 8-10"
            strategyExamples={[
              '2.1 Corporate Direct Outreach',
              '2.4 DoorDash Photography',
              '3.1 Apartment Partnership',
              '4.1 Competitive Calendar Analysis',
              '5.2 Professional Photography',
            ]}
            keyOutcomes={[
              'Foundation-building in high-leverage areas',
              'Sustainable competitive advantages creation',
              '12-18 month replication barriers',
              'Platform for Phase 3 expansion',
            ]}
          />

          <PhaseCard
            phaseNumber={3}
            name="Portfolio Expansion & Optimization"
            duration="Months 7-12"
            strategyCount={10}
            investment="$10,000-18,000"
            expectedRevenue="$20,000-35,000 monthly"
            roi="Cumulative Year 1: 488-782%"
            strategyExamples={[
              '1.3 Signature Cocktail Program',
              '2.6 Lunch Club Subscription',
              '3.3 Walkable Distance Campaign',
              '4.3 Off-Peak Event Programming',
              '5.4 DoorDash Promotional Calendar',
            ]}
            keyOutcomes={[
              'Mature, diversified revenue portfolio',
              'Multiple simultaneous growth engines',
              'Market leadership consolidation',
              'Scalable operations infrastructure',
            ]}
          />
        </div>
      </section>

      {/* Section 2.5: Detailed Phase 0 Infrastructure Section */}
      <Phase0DetailedSection />

      {/* Section 3: Portfolio Composition (Interactive Filters with Phase Selector) */}
      <PortfolioComposition
        activeFilters={filters}
        onFilterToggle={handleFilterToggle}
        onClearFilters={handleClearFilters}
        filteredCount={filteredStrategies.length}
        totalCount={strategies.length}
      />

      {/* Section 4: Filtered Initiative Cards (Scrollable Grid) */}
      <section ref={initiativeGridRef} className="max-w-7xl mx-auto px-6 py-8" id="initiative-grid">
        <h2 className="text-2xl font-bold text-white mb-4">
          Complete Strategy Portfolio: 50 Initiatives
        </h2>
        <p className="text-gray-300 mb-6 text-base">
          Click any strategy card to view detailed business case analysis. The portfolio is scrollable to manage
          space efficiently.
        </p>

        <InitiativeCardGrid
          strategies={filteredStrategies}
          selectedStrategyId={selectedStrategyId}
          onStrategySelect={handleStrategySelect}
        />
      </section>

      {/* Section 5: Detail View (Inline Expansion) */}
      <section ref={detailViewRef} className="max-w-7xl mx-auto px-6 py-8" id="detail-view">
        {selectedStrategy ? (
          <StrategyDetail strategy={selectedStrategy} onClose={handleCloseDetail} />
        ) : (
          <EmptyDetailState />
        )}
      </section>

      {/* Section 6: Implementation Readiness Checklist */}
      <section id="implementation-checklist" className="max-w-7xl mx-auto px-6 py-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Implementation Readiness Checklist
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Strategic Alignment */}
          <div className="bg-gray-900 border-2 border-gray-700 rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold text-white mb-4">Strategic Alignment</h3>
            <ul className="space-y-2 text-base text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-gray-400 text-lg">☐</span>
                <span>Leadership team aligned on portfolio priorities</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 text-lg">☐</span>
                <span>Phase 1 Quick Wins identified and sequenced</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 text-lg">☐</span>
                <span>Success metrics and KPIs defined for each initiative</span>
              </li>
            </ul>
          </div>

          {/* Resource Readiness */}
          <div className="bg-gray-900 border-2 border-gray-700 rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold text-white mb-4">Resource Readiness</h3>
            <ul className="space-y-2 text-base text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-gray-500 text-lg">☐</span>
                <span>Budget allocated for Phase 1 deployment ($5K-8K)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 text-lg">☐</span>
                <span>Staff training plan developed for new initiatives</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 text-lg">☐</span>
                <span>Marketing materials and communication templates prepared</span>
              </li>
            </ul>
          </div>

          {/* Execution Infrastructure */}
          <div className="bg-gray-900 border-2 border-gray-700 rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold text-white mb-4">Execution Infrastructure</h3>
            <ul className="space-y-2 text-base text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-gray-500 text-lg">☐</span>
                <span>Project management system established for tracking</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 text-lg">☐</span>
                <span>Weekly review cadence scheduled with stakeholders</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 text-lg">☐</span>
                <span>Customer feedback mechanism implemented</span>
              </li>
            </ul>
          </div>

          {/* Performance Monitoring */}
          <div className="bg-gray-900 border-2 border-gray-700 rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold text-white mb-4">Performance Monitoring</h3>
            <ul className="space-y-2 text-base text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-gray-500 text-lg">☐</span>
                <span>Baseline metrics captured for comparison</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 text-lg">☐</span>
                <span>Dashboard or reporting system configured</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 text-lg">☐</span>
                <span>Trigger points defined for strategy adjustments</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 7: Performance Expectations & Financials (Moved Down) */}
      <section className="max-w-7xl mx-auto px-6 py-12 bg-[#120c0d]">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Performance Expectations
        </h2>

        <p className="text-center text-gray-400 mb-6 max-w-3xl mx-auto italic">
          Timeline Note: Phases begin sequentially. If implementing Phase 0 recommendations, add 6-8 weeks before Phase 1 launch.
          If proceeding without Phase 0, begin Phase 1 immediately.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Phase 1 Expectations */}
          <div className="bg-gray-800 border-2 border-green-500 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                1
              </div>
              <div className="font-bold text-green-300">Months 1-3</div>
            </div>
            <div className="space-y-3">
              <div>
                <div className="text-green-400 font-semibold mb-1">Revenue Target</div>
                <div className="text-lg font-bold text-green-200">$15K-25K/month</div>
              </div>
              <div>
                <div className="text-green-400 font-semibold mb-1">Success Indicator</div>
                <div className="text-gray-300">Visible revenue growth from Quick Wins</div>
              </div>
              <div>
                <div className="text-green-400 font-semibold mb-1">Key Milestone</div>
                <div className="text-gray-300">Break-even by Month 2-3</div>
              </div>
            </div>
          </div>

          {/* Phase 2 Expectations */}
          <div className="bg-gray-800 border-2 border-amber-500 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold">
                2
              </div>
              <div className="font-bold text-amber-300">Months 4-6</div>
            </div>
            <div className="space-y-3">
              <div>
                <div className="text-amber-400 font-semibold mb-1">Revenue Target</div>
                <div className="text-lg font-bold text-amber-200">$8K-12K/month</div>
              </div>
              <div>
                <div className="text-amber-400 font-semibold mb-1">Success Indicator</div>
                <div className="text-gray-300">Strategic foundation established</div>
              </div>
              <div>
                <div className="text-amber-400 font-semibold mb-1">Key Milestone</div>
                <div className="text-gray-300">Competitive advantages built</div>
              </div>
            </div>
          </div>

          {/* Phase 3 Expectations */}
          <div className="bg-gray-800 border-2 border-blue-500 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                3
              </div>
              <div className="font-bold text-blue-300">Months 7-12</div>
            </div>
            <div className="space-y-3">
              <div>
                <div className="text-blue-400 font-semibold mb-1">Revenue Target</div>
                <div className="text-lg font-bold text-blue-200">$20K-35K/month</div>
              </div>
              <div>
                <div className="text-blue-400 font-semibold mb-1">Success Indicator</div>
                <div className="text-gray-300">Diversified revenue portfolio</div>
              </div>
              <div>
                <div className="text-blue-400 font-semibold mb-1">Key Milestone</div>
                <div className="text-gray-300">Market leadership position</div>
              </div>
            </div>
          </div>
        </div>

        {/* Program Results - Scenarios */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white text-center">Program Results (Scenarios)</h3>

          {/* Scenario A: With Phase 0 */}
          <div className="bg-gray-800 border-2 border-blue-500 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="font-semibold text-blue-200 mb-1">Scenario A: With Phase 0 Infrastructure (14 Months)</div>
                <div className="text-blue-400">Infrastructure-First Approach</div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-blue-300 mb-1">$300K-450K</div>
                <div className="text-blue-200">Measurable, Attributable Revenue</div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4 pt-4 border-t border-blue-700">
              <div>
                <div className="text-blue-400">Months 0-2</div>
                <div className="text-lg font-bold text-blue-200">$5K-15K</div>
                <div className="text-gray-400">Infrastructure</div>
              </div>
              <div>
                <div className="text-blue-400">Months 3-14</div>
                <div className="text-lg font-bold text-blue-200">$30K-51K</div>
                <div className="text-gray-400">Marketing</div>
              </div>
              <div>
                <div className="text-blue-400">Net Profit</div>
                <div className="text-lg font-bold text-blue-200">$245K-395K</div>
                <div className="text-gray-400">After investment</div>
              </div>
              <div>
                <div className="text-blue-400">Complete Program ROI</div>
                <div className="text-lg font-bold text-blue-200">373-598%</div>
                <div className="text-gray-400">Clear attribution</div>
              </div>
            </div>
            <div className="mt-4 p-3 bg-blue-900/20 rounded text-gray-300">
              <strong>Key Benefit:</strong> Clear attribution and optimization data enables data-driven decisions
            </div>
          </div>

          {/* Scenario B: Direct to Phase 1 */}
          <div className="bg-gray-800 border-2 border-red-700 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="font-semibold text-red-200 mb-1">Scenario B: Direct to Phase 1 (12 Months)</div>
                <div className="text-red-400">Direct-to-Marketing Approach</div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-red-300 mb-1">$300K-450K</div>
                <div className="text-red-200">Estimated Revenue (attribution uncertain)</div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-red-700">
              <div>
                <div className="text-red-400">Total Investment</div>
                <div className="text-lg font-bold text-red-200">$30K-51K</div>
                <div className="text-gray-400">Marketing only</div>
              </div>
            <div>
              <div className="text-red-400">Net Profit Impact</div>
              <div className="text-lg font-bold text-red-200">$250K-400K</div>
              <div className="text-gray-400">Estimated</div>
            </div>
            <div>
              <div className="text-red-400">Marketing ROI</div>
              <div className="text-lg font-bold text-red-200">488-782%</div>
              <div className="text-gray-400">Depends on existing systems</div>
            </div>
          </div>
          <div className="mt-4 p-3 bg-red-900/20 rounded text-gray-300">
            <strong>Key Benefit:</strong> Faster deployment, lower upfront cost, immediate revenue generation
          </div>
        </div>

        {/* Discussion Point */}
        <div className="mt-6 p-6 bg-gray-900 rounded-lg border border-gray-700">
          <p className="text-gray-300 leading-relaxed">
            <strong>Discussion Point:</strong> Both scenarios can generate significant revenue. The primary difference is measurement
            confidence and optimization capability. Stakeholders should evaluate based on current analytics capabilities and strategic
            priorities.
          </p>
        </div>
      </div>
      </section>

      {/* Section 8: CTA Section (Simplified) */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-gradient-to-r from-red-900 to-amber-900 border-2 border-red-700 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Begin Implementation?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto text-base leading-relaxed">
            Start with Phase 1 Quick Wins to generate immediate revenue and build execution momentum. Use the
            interactive strategy cards above to explore specific initiatives and create your deployment plan.
          </p>
          <button
            onClick={() => {
              const portfolioSection = document.querySelector('.max-w-7xl');
              portfolioSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="bg-red-700 hover:bg-red-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            ↑ Back to Strategy Portfolio
          </button>
        </div>
      </section>
    </main>
  );
}
