import { IntroSection } from './components/IntroSection';
import { AlternatingWeekCalendar } from './components/AlternatingWeekCalendar';
import { MonthlyThemeCard } from './components/MonthlyThemeCard';
import { MonthlyCalendarTabs } from './components/MonthlyCalendarTabs';
import { ToastDataCaptureSection } from './components/ToastDataCaptureSection';
import { EmailMarketingSection } from './components/EmailMarketingSection';
import { CorporateOrderingSection } from './components/CorporateOrderingSection';
import { ImplementationTimelineSection } from './components/ImplementationTimelineSection';
import { ResourcesSection } from './components/ResourcesSection';

export default function ImplementationProposalPage() {
  return (
    <main className="min-h-screen bg-[#120c0d]">
      {/* Introduction & Executive Summary */}
      <IntroSection />

      {/* Section 1: Events Calendar Framework */}
      <section className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-4xl">📅</span>
            <div>
              <h2 className="text-3xl font-bold text-white">Section 1: Events Calendar & Weekly Programming</h2>
              <p className="text-gray-400 mt-1">Systematic community engagement through alternating event structure</p>
            </div>
          </div>
        </div>

        {/* Alternating Week Framework */}
        <AlternatingWeekCalendar />

        {/* Monthly Themes */}
        <MonthlyThemeCard />

        {/* Detailed 3-Month Calendar */}
        <MonthlyCalendarTabs />
      </section>

      {/* Section 2: Toast POS Data Capture Strategy */}
      <section className="border-t border-gray-800">
        <ToastDataCaptureSection />
      </section>

      {/* Section 3: Email Marketing Strategy */}
      <section className="border-t border-gray-800">
        <EmailMarketingSection />
      </section>

      {/* Section 4: Corporate Ordering Strategy */}
      <section className="border-t border-gray-800">
        <CorporateOrderingSection />
      </section>

      {/* Section 5: Implementation Timeline */}
      <section className="border-t border-gray-800">
        <ImplementationTimelineSection />
      </section>

      {/* Section 6: Resources & Templates */}
      <section className="border-t border-gray-800">
        <ResourcesSection />
      </section>

      {/* Back to Strategy Review Link */}
      <section className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <a
            href="/strategy-review"
            className="inline-flex items-center gap-2 text-[#b22222] hover:text-[#a01e1e] transition-colors font-semibold"
          >
            <span>←</span>
            Back to Strategy Review
          </a>
        </div>
      </section>
    </main>
  );
}
