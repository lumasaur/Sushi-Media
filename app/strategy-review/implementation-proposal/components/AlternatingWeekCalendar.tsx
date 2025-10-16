export function AlternatingWeekCalendar() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-8">
      <h2 className="text-3xl font-bold text-white mb-6">
        Alternating Week Framework
      </h2>

      {/* Executive Summary */}
      <div className="bg-gray-800 border-2 border-gray-700 rounded-lg p-6 mb-6">
        <p className="text-lg leading-relaxed text-gray-300">
          Events alternate between <strong className="text-white">"Active Weeks"</strong> (Week 1 & 3: full
          programming with Trivia/Karaoke, Social Mixer, optional Music) and <strong className="text-white">"Focus
          Weeks"</strong> (Week 2 & 4: dining special promotion with consistent Happy Hour). Monthly Friday themes
          remain constant (e.g., January = "Winter Warmth" all Fridays). Reduces operational complexity while
          maintaining weekly customer touchpoints.
        </p>
      </div>

      {/* Side-by-Side Week Comparison */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Active Weeks (Week 1 & 3) */}
        <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 border-2 border-blue-500 rounded-lg overflow-hidden">
          <div className="bg-blue-900/40 px-6 py-4 border-b border-blue-500">
            <h3 className="text-2xl font-bold text-white">Active Weeks (Week 1 & 3)</h3>
            <p className="text-sm text-blue-200 mt-1">Full Event Programming</p>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-24 text-sm font-semibold text-gray-400">Sunday</div>
                <div className="flex-1 text-gray-300">Regular Service <span className="text-gray-500 text-sm">(or Game Day - future)</span></div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-24 text-sm font-semibold text-gray-400">Monday</div>
                <div className="flex-1 text-gray-300">DARK / Closed</div>
              </div>
              <div className="flex items-start gap-3 bg-blue-900/20 rounded p-3 border-l-4 border-blue-400">
                <div className="flex-shrink-0 w-24 text-sm font-semibold text-blue-300">Tuesday</div>
                <div className="flex-1">
                  <div className="font-semibold text-white">Social Event</div>
                  <div className="text-sm text-gray-300 mt-1">Trivia Night OR Karaoke</div>
                  <div className="text-sm text-gray-400 mt-1">7:00-10:00pm</div>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-blue-900/20 rounded p-3 border-l-4 border-blue-400">
                <div className="flex-shrink-0 w-24 text-sm font-semibold text-blue-300">Wednesday</div>
                <div className="flex-1">
                  <div className="font-semibold text-white">Happy Hour</div>
                  <div className="text-sm text-gray-300 mt-1">Weekly Anchor Event</div>
                  <div className="text-sm text-gray-400 mt-1">4:30-6:30pm</div>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-blue-900/20 rounded p-3 border-l-4 border-blue-400">
                <div className="flex-shrink-0 w-24 text-sm font-semibold text-blue-300">Thursday</div>
                <div className="flex-1">
                  <div className="font-semibold text-white">Social Mixer</div>
                  <div className="text-sm text-gray-300 mt-1">"Meet & Mingle" Networking</div>
                  <div className="text-sm text-gray-400 mt-1">7:00-10:00pm</div>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-blue-900/20 rounded p-3 border-l-4 border-blue-400">
                <div className="flex-shrink-0 w-24 text-sm font-semibold text-blue-300">Friday</div>
                <div className="flex-1">
                  <div className="font-semibold text-white">Monthly Theme</div>
                  <div className="text-sm text-gray-300 mt-1">Signature cocktail + themed atmosphere</div>
                  <div className="text-sm text-gray-400 mt-1">6:00-11:00pm</div>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-blue-900/20 rounded p-3 border-l-4 border-blue-400">
                <div className="flex-shrink-0 w-24 text-sm font-semibold text-blue-300">Saturday</div>
                <div className="flex-1">
                  <div className="font-semibold text-white">Music Event</div>
                  <div className="text-sm text-gray-300 mt-1">Live acoustic or DJ "Sushi & Sounds"</div>
                  <div className="text-sm text-gray-400 mt-1">7:00-10:00pm (1st Sat standard, 3rd Sat optional)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Focus Weeks (Week 2 & 4) */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-600 rounded-lg overflow-hidden">
          <div className="bg-gray-700/40 px-6 py-4 border-b border-gray-600">
            <h3 className="text-2xl font-bold text-white">Focus Weeks (Week 2 & 4)</h3>
            <p className="text-sm text-gray-300 mt-1">Dining Special Promotion</p>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-24 text-sm font-semibold text-gray-400">Sunday</div>
                <div className="flex-1 text-gray-300">Regular Service <span className="text-gray-500 text-sm">(or Game Day - future)</span></div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-24 text-sm font-semibold text-gray-400">Monday</div>
                <div className="flex-1 text-gray-300">DARK / Closed</div>
              </div>
              <div className="flex items-start gap-3 bg-gray-700/30 rounded p-3 border-l-4 border-gray-500">
                <div className="flex-shrink-0 w-24 text-sm font-semibold text-gray-300">Tuesday</div>
                <div className="flex-1">
                  <div className="font-semibold text-white">Dining Special Focus</div>
                  <div className="text-sm text-gray-300 mt-1">$12 Chicken Fried Rice</div>
                  <div className="text-sm text-gray-400 mt-1">5:00-9:00pm</div>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-gray-700/30 rounded p-3 border-l-4 border-gray-500">
                <div className="flex-shrink-0 w-24 text-sm font-semibold text-gray-300">Wednesday</div>
                <div className="flex-1">
                  <div className="font-semibold text-white">Happy Hour</div>
                  <div className="text-sm text-gray-300 mt-1">Weekly Anchor Event</div>
                  <div className="text-sm text-gray-400 mt-1">4:30-6:30pm</div>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-gray-700/30 rounded p-3 border-l-4 border-gray-500">
                <div className="flex-shrink-0 w-24 text-sm font-semibold text-gray-300">Thursday</div>
                <div className="flex-1">
                  <div className="font-semibold text-white">Dining Special Focus</div>
                  <div className="text-sm text-gray-300 mt-1">$12 Yaki Udon</div>
                  <div className="text-sm text-gray-400 mt-1">5:00-9:00pm</div>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-gray-700/30 rounded p-3 border-l-4 border-gray-500">
                <div className="flex-shrink-0 w-24 text-sm font-semibold text-gray-300">Friday</div>
                <div className="flex-1">
                  <div className="font-semibold text-white">Monthly Theme</div>
                  <div className="text-sm text-gray-300 mt-1">Signature cocktail + themed atmosphere</div>
                  <div className="text-sm text-gray-400 mt-1">6:00-11:00pm</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-24 text-sm font-semibold text-gray-400">Saturday</div>
                <div className="flex-1 text-gray-300">Regular Service</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Benefits */}
      <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
        <h4 className="text-lg font-semibold text-white mb-4">Operational Benefits</h4>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="flex items-start gap-3">
            <span className="text-2xl">📅</span>
            <div>
              <div className="font-semibold text-white text-sm">Predictable Rhythm</div>
              <div className="text-sm text-gray-400 mt-1">Customers know when to expect events</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">👥</span>
            <div>
              <div className="font-semibold text-white text-sm">Reduced Staff Burden</div>
              <div className="text-sm text-gray-400 mt-1">Alternate between high-energy and standard service</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">💰</span>
            <div>
              <div className="font-semibold text-white text-sm">Consistent Revenue</div>
              <div className="text-sm text-gray-400 mt-1">Weekly Happy Hour maintains baseline traffic</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
