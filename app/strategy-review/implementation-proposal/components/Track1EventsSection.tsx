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
              <div className="bg-gradient-to-br from-[#b22222]/20 to-[#b22222]/5 border border-[#b22222]/50 rounded p-3 min-h-[100px]">
                <div className="text-sm font-bold text-white mb-1">19</div>
                <div className="text-xs text-white font-semibold leading-tight">Latin Dance</div>
                <div className="text-xs text-gray-400">7-10pm</div>
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
                <td className="p-4 font-semibold text-white">Tuesday</td>
                <td className="p-4 text-white font-semibold">Latin Dance Lessons</td>
                <td className="p-4 text-gray-300">7-10pm</td>
                <td className="p-4"><span className="px-3 py-1 bg-[#b22222] text-white rounded text-xs font-bold">LAUNCHING NOV 12</span></td>
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

      {/* Tuesday: Latin Dance Lessons */}
      <ExpandableSection
        title="Tuesday: Latin Dance Lessons"
        badge="high-priority"
        executiveSummary={
          <>
            Beginner-friendly salsa/bachata lessons (7-9pm) + social dancing (9-10pm). <strong className="text-white">No partner required.</strong> High
            per-person spend ($15 entry + $20-30 bar/food). <strong className="text-green-400">Expected: $900-1,450/night</strong>, <strong className="text-green-400">$3,600-5,800/month</strong>.
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
                <p className="text-sm text-gray-300">Students return weekly to practice and improve</p>
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

      {/* Track 1 Summary */}
      <div className="card-dark p-10 shadow-strong border-2 border-[#b22222]/30 mt-10">
        <h3 className="text-3xl font-bold text-white mb-6">Track 1 Summary</h3>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-gray-900 rounded-xl">
            <div className="text-sm text-gray-400 mb-2">Monthly Investment</div>
            <div className="text-3xl font-bold text-white mb-1">$685-1,180</div>
            <div className="text-xs text-gray-400">All events included</div>
          </div>
          <div className="text-center p-6 bg-gray-900 rounded-xl">
            <div className="text-sm text-gray-400 mb-2">Monthly Revenue</div>
            <div className="text-3xl font-bold text-green-400 mb-1">$5,100-9,300</div>
            <div className="text-xs text-gray-400">Incremental revenue</div>
          </div>
          <div className="text-center p-6 bg-gray-900 rounded-xl border-2 border-green-500">
            <div className="text-sm text-gray-400 mb-2">Net Monthly Profit</div>
            <div className="text-3xl font-bold text-green-400 mb-1">$3,900-8,600</div>
            <div className="text-xs text-green-300">490-1,040% ROI</div>
          </div>
        </div>

        <div className="bg-blue-900/10 border-l-4 border-blue-500 rounded p-6">
          <div className="font-semibold text-white mb-3">Starting November:</div>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center gap-3">
              <span className="text-[#b22222]">✓</span>
              <span>Tuesday Latin Dance Lessons</span>
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
