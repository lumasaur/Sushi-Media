'use client';

import { useState } from 'react';

export default function Home() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    approach: true,
    opportunities: true,
    analysis: true,
    roadmap: true,
  });

  const [activeTab, setActiveTab] = useState(0);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const opportunities = [
    {
      title: "Corporate Market Development",
      content: (
        <>
          <div className="mb-6">
            <h4 className="font-semibold mb-2">Market Opportunity Analysis</h4>
            <p className="mb-3 leading-relaxed">
              Corporate dining demand in Central New Jersey shows concentrated office park density within delivery and catering range, with businesses increasingly prioritizing experience quality for client relations and employee appreciation. Current competitors lack both premium Japanese specialization and community connection authenticity that appeals to businesses seeking distinctive corporate entertainment options.
            </p>
          </div>
          <div className="mb-6">
            <h4 className="font-semibold mb-2">Strategic Targeting Approach</h4>
            <p className="mb-3 leading-relaxed">
              Focus on small to medium-sized businesses (20-200 employees) within three-mile radius that value relationship-based service and community connection. These organizations typically seek venues that reflect their company values while providing professional-grade experiences for client entertainment and team building.
            </p>
          </div>
          <div className="mb-6">
            <h4 className="font-semibold mb-2">Implementation Recommendations</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border border-white/10 bg-black/20">
                <h5 className="font-semibold mb-2">Corporate Service Development</h5>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Business Lunch Optimization: Menu items specifically designed for professional dining with efficient service timing</li>
                  <li>Private Dining Enhancement: Upstairs space configuration for business meetings with basic presentation capabilities</li>
                  <li>Account Management Approach: Dedicated relationship building with key corporate decision makers</li>
                  <li>Community Connection Integration: Corporate social responsibility partnership opportunities</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg border border-white/10 bg-black/20">
                <h5 className="font-semibold mb-2">Marketing and Outreach Strategy</h5>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>LinkedIn Professional Engagement: Targeted content marketing emphasizing community values</li>
                  <li>Direct Relationship Building: Personal outreach to office managers and corporate event coordinators</li>
                  <li>Somerset County Business Partnership Participation: Active involvement in professional networking events</li>
                  <li>Referral Network Development: Systematic approach to encouraging existing corporate clients</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Potential Success Indicators</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li className="leading-relaxed">Corporate account establishment and retention rates</li>
              <li className="leading-relaxed">Business lunch order frequency and consistency</li>
              <li className="leading-relaxed">Private dining space utilization for corporate meetings</li>
              <li className="leading-relaxed">Corporate event booking patterns and repeat engagement</li>
            </ul>
          </div>
        </>
      )
    },
    {
      title: "Community Events & Social Programming",
      content: (
        <p className="leading-relaxed text-gray-300">
          Building on proven weekend music event success to develop systematic community engagement programming that drives consistent mid-week and weekend traffic while strengthening neighborhood relationships and creating differentiated social dining experiences.
        </p>
      )
    },
    {
      title: "Enhanced Takeout & Delivery",
      content: (
        <p className="leading-relaxed text-gray-300">
          Premium takeout positioning that maintains quality standards while capturing convenience-oriented customer demand and expanding market reach beyond dine-in capacity constraints.
        </p>
      )
    },
    {
      title: "Weekend Social Events & Beverage Revenue",
      content: (
        <p className="leading-relaxed text-gray-300">
          Systematic expansion of successful music event format combined with elevated beverage program to maximize per-customer revenue during peak weekend traffic periods.
        </p>
      )
    },
    {
      title: "Premium Catering & Private Events",
      content: (
        <p className="leading-relaxed text-gray-300">
          High-margin private event services leveraging upstairs space and culinary expertise to serve corporate celebrations and special occasions with premium positioning.
        </p>
      )
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <section id="hero" className="p-6 md:p-10 mb-10 bg-black/50 backdrop-blur-sm rounded-xl border border-white/20">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
            Ami Marketing Strategy
          </h1>
          <p className="text-lg text-gray-300 mb-5">
            Strategic Marketing Framework for Premium Sushi with Social Soul
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-white/10 rounded-full px-3 py-1 text-sm">Community‑Embedded</span>
            <span className="bg-white/10 rounded-full px-3 py-1 text-sm">Premium & Approachable</span>
            <span className="bg-white/10 rounded-full px-3 py-1 text-sm">Social by Design</span>
            <span className="bg-white/10 rounded-full px-3 py-1 text-sm">Cultural Bridge</span>
          </div>
          <p className="text-sm text-gray-400">
            Central New Jersey's premier social dining destination where premium Japanese cuisine quality meets authentic community connection, serving as both sophisticated celebration venue and neighborhood gathering place.
          </p>
        </section>

        {/* Strategic Marketing Approach Section */}
        <section id="overview" className="scroll-mt-20 p-6 md:p-10 mb-10 bg-black/50 backdrop-blur-sm rounded-xl border border-white/20">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">Strategic Marketing Approach</h2>
            <button
              onClick={() => toggleSection('approach')}
              className="text-[#b22222] hover:text-[#a01e1e] transition-colors"
            >
              {expandedSections.approach ? '▲' : '▼'}
            </button>
          </div>

          {expandedSections.approach && (
          <div>

          <article className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Strategic Content Assessment & Competitive Positioning Analysis</h3>

            <div className="mb-4">
              <h4 className="font-semibold mb-2">Current Content Infrastructure Analysis</h4>
              <p className="mb-3 leading-relaxed">
                Through systematic evaluation of existing social media content, we have identified a sophisticated five-pillar framework that demonstrates intuitive understanding of premium social dining positioning. This analysis reveals strategic advantages that, when systematically leveraged, create sustainable competitive differentiation in the Central New Jersey market.
              </p>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold mb-2">Content Pillar Strategic Architecture</h4>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="p-5 rounded-lg border border-white/10 bg-black/20">
                  <h5 className="font-semibold mb-2 text-sm">Pillar 1: "Mastery of Skills and Quality" - Technical Authority Establishment</h5>
                  <p className="text-sm leading-relaxed">
                    Premium positioning requires credible expertise demonstration without creating customer intimidation barriers. Current content successfully balances technical sophistication with educational accessibility.
                  </p>
                </div>
                <div className="p-5 rounded-lg border border-white/10 bg-black/20">
                  <h5 className="font-semibold mb-2 text-sm">Pillar 2: "Social Soul (Events & Community)" - Authentic Community Integration</h5>
                  <p className="text-sm leading-relaxed">
                    Community-embedded positioning creates replication barriers for competitors while building sustainable customer loyalty through genuine relationship development.
                  </p>
                </div>
                <div className="p-5 rounded-lg border border-white/10 bg-black/20">
                  <h5 className="font-semibold mb-2 text-sm">Pillar 3: "About Us" - Heritage Authority Building</h5>
                  <p className="text-sm leading-relaxed">
                    Family business storytelling establishes authentic culinary expertise while building personal connection that differentiates from corporate dining experiences.
                  </p>
                </div>
                <div className="p-5 rounded-lg border border-white/10 bg-black/20">
                  <h5 className="font-semibold mb-2 text-sm">Pillar 4: "Highlighting the Food" - Premium Accessibility Balance</h5>
                  <p className="text-sm leading-relaxed">
                    Premium food positioning must demonstrate sophistication while maintaining social accessibility to serve diverse customer segments effectively.
                  </p>
                </div>
                <div className="p-5 rounded-lg border border-white/10 bg-black/20">
                  <h5 className="font-semibold mb-2 text-sm">Pillar 5: "Information Updates" - Community-Focused Communication</h5>
                  <p className="text-sm leading-relaxed">
                    Operational communication opportunities reinforce community integration while maintaining customer engagement through accessible programming.
                  </p>
                </div>
              </div>
            </div>
          </article>

          <article className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Market Opportunity Assessment</h3>

            <div className="mb-4">
              <h4 className="font-semibold mb-2">Primary Market Gap Analysis</h4>
              <p className="mb-3 leading-relaxed">
                Central New Jersey's dining landscape presents a distinct opportunity in the premium social dining segment. Current market competitors cluster into three primary categories: formal omakase establishments offering limited social interaction, casual sushi chains lacking premium quality differentiation, and premium restaurants without Japanese culinary specialization.
              </p>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold mb-2">Target Market Segmentation</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li className="leading-relaxed">Corporate Professionals: Business lunch demand, corporate event hosting, professional networking requirements</li>
                <li className="leading-relaxed">Affluent Suburban Families: Special occasion dining, family celebrations, premium takeout convenience</li>
                <li className="leading-relaxed">Social Dining Enthusiasts: Weekend entertainment seekers, music event attendees, group celebration organizers</li>
                <li className="leading-relaxed">Community-Minded Consumers: Local business supporters, charity event participants, neighborhood gathering participants</li>
              </ul>
            </div>
          </article>

          <article className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Value Proposition Development</h3>
            <div className="p-5 rounded-lg border border-white/10 bg-black/20 mb-4">
              <h4 className="font-semibold mb-2">Core Value Proposition</h4>
              <p className="leading-relaxed">
                Central New Jersey's premier social dining destination where premium Japanese cuisine quality meets authentic community connection, serving as both sophisticated celebration venue and neighborhood gathering place.
              </p>
            </div>
            <div className="p-5 rounded-lg border border-white/10 bg-black/20">
              <h4 className="font-semibold mb-2">Differentiated Positioning Statement</h4>
              <p className="leading-relaxed">
                "Premium Sushi with Social Soul" - the only restaurant in Central New Jersey delivering NYC-caliber Japanese cuisine within a community-embedded social environment that facilitates meaningful connection while maintaining culinary excellence.
              </p>
            </div>
          </article>

          <article className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Strategic Brand Pillars</h3>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="p-5 rounded-lg border border-white/10 bg-black/20">
                <h4 className="font-semibold mb-2">Community‑Embedded Authenticity</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li className="leading-relaxed">Family business credibility with multi‑generational local presence</li>
                  <li className="leading-relaxed">Genuine community integration beyond transactional relationships</li>
                  <li className="leading-relaxed">Local sourcing partnerships and regional business network participation</li>
                  <li className="leading-relaxed">Authentic hospitality rooted in both Japanese service traditions and neighborhood values</li>
                </ul>
              </div>
              <div className="p-5 rounded-lg border border-white/10 bg-black/20">
                <h4 className="font-semibold mb-2">Premium Quality Accessibility</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li className="leading-relaxed">Professional‑grade culinary execution without intimidation factors</li>
                  <li className="leading-relaxed">Sophisticated ingredients and preparation techniques presented in approachable formats</li>
                  <li className="leading-relaxed">Education‑focused service that enhances rather than excludes customer experience</li>
                  <li className="leading-relaxed">Price‑value positioning that justifies premium without creating barriers</li>
                </ul>
              </div>
              <div className="p-5 rounded-lg border border-white/10 bg-black/20">
                <h4 className="font-semibold mb-2">Social Experience Engineering</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li className="leading-relaxed">Physical space design optimized for both intimate dining and group celebration</li>
                  <li className="leading-relaxed">Service protocols that facilitate conversation and connection</li>
                  <li className="leading-relaxed">Event programming that brings community together around shared experiences</li>
                  <li className="leading-relaxed">Technology integration that enhances rather than replaces human interaction</li>
                </ul>
              </div>
              <div className="p-5 rounded-lg border border-white/10 bg-black/20">
                <h4 className="font-semibold mb-2">Cultural Bridge Building</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li className="leading-relaxed">Japanese culinary traditions interpreted through local community lens</li>
                  <li className="leading-relaxed">Educational components that respect cultural authenticity while maintaining accessibility</li>
                  <li className="leading-relaxed">Service approach that honors both Japanese hospitality principles and American social expectations</li>
                  <li className="leading-relaxed">Menu development that bridges traditional techniques with regional preferences</li>
                </ul>
              </div>
            </div>
          </article>

          <article>
            <h3 className="text-xl font-semibold mb-3">Competitive Differentiation Matrix</h3>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="p-5 rounded-lg border border-white/10 bg-black/20">
                <h4 className="font-semibold mb-2">Unique Competitive Advantages</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li className="leading-relaxed">Established Community Credibility: Family business reputation with proven local relationships</li>
                  <li className="leading-relaxed">Proven Social Programming Success: Demonstrated capability through weekend music events</li>
                  <li className="leading-relaxed">Premium Quality Foundation: Existing culinary standards that support elevated positioning</li>
                  <li className="leading-relaxed">Flexible Space Utilization: Physical environment adaptable for multiple experience types</li>
                  <li className="leading-relaxed">Authentic Cultural Integration: Japanese expertise combined with genuine community connection</li>
                </ul>
              </div>
              <div className="p-5 rounded-lg border border-white/10 bg-black/20">
                <h4 className="font-semibold mb-2">Barriers to Competitive Replication</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li className="leading-relaxed">Multi-generational Business Relationships: Community trust built over extended time periods</li>
                  <li className="leading-relaxed">Cultural Expertise Combined with Local Knowledge: Unique intersection of Japanese culinary training and Central New Jersey market understanding</li>
                  <li className="leading-relaxed">Integrated Social Programming: Music events and community activities require sustained relationship building</li>
                  <li className="leading-relaxed">Physical Space Advantages: Existing infrastructure supporting both intimate dining and group events</li>
                </ul>
              </div>
            </div>
          </article>
          </div>
          )}
        </section>

        {/* Strategic Revenue Opportunities Section */}
        <section id="objectives" className="scroll-mt-20 p-6 md:p-10 mb-10 bg-black/50 backdrop-blur-sm rounded-xl border border-white/20">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">Five Strategic Revenue Opportunities</h2>
            <button
              onClick={() => toggleSection('opportunities')}
              className="text-[#b22222] hover:text-[#a01e1e] transition-colors"
            >
              {expandedSections.opportunities ? '▲' : '▼'}
            </button>
          </div>

          {expandedSections.opportunities && (
          <div>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Explore each opportunity for detailed market analysis, targeting approach, implementation recommendations, marketing strategy, and potential success indicators.
          </p>

          {/* Tab Navigation */}
          <div className="flex flex-wrap items-end gap-4 border-b border-white/20 mb-6">
            {opportunities.map((opp, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`py-2 px-3 transition-all duration-200 ${
                  activeTab === index
                    ? 'text-[#b22222] border-b-2 border-[#b22222] font-semibold'
                    : 'hover:text-[#b22222]'
                }`}
              >
                {opp.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="space-y-6">
            <article className="fade">
              <h3 className="text-xl font-semibold mb-4">Opportunity {activeTab + 1}: {opportunities[activeTab].title}</h3>
              {opportunities[activeTab].content}
            </article>
          </div>

          <div className="mt-8 p-6 bg-gray-800 rounded-lg border border-gray-700">
            <h4 className="font-semibold mb-3">Explore Detailed Strategy Review</h4>
            <p className="text-gray-300 mb-4">
              Access comprehensive strategy prioritization tool with 50 marketing initiatives across all 5 objectives, including implementation roadmap, portfolio composition, and detailed business cases.
            </p>
            <a
              href="/strategy-review"
              className="inline-block px-6 py-3 bg-[#b22222] text-white rounded-lg hover:bg-[#a01e1e] transition-colors font-semibold"
            >
              View Strategy Prioritization Tool →
            </a>
          </div>
          </div>
          )}
        </section>

        {/* Analysis/Social Media Strategy Section */}
        <section id="analysis" className="scroll-mt-20 p-6 md:p-10 mb-10 bg-black/50 backdrop-blur-sm rounded-xl border border-white/20">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">Social Media Messaging & Content Strategy</h2>
            <button
              onClick={() => toggleSection('analysis')}
              className="text-[#b22222] hover:text-[#a01e1e] transition-colors"
            >
              {expandedSections.analysis ? '▲' : '▼'}
            </button>
          </div>

          {expandedSections.analysis && (
          <div>
          <article className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Daily Posting Framework: Structured Content Strategy</h3>
            <p className="mb-4 leading-relaxed">
              Weekly Content Architecture for "Premium Sushi with Social Soul"
            </p>

            <div className="grid gap-4">
              <div className="p-4 rounded-lg border border-white/10 bg-black/20">
                <h4 className="font-semibold mb-2 text-[#b22222]">Monday: "Mastery Monday" - Behind-the-Scenes Excellence</h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <p><strong>Content Focus:</strong> Chef preparation, fish selection, rice preparation, knife skills</p>
                  <p><strong>Strategic Purpose:</strong> Establish technical authority while building customer appreciation</p>
                </div>
              </div>

              <div className="p-4 rounded-lg border border-white/10 bg-black/20">
                <h4 className="font-semibold mb-2 text-[#b22222]">Tuesday: "Technique Tuesday" - Educational Premium Positioning</h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <p><strong>Content Focus:</strong> Cooking techniques, preparation methods, ingredient knowledge</p>
                  <p><strong>Strategic Purpose:</strong> Premium positioning through accessible education</p>
                </div>
              </div>

              <div className="p-4 rounded-lg border border-white/10 bg-black/20">
                <h4 className="font-semibold mb-2 text-[#b22222]">Wednesday: "Wine & Sake Wednesday" - Beverage Program Showcase</h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <p><strong>Content Focus:</strong> Sake education, cocktail features, pairing recommendations</p>
                  <p><strong>Strategic Purpose:</strong> Increase beverage sales and position as beverage destination</p>
                </div>
              </div>

              <div className="p-4 rounded-lg border border-white/10 bg-black/20">
                <h4 className="font-semibold mb-2 text-[#b22222]">Thursday: "Thankful Thursday" - Community & Customer Celebration</h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <p><strong>Content Focus:</strong> Customer celebrations, community partnerships, staff appreciation</p>
                  <p><strong>Strategic Purpose:</strong> Build community connection and showcase relationship focus</p>
                </div>
              </div>

              <div className="p-4 rounded-lg border border-white/10 bg-black/20">
                <h4 className="font-semibold mb-2 text-[#b22222]">Friday: "Friday Energy" - Weekend Preparation & Social Atmosphere</h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <p><strong>Content Focus:</strong> Weekend preparation, social atmosphere, music event previews</p>
                  <p><strong>Strategic Purpose:</strong> Drive weekend traffic and establish social dining positioning</p>
                </div>
              </div>

              <div className="p-4 rounded-lg border border-white/10 bg-black/20">
                <h4 className="font-semibold mb-2 text-[#b22222]">Saturday: "Social Saturday" - Community Gathering & Celebration</h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <p><strong>Content Focus:</strong> Live event coverage, customer interactions, group celebrations</p>
                  <p><strong>Strategic Purpose:</strong> Showcase social dining experience and encourage sharing</p>
                </div>
              </div>

              <div className="p-4 rounded-lg border border-white/10 bg-black/20">
                <h4 className="font-semibold mb-2 text-[#b22222]">Sunday: "Sunday Preview" - Week Ahead & Planning</h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <p><strong>Content Focus:</strong> Weekly menu previews, upcoming events, seasonal announcements</p>
                  <p><strong>Strategic Purpose:</strong> Drive advance booking and maintain customer engagement</p>
                </div>
              </div>
            </div>
          </article>
          </div>
          )}
        </section>

        {/* Implementation Roadmap */}
        <section id="roadmap" className="scroll-mt-20 p-6 md:p-10 mb-10 bg-black/50 backdrop-blur-sm rounded-xl border border-white/20">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">Implementation Roadmap & Next Steps</h2>
            <button
              onClick={() => toggleSection('roadmap')}
              className="text-[#b22222] hover:text-[#a01e1e] transition-colors"
            >
              {expandedSections.roadmap ? '▲' : '▼'}
            </button>
          </div>

          {expandedSections.roadmap && (
          <div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-black/40 rounded-lg p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-[#b22222]">Phase 1: Foundation</h3>
              <p className="text-sm text-gray-400 mb-4">Months 1-3</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#b22222]">•</span>
                  <span>Community partnership establishment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#b22222]">•</span>
                  <span>Digital infrastructure optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#b22222]">•</span>
                  <span>Corporate outreach program launch</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#b22222]">•</span>
                  <span>Content framework implementation</span>
                </li>
              </ul>
            </div>

            <div className="bg-black/40 rounded-lg p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-[#b22222]">Phase 2: Program Launch</h3>
              <p className="text-sm text-gray-400 mb-4">Months 4-6</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#b22222]">•</span>
                  <span>Community event programming activation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#b22222]">•</span>
                  <span>Corporate services formalization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#b22222]">•</span>
                  <span>Premium takeout/delivery enhancement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#b22222]">•</span>
                  <span>Beverage program optimization</span>
                </li>
              </ul>
            </div>

            <div className="bg-black/40 rounded-lg p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-[#b22222]">Phase 3: Market Leadership</h3>
              <p className="text-sm text-gray-400 mb-4">Months 7-12</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#b22222]">•</span>
                  <span>Private event service expansion</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#b22222]">•</span>
                  <span>Premium catering program launch</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#b22222]">•</span>
                  <span>Market position consolidation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#b22222]">•</span>
                  <span>Performance measurement & optimization</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-[#b22222]/10 border border-[#b22222]/20 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3 text-[#b22222]">📊 Access Detailed Implementation Tools</h3>
            <p className="mb-4 text-gray-300">
              Review comprehensive strategy prioritization with 50 initiatives, interactive filtering, and detailed roadmap planning.
            </p>
            <a
              href="/strategy-review"
              className="inline-block px-6 py-3 bg-[#b22222] text-white rounded-lg hover:bg-[#a01e1e] transition-colors font-semibold"
            >
              Open Strategy Review Tool →
            </a>
          </div>
          </div>
          )}
        </section>
      </div>
    </main>
  );
}
