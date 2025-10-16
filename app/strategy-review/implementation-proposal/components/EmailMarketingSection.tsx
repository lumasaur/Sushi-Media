import { ExpandableSection } from './ExpandableSection';

export function EmailMarketingSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-8">
      <div className="flex items-center gap-3 mb-8">
        <span className="text-4xl">📧</span>
        <div>
          <h2 className="text-3xl font-bold text-white">Section 3: Email Marketing Strategy</h2>
          <p className="text-gray-400 mt-1">Quality over quantity: Strategic email discipline</p>
        </div>
      </div>

      {/* 3.1 Email Frequency & Purpose Matrix */}
      <ExpandableSection
        sectionNumber="3.1"
        title="Email Frequency & Purpose Matrix"
        icon="📅"
        badge="high-priority"
        executiveSummary={
          <>
            <strong className="text-white">Maximum 1 email/week to general list</strong> to prevent unsubscribes.
            VIP tier (10+ visits) can receive up to 2/week. Event attendees get dedicated event reminder series.
            All emails must provide clear value: exclusive offers, event invites, or loyalty rewards.
          </>
        }
      >
        <div className="space-y-6">
          {/* Email Calendar Visual */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Who Gets Emails When</h4>
            <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-900 border-b border-gray-700">
                    <th className="text-left p-3 text-gray-400 font-semibold">Segment</th>
                    <th className="text-left p-3 text-gray-400 font-semibold">Max Frequency</th>
                    <th className="text-left p-3 text-gray-400 font-semibold">Email Types</th>
                    <th className="text-left p-3 text-gray-400 font-semibold">Example</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  <tr>
                    <td className="p-3">
                      <div className="font-semibold text-white">General List</div>
                      <div className="text-xs text-gray-400">(New/Occasional customers)</div>
                    </td>
                    <td className="p-3">
                      <span className="px-3 py-1 bg-yellow-900/30 border border-yellow-700 rounded text-yellow-300 font-semibold">
                        1/week MAX
                      </span>
                    </td>
                    <td className="p-3 text-gray-300">
                      <ul className="space-y-1 text-xs">
                        <li>• Monthly event preview</li>
                        <li>• Seasonal menu launch</li>
                        <li>• Loyalty program invite</li>
                      </ul>
                    </td>
                    <td className="p-3 text-gray-400 text-xs">
                      "This Month at Ami: Trivia, Karaoke & Winter Warmth Fridays"
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3">
                      <div className="font-semibold text-white">Regular Customers</div>
                      <div className="text-xs text-gray-400">(5-9 visits)</div>
                    </td>
                    <td className="p-3">
                      <span className="px-3 py-1 bg-blue-900/30 border border-blue-700 rounded text-blue-300 font-semibold">
                        1-2/week
                      </span>
                    </td>
                    <td className="p-3 text-gray-300">
                      <ul className="space-y-1 text-xs">
                        <li>• All general emails</li>
                        <li>• Happy Hour reminders</li>
                        <li>• "We miss you" (if 30+ days)</li>
                      </ul>
                    </td>
                    <td className="p-3 text-gray-400 text-xs">
                      "It's been a while! Come back this week for bonus loyalty points"
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3">
                      <div className="font-semibold text-white">VIP Customers</div>
                      <div className="text-xs text-gray-400">(10+ visits)</div>
                    </td>
                    <td className="p-3">
                      <span className="px-3 py-1 bg-purple-900/30 border border-purple-700 rounded text-purple-300 font-semibold">
                        2/week
                      </span>
                    </td>
                    <td className="p-3 text-gray-300">
                      <ul className="space-y-1 text-xs">
                        <li>• All regular emails</li>
                        <li>• VIP-only offers</li>
                        <li>• Early event access</li>
                        <li>• Birthday rewards</li>
                      </ul>
                    </td>
                    <td className="p-3 text-gray-400 text-xs">
                      "VIP Preview: Reserve your spot for next Friday's Chef's Table"
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3">
                      <div className="font-semibold text-white">Event Attendees</div>
                      <div className="text-xs text-gray-400">(Signed up for specific event)</div>
                    </td>
                    <td className="p-3">
                      <span className="px-3 py-1 bg-green-900/30 border border-green-700 rounded text-green-300 font-semibold">
                        Event Series
                      </span>
                    </td>
                    <td className="p-3 text-gray-300">
                      <ul className="space-y-1 text-xs">
                        <li>• Confirmation (immediate)</li>
                        <li>• Reminder (3 days before)</li>
                        <li>• Day-of details (morning of)</li>
                        <li>• Thank you + next event</li>
                      </ul>
                    </td>
                    <td className="p-3 text-gray-400 text-xs">
                      "Trivia Night Tomorrow! Here's what to expect..."
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Email Discipline Rules */}
          <div className="bg-red-900/10 border-l-4 border-red-500 rounded p-6">
            <h4 className="text-lg font-semibold text-white mb-4">⚠️ Email Discipline Rules</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
              <div className="space-y-2">
                <div className="font-semibold text-red-300 mb-2">DO NOT:</div>
                <ul className="space-y-1">
                  <li>❌ Send more than 1 email/week to general list</li>
                  <li>❌ Email without a clear incentive or value</li>
                  <li>❌ Use "just checking in" or filler content</li>
                  <li>❌ Send generic promotional blasts</li>
                </ul>
              </div>
              <div className="space-y-2">
                <div className="font-semibold text-green-300 mb-2">ALWAYS:</div>
                <ul className="space-y-1">
                  <li>✅ Include exclusive offer or event invite</li>
                  <li>✅ Personalize based on customer segment</li>
                  <li>✅ Provide easy unsubscribe option</li>
                  <li>✅ Track open rates & adjust strategy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </ExpandableSection>

      {/* 3.2 Email Incentive Architecture */}
      <ExpandableSection
        sectionNumber="3.2"
        title="Email Incentive Architecture"
        icon="🎁"
        executiveSummary={
          <>
            Three-tier incentive pyramid: <strong className="text-white">High-frequency rewards</strong> (Happy Hour,
            loyalty points) sent weekly to active customers. <strong className="text-white">Medium-value offers</strong>
            ($10 off $50, free appetizer) for reactivation. <strong className="text-white">VIP exclusive experiences</strong>
            (Chef's Table, sake tasting) for top 10% of customers.
          </>
        }
      >
        <div className="space-y-6">
          {/* Incentive Pyramid Visual */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Three-Tier Incentive Pyramid</h4>
            <div className="space-y-3">
              {/* Tier 1: VIP Exclusive Experiences */}
              <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/20 border-2 border-purple-600 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-2xl">
                    1
                  </div>
                  <div className="flex-1">
                    <div className="text-xl font-bold text-white mb-2">VIP Exclusive Experiences</div>
                    <div className="text-sm text-gray-400 mb-3">Top 10% of customers (10+ visits)</div>
                    <div className="grid md:grid-cols-3 gap-3">
                      <div className="bg-black/30 rounded p-3 border border-purple-700">
                        <div className="font-semibold text-purple-300 mb-1">Chef's Table</div>
                        <div className="text-xs text-gray-400">8-seat omakase experience</div>
                      </div>
                      <div className="bg-black/30 rounded p-3 border border-purple-700">
                        <div className="font-semibold text-purple-300 mb-1">Sake Tasting Event</div>
                        <div className="text-xs text-gray-400">Private guided tasting</div>
                      </div>
                      <div className="bg-black/30 rounded p-3 border border-purple-700">
                        <div className="font-semibold text-purple-300 mb-1">Early Reservations</div>
                        <div className="text-xs text-gray-400">48-hour advance access</div>
                      </div>
                    </div>
                    <div className="mt-3 text-sm text-gray-300">
                      <span className="text-gray-400">Frequency:</span> 1-2x per month
                    </div>
                  </div>
                </div>
              </div>

              {/* Tier 2: Medium-Value Offers */}
              <div className="bg-gradient-to-r from-blue-900/30 to-blue-800/20 border-2 border-blue-600 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-2xl">
                    2
                  </div>
                  <div className="flex-1">
                    <div className="text-xl font-bold text-white mb-2">Medium-Value Reactivation Offers</div>
                    <div className="text-sm text-gray-400 mb-3">At-risk & lapsed customers (30-90 days)</div>
                    <div className="grid md:grid-cols-3 gap-3">
                      <div className="bg-black/30 rounded p-3 border border-blue-700">
                        <div className="font-semibold text-blue-300 mb-1">$10 Off $50</div>
                        <div className="text-xs text-gray-400">For customers 30-60 days</div>
                      </div>
                      <div className="bg-black/30 rounded p-3 border border-blue-700">
                        <div className="font-semibold text-blue-300 mb-1">Free Appetizer</div>
                        <div className="text-xs text-gray-400">On next visit (60-90 days)</div>
                      </div>
                      <div className="bg-black/30 rounded p-3 border border-blue-700">
                        <div className="font-semibold text-blue-300 mb-1">Double Loyalty Points</div>
                        <div className="text-xs text-gray-400">One visit, limited time</div>
                      </div>
                    </div>
                    <div className="mt-3 text-sm text-gray-300">
                      <span className="text-gray-400">Frequency:</span> 1x per reactivation window
                    </div>
                  </div>
                </div>
              </div>

              {/* Tier 3: High-Frequency Low-Cost Rewards */}
              <div className="bg-gradient-to-r from-green-900/30 to-green-800/20 border-2 border-green-600 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-2xl">
                    3
                  </div>
                  <div className="flex-1">
                    <div className="text-xl font-bold text-white mb-2">High-Frequency Low-Cost Rewards</div>
                    <div className="text-sm text-gray-400 mb-3">Active customers (visited within 30 days)</div>
                    <div className="grid md:grid-cols-3 gap-3">
                      <div className="bg-black/30 rounded p-3 border border-green-700">
                        <div className="font-semibold text-green-300 mb-1">Happy Hour Alert</div>
                        <div className="text-xs text-gray-400">Weekly reminder</div>
                      </div>
                      <div className="bg-black/30 rounded p-3 border border-green-700">
                        <div className="font-semibold text-green-300 mb-1">Event Invites</div>
                        <div className="text-xs text-gray-400">Trivia, Karaoke, Theme nights</div>
                      </div>
                      <div className="bg-black/30 rounded p-3 border border-green-700">
                        <div className="font-semibold text-green-300 mb-1">Loyalty Updates</div>
                        <div className="text-xs text-gray-400">"You're 20 points from $10!"</div>
                      </div>
                    </div>
                    <div className="mt-3 text-sm text-gray-300">
                      <span className="text-gray-400">Frequency:</span> 1x per week (max)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cost-Per-Redemption Analysis */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h4 className="text-lg font-semibold text-white mb-4">Cost-Per-Redemption Economics</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <div className="font-semibold text-purple-300 mb-2">VIP Experiences</div>
                <div className="space-y-1 text-gray-300">
                  <div><span className="text-gray-400">Cost:</span> $50-100/person</div>
                  <div><span className="text-gray-400">Expected Return:</span> $200-400/visit</div>
                  <div><span className="text-gray-400">ROI:</span> <span className="text-green-400 font-semibold">3-4x</span></div>
                </div>
              </div>
              <div>
                <div className="font-semibold text-blue-300 mb-2">Reactivation Offers</div>
                <div className="space-y-1 text-gray-300">
                  <div><span className="text-gray-400">Cost:</span> $5-10/redemption</div>
                  <div><span className="text-gray-400">Expected Return:</span> $50-80/visit</div>
                  <div><span className="text-gray-400">ROI:</span> <span className="text-green-400 font-semibold">5-8x</span></div>
                </div>
              </div>
              <div>
                <div className="font-semibold text-green-300 mb-2">Low-Cost Rewards</div>
                <div className="space-y-1 text-gray-300">
                  <div><span className="text-gray-400">Cost:</span> $0-2/redemption</div>
                  <div><span className="text-gray-400">Expected Return:</span> $40-60/visit</div>
                  <div><span className="text-gray-400">ROI:</span> <span className="text-green-400 font-semibold">20-60x</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ExpandableSection>

      {/* 3.3 Email Performance Metrics */}
      <ExpandableSection
        sectionNumber="3.3"
        title="Email Performance Metrics & Benchmarks"
        icon="📊"
        executiveSummary={
          <>
            Track weekly: Open rate (target: <strong className="text-white">25-35%</strong>), Click-through rate
            (target: <strong className="text-white">8-12%</strong>), Redemption rate (target: <strong className="text-white">5-10%</strong>).
            If open rate drops below 20%, reduce frequency. Unsubscribe rate should stay under 0.5% per email.
          </>
        }
      >
        <div className="space-y-6">
          {/* Benchmark Comparison Table */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Restaurant Industry Benchmarks</h4>
            <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-900 border-b border-gray-700">
                    <th className="text-left p-3 text-gray-400 font-semibold">Metric</th>
                    <th className="text-left p-3 text-gray-400 font-semibold">Industry Average</th>
                    <th className="text-left p-3 text-gray-400 font-semibold">Ami Sushi Target</th>
                    <th className="text-left p-3 text-gray-400 font-semibold">Action If Below Target</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  <tr>
                    <td className="p-3 font-semibold text-white">Open Rate</td>
                    <td className="p-3 text-gray-300">18-22%</td>
                    <td className="p-3">
                      <span className="px-3 py-1 bg-green-900/30 border border-green-700 rounded text-green-300 font-semibold">
                        25-35%
                      </span>
                    </td>
                    <td className="p-3 text-gray-400 text-xs">
                      Test different subject lines, send time optimization
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white">Click-Through Rate (CTR)</td>
                    <td className="p-3 text-gray-300">4-6%</td>
                    <td className="p-3">
                      <span className="px-3 py-1 bg-blue-900/30 border border-blue-700 rounded text-blue-300 font-semibold">
                        8-12%
                      </span>
                    </td>
                    <td className="p-3 text-gray-400 text-xs">
                      Improve CTA clarity, add urgency ("expires Friday")
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white">Redemption Rate</td>
                    <td className="p-3 text-gray-300">2-4%</td>
                    <td className="p-3">
                      <span className="px-3 py-1 bg-purple-900/30 border border-purple-700 rounded text-purple-300 font-semibold">
                        5-10%
                      </span>
                    </td>
                    <td className="p-3 text-gray-400 text-xs">
                      Increase offer value, simplify redemption process
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white">Unsubscribe Rate</td>
                    <td className="p-3 text-gray-300">0.3-0.5%</td>
                    <td className="p-3">
                      <span className="px-3 py-1 bg-yellow-900/30 border border-yellow-700 rounded text-yellow-300 font-semibold">
                        &lt; 0.5%
                      </span>
                    </td>
                    <td className="p-3 text-gray-400 text-xs">
                      <span className="text-red-400 font-semibold">Reduce frequency immediately</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white">List Growth Rate</td>
                    <td className="p-3 text-gray-300">2-5%/month</td>
                    <td className="p-3">
                      <span className="px-3 py-1 bg-green-900/30 border border-green-700 rounded text-green-300 font-semibold">
                        5-8%/month
                      </span>
                    </td>
                    <td className="p-3 text-gray-400 text-xs">
                      Increase Toast Loyalty promotion, add QR codes
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Weekly Tracking Dashboard */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h4 className="text-lg font-semibold text-white mb-4">Weekly Email Tracking Dashboard</h4>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="bg-gray-900 rounded p-4 border border-gray-700">
                  <div className="font-semibold text-white mb-3">What to Track</div>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">✓</span>
                      <span>Email sent date & subject line</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">✓</span>
                      <span>Segment sent to (General/Regular/VIP)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">✓</span>
                      <span>Open rate, CTR, redemptions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">✓</span>
                      <span>Revenue attributed to email</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">✓</span>
                      <span>Unsubscribes & complaints</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-900 rounded p-4 border border-gray-700">
                  <div className="font-semibold text-white mb-3">Tools</div>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">→</span>
                      <span><strong className="text-white">Mailchimp Free Tier:</strong> Up to 500 contacts, basic analytics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">→</span>
                      <span><strong className="text-white">Google Sheets:</strong> Manual tracking template (5 min/week)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">→</span>
                      <span><strong className="text-white">Toast Reports:</strong> Revenue by promotion code</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Red Flags */}
              <div className="bg-red-900/10 border-l-4 border-red-500 rounded p-4">
                <div className="font-semibold text-red-300 mb-2">🚨 Red Flags - Immediate Action Required</div>
                <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-300">
                  <div>
                    <span className="text-red-400 font-semibold">Open rate drops below 20%:</span> Reduce frequency, test subject lines
                  </div>
                  <div>
                    <span className="text-red-400 font-semibold">Unsubscribe rate &gt; 0.5%:</span> Stop sending, audit content quality
                  </div>
                  <div>
                    <span className="text-red-400 font-semibold">Redemption rate &lt; 2%:</span> Offer not compelling enough, increase value
                  </div>
                  <div>
                    <span className="text-red-400 font-semibold">Spam complaints:</span> Review email copy for misleading content
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ExpandableSection>
    </section>
  );
}
