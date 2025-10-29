'use client';

import React from 'react';
import { ExpandableSection } from './ExpandableSection';

export function Track3PerformanceSection() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="flex items-center gap-4 mb-10">
        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#00A86B] flex items-center justify-center shadow-medium">
          <span className="text-2xl font-bold text-white">T3</span>
        </div>
        <div>
          <div className="text-sm text-[#00A86B] font-bold mb-1 tracking-wide">TRACK 3</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Performance Tracking</h2>
          <p className="text-gray-400 mt-2 text-lg">Measure what works to optimize and scale</p>
        </div>
      </div>

      {/* Problem & Solution Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {/* Problem */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 rounded-xl p-8 shadow-medium">
          <div className="text-sm text-gray-400 font-bold mb-3 tracking-wide">THE PROBLEM</div>
          <h3 className="text-2xl font-bold text-white mb-4">Flying Blind</h3>
          <ul className="text-gray-300 space-y-2 text-base leading-relaxed">
            <li>• Don't know which events drive the most revenue</li>
            <li>• Can't tell if lunch delivery is profitable yet</li>
            <li>• No way to identify what's working vs what's not</li>
            <li>• Difficult to make data-driven decisions on where to invest</li>
          </ul>
        </div>

        {/* Solution */}
        <div className="bg-gradient-to-br from-[#00A86B]/20 to-[#00A86B]/5 border border-[#00A86B]/30 rounded-xl p-8 shadow-medium">
          <div className="text-sm text-[#00A86B] font-bold mb-3 tracking-wide">THE SOLUTION</div>
          <h3 className="text-2xl font-bold text-white mb-4">Simple Weekly Tracking</h3>
          <ul className="text-gray-300 space-y-2 text-base leading-relaxed">
            <li>• <strong className="text-white">30-minute Monday routine:</strong> Review last week's numbers</li>
            <li>• <strong className="text-white">Track 3 key areas:</strong> Events, lunch delivery, overall trends</li>
            <li>• <strong className="text-white">Make decisions:</strong> Double down on what works, cut what doesn't</li>
            <li>• <strong className="text-white">Simple spreadsheet:</strong> No complex software needed</li>
          </ul>
        </div>
      </div>

      {/* What to Track */}
      <div className="mb-12">
        <h3 className="text-3xl font-bold text-white mb-6">What to Track</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Track 1 Metrics */}
          <div className="bg-gradient-to-br from-[#b22222]/20 to-[#b22222]/5 border border-[#b22222]/30 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#b22222] flex items-center justify-center text-white font-bold">T1</div>
              <h4 className="text-xl font-bold text-white">Events Programming</h4>
            </div>
            <div className="space-y-3 text-sm">
              <div className="bg-gray-800/50 rounded p-3">
                <div className="text-[#b22222] font-semibold mb-1">Per Event</div>
                <ul className="text-gray-400 space-y-1">
                  <li>• Attendance count</li>
                  <li>• Revenue (food + drinks)</li>
                  <li>• Average spend per person</li>
                  <li>• Event costs (instructor, marketing)</li>
                </ul>
              </div>
              <div className="bg-gray-800/50 rounded p-3">
                <div className="text-[#b22222] font-semibold mb-1">Weekly Totals</div>
                <ul className="text-gray-400 space-y-1">
                  <li>• Total event revenue</li>
                  <li>• Total event costs</li>
                  <li>• Net profit from events</li>
                  <li>• ROI percentage</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Track 2 Metrics */}
          <div className="bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37]/30 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center text-white font-bold">T2</div>
              <h4 className="text-xl font-bold text-white">Lunch Delivery</h4>
            </div>
            <div className="space-y-3 text-sm">
              <div className="bg-gray-800/50 rounded p-3">
                <div className="text-[#D4AF37] font-semibold mb-1">Daily Metrics</div>
                <ul className="text-gray-400 space-y-1">
                  <li>• Number of orders</li>
                  <li>• Total revenue</li>
                  <li>• Average order value</li>
                  <li>• New vs repeat customers</li>
                </ul>
              </div>
              <div className="bg-gray-800/50 rounded p-3">
                <div className="text-[#D4AF37] font-semibold mb-1">Weekly Analysis</div>
                <ul className="text-gray-400 space-y-1">
                  <li>• Total lunch revenue</li>
                  <li>• Platform fees paid</li>
                  <li>• Food + labor costs</li>
                  <li>• Net profit margin</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Overall Business Metrics */}
          <div className="bg-gradient-to-br from-purple-900/30 to-purple-900/10 border border-purple-500/30 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-sm">ALL</div>
              <h4 className="text-xl font-bold text-white">Overall Business</h4>
            </div>
            <div className="space-y-3 text-sm">
              <div className="bg-gray-800/50 rounded p-3">
                <div className="text-purple-400 font-semibold mb-1">Weekly Totals</div>
                <ul className="text-gray-400 space-y-1">
                  <li>• Total revenue (all sources)</li>
                  <li>• Revenue by day of week</li>
                  <li>• Customer count</li>
                  <li>• Average check size</li>
                </ul>
              </div>
              <div className="bg-gray-800/50 rounded p-3">
                <div className="text-purple-400 font-semibold mb-1">Month-over-Month</div>
                <ul className="text-gray-400 space-y-1">
                  <li>• Revenue growth %</li>
                  <li>• Customer acquisition</li>
                  <li>• Marketing ROI</li>
                  <li>• Profit margins</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expandable Section: Weekly Reporting Routine */}
      <div className="mb-8">
        <ExpandableSection
          title="Weekly Reporting Routine (30-Minute Monday Check-In)"
          badge="recommended"
          executiveSummary={
            <>
              Every Monday morning, spend 30 minutes reviewing the previous week's performance across
              all tracks. Use simple spreadsheet to track trends and make quick decisions.
            </>
          }
        >
          <div className="space-y-8">
            {/* The 30-Minute Monday Routine */}
            <div>
              <h4 className="text-xl font-bold text-white mb-4">The 30-Minute Monday Routine</h4>
              <div className="bg-gray-800/50 rounded-lg p-6">
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Every Monday at 10am (before lunch prep), spend 30 minutes entering last week's data
                  and reviewing trends. This becomes your weekly decision-making session.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">1</div>
                    <div>
                      <div className="font-bold text-white mb-2">Minutes 0-10: Enter Track 1 Data</div>
                      <ul className="text-gray-400 text-sm space-y-1">
                        <li>• Review each event from last week (Tuesday, Thursday, Saturday)</li>
                        <li>• Enter attendance, revenue, costs for each event</li>
                        <li>• Calculate net profit and ROI for events track</li>
                        <li>• Note: Which night had highest attendance? Lowest?</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">2</div>
                    <div>
                      <div className="font-bold text-white mb-2">Minutes 10-20: Enter Track 2 Data</div>
                      <ul className="text-gray-400 text-sm space-y-1">
                        <li>• Pull order counts from DoorDash/Uber Eats dashboard</li>
                        <li>• Enter daily lunch order counts for Mon-Fri</li>
                        <li>• Calculate total lunch revenue minus platform fees</li>
                        <li>• Note: Are we hitting volume targets? Which days are strongest?</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">3</div>
                    <div>
                      <div className="font-bold text-white mb-2">Minutes 20-25: Review Overall Business</div>
                      <ul className="text-gray-400 text-sm space-y-1">
                        <li>• Enter total weekly revenue from POS system</li>
                        <li>• Compare to previous weeks and month-ago numbers</li>
                        <li>• Calculate revenue breakdown: events vs lunch vs regular business</li>
                        <li>• Note: What percentage of revenue came from new initiatives?</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">4</div>
                    <div>
                      <div className="font-bold text-white mb-2">Minutes 25-30: Make Decisions</div>
                      <ul className="text-gray-400 text-sm space-y-1">
                        <li>• Review what's working: Are we hitting targets? What exceeded expectations?</li>
                        <li>• Identify problems: What fell short? Why?</li>
                        <li>• Make 1-2 adjustments: What will we try differently this week?</li>
                        <li>• Document decisions in notes column for future reference</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Simple Spreadsheet Template */}
            <div>
              <h4 className="text-xl font-bold text-white mb-4">Simple Spreadsheet Template</h4>
              <div className="bg-gray-800/50 rounded-lg p-6">
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Use Google Sheets or Excel with separate tabs for each track. Here's the structure:
                </p>

                <div className="space-y-4">
                  {/* Track 1 Events Tab */}
                  <div className="bg-gray-900/50 rounded p-4">
                    <div className="text-[#b22222] font-bold mb-3">Tab 1: Track 1 Events</div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs border-collapse">
                        <thead>
                          <tr className="bg-gray-800/50 border-b border-gray-700">
                            <th className="p-2 text-left text-gray-400 font-semibold">Week</th>
                            <th className="p-2 text-left text-gray-400 font-semibold">Event</th>
                            <th className="p-2 text-right text-gray-400 font-semibold">Attendance</th>
                            <th className="p-2 text-right text-gray-400 font-semibold">Revenue</th>
                            <th className="p-2 text-right text-gray-400 font-semibold">Costs</th>
                            <th className="p-2 text-right text-gray-400 font-semibold">Profit</th>
                            <th className="p-2 text-right text-gray-400 font-semibold">ROI</th>
                          </tr>
                        </thead>
                        <tbody className="text-gray-300">
                          <tr className="border-b border-gray-800">
                            <td className="p-2">Nov 12-18</td>
                            <td className="p-2">Latin Dance (Tue)</td>
                            <td className="p-2 text-right">28</td>
                            <td className="p-2 text-right">$1,200</td>
                            <td className="p-2 text-right">$150</td>
                            <td className="p-2 text-right text-green-400">$1,050</td>
                            <td className="p-2 text-right text-green-400">700%</td>
                          </tr>
                          <tr className="border-b border-gray-800">
                            <td className="p-2">Nov 12-18</td>
                            <td className="p-2">Social Night (Thu)</td>
                            <td className="p-2 text-right">22</td>
                            <td className="p-2 text-right">$850</td>
                            <td className="p-2 text-right">$20</td>
                            <td className="p-2 text-right text-green-400">$830</td>
                            <td className="p-2 text-right text-green-400">4150%</td>
                          </tr>
                          <tr className="bg-gray-800/30 font-semibold">
                            <td className="p-2" colSpan={2}>Week Total</td>
                            <td className="p-2 text-right">50</td>
                            <td className="p-2 text-right">$2,050</td>
                            <td className="p-2 text-right">$170</td>
                            <td className="p-2 text-right text-green-400">$1,880</td>
                            <td className="p-2 text-right text-green-400">1106%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Track 2 Lunch Tab */}
                  <div className="bg-gray-900/50 rounded p-4">
                    <div className="text-[#D4AF37] font-bold mb-3">Tab 2: Track 2 Lunch Delivery</div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs border-collapse">
                        <thead>
                          <tr className="bg-gray-800/50 border-b border-gray-700">
                            <th className="p-2 text-left text-gray-400 font-semibold">Week</th>
                            <th className="p-2 text-right text-gray-400 font-semibold">Orders</th>
                            <th className="p-2 text-right text-gray-400 font-semibold">Revenue</th>
                            <th className="p-2 text-right text-gray-400 font-semibold">Platform Fees</th>
                            <th className="p-2 text-right text-gray-400 font-semibold">Food Cost</th>
                            <th className="p-2 text-right text-gray-400 font-semibold">Labor</th>
                            <th className="p-2 text-right text-gray-400 font-semibold">Net Profit</th>
                          </tr>
                        </thead>
                        <tbody className="text-gray-300">
                          <tr className="border-b border-gray-800">
                            <td className="p-2">Nov 12-18</td>
                            <td className="p-2 text-right">18</td>
                            <td className="p-2 text-right">$270</td>
                            <td className="p-2 text-right">$68</td>
                            <td className="p-2 text-right">$89</td>
                            <td className="p-2 text-right">$40</td>
                            <td className="p-2 text-right text-green-400">$73</td>
                          </tr>
                          <tr className="border-b border-gray-800">
                            <td className="p-2">Nov 19-25</td>
                            <td className="p-2 text-right">32</td>
                            <td className="p-2 text-right">$480</td>
                            <td className="p-2 text-right">$120</td>
                            <td className="p-2 text-right">$158</td>
                            <td className="p-2 text-right">$72</td>
                            <td className="p-2 text-right text-green-400">$130</td>
                          </tr>
                          <tr className="bg-gray-800/30 font-semibold">
                            <td className="p-2">2-Week Total</td>
                            <td className="p-2 text-right">50</td>
                            <td className="p-2 text-right">$750</td>
                            <td className="p-2 text-right">$188</td>
                            <td className="p-2 text-right">$247</td>
                            <td className="p-2 text-right">$112</td>
                            <td className="p-2 text-right text-green-400">$203</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Overall Business Tab */}
                  <div className="bg-gray-900/50 rounded p-4">
                    <div className="text-purple-400 font-bold mb-3">Tab 3: Overall Business</div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs border-collapse">
                        <thead>
                          <tr className="bg-gray-800/50 border-b border-gray-700">
                            <th className="p-2 text-left text-gray-400 font-semibold">Week</th>
                            <th className="p-2 text-right text-gray-400 font-semibold">Events</th>
                            <th className="p-2 text-right text-gray-400 font-semibold">Lunch</th>
                            <th className="p-2 text-right text-gray-400 font-semibold">Regular</th>
                            <th className="p-2 text-right text-gray-400 font-semibold">Total</th>
                            <th className="p-2 text-right text-gray-400 font-semibold">vs Last Week</th>
                            <th className="p-2 text-right text-gray-400 font-semibold">vs Month Ago</th>
                          </tr>
                        </thead>
                        <tbody className="text-gray-300">
                          <tr className="border-b border-gray-800">
                            <td className="p-2">Nov 12-18</td>
                            <td className="p-2 text-right">$2,050</td>
                            <td className="p-2 text-right">$270</td>
                            <td className="p-2 text-right">$8,200</td>
                            <td className="p-2 text-right font-semibold">$10,520</td>
                            <td className="p-2 text-right text-green-400">+12%</td>
                            <td className="p-2 text-right text-green-400">+18%</td>
                          </tr>
                          <tr className="border-b border-gray-800">
                            <td className="p-2">Nov 19-25</td>
                            <td className="p-2 text-right">$2,200</td>
                            <td className="p-2 text-right">$480</td>
                            <td className="p-2 text-right">$8,500</td>
                            <td className="p-2 text-right font-semibold">$11,180</td>
                            <td className="p-2 text-right text-green-400">+6%</td>
                            <td className="p-2 text-right text-green-400">+21%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-900/20 border-l-4 border-blue-500 rounded">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    <strong className="text-white">Pro tip:</strong> Use conditional formatting to highlight
                    cells that hit or exceed targets (green) vs fall short (yellow/red). This makes it easy
                    to spot trends at a glance during your Monday review.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ExpandableSection>
      </div>

      {/* Expandable Section: Success Metrics Timeline */}
      <div className="mb-8">
        <ExpandableSection
          title="Success Metrics Timeline: What Good Looks Like"
          badge="recommended"
          executiveSummary={
            <>
              Clear checkpoints at Week 2, Month 1, Month 2, and Month 3 so you know if you're on track
              or need to make adjustments. Each milestone has specific targets for both tracks.
            </>
          }
        >
          <div className="space-y-8">
            {/* Timeline Introduction */}
            <div>
              <h4 className="text-xl font-bold text-white mb-4">How to Use This Timeline</h4>
              <div className="bg-gray-800/50 rounded-lg p-6">
                <p className="text-gray-300 mb-4 leading-relaxed">
                  These checkpoints tell you what success looks like at each stage. If you're hitting
                  these targets, keep doing what you're doing. If you're falling short, it's time to
                  diagnose the problem and adjust.
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-green-900/20 border border-green-600/30 rounded p-3">
                    <div className="text-green-400 font-semibold mb-2">On Track</div>
                    <p className="text-gray-400">Meeting or exceeding targets - maintain course</p>
                  </div>
                  <div className="bg-yellow-900/20 border border-yellow-600/30 rounded p-3">
                    <div className="text-yellow-400 font-semibold mb-2">Needs Attention</div>
                    <p className="text-gray-400">50-90% of target - make small adjustments</p>
                  </div>
                  <div className="bg-red-900/20 border border-red-600/30 rounded p-3">
                    <div className="text-red-400 font-semibold mb-2">Problem</div>
                    <p className="text-gray-400">Under 50% - significant changes needed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Week 2 Checkpoint */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">W2</div>
                <h4 className="text-2xl font-bold text-white">Week 2 Checkpoint (Nov 18-24)</h4>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-[#b22222]/10 to-transparent border border-[#b22222]/30 rounded-lg p-6">
                  <div className="text-[#b22222] font-bold mb-3">Track 1: Events</div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="text-white font-semibold mb-1">Target Attendance</div>
                      <ul className="text-gray-400 space-y-1">
                        <li>• Latin Dance: 20-30 people</li>
                        <li>• Social Night: 15-25 people</li>
                      </ul>
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1">Target Revenue</div>
                      <div className="text-2xl font-bold text-white">$1,800-2,500</div>
                      <div className="text-gray-400">Week 2 total</div>
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1">If Missing Target</div>
                      <ul className="text-gray-400 space-y-1">
                        <li>• Boost social media promotion</li>
                        <li>• Text/email invite to regular customers</li>
                        <li>• Add table tent promos inside restaurant</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/30 rounded-lg p-6">
                  <div className="text-[#D4AF37] font-bold mb-3">Track 2: Lunch</div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="text-white font-semibold mb-1">Target Orders</div>
                      <ul className="text-gray-400 space-y-1">
                        <li>• 12-18 orders for the week</li>
                        <li>• At least 3-4 different office locations</li>
                      </ul>
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1">Target Revenue</div>
                      <div className="text-2xl font-bold text-white">$180-300</div>
                      <div className="text-gray-400">Week 2 total</div>
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1">If Missing Target</div>
                      <ul className="text-gray-400 space-y-1">
                        <li>• Hit more offices with flyers</li>
                        <li>• Follow up with office managers called in Week 1</li>
                        <li>• Extend promo code by 1 week</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Month 1 Checkpoint */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">M1</div>
                <h4 className="text-2xl font-bold text-white">Month 1 Checkpoint (End of November)</h4>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-[#b22222]/10 to-transparent border border-[#b22222]/30 rounded-lg p-6">
                  <div className="text-[#b22222] font-bold mb-3">Track 1: Events</div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="text-white font-semibold mb-1">Monthly Totals</div>
                      <ul className="text-gray-400 space-y-1">
                        <li>• 6-8 total events (3 weeks × 2-3 events)</li>
                        <li>• 120-180 total attendees</li>
                      </ul>
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1">Target Revenue</div>
                      <div className="text-2xl font-bold text-white">$5,100-7,500</div>
                      <div className="text-gray-400">Month 1 total</div>
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1">Key Questions</div>
                      <ul className="text-gray-400 space-y-1">
                        <li>• Which night performs better - Tuesday or Thursday?</li>
                        <li>• Are repeat attendees starting to emerge?</li>
                        <li>• Is avg spend per person increasing?</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/30 rounded-lg p-6">
                  <div className="text-[#D4AF37] font-bold mb-3">Track 2: Lunch</div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="text-white font-semibold mb-1">Monthly Totals</div>
                      <ul className="text-gray-400 space-y-1">
                        <li>• 50-75 total orders</li>
                        <li>• 5-8 recurring corporate accounts</li>
                      </ul>
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1">Target Revenue</div>
                      <div className="text-2xl font-bold text-white">$2,000-3,500</div>
                      <div className="text-gray-400">Month 1 total (net of fees)</div>
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1">Key Questions</div>
                      <ul className="text-gray-400 space-y-1">
                        <li>• Which offices are repeat ordering?</li>
                        <li>• What menu items are most popular?</li>
                        <li>• Are delivery times under 30 minutes?</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Month 2 Checkpoint */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center text-white font-bold">M2</div>
                <h4 className="text-2xl font-bold text-white">Month 2 Checkpoint (End of December)</h4>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-[#b22222]/10 to-transparent border border-[#b22222]/30 rounded-lg p-6">
                  <div className="text-[#b22222] font-bold mb-3">Track 1: Events</div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="text-white font-semibold mb-1">Monthly Totals</div>
                      <ul className="text-gray-400 space-y-1">
                        <li>• 8-10 total events</li>
                        <li>• 180-240 total attendees</li>
                        <li>• 30-40% repeat customer rate</li>
                      </ul>
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1">Target Revenue</div>
                      <div className="text-2xl font-bold text-white">$6,800-9,500</div>
                      <div className="text-gray-400">Month 2 total</div>
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1">Growth Indicators</div>
                      <ul className="text-gray-400 space-y-1">
                        <li>• Avg spend per person increasing</li>
                        <li>• Events hitting capacity (30+ people)</li>
                        <li>• Strong social media engagement</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/30 rounded-lg p-6">
                  <div className="text-[#D4AF37] font-bold mb-3">Track 2: Lunch</div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="text-white font-semibold mb-1">Monthly Totals</div>
                      <ul className="text-gray-400 space-y-1">
                        <li>• 100-140 total orders</li>
                        <li>• 10-15 recurring accounts</li>
                        <li>• 25% repeat order rate</li>
                      </ul>
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1">Target Revenue</div>
                      <div className="text-2xl font-bold text-white">$5,000-7,500</div>
                      <div className="text-gray-400">Month 2 total (net of fees)</div>
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1">Growth Indicators</div>
                      <ul className="text-gray-400 space-y-1">
                        <li>• Weekly order volume doubling</li>
                        <li>• Positive customer reviews appearing</li>
                        <li>• Some offices ordering 2-3x/week</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Month 3 Checkpoint */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">M3</div>
                <h4 className="text-2xl font-bold text-white">Month 3 Checkpoint (End of January) - GOAL</h4>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-[#b22222]/10 to-transparent border border-[#b22222]/30 rounded-lg p-6">
                  <div className="text-[#b22222] font-bold mb-3">Track 1: Events</div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="text-white font-semibold mb-1">Monthly Totals</div>
                      <ul className="text-gray-400 space-y-1">
                        <li>• 10-12 total events</li>
                        <li>• 240-320 total attendees</li>
                        <li>• 50%+ repeat customer rate</li>
                      </ul>
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1">Target Revenue</div>
                      <div className="text-2xl font-bold text-white">$8,500-12,000</div>
                      <div className="text-gray-400">Month 3 total</div>
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1">Success Markers</div>
                      <ul className="text-gray-400 space-y-1">
                        <li>• Events are self-sustaining (word of mouth)</li>
                        <li>• Regular community forming around events</li>
                        <li>• ROI consistently over 500%</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/30 rounded-lg p-6">
                  <div className="text-[#D4AF37] font-bold mb-3">Track 2: Lunch</div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="text-white font-semibold mb-1">Monthly Totals</div>
                      <ul className="text-gray-400 space-y-1">
                        <li>• 200-280 total orders</li>
                        <li>• 15-20 recurring accounts</li>
                        <li>• 40% repeat order rate</li>
                      </ul>
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1">Target Revenue</div>
                      <div className="text-2xl font-bold text-white">$8,000-12,000</div>
                      <div className="text-gray-400">Month 3 total (net of fees)</div>
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1">Success Markers</div>
                      <ul className="text-gray-400 space-y-1">
                        <li>• Lunch is 15-20% of total revenue</li>
                        <li>• Kitchen prep becoming routine</li>
                        <li>• Profitable after all costs</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ExpandableSection>
      </div>

      {/* Expandable Section: Event-Specific Performance Metrics */}
      <div className="mb-8">
        <ExpandableSection
          title="Event-Specific Performance Metrics: Month 1 vs Month 3"
          badge="recommended"
          executiveSummary={
            <>
              Detailed performance metrics comparing launch month (Month 1) vs established performance (Month 3).
              Track attendance, revenue per event, customer acquisition, and operational efficiency improvements as
              events mature. <strong className="text-white">See exactly how growth should look.</strong>
            </>
          }
        >
          <div className="space-y-10">
            {/* Introduction */}
            <div>
              <h4 className="text-xl font-bold text-white mb-4">Understanding Event Maturation</h4>
              <div className="bg-gradient-to-r from-blue-900/10 to-transparent border-l-4 border-blue-500 rounded p-6">
                <p className="text-gray-300 leading-relaxed">
                  Events don't reach peak performance immediately. There's a natural maturation curve as word spreads,
                  community forms, and operational efficiency improves. These metrics show what "good" looks like at
                  each stage, so you can benchmark your actual performance against realistic targets.
                </p>
              </div>
            </div>

            {/* Latin Dance Event Metrics */}
            <div>
              <h4 className="text-2xl font-bold text-white mb-6">Tuesday Latin Dance: Evolution Metrics</h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-900/80 border-b-2 border-[#b22222]">
                      <th className="text-left p-4 text-gray-400 font-semibold">Metric</th>
                      <th className="text-center p-4 text-gray-400 font-semibold">Month 1 (Launch)</th>
                      <th className="text-center p-4 text-gray-400 font-semibold">Month 3 (Established)</th>
                      <th className="text-center p-4 text-gray-400 font-semibold">Growth Factor</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/50">
                    <tr>
                      <td className="p-4 font-semibold text-white">Avg Attendance per Event</td>
                      <td className="p-4 text-center text-gray-300">20-25 people</td>
                      <td className="p-4 text-center text-green-400 font-bold">28-35 people</td>
                      <td className="p-4 text-center text-blue-400">+40-50%</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Entry Fee Revenue per Event</td>
                      <td className="p-4 text-center text-gray-300">$200-250</td>
                      <td className="p-4 text-center text-green-400 font-bold">$280-350</td>
                      <td className="p-4 text-center text-blue-400">+40-50%</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Food & Drink Revenue per Event</td>
                      <td className="p-4 text-center text-gray-300">$400-550</td>
                      <td className="p-4 text-center text-green-400 font-bold">$650-900</td>
                      <td className="p-4 text-center text-blue-400">+60-65%</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Total Revenue per Event</td>
                      <td className="p-4 text-center text-gray-300">$600-800</td>
                      <td className="p-4 text-center text-green-400 font-bold">$930-1,250</td>
                      <td className="p-4 text-center text-blue-400">+55-65%</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Avg Spend per Person (food/drinks)</td>
                      <td className="p-4 text-center text-gray-300">$20-25</td>
                      <td className="p-4 text-center text-green-400 font-bold">$23-30</td>
                      <td className="p-4 text-center text-blue-400">+15-25%</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Repeat Attendee Rate</td>
                      <td className="p-4 text-center text-gray-300">15-25%</td>
                      <td className="p-4 text-center text-green-400 font-bold">50-60%</td>
                      <td className="p-4 text-center text-blue-400">+200-240%</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Social Media Engagement (per post)</td>
                      <td className="p-4 text-center text-gray-300">15-30 likes/shares</td>
                      <td className="p-4 text-center text-green-400 font-bold">40-80 likes/shares</td>
                      <td className="p-4 text-center text-blue-400">+165-240%</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Events per Month (Bi-Weekly)</td>
                      <td className="p-4 text-center text-gray-300">2 events</td>
                      <td className="p-4 text-center text-green-400 font-bold">2 events</td>
                      <td className="p-4 text-center text-gray-400">Same</td>
                    </tr>
                    <tr className="bg-[#b22222]/10 font-bold">
                      <td className="p-4 text-white">Monthly Revenue (Latin Dance Only)</td>
                      <td className="p-4 text-center text-white">$1,200-1,600</td>
                      <td className="p-4 text-center text-green-400 text-lg">$1,860-2,500</td>
                      <td className="p-4 text-center text-blue-400">+55-65%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 grid md:grid-cols-2 gap-4 text-sm">
                <div className="bg-gray-800/50 rounded p-4">
                  <div className="text-[#b22222] font-bold mb-2">Why Month 1 is Lower</div>
                  <ul className="text-gray-400 space-y-1">
                    <li>• Brand new event - limited awareness</li>
                    <li>• No word-of-mouth yet</li>
                    <li>• Customers testing it out (lower spend)</li>
                    <li>• Marketing just getting started</li>
                  </ul>
                </div>
                <div className="bg-gray-800/50 rounded p-4">
                  <div className="text-green-400 font-bold mb-2">Why Month 3 is Higher</div>
                  <ul className="text-gray-400 space-y-1">
                    <li>• Strong word-of-mouth referrals</li>
                    <li>• Repeat customers spend more confidently</li>
                    <li>• Community forming around event</li>
                    <li>• Social media momentum building</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Thursday Social Night Metrics */}
            <div>
              <h4 className="text-2xl font-bold text-white mb-6">Thursday Social Night: Evolution Metrics</h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-900/80 border-b-2 border-[#b22222]">
                      <th className="text-left p-4 text-gray-400 font-semibold">Metric</th>
                      <th className="text-center p-4 text-gray-400 font-semibold">Month 1 (Launch)</th>
                      <th className="text-center p-4 text-gray-400 font-semibold">Month 3 (Established)</th>
                      <th className="text-center p-4 text-gray-400 font-semibold">Growth Factor</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/50">
                    <tr>
                      <td className="p-4 font-semibold text-white">Avg Attendance per Event</td>
                      <td className="p-4 text-center text-gray-300">12-18 people</td>
                      <td className="p-4 text-center text-green-400 font-bold">22-30 people</td>
                      <td className="p-4 text-center text-blue-400">+65-85%</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Avg Spend per Person</td>
                      <td className="p-4 text-center text-gray-300">$20-28</td>
                      <td className="p-4 text-center text-green-400 font-bold">$28-38</td>
                      <td className="p-4 text-center text-blue-400">+35-40%</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Total Revenue per Event</td>
                      <td className="p-4 text-center text-gray-300">$240-500</td>
                      <td className="p-4 text-center text-green-400 font-bold">$615-1,140</td>
                      <td className="p-4 text-center text-blue-400">+128-155%</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Repeat Customer Rate</td>
                      <td className="p-4 text-center text-gray-300">10-20%</td>
                      <td className="p-4 text-center text-green-400 font-bold">45-55%</td>
                      <td className="p-4 text-center text-blue-400">+175-350%</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Group Size (people arriving together)</td>
                      <td className="p-4 text-center text-gray-300">1-2 people</td>
                      <td className="p-4 text-center text-green-400 font-bold">2-4 people</td>
                      <td className="p-4 text-center text-blue-400">+100-150%</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Color-Coded Band Usage Rate</td>
                      <td className="p-4 text-center text-gray-300">40-50%</td>
                      <td className="p-4 text-center text-green-400 font-bold">65-80%</td>
                      <td className="p-4 text-center text-blue-400">+60-65%</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Events per Month (Weekly)</td>
                      <td className="p-4 text-center text-gray-300">4 events</td>
                      <td className="p-4 text-center text-green-400 font-bold">4 events</td>
                      <td className="p-4 text-center text-gray-400">Same</td>
                    </tr>
                    <tr className="bg-[#b22222]/10 font-bold">
                      <td className="p-4 text-white">Monthly Revenue (Social Night Only)</td>
                      <td className="p-4 text-center text-white">$960-2,000</td>
                      <td className="p-4 text-center text-green-400 text-lg">$2,460-4,560</td>
                      <td className="p-4 text-center text-blue-400">+128-155%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 bg-blue-900/10 border-l-4 border-blue-500 rounded p-6">
                <div className="text-white font-semibold mb-2">Why Social Night Growth is Higher than Latin Dance</div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Social Night shows steeper growth curves because it relies entirely on word-of-mouth and community building.
                  As regulars bring friends and social groups form, attendance compounds faster. Latin Dance growth is more
                  linear because it's limited by dance skill acquisition (can't just bring anyone - they need to want to learn).
                </p>
              </div>
            </div>

            {/* Lunch Delivery Metrics */}
            <div>
              <h4 className="text-2xl font-bold text-white mb-6">Lunch Delivery: Evolution Metrics</h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-900/80 border-b-2 border-[#D4AF37]">
                      <th className="text-left p-4 text-gray-400 font-semibold">Metric</th>
                      <th className="text-center p-4 text-gray-400 font-semibold">Month 1 (Launch)</th>
                      <th className="text-center p-4 text-gray-400 font-semibold">Month 3 (Established)</th>
                      <th className="text-center p-4 text-gray-400 font-semibold">Growth Factor</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/50">
                    <tr>
                      <td className="p-4 font-semibold text-white">Orders per Week</td>
                      <td className="p-4 text-center text-gray-300">10-18 orders</td>
                      <td className="p-4 text-center text-green-400 font-bold">50-70 orders</td>
                      <td className="p-4 text-center text-blue-400">+290-400%</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Avg Order Value</td>
                      <td className="p-4 text-center text-gray-300">$14-16</td>
                      <td className="p-4 text-center text-green-400 font-bold">$17-20</td>
                      <td className="p-4 text-center text-blue-400">+20-30%</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Recurring Corporate Accounts</td>
                      <td className="p-4 text-center text-gray-300">2-4 accounts</td>
                      <td className="p-4 text-center text-green-400 font-bold">15-20 accounts</td>
                      <td className="p-4 text-center text-blue-400">+400-650%</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Repeat Order Rate</td>
                      <td className="p-4 text-center text-gray-300">15-25%</td>
                      <td className="p-4 text-center text-green-400 font-bold">40-50%</td>
                      <td className="p-4 text-center text-blue-400">+100-165%</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Direct Orders (vs Third-Party)</td>
                      <td className="p-4 text-center text-gray-300">10-20%</td>
                      <td className="p-4 text-center text-green-400 font-bold">35-50%</td>
                      <td className="p-4 text-center text-blue-400">+150-250%</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Avg Delivery Time (minutes)</td>
                      <td className="p-4 text-center text-gray-300">32-38 min</td>
                      <td className="p-4 text-center text-green-400 font-bold">22-28 min</td>
                      <td className="p-4 text-center text-blue-400">-26-32%</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Customer Rating (avg)</td>
                      <td className="p-4 text-center text-gray-300">4.2-4.5 stars</td>
                      <td className="p-4 text-center text-green-400 font-bold">4.6-4.9 stars</td>
                      <td className="p-4 text-center text-blue-400">+9-11%</td>
                    </tr>
                    <tr className="bg-[#D4AF37]/10 font-bold">
                      <td className="p-4 text-white">Monthly Revenue (Gross)</td>
                      <td className="p-4 text-center text-white">$2,000-3,500</td>
                      <td className="p-4 text-center text-green-400 text-lg">$8,000-12,000</td>
                      <td className="p-4 text-center text-blue-400">+243-300%</td>
                    </tr>
                    <tr className="bg-[#D4AF37]/10 font-bold">
                      <td className="p-4 text-white">Monthly Net Profit (after all costs)</td>
                      <td className="p-4 text-center text-white">$200-600</td>
                      <td className="p-4 text-center text-green-400 text-lg">$2,800-5,200</td>
                      <td className="p-4 text-center text-blue-400">+767-1300%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-gray-800/50 rounded p-4">
                  <div className="text-[#D4AF37] font-bold mb-2">Month 1 Challenges</div>
                  <ul className="text-gray-400 space-y-1">
                    <li>• Unknown to offices</li>
                    <li>• Building trust and quality reputation</li>
                    <li>• Slower kitchen prep times</li>
                    <li>• Heavy reliance on third-party platforms</li>
                  </ul>
                </div>
                <div className="bg-gray-800/50 rounded p-4">
                  <div className="text-[#D4AF37] font-bold mb-2">Month 3 Improvements</div>
                  <ul className="text-gray-400 space-y-1">
                    <li>• Direct relationships with offices</li>
                    <li>• Recurring weekly orders</li>
                    <li>• Kitchen efficiency optimized</li>
                    <li>• Higher direct order percentage</li>
                  </ul>
                </div>
                <div className="bg-gray-800/50 rounded p-4">
                  <div className="text-[#D4AF37] font-bold mb-2">Profit Acceleration</div>
                  <ul className="text-gray-400 space-y-1">
                    <li>• Shift from 3rd party to direct (save 20-30% fees)</li>
                    <li>• Higher order values from upsells</li>
                    <li>• Operational efficiency gains</li>
                    <li>• Group orders become common</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Combined Business Impact */}
            <div>
              <h4 className="text-2xl font-bold text-white mb-6">Combined Business Impact: Month 1 vs Month 3</h4>
              <div className="bg-gradient-to-r from-green-900/20 to-transparent border-2 border-green-500/50 rounded-xl p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Month 1 Totals */}
                  <div>
                    <div className="text-center mb-6">
                      <div className="text-sm text-gray-400 mb-2">MONTH 1 (LAUNCH)</div>
                      <div className="text-5xl font-bold text-white mb-2">$7.1K-11K</div>
                      <div className="text-sm text-gray-400">Total monthly revenue increase</div>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between text-gray-300 border-b border-gray-700 pb-2">
                        <span>Latin Dance (2 events):</span>
                        <span className="font-bold text-white">$1,200-1,600</span>
                      </div>
                      <div className="flex justify-between text-gray-300 border-b border-gray-700 pb-2">
                        <span>Social Night (4 events):</span>
                        <span className="font-bold text-white">$960-2,000</span>
                      </div>
                      <div className="flex justify-between text-gray-300 border-b border-gray-700 pb-2">
                        <span>Sushi & Sounds (1 event):</span>
                        <span className="font-bold text-white">$1,200-1,500</span>
                      </div>
                      <div className="flex justify-between text-gray-300 border-b border-gray-700 pb-2">
                        <span>Lunch Delivery (net):</span>
                        <span className="font-bold text-white">$200-600</span>
                      </div>
                      <div className="flex justify-between text-gray-300 pb-2">
                        <span>Regular business spillover:</span>
                        <span className="font-bold text-white">$3,500-5,000</span>
                      </div>
                    </div>
                  </div>

                  {/* Month 3 Totals */}
                  <div>
                    <div className="text-center mb-6">
                      <div className="text-sm text-green-400 mb-2">MONTH 3 (ESTABLISHED)</div>
                      <div className="text-5xl font-bold text-green-400 mb-2">$18K-27K</div>
                      <div className="text-sm text-gray-400">Total monthly revenue increase</div>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between text-gray-300 border-b border-gray-700 pb-2">
                        <span>Latin Dance (2 events):</span>
                        <span className="font-bold text-green-400">$1,860-2,500</span>
                      </div>
                      <div className="flex justify-between text-gray-300 border-b border-gray-700 pb-2">
                        <span>Social Night (4 events):</span>
                        <span className="font-bold text-green-400">$2,460-4,560</span>
                      </div>
                      <div className="flex justify-between text-gray-300 border-b border-gray-700 pb-2">
                        <span>Sushi & Sounds (1 event):</span>
                        <span className="font-bold text-green-400">$1,500-2,000</span>
                      </div>
                      <div className="flex justify-between text-gray-300 border-b border-gray-700 pb-2">
                        <span>Lunch Delivery (net):</span>
                        <span className="font-bold text-green-400">$2,800-5,200</span>
                      </div>
                      <div className="flex justify-between text-gray-300 pb-2">
                        <span>Regular business spillover:</span>
                        <span className="font-bold text-green-400">$9,000-13,000</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Growth Summary */}
                <div className="mt-8 pt-6 border-t-2 border-green-500/30">
                  <div className="text-center">
                    <div className="text-sm text-gray-400 mb-2">TOTAL GROWTH (Month 1 → Month 3)</div>
                    <div className="text-4xl font-bold text-green-400 mb-2">+154% to +245%</div>
                    <div className="text-sm text-gray-300">Revenue more than doubles or triples by Month 3</div>
                  </div>
                </div>
              </div>
            </div>

            {/* What to Do with This Data */}
            <div>
              <h4 className="text-2xl font-bold text-white mb-6">How to Use These Metrics</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-500/30 rounded-lg p-6">
                  <div className="text-blue-400 font-bold mb-3 text-lg">If You're Meeting/Exceeding Targets</div>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">✓</span>
                      <span>You're on track - maintain current course and continue weekly reviews</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">✓</span>
                      <span>Document what's working well in your tracking spreadsheet</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">✓</span>
                      <span>Consider adding future programming (Wednesday happy hour, NFL Sundays)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-red-900/20 to-transparent border border-red-500/30 rounded-lg p-6">
                  <div className="text-red-400 font-bold mb-3 text-lg">If You're Below Targets (50-90%)</div>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">!</span>
                      <span>Identify the specific bottleneck: Awareness? Attendance? Spend per person?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">!</span>
                      <span>Increase marketing effort - more social posts, flyers, direct outreach</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">!</span>
                      <span>Consider promotional offers to drive trial (first event half-price, group discounts)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </ExpandableSection>
      </div>

      {/* Track 3 Summary */}
      <div className="bg-gradient-to-br from-[#00A86B]/20 to-[#00A86B]/5 border border-[#00A86B]/30 rounded-xl p-8 shadow-strong">
        <h3 className="text-2xl font-bold text-white mb-6">Track 3 Summary: The Bottom Line</h3>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <div className="text-[#00A86B] font-bold mb-4 text-lg">Why Tracking Matters</div>
            <ul className="text-gray-300 space-y-3 text-sm leading-relaxed">
              <li>
                <strong className="text-white">Identifies what works:</strong> Know which events and lunch
                strategies drive the most profit so you can double down.
              </li>
              <li>
                <strong className="text-white">Prevents wasted investment:</strong> Spot underperforming
                initiatives early before throwing more money at them.
              </li>
              <li>
                <strong className="text-white">Builds confidence:</strong> See concrete evidence that the
                strategy is working (or needs adjustment) with real numbers.
              </li>
              <li>
                <strong className="text-white">Enables smart scaling:</strong> Use Month 3 data to decide
                which initiatives to expand and which to optimize.
              </li>
            </ul>
          </div>

          <div>
            <div className="text-[#00A86B] font-bold mb-4 text-lg">The 30-Minute Monday Habit</div>
            <div className="bg-gray-800/50 rounded-lg p-6">
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                The entire tracking system comes down to one simple habit:
              </p>
              <div className="bg-[#00A86B]/10 border border-[#00A86B]/30 rounded p-4">
                <div className="text-center">
                  <div className="text-[#00A86B] font-bold text-sm mb-2">EVERY MONDAY AT 10AM</div>
                  <div className="text-3xl font-bold text-white mb-2">30 Minutes</div>
                  <div className="text-gray-400 text-sm">Review last week. Make 1-2 decisions.</div>
                </div>
              </div>
              <p className="text-gray-300 mt-4 text-sm leading-relaxed">
                That's it. No complex dashboards, no expensive software. Just 30 minutes every Monday to
                ensure you're on track to hit your Month 3 revenue targets.
              </p>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-4 pt-6 border-t border-[#00A86B]/30">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">3</div>
            <div className="text-sm text-gray-400">Areas to Track</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">30</div>
            <div className="text-sm text-gray-400">Minutes Per Week</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">4</div>
            <div className="text-sm text-gray-400">Major Checkpoints</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#00A86B] mb-1">$16.5K-$24K</div>
            <div className="text-sm text-gray-400">Month 3 Revenue Target</div>
          </div>
        </div>
      </div>
    </div>
  );
}
