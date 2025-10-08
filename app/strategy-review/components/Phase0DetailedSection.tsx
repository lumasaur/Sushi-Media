'use client';

import { useState } from 'react';

export function Phase0DetailedSection() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <section id="phase-0-foundation" className="max-w-7xl mx-auto px-6 py-8 scroll-mt-20">
      <div className="bg-gray-800 border-2 border-gray-700 rounded-lg p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-white">
            Phase 0: Digital Infrastructure Recommendations
          </h2>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[#b22222] hover:text-[#a01e1e] transition-colors text-2xl"
          >
            {isExpanded ? '▲' : '▼'}
          </button>
        </div>

        {isExpanded && (
          <div className="space-y-8">
            {/* Timeline and Investment Overview */}
            <div className="bg-black/40 rounded-lg p-6 border border-gray-700">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-sm text-gray-400 mb-2">Timeline</div>
                  <div className="text-2xl font-bold text-white">6-8 Weeks (Flexible)</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-2">Investment Range</div>
                  <div className="text-2xl font-bold text-white">$5,400-14,700</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-2">Outcome</div>
                  <div className="text-2xl font-bold text-white">Enhanced Measurement</div>
                </div>
              </div>
            </div>

            {/* Introduction */}
            <div className="text-gray-300 space-y-4">
              <p className="text-lg leading-relaxed">
                These infrastructure recommendations help maximize the effectiveness of Phases 1-3 marketing initiatives.
                Stakeholders should evaluate each component based on current capabilities, budget constraints, and strategic priorities.
              </p>
            </div>

            {/* Implementation Flexibility */}
            <div className="bg-blue-900/10 border-l-4 border-blue-500 rounded p-6">
              <h3 className="text-xl font-bold text-white mb-4">Implementation Flexibility</h3>
              <p className="text-gray-300 mb-4">This isn't an all-or-nothing proposition:</p>
              <div className="grid md:grid-cols-2 gap-4 text-gray-300">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span><strong>Already have CRM?</strong> Focus on other areas or skip integration work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span><strong>Budget constraints?</strong> Prioritize high-impact items (photography, email automation)</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span><strong>Limited timeline?</strong> Implement critical items now, enhance others later</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span><strong>Strong existing systems?</strong> Proceed directly to Phase 1</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 8-Week Build Plan */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">8-Week Build Plan</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-900">
                      <th className="border border-gray-700 px-4 py-3 text-left text-white">Week</th>
                      <th className="border border-gray-700 px-4 py-3 text-left text-white">Focus</th>
                      <th className="border border-gray-700 px-4 py-3 text-left text-white">Key Deliverables</th>
                      <th className="border border-gray-700 px-4 py-3 text-left text-white">Hours</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr>
                      <td className="border border-gray-700 px-4 py-3 font-semibold">1-2</td>
                      <td className="border border-gray-700 px-4 py-3">Technology Setup</td>
                      <td className="border border-gray-700 px-4 py-3">CRM + POS integration, email platform, review automation, Google Business optimization</td>
                      <td className="border border-gray-700 px-4 py-3">35-45</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-700 px-4 py-3 font-semibold">3-4</td>
                      <td className="border border-gray-700 px-4 py-3">Brand & Content</td>
                      <td className="border border-gray-700 px-4 py-3">Positioning workshop, 90-day content calendar, website development starts</td>
                      <td className="border border-gray-700 px-4 py-3">40-50</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-700 px-4 py-3 font-semibold">5-6</td>
                      <td className="border border-gray-700 px-4 py-3">Photography</td>
                      <td className="border border-gray-700 px-4 py-3">40-50 hero images using smartphone + ring light, deploy across all channels</td>
                      <td className="border border-gray-700 px-4 py-3">35-45</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-700 px-4 py-3 font-semibold">7-8</td>
                      <td className="border border-gray-700 px-4 py-3">Testing & Training</td>
                      <td className="border border-gray-700 px-4 py-3">System verification, staff training, content scheduling, launch prep</td>
                      <td className="border border-gray-700 px-4 py-3">32-42</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* What You're Building - Two Column Layout */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">What You're Building</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                  <h4 className="text-lg font-semibold text-white mb-4">Core Systems</h4>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Customer database syncing with your POS (every transaction captured automatically)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Email automation (welcome series, post-visit follow-ups, event reminders)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Review generation system (automated requests, &lt;24hr response protocol)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Social media scheduler (queue weeks of content in advance)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Website with online reservations and &lt;3 second load time</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                  <h4 className="text-lg font-semibold text-white mb-4">Digital Assets</h4>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>40-50 professional-quality photos (bootstrap with smartphone + $500 lighting kit)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Brand positioning documented and staff-trained</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>90-day content calendar (30 days detailed, 60 days outlined)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Google Business Profile fully optimized with weekly posting schedule</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Investment Breakdown */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Investment Breakdown</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-900">
                      <th className="border border-gray-700 px-4 py-3 text-left text-white">Category</th>
                      <th className="border border-gray-700 px-4 py-3 text-left text-white">Cost</th>
                      <th className="border border-gray-700 px-4 py-3 text-left text-white">What It Does</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr>
                      <td className="border border-gray-700 px-4 py-3 font-semibold">Technology platforms</td>
                      <td className="border border-gray-700 px-4 py-3">$1,595-12,460/yr</td>
                      <td className="border border-gray-700 px-4 py-3">CRM, email, reviews, analytics, scheduling</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-700 px-4 py-3 font-semibold">Photography equipment</td>
                      <td className="border border-gray-700 px-4 py-3">$300-800</td>
                      <td className="border border-gray-700 px-4 py-3">Ring light, tripod, styling materials</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-700 px-4 py-3 font-semibold">Setup & integration</td>
                      <td className="border border-gray-700 px-4 py-3">$1,500-5,000</td>
                      <td className="border border-gray-700 px-4 py-3">Platform configuration, website build</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-700 px-4 py-3 font-semibold">Your team's time</td>
                      <td className="border border-gray-700 px-4 py-3">142-240 hours</td>
                      <td className="border border-gray-700 px-4 py-3">Spread across 8 weeks</td>
                    </tr>
                    <tr className="bg-gray-900">
                      <td className="border border-gray-700 px-4 py-3 font-bold text-white">Phase 0 Total</td>
                      <td className="border border-gray-700 px-4 py-3 font-bold text-white">$5,400-14,700</td>
                      <td className="border border-gray-700 px-4 py-3 font-bold text-white">Complete measurement & automation foundation</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Week 8 Launch Checklist - Horizontal Layout */}
            <div className="bg-green-900/10 border-l-4 border-green-500 rounded p-6">
              <h3 className="text-xl font-bold text-white mb-4">Week 8 Launch Checklist</h3>
              <p className="text-gray-300 mb-4">You're ready for Phase 1 when:</p>
              <div className="grid md:grid-cols-2 gap-x-6 gap-y-2 text-gray-300">
                <div className="flex items-start gap-2">
                  <span className="text-green-400">✅</span>
                  <span>Website live with working reservations and &gt;6% conversion potential</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-400">✅</span>
                  <span>40+ quality images deployed (website, Google, social media)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-400">✅</span>
                  <span>POS syncing 100% of transactions to CRM automatically</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-400">✅</span>
                  <span>Email automation tested and delivering to inbox</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-400">✅</span>
                  <span>80%+ of staff can explain your brand positioning</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-400">✅</span>
                  <span>30 days of content planned, 14 days scheduled</span>
                </div>
              </div>
            </div>

            {/* Decision Framework - Side by Side */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Decision Framework</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-900/10 border-l-4 border-green-500 rounded p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Consider investing if:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">•</span>
                      <span>Current attribution is unclear ("we think it's working")</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">•</span>
                      <span>Customer data lives in multiple disconnected systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">•</span>
                      <span>Photo quality significantly trails competitors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">•</span>
                      <span>Marketing tasks feel constantly reactive vs. planned</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">•</span>
                      <span>Website performance metrics are concerning</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-amber-900/10 border-l-4 border-amber-500 rounded p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">May defer or skip if:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400">•</span>
                      <span>Recent infrastructure investments already address these areas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400">•</span>
                      <span>Existing systems adequately support marketing needs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400">•</span>
                      <span>Budget constraints require immediate revenue focus</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400">•</span>
                      <span>Team bandwidth cannot support implementation timeline</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Trade-offs Discussion */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Trade-offs to Discuss</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-300 mb-3">With Phase 0 foundation:</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>Higher upfront investment ($5K-15K)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>2-month delay before Phase 1 launch</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>Clear campaign performance measurement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>More efficient execution of Phases 1-3</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>Data-driven optimization decisions</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-300 mb-3">Without Phase 0 foundation:</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>Lower initial investment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>Immediate Phase 1 deployment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>Attribution uncertainty ("did it work?")</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>More manual execution effort</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>Optimization based on intuition vs. data</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-400 mt-4 text-sm italic">
                Both approaches can generate revenue. Phase 0 focuses on making that revenue measurable and optimizable.
              </p>
            </div>

            {/* Detailed Implementation Guide - Collapsible */}
            <details className="bg-gray-900 rounded-lg border border-gray-700">
              <summary className="cursor-pointer p-6 font-bold text-white hover:bg-gray-800 transition-colors">
                📋 Detailed 8-Week Implementation Guide (Optional Reference)
              </summary>
              <div className="p-6 pt-0 space-y-6 text-gray-300">
                <p className="italic text-sm text-gray-400">
                  This detailed guide provides week-by-week implementation steps for stakeholders who choose to pursue Phase 0 infrastructure development.
                </p>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white">Week 1-2: Technology Setup</h4>
                  <p className="leading-relaxed">
                    Select and configure your core platforms. Goal: When someone dines with you, they automatically enter your marketing system.
                  </p>
                  <div className="bg-black/40 rounded p-4">
                    <p className="font-semibold mb-2">Platform Decisions:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>CRM:</strong> HubSpot Starter ($216/yr), Toast Loyalty ($1,200-2,400/yr), or Square ($0-50/mo)</li>
                      <li>• <strong>Email:</strong> Mailchimp Essentials ($390/yr) or built into your CRM</li>
                      <li>• <strong>Integration:</strong> Zapier Professional ($239/yr) if systems don't talk natively</li>
                      <li>• <strong>Social Scheduling:</strong> Later ($180/yr) or Buffer ($60/yr)</li>
                      <li>• <strong>Reviews:</strong> Grade.us ($588/yr) or Birdeye ($3,600/yr)</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white">Week 3-4: Brand & Content Foundation</h4>
                  <p className="leading-relaxed">
                    Define "Premium Sushi with Social Soul" so everyone tells the same story. Create 90-day content calendar framework.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white">Week 5-6: Photography Production</h4>
                  <p className="leading-relaxed">
                    Create 40-50 images that compete online without hiring a photographer. Equipment needed: Ring light 18" ($60-120), smartphone tripod + remote ($25-50), white poster board, neutral fabric backdrops.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white">Week 7-8: Testing & Training</h4>
                  <p className="leading-relaxed">
                    Verify everything works. Train your team. Confirm launch readiness. Test complete customer journey from Google search through review request.
                  </p>
                </div>
              </div>
            </details>
          </div>
        )}
      </div>
    </section>
  );
}
