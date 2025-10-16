export function IntroSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-white mb-4">
        Phase 1 Implementation: Events, Corporate & Delivery
      </h1>

      <p className="text-xl text-gray-300 mb-8">
        Refined Execution Framework for Operational Excellence
      </p>

      {/* Executive Summary Card */}
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-[#b22222] rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <span className="text-3xl">📋</span>
          Executive Summary
        </h2>
        <p className="text-lg leading-relaxed text-gray-300 mb-6">
          This framework prioritizes operational simplification through Toast POS-native data capture,
          value-driven email marketing (max 1/week), and alternating-week event programming. Three
          revenue pillars: systematic events (20-30% weekday traffic increase), corporate lunch delivery
          via Toast Group Ordering (8-12 weekly orders target), and delivery optimization through strategic
          platform management. 90-day implementation with <strong className="text-white">$550-1,200/month
          operational increase</strong> targeting <strong className="text-green-400">$7,000-13,000/month
          revenue lift (8-18x ROI)</strong>.
        </p>

        {/* Key Metrics Grid */}
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-black/40 rounded-lg p-4 border border-gray-700">
            <div className="text-sm text-gray-400 mb-1">Timeline</div>
            <div className="text-2xl font-bold text-white">30 Days</div>
            <div className="text-xs text-gray-400 mt-1">Setup to launch</div>
          </div>
          <div className="bg-black/40 rounded-lg p-4 border border-gray-700">
            <div className="text-sm text-gray-400 mb-1">Investment</div>
            <div className="text-2xl font-bold text-white">$550-1,200</div>
            <div className="text-xs text-gray-400 mt-1">per month</div>
          </div>
          <div className="bg-black/40 rounded-lg p-4 border border-gray-700">
            <div className="text-sm text-gray-400 mb-1">Revenue Target</div>
            <div className="text-2xl font-bold text-green-400">$7K-13K</div>
            <div className="text-xs text-gray-400 mt-1">per month</div>
          </div>
          <div className="bg-black/40 rounded-lg p-4 border border-gray-700">
            <div className="text-sm text-gray-400 mb-1">Projected ROI</div>
            <div className="text-2xl font-bold text-green-400">8-18x</div>
            <div className="text-xs text-gray-400 mt-1">within 90 days</div>
          </div>
        </div>
      </div>

      {/* Key Refinements */}
      <div className="bg-blue-900/10 border-l-4 border-blue-500 rounded p-6">
        <h3 className="text-xl font-bold text-white mb-4">Key Strategic Refinements</h3>
        <div className="grid md:grid-cols-2 gap-4 text-gray-300">
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-blue-400 mt-1">•</span>
              <span><strong className="text-white">Alternating event weeks</strong> reduce operational burden while maintaining weekly touchpoints</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400 mt-1">•</span>
              <span><strong className="text-white">Toast-first data capture</strong> eliminates third-party tool complexity</span>
            </li>
          </ul>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-blue-400 mt-1">•</span>
              <span><strong className="text-white">Email discipline</strong> prevents customer fatigue (max 1/week general list)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400 mt-1">•</span>
              <span><strong className="text-white">Digital corporate ordering</strong> streamlines group orders via Toast native features</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
