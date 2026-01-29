/**
 * Centralized slide content structure for Ami Sushi presentation
 *
 * This file defines the complete 10-slide main story following PRESENTATION-STRUCTURE.md:
 * 0. Title slide - Premium positioning
 * 1. The Opportunity - Current state and untapped revenue
 * 2. Three Systems We're Building - Overview with flywheel subtitle
 * 3. What Changes, What Doesn't - Two-column layout
 * 4. Social Media Engine - First priority with mini-story link
 * 5. Corporate Lunch Machine - Second priority with mini-story link
 * 6. Weekday Bar Activation - Third priority with mini-story link (added in Task 2)
 * 7. First 30 Days - Execution calendar
 * 8. February 2026 Programming - Calendar view (to be added)
 * 9. How We Track Success - Metrics dashboard (to be added)
 * 10. Next Steps - CTAs (currently slide 7, will become 10)
 */

import type { BentoItem } from '@/components/presentation/layouts'

/**
 * Image asset mapping for slides
 * All images optimized and stored in public/images/ directory
 */
export const slideImages = {
  title: '/images/hero/sushi-platter.png',
  opportunity: '/images/main-story/empty-space.png',
  socialMedia: '/images/main-story/smartphone-insta.png',
  corporateLunch: '/images/main-story/office-park.png',
  weekdayBar: '/images/main-story/bar-patrons.png',
  // Mini-story images
  happyHour: '/images/mini-story/happy-hour.png',
  mixMingle: '/images/mini-story/mix-mingle.png',
  metaInsights: '/images/mini-story/meta-insights.png'
}

export interface Week {
  title: string
  items: string[]
}

export interface SystemData {
  icon: 'users' | 'calendar' | 'trending'
  title: string
  description: string
}

export interface SlideData {
  id: number
  section: string
  title: string
  subtitle?: string
  bullets: Array<string | { main: string; sub: string[] }>
  background?: string  // Tailwind class like 'bg-sumi'
  layout?: 'title' | 'content' | 'cta' | 'timeline' | 'systems' | 'two-column' | 'calendar' | 'metrics'
  | 'fullBleed' | 'asymmetric' | 'bento' | 'centered' | 'imageBackground'  // New layout types
  ctas?: Array<{
    label: string
    description: string
    href: string
    primary: boolean
  }>
  miniStoryLink?: 'social-media' | 'corporate-lunch' | 'weekday-bar'  // Link to mini-story deep dive
  twoColumns?: {
    leftTitle: string
    leftItems: string[]
    rightTitle: string
    rightItems: string[]
  }

  // New optional fields for layout-specific data
  imageSrc?: string
  imageAlt?: string
  imagePosition?: 'left' | 'right'
  splitRatio?: '60-40' | '70-30' | '50-50' | '40-60'
  overlayType?: 'gradient-bottom' | 'gradient-left' | 'full-dark' | 'blur-bottom'
  overlayOpacity?: number
  textPosition?: 'center' | 'bottom-left' | 'bottom-center' | 'top-center'
  titleSize?: 'xl' | '2xl' | '3xl'
  contentPosition?: 'center' | 'left' | 'right' | 'bottom'
  overlayIntensity?: 'light' | 'medium' | 'heavy'
  accentText?: string
  textColor?: 'light' | 'dark'
  bentoItems?: BentoItem[]
  bentoColumns?: 2 | 3 | 4
  bentoGap?: 'tight' | 'normal' | 'loose'
  dateTokens?: {
    weekly: string
    monthly: string
  }
}

export const sections = [
  { id: 'intro', name: 'Introduction', slides: [0] },
  { id: 'systems', name: 'Three Systems', slides: [1, 2, 3, 4, 5, 6] },  // Opportunity + Overview + What Changes + 3 system deep dives
  { id: 'execution', name: 'Execution', slides: [7, 8, 9, 10, 11] }     // Timeline + February + Future + Operating + Next Steps
]


export const systemsData: SystemData[] = [
  {
    icon: 'users',
    title: 'Social Media Engine',
    description: 'We control this completely - starts immediately, costs nothing'
  },
  {
    icon: 'calendar',
    title: 'Corporate Lunch Pipeline',
    description: 'Group ordering + direct outreach to office complexes'
  },
  {
    icon: 'trending',
    title: 'Weekday Bar Activation',
    description: 'Happy hour + event programming'
  }
]

