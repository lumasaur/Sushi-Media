'use client';

import { useState } from 'react';

export default function Home() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    approach: false,
    opportunities: false,
    analysis: false,
    roadmap: false,
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
      icon: "🏢",
      color: "blue",
      shortDesc: "Target businesses 20-200 employees within 3-mile radius",
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
      icon: "🎵",
      color: "orange",
      shortDesc: "Build on proven weekend music event success",
      content: (
        <p className="leading-relaxed text-gray-300">
          Building on proven weekend music event success to develop systematic community engagement programming that drives consistent mid-week and weekend traffic while strengthening neighborhood relationships and creating differentiated social dining experiences.
        </p>
      )
    },
    {
      title: "Enhanced Takeout & Delivery",
      icon: "📦",
      color: "green",
      shortDesc: "Premium takeout maintaining quality standards",
      content: (
        <p className="leading-relaxed text-gray-300">
          Premium takeout positioning that maintains quality standards while capturing convenience-oriented customer demand and expanding market reach beyond dine-in capacity constraints.
        </p>
      )
    },
    {
      title: "Weekend Social Events & Beverage Revenue",
      icon: "🍷",
      color: "purple",
      shortDesc: "Maximize per-customer revenue on weekends",
      content: (
        <p className="leading-relaxed text-gray-300">
          Systematic expansion of successful music event format combined with elevated beverage program to maximize per-customer revenue during peak weekend traffic periods.
        </p>
      )
    },
    {
      title: "Premium Catering & Private Events",
      icon: "🎉",
      color: "red",
      shortDesc: "High-margin private event services",
      content: (
        <p className="leading-relaxed text-gray-300">
          High-margin private event services leveraging upstairs space and culinary expertise to serve corporate celebrations and special occasions with premium positioning.
        </p>
      )
    }
  ];

  const brandPillars = [
    {
      icon: "🤝",
      title: "Community-Embedded Authenticity",
      color: "green",
      points: [
        "Family business credibility with multi-generational local presence",
        "Genuine community integration beyond transactional relationships",
        "Local sourcing partnerships and regional business network participation",
        "Authentic hospitality rooted in both Japanese service traditions and neighborhood values"
      ]
    },
    {
      icon: "⭐",
      title: "Premium Quality Accessibility",
      color: "yellow",
      points: [
        "Professional-grade culinary execution without intimidation factors",
        "Sophisticated ingredients and preparation techniques presented in approachable formats",
        "Education-focused service that enhances rather than excludes customer experience",
        "Price-value positioning that justifies premium without creating barriers"
      ]
    },
    {
      icon: "🎭",
      title: "Social Experience Engineering",
      color: "blue",
      points: [
        "Physical space design optimized for both intimate dining and group celebration",
        "Service protocols that facilitate conversation and connection",
        "Event programming that brings community together around shared experiences",
        "Technology integration that enhances rather than replaces human interaction"
      ]
    },
    {
      icon: "🌉",
      title: "Cultural Bridge Building",
      color: "purple",
      points: [
        "Japanese culinary traditions interpreted through local community lens",
        "Educational components that respect cultural authenticity while maintaining accessibility",
        "Service approach that honors both Japanese hospitality principles and American social expectations",
        "Menu development that bridges traditional techniques with regional preferences"
      ]
    }
  ];

  const contentPillars = [
    { icon: "🎯", title: "Mastery of Skills", desc: "Technical authority with accessibility" },
    { icon: "❤️", title: "Social Soul", desc: "Authentic community integration" },
    { icon: "👨‍👩‍👧‍👦", title: "About Us", desc: "Heritage authority building" },
    { icon: "🍣", title: "Highlighting Food", desc: "Premium accessibility balance" },
    { icon: "📢", title: "Information Updates", desc: "Community-focused communication" }
  ];

  const weeklyContent = [
    { day: "Mon", name: "Mastery Monday", icon: "🔪", focus: "Behind-the-Scenes Excellence", purpose: "Technical authority" },
    { day: "Tue", name: "Technique Tuesday", icon: "📚", focus: "Educational Premium", purpose: "Accessible education" },
    { day: "Wed", name: "Wine & Sake Wednesday", icon: "🍶", focus: "Beverage Program", purpose: "Increase beverage sales" },
    { day: "Thu", name: "Thankful Thursday", icon: "🙏", focus: "Community Celebration", purpose: "Build connections" },
    { day: "Fri", name: "Friday Energy", icon: "⚡", focus: "Weekend Preparation", purpose: "Drive weekend traffic" },
    { day: "Sat", name: "Social Saturday", icon: "🎉", focus: "Live Event Coverage", purpose: "Showcase experience" },
    { day: "Sun", name: "Sunday Preview", icon: "📅", focus: "Week Ahead Planning", purpose: "Advance booking" }
  ];

  const targetMarkets = [
    { icon: "💼", name: "Corporate Professionals", desc: "Business lunches, events, networking" },
    { icon: "👨‍👩‍👧‍👦", name: "Affluent Families", desc: "Special occasions, celebrations, takeout" },
    { icon: "🎵", name: "Social Enthusiasts", desc: "Weekend entertainment, music events" },
    { icon: "🏘️", name: "Community-Minded", desc: "Local supporters, charity events" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#120c0d] via-[#1a1416] to-[#120c0d] text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Visual Hero Section */}
        <section id="hero" className="relative mb-16">
          <div className="bg-gradient-to-br from-[#b22222]/20 via-[#8b0000]/10 to-transparent rounded-2xl p-8 md:p-12 border border-[#b22222]/30 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Ami Marketing Strategy
          </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-6 font-light">
                  Premium Sushi with Social Soul
                </p>
                <p className="text-base text-gray-400 max-w-2xl leading-relaxed">
                  Central New Jersey's premier social dining destination where premium Japanese cuisine quality meets authentic community connection.
              </p>
            </div>
              <div className="flex flex-wrap gap-3">
                {['Community-Embedded', 'Premium & Approachable', 'Social by Design', 'Cultural Bridge'].map((tag, i) => (
                  <span key={i} className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm border border-white/20 hover:bg-white/20 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Metrics Visual */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="bg-black/40 rounded-lg p-4 border border-white/10">
                <div className="text-2xl font-bold text-[#b22222] mb-1">5</div>
                <div className="text-xs text-gray-400">Revenue Opportunities</div>
              </div>
              <div className="bg-black/40 rounded-lg p-4 border border-white/10">
                <div className="text-2xl font-bold text-[#b22222] mb-1">50</div>
                <div className="text-xs text-gray-400">Marketing Initiatives</div>
              </div>
              <div className="bg-black/40 rounded-lg p-4 border border-white/10">
                <div className="text-2xl font-bold text-[#b22222] mb-1">3</div>
                <div className="text-xs text-gray-400">Implementation Phases</div>
              </div>
              <div className="bg-black/40 rounded-lg p-4 border border-white/10">
                <div className="text-2xl font-bold text-[#b22222] mb-1">12</div>
                <div className="text-xs text-gray-400">Month Timeline</div>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Brand Pillars */}
        <section id="brand-pillars" className="mb-16 scroll-mt-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Strategic Brand Pillars</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Four foundational principles that differentiate Ami Sushi in the market</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {brandPillars.map((pillar, index) => {
              const getColorClasses = (color: string) => {
                const classes: Record<string, { gradient: string; border: string; hoverBorder: string; shadow: string; iconBg: string }> = {
                  green: {
                    gradient: 'from-green-900/20',
                    border: 'border-green-500/30',
                    hoverBorder: 'hover:border-green-500/50',
                    shadow: 'hover:shadow-green-500/20',
                    iconBg: 'bg-green-500/20'
                  },
                  yellow: {
                    gradient: 'from-yellow-900/20',
                    border: 'border-yellow-500/30',
                    hoverBorder: 'hover:border-yellow-500/50',
                    shadow: 'hover:shadow-yellow-500/20',
                    iconBg: 'bg-yellow-500/20'
                  },
                  blue: {
                    gradient: 'from-blue-900/20',
                    border: 'border-blue-500/30',
                    hoverBorder: 'hover:border-blue-500/50',
                    shadow: 'hover:shadow-blue-500/20',
                    iconBg: 'bg-blue-500/20'
                  },
                  purple: {
                    gradient: 'from-purple-900/20',
                    border: 'border-purple-500/30',
                    hoverBorder: 'hover:border-purple-500/50',
                    shadow: 'hover:shadow-purple-500/20',
                    iconBg: 'bg-purple-500/20'
                  },
                };
                return classes[color] || classes.green;
              };
              const colors = getColorClasses(pillar.color);
              return (
              <div
                key={index}
                className={`bg-gradient-to-br ${colors.gradient} to-black/40 rounded-xl p-6 border ${colors.border} ${colors.hoverBorder} transition-all duration-300 hover:shadow-xl ${colors.shadow}`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`text-4xl ${colors.iconBg} rounded-full p-3`}>
                    {pillar.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{pillar.title}</h3>
                  </div>
              </div>
                <ul className="space-y-2 ml-16">
                  {pillar.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-[#b22222] mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              );
            })}
          </div>
        </section>

        {/* Visual Revenue Opportunities */}
        <section id="objectives" className="mb-16 scroll-mt-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Five Strategic Revenue Opportunities</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Explore each opportunity for detailed analysis and implementation recommendations</p>
          </div>

          {/* Visual Opportunity Cards */}
          <div className="grid md:grid-cols-5 gap-4 mb-8">
            {opportunities.map((opp, index) => {
              const colorMap: Record<string, string> = {
                blue: activeTab === index ? 'border-blue-500 bg-blue-900/30 shadow-lg shadow-blue-500/20' : '',
                orange: activeTab === index ? 'border-orange-500 bg-orange-900/30 shadow-lg shadow-orange-500/20' : '',
                green: activeTab === index ? 'border-green-500 bg-green-900/30 shadow-lg shadow-green-500/20' : '',
                purple: activeTab === index ? 'border-purple-500 bg-purple-900/30 shadow-lg shadow-purple-500/20' : '',
                red: activeTab === index ? 'border-red-500 bg-red-900/30 shadow-lg shadow-red-500/20' : '',
              };
              return (
              <button
                key={index}
                onClick={() => {
                  setActiveTab(index);
                  setExpandedSections(prev => ({ ...prev, opportunities: true }));
                }}
                className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                  activeTab === index
                    ? colorMap[opp.color] || 'border-gray-500 bg-gray-900/30'
                    : 'border-gray-700 bg-black/40 hover:border-gray-600 hover:bg-black/60'
                }`}
              >
                <div className="text-3xl mb-2">{opp.icon}</div>
                <h3 className="font-bold text-sm mb-2 line-clamp-2">{opp.title}</h3>
                <p className="text-xs text-gray-400 line-clamp-2">{opp.shortDesc}</p>
              </button>
              );
            })}
          </div>

          {/* Expanded Content */}
          {expandedSections.opportunities && (
            <div className="bg-black/50 backdrop-blur-sm rounded-xl border border-white/20 p-6 md:p-10 mb-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{opportunities[activeTab].icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold">Opportunity {activeTab + 1}: {opportunities[activeTab].title}</h3>
                    <p className="text-gray-400 text-sm">{opportunities[activeTab].shortDesc}</p>
                  </div>
                </div>
                <button
                  onClick={() => toggleSection('opportunities')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>
              <div className="space-y-6 animate-fadeIn">
              {opportunities[activeTab].content}
              </div>
          </div>
          )}

          <div className="bg-gradient-to-r from-[#b22222]/20 to-[#8b0000]/20 border-2 border-[#b22222] rounded-xl p-6 text-center">
            <h4 className="font-semibold mb-2 text-lg">Explore Detailed Strategy Review</h4>
            <p className="text-gray-300 mb-4 text-sm">
              50 marketing initiatives across all 5 objectives with implementation roadmap and detailed business cases
            </p>
            <a
              href="/strategy-review"
              className="inline-block px-8 py-3 bg-[#b22222] text-white rounded-lg hover:bg-[#a01e1e] transition-colors font-semibold"
            >
              View Strategy Prioritization Tool →
            </a>
          </div>
        </section>

        {/* Visual Content Strategy */}
        <section id="analysis" className="mb-16 scroll-mt-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Social Media Content Strategy</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Weekly Content Architecture for "Premium Sushi with Social Soul"</p>
          </div>

          {/* Content Pillars Visual */}
          <div className="grid grid-cols-5 gap-3 mb-8">
            {contentPillars.map((pillar, i) => (
              <div key={i} className="bg-black/40 rounded-lg p-3 border border-white/10 text-center hover:border-[#b22222]/50 transition-colors">
                <div className="text-2xl mb-2">{pillar.icon}</div>
                <div className="text-xs font-semibold mb-1">{pillar.title}</div>
                <div className="text-xs text-gray-400">{pillar.desc}</div>
                </div>
            ))}
              </div>

          {/* Weekly Content Calendar - Visual Timeline */}
          <div className="bg-black/50 backdrop-blur-sm rounded-xl border border-white/20 p-6 md:p-10">
            <h3 className="text-xl font-semibold mb-6 text-center">Daily Posting Framework</h3>
            <div className="grid md:grid-cols-7 gap-3">
              {weeklyContent.map((day, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800/50 to-black/50 rounded-lg p-4 border border-gray-700 hover:border-[#b22222]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#b22222]/20"
                >
                  <div className="text-center mb-3">
                    <div className="text-2xl mb-2">{day.icon}</div>
                    <div className="text-xs font-bold text-gray-400 mb-1">{day.day}</div>
                    <div className="text-sm font-semibold text-white mb-2">{day.name}</div>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div>
                      <div className="text-[#b22222] font-semibold mb-1">Focus:</div>
                      <div className="text-gray-300">{day.focus}</div>
                    </div>
                    <div>
                      <div className="text-[#b22222] font-semibold mb-1">Purpose:</div>
                      <div className="text-gray-400">{day.purpose}</div>
                </div>
              </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visual Market Positioning */}
        <section id="overview" className="mb-16 scroll-mt-20">
          <div className="bg-black/50 backdrop-blur-sm rounded-xl border border-white/20 p-6 md:p-10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl md:text-3xl font-bold">Market Positioning & Strategy</h2>
              <button
                onClick={() => toggleSection('approach')}
                className="text-[#b22222] hover:text-[#a01e1e] transition-colors text-2xl"
              >
                {expandedSections.approach ? '▲' : '▼'}
              </button>
              </div>

            {expandedSections.approach && (
              <div className="space-y-8 animate-fadeIn">
                {/* Target Markets Visual */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Target Market Segments</h3>
                  <div className="grid md:grid-cols-4 gap-4">
                    {targetMarkets.map((market, i) => (
                      <div key={i} className="bg-black/40 rounded-lg p-4 border border-white/10 text-center hover:border-[#b22222]/50 transition-colors">
                        <div className="text-3xl mb-2">{market.icon}</div>
                        <div className="font-semibold mb-1 text-sm">{market.name}</div>
                        <div className="text-xs text-gray-400">{market.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Value Proposition */}
                <div className="bg-gradient-to-r from-[#b22222]/20 to-transparent rounded-lg p-6 border border-[#b22222]/30">
                  <h3 className="text-xl font-semibold mb-3">Core Value Proposition</h3>
                  <p className="text-lg leading-relaxed mb-4">
                    Central New Jersey's premier social dining destination where premium Japanese cuisine quality meets authentic community connection, serving as both sophisticated celebration venue and neighborhood gathering place.
                  </p>
                  <div className="bg-black/40 rounded p-4 border border-white/10">
                    <div className="text-[#b22222] font-semibold mb-2">Differentiated Positioning:</div>
                    <div className="text-white font-semibold">"Premium Sushi with Social Soul"</div>
                    <div className="text-sm text-gray-400 mt-2">
                      The only restaurant in Central New Jersey delivering NYC-caliber Japanese cuisine within a community-embedded social environment.
                </div>
              </div>
                </div>

                {/* Competitive Advantages */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Competitive Advantages</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-900/20 rounded-lg p-5 border border-green-500/30">
                      <h4 className="font-semibold mb-3 text-green-300">Unique Advantages</h4>
                      <ul className="space-y-2 text-sm">
                        {[
                          "Established Community Credibility",
                          "Proven Social Programming Success",
                          "Premium Quality Foundation",
                          "Flexible Space Utilization",
                          "Authentic Cultural Integration"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-green-400">✓</span>
                            <span className="text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
              </div>
                    <div className="bg-amber-900/20 rounded-lg p-5 border border-amber-500/30">
                      <h4 className="font-semibold mb-3 text-amber-300">Replication Barriers</h4>
                      <ul className="space-y-2 text-sm">
                        {[
                          "Multi-generational Business Relationships",
                          "Cultural Expertise + Local Knowledge",
                          "Integrated Social Programming",
                          "Physical Space Advantages"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-amber-400">🛡️</span>
                            <span className="text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                </div>
              </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Visual Implementation Roadmap */}
        <section id="roadmap" className="mb-16 scroll-mt-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Implementation Roadmap</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Three-phase approach to market leadership</p>
          </div>

          <div className="bg-black/50 backdrop-blur-sm rounded-xl border border-white/20 p-6 md:p-10">
          <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Phase Timeline & Focus Areas</h3>
            <button
              onClick={() => toggleSection('roadmap')}
                className="text-[#b22222] hover:text-[#a01e1e] transition-colors text-2xl"
            >
              {expandedSections.roadmap ? '▲' : '▼'}
            </button>
          </div>

          {expandedSections.roadmap && (
              <div className="space-y-8 animate-fadeIn">
                {/* Visual Timeline */}
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-amber-500 to-blue-500 hidden md:block"></div>
                  
                  <div className="space-y-12 relative">
                    {/* Phase 1 */}
                    <div className="relative pl-0 md:pl-20">
                      <div className="absolute left-0 md:left-4 w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-2xl font-bold border-4 border-black z-10">
                        1
                      </div>
                      <div className="bg-green-900/20 rounded-xl p-6 border-2 border-green-500/50 ml-0 md:ml-8">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-2xl font-bold text-green-300">Phase 1: Foundation</h3>
                          <span className="text-sm text-gray-400 bg-black/40 px-3 py-1 rounded-full">Months 1-3</span>
                        </div>
                        <div className="grid md:grid-cols-2 gap-3">
                          {[
                            "Community partnership establishment",
                            "Digital infrastructure optimization",
                            "Corporate outreach program launch",
                            "Content framework implementation"
                          ].map((item, i) => (
                            <div key={i} className="flex items-start gap-2 text-sm text-gray-300">
                              <span className="text-green-400 mt-1">•</span>
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
            </div>

                    {/* Phase 2 */}
                    <div className="relative pl-0 md:pl-20">
                      <div className="absolute left-0 md:left-4 w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center text-2xl font-bold border-4 border-black z-10">
                        2
                      </div>
                      <div className="bg-amber-900/20 rounded-xl p-6 border-2 border-amber-500/50 ml-0 md:ml-8">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-2xl font-bold text-amber-300">Phase 2: Program Launch</h3>
                          <span className="text-sm text-gray-400 bg-black/40 px-3 py-1 rounded-full">Months 4-6</span>
                        </div>
                        <div className="grid md:grid-cols-2 gap-3">
                          {[
                            "Community event programming activation",
                            "Corporate services formalization",
                            "Premium takeout/delivery enhancement",
                            "Beverage program optimization"
                          ].map((item, i) => (
                            <div key={i} className="flex items-start gap-2 text-sm text-gray-300">
                              <span className="text-amber-400 mt-1">•</span>
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
            </div>

                    {/* Phase 3 */}
                    <div className="relative pl-0 md:pl-20">
                      <div className="absolute left-0 md:left-4 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold border-4 border-black z-10">
                        3
                      </div>
                      <div className="bg-blue-900/20 rounded-xl p-6 border-2 border-blue-500/50 ml-0 md:ml-8">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-2xl font-bold text-blue-300">Phase 3: Market Leadership</h3>
                          <span className="text-sm text-gray-400 bg-black/40 px-3 py-1 rounded-full">Months 7-12</span>
                        </div>
                        <div className="grid md:grid-cols-2 gap-3">
                          {[
                            "Private event service expansion",
                            "Premium catering program launch",
                            "Market position consolidation",
                            "Performance measurement & optimization"
                          ].map((item, i) => (
                            <div key={i} className="flex items-start gap-2 text-sm text-gray-300">
                              <span className="text-blue-400 mt-1">•</span>
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
            </div>
          </div>

                <div className="bg-gradient-to-r from-[#b22222]/20 to-[#8b0000]/20 border-2 border-[#b22222] rounded-xl p-6 text-center">
                  <h4 className="text-lg font-semibold mb-3 text-[#b22222]">📊 Access Detailed Implementation Tools</h4>
                  <p className="mb-4 text-gray-300 text-sm">
              Review comprehensive strategy prioritization with 50 initiatives, interactive filtering, and detailed roadmap planning.
            </p>
            <a
              href="/strategy-review"
                    className="inline-block px-8 py-3 bg-[#b22222] text-white rounded-lg hover:bg-[#a01e1e] transition-colors font-semibold"
            >
              Open Strategy Review Tool →
            </a>
          </div>
          </div>
          )}
          </div>
        </section>
      </div>
    </main>
  );
}
