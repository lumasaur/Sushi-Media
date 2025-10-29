'use client';

import React from 'react';
import { ExpandableSection } from './ExpandableSection';

export function Track1EventsSection() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="flex items-center gap-4 mb-10">
        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#b22222] flex items-center justify-center shadow-glow-red">
          <span className="text-2xl font-bold text-white">T1</span>
        </div>
        <div>
          <div className="text-sm text-[#b22222] font-bold mb-1 tracking-wide">TRACK 1</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Events Programming</h2>
          <p className="text-gray-400 mt-2 text-lg">Build consistent mid-week traffic with proven social formats</p>
        </div>
      </div>

      {/* The Problem & Approach */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div className="card-dark p-8 shadow-medium">
          <h3 className="text-2xl font-bold text-white mb-4">The Problem We're Solving</h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            Tuesday and Thursday nights are slow. We need recurring programming that gives customers a reason
            to come in mid-week, without overwhelming our staff or existing patrons.
          </p>
        </div>

        <div className="card-dark p-8 shadow-medium border-l-4 border-[#b22222]">
          <h3 className="text-2xl font-bold text-white mb-4">Our Phased Approach</h3>
          <div className="space-y-3 text-gray-300">
            <div>
              <strong className="text-white">Phase 1 (Nov-Dec):</strong> Launch Tuesday and Thursday only
            </div>
            <div>
              <strong className="text-white">Phase 2 (Jan+):</strong> Add additional programming based on results
            </div>
            <div className="text-sm text-gray-400 mt-4">
              Why start with just two nights? Manageable for staff, test marketing and operations, build confidence through early wins.
            </div>
          </div>
        </div>
      </div>

      {/* November 2024 Calendar Visual */}
      <div className="card-dark p-8 mb-10 shadow-strong border-2 border-[#b22222]/30">
        <h3 className="text-3xl font-bold text-white mb-6 text-center">November 2024 Launch Calendar</h3>
        <p className="text-center text-gray-400 mb-8">Your roadmap to consistent weekday traffic</p>

        <div className="overflow-x-auto">
          <div className="min-w-[700px]">
            {/* Calendar Header */}
            <div className="grid grid-cols-7 gap-2 mb-2">
              <div className="text-center text-sm font-bold text-gray-400 py-2">SUN</div>
              <div className="text-center text-sm font-bold text-gray-400 py-2">MON</div>
              <div className="text-center text-sm font-bold text-gray-400 py-2">TUE</div>
              <div className="text-center text-sm font-bold text-gray-400 py-2">WED</div>
              <div className="text-center text-sm font-bold text-gray-400 py-2">THU</div>
              <div className="text-center text-sm font-bold text-gray-400 py-2">FRI</div>
              <div className="text-center text-sm font-bold text-gray-400 py-2">SAT</div>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-2">
              {/* Week 1: Oct 27 - Nov 2 */}
              <div className="bg-gray-800/30 rounded p-3 min-h-[100px] opacity-50">
                <div className="text-xs text-gray-500">27</div>
              </div>
              <div className="bg-gray-800/30 rounded p-3 min-h-[100px] opacity-50">
                <div className="text-xs text-gray-500">28</div>
              </div>
              <div className="bg-gray-800/30 rounded p-3 min-h-[100px] opacity-50">
                <div className="text-xs text-gray-500">29</div>
              </div>
              <div className="bg-gray-800/30 rounded p-3 min-h-[100px] opacity-50">
                <div className="text-xs text-gray-500">30</div>
              </div>
              <div className="bg-gray-800/30 rounded p-3 min-h-[100px] opacity-50">
                <div className="text-xs text-gray-500">31</div>
              </div>
              <div className="bg-gray-800/50 rounded p-3 min-h-[100px]">
                <div className="text-sm font-bold text-white mb-1">1</div>
              </div>
              <div className="bg-gray-800/50 rounded p-3 min-h-[100px]">
                <div className="text-sm font-bold text-white mb-1">2</div>
              </div>

              {/* Week 2: Nov 3-9 (Preparation Week) */}
              <div className="bg-gray-800/50 rounded p-3 min-h-[100px]">
                <div className="text-sm font-bold text-white mb-1">3</div>
              </div>
              <div className="bg-gray-800/50 rounded p-3 min-h-[100px]">
                <div className="text-sm font-bold text-white mb-1">4</div>
                <div className="text-xs text-yellow-400 font-semibold">Final Prep Week</div>
              </div>
              <div className="bg-gray-800/50 rounded p-3 min-h-[100px]">
                <div className="text-sm font-bold text-white mb-1">5</div>
              </div>
              <div className="bg-gray-800/50 rounded p-3 min-h-[100px]">
                <div className="text-sm font-bold text-white mb-1">6</div>
              </div>
              <div className="bg-gray-800/50 rounded p-3 min-h-[100px]">
                <div className="text-sm font-bold text-white mb-1">7</div>
              </div>
              <div className="bg-gray-800/50 rounded p-3 min-h-[100px]">
                <div className="text-sm font-bold text-white mb-1">8</div>
              </div>
              <div className="bg-gray-800/50 rounded p-3 min-h-[100px]">
                <div className="text-sm font-bold text-white mb-1">9</div>
              </div>

              {/* Week 3: Nov 10-16 (LAUNCH WEEK) */}
              <div className="bg-gray-800/50 rounded p-3 min-h-[100px]">
                <div className="text-sm font-bold text-white mb-1">10</div>
              </div>
              <div className="bg-gray-800/50 rounded p-3 min-h-[100px]">
                <div className="text-sm font-bold text-white mb-1">11</div>
                <div className="text-xs text-purple-400 font-semibold">Launch Week!</div>
              </div>
              <div className="bg-gradient-to-br from-[#b22222]/30 to-[#b22222]/10 border-2 border-[#b22222] rounded p-3 min-h-[100px]">
                <div className="text-sm font-bold text-white mb-1">12</div>
                <div className="text-xs text-[#b22222] font-bold mb-1">LAUNCH</div>
                <div className="text-xs text-white font-semibold leading-tight">Latin Dance</div>
                <div className="text-xs text-gray-400">7-10pm</div>
              </div>
              <div className="bg-gray-800/50 rounded p-3 min-h-[100px]">
                <div className="text-sm font-bold text-white mb-1">13</div>
              </div>
              <div className="bg-gradient-to-br from-[#b22222]/30 to-[#b22222]/10 border-2 border-[#b22222] rounded p-3 min-h-[100px]">
                <div className="text-sm font-bold text-white mb-1">14</div>
                <div className="text-xs text-[#b22222] font-bold mb-1">LAUNCH</div>
                <div className="text-xs text-white font-semibold leading-tight">Social Night</div>
                <div className="text-xs text-gray-400">7-10pm</div>
              </div>
              <div className="bg-gray-800/50 rounded p-3 min-h-[100px]">
                <div className="text-sm font-bold text-white mb-1">15</div>
              </div>
              <div className="bg-gradient-to-br from-purple-900/30 to-purple-900/10 border-2 border-purple-500/50 rounded p-3 min-h-[100px]">
                <div className="text-sm font-bold text-white mb-1">16</div>
                <div className="text-xs text-purple-400 font-semibold leading-tight">Sushi & Sounds</div>
                <div className="text-xs text-gray-400">7-10pm</div>
              </div>

              {/* Week 4: Nov 17-23 */}
              <div className="bg-gray-800/50 rounded p-3 min-h-[100px]">
                <div className="text-sm font-bold text-white mb-1">17</div>
              </div>
              <div className="bg-gray-800/50 rounded p-3 min-h-[100px]">
                <div className="text-sm font-bold text-white mb-1">18</div>
                <div className="text-xs text-green-400 font-semibold">Week 2 Review</div>
              </div>
              <div className="bg-gray-800/50 rounded p-3 min-h-[100px]">
                <div className="text-sm font-bold text-white mb-1">19</div>
                <div className="text-xs text-gray-500 italic">No Latin Dance</div>
                <div className="text-xs text-gray-500">(Bi-weekly)</div>
              </div>
              <div className="bg-gray-800/50 rounded p-3 min-h-[100px]">
                <div className="text-sm font-bold text-white mb-1">20</div>
              </div>
              <div className="bg-gradient-to-br from-[#b22222]/20 to-[#b22222]/5 border border-[#b22222]/50 rounded p-3 min-h-[100px]">
                <div className="text-sm font-bold text-white mb-1">21</div>
                <div className="text-xs text-white font-semibold leading-tight">Social Night</div>
                <div className="text-xs text-gray-400">7-10pm</div>
              </div>
              <div className="bg-gray-800/50 rounded p-3 min-h-[100px]">
                <div className="text-sm font-bold text-white mb-1">22</div>
              </div>
              <div className="bg-gray-800/50 rounded p-3 min-h-[100px]">
                <div className="text-sm font-bold text-white mb-1">23</div>
              </div>

              {/* Week 5: Nov 24-30 (Thanksgiving Week) */}
              <div className="bg-gray-800/50 rounded p-3 min-h-[100px]">
                <div className="text-sm font-bold text-white mb-1">24</div>
              </div>
              <div className="bg-gray-800/50 rounded p-3 min-h-[100px]">
                <div className="text-sm font-bold text-white mb-1">25</div>
                <div className="text-xs text-orange-400 font-semibold">Thanksgiving Week</div>
              </div>
              <div className="bg-gradient-to-br from-[#b22222]/20 to-[#b22222]/5 border border-[#b22222]/50 rounded p-3 min-h-[100px]">
                <div className="text-sm font-bold text-white mb-1">26</div>
                <div className="text-xs text-white font-semibold leading-tight">Latin Dance</div>
                <div className="text-xs text-gray-400">7-10pm</div>
              </div>
              <div className="bg-gray-800/50 rounded p-3 min-h-[100px]">
                <div className="text-sm font-bold text-white mb-1">27</div>
              </div>
              <div className="bg-orange-900/20 border border-orange-500/30 rounded p-3 min-h-[100px]">
                <div className="text-sm font-bold text-white mb-1">28</div>
                <div className="text-xs text-orange-400 font-semibold">Thanksgiving</div>
              </div>
              <div className="bg-gray-800/50 rounded p-3 min-h-[100px]">
                <div className="text-sm font-bold text-white mb-1">29</div>
              </div>
              <div className="bg-gray-800/50 rounded p-3 min-h-[100px]">
                <div className="text-sm font-bold text-white mb-1">30</div>
              </div>
            </div>

            {/* Legend */}
            <div className="mt-6 flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-gradient-to-br from-[#b22222]/30 to-[#b22222]/10 border-2 border-[#b22222]"></div>
                <span className="text-sm text-gray-300">Launch Events</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-gradient-to-br from-[#b22222]/20 to-[#b22222]/5 border border-[#b22222]/50"></div>
                <span className="text-sm text-gray-300">Recurring Events</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-gradient-to-br from-purple-900/30 to-purple-900/10 border-2 border-purple-500/50"></div>
                <span className="text-sm text-gray-300">Sushi & Sounds (Monthly)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Weekly Calendar Vision */}
      <div className="card-dark p-8 mb-10 shadow-medium">
        <h3 className="text-2xl font-bold text-white mb-6">The Full Weekly Calendar Vision</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-900/80 border-b border-gray-700">
                <th className="text-left p-4 text-gray-400 font-semibold">Day</th>
                <th className="text-left p-4 text-gray-400 font-semibold">Event</th>
                <th className="text-left p-4 text-gray-400 font-semibold">Time</th>
                <th className="text-left p-4 text-gray-400 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700/50">
              <tr>
                <td className="p-4 font-semibold text-white">Sunday</td>
                <td className="p-4 text-gray-300">NFL Sunday</td>
                <td className="p-4 text-gray-400">1-8pm</td>
                <td className="p-4"><span className="px-3 py-1 bg-gray-700 text-gray-400 rounded text-xs">Future consideration</span></td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-white">Monday</td>
                <td className="p-4 text-gray-300">Monday Night Football</td>
                <td className="p-4 text-gray-400">5-11pm</td>
                <td className="p-4"><span className="px-3 py-1 bg-gray-700 text-gray-400 rounded text-xs">Future consideration</span></td>
              </tr>
              <tr className="bg-[#b22222]/10">
                <td className="p-4 font-semibold text-white">Every Other Tuesday</td>
                <td className="p-4 text-white font-semibold">Latin Dance Lessons</td>
                <td className="p-4 text-gray-300">7-10pm</td>
                <td className="p-4"><span className="px-3 py-1 bg-[#b22222] text-white rounded text-xs font-bold">LAUNCHING NOV 12 (BI-WEEKLY)</span></td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-white">Wednesday</td>
                <td className="p-4 text-gray-300">Happy Hour Enhanced</td>
                <td className="p-4 text-gray-400">4:30-7pm</td>
                <td className="p-4"><span className="px-3 py-1 bg-gray-700 text-gray-400 rounded text-xs">Future consideration</span></td>
              </tr>
              <tr className="bg-[#b22222]/10">
                <td className="p-4 font-semibold text-white">Thursday</td>
                <td className="p-4 text-white font-semibold">Social Night</td>
                <td className="p-4 text-gray-300">7-10pm</td>
                <td className="p-4"><span className="px-3 py-1 bg-[#b22222] text-white rounded text-xs font-bold">LAUNCHING NOV 14</span></td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-white">Friday</td>
                <td className="p-4 text-gray-300">Date Night positioning</td>
                <td className="p-4 text-gray-400">Regular hours</td>
                <td className="p-4"><span className="px-3 py-1 bg-green-700 text-white rounded text-xs">Ongoing</span></td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-white">Saturday</td>
                <td className="p-4 text-gray-300">Sushi & Sounds (monthly)</td>
                <td className="p-4 text-gray-400">7-10pm</td>
                <td className="p-4"><span className="px-3 py-1 bg-green-700 text-white rounded text-xs">Ongoing</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6 p-4 bg-blue-900/10 border-l-4 border-blue-500 rounded">
          <p className="text-sm text-gray-300">
            <strong className="text-white">Additional Future Programming:</strong> Dueling Pianos (quarterly), Trivia nights, Sake education sessions, Seasonal celebrations
          </p>
        </div>
      </div>

      {/* Every Other Tuesday: Latin Dance Lessons */}
      <ExpandableSection
        title="Every Other Tuesday: Latin Dance Lessons (Bi-Weekly)"
        badge="high-priority"
        executiveSummary={
          <>
            Beginner-friendly salsa/bachata lessons (7-9pm) + social dancing (9-10pm). <strong className="text-white">No partner required.</strong>
            <strong className="text-[#D4AF37]"> Bi-weekly schedule maintains excitement and prevents burnout.</strong> High
            per-person spend ($15 entry + $20-30 bar/food). <strong className="text-green-400">Expected: $900-1,450/night</strong>, <strong className="text-green-400">$1,800-2,900/month (2 events)</strong>.
            Investment: $100-150/session instructor + $50-100/month marketing.
          </>
        }
      >
        <div className="space-y-8">
          {/* Why It Works */}
          <div>
            <h4 className="text-xl font-bold text-white mb-4">Why It Works</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="card-dark p-5">
                <div className="text-[#b22222] font-bold mb-2">HIGH PER-PERSON SPEND</div>
                <p className="text-sm text-gray-300">$15 entry + $20-30 bar/food = $35-45 per customer</p>
              </div>
              <div className="card-dark p-5">
                <div className="text-[#b22222] font-bold mb-2">RECURRING COMMUNITY</div>
                <p className="text-sm text-gray-300">Bi-weekly schedule keeps students eager to return and practice</p>
              </div>
              <div className="card-dark p-5">
                <div className="text-[#b22222] font-bold mb-2">SOCIAL MEDIA GOLD</div>
                <p className="text-sm text-gray-300">Movement + music + food = highly shareable content</p>
              </div>
              <div className="card-dark p-5">
                <div className="text-[#b22222] font-bold mb-2">SOCIAL ACTIVITY APPEAL</div>
                <p className="text-sm text-gray-300">Young professionals seeking social connection</p>
              </div>
            </div>
          </div>

          {/* Event Format */}
          <div>
            <h4 className="text-xl font-bold text-white mb-4">Event Format</h4>
            <div className="space-y-3">
              <div className="flex gap-4 items-start bg-gray-900/50 p-4 rounded">
                <div className="flex-shrink-0 w-24 text-[#b22222] font-bold">7:00-7:15pm</div>
                <div className="text-gray-300">Welcome and basic steps</div>
              </div>
              <div className="flex gap-4 items-start bg-gray-900/50 p-4 rounded">
                <div className="flex-shrink-0 w-24 text-[#b22222] font-bold">7:15-8:30pm</div>
                <div className="text-gray-300">Beginner lesson (alternating monthly: Salsa/Bachata)</div>
              </div>
              <div className="flex gap-4 items-start bg-gray-900/50 p-4 rounded">
                <div className="flex-shrink-0 w-24 text-[#b22222] font-bold">8:30-9:00pm</div>
                <div className="text-gray-300">Intermediate moves for returning students</div>
              </div>
              <div className="flex gap-4 items-start bg-gray-900/50 p-4 rounded">
                <div className="flex-shrink-0 w-24 text-[#b22222] font-bold">9:00-10pm</div>
                <div className="text-gray-300">Open social dancing with music</div>
              </div>
            </div>
          </div>

          {/* Investment & Revenue */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-900/10 border-l-4 border-red-500 rounded p-6">
              <h5 className="font-bold text-white mb-4">Investment</h5>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex justify-between">
                  <span>Instructor (4 sessions):</span>
                  <span className="text-white">$400-600/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Marketing materials:</span>
                  <span className="text-white">$50-100/month</span>
                </div>
                <div className="flex justify-between border-t border-gray-700 pt-2 font-bold">
                  <span>Total Investment:</span>
                  <span className="text-red-300">$450-700/month</span>
                </div>
              </div>
            </div>

            <div className="bg-green-900/10 border-l-4 border-green-500 rounded p-6">
              <h5 className="font-bold text-white mb-4">Expected Revenue</h5>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex justify-between">
                  <span>Entry fees (20-30 people):</span>
                  <span className="text-white">$300-450</span>
                </div>
                <div className="flex justify-between">
                  <span>Bar sales:</span>
                  <span className="text-white">$400-600</span>
                </div>
                <div className="flex justify-between">
                  <span>Food sales:</span>
                  <span className="text-white">$200-400</span>
                </div>
                <div className="flex justify-between border-t border-gray-700 pt-2 font-bold">
                  <span>Per Night:</span>
                  <span className="text-green-300">$900-1,450</span>
                </div>
                <div className="flex justify-between font-bold text-lg">
                  <span>Monthly Total:</span>
                  <span className="text-green-400">$3,600-5,800</span>
                </div>
              </div>
            </div>
          </div>

          {/* Event Specials */}
          <div className="card-dark p-6">
            <h5 className="font-bold text-white mb-4">Event Specials Menu</h5>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-gray-900 rounded p-4">
                <div className="text-[#D4AF37] font-bold mb-2">Latin Lover Cocktails - $8</div>
                <div className="text-gray-400">Mojito, Caipirinha, Margarita, Sangria</div>
              </div>
              <div className="bg-gray-900 rounded p-4">
                <div className="text-[#D4AF37] font-bold mb-2">Dance Floor Fuel - $18</div>
                <div className="text-gray-400">Shareable appetizer platter</div>
              </div>
              <div className="bg-gray-900 rounded p-4">
                <div className="text-[#D4AF37] font-bold mb-2">Couples Special - $35</div>
                <div className="text-gray-400">2 entries + 2 cocktails (save $5)</div>
              </div>
            </div>
          </div>
        </div>
      </ExpandableSection>

      {/* Thursday: Social Night */}
      <ExpandableSection
        title="Thursday: Social Night - Meet and Mingle"
        badge="high-priority"
        executiveSummary={
          <>
            Organic social networking for young professionals and friend groups. <strong className="text-white">No structured activities</strong> - just
            great atmosphere and premium drink specials. <strong className="text-white">Zero operational cost.</strong> Expected: <strong className="text-green-400">$375-875/night</strong>,
            <strong className="text-green-400"> $1,500-3,500/month</strong>. Come alone, leave with friends.
          </>
        }
      >
        <div className="space-y-8">
          {/* Why It Works */}
          <div>
            <h4 className="text-xl font-bold text-white mb-4">Why It Works</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="card-dark p-5">
                <div className="text-[#b22222] font-bold mb-2">ZERO OPERATIONAL COMPLEXITY</div>
                <p className="text-sm text-gray-300">No host, no equipment, no instructor needed</p>
              </div>
              <div className="card-dark p-5">
                <div className="text-[#b22222] font-bold mb-2">PERFECT DEMOGRAPHIC</div>
                <p className="text-sm text-gray-300">Appeals to 25-45 age seeking social connections</p>
              </div>
              <div className="card-dark p-5">
                <div className="text-[#b22222] font-bold mb-2">WEEKEND PREVIEW ENERGY</div>
                <p className="text-sm text-gray-300">Thursday creates weekend starts here vibe</p>
              </div>
              <div className="card-dark p-5">
                <div className="text-[#b22222] font-bold mb-2">DRIVES RETURN VISITS</div>
                <p className="text-sm text-gray-300">New customer acquisition for Fri/Sat</p>
              </div>
            </div>
          </div>

          {/* Investment & Revenue */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-900/10 border-l-4 border-red-500 rounded p-6">
              <h5 className="font-bold text-white mb-4">Investment</h5>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex justify-between">
                  <span>Operational cost:</span>
                  <span className="text-white">$0</span>
                </div>
                <div className="flex justify-between">
                  <span>Marketing materials:</span>
                  <span className="text-white">$35-80/month</span>
                </div>
                <div className="flex justify-between border-t border-gray-700 pt-2 font-bold">
                  <span>Total Investment:</span>
                  <span className="text-red-300">$35-80/month</span>
                </div>
              </div>
            </div>

            <div className="bg-green-900/10 border-l-4 border-green-500 rounded p-6">
              <h5 className="font-bold text-white mb-4">Expected Revenue</h5>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex justify-between">
                  <span>15-25 customers per night:</span>
                  <span className="text-white">—</span>
                </div>
                <div className="flex justify-between">
                  <span>Avg spend $25-35/person:</span>
                  <span className="text-white">(2 drinks + appetizer)</span>
                </div>
                <div className="flex justify-between border-t border-gray-700 pt-2 font-bold">
                  <span>Per Night:</span>
                  <span className="text-green-300">$375-875</span>
                </div>
                <div className="flex justify-between font-bold text-lg">
                  <span>Monthly Total:</span>
                  <span className="text-green-400">$1,500-3,500</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ExpandableSection>

      {/* Monthly Saturday: Sushi & Sounds */}
      <ExpandableSection
        title="Monthly Saturday: Sushi & Sounds (Ongoing)"
        badge="recommended"
        executiveSummary={
          <>
            Your existing monthly music event continues as planned. Live music or DJ, premium atmosphere, no cover charge.
            <strong className="text-white"> Proven format that works.</strong> Investment: $200-400/month musician/DJ fee.
          </>
        }
      >
        <div className="space-y-6">
          <div className="card-dark p-6">
            <p className="text-lg text-gray-300">
              <strong className="text-white">Status: Keep running as-is.</strong> This event has proven successful and requires no changes.
              Continue with current format, musician booking, and promotional approach.
            </p>
          </div>
          <div className="bg-green-900/10 border-l-4 border-green-500 rounded p-6">
            <div className="font-semibold text-white mb-2">Investment</div>
            <div className="text-gray-300">Musician/DJ fee: $200-400/month</div>
          </div>
        </div>
      </ExpandableSection>

      {/* Event Operational Details & Naming Options */}
      <ExpandableSection
        title="Event Operational Details & Naming Options"
        badge="high-priority"
        executiveSummary={
          <>
            Comprehensive operational details for both Tuesday and Thursday events. Includes 5 naming options for each event,
            service fee structures, happy hour packages, color-coded social systems, and icebreaker game formats.
            <strong className="text-white"> Everything you need to launch with confidence.</strong>
          </>
        }
      >
        <div className="space-y-10">
          {/* Tuesday Latin Dance - Naming Options */}
          <div>
            <h4 className="text-2xl font-bold text-white mb-6">Tuesday Latin Dance: Naming Options</h4>
            <div className="space-y-3">
              <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-[#b22222]">
                <div className="font-bold text-white mb-1">Option 1: "Salsa & Sushi Tuesdays"</div>
                <p className="text-gray-400 text-sm">Direct, memorable, clearly communicates both the food and dance element</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-[#b22222]">
                <div className="font-bold text-white mb-1">Option 2: "Rhythm & Rice"</div>
                <p className="text-gray-400 text-sm">Catchy alliteration, playful tone, emphasizes movement and Japanese cuisine</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-[#b22222]">
                <div className="font-bold text-white mb-1">Option 3: "Latin Nights at Ami"</div>
                <p className="text-gray-400 text-sm">Straightforward, highlights cultural dance experience at your restaurant</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-[#b22222]">
                <div className="font-bold text-white mb-1">Option 4: "Dance & Dine Tuesdays"</div>
                <p className="text-gray-400 text-sm">Simple alliteration, broad appeal, emphasizes both activities equally</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-[#b22222]">
                <div className="font-bold text-white mb-1">Option 5: "Bachata & Bites"</div>
                <p className="text-gray-400 text-sm">Alliterative, specific dance style, casual food reference</p>
              </div>
            </div>
          </div>

          {/* Tuesday Latin Dance - Service Fee Structure */}
          <div>
            <h4 className="text-2xl font-bold text-white mb-6">Tuesday Service Fee Structure</h4>
            <div className="bg-gradient-to-r from-[#b22222]/10 to-transparent border-l-4 border-[#b22222] rounded p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-800/50 rounded p-4">
                  <div className="text-[#D4AF37] font-bold mb-2 text-center">$10 Per Person</div>
                  <div className="text-2xl font-bold text-white text-center mb-3">100%</div>
                  <div className="text-sm text-gray-400 text-center">Total collected at door</div>
                </div>
                <div className="bg-gray-800/50 rounded p-4">
                  <div className="text-green-400 font-bold mb-2 text-center">Split Breakdown</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-gray-300">
                      <span>Instructor:</span>
                      <span className="font-bold text-white">50% ($5)</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Server tip pool:</span>
                      <span className="font-bold text-white">25% ($2.50)</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>House (operations):</span>
                      <span className="font-bold text-white">25% ($2.50)</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800/50 rounded p-4">
                  <div className="text-blue-400 font-bold mb-2 text-center">Example: 30 People</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-gray-300">
                      <span>Total collected:</span>
                      <span className="font-bold text-white">$300</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Instructor gets:</span>
                      <span className="font-bold text-white">$150</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Server pool gets:</span>
                      <span className="font-bold text-white">$75</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>House keeps:</span>
                      <span className="font-bold text-white">$75</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-400 italic text-center">
                This structure incentivizes the instructor to promote and grow attendance, rewards servers for excellent service during events, and covers house operational costs.
              </div>
            </div>
          </div>

          {/* Tuesday Latin Dance - Happy Hour Packages */}
          <div>
            <h4 className="text-2xl font-bold text-white mb-6">Tuesday Happy Hour Options</h4>

            {/* Drink Specials */}
            <div className="bg-gradient-to-r from-blue-900/10 to-transparent border-l-4 border-blue-500 rounded p-6 mb-6">
              <div className="text-white font-bold mb-3 text-lg">Drink Special Options (Choose One)</div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="text-blue-400 font-bold mb-2">Option A: Beer & Wine Focus</div>
                  <div className="text-2xl font-bold text-white mb-1">$2 OFF</div>
                  <p className="text-gray-400 text-sm">All beer and wine, 7-10pm</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="text-blue-400 font-bold mb-2">Option B: Cocktail Focus</div>
                  <div className="text-2xl font-bold text-white mb-1">$3 OFF</div>
                  <p className="text-gray-400 text-sm">All cocktails, 7-10pm</p>
                </div>
              </div>
            </div>

            {/* Food Packages */}
            <div className="text-white font-bold mb-4 text-lg">Food Package Options</div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37]/30 rounded-xl p-6">
                <div className="text-center mb-4">
                  <div className="text-[#D4AF37] font-bold text-lg mb-2">"Dance Fuel Platter"</div>
                  <div className="text-4xl font-bold text-white mb-2">$28</div>
                  <div className="text-sm text-gray-400">Perfect for 2-3 dancers to share</div>
                </div>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-start gap-2">
                    <span className="text-[#D4AF37]">•</span>
                    <span>California Roll (8pc)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#D4AF37]">•</span>
                    <span>Spicy Tuna Roll (8pc)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#D4AF37]">•</span>
                    <span>Gyoza (6pc)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#D4AF37]">•</span>
                    <span>Edamame</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#D4AF37]">•</span>
                    <span>Seaweed Salad</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-[#D4AF37]/30 text-xs text-gray-400 italic">
                  Designed to sustain energy throughout the 3-hour event without being too heavy for dancing
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37]/30 rounded-xl p-6">
                <div className="text-center mb-4">
                  <div className="text-[#D4AF37] font-bold text-lg mb-2">"Salsa Starter"</div>
                  <div className="text-4xl font-bold text-white mb-2">$18</div>
                  <div className="text-sm text-gray-400">Light bites for individual dancers</div>
                </div>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-start gap-2">
                    <span className="text-[#D4AF37]">•</span>
                    <span>Choice of 1 roll: California, Spicy Tuna, or Avocado (8pc)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#D4AF37]">•</span>
                    <span>Gyoza (3pc)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#D4AF37]">•</span>
                    <span>Edamame</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-[#D4AF37]/30 text-xs text-gray-400 italic">
                  Individual portion for dancers who want a light meal before or during the lesson
                </div>
              </div>
            </div>
          </div>

          {/* Thursday Social Connection - Naming Options */}
          <div>
            <h4 className="text-2xl font-bold text-white mb-6">Thursday Social Connection: Naming Options</h4>
            <div className="space-y-3">
              <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-[#b22222]">
                <div className="font-bold text-white mb-1">Option 1: "Social Thursdays"</div>
                <p className="text-gray-400 text-sm">Simple, direct, clearly indicates purpose and day</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-[#b22222]">
                <div className="font-bold text-white mb-1">Option 2: "Mix & Mingle"</div>
                <p className="text-gray-400 text-sm">Friendly, approachable, emphasizes social networking aspect</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-[#b22222]">
                <div className="font-bold text-white mb-1">Option 3: "Connect Night"</div>
                <p className="text-gray-400 text-sm">Modern, professional, appeals to networking crowd</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-[#b22222]">
                <div className="font-bold text-white mb-1">Option 4: "Thursday Social Club"</div>
                <p className="text-gray-400 text-sm">Creates sense of membership and recurring community</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-[#b22222]">
                <div className="font-bold text-white mb-1">Option 5: "Friends & Sushi Thursdays"</div>
                <p className="text-gray-400 text-sm">Casual, food-focused, emphasizes come with friends or make new ones</p>
              </div>
            </div>
          </div>

          {/* Thursday Social Connection - Color-Coded System */}
          <div>
            <h4 className="text-2xl font-bold text-white mb-6">Thursday Color-Coded Social System</h4>
            <div className="bg-gradient-to-r from-blue-900/10 to-transparent border-l-4 border-blue-500 rounded p-6 mb-6">
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong className="text-white">How it works:</strong> Upon arrival, guests choose a colored wristband or name tag sticker
                that signals their social intent. Bartender facilitates introductions between matching colors throughout the night.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-red-500">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-red-500"></div>
                  <div className="font-bold text-white">Red</div>
                </div>
                <p className="text-gray-400 text-sm">"Here to meet new people" - Open to conversations and introductions</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-yellow-500">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-yellow-500"></div>
                  <div className="font-bold text-white">Yellow</div>
                </div>
                <p className="text-gray-400 text-sm">"Happy to chat but came with friends" - Social but part of existing group</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-green-500">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-green-500"></div>
                  <div className="font-bold text-white">Green</div>
                </div>
                <p className="text-gray-400 text-sm">"Industry professional networking" - Career connections and business talk welcome</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-blue-500">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-blue-500"></div>
                  <div className="font-bold text-white">Blue</div>
                </div>
                <p className="text-gray-400 text-sm">"New to the area looking for friends" - Recent transplants seeking community</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-purple-500">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-purple-500"></div>
                  <div className="font-bold text-white">Purple</div>
                </div>
                <p className="text-gray-400 text-sm">"Hobby/interest-based connections" - Sports, books, activities, shared interests</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-orange-500">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-orange-500"></div>
                  <div className="font-bold text-white">Orange</div>
                </div>
                <p className="text-gray-400 text-sm">"Foodie and restaurant enthusiasts" - Here to enjoy food and talk cuisine</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-gray-700">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-gray-600 border border-gray-400"></div>
                  <div className="font-bold text-white">Black/Gray</div>
                </div>
                <p className="text-gray-400 text-sm">"Just here to observe tonight" - Checking out the vibe, not actively seeking connections</p>
              </div>
            </div>
            <div className="mt-6 bg-gray-800/50 rounded-lg p-6">
              <div className="text-white font-semibold mb-3">Bartender Facilitation Role:</div>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <span>Observe guests with same colors sitting alone or in small groups</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <span>Make casual introductions: "Hey, I noticed you both have red bands - John, meet Sarah, Sarah meet John"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <span>Offer conversation starters based on color meanings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <span>No pressure - if someone seems uninterested, respect their space</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Thursday Social Connection - Icebreaker Games */}
          <div>
            <h4 className="text-2xl font-bold text-white mb-6">Thursday Icebreaker Games & Activities</h4>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Table Card Games */}
              <div className="bg-gray-800/50 rounded-lg p-6">
                <div className="text-[#D4AF37] font-bold mb-3 text-lg">Table Card Icebreakers</div>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  Place conversation starter cards on tables. Guests can pick a card and ask their neighbor or group.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="bg-gray-900/50 rounded p-3 text-gray-300 italic">
                    "What's the best meal you've ever had and where?"
                  </div>
                  <div className="bg-gray-900/50 rounded p-3 text-gray-300 italic">
                    "If you could travel anywhere next month, where would you go?"
                  </div>
                  <div className="bg-gray-900/50 rounded p-3 text-gray-300 italic">
                    "What's your go-to karaoke song?"
                  </div>
                  <div className="bg-gray-900/50 rounded p-3 text-gray-300 italic">
                    "What hobby have you always wanted to try?"
                  </div>
                </div>
              </div>

              {/* Board Game Station */}
              <div className="bg-gray-800/50 rounded-lg p-6">
                <div className="text-[#D4AF37] font-bold mb-3 text-lg">Optional Board Game Station</div>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  Set up a small area with easy-to-learn social games that encourage group participation.
                </p>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-start gap-2">
                    <span className="text-[#D4AF37]">•</span>
                    <span><strong className="text-white">Jenga:</strong> Physical, conversation-friendly, easy to join</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#D4AF37]">•</span>
                    <span><strong className="text-white">Cards Against Humanity:</strong> Humor-based, breaks ice quickly</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#D4AF37]">•</span>
                    <span><strong className="text-white">Uno:</strong> Universal, quick rounds, inclusive</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#D4AF37]">•</span>
                    <span><strong className="text-white">Connect Four:</strong> Simple 2-player, tournament-style</span>
                  </div>
                </div>
                <div className="mt-4 text-xs text-gray-400 italic">
                  Games are optional - not mandatory. They simply provide structure for those who want it.
                </div>
              </div>
            </div>
          </div>

          {/* Thursday Happy Hour Options */}
          <div>
            <h4 className="text-2xl font-bold text-white mb-6">Thursday Happy Hour Options</h4>

            {/* Drink Specials */}
            <div className="bg-gradient-to-r from-blue-900/10 to-transparent border-l-4 border-blue-500 rounded p-6 mb-6">
              <div className="text-white font-bold mb-3 text-lg">Drink Special Options (Choose One)</div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="text-blue-400 font-bold mb-2">Option A: Beer & Wine Focus</div>
                  <div className="text-2xl font-bold text-white mb-1">$2 OFF</div>
                  <p className="text-gray-400 text-sm">All beer and wine, 7-10pm</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="text-blue-400 font-bold mb-2">Option B: House Sake Focus</div>
                  <div className="text-2xl font-bold text-white mb-1">$3 OFF</div>
                  <p className="text-gray-400 text-sm">House sake selections, 7-10pm</p>
                </div>
              </div>
            </div>

            {/* Food Packages */}
            <div className="text-white font-bold mb-4 text-lg">Food Package Options</div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37]/30 rounded-xl p-6">
                <div className="text-center mb-4">
                  <div className="text-[#D4AF37] font-bold text-lg mb-2">"Two for One Social"</div>
                  <div className="text-4xl font-bold text-white mb-2">$20</div>
                  <div className="text-sm text-gray-400">Perfect for starting conversations</div>
                </div>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-start gap-2">
                    <span className="text-[#D4AF37]">•</span>
                    <span><strong className="text-white">2 cocktails</strong> from select list</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#D4AF37]">•</span>
                    <span><strong className="text-white">1 appetizer</strong> choice of 3-4 options</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-[#D4AF37]/30 text-xs text-gray-400 italic">
                  Great for solo arrivals who want to settle in with a drink before socializing
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37]/30 rounded-xl p-6">
                <div className="text-center mb-4">
                  <div className="text-[#D4AF37] font-bold text-lg mb-2">"Table Starter"</div>
                  <div className="text-4xl font-bold text-white mb-2">$35</div>
                  <div className="text-sm text-gray-400">For two people to share</div>
                </div>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-start gap-2">
                    <span className="text-[#D4AF37]">•</span>
                    <span><strong className="text-white">Shareable platter:</strong> Gyoza, spring rolls, edamame, small sushi selection</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#D4AF37]">•</span>
                    <span><strong className="text-white">2 drinks:</strong> Beer, wine, or house cocktails</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-[#D4AF37]/30 text-xs text-gray-400 italic">
                  Encourages group formation - easy for strangers to share food and chat
                </div>
              </div>
            </div>
          </div>

          {/* Cost & Materials Summary */}
          <div>
            <h4 className="text-2xl font-bold text-white mb-6">Operational Materials & Costs</h4>
            <div className="bg-gradient-to-r from-green-900/10 to-transparent border-l-4 border-green-500 rounded p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="text-white font-semibold mb-3">One-Time Setup Costs:</div>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex justify-between">
                      <span>Colored wristbands (500 count):</span>
                      <span className="font-bold">$25-40</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Icebreaker card printing:</span>
                      <span className="font-bold">$15-30</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Board games (if adding):</span>
                      <span className="font-bold">$60-100</span>
                    </div>
                    <div className="flex justify-between border-t border-gray-700 pt-2 font-bold">
                      <span>Total Setup:</span>
                      <span className="text-green-400">$100-170</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-white font-semibold mb-3">Ongoing Monthly Costs:</div>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex justify-between">
                      <span>Wristband replenishment:</span>
                      <span className="font-bold">$10-15</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Card replacement:</span>
                      <span className="font-bold">$5-10</span>
                    </div>
                    <div className="flex justify-between border-t border-gray-700 pt-2 font-bold">
                      <span>Total Monthly:</span>
                      <span className="text-green-400">$15-25</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ExpandableSection>

      {/* Pre-Launch Checklist */}
      <ExpandableSection
        title="Pre-Launch Checklist & Operational Setup"
        badge="high-priority"
        executiveSummary={
          <>
            Complete task list for launching Tuesday and Thursday events. Covers physical setup, staff training,
            marketing materials, and operational systems. <strong className="text-white">Everything you need to launch successfully.</strong>
          </>
        }
      >
        <div className="space-y-8">
          {/* Week 1: Planning & Design */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">W1</div>
              <h4 className="text-2xl font-bold text-white">Week 1: Planning & Design Phase</h4>
            </div>
            <div className="space-y-3">
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 w-5 h-5 rounded border-gray-600 text-[#b22222] focus:ring-[#b22222]" />
                  <div>
                    <div className="text-white font-semibold mb-1">Finalize event names and taglines</div>
                    <p className="text-gray-400 text-sm">Choose from naming options for Tuesday and Thursday events</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 w-5 h-5 rounded border-gray-600 text-[#b22222] focus:ring-[#b22222]" />
                  <div>
                    <div className="text-white font-semibold mb-1">Design color-coded name tag/wristband system</div>
                    <p className="text-gray-400 text-sm">Order 500 wristbands in 7 colors, create signage explaining system</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 w-5 h-5 rounded border-gray-600 text-[#b22222] focus:ring-[#b22222]" />
                  <div>
                    <div className="text-white font-semibold mb-1">Create event flyers (print + digital)</div>
                    <p className="text-gray-400 text-sm">Design marketing materials highlighting each event's unique value</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 w-5 h-5 rounded border-gray-600 text-[#b22222] focus:ring-[#b22222]" />
                  <div>
                    <div className="text-white font-semibold mb-1">Finalize happy hour menu items and pricing</div>
                    <p className="text-gray-400 text-sm">Lock in drink specials and package deals for each night</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Week 2: Physical Setup */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">W2</div>
              <h4 className="text-2xl font-bold text-white">Week 2: Physical Setup & Materials</h4>
            </div>
            <div className="space-y-3">
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 w-5 h-5 rounded border-gray-600 text-[#b22222] focus:ring-[#b22222]" />
                  <div>
                    <div className="text-white font-semibold mb-1">Source and purchase board games</div>
                    <p className="text-gray-400 text-sm">Jenga, Cards Against Humanity, Uno, Connect Four - $60-100 total</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 w-5 h-5 rounded border-gray-600 text-[#b22222] focus:ring-[#b22222]" />
                  <div>
                    <div className="text-white font-semibold mb-1">Create icebreaker conversation cards</div>
                    <p className="text-gray-400 text-sm">Print 50-100 cards with conversation starters, place on tables</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 w-5 h-5 rounded border-gray-600 text-[#b22222] focus:ring-[#b22222]" />
                  <div>
                    <div className="text-white font-semibold mb-1">Map Tuesday upstairs dance floor layout</div>
                    <p className="text-gray-400 text-sm">Clear space, mark dance floor boundaries, plan table/seating arrangement</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 w-5 h-5 rounded border-gray-600 text-[#b22222] focus:ring-[#b22222]" />
                  <div>
                    <div className="text-white font-semibold mb-1">Test Spotify-to-sound-system connection</div>
                    <p className="text-gray-400 text-sm">Work with dance instructor to test music setup and volume levels</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 w-5 h-5 rounded border-gray-600 text-[#b22222] focus:ring-[#b22222]" />
                  <div>
                    <div className="text-white font-semibold mb-1">Set up Thursday entry welcome table</div>
                    <p className="text-gray-400 text-sm">Position table, stock with wristbands/name tags, create signage</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Week 3: Staff Training & Marketing */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center text-white font-bold">W3</div>
              <h4 className="text-2xl font-bold text-white">Week 3: Training & Marketing Launch</h4>
            </div>
            <div className="space-y-3">
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 w-5 h-5 rounded border-gray-600 text-[#b22222] focus:ring-[#b22222]" />
                  <div>
                    <div className="text-white font-semibold mb-1">Train bartenders on facilitation approach</div>
                    <p className="text-gray-400 text-sm">Thursday social night: how to greet solo arrivals, make introductions, run icebreakers</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 w-5 h-5 rounded border-gray-600 text-[#b22222] focus:ring-[#b22222]" />
                  <div>
                    <div className="text-white font-semibold mb-1">Train staff on service fee collection (Tuesday)</div>
                    <p className="text-gray-400 text-sm">$10 per person, how to communicate, where to collect, split distribution</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 w-5 h-5 rounded border-gray-600 text-[#b22222] focus:ring-[#b22222]" />
                  <div>
                    <div className="text-white font-semibold mb-1">Print and distribute flyers locally</div>
                    <p className="text-gray-400 text-sm">Coffee shops, gyms, community boards within 3-mile radius</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 w-5 h-5 rounded border-gray-600 text-[#b22222] focus:ring-[#b22222]" />
                  <div>
                    <div className="text-white font-semibold mb-1">Launch social media campaign</div>
                    <p className="text-gray-400 text-sm">Post daily for 2 weeks leading to launch, build anticipation</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 w-5 h-5 rounded border-gray-600 text-[#b22222] focus:ring-[#b22222]" />
                  <div>
                    <div className="text-white font-semibold mb-1">Create event calendar for November-December</div>
                    <p className="text-gray-400 text-sm">Plan exact dates, coordinate with instructor availability</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Week 4: Final Preparations */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">W4</div>
              <h4 className="text-2xl font-bold text-white">Week 4 (Launch Week): Final Prep</h4>
            </div>
            <div className="space-y-3">
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 w-5 h-5 rounded border-gray-600 text-[#b22222] focus:ring-[#b22222]" />
                  <div>
                    <div className="text-white font-semibold mb-1">Conduct full event rehearsal (dry run)</div>
                    <p className="text-gray-400 text-sm">Walk through Tuesday and Thursday setups with full staff</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 w-5 h-5 rounded border-gray-600 text-[#b22222] focus:ring-[#b22222]" />
                  <div>
                    <div className="text-white font-semibold mb-1">Identify daytime setup crew for Tuesday</div>
                    <p className="text-gray-400 text-sm">Assign 2 people to convert upstairs space 4-6pm before event</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 w-5 h-5 rounded border-gray-600 text-[#b22222] focus:ring-[#b22222]" />
                  <div>
                    <div className="text-white font-semibold mb-1">Pre-print happy hour menus for both nights</div>
                    <p className="text-gray-400 text-sm">Table tents or insert cards highlighting package deals</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 w-5 h-5 rounded border-gray-600 text-[#b22222] focus:ring-[#b22222]" />
                  <div>
                    <div className="text-white font-semibold mb-1">Arrange photographer for launch events</div>
                    <p className="text-gray-400 text-sm">Professional or team member to capture authentic moments first 2 weeks</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 w-5 h-5 rounded border-gray-600 text-[#b22222] focus:ring-[#b22222]" />
                  <div>
                    <div className="text-white font-semibold mb-1">Set up Toast POS tracking for events</div>
                    <p className="text-gray-400 text-sm">Configure reporting to track Tuesday and Thursday performance separately</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ExpandableSection>

      {/* Photography & Content Direction */}
      <ExpandableSection
        title="Photography & Content Direction"
        badge="recommended"
        executiveSummary={
          <>
            Visual storytelling guide for capturing authentic event moments. Includes shot lists, aesthetic direction,
            and Instagram feed strategy. <strong className="text-white">Tell the story that brings people in.</strong>
          </>
        }
      >
        <div className="space-y-10">
          {/* Photography Aesthetic Options */}
          <div>
            <h4 className="text-2xl font-bold text-white mb-6">Instagram Feed Aesthetic: Choose Your Direction</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-500/30 rounded-xl p-6">
                <div className="text-blue-400 font-bold mb-3 text-lg">Option A: "Social Documentary"</div>
                <ul className="text-gray-300 text-sm space-y-2 mb-4">
                  <li>• Authentic, candid moments</li>
                  <li>• Minimal editing, natural lighting</li>
                  <li>• Story-driven captions</li>
                  <li>• Focus on people and experiences</li>
                </ul>
                <div className="text-xs text-gray-400 italic">
                  Best for: Building community, showcasing real connections, user-generated content feel
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/30 rounded-xl p-6">
                <div className="text-purple-400 font-bold mb-3 text-lg">Option B: "Premium Social"</div>
                <ul className="text-gray-300 text-sm space-y-2 mb-4">
                  <li>• Polished but approachable</li>
                  <li>• Good lighting, professional composition</li>
                  <li>• Balance of people + food/drinks</li>
                  <li>• Aspirational but attainable</li>
                </ul>
                <div className="text-xs text-gray-400 italic">
                  Best for: Premium positioning, lifestyle marketing, attracting 25-45 demographic
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-900/20 to-transparent border border-orange-500/30 rounded-xl p-6">
                <div className="text-orange-400 font-bold mb-3 text-lg">Option C: "Neighborhood Vibes"</div>
                <ul className="text-gray-300 text-sm space-y-2 mb-4">
                  <li>• Warm, community-focused</li>
                  <li>• Mix of professional and user content</li>
                  <li>• Local partnerships visible</li>
                  <li>• Family business personality</li>
                </ul>
                <div className="text-xs text-gray-400 italic">
                  Best for: Local loyalty, word-of-mouth growth, approachable premium feel
                </div>
              </div>
            </div>
          </div>

          {/* Shot Lists */}
          <div>
            <h4 className="text-2xl font-bold text-white mb-6">Launch Week Shot Lists</h4>

            {/* Tuesday Dance Night Shots */}
            <div className="bg-gray-800/50 rounded-lg p-6 mb-6">
              <div className="text-[#b22222] font-bold mb-4 text-lg">Tuesday Latin Dance Night</div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <div className="text-white font-semibold mb-2 text-sm">MUST CAPTURE</div>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>☐ Instructor teaching basic steps (wide shot)</li>
                    <li>☐ Couples/groups dancing together</li>
                    <li>☐ Close-ups of happy, laughing faces</li>
                    <li>☐ Dance Fuel Platter presentation</li>
                    <li>☐ Upstairs space setup with dance floor</li>
                    <li>☐ Energy of full crowd (wide atmosphere shot)</li>
                  </ul>
                </div>
                <div>
                  <div className="text-white font-semibold mb-2 text-sm">NICE TO HAVE</div>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>☐ Footwork close-ups (movement detail)</li>
                    <li>☐ Hand-holding/partner connection moments</li>
                    <li>☐ Bartender preparing Latin-themed cocktails</li>
                    <li>☐ Service fee collection (candid, not staged)</li>
                    <li>☐ Break time - people chatting, eating</li>
                    <li>☐ Before/after space transformation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Thursday Social Night Shots */}
            <div className="bg-gray-800/50 rounded-lg p-6">
              <div className="text-[#b22222] font-bold mb-4 text-lg">Thursday Social Connection Night</div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <div className="text-white font-semibold mb-2 text-sm">MUST CAPTURE</div>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>☐ Entry table with color system display</li>
                    <li>☐ Solo arrival being greeted warmly</li>
                    <li>☐ Bartender facilitating introduction</li>
                    <li>☐ People playing board games, laughing</li>
                    <li>☐ Icebreaker game action at bar</li>
                    <li>☐ Strangers connecting/having conversation</li>
                    <li>☐ Full bar atmosphere (warm, welcoming)</li>
                  </ul>
                </div>
                <div>
                  <div className="text-white font-semibold mb-2 text-sm">NICE TO HAVE</div>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>☐ Close-ups of colored wristbands</li>
                    <li>☐ Individual portraits with name tags visible</li>
                    <li>☐ Thursday package deals styled for photo</li>
                    <li>☐ Board game station setup</li>
                    <li>☐ Icebreaker conversation cards on tables</li>
                    <li>☐ Groups forming naturally around activities</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Photography Logistics */}
          <div>
            <h4 className="text-2xl font-bold text-white mb-6">Photography Logistics & Decisions</h4>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-yellow-900/10 to-transparent border-l-4 border-yellow-500 rounded p-6">
                <div className="text-white font-semibold mb-3">Timing Strategy: Capture During vs Stage Before?</div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-yellow-400 font-semibold mb-2">Staged Before Launch</div>
                    <div className="text-gray-300 mb-2">
                      <strong className="text-white">Pro:</strong> Controlled lighting, perfect composition, can use in pre-launch marketing
                    </div>
                    <div className="text-gray-400">
                      <strong className="text-white">Con:</strong> Less authentic, may not match actual event energy
                    </div>
                  </div>
                  <div>
                    <div className="text-yellow-400 font-semibold mb-2">Capture During Events</div>
                    <div className="text-gray-300 mb-2">
                      <strong className="text-white">Pro:</strong> Authentic moments, real energy, natural interactions
                    </div>
                    <div className="text-gray-400">
                      <strong className="text-white">Con:</strong> Harder to get perfect shots, need skilled photographer
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-sm text-gray-300">
                  <strong className="text-white">Recommendation:</strong> Mix of both - stage some setup shots (entry table, food packages, space)
                  but capture authentic event moments during first 2-3 weeks for real social proof.
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-900/10 to-transparent border-l-4 border-green-500 rounded p-6">
                <div className="text-white font-semibold mb-3">Who Captures Content?</div>
                <div className="space-y-3 text-sm">
                  <div className="bg-gray-800/50 rounded p-4">
                    <div className="text-green-400 font-semibold mb-1">Option 1: Professional Photographer</div>
                    <div className="text-gray-300">Hire for launch week (2-3 events) - $200-400 per session</div>
                  </div>
                  <div className="bg-gray-800/50 rounded p-4">
                    <div className="text-green-400 font-semibold mb-1">Option 2: Team Member with Good Eye</div>
                    <div className="text-gray-300">Use high-quality smartphone, train on composition basics - $0 cost</div>
                  </div>
                  <div className="bg-gray-800/50 rounded p-4">
                    <div className="text-green-400 font-semibold mb-1">Option 3: Mix of Both</div>
                    <div className="text-gray-300">Pro photographer for launch night, team member for ongoing content</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ExpandableSection>

      {/* Staffing Decision Framework */}
      <ExpandableSection
        title="Staffing Decision Framework"
        badge="recommended"
        executiveSummary={
          <>
            Staffing scenarios for Tuesday and Thursday events based on attendance levels. Clear decision triggers
            for when to add support, how to handle high/low volume, and service model options.
            <strong className="text-white"> Scale staffing as events grow.</strong>
          </>
        }
      >
        <div className="space-y-10">
          {/* Tuesday Staffing Scenarios */}
          <div>
            <h4 className="text-2xl font-bold text-white mb-6">Tuesday Latin Dance Night: Staffing Scenarios</h4>
            <div className="space-y-6">
              {/* Low Volume */}
              <div className="bg-gradient-to-r from-green-900/20 to-transparent border-l-4 border-green-500 rounded p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-green-400 font-bold text-lg">Low Volume (15-25 attendees)</div>
                    <div className="text-sm text-gray-400">Typical for first 2-4 weeks</div>
                  </div>
                  <div className="text-green-400 font-bold text-2xl">1-2 Staff</div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="bg-gray-800/50 rounded p-4">
                    <div className="text-white font-semibold mb-2">Recommended Staffing:</div>
                    <ul className="text-gray-300 space-y-1">
                      <li>• 1 upstairs bartender (primary)</li>
                      <li>• 1 downstairs server (floats up if needed)</li>
                    </ul>
                  </div>
                  <div className="bg-gray-800/50 rounded p-4">
                    <div className="text-white font-semibold mb-2">Service Model:</div>
                    <ul className="text-gray-300 space-y-1">
                      <li>• Walk-up bar service only</li>
                      <li>• Bartender handles service fee collection at entry</li>
                      <li>• Food orders placed at bar, delivered to tables</li>
                    </ul>
                  </div>
                  <div className="bg-gray-800/50 rounded p-4">
                    <div className="text-white font-semibold mb-2">When to Add Support:</div>
                    <div className="text-gray-300">If bartender is consistently overwhelmed or wait times exceed 5 minutes</div>
                  </div>
                </div>
              </div>

              {/* Medium Volume */}
              <div className="bg-gradient-to-r from-yellow-900/20 to-transparent border-l-4 border-yellow-500 rounded p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-yellow-400 font-bold text-lg">Medium Volume (25-40 attendees)</div>
                    <div className="text-sm text-gray-400">Expected by Month 2-3</div>
                  </div>
                  <div className="text-yellow-400 font-bold text-2xl">2 Staff</div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="bg-gray-800/50 rounded p-4">
                    <div className="text-white font-semibold mb-2">Recommended Staffing:</div>
                    <ul className="text-gray-300 space-y-1">
                      <li>• 1 upstairs bartender (drinks only)</li>
                      <li>• 1 floating server (entry greeting + table service)</li>
                    </ul>
                  </div>
                  <div className="bg-gray-800/50 rounded p-4">
                    <div className="text-white font-semibold mb-2">Service Model:</div>
                    <ul className="text-gray-300 space-y-1">
                      <li>• Server greets at entry, collects service fee, hands out wristbands</li>
                      <li>• Server takes food orders at tables</li>
                      <li>• Bartender focuses on drinks only</li>
                      <li>• Faster service, better customer experience</li>
                    </ul>
                  </div>
                  <div className="bg-gray-800/50 rounded p-4">
                    <div className="text-white font-semibold mb-2">When to Add Support:</div>
                    <div className="text-gray-300">If server can't keep up with tables, or bar has consistent backup</div>
                  </div>
                </div>
              </div>

              {/* High Volume */}
              <div className="bg-gradient-to-r from-red-900/20 to-transparent border-l-4 border-red-500 rounded p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-red-400 font-bold text-lg">High Volume (40+ attendees)</div>
                    <div className="text-sm text-gray-400">Goal by Month 3-4</div>
                  </div>
                  <div className="text-red-400 font-bold text-2xl">3 Staff</div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="bg-gray-800/50 rounded p-4">
                    <div className="text-white font-semibold mb-2">Recommended Staffing:</div>
                    <ul className="text-gray-300 space-y-1">
                      <li>• 2 upstairs bartenders (split bar sections)</li>
                      <li>• 1 dedicated server (entry + full table service)</li>
                    </ul>
                  </div>
                  <div className="bg-gray-800/50 rounded p-4">
                    <div className="text-white font-semibold mb-2">Service Model:</div>
                    <ul className="text-gray-300 space-y-1">
                      <li>• Server dedicated to entry greeting and service fee</li>
                      <li>• Server handles all food orders and delivery</li>
                      <li>• Two bartenders ensure no drink wait times</li>
                      <li>• Premium service experience</li>
                    </ul>
                  </div>
                  <div className="bg-gray-800/50 rounded p-4">
                    <div className="text-white font-semibold mb-2">Alternative: Cap Attendance</div>
                    <div className="text-gray-300">If space becomes tight, limit to 45-50 people max, take reservations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Thursday Staffing Scenarios */}
          <div>
            <h4 className="text-2xl font-bold text-white mb-6">Thursday Social Night: Staffing Scenarios</h4>
            <div className="space-y-6">
              {/* Low Volume */}
              <div className="bg-gradient-to-r from-green-900/20 to-transparent border-l-4 border-green-500 rounded p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-green-400 font-bold text-lg">Low Volume (12-20 attendees)</div>
                    <div className="text-sm text-gray-400">Typical for first month</div>
                  </div>
                  <div className="text-green-400 font-bold text-2xl">1 Staff</div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="bg-gray-800/50 rounded p-4">
                    <div className="text-white font-semibold mb-2">Recommended Staffing:</div>
                    <ul className="text-gray-300 space-y-1">
                      <li>• 1 upstairs bartender (handles everything)</li>
                    </ul>
                  </div>
                  <div className="bg-gray-800/50 rounded p-4">
                    <div className="text-white font-semibold mb-2">Service Model:</div>
                    <ul className="text-gray-300 space-y-1">
                      <li>• Bartender greets solo arrivals, hands out wristbands</li>
                      <li>• Bar service only (no table service)</li>
                      <li>• Bartender facilitates introductions between drink orders</li>
                      <li>• Hourly icebreaker games run by bartender</li>
                    </ul>
                  </div>
                  <div className="bg-gray-800/50 rounded p-4">
                    <div className="text-white font-semibold mb-2">When to Add Support:</div>
                    <div className="text-gray-300">If bartender can't keep up with drinks + facilitation, or entry gets backed up</div>
                  </div>
                </div>
              </div>

              {/* Medium Volume */}
              <div className="bg-gradient-to-r from-yellow-900/20 to-transparent border-l-4 border-yellow-500 rounded p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-yellow-400 font-bold text-lg">Medium Volume (20-35 attendees)</div>
                    <div className="text-sm text-gray-400">Expected by Month 2</div>
                  </div>
                  <div className="text-yellow-400 font-bold text-2xl">2 Staff</div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="bg-gray-800/50 rounded p-4">
                    <div className="text-white font-semibold mb-2">Recommended Staffing:</div>
                    <ul className="text-gray-300 space-y-1">
                      <li>• 1 upstairs bartender (drinks only)</li>
                      <li>• 1 dedicated host (entry table + facilitation)</li>
                    </ul>
                  </div>
                  <div className="bg-gray-800/50 rounded p-4">
                    <div className="text-white font-semibold mb-2">Service Model:</div>
                    <ul className="text-gray-300 space-y-1">
                      <li>• Host greets everyone at entry, explains color system</li>
                      <li>• Host makes introductions, runs icebreaker games</li>
                      <li>• Bartender focuses on drinks and bar service</li>
                      <li>• Better facilitation, smoother experience</li>
                    </ul>
                  </div>
                  <div className="bg-gray-800/50 rounded p-4">
                    <div className="text-white font-semibold mb-2">When to Add Support:</div>
                    <div className="text-gray-300">If bar gets backed up, or if food orders exceed walk-up capacity</div>
                  </div>
                </div>
              </div>

              {/* High Volume */}
              <div className="bg-gradient-to-r from-red-900/20 to-transparent border-l-4 border-red-500 rounded p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-red-400 font-bold text-lg">High Volume (35+ attendees)</div>
                    <div className="text-sm text-gray-400">Goal by Month 3</div>
                  </div>
                  <div className="text-red-400 font-bold text-2xl">3 Staff</div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="bg-gray-800/50 rounded p-4">
                    <div className="text-white font-semibold mb-2">Recommended Staffing:</div>
                    <ul className="text-gray-300 space-y-1">
                      <li>• 2 bartenders (high drink volume)</li>
                      <li>• 1 dedicated host/facilitator</li>
                    </ul>
                  </div>
                  <div className="bg-gray-800/50 rounded p-4">
                    <div className="text-white font-semibold mb-2">Service Model:</div>
                    <ul className="text-gray-300 space-y-1">
                      <li>• Host at entry full-time, active facilitation</li>
                      <li>• Two bartenders ensure fast drink service</li>
                      <li>• Consider light table service for food if space allows</li>
                      <li>• Premium social experience</li>
                    </ul>
                  </div>
                  <div className="bg-gray-800/50 rounded p-4">
                    <div className="text-white font-semibold mb-2">Space Considerations:</div>
                    <div className="text-gray-300">May need to use overflow seating areas or cap attendance at comfortable capacity</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decision Triggers */}
          <div>
            <h4 className="text-2xl font-bold text-white mb-6">When to Adjust Staffing: Clear Triggers</h4>
            <div className="bg-blue-900/10 border-l-4 border-blue-500 rounded p-6">
              <div className="space-y-4 text-sm">
                <div>
                  <div className="text-blue-400 font-semibold mb-2">Add Staff If:</div>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Bar wait times consistently exceed 5 minutes</li>
                    <li>• Entry greeting/wristband distribution creates backlog</li>
                    <li>• Food orders delayed more than 15 minutes</li>
                    <li>• Staff report being overwhelmed for 2+ weeks straight</li>
                    <li>• Customer complaints about service speed</li>
                  </ul>
                </div>
                <div>
                  <div className="text-blue-400 font-semibold mb-2">Reduce Staff If:</div>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Attendance drops below 15 people for 3+ weeks</li>
                    <li>• Staff standing idle for extended periods</li>
                    <li>• Event economics no longer support extra labor</li>
                  </ul>
                </div>
                <div>
                  <div className="text-blue-400 font-semibold mb-2">Alternative to Adding Staff:</div>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Implement reservations to manage flow</li>
                    <li>• Cap attendance at manageable level</li>
                    <li>• Pre-order food options to reduce kitchen stress</li>
                    <li>• Simplify menu to speed service</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ExpandableSection>

      {/* Track 1 Summary */}
      <div className="card-dark p-10 shadow-strong border-2 border-[#b22222]/30 mt-10">
        <h3 className="text-3xl font-bold text-white mb-6">Track 1 Summary</h3>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-gray-900 rounded-xl">
            <div className="text-sm text-gray-400 mb-2">Monthly Investment</div>
            <div className="text-3xl font-bold text-white mb-1">$485-880</div>
            <div className="text-xs text-gray-400">All events included</div>
          </div>
          <div className="text-center p-6 bg-gray-900 rounded-xl">
            <div className="text-sm text-gray-400 mb-2">Monthly Revenue</div>
            <div className="text-3xl font-bold text-green-400 mb-1">$3,300-6,400</div>
            <div className="text-xs text-gray-400">Incremental revenue</div>
          </div>
          <div className="text-center p-6 bg-gray-900 rounded-xl border-2 border-green-500">
            <div className="text-sm text-gray-400 mb-2">Net Monthly Profit</div>
            <div className="text-3xl font-bold text-green-400 mb-1">$2,815-5,520</div>
            <div className="text-xs text-green-300">380-630% ROI</div>
          </div>
        </div>

        <div className="bg-blue-900/10 border-l-4 border-blue-500 rounded p-6">
          <div className="font-semibold text-white mb-3">Starting November:</div>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center gap-3">
              <span className="text-[#b22222]">✓</span>
              <span>Every Other Tuesday: Latin Dance Lessons (bi-weekly to maintain excitement)</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#b22222]">✓</span>
              <span>Thursday Social Night</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#b22222]">✓</span>
              <span>Monthly Saturday Sushi & Sounds (ongoing)</span>
            </li>
          </ul>
          <div className="mt-4 text-sm text-gray-400">
            <strong className="text-white">Future Expansion Options:</strong> NFL Sundays, Monday Night Football, Wednesday happy hour enhancement,
            Dueling Pianos, Trivia nights, Sake education sessions
          </div>
        </div>
      </div>
    </div>
  );
}