export const timelineData: Week[] = [
  {
    title: 'Week 1',
    items: ['Social media batch content creation session', 'Schedule 2 weeks of posts in Meta Business Suite', 'Enable Toast group ordering', 'Create office complex target list']
  },
  {
    title: 'Week 2-3',
    items: ['Daily Stories routine established', 'Corporate warm intro outreach (3-5 contacts)', 'First event promotion cycle (2-week timeline)', 'DoorDash Business account setup']
  },
  {
    title: 'Week 4',
    items: ['Performance review: What\'s working?', 'First corporate sample deliveries', 'Event attendance tracking begins', 'Adjust and iterate based on data']
  }
]

export interface FebruaryEvent {
  count: number
  type: string
}

export const februaryEventsData: FebruaryEvent[] = [
  { count: 4, type: 'Mix & Mingle Thursdays (including Galentine\'s theme)' },
  { count: 1, type: 'Tech Tuesday (new monthly program)' },
  { count: 1, type: 'Super Bowl watch party (biggest revenue event)' },
  { count: 1, type: 'Lunar New Year celebration' },
  { count: 2, type: 'DJ Nights (including Valentine\'s Day)' },
  { count: 1, type: 'Broadway Tunes + Mix & Mingle combo' },
  { count: 1, type: 'Sake Brand Takeover education event' },
  { count: 1, type: 'Friday Night Knicks viewing party' },
  { count: 1, type: 'Whole Tuna Demo (maybe)' }
]

export const februaryRevenueTarget = '$25K-35K from events alone'

export interface MetricCategory {
  system: string
  metrics: string[]
}

export const metricsData: MetricCategory[] = [
  {
    system: 'Social Media',
    metrics: [
      'Reach and engagement trends',
      'Event post performance',
      'Follower growth'
    ]
  },
  {
    system: 'Corporate Lunch',
    metrics: [
      'Daily lunch cover count',
      'Corporate accounts established',
      'Recurring order frequency'
    ]
  },
  {
    system: 'Weekday Bar',
    metrics: [
      'Event attendance vs. target',
      'Bar revenue: event nights vs. normal nights',
      'Customer retention'
    ]
  }
]

