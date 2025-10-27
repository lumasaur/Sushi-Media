'use client';

import React from 'react';
import { ExpandableSection } from './ExpandableSection';

export function LaunchTimelineSection() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex items-center gap-4 mb-10">
        <span className="text-6xl">🗓️</span>
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Launch Timeline</h2>
          <p className="text-gray-400 mt-2 text-lg">Your roadmap from planning to launch</p>
        </div>
      </div>

      {/* Timeline Visual */}
      <div className="space-y-6 mb-10">
        {/* Week of Oct 21 */}
        <div className="flex gap-6">
          <div className="flex-shrink-0 w-48">
            <div className="card-dark p-4 text-center">
              <div className="text-sm text-gray-400 mb-1">Week of</div>
              <div className="text-xl font-bold text-white">Oct 21</div>
              <div className="text-xs text-gray-400 mt-1">3 Weeks Before Launch</div>
            </div>
          </div>
          <div className="flex-1 card-dark p-6 shadow-medium">
            <h3 className="font-bold text-white mb-3">Planning & Setup</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <span className="text-blue-400">•</span>
                <span>Confirm dance instructor selection</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400">•</span>
                <span>Begin creating marketing materials</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400">•</span>
                <span>Map office park businesses</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400">•</span>
                <span>Verify Toast POS capabilities</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Week of Oct 28 */}
        <div className="flex gap-6">
          <div className="flex-shrink-0 w-48">
            <div className="card-dark p-4 text-center">
              <div className="text-sm text-gray-400 mb-1">Week of</div>
              <div className="text-xl font-bold text-white">Oct 28</div>
              <div className="text-xs text-gray-400 mt-1">2 Weeks Before Launch</div>
            </div>
          </div>
          <div className="flex-1 card-dark p-6 shadow-medium">
            <h3 className="font-bold text-white mb-3">Marketing Preparation</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <span className="text-green-400">•</span>
                <span>Print flyers for events and lunch delivery</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">•</span>
                <span>Create social media graphics</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">•</span>
                <span>Set up Facebook events for Tuesday/Thursday</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">•</span>
                <span>Train staff on event formats</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">•</span>
                <span>Purchase delivery bags</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Week of Nov 4 */}
        <div className="flex gap-6">
          <div className="flex-shrink-0 w-48">
            <div className="card-dark p-4 text-center">
              <div className="text-sm text-gray-400 mb-1">Week of</div>
              <div className="text-xl font-bold text-white">Nov 4</div>
              <div className="text-xs text-gray-400 mt-1">1 Week Before Launch</div>
            </div>
          </div>
          <div className="flex-1 card-dark p-6 shadow-medium">
            <h3 className="font-bold text-white mb-3">Final Preparations</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <span className="text-yellow-400">•</span>
                <span>Launch social media campaigns</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow-400">•</span>
                <span>Distribute flyers throughout neighborhood</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow-400">•</span>
                <span>Finalize Toast POS online ordering</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow-400">•</span>
                <span>Staff walkthrough for events</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow-400">•</span>
                <span>Lunch delivery flyer distribution to office park</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Week of Nov 11 - LAUNCH */}
        <div className="flex gap-6">
          <div className="flex-shrink-0 w-48">
            <div className="bg-gradient-to-br from-[#b22222] to-[#a01e1e] p-4 text-center rounded-xl shadow-glow-red">
              <div className="text-sm text-gray-200 mb-1">Week of</div>
              <div className="text-2xl font-bold text-white">Nov 11</div>
              <div className="text-xs text-gray-200 mt-1 font-bold">🚀 LAUNCH WEEK</div>
            </div>
          </div>
          <div className="flex-1 bg-gradient-to-br from-gray-800 to-gray-900 p-6 shadow-strong rounded-xl border-2 border-[#b22222]">
            <h3 className="font-bold text-white mb-3 text-xl">Launch All Three Tracks!</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <span className="text-[#b22222] text-lg">★</span>
                <span><strong className="text-white">Tuesday, Nov 12:</strong> First Latin Dance Night (7-10pm)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#b22222] text-lg">★</span>
                <span><strong className="text-white">Thursday, Nov 14:</strong> First Social Night (7-10pm)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#b22222] text-lg">★</span>
                <span><strong className="text-white">Monday-Friday:</strong> Begin lunch delivery outreach calls</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#b22222] text-lg">★</span>
                <span><strong className="text-white">Monday morning:</strong> Track all metrics in Toast POS</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Week of Nov 18 */}
        <div className="flex gap-6">
          <div className="flex-shrink-0 w-48">
            <div className="card-dark p-4 text-center">
              <div className="text-sm text-gray-400 mb-1">Week of</div>
              <div className="text-xl font-bold text-white">Nov 18</div>
              <div className="text-xs text-gray-400 mt-1">Week 2</div>
            </div>
          </div>
          <div className="flex-1 card-dark p-6 shadow-medium">
            <h3 className="font-bold text-white mb-3">Momentum Building</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <span className="text-purple-400">•</span>
                <span>Continue Tuesday/Thursday events</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-400">•</span>
                <span>Execute sample lunch deliveries</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-400">•</span>
                <span>Review first week performance</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-400">•</span>
                <span>Adjust based on results</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Week of Nov 25 */}
        <div className="flex gap-6">
          <div className="flex-shrink-0 w-48">
            <div className="card-dark p-4 text-center">
              <div className="text-sm text-gray-400 mb-1">Week of</div>
              <div className="text-xl font-bold text-white">Nov 25</div>
              <div className="text-xs text-gray-400 mt-1">Week 3 (Thanksgiving)</div>
            </div>
          </div>
          <div className="flex-1 card-dark p-6 shadow-medium">
            <h3 className="font-bold text-white mb-3">Light Week & Relationship Building</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <span className="text-orange-400">•</span>
                <span>Light programming week (holiday)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-400">•</span>
                <span>Continue relationship building with lunch accounts</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-400">•</span>
                <span>Plan December optimization</span>
              </li>
            </ul>
          </div>
        </div>

        {/* December Forward */}
        <div className="flex gap-6">
          <div className="flex-shrink-0 w-48">
            <div className="card-dark p-4 text-center">
              <div className="text-sm text-gray-400 mb-1">Month</div>
              <div className="text-xl font-bold text-white">December+</div>
              <div className="text-xs text-gray-400 mt-1">Optimize & Scale</div>
            </div>
          </div>
          <div className="flex-1 card-dark p-6 shadow-medium border-l-4 border-green-500">
            <h3 className="font-bold text-white mb-3">Continuous Improvement</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <span className="text-green-400">•</span>
                <span>Optimize events based on data</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">•</span>
                <span>Scale lunch delivery to 20-40 orders/week</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">•</span>
                <span>Monthly review and adjustments</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">•</span>
                <span>Consider expanding event programming</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DecisionChecklistSection() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex items-center gap-4 mb-10">
        <span className="text-6xl">✅</span>
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Key Decisions Required</h2>
          <p className="text-gray-400 mt-2 text-lg">10 critical decisions to finalize before launch</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Decision 1 */}
        <ExpandableSection
          title="Decision 1: Dance Instructor"
          icon="💃"
          badge="high-priority"
          defaultExpanded={false}
          executiveSummary={
            <>
              Finalize instructor selection by <strong className="text-white">Oct 25</strong>. Confirm fee: $100-150/session.
              Book first 4 sessions (Tuesdays in November).
            </>
          }
        >
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-2">
              <span className="text-gray-500">☐</span>
              <span className="text-gray-300">Finalize instructor selection by Oct 25</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-gray-500">☐</span>
              <span className="text-gray-300">Confirm instructor fee: $100-150/session</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-gray-500">☐</span>
              <span className="text-gray-300">Book first 4 sessions (Tuesdays in November)</span>
            </div>
          </div>
        </ExpandableSection>

        {/* Decision 2 */}
        <ExpandableSection
          title="Decision 2: Entry Pricing"
          icon="💰"
          defaultExpanded={false}
          executiveSummary={
            <>
              <strong className="text-white">Option A:</strong> $15 fixed entry fee (simpler).
              <strong className="text-white"> Option B:</strong> $10 entry OR 1 drink minimum.
              <strong className="text-green-400"> Recommendation: Option A</strong> for simplicity.
            </>
          }
        >
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-2">
              <span className="text-gray-500">☐</span>
              <span className="text-gray-300">Option A: $15 fixed entry fee (simpler)</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-gray-500">☐</span>
              <span className="text-gray-300">Option B: $10 entry OR 1 drink minimum (drives bar sales)</span>
            </div>
            <div className="bg-green-900/10 border-l-4 border-green-500 rounded p-3 mt-2">
              <span className="text-green-300 font-semibold">Recommendation: Option A for simplicity</span>
            </div>
          </div>
        </ExpandableSection>

        {/* Decision 3 */}
        <ExpandableSection
          title="Decision 3: Thursday Setup"
          icon="🤝"
          defaultExpanded={false}
          executiveSummary={
            <>
              Approve rearranging seating for social atmosphere. Decide on optional name tags (opt-in).
              Confirm staff comfortable facilitating mingling.
            </>
          }
        >
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-2">
              <span className="text-gray-500">☐</span>
              <span className="text-gray-300">Approve rearranging seating for social atmosphere</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-gray-500">☐</span>
              <span className="text-gray-300">Decide if using optional name tags (opt-in)</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-gray-500">☐</span>
              <span className="text-gray-300">Confirm staff comfortable facilitating mingling</span>
            </div>
          </div>
        </ExpandableSection>

        {/* Decision 4 */}
        <ExpandableSection
          title="Decision 4: Lunch Delivery Launch"
          icon="🥡"
          defaultExpanded={false}
          executiveSummary={
            <>
              Verify Toast POS group ordering by <strong className="text-white">Oct 25</strong>. Approve $500 sample lunch budget.
              <strong className="text-green-400"> Start at full price</strong> (no discounts initially).
            </>
          }
        >
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-2">
              <span className="text-gray-500">☐</span>
              <span className="text-gray-300">Verify Toast POS group ordering by Oct 25</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-gray-500">☐</span>
              <span className="text-gray-300">Approve sample lunch budget: $500 for Month 1</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-gray-500">☐</span>
              <span className="text-gray-300">Start at full price (no discounts initially)</span>
            </div>
            <div className="bg-green-900/10 border-l-4 border-green-500 rounded p-3 mt-2">
              <span className="text-green-300 font-semibold">Recommendation: Test price acceptance first</span>
            </div>
          </div>
        </ExpandableSection>

        {/* Decision 5 */}
        <ExpandableSection
          title="Decision 5: Delivery Staffing"
          icon="🚗"
          defaultExpanded={false}
          executiveSummary={
            <>
              Identify staff for lunch delivery (11:30am-1:30pm). Backup plan if orders exceed capacity.
              <strong className="text-white"> Month 2:</strong> Hire driver if hitting 20+ orders/day.
            </>
          }
        >
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-2">
              <span className="text-gray-500">☐</span>
              <span className="text-gray-300">Identify staff available for lunch delivery (11:30am-1:30pm)</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-gray-500">☐</span>
              <span className="text-gray-300">Backup plan if orders exceed capacity</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-gray-500">☐</span>
              <span className="text-gray-300">Month 2: Hire driver if hitting 20+ orders/day</span>
            </div>
          </div>
        </ExpandableSection>

        {/* Decision 6 */}
        <ExpandableSection
          title="Decision 6: Marketing Budget"
          icon="💵"
          defaultExpanded={false}
          executiveSummary={
            <>
              Track 1 events: <strong className="text-white">$85-180/month</strong> marketing.
              Track 2 lunch: <strong className="text-white">$850-980 first month</strong> setup.
              <strong className="text-white"> Total first-month: $1,600-2,400</strong>.
            </>
          }
        >
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-2">
              <span className="text-gray-500">☐</span>
              <span className="text-gray-300">Track 1 events: $85-180/month marketing</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-gray-500">☐</span>
              <span className="text-gray-300">Track 2 lunch delivery: $850-980 first month setup</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-gray-500">☐</span>
              <span className="text-gray-300">Total first-month budget: $1,600-2,400</span>
            </div>
            <div className="text-xs text-gray-400 mt-2">Includes: Instructor fees, marketing, delivery bags, sample lunches</div>
          </div>
        </ExpandableSection>

        {/* Decision 7 */}
        <ExpandableSection
          title="Decision 7: Sushi & Sounds"
          icon="🎸"
          defaultExpanded={false}
          executiveSummary={
            <>
              Confirm monthly Saturday music event continues. Maintain current musician fee: <strong className="text-white">$200-400/month</strong>.
              No changes to existing format.
            </>
          }
        >
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-2">
              <span className="text-gray-500">☐</span>
              <span className="text-gray-300">Confirm monthly Saturday music event continues</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-gray-500">☐</span>
              <span className="text-gray-300">Maintain current musician fee: $200-400/month</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-gray-500">☐</span>
              <span className="text-gray-300">No changes to existing format</span>
            </div>
          </div>
        </ExpandableSection>

        {/* Decision 8 */}
        <ExpandableSection
          title="Decision 8: Launch Date"
          icon="🗓️"
          defaultExpanded={false}
          executiveSummary={
            <>
              Confirm launch week: <strong className="text-white">November 11th</strong>. First events:
              <strong className="text-white"> Tuesday Nov 12 + Thursday Nov 14</strong>. Staff availability confirmed.
            </>
          }
        >
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-2">
              <span className="text-gray-500">☐</span>
              <span className="text-gray-300">Confirm launch week: November 11th</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-gray-500">☐</span>
              <span className="text-gray-300">First events: Tuesday Nov 12 + Thursday Nov 14</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-gray-500">☐</span>
              <span className="text-gray-300">Staff availability and readiness confirmed</span>
            </div>
          </div>
        </ExpandableSection>

        {/* Decision 9 */}
        <ExpandableSection
          title="Decision 9: Performance Tracking"
          icon="📊"
          defaultExpanded={false}
          executiveSummary={
            <>
              You'll handle Toast POS configuration. <strong className="text-white">Monday morning review time</strong> (30 minutes weekly).
              Key metrics to track agreed upon.
            </>
          }
        >
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-2">
              <span className="text-gray-500">☐</span>
              <span className="text-gray-300">You'll handle Toast POS configuration</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-gray-500">☐</span>
              <span className="text-gray-300">Monday morning review time (30 minutes weekly)</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-gray-500">☐</span>
              <span className="text-gray-300">Key metrics to track agreed upon</span>
            </div>
          </div>
        </ExpandableSection>

        {/* Decision 10 */}
        <ExpandableSection
          title="Decision 10: Success Criteria"
          icon="🎯"
          defaultExpanded={false}
          executiveSummary={
            <>
              Month 3 revenue target: <strong className="text-green-400">$12,000-18,500</strong> additional.
              Minimum per-event profit: <strong className="text-white">$500/night</strong> to continue.
              Evaluation process agreed.
            </>
          }
        >
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-2">
              <span className="text-gray-500">☐</span>
              <span className="text-gray-300">Month 3 revenue target: $12,000-18,500 additional</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-gray-500">☐</span>
              <span className="text-gray-300">Minimum per-event profit: $500/night to continue</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-gray-500">☐</span>
              <span className="text-gray-300">Evaluation process for scaling or adjusting programs</span>
            </div>
          </div>
        </ExpandableSection>
      </div>

      {/* Next Action This Week */}
      <div className="mt-12 bg-gradient-to-br from-[#b22222]/20 to-[#b22222]/5 rounded-2xl p-10 border-2 border-[#b22222] shadow-strong">
        <h3 className="text-3xl font-bold text-white mb-6">Your Next Action (This Week)</h3>

        <div className="space-y-6">
          <div className="card-dark p-6">
            <div className="font-bold text-[#b22222] mb-3">Immediate:</div>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-[#b22222]">☐</span>
                <span>Review this implementation plan (30 minutes)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#b22222]">☐</span>
                <span>Finalize dance instructor selection</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#b22222]">☐</span>
                <span>Check Toast POS group ordering capabilities</span>
              </li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-dark p-6">
              <div className="font-bold text-[#D4AF37] mb-3">This Week:</div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37]">☐</span>
                  <span>Make decisions on the 10 items above</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37]">☐</span>
                  <span>Order delivery bags if proceeding</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37]">☐</span>
                  <span>Begin creating social media graphics</span>
                </li>
              </ul>
            </div>

            <div className="card-dark p-6">
              <div className="font-bold text-green-400 mb-3">Week of Nov 11:</div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400">🚀</span>
                  <span>LAUNCH Tuesday Latin Dance (Nov 12)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">🚀</span>
                  <span>LAUNCH Thursday Social Night (Nov 14)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">🚀</span>
                  <span>Begin lunch delivery outreach</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">🚀</span>
                  <span>Track everything</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-black/40 rounded-xl border border-[#b22222]/30">
          <div className="text-2xl font-bold text-white mb-3">The Bottom Line:</div>
          <p className="text-lg text-gray-300 mb-4">
            Starting with two proven event formats + systematic lunch delivery outreach. Phased approach that doesn't overwhelm
            staff or customers. Room to expand to full weekly calendar once these succeed.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-sm text-gray-400">Month 1 Investment</div>
              <div className="text-2xl font-bold text-white">$1,600-2,400</div>
            </div>
            <div>
              <div className="text-sm text-gray-400">Month 3 Revenue</div>
              <div className="text-2xl font-bold text-green-400">$13K-21K</div>
            </div>
            <div>
              <div className="text-sm text-gray-400">Approach</div>
              <div className="text-lg font-bold text-white">Simple. Clear. Fast.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
