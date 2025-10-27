'use client';

import React from 'react';
import { ExpandableSection } from './ExpandableSection';

export function Track2LunchSection() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="flex items-center gap-4 mb-10">
        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#D4AF37] flex items-center justify-center shadow-glow-gold">
          <span className="text-2xl font-bold text-white">T2</span>
        </div>
        <div>
          <div className="text-sm text-[#D4AF37] font-bold mb-1 tracking-wide">TRACK 2</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Lunch Delivery Program</h2>
          <p className="text-gray-400 mt-2 text-lg">Capture nearby office park and local business demand</p>
        </div>
      </div>

      {/* Problem & Solution Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {/* Problem */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 rounded-xl p-8 shadow-medium">
          <div className="text-sm text-gray-400 font-bold mb-3 tracking-wide">THE PROBLEM</div>
          <h3 className="text-2xl font-bold text-white mb-4">Untapped Lunch Market</h3>
          <ul className="text-gray-300 space-y-2 text-base leading-relaxed">
            <li>• Office parks nearby represent 500+ potential lunch customers</li>
            <li>• Most businesses don't know Ami Sushi delivers</li>
            <li>• Current lunch revenue only 20% of dinner</li>
            <li>• Kitchen and staff already operational during lunch hours</li>
          </ul>
        </div>

        {/* Solution */}
        <div className="bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37]/30 rounded-xl p-8 shadow-medium">
          <div className="text-sm text-[#D4AF37] font-bold mb-3 tracking-wide">THE SOLUTION</div>
          <h3 className="text-2xl font-bold text-white mb-4">3-Phase Lunch Blitz</h3>
          <ul className="text-gray-300 space-y-2 text-base leading-relaxed">
            <li>• <strong className="text-white">Phase 1:</strong> Office park flyer blitz + direct outreach</li>
            <li>• <strong className="text-white">Phase 2:</strong> Online visibility (Google, DoorDash optimization)</li>
            <li>• <strong className="text-white">Phase 3:</strong> Local expansion to residential neighborhoods</li>
            <li>• Leverages existing kitchen capacity with minimal additional cost</li>
          </ul>
        </div>
      </div>

      {/* 3-Phase Approach Visualization */}
      <div className="mb-12">
        <h3 className="text-3xl font-bold text-white mb-6">3-Phase Launch Strategy</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Phase 1 */}
          <div className="bg-gradient-to-br from-blue-900/30 to-blue-900/10 border border-blue-500/30 rounded-xl p-6">
            <div className="text-sm text-blue-400 font-bold mb-2 tracking-wide">PHASE 1 • WEEK 1-2</div>
            <h4 className="text-xl font-bold text-white mb-4">Office Park Blitz</h4>
            <ul className="text-gray-300 space-y-2 text-sm">
              <li>• Flyer distribution to nearby businesses</li>
              <li>• Direct outreach to office managers</li>
              <li>• Introductory 15% off promo code</li>
              <li>• Focus: 6 office parks within 3 miles</li>
            </ul>
            <div className="mt-4 pt-4 border-t border-blue-500/20">
              <div className="text-xs text-blue-300 font-semibold">TARGET</div>
              <div className="text-lg font-bold text-white">10-15 orders/week</div>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="bg-gradient-to-br from-purple-900/30 to-purple-900/10 border border-purple-500/30 rounded-xl p-6">
            <div className="text-sm text-purple-400 font-bold mb-2 tracking-wide">PHASE 2 • WEEK 3-4</div>
            <h4 className="text-xl font-bold text-white mb-4">Online Optimization</h4>
            <ul className="text-gray-300 space-y-2 text-sm">
              <li>• Update Google Business hours and menu</li>
              <li>• Optimize DoorDash/Uber Eats listings</li>
              <li>• Add lunch specials to all platforms</li>
              <li>• Request reviews from Phase 1 customers</li>
            </ul>
            <div className="mt-4 pt-4 border-t border-purple-500/20">
              <div className="text-xs text-purple-300 font-semibold">TARGET</div>
              <div className="text-lg font-bold text-white">25-35 orders/week</div>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="bg-gradient-to-br from-green-900/30 to-green-900/10 border border-green-500/30 rounded-xl p-6">
            <div className="text-sm text-green-400 font-bold mb-2 tracking-wide">PHASE 3 • MONTH 2+</div>
            <h4 className="text-xl font-bold text-white mb-4">Local Expansion</h4>
            <ul className="text-gray-300 space-y-2 text-sm">
              <li>• Expand to residential neighborhoods</li>
              <li>• Partner with local gyms and studios</li>
              <li>• Introduce catering menu for meetings</li>
              <li>• Build recurring corporate accounts</li>
            </ul>
            <div className="mt-4 pt-4 border-t border-green-500/20">
              <div className="text-xs text-green-300 font-semibold">TARGET</div>
              <div className="text-lg font-bold text-white">50-70 orders/week</div>
            </div>
          </div>
        </div>
      </div>

      {/* Expandable Section: Lunch Delivery Menu Design */}
      <div className="mb-8">
        <ExpandableSection
          title="Lunch Delivery Menu Design"
          badge="recommended"
          executiveSummary={
            <>
              Streamlined lunch menu focused on speed, portion control, and delivery-friendly packaging.
              8-10 signature items priced $12-18 with 30-35% food cost target.
            </>
          }
        >
          <div className="space-y-8">
            {/* Menu Philosophy */}
            <div>
              <h4 className="text-xl font-bold text-white mb-4">Menu Philosophy</h4>
              <div className="bg-gray-800/50 rounded-lg p-6">
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Lunch delivery requires a different approach than dine-in. Focus on items that travel well,
                  can be prepared quickly, and offer clear value at a competitive price point.
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="text-[#D4AF37] font-semibold mb-2">Speed</div>
                    <p className="text-gray-400">All items can be prepared in under 15 minutes</p>
                  </div>
                  <div>
                    <div className="text-[#D4AF37] font-semibold mb-2">Travel-Friendly</div>
                    <p className="text-gray-400">Packaging maintains quality for 20-30 min delivery</p>
                  </div>
                  <div>
                    <div className="text-[#D4AF37] font-semibold mb-2">Value</div>
                    <p className="text-gray-400">Clear portion sizes that justify $12-18 price point</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sample Menu Items */}
            <div>
              <h4 className="text-xl font-bold text-white mb-4">Sample Lunch Menu (8-10 Items)</h4>
              <div className="space-y-3">
                <div className="bg-gray-800/50 rounded-lg p-4 flex justify-between items-start">
                  <div>
                    <div className="font-bold text-white mb-1">Sushi Lunch Box</div>
                    <p className="text-gray-400 text-sm">California roll, 3pc nigiri, edamame, salad</p>
                    <div className="text-xs text-gray-500 mt-1">Food cost: $4.50-5.00 (30-33%)</div>
                  </div>
                  <div className="text-[#D4AF37] font-bold text-lg">$15</div>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-4 flex justify-between items-start">
                  <div>
                    <div className="font-bold text-white mb-1">Spicy Tuna Bowl</div>
                    <p className="text-gray-400 text-sm">Sushi rice, spicy tuna, avocado, cucumber, seaweed salad</p>
                    <div className="text-xs text-gray-500 mt-1">Food cost: $4.80-5.30 (32-35%)</div>
                  </div>
                  <div className="text-[#D4AF37] font-bold text-lg">$14</div>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-4 flex justify-between items-start">
                  <div>
                    <div className="font-bold text-white mb-1">Teriyaki Chicken Bento</div>
                    <p className="text-gray-400 text-sm">Grilled chicken, rice, salad, gyoza (3pc), fruit</p>
                    <div className="text-xs text-gray-500 mt-1">Food cost: $4.20-4.70 (28-31%)</div>
                  </div>
                  <div className="text-[#D4AF37] font-bold text-lg">$15</div>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-4 flex justify-between items-start">
                  <div>
                    <div className="font-bold text-white mb-1">Salmon Poke Bowl</div>
                    <p className="text-gray-400 text-sm">Fresh salmon, sushi rice, edamame, seaweed, ponzu</p>
                    <div className="text-xs text-gray-500 mt-1">Food cost: $5.40-5.90 (32-35%)</div>
                  </div>
                  <div className="text-[#D4AF37] font-bold text-lg">$17</div>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-4 flex justify-between items-start">
                  <div>
                    <div className="font-bold text-white mb-1">Vegetarian Sushi Combo</div>
                    <p className="text-gray-400 text-sm">Avocado roll, cucumber roll, inari (2pc), salad</p>
                    <div className="text-xs text-gray-500 mt-1">Food cost: $3.60-4.00 (26-29%)</div>
                  </div>
                  <div className="text-[#D4AF37] font-bold text-lg">$14</div>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-4 flex justify-between items-start">
                  <div>
                    <div className="font-bold text-white mb-1">Ramen Lunch Special</div>
                    <p className="text-gray-400 text-sm">Choice of tonkotsu, miso, or shoyu with egg and veggies</p>
                    <div className="text-xs text-gray-500 mt-1">Food cost: $4.50-5.00 (30-33%)</div>
                  </div>
                  <div className="text-[#D4AF37] font-bold text-lg">$15</div>
                </div>
              </div>
            </div>

            {/* Add-Ons & Upsells */}
            <div>
              <h4 className="text-xl font-bold text-white mb-4">Add-Ons & Upsells</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="font-bold text-white mb-2">Beverages</div>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Ramune (Japanese soda) - $3</li>
                    <li>• Green tea (hot/iced) - $2</li>
                    <li>• Sake (small bottle) - $8</li>
                  </ul>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="font-bold text-white mb-2">Sides</div>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Extra gyoza (3pc) - $4</li>
                    <li>• Miso soup - $3</li>
                    <li>• Extra sushi (2pc) - $5</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </ExpandableSection>
      </div>

      {/* Expandable Section: Delivery Approach & Staffing */}
      <div className="mb-8">
        <ExpandableSection
          title="Delivery Approach & Staffing"
          badge="recommended"
          executiveSummary={
            <>
              Use existing DoorDash/Uber Eats infrastructure initially. No additional delivery driver needed.
              One additional kitchen prep person during peak lunch (11:30am-1:30pm) when volume exceeds 15 orders/day.
            </>
          }
        >
          <div className="space-y-8">
            {/* Delivery Strategy */}
            <div>
              <h4 className="text-xl font-bold text-white mb-4">Delivery Strategy</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <div className="text-[#D4AF37] font-bold mb-3">Phase 1-2: Third-Party Only</div>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    Use DoorDash and Uber Eats for all deliveries. Commission fees (20-30%) are acceptable
                    during customer acquisition phase.
                  </p>
                  <ul className="text-gray-400 text-sm space-y-2">
                    <li>• Zero upfront delivery infrastructure</li>
                    <li>• Instant access to customer base</li>
                    <li>• Test volume before committing to in-house</li>
                    <li>• Expected: 10-35 orders/week</li>
                  </ul>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-6">
                  <div className="text-[#D4AF37] font-bold mb-3">Phase 3: Hybrid Model (Optional)</div>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    Once hitting 50+ orders/week, evaluate adding part-time driver for recurring corporate
                    accounts while maintaining third-party for ad-hoc orders.
                  </p>
                  <ul className="text-gray-400 text-sm space-y-2">
                    <li>• Part-time driver: $15-18/hr (3-4 hrs/day)</li>
                    <li>• Focus on high-value recurring accounts</li>
                    <li>• Save 20-30% commission on direct orders</li>
                    <li>• Keep third-party as backup/overflow</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Staffing Requirements */}
            <div>
              <h4 className="text-xl font-bold text-white mb-4">Kitchen Staffing by Volume</h4>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-900/20 to-transparent border-l-4 border-green-500 p-6 rounded">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <div className="font-bold text-white text-lg">Under 15 Orders/Day</div>
                      <div className="text-sm text-gray-400">Week 1-2 (Phase 1)</div>
                    </div>
                    <div className="text-green-400 font-bold">No Additional Staff</div>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Current kitchen staff can handle prep and execution during lunch hours. Stagger prep
                    during slower morning periods.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-yellow-900/20 to-transparent border-l-4 border-yellow-500 p-6 rounded">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <div className="font-bold text-white text-lg">15-35 Orders/Day</div>
                      <div className="text-sm text-gray-400">Week 3-8 (Phase 2)</div>
                    </div>
                    <div className="text-yellow-400 font-bold">+1 Prep Person (Part-Time)</div>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">
                    Add part-time prep person for peak lunch hours (11:30am-1:30pm, 2 hours/day).
                  </p>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div>
                      <div className="text-gray-400 font-semibold mb-1">Cost</div>
                      <div className="text-white">$15-18/hr × 2hrs × 5 days = $150-180/week</div>
                    </div>
                    <div>
                      <div className="text-gray-400 font-semibold mb-1">Responsibilities</div>
                      <div className="text-white">Rice prep, roll assembly, boxing orders</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-900/20 to-transparent border-l-4 border-red-500 p-6 rounded">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <div className="font-bold text-white text-lg">35+ Orders/Day</div>
                      <div className="text-sm text-gray-400">Month 2-3 (Phase 3)</div>
                    </div>
                    <div className="text-red-400 font-bold">+1 Dedicated Lunch Line Cook</div>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">
                    Upgrade to dedicated lunch line cook working 11am-3pm (4 hours/day) to handle higher volume.
                  </p>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div>
                      <div className="text-gray-400 font-semibold mb-1">Cost</div>
                      <div className="text-white">$16-20/hr × 4hrs × 5 days = $320-400/week</div>
                    </div>
                    <div>
                      <div className="text-gray-400 font-semibold mb-1">Responsibilities</div>
                      <div className="text-white">Full lunch execution, quality control, packing</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Packaging & Quality */}
            <div>
              <h4 className="text-xl font-bold text-white mb-4">Packaging & Quality Control</h4>
              <div className="bg-gray-800/50 rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-[#D4AF37] font-semibold mb-3">Packaging Supplies</div>
                    <ul className="text-gray-400 text-sm space-y-2">
                      <li>• Leak-proof containers with secure lids</li>
                      <li>• Separate compartments for sauces</li>
                      <li>• Insulated bags for temperature control</li>
                      <li>• Branded stickers/labels for boxes</li>
                      <li>• Cost: $1.50-2.00 per order</li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-[#D4AF37] font-semibold mb-3">Quality Standards</div>
                    <ul className="text-gray-400 text-sm space-y-2">
                      <li>• All orders double-checked before sealing</li>
                      <li>• Temperature check for hot items</li>
                      <li>• Include utensils, napkins, soy sauce</li>
                      <li>• Add thank-you card with reorder info</li>
                      <li>• Track delivery times (target: under 30 min)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ExpandableSection>
      </div>

      {/* Expandable Section: Marketing & Outreach Strategy */}
      <div className="mb-8">
        <ExpandableSection
          title="Marketing & Outreach Strategy"
          badge="recommended"
          executiveSummary={
            <>
              Direct outreach to office managers and HR departments with flyers, phone calls, and introductory
              discounts. Focus on building 5-10 recurring corporate accounts during first month.
            </>
          }
        >
          <div className="space-y-8">
            {/* Week 1-2: Office Park Blitz */}
            <div>
              <h4 className="text-xl font-bold text-white mb-4">Week 1-2: Office Park Blitz</h4>
              <div className="bg-gray-800/50 rounded-lg p-6">
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Identify 6 office parks within 3-mile delivery radius. Target buildings with 20+ employees.
                </p>

                <div className="space-y-4">
                  <div>
                    <div className="text-[#D4AF37] font-bold mb-2">Flyer Distribution</div>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• Print 500 colorful flyers with menu highlights and QR code</li>
                      <li>• Place in building lobbies, break rooms, bulletin boards (with permission)</li>
                      <li>• Include promo code: FIRSTLUNCH15 (15% off first order)</li>
                      <li>• Cost: $50-80 for printing</li>
                    </ul>
                  </div>

                  <div>
                    <div className="text-[#D4AF37] font-bold mb-2">Direct Outreach</div>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• Call office managers/receptionists to introduce service</li>
                      <li>• Offer group lunch special: Order 10+ lunches, get 1 free</li>
                      <li>• Drop off sample menu + business card</li>
                      <li>• Goal: Secure 3-5 initial corporate accounts</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone Script */}
            <div>
              <h4 className="text-xl font-bold text-white mb-4">Office Manager Outreach Script</h4>
              <div className="bg-gradient-to-r from-blue-900/20 to-transparent border-l-4 border-blue-500 p-6 rounded">
                <div className="text-sm text-blue-300 font-bold mb-3">PHONE SCRIPT TEMPLATE</div>
                <div className="space-y-3 text-gray-300 text-sm font-mono leading-relaxed">
                  <p><span className="text-white font-bold">Opening:</span></p>
                  <p className="pl-4">
                    "Hi, my name is [NAME] calling from Ami Sushi. We're a local Japanese restaurant just
                    [X miles] from your office. We've recently expanded our lunch delivery service and wanted
                    to introduce ourselves to local businesses."
                  </p>

                  <p><span className="text-white font-bold">Value Prop:</span></p>
                  <p className="pl-4">
                    "We offer fresh sushi, poke bowls, and bento boxes delivered in under 30 minutes. Our lunch
                    menu is $12-18 per person, and we can handle individual orders or group catering."
                  </p>

                  <p><span className="text-white font-bold">Special Offer:</span></p>
                  <p className="pl-4">
                    "For first-time corporate orders, we're offering 15% off with code FIRSTLUNCH15. And if
                    you have team lunches or meetings, we offer a group special - order 10 lunches, get 1 free."
                  </p>

                  <p><span className="text-white font-bold">Call to Action:</span></p>
                  <p className="pl-4">
                    "I'd love to drop off some menus for your break room, and I can include a few business
                    cards if you'd like to share with your team. Would tomorrow or Wednesday work better?"
                  </p>

                  <p><span className="text-white font-bold">Follow-Up:</span></p>
                  <p className="pl-4">
                    "Great! I'll stop by [DAY] around [TIME]. Is there a good place to leave the menus?
                    And can I get your direct number in case we have questions about your first order?"
                  </p>
                </div>
              </div>
            </div>

            {/* Week 3-4: Online Optimization */}
            <div>
              <h4 className="text-xl font-bold text-white mb-4">Week 3-4: Online Optimization</h4>
              <div className="space-y-4">
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div>
                      <div className="font-bold text-white mb-1">Google Business Profile Update</div>
                      <p className="text-gray-400 text-sm">
                        Update hours to show lunch service (11am-3pm). Add lunch menu photos. Request reviews
                        from Phase 1 customers. Enable "Order Online" button linking to DoorDash.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">2</div>
                    <div>
                      <div className="font-bold text-white mb-1">DoorDash & Uber Eats Optimization</div>
                      <p className="text-gray-400 text-sm">
                        Create dedicated "Lunch Specials" category. Upload professional photos of all lunch items.
                        Run 20% off promotion for first-time delivery customers. Target 3-5 mile radius.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div>
                      <div className="font-bold text-white mb-1">Social Media Campaign</div>
                      <p className="text-gray-400 text-sm">
                        Post lunch menu 3x/week on Instagram/Facebook. Use hashtags: #OfficeInch #WorkLunch
                        #LocalDelivery. Tag local businesses. Share behind-the-scenes lunch prep videos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Month 2+: Retention & Expansion */}
            <div>
              <h4 className="text-xl font-bold text-white mb-4">Month 2+: Retention & Expansion</h4>
              <div className="bg-gray-800/50 rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-[#D4AF37] font-semibold mb-3">Retention Strategies</div>
                    <ul className="text-gray-400 text-sm space-y-2">
                      <li>• Loyalty program: 5th lunch free after 4 orders</li>
                      <li>• Weekly email to corporate accounts with menu</li>
                      <li>• Personal thank-you notes to recurring customers</li>
                      <li>• Seasonal menu additions (monthly rotation)</li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-[#D4AF37] font-semibold mb-3">Expansion Tactics</div>
                    <ul className="text-gray-400 text-sm space-y-2">
                      <li>• Partner with local gyms (post-workout meals)</li>
                      <li>• Reach out to nearby schools for faculty lunches</li>
                      <li>• Introduce catering menu for meetings (10+ people)</li>
                      <li>• Expand residential delivery radius</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ExpandableSection>
      </div>

      {/* Track 2 Summary */}
      <div className="bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37]/30 rounded-xl p-8 shadow-strong">
        <h3 className="text-2xl font-bold text-white mb-6">Track 2 Summary</h3>

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {/* First Month Investment */}
          <div>
            <div className="text-sm text-[#D4AF37] font-bold mb-2 tracking-wide">FIRST MONTH INVESTMENT</div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-gray-300">
                <span>Setup (packaging, flyers, supplies)</span>
                <span className="font-semibold">$200-300</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Marketing (online, print, promos)</span>
                <span className="font-semibold">$150-200</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Part-time prep (Week 3-4)</span>
                <span className="font-semibold">$300-400</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Platform fees (promo discount absorption)</span>
                <span className="font-semibold">$200-280</span>
              </div>
              <div className="flex justify-between text-white font-bold border-t border-[#D4AF37]/30 pt-2 mt-2">
                <span>Total First Month</span>
                <span>$850-1,180</span>
              </div>
            </div>
          </div>

          {/* Monthly Ongoing */}
          <div>
            <div className="text-sm text-[#D4AF37] font-bold mb-2 tracking-wide">MONTHLY ONGOING (Month 2-3)</div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-gray-300">
                <span>Packaging supplies</span>
                <span className="font-semibold">$250-400</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Labor (prep/line cook)</span>
                <span className="font-semibold">$600-800</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Marketing (ongoing)</span>
                <span className="font-semibold">$100-150</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Platform fees (20-25% of revenue)</span>
                <span className="font-semibold">$400-600</span>
              </div>
              <div className="flex justify-between text-white font-bold border-t border-[#D4AF37]/30 pt-2 mt-2">
                <span>Total Monthly Cost</span>
                <span>$1,350-1,950</span>
              </div>
            </div>
          </div>

          {/* Expected Revenue */}
          <div>
            <div className="text-sm text-[#D4AF37] font-bold mb-2 tracking-wide">EXPECTED REVENUE</div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-gray-300">
                <span>Month 1 (ramp-up)</span>
                <span className="font-semibold">$2,000-3,500</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Month 2 (growing)</span>
                <span className="font-semibold">$5,000-7,500</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Month 3 (established)</span>
                <span className="font-semibold">$8,000-12,000</span>
              </div>
              <div className="flex justify-between text-white font-bold border-t border-[#D4AF37]/30 pt-2 mt-2">
                <span>Month 3 Net Profit</span>
                <span className="text-green-400">$6,050-10,050</span>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-4 pt-6 border-t border-[#D4AF37]/30">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">50-70</div>
            <div className="text-sm text-gray-400">Orders/Week (Month 3)</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">$15</div>
            <div className="text-sm text-gray-400">Average Order Value</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">30-35%</div>
            <div className="text-sm text-gray-400">Food Cost Target</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#D4AF37] mb-1">610-850%</div>
            <div className="text-sm text-gray-400">ROI (Month 3)</div>
          </div>
        </div>
      </div>
    </div>
  );
}
