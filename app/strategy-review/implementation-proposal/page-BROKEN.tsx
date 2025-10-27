import { IntroSection } from './components/IntroSection';
import { Track1EventsSection } from './components/Track1EventsSection';
import { Track2LunchSection } from './components/Track2LunchSection';
import { Track3PerformanceSection } from './components/Track3PerformanceSection';
import { LaunchTimelineSection, DecisionChecklistSection } from './components/LaunchTimelineSection';

export default function ImplementationProposalPage() {
  return (
    <main className="min-h-screen bg-[#120c0d]">
      {/* Introduction & Executive Summary */}
      <IntroSection />

      {/* Track 1: Events Programming */}
      <section className="border-t-2 border-gray-800/50">
        <Track1EventsSection />
      </section>

      {/* Track 2: Lunch Delivery Program */}
      <section className="border-t-2 border-gray-800/50">
        <Track2LunchSection />
      </section>

      {/* Track 3: Performance Tracking */}
      <section className="border-t-2 border-gray-800/50">
        <Track3PerformanceSection />
      </section>

      {/* Launch Timeline */}
      <section className="border-t-2 border-gray-800/50 bg-gradient-to-b from-transparent to-gray-900/30">
        <LaunchTimelineSection />
      </section>

      {/* Decision Checklist */}
      <section className="border-t-2 border-gray-800/50 bg-gray-900/50">
        <DecisionChecklistSection />
      </section>

      {/* Back to Strategy Review Link */}
      <section className="border-t-2 border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <a
            href="/strategy-review"
            className="inline-flex items-center gap-3 text-[#b22222] hover:text-[#a01e1e] transition-all duration-300 font-semibold text-lg group"
          >
            <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span>
            Back to Strategy Review
          </a>
        </div>
      </section>
    </main>
  );
}
