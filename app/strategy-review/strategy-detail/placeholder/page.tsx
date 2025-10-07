export default function PlaceholderDetailPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="max-w-2xl text-center">
        <div className="mb-6">
          <svg
            className="mx-auto h-24 w-24 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Select a Strategy to View Details
        </h2>
        <p className="text-gray-600 mb-8">
          Click any row in the strategy table above to load a comprehensive business case analysis,
          including executive summary, implementation roadmap, success metrics, and competitive context.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">
            What You'll See
          </h3>
          <ul className="text-sm text-blue-800 space-y-2 text-left max-w-md mx-auto">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Executive Summary with strategic rationale</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Detailed Business Case Analysis with revenue projections</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Success Metrics and KPIs with target values</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Implementation Roadmap with action steps</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Competitive Context and market positioning</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
