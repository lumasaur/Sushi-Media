import { ExpandableSection } from './ExpandableSection';

export function CorporateOrderingSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-8">
      <div className="flex items-center gap-3 mb-8">
        <span className="text-4xl">🏢</span>
        <div>
          <h2 className="text-3xl font-bold text-white">Section 4: Corporate Ordering Strategy</h2>
          <p className="text-gray-400 mt-1">Digital-first approach with strategic delivery decisions</p>
        </div>
      </div>

      {/* 4.1 Toast Group Ordering Setup */}
      <ExpandableSection
        sectionNumber="4.1"
        title="Toast Group Ordering Setup"
        icon="📱"
        badge="best"
        executiveSummary={
          <>
            <strong className="text-white">Toast Group Ordering eliminates phone tag</strong> for corporate orders.
            Order organizer shares link, team members add individual orders, restaurant receives consolidated order
            with itemized breakdown. <strong className="text-white">No phone calls, no manual consolidation</strong>.
            Setup takes 15 minutes in Toast Dashboard.
          </>
        }
      >
        <div className="space-y-6">
          {/* How It Works - 4-Step Visual */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">How Toast Group Ordering Works</h4>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                {
                  step: 1,
                  icon: "👤",
                  title: "Organizer Creates Order",
                  description: "Corporate contact visits Ami Sushi website, clicks 'Group Order', selects date/time"
                },
                {
                  step: 2,
                  icon: "🔗",
                  title: "Share Link with Team",
                  description: "Organizer shares unique link via email/Slack. Each person adds their own items."
                },
                {
                  step: 3,
                  icon: "📦",
                  title: "Auto-Consolidation",
                  description: "Toast automatically combines all orders into single ticket with individual breakdown"
                },
                {
                  step: 4,
                  icon: "✅",
                  title: "Restaurant Fulfills",
                  description: "Kitchen sees consolidated order. Payment processed once. Delivery/pickup scheduled."
                }
              ].map((item) => (
                <div key={item.step} className="bg-gray-800 border-2 border-gray-700 rounded-lg p-5 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#b22222] text-white flex items-center justify-center font-bold text-xl mx-auto mb-3">
                    {item.step}
                  </div>
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <div className="font-semibold text-white mb-2 text-sm">{item.title}</div>
                  <div className="text-xs text-gray-400 leading-relaxed">{item.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Toast Setup Checklist */}
          <div className="bg-green-900/10 border-l-4 border-green-500 rounded p-6">
            <h4 className="text-lg font-semibold text-white mb-4">Toast Group Ordering Setup Checklist</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-green-300 mb-3">Configuration (15 minutes)</h5>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500">☐</span>
                    <span>Log into Toast Dashboard → Online Ordering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500">☐</span>
                    <span>Enable "Group Ordering" feature</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500">☐</span>
                    <span>Set minimum order: $100 (10-15 people)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500">☐</span>
                    <span>Set deadline: 2 hours before scheduled time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500">☐</span>
                    <span>Enable "Individual Item Labeling" (names on containers)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-green-300 mb-3">Marketing Materials</h5>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500">☐</span>
                    <span>Add "Corporate Group Ordering" page to website</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500">☐</span>
                    <span>Create PDF guide: "How to Order for Your Team"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500">☐</span>
                    <span>Design business card with Group Ordering QR code</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500">☐</span>
                    <span>Add to email signature for corporate contacts</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Benefits Comparison */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Old Process vs. Toast Group Ordering</h4>
            <div className="grid md:grid-cols-2 gap-4">
              {/* Old Process - Red */}
              <div className="bg-red-900/10 border-2 border-red-700 rounded-lg p-5">
                <div className="font-semibold text-red-300 mb-3 text-lg">❌ Old Phone-Based Process</div>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    <span>Organizer calls restaurant, reads 15-person order</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    <span>Staff manually writes down each item</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    <span>High risk of errors ("Was that 3 or 5 spicy tuna rolls?")</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    <span>Call-back required for clarifications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    <span>10-15 minutes of staff time per order</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    <span>Payment over phone (security concerns)</span>
                  </li>
                </ul>
              </div>

              {/* New Process - Green */}
              <div className="bg-green-900/10 border-2 border-green-700 rounded-lg p-5">
                <div className="font-semibold text-green-300 mb-3 text-lg">✅ Toast Group Ordering</div>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">•</span>
                    <span>Organizer shares link, team self-serves</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">•</span>
                    <span>Order appears directly in Toast POS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">•</span>
                    <span>Zero transcription errors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">•</span>
                    <span>No phone calls needed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">•</span>
                    <span>2 minutes of staff time (just review & accept)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">•</span>
                    <span>Secure online payment via Toast</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </ExpandableSection>

      {/* 4.2 Digital-First Ordering Hierarchy */}
      <ExpandableSection
        sectionNumber="4.2"
        title="Digital-First Ordering Hierarchy"
        icon="📊"
        executiveSummary={
          <>
            Priority order: <strong className="text-white">1) Toast Group Ordering</strong> (for teams 10+),
            <strong className="text-white"> 2) Toast Online Ordering</strong> (individual/small groups),
            <strong className="text-white"> 3) Phone orders</strong> (backup only). Train staff to redirect phone orders
            to digital channels: "For faster service, visit our website or I can text you the link."
          </>
        }
      >
        <div className="space-y-6">
          {/* Ordering Hierarchy Flowchart */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Corporate Order Decision Tree</h4>
            <div className="space-y-3">
              {/* Level 1: Group Size Question */}
              <div className="bg-gray-800 border-2 border-gray-700 rounded-lg p-5">
                <div className="text-center mb-4">
                  <div className="text-lg font-semibold text-white">How many people are ordering?</div>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  {/* 10+ People - Toast Group Ordering */}
                  <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 border-2 border-green-500 rounded-lg p-4">
                    <div className="text-center mb-3">
                      <div className="text-2xl font-bold text-white mb-1">10+ People</div>
                      <div className="text-sm text-gray-400">Team/corporate order</div>
                    </div>
                    <div className="bg-green-900/30 rounded p-3 border border-green-700 mb-3">
                      <div className="font-semibold text-green-300 mb-2">→ Toast Group Ordering</div>
                      <div className="text-xs text-gray-300">Share link, everyone orders individually</div>
                    </div>
                    <div className="text-xs text-gray-400 space-y-1">
                      <div><span className="text-green-400 font-semibold">Benefits:</span></div>
                      <div>• No phone tag</div>
                      <div>• Names on containers</div>
                      <div>• Auto-consolidated</div>
                    </div>
                  </div>

                  {/* 2-9 People - Toast Online Ordering */}
                  <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 border-2 border-blue-500 rounded-lg p-4">
                    <div className="text-center mb-3">
                      <div className="text-2xl font-bold text-white mb-1">2-9 People</div>
                      <div className="text-sm text-gray-400">Small group</div>
                    </div>
                    <div className="bg-blue-900/30 rounded p-3 border border-blue-700 mb-3">
                      <div className="font-semibold text-blue-300 mb-2">→ Toast Online Ordering</div>
                      <div className="text-xs text-gray-300">One person places order for group</div>
                    </div>
                    <div className="text-xs text-gray-400 space-y-1">
                      <div><span className="text-blue-400 font-semibold">Benefits:</span></div>
                      <div>• Quick & simple</div>
                      <div>• Scheduled pickup/delivery</div>
                      <div>• Add special instructions</div>
                    </div>
                  </div>

                  {/* 1 Person - Toast Online (or phone backup) */}
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-600 rounded-lg p-4">
                    <div className="text-center mb-3">
                      <div className="text-2xl font-bold text-white mb-1">1 Person</div>
                      <div className="text-sm text-gray-400">Individual order</div>
                    </div>
                    <div className="bg-gray-700/30 rounded p-3 border border-gray-600 mb-3">
                      <div className="font-semibold text-gray-300 mb-2">→ Toast Online Ordering</div>
                      <div className="text-xs text-gray-300">Or phone if urgently needed</div>
                    </div>
                    <div className="text-xs text-gray-400 space-y-1">
                      <div><span className="text-gray-400 font-semibold">Benefits:</span></div>
                      <div>• No wait on hold</div>
                      <div>• Order history saved</div>
                      <div>• Loyalty points tracked</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Staff Phone Script */}
          <div className="bg-blue-900/10 border-l-4 border-blue-500 rounded p-6">
            <h4 className="text-lg font-semibold text-white mb-4">Staff Phone Redirect Script</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-blue-300 mb-3">For Group Orders (10+ people)</h5>
                <div className="bg-gray-800 rounded p-4 text-sm text-gray-300 border border-gray-700">
                  <p className="italic border-l-2 border-blue-500 pl-3">
                    "For team orders, we have a much easier system! I can text you a link where everyone on your team
                    can add their own order. It takes 2 minutes to set up, and you won't have to collect everyone's
                    orders yourself. What's the best number to text you at?"
                  </p>
                </div>
                <div className="mt-3 text-xs text-gray-400">
                  <span className="text-blue-300 font-semibold">Expected Outcome:</span> 80% will accept digital option
                </div>
              </div>
              <div>
                <h5 className="font-semibold text-blue-300 mb-3">For Individual/Small Orders</h5>
                <div className="bg-gray-800 rounded p-4 text-sm text-gray-300 border border-gray-700">
                  <p className="italic border-l-2 border-blue-500 pl-3">
                    "I'm happy to take your order! Just so you know, our website is usually faster—you can see photos
                    of everything, customize items, and schedule pickup. Would you like me to text you the link, or
                    should I take your order now?"
                  </p>
                </div>
                <div className="mt-3 text-xs text-gray-400">
                  <span className="text-blue-300 font-semibold">Expected Outcome:</span> 50-60% will switch to online
                </div>
              </div>
            </div>
          </div>

          {/* Benefits of Digital-First */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h4 className="text-lg font-semibold text-white mb-4">Why Digital-First Matters</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-gray-900 rounded p-4 border border-gray-700">
                <div className="font-semibold text-green-300 mb-2">⏱️ Staff Time Savings</div>
                <div className="text-gray-300 mb-2">
                  Average phone order: <span className="text-white font-semibold">8 minutes</span>
                </div>
                <div className="text-gray-300 mb-2">
                  Average online order review: <span className="text-white font-semibold">30 seconds</span>
                </div>
                <div className="text-green-400 font-semibold">16x efficiency gain</div>
              </div>
              <div className="bg-gray-900 rounded p-4 border border-gray-700">
                <div className="font-semibold text-blue-300 mb-2">🎯 Order Accuracy</div>
                <div className="text-gray-300 mb-2">
                  Phone order error rate: <span className="text-white font-semibold">15-20%</span>
                </div>
                <div className="text-gray-300 mb-2">
                  Online order error rate: <span className="text-white font-semibold">&lt;2%</span>
                </div>
                <div className="text-blue-400 font-semibold">10x accuracy improvement</div>
              </div>
              <div className="bg-gray-900 rounded p-4 border border-gray-700">
                <div className="font-semibold text-purple-300 mb-2">💰 Revenue Impact</div>
                <div className="text-gray-300 mb-2">
                  Average phone order: <span className="text-white font-semibold">$42</span>
                </div>
                <div className="text-gray-300 mb-2">
                  Average online order: <span className="text-white font-semibold">$58</span>
                </div>
                <div className="text-purple-400 font-semibold">38% higher ticket</div>
              </div>
            </div>
          </div>
        </div>
      </ExpandableSection>

      {/* 4.3 Delivery Decision Matrix */}
      <ExpandableSection
        sectionNumber="4.3"
        title="In-House Delivery Decision Matrix"
        icon="🚗"
        executiveSummary={
          <>
            <strong className="text-white">Use DoorDash Drive API for corporate deliveries</strong> (on-demand driver
            booking, no DoorDash branding). Only consider in-house driver if: 5+ corporate orders/day within 2-mile
            radius. <strong className="text-white">Cost analysis: DoorDash Drive $8-12/delivery vs. in-house driver
            $25/hour + vehicle costs</strong>. Start with DoorDash Drive, evaluate in 90 days.
          </>
        }
      >
        <div className="space-y-6">
          {/* Decision Matrix */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Should You Hire a Driver? Decision Matrix</h4>
            <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-900 border-b border-gray-700">
                    <th className="text-left p-3 text-gray-400 font-semibold">Factor</th>
                    <th className="text-left p-3 text-gray-400 font-semibold">DoorDash Drive API</th>
                    <th className="text-left p-3 text-gray-400 font-semibold">In-House Driver</th>
                    <th className="text-left p-3 text-gray-400 font-semibold">Winner</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  <tr>
                    <td className="p-3 font-semibold text-white">Cost Per Delivery</td>
                    <td className="p-3 text-gray-300">$8-12 (variable)</td>
                    <td className="p-3 text-gray-300">$15-20 (includes hourly wage, mileage, insurance)</td>
                    <td className="p-3">
                      <span className="px-3 py-1 bg-green-900/30 border border-green-700 rounded text-green-300 font-semibold">
                        DoorDash
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white">Flexibility</td>
                    <td className="p-3 text-gray-300">On-demand, only pay when needed</td>
                    <td className="p-3 text-gray-300">Fixed cost even during slow periods</td>
                    <td className="p-3">
                      <span className="px-3 py-1 bg-green-900/30 border border-green-700 rounded text-green-300 font-semibold">
                        DoorDash
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white">Branding</td>
                    <td className="p-3 text-gray-300">No DoorDash branding (white-label)</td>
                    <td className="p-3 text-gray-300">Full Ami Sushi branding</td>
                    <td className="p-3">
                      <span className="px-3 py-1 bg-yellow-900/30 border border-yellow-700 rounded text-yellow-300 font-semibold">
                        Tie
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white">Reliability</td>
                    <td className="p-3 text-gray-300">98% on-time rate (per DoorDash data)</td>
                    <td className="p-3 text-gray-300">Depends on driver quality, no backup if sick</td>
                    <td className="p-3">
                      <span className="px-3 py-1 bg-green-900/30 border border-green-700 rounded text-green-300 font-semibold">
                        DoorDash
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white">Setup Time</td>
                    <td className="p-3 text-gray-300">2 hours (API integration)</td>
                    <td className="p-3 text-gray-300">2-3 weeks (hiring, training, insurance)</td>
                    <td className="p-3">
                      <span className="px-3 py-1 bg-green-900/30 border border-green-700 rounded text-green-300 font-semibold">
                        DoorDash
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white">Insurance Liability</td>
                    <td className="p-3 text-gray-300">Covered by DoorDash</td>
                    <td className="p-3 text-gray-300">Restaurant liability, additional insurance required</td>
                    <td className="p-3">
                      <span className="px-3 py-1 bg-green-900/30 border border-green-700 rounded text-green-300 font-semibold">
                        DoorDash
                      </span>
                    </td>
                  </tr>
                  <tr className="bg-green-900/10">
                    <td className="p-3 font-semibold text-white">Break-Even Point</td>
                    <td className="p-3 text-white font-semibold" colSpan={3}>
                      In-house driver only makes sense at 15+ deliveries/day (5 days/week)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* DoorDash Drive API Setup */}
          <div className="bg-blue-900/10 border-l-4 border-blue-500 rounded p-6">
            <h4 className="text-lg font-semibold text-white mb-4">DoorDash Drive API Setup</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-blue-300 mb-3">What Is DoorDash Drive?</h5>
                <div className="text-sm text-gray-300 space-y-2">
                  <p>
                    DoorDash Drive is the <strong className="text-white">white-label delivery API</strong> that lets
                    you book DoorDash drivers for your own orders without DoorDash branding.
                  </p>
                  <p>
                    <span className="text-blue-300 font-semibold">Key difference:</span> Customer orders through YOUR
                    website/Toast, not DoorDash marketplace. Driver shows up in plain clothes, no DoorDash bag.
                  </p>
                </div>
              </div>
              <div>
                <h5 className="font-semibold text-blue-300 mb-3">Setup Steps</h5>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500">☐</span>
                    <span>Apply for DoorDash Drive API access (doordash.com/drive)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500">☐</span>
                    <span>Integrate with Toast (or use DoorDash dashboard)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500">☐</span>
                    <span>Set delivery radius (recommend 5 miles max)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500">☐</span>
                    <span>Test order to verify driver pickup process</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 90-Day Evaluation Criteria */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h4 className="text-lg font-semibold text-white mb-4">90-Day Evaluation: When to Switch to In-House Driver</h4>
            <div className="space-y-4">
              <div className="text-sm text-gray-300">
                <span className="font-semibold text-white">Start with DoorDash Drive.</span> After 90 days, evaluate
                these metrics to decide if in-house driver makes sense:
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="bg-gray-900 rounded p-4 border border-green-700">
                  <div className="font-semibold text-green-300 mb-2">✅ Consider In-House Driver IF:</div>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">•</span>
                      <span>Averaging 15+ deliveries/day (5 days/week)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">•</span>
                      <span>80%+ deliveries within 2-mile radius</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">•</span>
                      <span>Corporate clients requesting branded delivery</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">•</span>
                      <span>Monthly DoorDash Drive costs exceed $2,500</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-900 rounded p-4 border border-red-700">
                  <div className="font-semibold text-red-300 mb-2">❌ Stick with DoorDash Drive IF:</div>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">•</span>
                      <span>Averaging &lt;10 deliveries/day</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">•</span>
                      <span>Deliveries spread across 5+ mile radius</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">•</span>
                      <span>Delivery demand is inconsistent (spiky)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">•</span>
                      <span>No reliable driver candidates available</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ExpandableSection>
    </section>
  );
}
