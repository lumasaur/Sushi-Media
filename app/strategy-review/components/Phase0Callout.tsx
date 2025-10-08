export function Phase0Callout() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-8">
      <div className="bg-blue-900/20 border-2 border-blue-500 rounded-lg p-8">
        <div className="flex items-start gap-4">
          <div className="text-4xl">💡</div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-white mb-3">
              Phase 0 Consideration: Infrastructure Recommendations
            </h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              <strong>Many marketing initiatives perform better with supporting infrastructure.</strong>
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Before launching campaigns, consider establishing baseline systems:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <span><strong>CRM/POS integration</strong> → Automatic customer data capture for attribution</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <span><strong>Email automation</strong> → Streamline follow-ups and review requests</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <span><strong>Quality photography</strong> → Professional appearance across digital channels</span>
                </li>
              </ul>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <span><strong>Website optimization</strong> → Improve conversion and user experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <span><strong>Content planning system</strong> → Reduce daily content scrambling</span>
                </li>
              </ul>
            </div>
            <div className="bg-black/40 rounded p-4 mb-4">
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-sm text-blue-300 mb-1">Estimated Timeline</div>
                  <div className="text-lg font-bold text-white">6-8 weeks</div>
                </div>
                <div>
                  <div className="text-sm text-blue-300 mb-1">Investment Range</div>
                  <div className="text-lg font-bold text-white">$5,400-14,700</div>
                </div>
                <div>
                  <div className="text-sm text-blue-300 mb-1">Outcome</div>
                  <div className="text-lg font-bold text-white">Enhanced campaign measurement</div>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-400 italic mb-4">
              These are recommendations, not requirements. Stakeholders may choose to implement some, all, or none based on current capabilities and priorities.
            </p>
            <a
              href="#phase-0-foundation"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors font-semibold"
            >
              View Complete Phase 0 Infrastructure Options ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
