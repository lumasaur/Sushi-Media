interface MonthlyTheme {
  month: string;
  theme: string;
  cocktail: string;
  menuFocus: string;
  atmosphere: string;
  color: string;
}

const themes: MonthlyTheme[] = [
  {
    month: "January",
    theme: "Winter Warmth",
    cocktail: "Hot Sake Old Fashioned",
    menuFocus: "Warm comfort dishes",
    atmosphere: "Cozy, intimate lighting",
    color: "from-orange-900/20 to-red-900/20 border-orange-500"
  },
  {
    month: "February",
    theme: "Romance & Connection",
    cocktail: "Cherry Blossom Martini",
    menuFocus: "Shareable plates",
    atmosphere: "Soft lighting, candlelit tables",
    color: "from-pink-900/20 to-rose-900/20 border-pink-500"
  },
  {
    month: "March",
    theme: "Spring Awakening",
    cocktail: "Yuzu Gin Fizz",
    menuFocus: "Fresh, light seasonal items",
    atmosphere: "Bright, energetic ambiance",
    color: "from-green-900/20 to-emerald-900/20 border-green-500"
  }
];

export function MonthlyThemeCard() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-8">
      <h2 className="text-3xl font-bold text-white mb-6">
        Monthly Friday Themes
      </h2>

      {/* Executive Summary */}
      <div className="bg-gray-800 border-2 border-gray-700 rounded-lg p-6 mb-6">
        <p className="text-lg leading-relaxed text-gray-300">
          Single theme per month applied to <strong className="text-white">ALL Fridays</strong> reduces menu complexity.
          Signature cocktail featured throughout month. Themes rotate seasonally: Winter Warmth (Jan), Romance &
          Connection (Feb), Spring Awakening (Mar), with quarterly development for Apr-Dec based on seasonal
          ingredients and customer feedback.
        </p>
      </div>

      {/* Theme Cards Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {themes.map((theme) => (
          <div
            key={theme.month}
            className={`bg-gradient-to-br ${theme.color} border-2 rounded-lg overflow-hidden`}
          >
            <div className="bg-black/40 px-6 py-4 border-b border-white/10">
              <h3 className="text-2xl font-bold text-white">{theme.month}</h3>
              <p className="text-lg text-gray-200 mt-1">{theme.theme}</p>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <div className="text-sm font-semibold text-gray-400 mb-1">Signature Cocktail</div>
                <div className="text-white font-medium flex items-center gap-2">
                  <span>🍸</span>
                  {theme.cocktail}
                </div>
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-400 mb-1">Menu Focus</div>
                <div className="text-gray-300">{theme.menuFocus}</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-400 mb-1">Atmosphere</div>
                <div className="text-gray-300">{theme.atmosphere}</div>
              </div>
            </div>
            <div className="bg-black/20 px-6 py-3 border-t border-white/10">
              <div className="text-sm text-gray-400">Applied to all Fridays in {theme.month}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Future Themes Callout */}
      <div className="mt-8 bg-gray-900 border border-gray-700 rounded-lg p-6">
        <h4 className="text-lg font-semibold text-white mb-3">April-December Theme Development</h4>
        <p className="text-gray-300 mb-4">
          Quarterly theme planning based on:
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="flex items-start gap-3">
            <span className="text-xl">🌸</span>
            <div className="text-sm text-gray-400">Seasonal ingredients and produce availability</div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xl">💬</span>
            <div className="text-sm text-gray-400">Customer feedback from Jan-Mar themes</div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xl">📊</span>
            <div className="text-sm text-gray-400">Beverage sales performance data</div>
          </div>
        </div>
      </div>
    </section>
  );
}
