import { ExpandableSection } from './ExpandableSection';

export function ResourcesSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-8">
      <div className="flex items-center gap-3 mb-8">
        <span className="text-4xl">📚</span>
        <div>
          <h2 className="text-3xl font-bold text-white">Section 6: Resources & Templates</h2>
          <p className="text-gray-400 mt-1">Ready-to-use assets for immediate implementation</p>
        </div>
      </div>

      {/* 6.1 Toast Setup Guides */}
      <ExpandableSection
        sectionNumber="6.1"
        title="Toast Setup Guides"
        icon="🔧"
        executiveSummary={
          <>
            Step-by-step configuration guides for <strong className="text-white">Toast Loyalty Program</strong> (15 minutes),
            <strong className="text-white"> Toast Group Ordering</strong> (10 minutes), and <strong className="text-white">
            Customer-Facing Display</strong> (5 minutes). Includes screenshots and troubleshooting tips.
          </>
        }
      >
        <div className="space-y-6">
          {/* Toast Loyalty Setup */}
          <div className="bg-blue-900/10 border-l-4 border-blue-500 rounded p-6">
            <h4 className="text-lg font-semibold text-white mb-4">Toast Loyalty Program Setup (15 minutes)</h4>
            <div className="space-y-4">
              <div className="space-y-3">
                {[
                  {
                    step: 1,
                    action: 'Log into Toast Dashboard',
                    details: 'Visit toasttab.com → Login with admin credentials'
                  },
                  {
                    step: 2,
                    action: 'Navigate to Loyalty',
                    details: 'Left sidebar → "Marketing & Loyalty" → "Loyalty Program"'
                  },
                  {
                    step: 3,
                    action: 'Click "Enable Loyalty"',
                    details: 'Green button at top right of screen'
                  },
                  {
                    step: 4,
                    action: 'Configure Earning Rules',
                    details: 'Set: $1 spent = 1 point earned (default is fine)'
                  },
                  {
                    step: 5,
                    action: 'Configure Redemption Rules',
                    details: 'Set: 100 points = $10 reward (10% return rate)'
                  },
                  {
                    step: 6,
                    action: 'Set Signup Bonus',
                    details: 'Enable signup bonus: 50 points (or 100 if aggressive)'
                  },
                  {
                    step: 7,
                    action: 'Enable Customer Lookup',
                    details: 'Turn ON "Phone number lookup at POS"'
                  },
                  {
                    step: 8,
                    action: 'Save & Test',
                    details: 'Save settings, enroll test customer with your phone number'
                  }
                ].map((item) => (
                  <div key={item.step} className="flex gap-3 bg-gray-800 rounded p-4 border border-gray-700">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-white mb-1">{item.action}</div>
                      <div className="text-sm text-gray-400">{item.details}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-yellow-900/20 border border-yellow-700 rounded p-4 text-sm">
                <div className="font-semibold text-yellow-300 mb-2">⚠️ Common Issues</div>
                <ul className="space-y-1 text-gray-300 text-xs">
                  <li><strong>Issue:</strong> "Loyalty not available" → Check if your Toast plan includes Loyalty (may need upgrade)</li>
                  <li><strong>Issue:</strong> Customer can't redeem points → Ensure minimum redemption is set to 100 points (not higher)</li>
                  <li><strong>Issue:</strong> Points not appearing → Check that loyalty card was added to transaction before payment</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Toast Group Ordering Setup */}
          <div className="bg-green-900/10 border-l-4 border-green-500 rounded p-6">
            <h4 className="text-lg font-semibold text-white mb-4">Toast Group Ordering Setup (10 minutes)</h4>
            <div className="space-y-4">
              <div className="space-y-3">
                {[
                  {
                    step: 1,
                    action: 'Navigate to Online Ordering',
                    details: 'Toast Dashboard → "Online Ordering" → "Settings"'
                  },
                  {
                    step: 2,
                    action: 'Enable Group Ordering',
                    details: 'Find "Group Ordering" toggle, turn ON'
                  },
                  {
                    step: 3,
                    action: 'Set Minimum Order',
                    details: 'Set to $100 (typically 10-15 people)'
                  },
                  {
                    step: 4,
                    action: 'Set Order Deadline',
                    details: 'Set to 2 hours before scheduled pickup/delivery time'
                  },
                  {
                    step: 5,
                    action: 'Enable Individual Labeling',
                    details: 'Turn ON "Print individual names on items" for easy distribution'
                  },
                  {
                    step: 6,
                    action: 'Add to Website',
                    details: 'Copy Group Ordering link, add prominent button to website homepage'
                  }
                ].map((item) => (
                  <div key={item.step} className="flex gap-3 bg-gray-800 rounded p-4 border border-gray-700">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-sm">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-white mb-1">{item.action}</div>
                      <div className="text-sm text-gray-400">{item.details}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-green-900/20 border border-green-700 rounded p-4 text-sm">
                <div className="font-semibold text-green-300 mb-2">✅ Test Your Setup</div>
                <div className="text-gray-300 text-xs space-y-1">
                  <div>1. Create a test group order with 2 friends/family members</div>
                  <div>2. Verify that all individual orders appear in Toast POS</div>
                  <div>3. Check that names are printed on item labels</div>
                  <div>4. Confirm single payment processes correctly</div>
                </div>
              </div>
            </div>
          </div>

          {/* Customer-Facing Display Setup */}
          <div className="bg-purple-900/10 border-l-4 border-purple-500 rounded p-6">
            <h4 className="text-lg font-semibold text-white mb-4">Customer-Facing Display Setup (5 minutes)</h4>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded p-4 border border-gray-700 text-sm text-gray-300">
                <div className="mb-3">
                  <strong className="text-white">Note:</strong> This requires Toast customer-facing display hardware.
                  If you don't have this hardware, skip this section and focus on staff-prompted enrollment.
                </div>
                <div className="space-y-3">
                  {[
                    {
                      step: 1,
                      action: 'Navigate to POS Settings',
                      details: 'Toast Dashboard → "POS" → "Customer-Facing Display"'
                    },
                    {
                      step: 2,
                      action: 'Enable Email Receipt Prompt',
                      details: 'Turn ON "Prompt for email on customer display"'
                    },
                    {
                      step: 3,
                      action: 'Enable Loyalty Prompt',
                      details: 'Turn ON "Show loyalty enrollment prompt"'
                    },
                    {
                      step: 4,
                      action: 'Test at POS',
                      details: 'Process test transaction, verify prompts appear on customer screen'
                    }
                  ].map((item) => (
                    <div key={item.step} className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-xs">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-white text-sm mb-1">{item.action}</div>
                        <div className="text-xs text-gray-400">{item.details}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </ExpandableSection>

      {/* 6.2 Staff Training Scripts */}
      <ExpandableSection
        sectionNumber="6.2"
        title="Staff Training Scripts"
        icon="💬"
        executiveSummary={
          <>
            Word-for-word scripts for <strong className="text-white">loyalty enrollment</strong> ("It's free, and I can
            sign you up right now"), <strong className="text-white">phone redirect</strong> ("For faster service, visit
            our website"), and <strong className="text-white">event promotion</strong> ("We have Trivia Night this Tuesday").
            Print and laminate for staff reference.
          </>
        }
      >
        <div className="space-y-6">
          {/* Loyalty Enrollment Script */}
          <div className="bg-gradient-to-r from-blue-900/20 to-blue-800/10 border-2 border-blue-500 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">💳</span>
              <h4 className="text-xl font-bold text-white">Loyalty Enrollment Script</h4>
            </div>
            <div className="space-y-4">
              <div>
                <div className="text-sm font-semibold text-blue-300 mb-2">WHEN TO USE:</div>
                <div className="text-sm text-gray-300">At checkout, before payment, for ANY customer not already enrolled</div>
              </div>
              <div className="bg-gray-800 rounded p-5 border-2 border-blue-600">
                <div className="text-sm font-semibold text-blue-300 mb-3">THE SCRIPT:</div>
                <div className="space-y-3 text-gray-300 text-base leading-relaxed">
                  <p className="italic border-l-4 border-blue-500 pl-4">
                    "Have you joined our loyalty program? <strong className="text-white">It's free, and I can sign you up right now.</strong> You'll
                    get <strong className="text-white">$5 credit just for joining</strong>, plus points on every visit. I just need your email and phone number."
                  </p>
                  <div className="text-sm text-gray-400 pt-2 border-t border-gray-700">
                    <strong>If customer says YES:</strong> "Great! What's your phone number? [Look up in Toast, apply points]"
                  </div>
                  <div className="text-sm text-gray-400">
                    <strong>If customer says NO:</strong> "No problem! If you change your mind, just ask next time. Your total is $XX."
                  </div>
                </div>
              </div>
              <div className="bg-blue-900/20 rounded p-4 text-sm">
                <div className="font-semibold text-blue-300 mb-2">🎯 Pro Tips:</div>
                <ul className="space-y-1 text-gray-300 text-xs">
                  <li>• <strong>Emphasize "free"</strong> and "$5 credit" first—these are the strongest selling points</li>
                  <li>• <strong>Say "I can sign you up right now"</strong>—removes friction, shows it's easy</li>
                  <li>• <strong>Don't say "Do you want to..."</strong>—makes it easier to say no. Instead state as fact: "You'll get $5..."</li>
                  <li>• <strong>Practice until it feels natural</strong>—the more confident you sound, the higher enrollment rate</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Phone Redirect Script */}
          <div className="bg-gradient-to-r from-green-900/20 to-green-800/10 border-2 border-green-500 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">📱</span>
              <h4 className="text-xl font-bold text-white">Phone Order Redirect Script</h4>
            </div>
            <div className="space-y-4">
              <div>
                <div className="text-sm font-semibold text-green-300 mb-2">WHEN TO USE:</div>
                <div className="text-sm text-gray-300">When customer calls to place an order (especially group orders)</div>
              </div>
              <div className="bg-gray-800 rounded p-5 border-2 border-green-600">
                <div className="text-sm font-semibold text-green-300 mb-3">THE SCRIPT (for group orders 10+ people):</div>
                <div className="space-y-3 text-gray-300 text-base leading-relaxed">
                  <p className="italic border-l-4 border-green-500 pl-4">
                    "For team orders, we have a much easier system! <strong className="text-white">I can text you a link where everyone on your team
                    can add their own order.</strong> It takes 2 minutes to set up, and <strong className="text-white">you won't have to collect everyone's
                    orders yourself.</strong> What's the best number to text you at?"
                  </p>
                  <div className="text-sm text-gray-400 pt-2 border-t border-gray-700">
                    <strong>Expected outcome:</strong> 80% will accept. Text them the Group Ordering link immediately.
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 rounded p-5 border-2 border-green-600 mt-4">
                <div className="text-sm font-semibold text-green-300 mb-3">THE SCRIPT (for individual/small orders):</div>
                <div className="space-y-3 text-gray-300 text-base leading-relaxed">
                  <p className="italic border-l-4 border-green-500 pl-4">
                    "I'm happy to take your order! Just so you know, <strong className="text-white">our website is usually faster</strong>—you can see photos
                    of everything, customize items, and schedule pickup. Would you like me to text you the link, or should I take your order now?"
                  </p>
                  <div className="text-sm text-gray-400 pt-2 border-t border-gray-700">
                    <strong>Expected outcome:</strong> 50-60% will switch to online. If they decline, take order cheerfully.
                  </div>
                </div>
              </div>
              <div className="bg-green-900/20 rounded p-4 text-sm">
                <div className="font-semibold text-green-300 mb-2">🎯 Pro Tips:</div>
                <ul className="space-y-1 text-gray-300 text-xs">
                  <li>• <strong>Never sound annoyed</strong>—you're offering to help, not rejecting their call</li>
                  <li>• <strong>Emphasize time savings</strong>—"easier," "faster," "you won't have to collect orders"</li>
                  <li>• <strong>Always offer to take order if they prefer</strong>—customer choice is key</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Event Promotion Script */}
          <div className="bg-gradient-to-r from-purple-900/20 to-purple-800/10 border-2 border-purple-500 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🎤</span>
              <h4 className="text-xl font-bold text-white">Event Promotion Script</h4>
            </div>
            <div className="space-y-4">
              <div>
                <div className="text-sm font-semibold text-purple-300 mb-2">WHEN TO USE:</div>
                <div className="text-sm text-gray-300">When seating customers or during checkout (3-7 days before event)</div>
              </div>
              <div className="bg-gray-800 rounded p-5 border-2 border-purple-600">
                <div className="text-sm font-semibold text-purple-300 mb-3">THE SCRIPT:</div>
                <div className="space-y-3 text-gray-300 text-base leading-relaxed">
                  <p className="italic border-l-4 border-purple-500 pl-4">
                    "By the way, <strong className="text-white">we have Trivia Night this Tuesday at 7pm</strong>. It's always a fun crowd, and we have
                    prizes for the winning team. <strong className="text-white">No reservations needed</strong>, just show up! Can I give you one of our
                    event cards?"
                  </p>
                  <div className="text-sm text-gray-400 pt-2 border-t border-gray-700">
                    <strong>Variations:</strong>
                  </div>
                  <div className="text-sm space-y-2">
                    <div className="border-l-2 border-purple-500 pl-3">
                      <div className="text-purple-300 font-semibold">For Karaoke:</div>
                      <div className="text-gray-400 italic">"We have Karaoke on Thursday at 8pm. It gets pretty lively—even if you don't sing, it's
                      a great show!"</div>
                    </div>
                    <div className="border-l-2 border-purple-500 pl-3">
                      <div className="text-purple-300 font-semibold">For Theme Nights:</div>
                      <div className="text-gray-400 italic">"This Friday is our 'Winter Warmth' theme night—we're featuring a special Hot Sake Old
                      Fashioned. It's worth coming back for!"</div>
                    </div>
                    <div className="border-l-2 border-purple-500 pl-3">
                      <div className="text-purple-300 font-semibold">For Music Events:</div>
                      <div className="text-gray-400 italic">"We have live music on Saturday from 7-10pm. It's a great vibe—perfect for date night or
                      hanging with friends."</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-purple-900/20 rounded p-4 text-sm">
                <div className="font-semibold text-purple-300 mb-2">🎯 Pro Tips:</div>
                <ul className="space-y-1 text-gray-300 text-xs">
                  <li>• <strong>Mention "no reservations needed"</strong>—removes barrier to entry</li>
                  <li>• <strong>Use social proof</strong>—"always a fun crowd," "gets pretty lively"</li>
                  <li>• <strong>Keep it brief</strong>—10 seconds max, don't oversell</li>
                  <li>• <strong>Hand them a physical card/QR code</strong>—they'll likely forget otherwise</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </ExpandableSection>

      {/* 6.3 Email Templates */}
      <ExpandableSection
        sectionNumber="6.3"
        title="Email Template Library"
        icon="📧"
        executiveSummary={
          <>
            5 ready-to-use email templates: <strong className="text-white">Monthly event preview</strong> (general list),
            <strong className="text-white"> Event reminder</strong> (attendees only), <strong className="text-white">Reactivation
            offer</strong> (30-60 days lapsed), <strong className="text-white">VIP exclusive</strong> (10+ visits), and
            <strong className="text-white"> New loyalty member welcome</strong>. Copy, paste, customize for your brand.
          </>
        }
      >
        <div className="space-y-6">
          {/* Template 1: Monthly Event Preview */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
            <div className="bg-blue-900/30 px-6 py-4 border-b border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📅</span>
                  <h5 className="text-lg font-bold text-white">Template 1: Monthly Event Preview</h5>
                </div>
                <span className="text-xs px-3 py-1 bg-blue-900 border border-blue-700 rounded text-blue-300">
                  Send to: General List (1x/month)
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4 text-sm">
                <div>
                  <div className="font-semibold text-gray-400 mb-2">SUBJECT LINE:</div>
                  <div className="bg-gray-900 rounded p-3 border border-gray-700 text-white font-mono">
                    This Month at Ami: Trivia, Karaoke & Winter Warmth Fridays
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-gray-400 mb-2">EMAIL BODY:</div>
                  <div className="bg-gray-900 rounded p-4 border border-gray-700 text-gray-300 space-y-3">
                    <div>
                      <strong className="text-white">[Customer First Name],</strong>
                    </div>
                    <div>
                      We're kicking off a new tradition at Ami Sushi: <strong className="text-white">weekly events designed to bring
                      our community together.</strong> Here's what's happening this month:
                    </div>
                    <div className="bg-black/30 rounded p-4 border-l-4 border-blue-500">
                      <div className="space-y-2">
                        <div><strong className="text-white">🎯 Trivia Nights</strong> – Every other Tuesday at 7pm</div>
                        <div><strong className="text-white">🎤 Karaoke Thursdays</strong> – Every other Thursday at 8pm</div>
                        <div><strong className="text-white">🍸 Winter Warmth Fridays</strong> – Hot Sake Old Fashioned + seasonal menu</div>
                        <div><strong className="text-white">🎵 Sushi & Sounds</strong> – Live music every other Saturday, 7-10pm</div>
                      </div>
                    </div>
                    <div>
                      <strong className="text-white">No reservations needed—just show up!</strong> See the full calendar at [LINK]
                    </div>
                    <div>
                      See you soon,<br />
                      The Ami Sushi Team
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Template 2: Event Reminder (3 days before) */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
            <div className="bg-green-900/30 px-6 py-4 border-b border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🎤</span>
                  <h5 className="text-lg font-bold text-white">Template 2: Event Reminder (3 Days Before)</h5>
                </div>
                <span className="text-xs px-3 py-1 bg-green-900 border border-green-700 rounded text-green-300">
                  Send to: Event Attendees Only
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4 text-sm">
                <div>
                  <div className="font-semibold text-gray-400 mb-2">SUBJECT LINE:</div>
                  <div className="bg-gray-900 rounded p-3 border border-gray-700 text-white font-mono">
                    Trivia Night This Tuesday! What to Expect
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-gray-400 mb-2">EMAIL BODY:</div>
                  <div className="bg-gray-900 rounded p-4 border border-gray-700 text-gray-300 space-y-3">
                    <div>
                      <strong className="text-white">[Customer First Name],</strong>
                    </div>
                    <div>
                      <strong className="text-white">Trivia Night is this Tuesday at 7pm!</strong> Here's what to know:
                    </div>
                    <div className="bg-black/30 rounded p-4 border-l-4 border-green-500 space-y-2">
                      <div><strong className="text-white">🕖 When:</strong> Tuesday, [DATE] at 7:00pm (doors open at 6:30pm)</div>
                      <div><strong className="text-white">📍 Where:</strong> Ami Sushi, 538 Springfield Ave, Berkeley Heights</div>
                      <div><strong className="text-white">🎯 Format:</strong> 5 rounds, 10 questions each, prizes for top 3 teams</div>
                      <div><strong className="text-white">👥 Teams:</strong> 2-6 people (we'll help you find a team if you come solo!)</div>
                      <div><strong className="text-white">🎁 Prizes:</strong> $50 gift card (1st), $25 (2nd), $10 (3rd)</div>
                    </div>
                    <div>
                      <strong className="text-white">Pro tip:</strong> Arrive by 6:45pm to grab a good table and order food before trivia starts!
                    </div>
                    <div>
                      See you Tuesday,<br />
                      The Ami Sushi Team
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Template 3: Reactivation Offer */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
            <div className="bg-purple-900/30 px-6 py-4 border-b border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🎁</span>
                  <h5 className="text-lg font-bold text-white">Template 3: Reactivation Offer (30-60 Days Lapsed)</h5>
                </div>
                <span className="text-xs px-3 py-1 bg-purple-900 border border-purple-700 rounded text-purple-300">
                  Send to: At-Risk Customers
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4 text-sm">
                <div>
                  <div className="font-semibold text-gray-400 mb-2">SUBJECT LINE:</div>
                  <div className="bg-gray-900 rounded p-3 border border-gray-700 text-white font-mono">
                    We Miss You! Here's $10 Off Your Next Visit
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-gray-400 mb-2">EMAIL BODY:</div>
                  <div className="bg-gray-900 rounded p-4 border border-gray-700 text-gray-300 space-y-3">
                    <div>
                      <strong className="text-white">[Customer First Name],</strong>
                    </div>
                    <div>
                      It's been a little while since we've seen you! We'd love to welcome you back with <strong className="text-white">
                      $10 off your next order of $50 or more.</strong>
                    </div>
                    <div className="bg-black/30 rounded p-4 border-l-4 border-purple-500 text-center">
                      <div className="text-2xl font-bold text-white mb-2">$10 OFF $50</div>
                      <div className="text-lg text-purple-300 font-mono bg-black/50 inline-block px-4 py-2 rounded">
                        AMI10BACK
                      </div>
                      <div className="text-xs text-gray-400 mt-2">Valid through [DATE - 14 days from send]</div>
                    </div>
                    <div>
                      <strong className="text-white">What's new:</strong> We're now hosting weekly Trivia Nights, Karaoke, and live music events.
                      Plus, our new Winter Warmth cocktail menu just launched!
                    </div>
                    <div>
                      <a href="[ORDER LINK]" className="inline-block px-6 py-3 bg-[#b22222] text-white font-semibold rounded">
                        Order Now & Use Your $10
                      </a>
                    </div>
                    <div>
                      Hope to see you soon,<br />
                      The Ami Sushi Team
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Template 4: VIP Exclusive */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
            <div className="bg-yellow-900/30 px-6 py-4 border-b border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">⭐</span>
                  <h5 className="text-lg font-bold text-white">Template 4: VIP Exclusive Offer</h5>
                </div>
                <span className="text-xs px-3 py-1 bg-yellow-900 border border-yellow-700 rounded text-yellow-300">
                  Send to: VIP Customers (10+ visits)
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4 text-sm">
                <div>
                  <div className="font-semibold text-gray-400 mb-2">SUBJECT LINE:</div>
                  <div className="bg-gray-900 rounded p-3 border border-gray-700 text-white font-mono">
                    VIP Preview: Chef's Table Experience (Limited Seats)
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-gray-400 mb-2">EMAIL BODY:</div>
                  <div className="bg-gray-900 rounded p-4 border border-gray-700 text-gray-300 space-y-3">
                    <div>
                      <strong className="text-white">[Customer First Name],</strong>
                    </div>
                    <div>
                      As one of our most loyal customers, <strong className="text-white">you're getting first access to our exclusive
                      Chef's Table experience</strong> before we announce it publicly.
                    </div>
                    <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/20 rounded p-5 border-2 border-yellow-600">
                      <div className="text-center space-y-3">
                        <div className="text-2xl font-bold text-white">🍣 Chef's Table Omakase</div>
                        <div className="text-yellow-300">8 seats only | $85 per person</div>
                        <div className="text-sm text-gray-300 space-y-1">
                          <div>10-course tasting menu crafted by Chef [NAME]</div>
                          <div>Sake pairing included</div>
                          <div>Behind-the-scenes kitchen experience</div>
                        </div>
                        <div className="text-white font-semibold">
                          📅 Saturday, [DATE] at 6:30pm
                        </div>
                      </div>
                    </div>
                    <div>
                      <strong className="text-white">VIP Early Access:</strong> Reserve your seat by [DATE - 48 hours from send] before
                      we open this to the general public.
                    </div>
                    <div>
                      <a href="[RESERVATION LINK]" className="inline-block px-6 py-3 bg-[#b22222] text-white font-semibold rounded">
                        Reserve Your Seat
                      </a>
                    </div>
                    <div className="text-xs text-gray-400">
                      Only 8 seats available. This is a one-time exclusive event for our VIP customers.
                    </div>
                    <div>
                      Thank you for being part of the Ami family,<br />
                      The Ami Sushi Team
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Template 5: New Loyalty Welcome */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
            <div className="bg-red-900/30 px-6 py-4 border-b border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🎉</span>
                  <h5 className="text-lg font-bold text-white">Template 5: New Loyalty Member Welcome</h5>
                </div>
                <span className="text-xs px-3 py-1 bg-red-900 border border-red-700 rounded text-red-300">
                  Send to: New Enrollments (automated)
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4 text-sm">
                <div>
                  <div className="font-semibold text-gray-400 mb-2">SUBJECT LINE:</div>
                  <div className="bg-gray-900 rounded p-3 border border-gray-700 text-white font-mono">
                    Welcome to Ami Rewards! Your $5 Credit is Ready
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-gray-400 mb-2">EMAIL BODY:</div>
                  <div className="bg-gray-900 rounded p-4 border border-gray-700 text-gray-300 space-y-3">
                    <div>
                      <strong className="text-white">Welcome, [Customer First Name]! 🎉</strong>
                    </div>
                    <div>
                      Thanks for joining <strong className="text-white">Ami Rewards</strong>. Your loyalty program is now active, and
                      <strong className="text-white"> your $5 signup credit is ready to use on your next visit!</strong>
                    </div>
                    <div className="bg-black/30 rounded p-4 border-l-4 border-[#b22222]">
                      <div className="space-y-2">
                        <div><strong className="text-white">How it works:</strong></div>
                        <div>💵 Earn 1 point for every $1 you spend</div>
                        <div>🎁 Redeem 100 points for $10 off</div>
                        <div>🎂 Get bonus points on your birthday</div>
                        <div>⭐ VIP perks at 10+ visits</div>
                      </div>
                    </div>
                    <div>
                      <strong className="text-white">Pro tip:</strong> Make sure to give your phone number at checkout so we can track your points!
                    </div>
                    <div>
                      <a href="[ORDER LINK]" className="inline-block px-6 py-3 bg-[#b22222] text-white font-semibold rounded">
                        Use Your $5 Credit Now
                      </a>
                    </div>
                    <div>
                      Excited to have you in the Ami family,<br />
                      The Ami Sushi Team
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ExpandableSection>

      {/* 6.4 Marketing Asset Design Templates */}
      <ExpandableSection
        sectionNumber="6.4"
        title="Marketing Asset Design Templates"
        icon="🎨"
        executiveSummary={
          <>
            Canva templates for <strong className="text-white">QR code table tents</strong> (loyalty signup + corporate ordering),
            <strong className="text-white"> DoorDash insert cards</strong> (3×5" community signup), <strong className="text-white">
            event graphics</strong> (Instagram/Facebook posts), and <strong className="text-white">email headers</strong>.
            All use Ami Sushi brand colors (#b22222, #120c0d).
          </>
        }
      >
        <div className="space-y-6">
          <div className="bg-yellow-900/10 border-l-4 border-yellow-500 rounded p-6">
            <h4 className="text-lg font-semibold text-white mb-4">Design Specifications</h4>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h5 className="font-semibold text-yellow-300 mb-3">Brand Colors</h5>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded bg-[#b22222] border border-gray-600"></div>
                    <div>
                      <div className="text-white font-semibold">#b22222</div>
                      <div className="text-xs text-gray-400">Primary (Red)</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded bg-[#120c0d] border border-gray-600"></div>
                    <div>
                      <div className="text-white font-semibold">#120c0d</div>
                      <div className="text-xs text-gray-400">Background (Dark)</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded bg-white border border-gray-600"></div>
                    <div>
                      <div className="text-white font-semibold">#ffffff</div>
                      <div className="text-xs text-gray-400">Text/Accents</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h5 className="font-semibold text-yellow-300 mb-3">Typography</h5>
                <div className="space-y-2 text-gray-300">
                  <div>
                    <div className="font-semibold text-white">Headings:</div>
                    <div className="text-sm">Cormorant Garamond (Bold, 700)</div>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Body Text:</div>
                    <div className="text-sm">EB Garamond (Regular, 400)</div>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Fallback:</div>
                    <div className="text-sm">Georgia, serif</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* QR Code Table Tent */}
            <div className="bg-gray-800 rounded-lg p-5 border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">📱</span>
                <h5 className="font-semibold text-white">QR Code Table Tent</h5>
              </div>
              <div className="space-y-3 text-sm text-gray-300">
                <div>
                  <span className="text-gray-400">Size:</span> 4" × 6" (folded tent style)
                </div>
                <div>
                  <span className="text-gray-400">Content Side 1:</span> "Join Ami Rewards" + QR to loyalty
                </div>
                <div>
                  <span className="text-gray-400">Content Side 2:</span> "Team Orders Made Easy" + QR to group ordering
                </div>
                <div>
                  <span className="text-gray-400">Quantity:</span> 50 units (one per table + extras)
                </div>
                <div>
                  <span className="text-gray-400">Printing:</span> VistaPrint or local printer, glossy cardstock
                </div>
                <div className="pt-2">
                  <a href="#" className="text-blue-400 hover:underline text-xs">→ Download Canva Template</a>
                </div>
              </div>
            </div>

            {/* DoorDash Insert Card */}
            <div className="bg-gray-800 rounded-lg p-5 border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">📦</span>
                <h5 className="font-semibold text-white">DoorDash Insert Card</h5>
              </div>
              <div className="space-y-3 text-sm text-gray-300">
                <div>
                  <span className="text-gray-400">Size:</span> 3" × 5" (postcard size)
                </div>
                <div>
                  <span className="text-gray-400">Content:</span> "Join Our VIP Events Community" + QR to signup form
                </div>
                <div>
                  <span className="text-gray-400">Offer:</span> List benefits (early event notifications, exclusive discounts)
                </div>
                <div>
                  <span className="text-gray-400">Quantity:</span> 500 units (3-month supply)
                </div>
                <div>
                  <span className="text-gray-400">Printing:</span> MOO.com or VistaPrint, standard cardstock
                </div>
                <div className="pt-2">
                  <a href="#" className="text-blue-400 hover:underline text-xs">→ Download Canva Template</a>
                </div>
              </div>
            </div>

            {/* Event Graphic Template */}
            <div className="bg-gray-800 rounded-lg p-5 border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🎤</span>
                <h5 className="font-semibold text-white">Event Social Graphics</h5>
              </div>
              <div className="space-y-3 text-sm text-gray-300">
                <div>
                  <span className="text-gray-400">Size:</span> 1080 × 1080px (Instagram square)
                </div>
                <div>
                  <span className="text-gray-400">Templates for:</span> Trivia, Karaoke, Theme Nights, Music Events
                </div>
                <div>
                  <span className="text-gray-400">Must include:</span> Event name, date/time, "No reservations needed"
                </div>
                <div>
                  <span className="text-gray-400">Style:</span> Dark background (#120c0d), red accent (#b22222), event icon
                </div>
                <div>
                  <span className="text-gray-400">Usage:</span> Instagram, Facebook, website banner
                </div>
                <div className="pt-2">
                  <a href="#" className="text-blue-400 hover:underline text-xs">→ Download Canva Templates (4 variants)</a>
                </div>
              </div>
            </div>

            {/* Email Header */}
            <div className="bg-gray-800 rounded-lg p-5 border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">📧</span>
                <h5 className="font-semibold text-white">Email Header Template</h5>
              </div>
              <div className="space-y-3 text-sm text-gray-300">
                <div>
                  <span className="text-gray-400">Size:</span> 600 × 200px (email header standard)
                </div>
                <div>
                  <span className="text-gray-400">Content:</span> Ami Sushi logo + tagline or event-specific header
                </div>
                <div>
                  <span className="text-gray-400">Variants:</span> General, Event Announcement, VIP Exclusive, Offers
                </div>
                <div>
                  <span className="text-gray-400">Format:</span> PNG or JPG, optimized for email (&lt;100KB)
                </div>
                <div>
                  <span className="text-gray-400">Usage:</span> Top of every Mailchimp email
                </div>
                <div className="pt-2">
                  <a href="#" className="text-blue-400 hover:underline text-xs">→ Download Email Header Templates (4 variants)</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h5 className="font-semibold text-white mb-4">Design Tools & Resources</h5>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-gray-900 rounded p-4">
                <div className="font-semibold text-blue-300 mb-2">Canva Pro</div>
                <div className="text-xs text-gray-300 mb-2">$13/month – All templates, QR code generator, brand kit</div>
                <div className="text-xs text-gray-400">✓ Best for: Non-designers, fast turnaround</div>
              </div>
              <div className="bg-gray-900 rounded p-4">
                <div className="font-semibold text-green-300 mb-2">Fiverr Designer</div>
                <div className="text-xs text-gray-300 mb-2">$25-75 per asset – Custom designs in 24-48 hours</div>
                <div className="text-xs text-gray-400">✓ Best for: One-time professional designs</div>
              </div>
              <div className="bg-gray-900 rounded p-4">
                <div className="font-semibold text-purple-300 mb-2">QR Code Generator</div>
                <div className="text-xs text-gray-300 mb-2">Free (qr-code-generator.com) – High-res downloadable QR codes</div>
                <div className="text-xs text-gray-400">✓ Best for: Creating trackable QR codes</div>
              </div>
            </div>
          </div>
        </div>
      </ExpandableSection>
    </section>
  );
}
