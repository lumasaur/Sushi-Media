export default function Home() {
  return (
    <main className="min-h-screen bg-[#120c0d]">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-4">
          Ami Sushi Marketing Strategy Portal
        </h1>
        <p className="text-xl text-gray-300 mb-12">
          Internal stakeholder tool for marketing strategy review and content planning
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <a
            href="/strategy-review"
            className="block p-8 bg-gray-900 border-2 border-gray-700 rounded-lg hover:border-red-700 transition-colors"
          >
            <h2 className="text-2xl font-semibold text-white mb-3">
              Strategy Prioritization →
            </h2>
            <p className="text-gray-300">
              Review 50 marketing strategies across 5 objectives with interactive filtering and quick wins identification
            </p>
          </a>

          <a
            href="https://v0-html-webpage-development-git-master-lumasaurs-projects.vercel.app/strategy-review/content-calendar"
            className="block p-8 bg-gray-900 border-2 border-gray-700 rounded-lg hover:border-red-700 transition-colors"
          >
            <h2 className="text-2xl font-semibold text-white mb-3">
              Content Calendar →
            </h2>
            <p className="text-gray-300">
              View digital marketing posting schedule and campaign planning across all channels
            </p>
          </a>
        </div>
      </div>
    </main>
  );
}
