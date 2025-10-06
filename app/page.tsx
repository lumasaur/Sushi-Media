export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Ami Sushi Marketing Strategy Portal
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Internal stakeholder tool for marketing strategy review and content planning
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <a
            href="/strategy-review"
            className="block p-8 bg-white border-2 border-gray-200 rounded-lg hover:border-red-700 transition-colors"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Strategy Prioritization →
            </h2>
            <p className="text-gray-600">
              Review 50 marketing strategies across 5 objectives with interactive filtering and quick wins identification
            </p>
          </a>

          <a
            href="/strategy-review/content-calendar"
            className="block p-8 bg-white border-2 border-gray-200 rounded-lg hover:border-red-700 transition-colors"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Content Calendar →
            </h2>
            <p className="text-gray-600">
              View digital marketing posting schedule and campaign planning across all channels
            </p>
          </a>
        </div>
      </div>
    </main>
  );
}
