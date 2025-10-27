'use client';

import React from 'react';
import { ExpandableSection } from './ExpandableSection';

export function Track2LunchSection() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex items-center gap-4 mb-10">
        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#D4AF37] flex items-center justify-center">
          <span className="text-2xl font-bold text-white">T2</span>
        </div>
        <div>
          <div className="text-sm text-[#D4AF37] font-bold mb-1 tracking-wide">TRACK 2</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Lunch Delivery Program</h2>
          <p className="text-gray-400 mt-2 text-lg">Capture nearby office park and local business demand</p>
        </div>
      </div>

      {/* The Problem & Solution */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div className="card-dark p-8 shadow-medium">
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <span className="text-3xl">•</span>
            The Problem We're Solving
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            Major office park 1-2 miles away plus local businesses represent <strong className="text-white">500+ potential lunch customers</strong>.
            Most don't know we deliver. We're missing <strong className="text-[#D4AF37]">$8,000-12,000/month</strong> in lunch delivery revenue.
          </p>
        </div>

        <div className="card-dark p-8 shadow-medium border-l-4 border-[#D4AF37]">
          <h3 className="text-2xl font-bold text-white mb-4">The Solution</h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            <strong className="text-white">Blitz outreach</strong> to specific office park followed by systematic expansion to local businesses.
            Orders through Toast POS online ordering or delivery apps.
          </p>
        </div>
      </div>

      {/* Three-Phase Approach */}
      <div className="card-dark p-8 mb-10 shadow-medium">
        <h3 className="text-2xl font-bold text-white mb-6">Three-Phase Approach</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-xl p-6 border border-[#D4AF37]/30">
            <div className="text-lg font-bold text-white mb-2">Phase 1: Office Park Blitz</div>
            <div className="text-sm text-gray-400 mb-4">Weeks 1-2</div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37]">•</span>
                <span>Map all companies in park (15-25 businesses)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37]">•</span>
                <span>Identify office managers/admins</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37]">•</span>
                <span>Deliver sample lunches to decision makers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37]">•</span>
                <span>Follow up with calls</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-[#00A86B]/10 to-transparent rounded-xl p-6 border border-[#00A86B]/30">
            <div className="text-lg font-bold text-white mb-2">Phase 2: Online Optimization</div>
            <div className="text-sm text-gray-400 mb-4">Week 1</div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-[#00A86B]">•</span>
                <span>Verify Toast POS group ordering capabilities</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00A86B]">•</span>
                <span>Set up lunch delivery menu (8-10 items)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00A86B]">•</span>
                <span>Enable online ordering through website</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00A86B]">•</span>
                <span>Test order flow and packaging</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-[#b22222]/10 to-transparent rounded-xl p-6 border border-[#b22222]/30">
            <div className="text-lg font-bold text-white mb-2">Phase 3: Local Expansion</div>
            <div className="text-sm text-gray-400 mb-4">Weeks 3-6</div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-[#b22222]">•</span>
                <span>Target businesses within 2-mile radius</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#b22222]">•</span>
                <span>3-5 new business contacts per week</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#b22222]">•</span>
                <span>Focus on 20+ employee companies</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#b22222]">•</span>
                <span>Build lunch delivery pipeline</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Lunch Delivery Menu */}
      <ExpandableSection
        title="Lunch Delivery Menu Design"
        badge="high-priority"
        executiveSummary={
          <>
            Streamlined menu optimized for group orders and delivery. <strong className="text-white">Individual options $18-26</strong>,
            <strong className="text-white"> Group options $15-18/person</strong>. 30-minute delivery window (11:30am-1:30pm). Easy ordering through Toast
            or delivery apps.
          </>
        }
      >
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Individual Options */}
            <div className="card-dark p-6">
              <h4 className="font-bold text-white mb-4">Individual Lunch Options ($18-26)</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                  <span className="text-gray-300">1. Executive Bento Box</span>
                  <span className="text-[#D4AF37] font-bold">$24</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                  <span className="text-gray-300">2. Power Lunch Roll Selection</span>
                  <span className="text-[#D4AF37] font-bold">$18-22</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                  <span className="text-gray-300">3. Premium Chirashi Bowl</span>
                  <span className="text-[#D4AF37] font-bold">$26</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">4. Healthy Executive Bowl</span>
                  <span className="text-[#D4AF37] font-bold">$20</span>
                </div>
              </div>
            </div>

            {/* Group Options */}
            <div className="card-dark p-6">
              <h4 className="font-bold text-white mb-4">Group Options (Min 6 orders)</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                  <span className="text-gray-300">5. Business Meeting Platter</span>
                  <span className="text-[#D4AF37] font-bold">$45 (2-3)</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                  <span className="text-gray-300">6. Team Lunch Pack</span>
                  <span className="text-[#D4AF37] font-bold">$15/person</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">7. Lunch Party Platter</span>
                  <span className="text-[#D4AF37] font-bold">$18/person</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-900/10 border-l-4 border-blue-500 rounded p-6">
            <h5 className="font-semibold text-white mb-3">Key Features</h5>
            <ul className="grid md:grid-cols-2 gap-3 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <span className="text-blue-400">✓</span>
                <span>30-minute delivery window (11:30am-1:30pm)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400">✓</span>
                <span>Packaging maintains food quality</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400">✓</span>
                <span>Easy ordering through Toast website</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400">✓</span>
                <span>Group coordination available</span>
              </li>
            </ul>
          </div>
        </div>
      </ExpandableSection>

      {/* Delivery Approach */}
      <ExpandableSection
        title="Delivery Approach & Staffing"
        executiveSummary={
          <>
            <strong className="text-white">Weeks 1-2: Use existing staff</strong> during lunch window. <strong className="text-white">Week 3+: Evaluate based on volume.</strong> If
            hitting 20+ daily orders, consider part-time lunch driver. <strong className="text-white">Start with NO discounts</strong> - test price acceptance first.
          </>
        }
      >
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-dark p-6">
              <h4 className="font-bold text-white mb-4">Weeks 1-2: Existing Staff</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span>Assign delivery shifts to current staff</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span>Lunch window: 11:30am-1:30pm</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span>Stagger orders to avoid bottlenecks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span>Test packaging and timing</span>
                </li>
              </ul>
            </div>

            <div className="card-dark p-6">
              <h4 className="font-bold text-white mb-4">Week 3+: Evaluate Volume</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37]">•</span>
                  <span>If 20+ daily orders: consider part-time driver</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37]">•</span>
                  <span>11am-2pm shift, $15-18/hour</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37]">•</span>
                  <span>Only hire when volume justifies cost</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-900/10 border-l-4 border-yellow-500 rounded p-6">
            <h5 className="font-semibold text-white mb-3">Discount Strategy</h5>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 font-bold">Month 1:</span>
                <span>Start with NO discounts (test price acceptance)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 font-bold">Month 2:</span>
                <span>Consider volume discounts for repeat customers</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 font-bold">Month 3:</span>
                <span>Implement loyalty perks based on data</span>
              </div>
            </div>
          </div>
        </div>
      </ExpandableSection>

      {/* Marketing & Outreach */}
      <ExpandableSection
        title="Marketing & Outreach Strategy"
        executiveSummary={
          <>
            Professional flyers + direct calls + <strong className="text-white">sample lunch deliveries</strong> (50-70% conversion). Phone script provided.
            Low-cost tactics: Google Business updates, Toast online ordering, email newsletter, LinkedIn posts. <strong className="text-white">Budget: $850-980 first month</strong>,
            $350-480 ongoing.
          </>
        }
      >
        <div className="space-y-8">
          {/* Outreach Approach */}
          <div className="card-dark p-6">
            <h4 className="font-bold text-white mb-4">Direct Outreach Approach</h4>
            <div className="space-y-4">
              <div className="bg-gray-900 rounded p-4 border border-gray-700">
                <div className="font-semibold text-[#D4AF37] mb-2">Phone Script:</div>
                <p className="text-sm text-gray-300 italic">
                  "Hi [Name], this is [Your Name] from Ami Sushi & Bar. We're just [X] minutes from your office and wanted
                  to let you know we now offer lunch delivery through our online ordering system. Do employees typically order
                  lunch individually, or do you coordinate group orders?"
                </p>
                <p className="text-sm text-gray-300 italic mt-2">
                  "[If interested:] We'd love to send you a complimentary sample lunch this week. Does Thursday or Friday work?"
                </p>
              </div>

              <div className="bg-gray-900 rounded p-4 border border-gray-700">
                <div className="font-semibold text-[#D4AF37] mb-2">Sample Lunch Follow-Up:</div>
                <p className="text-sm text-gray-300 italic">
                  "Hi [Name], how was the lunch we dropped off yesterday? [If positive:] Great! Would you like to place an order
                  for your team next week? We can handle groups of any size through online ordering."
                </p>
              </div>
            </div>
          </div>

          {/* Low-Cost Marketing Tactics */}
          <div>
            <h4 className="font-bold text-white mb-4">Low-Cost Marketing Tactics</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-900 rounded p-4">
                <div className="text-[#D4AF37] font-semibold mb-2">Google Business Updates</div>
                <div className="text-sm text-gray-400">Post weekly: "Lunch delivery available to local offices"</div>
                <div className="text-xs text-green-400 mt-2">Cost: $0</div>
              </div>
              <div className="bg-gray-900 rounded p-4">
                <div className="text-[#D4AF37] font-semibold mb-2">Toast Online Ordering</div>
                <div className="text-sm text-gray-400">Add "Lunch Delivery" category with banner</div>
                <div className="text-xs text-green-400 mt-2">Cost: $0</div>
              </div>
              <div className="bg-gray-900 rounded p-4">
                <div className="text-[#D4AF37] font-semibold mb-2">LinkedIn Posts</div>
                <div className="text-sm text-gray-400">"Now delivering lunch to [office park area]"</div>
                <div className="text-xs text-green-400 mt-2">Cost: $0</div>
              </div>
              <div className="bg-gray-900 rounded p-4">
                <div className="text-[#D4AF37] font-semibold mb-2">Email Newsletter</div>
                <div className="text-sm text-gray-400">Announce to existing customers</div>
                <div className="text-xs text-green-400 mt-2">Cost: $0</div>
              </div>
            </div>
          </div>

          {/* Cost Summary */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-900/10 border-l-4 border-red-500 rounded p-6">
              <h5 className="font-bold text-white mb-4">First Month Investment</h5>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex justify-between">
                  <span>Delivery bags (one-time):</span>
                  <span className="text-white">$200-300</span>
                </div>
                <div className="flex justify-between">
                  <span>Marketing materials:</span>
                  <span className="text-white">$50-80</span>
                </div>
                <div className="flex justify-between">
                  <span>Sample lunches:</span>
                  <span className="text-white">$500</span>
                </div>
                <div className="flex justify-between">
                  <span>Business card giveaway:</span>
                  <span className="text-white">$100</span>
                </div>
                <div className="flex justify-between border-t border-gray-700 pt-2 font-bold">
                  <span>Total:</span>
                  <span className="text-red-300">$850-980</span>
                </div>
              </div>
            </div>

            <div className="bg-green-900/10 border-l-4 border-green-500 rounded p-6">
              <h5 className="font-bold text-white mb-4">Expected Revenue Growth</h5>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex justify-between">
                  <span>Month 1 (testing/building):</span>
                  <span className="text-white">$1,000-2,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Month 2 (scaling):</span>
                  <span className="text-white">$4,000-7,000</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>Month 3 (established):</span>
                  <span className="text-green-400">$8,000-12,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ExpandableSection>

      {/* Track 2 Summary */}
      <div className="card-dark p-10 shadow-strong border-2 border-[#D4AF37]/30 mt-10">
        <h3 className="text-3xl font-bold text-white mb-6">Track 2 Summary</h3>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-gray-900 rounded-xl">
            <div className="text-sm text-gray-400 mb-2">Setup Investment</div>
            <div className="text-3xl font-bold text-white mb-1">$850-980</div>
            <div className="text-xs text-gray-400">First month only</div>
          </div>
          <div className="text-center p-6 bg-gray-900 rounded-xl">
            <div className="text-sm text-gray-400 mb-2">Month 3 Revenue</div>
            <div className="text-3xl font-bold text-green-400 mb-1">$8K-12K</div>
            <div className="text-xs text-gray-400">Established accounts</div>
          </div>
          <div className="text-center p-6 bg-gray-900 rounded-xl border-2 border-green-500">
            <div className="text-sm text-gray-400 mb-2">Net Month 3 Profit</div>
            <div className="text-3xl font-bold text-green-400 mb-1">$7.5K-11.5K</div>
            <div className="text-xs text-green-300">After ongoing costs</div>
          </div>
        </div>

        <div className="bg-blue-900/10 border-l-4 border-blue-500 rounded p-6">
          <div className="font-semibold text-white mb-3">Key Success Factors:</div>
          <ul className="grid md:grid-cols-2 gap-3 text-gray-300">
            <li className="flex items-center gap-3">
              <span className="text-[#D4AF37]">✓</span>
              <span>Blitz approach creates momentum</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#D4AF37]">✓</span>
              <span>Sample lunches drive 50-70% conversion</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#D4AF37]">✓</span>
              <span>Focus on recurring weekly orders</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#D4AF37]">✓</span>
              <span>Toast POS integration simplifies ordering</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
