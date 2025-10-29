export function IntroSection() {
  return (
    <section className="relative max-w-6xl mx-auto px-6 py-16">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#b22222] opacity-5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-12 h-1 bg-[#b22222] rounded-full" />
          <span className="text-gray-400 text-lg font-semibold tracking-wide">IMPLEMENTATION PLAN</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Weekday Traffic & Lunch Delivery Growth
        </h1>

        <p className="text-2xl text-gray-300 mb-12 font-light">
          Simple. Focused. Profitable.
        </p>

        {/* Executive Summary Card */}
        <div className="card-dark shadow-strong border-2 border-[#b22222]/30 rounded-2xl p-10 mb-10 relative overflow-hidden">
          {/* Gold accent corner */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37] opacity-10 rounded-bl-full" />

          <h2 className="text-3xl font-bold text-white mb-6">
            The Plan at a Glance
          </h2>
          <p className="text-xl leading-relaxed text-gray-300 mb-8">
            We're launching three parallel tracks starting <strong className="text-white">second week of November</strong> to
            drive weekday revenue and build sustainable growth through <strong className="text-[#b22222]">events programming</strong>,
            <strong className="text-[#D4AF37]"> lunch delivery</strong>, and <strong className="text-[#00A86B]">performance tracking</strong>.
          </p>

          {/* Three Tracks Visual */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Track 1 */}
            <div className="bg-gradient-to-br from-[#b22222]/20 to-[#b22222]/5 rounded-xl p-6 border border-[#b22222]/30 hover:border-[#b22222] transition-all duration-300">
              <div className="text-sm text-[#b22222] font-bold mb-2 tracking-wide">TRACK 1</div>
              <h3 className="text-xl font-bold text-white mb-3">Events Programming</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#b22222]" />
                  <span>Latin Dance Lessons (Tuesdays)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#b22222]" />
                  <span>Social Night (Thursdays)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#b22222]" />
                  <span>Sushi & Sounds (Monthly Saturdays)</span>
                </div>
              </div>
            </div>

            {/* Track 2 */}
            <div className="bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 rounded-xl p-6 border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-300">
              <div className="text-sm text-[#D4AF37] font-bold mb-2 tracking-wide">TRACK 2</div>
              <h3 className="text-xl font-bold text-white mb-3">Lunch Delivery Orders</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <span>Office park blitz strategy</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <span>Streamlined lunch menu</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <span>3-phase expansion approach</span>
                </div>
              </div>
            </div>

            {/* Track 3 */}
            <div className="bg-gradient-to-br from-[#00A86B]/20 to-[#00A86B]/5 rounded-xl p-6 border border-[#00A86B]/30 hover:border-[#00A86B] transition-all duration-300">
              <div className="text-sm text-[#00A86B] font-bold mb-2 tracking-wide">TRACK 3</div>
              <h3 className="text-xl font-bold text-white mb-3">Performance Tracking</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A86B]" />
                  <span>30-minute Monday reviews</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A86B]" />
                  <span>Weekly metrics tracking</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A86B]" />
                  <span>Data-driven optimization</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Approach */}
        <div className="bg-gradient-to-r from-blue-900/20 to-blue-800/10 border-l-4 border-blue-500 rounded-lg p-8 shadow-medium">
          <h3 className="text-2xl font-bold text-white mb-6">Our Phased Approach</h3>
          <div className="grid md:grid-cols-2 gap-6 text-gray-300">
            <div>
              <h4 className="text-lg font-semibold text-blue-300 mb-3">November-December: Launch & Test</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1 text-xl">•</span>
                  <span><strong className="text-white">Start with Tuesday + Thursday</strong> events only</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1 text-xl">•</span>
                  <span><strong className="text-white">Office park blitz</strong> for lunch delivery</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1 text-xl">•</span>
                  <span><strong className="text-white">Weekly data reviews</strong> establish baseline</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-300 mb-3">January+: Scale What Works</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1 text-xl">•</span>
                  <span><strong className="text-white">Add programming</strong> based on results</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1 text-xl">•</span>
                  <span><strong className="text-white">Expand delivery</strong> to 20-40 orders/week</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1 text-xl">•</span>
                  <span><strong className="text-white">Data-driven optimization</strong> of all tracks</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Investment & ROI Summary - Moved to End */}
        <div className="card-dark shadow-strong border-2 border-green-500/30 rounded-2xl p-8 mt-10">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Investment & Expected Returns</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-black/40 rounded-xl p-5 border border-gray-700 hover:border-[#b22222] transition-all duration-300">
              <div className="text-sm text-gray-400 mb-2">Launch Date</div>
              <div className="text-2xl font-bold text-white">Second week</div>
              <div className="text-xl font-bold text-white">of November</div>
            </div>
            <div className="bg-black/40 rounded-xl p-5 border border-gray-700 hover:border-[#D4AF37] transition-all duration-300">
              <div className="text-sm text-gray-400 mb-2">First-Month Investment</div>
              <div className="text-2xl font-bold text-white">$700-1,200</div>
              <div className="text-xs text-gray-400 mt-1">Total across tracks</div>
            </div>
            <div className="bg-black/40 rounded-xl p-5 border border-gray-700 hover:border-green-500 transition-all duration-300">
              <div className="text-sm text-gray-400 mb-2">Month 3 Revenue Target</div>
              <div className="text-2xl font-bold text-green-400">$12K-18.5K</div>
              <div className="text-xs text-gray-400 mt-1">per month increase</div>
            </div>
            <div className="bg-black/40 rounded-xl p-5 border border-gray-700 hover:border-green-500 transition-all duration-300">
              <div className="text-sm text-gray-400 mb-2">90-Day ROI</div>
              <div className="text-2xl font-bold text-green-400">490-1,040%</div>
              <div className="text-xs text-gray-400 mt-1">Net profit: $22.5K-43.3K</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
