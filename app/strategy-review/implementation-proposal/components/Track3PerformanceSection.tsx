'use client';

import React from 'react';
import { ExpandableSection } from './ExpandableSection';

export function Track3PerformanceSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex items-center gap-4 mb-10">
        <span className="text-6xl">📊</span>
        <div>
          <div className="text-sm text-[#00A86B] font-bold mb-1 tracking-wide">TRACK 3</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Weekly Performance Tracking</h2>
          <p className="text-gray-400 mt-2 text-lg">Measure what's working to optimize and scale</p>
        </div>
      </div>

      {/* The Problem & Solution */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div className="card-dark p-8 shadow-medium">
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <span className="text-3xl">🎯</span>
            The Problem We're Solving
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            Can't improve what we don't measure. Need simple weekly metrics to know which events perform, which lunch accounts matter,
            and where to focus energy.
          </p>
        </div>

        <div className="card-dark p-8 shadow-medium border-l-4 border-[#00A86B]">
          <h3 className="text-2xl font-bold text-white mb-4">The Solution</h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            <strong className="text-white">You'll configure Toast POS analytics</strong> and review key metrics every Monday.
            Simple approach: <strong className="text-white">5-7 core metrics</strong>, weekly review, monthly optimization decisions.
          </p>
        </div>
      </div>

      {/* What to Track */}
      <ExpandableSection
        title="What to Track (Your Responsibility)"
        icon="📈"
        badge="high-priority"
        executiveSummary={
          <>
            Track <strong className="text-white">weekly event performance</strong> (revenue vs. baseline, customer count, avg check),
            <strong className="text-white"> lunch delivery metrics</strong> (orders/day, avg size, repeat businesses),
            and <strong className="text-white">overall business trends</strong>. Simple 30-minute Monday morning routine.
          </>
        }
      >
        <div className="space-y-8">
          {/* Weekly Event Performance */}
          <div className="card-dark p-6">
            <h4 className="font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-3xl">🎉</span>
              Weekly Event Performance
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-[#00A86B] text-xl">•</span>
                <div>
                  <div className="font-semibold text-white">Revenue per event night vs. baseline</div>
                  <div className="text-sm text-gray-400">Compare to same day previous week</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00A86B] text-xl">•</span>
                <div>
                  <div className="font-semibold text-white">Customer count per event</div>
                  <div className="text-sm text-gray-400">Track attendance trends</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00A86B] text-xl">•</span>
                <div>
                  <div className="font-semibold text-white">Average check during events vs. regular nights</div>
                  <div className="text-sm text-gray-400">Measure event impact on spending</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00A86B] text-xl">•</span>
                <div>
                  <div className="font-semibold text-white">Top-selling items during each event</div>
                  <div className="text-sm text-gray-400">Optimize menu and specials</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Lunch Delivery Metrics */}
          <div className="card-dark p-6">
            <h4 className="font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-3xl">🥡</span>
              Lunch Delivery Metrics
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-[#D4AF37] text-xl">•</span>
                <div>
                  <div className="font-semibold text-white">Number of orders per day</div>
                  <div className="text-sm text-gray-400">Track volume growth week-over-week</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#D4AF37] text-xl">•</span>
                <div>
                  <div className="font-semibold text-white">Average order size</div>
                  <div className="text-sm text-gray-400">Individual vs. group orders</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#D4AF37] text-xl">•</span>
                <div>
                  <div className="font-semibold text-white">Which businesses order repeatedly</div>
                  <div className="text-sm text-gray-400">Identify most valuable accounts</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#D4AF37] text-xl">•</span>
                <div>
                  <div className="font-semibold text-white">Delivery times and customer feedback</div>
                  <div className="text-sm text-gray-400">Ensure quality and timeliness</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Overall Business */}
          <div className="card-dark p-6">
            <h4 className="font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-3xl">📊</span>
              Overall Business Trends
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-[#b22222] text-xl">•</span>
                <div>
                  <div className="font-semibold text-white">Week-over-week revenue growth</div>
                  <div className="text-sm text-gray-400">Track overall business momentum</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#b22222] text-xl">•</span>
                <div>
                  <div className="font-semibold text-white">Tuesday/Thursday specific performance</div>
                  <div className="text-sm text-gray-400">Measure event impact on slow nights</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#b22222] text-xl">•</span>
                <div>
                  <div className="font-semibold text-white">New customer acquisition (if Toast can track)</div>
                  <div className="text-sm text-gray-400">Growth in customer database</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </ExpandableSection>

      {/* Weekly Reporting Cadence */}
      <ExpandableSection
        title="Weekly Reporting Cadence"
        icon="📅"
        executiveSummary={
          <>
            <strong className="text-white">Every Monday morning (30 minutes):</strong> Pull last week's data from Toast, compare to previous weeks,
            identify what worked, make <strong className="text-white">one optimization decision per week</strong>. Month 3 comprehensive review
            determines next steps.
          </>
        }
      >
        <div className="space-y-8">
          {/* Monday Morning Routine */}
          <div className="card-dark p-6">
            <h4 className="font-bold text-white mb-4">Every Monday Morning (30 minutes)</h4>
            <div className="space-y-4">
              {[
                {
                  step: 1,
                  title: "Pull last week's data from Toast",
                  description: "Export relevant reports: sales by day, customer count, top items"
                },
                {
                  step: 2,
                  title: "Compare to previous weeks",
                  description: "Look for trends, anomalies, and patterns"
                },
                {
                  step: 3,
                  title: "Identify: What worked? What didn't?",
                  description: "Note specific successes and challenges"
                },
                {
                  step: 4,
                  title: "Make one optimization decision",
                  description: "One actionable change to implement this week"
                }
              ].map((item) => (
                <div key={item.step} className="flex gap-4 bg-gray-900 rounded p-4 border border-gray-700">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#00A86B] text-white flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-white mb-1">{item.title}</div>
                    <div className="text-sm text-gray-400">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Month 3 Review Checkpoint */}
          <div className="bg-blue-900/10 border-l-4 border-blue-500 rounded p-6">
            <h4 className="font-bold text-white mb-4">Month 3 Review Checkpoint (Week 12)</h4>
            <p className="text-gray-300 mb-4">After 12 weeks, comprehensive assessment to determine next steps:</p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-blue-400">•</span>
                <span><strong className="text-white">Which events drive most incremental revenue?</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400">•</span>
                <span><strong className="text-white">Which lunch accounts are most valuable?</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400">•</span>
                <span><strong className="text-white">Should we add more programming or optimize existing?</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400">•</span>
                <span><strong className="text-white">What's the ROI on marketing spend?</strong></span>
              </li>
            </ul>
          </div>
        </div>
      </ExpandableSection>

      {/* Success Metrics Timeline */}
      <div className="card-dark p-10 shadow-strong border-2 border-[#00A86B]/30 mt-10">
        <h3 className="text-3xl font-bold text-white mb-6">Success Metrics: How We Know It's Working</h3>

        <div className="space-y-6">
          {/* Week 2 Check-In */}
          <div className="bg-gray-900 rounded-xl p-6 border-l-4 border-[#00A86B]">
            <div className="text-sm text-[#00A86B] font-bold mb-2">WEEK 2 CHECK-IN</div>
            <h4 className="font-bold text-white mb-3">Early Indicators</h4>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2 text-gray-300">
                <span className="text-green-400">✓</span>
                <span>Both events launched smoothly</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <span className="text-green-400">✓</span>
                <span>10+ attendees at each event (minimum)</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <span className="text-green-400">✓</span>
                <span>Positive customer feedback</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <span className="text-green-400">✓</span>
                <span>Staff comfortable with execution</span>
              </div>
            </div>
          </div>

          {/* Month 1 Check-In */}
          <div className="bg-gray-900 rounded-xl p-6 border-l-4 border-[#D4AF37]">
            <div className="text-sm text-[#D4AF37] font-bold mb-2">MONTH 1 CHECK-IN (WEEK 4)</div>
            <h4 className="font-bold text-white mb-3">Foundation Established</h4>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2 text-gray-300">
                <span className="text-green-400">✓</span>
                <span>$5,000-8,000 additional revenue from events</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <span className="text-green-400">✓</span>
                <span>3-5 lunch delivery accounts active</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <span className="text-green-400">✓</span>
                <span>Weekly reporting established</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <span className="text-green-400">✓</span>
                <span>Clear understanding of adjustments needed</span>
              </div>
            </div>
          </div>

          {/* Month 2 Check-In */}
          <div className="bg-gray-900 rounded-xl p-6 border-l-4 border-[#b22222]">
            <div className="text-sm text-[#b22222] font-bold mb-2">MONTH 2 CHECK-IN (WEEK 8)</div>
            <h4 className="font-bold text-white mb-3">Scaling & Optimization</h4>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2 text-gray-300">
                <span className="text-green-400">✓</span>
                <span>$9,000-16,000 additional revenue</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <span className="text-green-400">✓</span>
                <span>5-10 lunch accounts with recurring orders</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <span className="text-green-400">✓</span>
                <span>Data-driven optimization decisions made</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <span className="text-green-400">✓</span>
                <span>Marketing refined based on results</span>
              </div>
            </div>
          </div>

          {/* Month 3 Check-In */}
          <div className="bg-gray-900 rounded-xl p-6 border-l-4 border-green-500">
            <div className="text-sm text-green-400 font-bold mb-2">MONTH 3 CHECK-IN (WEEK 12)</div>
            <h4 className="font-bold text-white mb-3">Full Performance & Decision Point</h4>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2 text-gray-300">
                <span className="text-green-400">✓</span>
                <span>$13,000-21,000 additional revenue</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <span className="text-green-400">✓</span>
                <span>10-15 active lunch accounts</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <span className="text-green-400">✓</span>
                <span>Event attendance consistent or growing</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <span className="text-green-400">✓</span>
                <span>Clear ROI justifies continued investment</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 md:col-span-2">
                <span className="text-yellow-400">→</span>
                <span className="font-semibold text-yellow-300">Decision point: Scale or optimize?</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Track 3 Summary */}
      <div className="card-dark p-10 shadow-strong border-2 border-[#00A86B]/30 mt-10">
        <h3 className="text-3xl font-bold text-white mb-6">Track 3 Summary</h3>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gray-900 rounded-xl">
            <div className="text-sm text-gray-400 mb-2">Time Investment</div>
            <div className="text-3xl font-bold text-white mb-1">30 min/week</div>
            <div className="text-xs text-gray-400">Monday morning routine</div>
          </div>
          <div className="text-center p-6 bg-gray-900 rounded-xl">
            <div className="text-sm text-gray-400 mb-2">Financial Cost</div>
            <div className="text-3xl font-bold text-white mb-1">$0</div>
            <div className="text-xs text-gray-400">Toast POS included</div>
          </div>
          <div className="text-center p-6 bg-gray-900 rounded-xl border-2 border-green-500">
            <div className="text-sm text-gray-400 mb-2">Value Created</div>
            <div className="text-3xl font-bold text-green-400 mb-1">10-20%</div>
            <div className="text-xs text-green-300">Improvement through data decisions</div>
          </div>
        </div>
      </div>
    </section>
  );
}