export const slides: SlideData[] = [
  // Slide 0: Title
  {
    id: 0,
    section: 'intro',
    title: 'Premium Sushi with Social Soul',
    subtitle: 'Ami Sushi',
    bullets: [],
    layout: 'fullBleed',
    imageSrc: '/images/hero/sushi-platter.png',
    imageAlt: 'Premium sushi platter showcasing fresh nigiri and rolls',
    overlayOpacity: 0.6,
    textPosition: 'top-center' // Title raised to 30% from top, above sushi plate
  },

  // Slide 1: The Opportunity
  {
    id: 1,
    section: 'systems',
    title: 'The Opportunity',
    subtitle: 'Where we are today',
    bullets: [
      'Weekends are busy',
      'Dinner service works well',
      'BUT: Lunch hours and weekday bar times are underutilized',
      'Short window of profitability means leaving money on the table',
      {
        main: 'The Opportunity:',
        sub: [
          'Fill empty hours without changing what works',
          'Systematic approach to capturing untapped revenue',
          'Low-cost execution using existing infrastructure'
        ]
      }
    ],
    layout: 'imageBackground',
    imageSrc: '/images/main-story/empty-space.png',
    imageAlt: 'Empty restaurant seating during off-peak hours',
    overlayType: 'blur-bottom', // Changed to blur-bottom or we might need a custom Type for "blur box"
    overlayIntensity: 'heavy',
    contentPosition: 'center', // Changed to center, layout component will need to handle the box
    accentText: 'blur-box' // Signal to component to use the blur box style
  },

  // Slide 2: Three Systems We're Building
  {
    id: 2,
    section: 'systems',
    title: 'Three Systems We\'re Building',
    subtitle: 'A unified strategy to capture untapped revenue',
    bullets: [
      {
        main: 'Social Media Engine',
        sub: [
          'The megaphone that drives awareness',
          'Objective: Build an audience we own',
          'Why: Consistent visibility fills seats'
        ]
      },
      {
        main: 'Corporate Lunch Pipeline',
        sub: [
          'The recurring revenue machine',
          'Objective: Lock in predictable weekday sales',
          'Why: Leverages local density & office demand'
        ]
      },
      {
        main: 'Weekday Bar Activation',
        sub: [
          'The atmosphere builder',
          'Objective: Create magnetic evening vibes',
          'Why: Transforms "slow nights" into destinations'
        ]
      }
    ],
    background: 'bg-premium-dark',
    layout: 'systems',
    textPosition: 'center'
  },

  // Slide 3: What Changes, What Doesn't
  {
    id: 3,
    section: 'systems',
    title: 'What Changes, What Doesn\'t',
    subtitle: 'Evolution, not revolution',
    bullets: [],
    background: 'bg-gradient-to-b from-sumi to-sumi-light',
    layout: 'two-column',
    textPosition: 'center',
    twoColumns: {
      leftTitle: 'What Stays the Same',
      leftItems: [
        'Space and hours',
        'Core menu and quality standards',
        'Weekend success model',
        'Family business values'
      ],
      rightTitle: 'What\'s New',
      rightItems: [
        'Systematic vs. Ad-hoc Marketing',
        'Proactive vs. Passive Sales',
        'Programmed vs. Random Evenings',
        'Data-driven vs. Intuition-based'
      ]
    }
  },

  // Slide 4: Social Media - First Priority
  {
    id: 4,
    section: 'systems',
    title: 'Social Media Engine',
    subtitle: 'First priority — getting people in the door',
    bullets: [
      {
        main: 'Why First:',
        sub: [
          'Immediate impact on visibility',
          'Foundation for all other initiatives',
          'Can start today'
        ]
      },
      {
        main: 'The Strategy:',
        sub: [
          'Brand Direction: We work with Andreia',
          'She provides the visual identity & vibe',
          'We build the plan & messages (AI-assisted)',
          'Consistent, high-quality output'
        ]
      },
      {
        main: 'Why It Will Work:',
        sub: [
          'Strong existing network foundation',
          'Access to new outlets via Andreia',
          'Product is already premium—just needs amplification'
        ]
      }
    ],
    layout: 'asymmetric',
    imageSrc: '/images/main-story/smartphone-insta.png',
    imageAlt: 'Smartphone showing Instagram post of sushi',
    imagePosition: 'left',
    splitRatio: '40-60',
    contentPosition: 'center',
    miniStoryLink: 'social-media'
  },

  // Slide 5: Corporate Lunch - Second Priority
  {
    id: 5,
    section: 'systems',
    title: 'Corporate Lunch Machine',
    subtitle: 'Second priority — clear demand, your network enables it',
    bullets: [
      {
        main: 'Why Second:',
        sub: [
          'Clear demand (office parks within 3 miles)',
          'Fills specific empty hours (11:30am-1:30pm weekdays)',
          'Your sales network enables warm introductions'
        ]
      },
      {
        main: 'The System:',
        sub: [
          'Group ordering platforms (Toast, DoorDash, ezCater)',
          'Direct outreach to office managers',
          'Sample deliveries for conversion',
          'Corporate account management'
        ]
      },
      {
        main: 'Target:',
        sub: [
          '3-5 buildings with weekly standing orders',
          '40-60 additional lunch covers per week',
          'Recurring revenue stream'
        ]
      }
    ],
    layout: 'asymmetric',
    imageSrc: '/images/main-story/office-park.png',
    imageAlt: 'Modern office park buildings',
    imagePosition: 'right',
    splitRatio: '50-50',
    contentPosition: 'center',
    miniStoryLink: 'corporate-lunch'
  },

  // Slide 6: Weekday Bar - Third Priority
  {
    id: 6,
    section: 'systems',
    title: 'Weekday Bar Activation',
    subtitle: 'Third priority — builds on January event success',
    bullets: [
      {
        main: 'Why Third:',
        sub: [
          'Creates the "Vibe" that drives return visits',
          'Gives people a reason to come back',
          'Builds community beyond just food'
        ]
      },
      {
        main: 'The System:',
        sub: [
          'Mix & Mingle (Every Thursday)',
          'Monthly recurring events (Broadway Tunes, DJ Nights)',
          'Special programming (cultural celebrations, sports viewing)',
          'Strategic calendar planning'
        ]
      },
      {
        main: 'What\'s Already Working:',
        sub: [
          'January calendar validated demand',
          'Social Hour menu operational',
          'Ami Sushi Lounge positioning established'
        ]
      }
    ],
    layout: 'asymmetric',
    imageSrc: '/images/main-story/bar-patrons.png',
    imageAlt: 'Warm atmosphere with bar patrons enjoying drinks',
    imagePosition: 'left',
    splitRatio: '40-60',
    contentPosition: 'center',
    miniStoryLink: 'weekday-bar'
  },

  // Slide 7: Execution Roadmap (formerly First 30 Days)
  {
    id: 7,
    section: 'execution',
    title: 'Execution Roadmap',
    subtitle: 'Three phases to sustained growth',
    bullets: [
      {
        main: 'Phase 1: Setup & Creation',
        sub: [
          'Strategy Alignment: Define branding & voice with Andreia',
          'Production: Master Schedule created (2-3 months out)',
          'Deadline: Finalized 2 weeks prior to month start',
          'Sales: Build office target lists & enable group ordering'
        ]
      },
      {
        main: 'Phase 2: Launch & Learn',
        sub: [
          'Marketing: Daily stories & targeted posts begin',
          'Sales: Corporate warm intros & sample runs',
          'Events: February programming execution',
          'Ops: DoorDash Business setup'
        ]
      },
      {
        main: 'Phase 3: Optimize & Scale',
        sub: [
          'Review: Performance data breakdown',
          'Refine: Adjust event mix based on attendance',
          'Expand: Add new corporate partners',
          'Routine: Monthly planning cycle operational'
        ]
      }
    ],
    background: 'bg-deepIndigo',
    layout: 'timeline'
  },

  // Slide 8: Feb 2026 Programming Sample
  {
    id: 8,
    section: 'execution',
    title: 'Sample Feb 2026 Programming',
    subtitle: 'Strategic mix of recurring & special events',
    bullets: [
      'Mix & Mingle Thursdays: The consistent weekly anchor',
      'Tech Tuesday: New industry-specific monthly pilot',
      'Super Bowl Watch Party: High-revenue tentpole event',
      'Lunar New Year & Valentine\'s: Cultural & seasonal captures',
      'Friday Night Knicks: Low-lift sports viewing',
      'Sake Education: Brand partnership activation'
    ],
    background: 'bg-gradient-to-b from-sumi to-sumi-light',
    layout: 'calendar',
    contentPosition: 'right' // Move content to right, image to left
  },

  // Slide 9: Future Programming (New Slide)
  {
    id: 9,
    section: 'execution',
    title: 'Future Programming',
    subtitle: 'Capturing seasonality and culture',
    bullets: [],
    layout: 'bento',
    bentoColumns: 3,
    bentoItems: [
      {
        type: 'text',
        title: 'March',
        description: 'March Madness viewing parties, St. Patrick\'s delivery specials, Spring menu teaser',
        size: 'medium'
      },
      {
        type: 'text',
        title: 'April',
        description: 'Cherry Blossom festival tie-ins, Tax Day relief specials, Outdoor patio launch party',
        size: 'medium'
      },
      {
        type: 'text',
        title: 'May',
        description: 'Cinco de Mayo fusion event, Mother\'s Day brunch/lunch focus, Memorial Day weekend kickoff',
        size: 'medium'
      }
    ],
    background: 'bg-premium-dark'
  },

  // Slide 10: How We Operate (formerly Metrics)
  {
    id: 10,
    section: 'execution',
    title: 'How We Will Operate',
    subtitle: 'Data-driven decision making',
    bullets: [
      'Leverage Toast POS analytics for deep insights',
      'Analyze dish performance & profitability',
      'Review event impact on overall business trends',
      'Adjust strategy based on real sales data'
    ],
    background: 'bg-gradient-to-b from-sumi to-sumi-light',
    layout: 'metrics',
    // "Double the times provided" -> assuming referring to meeting cadence
    dateTokens: {
      weekly: '10-minute check-ins* (Suggested)',
      monthly: '30-minute reviews* (Suggested)'
    }
  },

  // Slide 11: Next Steps & Playbooks
  {
    id: 11,
    section: 'execution',
    title: 'Next Steps',
    subtitle: 'Ready to Execute',
    bullets: [],
    layout: 'centered',
    background: 'bg-premium-dark',
    ctas: [
      {
        label: 'Discuss Strategy',
        description: 'Schedule conversation',
        href: '#contact',
        primary: true
      },
      {
        label: 'Social Media Playbook',
        description: 'Deep dive strategy',
        href: '/presentation/social-media',
        primary: false
      },
      {
        label: 'Corporate Lunch Playbook',
        description: 'Operations detail',
        href: '/presentation/corporate-lunch',
        primary: false
      },
      {
        label: 'Weekday Bar Playbook',
        description: 'Event plans',
        href: '/presentation/weekday-bar',
        primary: false
      }
    ]
  }
]
