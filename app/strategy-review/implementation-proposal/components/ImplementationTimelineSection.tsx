import { ExpandableSection } from './ExpandableSection';

export function ImplementationTimelineSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-8">
      <div className="flex items-center gap-3 mb-8">
        <span className="text-4xl">⏱️</span>
        <div>
          <h2 className="text-3xl font-bold text-white">Section 5: 30-Day Implementation Timeline</h2>
          <p className="text-gray-400 mt-1">Phased rollout with measurable milestones</p>
        </div>
      </div>

      {/* 5.1 Week-by-Week Roadmap */}
      <ExpandableSection
        sectionNumber="5.1"
        title="Week-by-Week Launch Roadmap"
        icon="📅"
        badge="high-priority"
        executiveSummary={
          <>
            <strong className="text-white">Week 1: Foundation</strong> (Toast Loyalty, Group Ordering, email list audit).
            <strong className="text-white"> Week 2: Marketing Assets</strong> (QR codes, event graphics, email templates).
            <strong className="text-white"> Week 3: Staff Training</strong> (loyalty enrollment, digital order redirect).
            <strong className="text-white"> Week 4: Launch & Measure</strong> (first event, first email, track metrics).
          </>
        }
      >
        <div className="space-y-6">
          {/* Week 1 */}
          <div className="bg-gradient-to-r from-blue-900/20 to-blue-800/10 border-2 border-blue-500 rounded-lg overflow-hidden">
            <div className="bg-blue-900/30 px-6 py-4 border-b border-blue-500">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Week 1: Foundation Setup</h3>
                  <p className="text-blue-300 text-sm">Core systems configuration (no marketing yet)</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-blue-300 mb-2">Toast Configuration</h4>
                  <div className="space-y-2 text-sm">
                    {[
                      { task: 'Enable Toast Loyalty Program', time: '30 min', details: 'Set earning rate: $1 = 1 point, redemption: 100 points = $10' },
                      { task: 'Configure signup bonus', time: '10 min', details: '50 points ($5 value) for new enrollments' },
                      { task: 'Enable Toast Group Ordering', time: '15 min', details: 'Min order $100, 2-hour deadline, individual labeling' },
                      { task: 'Set up Customer-Facing Display', time: '20 min', details: 'Enable email receipt prompt (if hardware available)' }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-gray-800 rounded p-3 border border-gray-700">
                        <div className="flex items-start justify-between mb-1">
                          <span className="text-gray-500 text-xs">☐</span>
                          <span className="text-white font-semibold flex-1 ml-2">{item.task}</span>
                          <span className="text-blue-400 text-xs">{item.time}</span>
                        </div>
                        <div className="text-xs text-gray-400 ml-5">{item.details}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-blue-300 mb-2">Email & Data</h4>
                  <div className="space-y-2 text-sm">
                    {[
                      { task: 'Export Toast customer data', time: '10 min', details: 'Name, email, phone, visits, spend, last visit date' },
                      { task: 'Create master Google Sheet', time: '30 min', details: 'Consolidate all email sources, apply segmentation' },
                      { task: 'Set up Mailchimp account', time: '20 min', details: 'Import contacts, create segments (Active/VIP/At Risk)' },
                      { task: 'Audit email list quality', time: '15 min', details: 'Remove duplicates, invalid emails' }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-gray-800 rounded p-3 border border-gray-700">
                        <div className="flex items-start justify-between mb-1">
                          <span className="text-gray-500 text-xs">☐</span>
                          <span className="text-white font-semibold flex-1 ml-2">{item.task}</span>
                          <span className="text-blue-400 text-xs">{item.time}</span>
                        </div>
                        <div className="text-xs text-gray-400 ml-5">{item.details}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-4 bg-blue-900/20 rounded p-4 border border-blue-700">
                <div className="font-semibold text-white mb-2">Week 1 Success Criteria:</div>
                <div className="text-sm text-gray-300">
                  ✓ Toast Loyalty live and accepting enrollments &nbsp;•&nbsp; ✓ Group Ordering page visible on website &nbsp;•&nbsp;
                  ✓ Email list cleaned and segmented in Mailchimp
                </div>
              </div>
            </div>
          </div>

          {/* Week 2 */}
          <div className="bg-gradient-to-r from-green-900/20 to-green-800/10 border-2 border-green-500 rounded-lg overflow-hidden">
            <div className="bg-green-900/30 px-6 py-4 border-b border-green-500">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Week 2: Marketing Assets</h3>
                  <p className="text-green-300 text-sm">Design & production (can outsource to Canva/Fiverr)</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-green-300 mb-2">Physical Materials</h4>
                  <div className="space-y-2 text-sm">
                    {[
                      { task: 'Design QR code table tents', time: '1 hour', details: 'Links to loyalty signup & corporate ordering' },
                      { task: 'Print table tents', time: '2 days', details: 'VistaPrint or local printer (50 units)' },
                      { task: 'Design DoorDash insert cards', time: '45 min', details: '3×5" card with QR to community signup' },
                      { task: 'Print insert cards', time: '2 days', details: '500 units for delivery orders' }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-gray-800 rounded p-3 border border-gray-700">
                        <div className="flex items-start justify-between mb-1">
                          <span className="text-gray-500 text-xs">☐</span>
                          <span className="text-white font-semibold flex-1 ml-2">{item.task}</span>
                          <span className="text-green-400 text-xs">{item.time}</span>
                        </div>
                        <div className="text-xs text-gray-400 ml-5">{item.details}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-green-300 mb-2">Digital Assets</h4>
                  <div className="space-y-2 text-sm">
                    {[
                      { task: 'Create event graphics templates', time: '2 hours', details: 'Trivia, Karaoke, Theme Nights (Canva Pro)' },
                      { task: 'Design email templates', time: '1.5 hours', details: '3 templates: Event invite, Offer, Monthly preview' },
                      { task: 'Write email copy library', time: '1 hour', details: 'Subject lines + body copy for 5 scenarios' },
                      { task: 'Create social media templates', time: '1 hour', details: 'Instagram/Facebook post templates' }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-gray-800 rounded p-3 border border-gray-700">
                        <div className="flex items-start justify-between mb-1">
                          <span className="text-gray-500 text-xs">☐</span>
                          <span className="text-white font-semibold flex-1 ml-2">{item.task}</span>
                          <span className="text-green-400 text-xs">{item.time}</span>
                        </div>
                        <div className="text-xs text-gray-400 ml-5">{item.details}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-4 bg-green-900/20 rounded p-4 border border-green-700">
                <div className="font-semibold text-white mb-2">Week 2 Success Criteria:</div>
                <div className="text-sm text-gray-300">
                  ✓ All physical materials printed and ready to deploy &nbsp;•&nbsp; ✓ Email templates loaded in Mailchimp &nbsp;•&nbsp;
                  ✓ Event graphics ready for first event
                </div>
              </div>
            </div>
          </div>

          {/* Week 3 */}
          <div className="bg-gradient-to-r from-purple-900/20 to-purple-800/10 border-2 border-purple-500 rounded-lg overflow-hidden">
            <div className="bg-purple-900/30 px-6 py-4 border-b border-purple-500">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Week 3: Staff Training & Soft Launch</h3>
                  <p className="text-purple-300 text-sm">Prepare team for new workflows</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-purple-300 mb-2">Training Sessions</h4>
                  <div className="space-y-2 text-sm">
                    {[
                      { task: 'Toast Loyalty enrollment training', time: '30 min', details: 'Role-play enrollment script, practice lookup by phone' },
                      { task: 'Phone redirect script training', time: '20 min', details: 'Practice redirecting to online ordering' },
                      { task: 'Group Ordering demo', time: '15 min', details: 'Show how link-sharing works, review consolidated order' },
                      { task: 'Event hosting guidelines', time: '25 min', details: 'Trivia/Karaoke setup, music event flow' }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-gray-800 rounded p-3 border border-gray-700">
                        <div className="flex items-start justify-between mb-1">
                          <span className="text-gray-500 text-xs">☐</span>
                          <span className="text-white font-semibold flex-1 ml-2">{item.task}</span>
                          <span className="text-purple-400 text-xs">{item.time}</span>
                        </div>
                        <div className="text-xs text-gray-400 ml-5">{item.details}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-purple-300 mb-2">Soft Launch Activities</h4>
                  <div className="space-y-2 text-sm">
                    {[
                      { task: 'Deploy QR code table tents', time: '15 min', details: 'Place on all tables + front counter' },
                      { task: 'Test loyalty enrollment', time: '30 min', details: 'Enroll 5 test customers, verify points appear' },
                      { task: 'Send test email to staff', time: '20 min', details: 'Review formatting, links, mobile rendering' },
                      { task: 'Schedule first event', time: '10 min', details: 'Book Trivia Night for Week 4 Tuesday' }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-gray-800 rounded p-3 border border-gray-700">
                        <div className="flex items-start justify-between mb-1">
                          <span className="text-gray-500 text-xs">☐</span>
                          <span className="text-white font-semibold flex-1 ml-2">{item.task}</span>
                          <span className="text-purple-400 text-xs">{item.time}</span>
                        </div>
                        <div className="text-xs text-gray-400 ml-5">{item.details}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-4 bg-purple-900/20 rounded p-4 border border-purple-700">
                <div className="font-semibold text-white mb-2">Week 3 Success Criteria:</div>
                <div className="text-sm text-gray-300">
                  ✓ All staff can enroll customers in loyalty program &nbsp;•&nbsp; ✓ Test email sent with zero errors &nbsp;•&nbsp;
                  ✓ First event scheduled and promoted
                </div>
              </div>
            </div>
          </div>

          {/* Week 4 */}
          <div className="bg-gradient-to-r from-red-900/20 to-red-800/10 border-2 border-[#b22222] rounded-lg overflow-hidden">
            <div className="bg-red-900/30 px-6 py-4 border-b border-[#b22222]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#b22222] text-white flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Week 4: Full Launch & Measurement</h3>
                  <p className="text-red-300 text-sm">Go live with all initiatives, track metrics</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-red-300 mb-2">Launch Activities</h4>
                  <div className="space-y-2 text-sm">
                    {[
                      { task: 'Send first email campaign', time: 'Launch day', details: 'Monthly event preview to general list' },
                      { task: 'Host first social event', time: 'Tuesday', details: 'Trivia Night - track attendance, signups' },
                      { task: 'Start loyalty enrollment push', time: 'All week', details: 'Target 20 enrollments in Week 4' },
                      { task: 'Deploy DoorDash inserts', time: 'All week', details: 'Include in every delivery order' }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-gray-800 rounded p-3 border border-gray-700">
                        <div className="flex items-start justify-between mb-1">
                          <span className="text-gray-500 text-xs">☐</span>
                          <span className="text-white font-semibold flex-1 ml-2">{item.task}</span>
                          <span className="text-red-400 text-xs">{item.time}</span>
                        </div>
                        <div className="text-xs text-gray-400 ml-5">{item.details}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-red-300 mb-2">Metrics to Track</h4>
                  <div className="space-y-2 text-sm">
                    {[
                      { metric: 'Email Open Rate', target: '25-35%', source: 'Mailchimp dashboard' },
                      { metric: 'Loyalty Enrollments', target: '20+ in Week 4', source: 'Toast Loyalty report' },
                      { metric: 'Event Attendance', target: '15-25 people', source: 'Manual count' },
                      { metric: 'Group Orders', target: '2-3 in Week 4', source: 'Toast orders report' }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-gray-800 rounded p-3 border border-gray-700">
                        <div className="flex items-start justify-between mb-1">
                          <span className="text-white font-semibold">{item.metric}</span>
                          <span className="text-green-400 text-xs font-semibold">{item.target}</span>
                        </div>
                        <div className="text-xs text-gray-400">Source: {item.source}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-4 bg-red-900/20 rounded p-4 border border-[#b22222]">
                <div className="font-semibold text-white mb-2">Week 4 Success Criteria:</div>
                <div className="text-sm text-gray-300">
                  ✓ First email sent with 25%+ open rate &nbsp;•&nbsp; ✓ First event completed with 15+ attendees &nbsp;•&nbsp;
                  ✓ 20+ loyalty enrollments &nbsp;•&nbsp; ✓ All metrics tracked in Google Sheet
                </div>
              </div>
            </div>
          </div>
        </div>
      </ExpandableSection>

      {/* 5.2 Success Metrics Dashboard */}
      <ExpandableSection
        sectionNumber="5.2"
        title="Success Metrics Dashboard"
        icon="📊"
        executiveSummary={
          <>
            Track 4 core metrics weekly: <strong className="text-white">Loyalty enrollment rate</strong> (target: 20% of transactions),
            <strong className="text-white"> Email performance</strong> (25%+ open rate), <strong className="text-white">Event attendance</strong>
            (15-25 people/event), <strong className="text-white">Corporate orders</strong> (3-5/week by Month 2). Review every Monday,
            adjust strategy if targets missed 2 weeks in a row.
          </>
        }
      >
        <div className="space-y-6">
          {/* KPI Dashboard */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">4 Core KPIs to Track</h4>
            <div className="grid md:grid-cols-2 gap-4">
              {/* Loyalty Enrollment */}
              <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 border-2 border-blue-500 rounded-lg p-5">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl">💳</span>
                  <div className="flex-1">
                    <h5 className="text-xl font-bold text-white mb-1">Loyalty Enrollment Rate</h5>
                    <div className="text-sm text-gray-400">% of transactions resulting in loyalty signup</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-gray-800 rounded p-3 border border-gray-700">
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="text-gray-400 text-sm">Target:</span>
                      <span className="text-white font-bold text-2xl">20%</span>
                    </div>
                    <div className="text-xs text-gray-400">By end of Month 2</div>
                  </div>
                  <div className="bg-gray-800 rounded p-3 border border-gray-700">
                    <div className="text-sm text-gray-400 mb-2">How to Calculate:</div>
                    <div className="text-xs text-gray-300 font-mono bg-black/30 p-2 rounded">
                      (New loyalty signups this week) ÷ (Total transactions) × 100
                    </div>
                  </div>
                  <div className="bg-gray-800 rounded p-3 border border-gray-700">
                    <div className="text-sm text-gray-400 mb-1">Data Source:</div>
                    <div className="text-xs text-gray-300">Toast Dashboard → Loyalty → Enrollments (weekly view)</div>
                  </div>
                </div>
              </div>

              {/* Email Performance */}
              <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 border-2 border-green-500 rounded-lg p-5">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl">📧</span>
                  <div className="flex-1">
                    <h5 className="text-xl font-bold text-white mb-1">Email Performance</h5>
                    <div className="text-sm text-gray-400">Open rate + redemption rate</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-gray-800 rounded p-3 border border-gray-700">
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="text-gray-400 text-sm">Open Rate Target:</span>
                      <span className="text-white font-bold text-2xl">25-35%</span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-gray-400 text-sm">Redemption Target:</span>
                      <span className="text-white font-bold text-xl">5-10%</span>
                    </div>
                  </div>
                  <div className="bg-gray-800 rounded p-3 border border-gray-700">
                    <div className="text-sm text-gray-400 mb-2">Red Flags:</div>
                    <div className="text-xs text-gray-300 space-y-1">
                      <div>🚨 Open rate &lt; 20%: Reduce frequency</div>
                      <div>🚨 Unsubscribe rate &gt; 0.5%: Audit content</div>
                    </div>
                  </div>
                  <div className="bg-gray-800 rounded p-3 border border-gray-700">
                    <div className="text-sm text-gray-400 mb-1">Data Source:</div>
                    <div className="text-xs text-gray-300">Mailchimp → Reports (per campaign)</div>
                  </div>
                </div>
              </div>

              {/* Event Attendance */}
              <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 border-2 border-purple-500 rounded-lg p-5">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl">🎤</span>
                  <div className="flex-1">
                    <h5 className="text-xl font-bold text-white mb-1">Event Attendance</h5>
                    <div className="text-sm text-gray-400">Average attendees per event</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-gray-800 rounded p-3 border border-gray-700">
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="text-gray-400 text-sm">Target:</span>
                      <span className="text-white font-bold text-2xl">15-25</span>
                    </div>
                    <div className="text-xs text-gray-400">Month 1 baseline, grow 10%/month</div>
                  </div>
                  <div className="bg-gray-800 rounded p-3 border border-gray-700">
                    <div className="text-sm text-gray-400 mb-2">What to Track:</div>
                    <div className="text-xs text-gray-300 space-y-1">
                      <div>• Unique attendees (not just tables)</div>
                      <div>• New vs. repeat attendees</div>
                      <div>• Avg spend per attendee</div>
                    </div>
                  </div>
                  <div className="bg-gray-800 rounded p-3 border border-gray-700">
                    <div className="text-sm text-gray-400 mb-1">Data Source:</div>
                    <div className="text-xs text-gray-300">Manual count + Toast sales for event time window</div>
                  </div>
                </div>
              </div>

              {/* Corporate Orders */}
              <div className="bg-gradient-to-br from-orange-900/20 to-orange-800/10 border-2 border-orange-500 rounded-lg p-5">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl">🏢</span>
                  <div className="flex-1">
                    <h5 className="text-xl font-bold text-white mb-1">Corporate Orders</h5>
                    <div className="text-sm text-gray-400">Group orders per week</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-gray-800 rounded p-3 border border-gray-700">
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="text-gray-400 text-sm">Target:</span>
                      <span className="text-white font-bold text-2xl">3-5/week</span>
                    </div>
                    <div className="text-xs text-gray-400">By end of Month 2</div>
                  </div>
                  <div className="bg-gray-800 rounded p-3 border border-gray-700">
                    <div className="text-sm text-gray-400 mb-2">Progressive Ramp:</div>
                    <div className="text-xs text-gray-300 space-y-1">
                      <div>Month 1: 1-2/week (seed customers)</div>
                      <div>Month 2: 3-5/week (steady state)</div>
                      <div>Month 3: 5-8/week (growth mode)</div>
                    </div>
                  </div>
                  <div className="bg-gray-800 rounded p-3 border border-gray-700">
                    <div className="text-sm text-gray-400 mb-1">Data Source:</div>
                    <div className="text-xs text-gray-300">Toast → Orders → Filter by "Group Order" tag</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Weekly Review Template */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h4 className="text-lg font-semibold text-white mb-4">Monday Morning Metrics Review (15 minutes)</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-blue-300 mb-3">Review Checklist</h5>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-start gap-2">
                    <span className="text-gray-500">☐</span>
                    <span>Pull last week's loyalty enrollments from Toast</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-gray-500">☐</span>
                    <span>Check last email campaign's open/click rates</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-gray-500">☐</span>
                    <span>Tally last week's event attendance</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-gray-500">☐</span>
                    <span>Count last week's group orders</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-gray-500">☐</span>
                    <span>Update master tracking Google Sheet</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-gray-500">☐</span>
                    <span>Identify any red flags (2 weeks below target)</span>
                  </div>
                </div>
              </div>
              <div>
                <h5 className="font-semibold text-red-300 mb-3">When to Adjust Strategy</h5>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="bg-red-900/20 border-l-2 border-red-500 rounded p-3">
                    <div className="font-semibold text-red-300 mb-1">If loyalty enrollment &lt; 10% for 2 weeks:</div>
                    <div className="text-xs">→ Increase signup bonus to 100 points ($10)</div>
                    <div className="text-xs">→ Add staff incentive: $5 per enrollment</div>
                  </div>
                  <div className="bg-red-900/20 border-l-2 border-red-500 rounded p-3">
                    <div className="font-semibold text-red-300 mb-1">If email open rate &lt; 20% for 2 weeks:</div>
                    <div className="text-xs">→ A/B test subject lines</div>
                    <div className="text-xs">→ Reduce frequency to every 10 days</div>
                  </div>
                  <div className="bg-red-900/20 border-l-2 border-red-500 rounded p-3">
                    <div className="font-semibold text-red-300 mb-1">If event attendance &lt; 10 for 2 events:</div>
                    <div className="text-xs">→ Add food/drink special during event</div>
                    <div className="text-xs">→ Promote 7 days in advance (not 3 days)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ExpandableSection>

      {/* 5.3 Critical Decision Checklist */}
      <ExpandableSection
        sectionNumber="5.3"
        title="Critical Decision Checklist"
        icon="✅"
        executiveSummary={
          <>
            Before launch, make 3 critical decisions: <strong className="text-white">1) Event frequency</strong> (start
            with alternating weeks, adjust based on staff capacity). <strong className="text-white">2) Loyalty signup
            bonus</strong> (50 or 100 points—test both). <strong className="text-white">3) Corporate delivery method</strong>
            (start with DoorDash Drive, evaluate in-house driver after 90 days).
          </>
        }
      >
        <div className="space-y-6">
          <div className="bg-yellow-900/10 border-l-4 border-yellow-500 rounded p-6">
            <h4 className="text-xl font-semibold text-white mb-4">3 Decisions You Must Make Before Launch</h4>
            <p className="text-gray-300 text-sm mb-6">
              These decisions will shape your entire strategy. Review options below, make a choice, and commit for at least
              60 days before changing course.
            </p>

            <div className="space-y-6">
              {/* Decision 1: Event Frequency */}
              <div className="bg-gray-800 rounded-lg p-5 border border-gray-700">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-yellow-600 text-white flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                  <div className="flex-1">
                    <h5 className="text-lg font-bold text-white mb-2">Event Frequency</h5>
                    <p className="text-sm text-gray-400">How many events per month should you run?</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-900 rounded p-4 border-2 border-green-700">
                    <div className="font-semibold text-green-300 mb-2">✅ RECOMMENDED: Alternating Weeks</div>
                    <div className="text-sm text-gray-300 mb-3">
                      2 "Active Weeks" per month with 3-4 events each (Tue/Thu/Fri/Sat). 2 "Focus Weeks" with no events.
                    </div>
                    <div className="text-xs text-gray-400 space-y-1">
                      <div><strong>Pros:</strong> Staff recovery time, prevents burnout, easier to staff</div>
                      <div><strong>Best for:</strong> Small teams (3-5 FOH staff)</div>
                    </div>
                  </div>
                  <div className="bg-gray-900 rounded p-4 border border-gray-600">
                    <div className="font-semibold text-gray-300 mb-2">Alternative: Weekly Consistency</div>
                    <div className="text-sm text-gray-300 mb-3">
                      Same events every week (Trivia every Tuesday, Music every Saturday, etc.)
                    </div>
                    <div className="text-xs text-gray-400 space-y-1">
                      <div><strong>Pros:</strong> Predictable schedule, easier to remember</div>
                      <div><strong>Cons:</strong> Higher staff burnout risk</div>
                      <div><strong>Best for:</strong> Larger teams (6+ FOH staff)</div>
                    </div>
                  </div>
                </div>
                <div className="bg-yellow-900/20 rounded p-3 text-xs text-gray-300">
                  <strong className="text-yellow-300">Decision:</strong> Start with alternating weeks. If you consistently
                  hit 25+ attendees and staff requests more events, switch to weekly in Month 3.
                </div>
              </div>

              {/* Decision 2: Loyalty Signup Bonus */}
              <div className="bg-gray-800 rounded-lg p-5 border border-gray-700">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-yellow-600 text-white flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                  <div className="flex-1">
                    <h5 className="text-lg font-bold text-white mb-2">Loyalty Signup Bonus Amount</h5>
                    <p className="text-sm text-gray-400">How much to incentivize new enrollments?</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-900 rounded p-4 border-2 border-green-700">
                    <div className="font-semibold text-green-300 mb-2">✅ RECOMMENDED: 50 Points ($5 value)</div>
                    <div className="text-sm text-gray-300 mb-3">
                      Customer gets $5 in loyalty credit immediately upon signup.
                    </div>
                    <div className="text-xs text-gray-400 space-y-1">
                      <div><strong>Pros:</strong> Lower cost, sustainable long-term</div>
                      <div><strong>Cons:</strong> May not be compelling enough</div>
                      <div><strong>Economics:</strong> Cost = $5 × 20 enrollments/week = $100/week</div>
                    </div>
                  </div>
                  <div className="bg-gray-900 rounded p-4 border border-gray-600">
                    <div className="font-semibold text-gray-300 mb-2">Alternative: 100 Points ($10 value)</div>
                    <div className="text-sm text-gray-300 mb-3">
                      Customer gets $10 in loyalty credit immediately upon signup.
                    </div>
                    <div className="text-xs text-gray-400 space-y-1">
                      <div><strong>Pros:</strong> More compelling, faster enrollment</div>
                      <div><strong>Cons:</strong> 2x cost</div>
                      <div><strong>Economics:</strong> Cost = $10 × 20 enrollments/week = $200/week</div>
                    </div>
                  </div>
                </div>
                <div className="bg-yellow-900/20 rounded p-3 text-xs text-gray-300">
                  <strong className="text-yellow-300">Decision:</strong> Start with 50 points. If enrollment rate &lt; 10%
                  after 3 weeks, increase to 100 points.
                </div>
              </div>

              {/* Decision 3: Corporate Delivery */}
              <div className="bg-gray-800 rounded-lg p-5 border border-gray-700">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-yellow-600 text-white flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                  <div className="flex-1">
                    <h5 className="text-lg font-bold text-white mb-2">Corporate Delivery Method</h5>
                    <p className="text-sm text-gray-400">In-house driver or DoorDash Drive API?</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-900 rounded p-4 border-2 border-green-700">
                    <div className="font-semibold text-green-300 mb-2">✅ RECOMMENDED: DoorDash Drive API</div>
                    <div className="text-sm text-gray-300 mb-3">
                      On-demand driver booking, no DoorDash branding, pay per delivery.
                    </div>
                    <div className="text-xs text-gray-400 space-y-1">
                      <div><strong>Pros:</strong> $8-12/delivery, flexible, instant setup</div>
                      <div><strong>Cons:</strong> Less control over driver quality</div>
                      <div><strong>Best for:</strong> &lt;15 deliveries/day</div>
                    </div>
                  </div>
                  <div className="bg-gray-900 rounded p-4 border border-gray-600">
                    <div className="font-semibold text-gray-300 mb-2">Alternative: In-House Driver</div>
                    <div className="text-sm text-gray-300 mb-3">
                      Hire part-time driver for lunch/dinner rush (4-6 hours/day).
                    </div>
                    <div className="text-xs text-gray-400 space-y-1">
                      <div><strong>Pros:</strong> Full branding, more reliable</div>
                      <div><strong>Cons:</strong> $25/hr + vehicle costs = $150-180/day</div>
                      <div><strong>Best for:</strong> 15+ deliveries/day, dense geography</div>
                    </div>
                  </div>
                </div>
                <div className="bg-yellow-900/20 rounded p-3 text-xs text-gray-300">
                  <strong className="text-yellow-300">Decision:</strong> Start with DoorDash Drive. Re-evaluate after
                  90 days if you're averaging 15+ deliveries/day.
                </div>
              </div>
            </div>
          </div>
        </div>
      </ExpandableSection>
    </section>
  );
}
