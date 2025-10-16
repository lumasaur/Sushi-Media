import { ExpandableSection } from './ExpandableSection';

export function ToastDataCaptureSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-8">
      <div className="flex items-center gap-3 mb-8">
        <span className="text-4xl">📊</span>
        <div>
          <h2 className="text-3xl font-bold text-white">Section 2: Toast POS Data Capture Strategy</h2>
          <p className="text-gray-400 mt-1">Leverage existing systems before third-party solutions</p>
        </div>
      </div>

      {/* 2.1 Toast Native Capabilities */}
      <ExpandableSection
        sectionNumber="2.1"
        title="Toast Native Capabilities"
        icon="💳"
        badge="recommended"
        executiveSummary={
          <>
            Leverage Toast's built-in customer profile system: automatic credit card capture, Customer-Facing
            Display email prompts, and Loyalty Program enrollment (target: 20% of transactions). Staff-prompted
            email collection at checkout. <strong className="text-white">No third-party tools required</strong> for
            core data capture.
          </>
        }
      >
        <div className="space-y-6">
          {/* Three-Column Capability Cards */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-800 rounded-lg p-5 border border-gray-700">
              <h4 className="font-semibold text-white mb-3">Credit Card Auto-Capture</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div>
                  <span className="text-gray-400">What it captures:</span>
                  <div className="text-white mt-1">Cardholder name, last 4 digits, transaction history</div>
                </div>
                <div>
                  <span className="text-gray-400">Limitation:</span>
                  <div className="mt-1">No email/phone without additional input</div>
                </div>
                <div>
                  <span className="text-gray-400">Setup:</span>
                  <div className="text-green-400 mt-1">✓ Already enabled (automatic)</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-5 border border-gray-700">
              <h4 className="font-semibold text-white mb-3">Customer-Facing Display</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div>
                  <span className="text-gray-400">What it captures:</span>
                  <div className="text-white mt-1">Email via "Email receipt?" prompt</div>
                </div>
                <div>
                  <span className="text-gray-400">Benefit:</span>
                  <div className="mt-1">Customer inputs directly, no staff labor</div>
                </div>
                <div>
                  <span className="text-gray-400">Setup:</span>
                  <div className="text-yellow-400 mt-1">⚠️ Enable CFD settings (if hardware available)</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-5 border border-green-700 border-2">
              <h4 className="font-semibold text-white mb-3">Toast Loyalty Program ⭐</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div>
                  <span className="text-gray-400">What it captures:</span>
                  <div className="text-white mt-1">Email (required), phone (optional), visit frequency</div>
                </div>
                <div>
                  <span className="text-gray-400">Incentive:</span>
                  <div className="mt-1">50-100 bonus points on signup (= $5-10 value)</div>
                </div>
                <div>
                  <span className="text-gray-400">Setup:</span>
                  <div className="text-blue-400 mt-1">→ Enable in Toast Dashboard → Loyalty</div>
                </div>
              </div>
            </div>
          </div>

          {/* Toast Loyalty Implementation */}
          <div className="bg-blue-900/10 border-l-4 border-blue-500 rounded p-6">
            <h4 className="text-xl font-semibold text-white mb-4">Toast Loyalty Implementation Checklist</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-blue-300 mb-3">Configuration Settings</h5>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500">☐</span>
                    <span>Enable Toast Loyalty in Toast Dashboard</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500">☐</span>
                    <span>Set earning rate: $1 spent = 1 point</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500">☐</span>
                    <span>Set redemption: 100 points = $10 reward</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500">☐</span>
                    <span>Set signup bonus: 50 points ($5 value)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-blue-300 mb-3">Staff Training</h5>
                <div className="bg-gray-800 rounded p-4 text-sm text-gray-300">
                  <div className="font-semibold text-white mb-2">Enrollment Script:</div>
                  <p className="italic border-l-2 border-blue-500 pl-3">
                    "Have you joined our loyalty program? It's free, and I can sign you up right now. You'll
                    get $5 credit just for joining, plus points on every visit. I just need your email."
                  </p>
                </div>
                <div className="mt-3">
                  <span className="text-gray-400">Target:</span>
                  <span className="text-white ml-2 font-semibold">20% enrollment within 60 days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ExpandableSection>

      {/* 2.2 DoorDash Analytics Integration */}
      <ExpandableSection
        sectionNumber="2.2"
        title="DoorDash Analytics Integration"
        icon="📈"
        executiveSummary={
          <>
            Extract customer insights from DoorDash Merchant Portal: order frequency, geographic clustering,
            repeat customer identification. <strong className="text-white">Limitation:</strong> No direct email/phone
            data. <strong className="text-white">Workaround:</strong> Physical inserts in delivery orders with QR code
            linking to community signup.
          </>
        }
      >
        <div className="space-y-6">
          {/* Available Data Points */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Available Customer Insights</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gray-800 rounded p-4 border border-gray-700">
                <div className="font-semibold text-white mb-2">Order Pattern Analytics</div>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Customer order frequency</li>
                  <li>• First-time vs. repeat customers</li>
                  <li>• Average order value by customer</li>
                  <li>• Preferred order times/days</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded p-4 border border-gray-700">
                <div className="font-semibold text-white mb-2">Geographic Heat Mapping</div>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Delivery address clustering</li>
                  <li>• High-concentration corporate locations</li>
                  <li>• Delivery radius optimization</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded p-4 border border-gray-700">
                <div className="font-semibold text-white mb-2">Customer Retention Metrics</div>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• 30-day return rate</li>
                  <li>• 90-day lifetime value</li>
                  <li>• Lapsed customer identification</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Workaround Strategy */}
          <div className="bg-yellow-900/10 border-l-4 border-yellow-500 rounded p-6">
            <h4 className="text-lg font-semibold text-white mb-4">Workaround: Physical Insert Marketing</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-yellow-300 mb-3">Insert Card Design</h5>
                <div className="bg-gray-800 rounded p-4 border-2 border-dashed border-yellow-500">
                  <div className="text-center space-y-2">
                    <div className="text-white font-bold">THANKS FOR YOUR ORDER!</div>
                    <div className="text-sm text-gray-300">Join our VIP Events Community:</div>
                    <div className="text-lg text-yellow-400 font-semibold">Text AMI to [Your Number]</div>
                    <div className="text-sm text-gray-400">or Scan QR Code</div>
                    <div className="w-16 h-16 bg-white mx-auto flex items-center justify-center text-xs">
                      [QR CODE]
                    </div>
                    <div className="text-xs text-gray-400 space-y-1">
                      <div>Get: Early event notifications</div>
                      <div>Exclusive takeout discounts</div>
                      <div>Birthday rewards</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h5 className="font-semibold text-yellow-300 mb-3">Implementation</h5>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500">☐</span>
                    <span>Design and print insert cards (3×5")</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500">☐</span>
                    <span>Generate QR code linking to Google Form</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500">☐</span>
                    <span>Print QR code stickers for packaging</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500">☐</span>
                    <span>Train staff to include in every DoorDash order</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500">☐</span>
                    <span>Track conversion rate weekly</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </ExpandableSection>

      {/* 2.3 Weekly Data Consolidation */}
      <ExpandableSection
        sectionNumber="2.3"
        title="Weekly Data Consolidation Workflow"
        icon="📅"
        executiveSummary={
          <>
            Monday morning 30-minute routine: Export Toast customer data, Toast Loyalty members, DoorDash analytics.
            Consolidate into master Google Sheet with automated segmentation (Active/At Risk/Lapsed, VIP/Regular/New,
            Event Enthusiast). Tag for targeted email campaigns.
          </>
        }
      >
        <div className="space-y-6">
          {/* Step-by-Step Workflow */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Monday Morning Routine (30 minutes)</h4>
            <div className="space-y-4">
              {[
                {
                  step: 1,
                  title: "Export Toast Customer Data",
                  details: "Navigate: Toast Dashboard → Customers → Export",
                  fields: "Name, Email, Phone, Total Visits, Last Visit Date, Lifetime Spend"
                },
                {
                  step: 2,
                  title: "Export Toast Loyalty Members",
                  details: "Navigate: Toast Dashboard → Loyalty → Members → Export",
                  fields: "Email, Points Balance, Enrollment Date"
                },
                {
                  step: 3,
                  title: "Export DoorDash Order Analytics",
                  details: "Navigate: DoorDash Merchant Portal → Analytics → Export",
                  fields: "Order frequency data, customer zip codes"
                },
                {
                  step: 4,
                  title: "Consolidate into Master Google Sheet",
                  details: "Merge all data sources into single spreadsheet",
                  fields: "Customer ID, Name, Email, Phone, Source, Visits, Spend, Segment"
                },
                {
                  step: 5,
                  title: "Apply Automated Segmentation",
                  details: "Tag customers based on rules below",
                  fields: "Active, At Risk, Lapsed, VIP, Regular, New, Event Enthusiast"
                }
              ].map((item) => (
                <div key={item.step} className="flex gap-4 bg-gray-800 rounded p-4 border border-gray-700">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#b22222] text-white flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-white mb-1">{item.title}</div>
                    <div className="text-sm text-gray-400 mb-2">{item.details}</div>
                    <div className="text-xs text-gray-500">Fields: {item.fields}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Segmentation Rules */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h4 className="text-lg font-semibold text-white mb-4">Automated Segmentation Rules</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <div className="bg-green-900/20 border-l-4 border-green-500 rounded p-3">
                  <div className="font-semibold text-green-300">Active</div>
                  <div className="text-gray-400">Last Visit &lt; 30 days ago</div>
                </div>
                <div className="bg-yellow-900/20 border-l-4 border-yellow-500 rounded p-3">
                  <div className="font-semibold text-yellow-300">At Risk</div>
                  <div className="text-gray-400">Last Visit 30-60 days ago</div>
                </div>
                <div className="bg-red-900/20 border-l-4 border-red-500 rounded p-3">
                  <div className="font-semibold text-red-300">Lapsed</div>
                  <div className="text-gray-400">Last Visit &gt; 60 days ago</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="bg-purple-900/20 border-l-4 border-purple-500 rounded p-3">
                  <div className="font-semibold text-purple-300">VIP</div>
                  <div className="text-gray-400">Total Orders ≥ 10</div>
                </div>
                <div className="bg-blue-900/20 border-l-4 border-blue-500 rounded p-3">
                  <div className="font-semibold text-blue-300">Regular</div>
                  <div className="text-gray-400">Total Orders 5-9</div>
                </div>
                <div className="bg-gray-700/20 border-l-4 border-gray-500 rounded p-3">
                  <div className="font-semibold text-gray-300">New/Occasional</div>
                  <div className="text-gray-400">Total Orders 1-4</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ExpandableSection>
    </section>
  );
}
