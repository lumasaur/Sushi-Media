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
  layout?: 'title' | 'content' | 'cta' | 'timeline' | 'systems' | 'two-column' | 'calendar' | 'metrics'  // Hint for rendering pattern
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
}

export const sections = [
  { id: 'intro', name: 'Introduction', slides: [0] },
  { id: 'systems', name: 'Three Systems', slides: [1, 2, 3, 4, 5, 6] },  // Opportunity + Overview + What Changes + 3 system deep dives
  { id: 'execution', name: 'Execution', slides: [7, 8, 9, 10] }     // Timeline + February + Tracking + Next Steps
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
    bullets: [],
    background: 'bg-gradient-to-b from-sumi to-sumi-deep',
    layout: 'title'
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
    background: 'bg-gradient-to-b from-sumi to-sumi-light',
    layout: 'content'
  },

  // Slide 2: Three Systems We're Building
  {
    id: 2,
    section: 'systems',
    title: 'Three Systems We\'re Building',
    subtitle: 'Each reinforces the others — a revenue flywheel',
    bullets: [
      {
        main: 'Social Media Engine',
        sub: [
          'We control this completely',
          'Starts immediately, costs nothing',
          'Drives all other initiatives through consistent promotion',
          'Timeline: Operational this week'
        ]
      },
      {
        main: 'Corporate Lunch Pipeline',
        sub: [
          'Group ordering + direct outreach to office complexes',
          'Fills lunch hours with recurring revenue',
          'Timeline: Outreach starts week 2'
        ]
      },
      {
        main: 'Weekday Bar Activation',
        sub: [
          'Happy hour + event programming',
          'Fills weekday evening capacity',
          'Timeline: Test programming month 1-2'
        ]
      }
    ],
    background: 'bg-premium-dark',
    layout: 'systems'
  },

  // Slide 3: What Changes, What Doesn't
  {
    id: 3,
    section: 'systems',
    title: 'What Changes, What Doesn\'t',
    subtitle: 'Preserving what works, adding what\'s missing',
    bullets: [],
    background: 'bg-gradient-to-b from-sumi to-sumi-light',
    layout: 'two-column',
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
        'Systematic marketing (vs. ad hoc posting)',
        'Corporate outreach (vs. waiting for walk-ins)',
        'Weekday programming (vs. hoping for traffic)'
      ]
    }
  },

  // Slide 4: Social Media - First Priority
  {
    id: 4,
    section: 'systems',
    title: 'Social Media Engine',
    subtitle: 'First priority — we control it completely',
    bullets: [
      {
        main: 'Why First:',
        sub: [
          'Zero cost to implement',
          'Foundation for all other initiatives',
          'Can start today'
        ]
      },
      {
        main: 'The System:',
        sub: [
          'Structured content calendar (5 pillars)',
          'Consistent posting schedule (4-6x/week)',
          'Event promotion (2-week cycle)',
          'Partner amplification (DJs, artists share to their networks)'
        ]
      },
      {
        main: 'Your Role:',
        sub: [
          'Content capture opportunities through your network',
          'Event promotion through your connections',
          'Partnership activation'
        ]
      }
    ],
    background: 'bg-gradient-to-b from-sumi to-sumi-light',
    layout: 'content',
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
    background: 'bg-gradient-to-b from-sumi to-sumi-light',
    layout: 'content',
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
          'Requires programming coordination',
          'Builds on January event success',
          'Tests different customer segments'
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
    background: 'bg-gradient-to-b from-sumi to-sumi-light',
    layout: 'content',
    miniStoryLink: 'weekday-bar'
  },

  // Slide 7: First 30 Days Timeline
  {
    id: 7,
    section: 'execution',
    title: 'First 30 Days',
    subtitle: 'Execution Calendar',
    bullets: [
      {
        main: 'Week 1:',
        sub: [
          'Social media batch content creation session',
          'Schedule 2 weeks of posts in Meta Business Suite',
          'Enable Toast group ordering',
          'Create office complex target list'
        ]
      },
      {
        main: 'Week 2-3:',
        sub: [
          'Daily Stories routine established',
          'Corporate warm intro outreach (3-5 contacts)',
          'First event promotion cycle (2-week timeline)',
          'DoorDash Business account setup'
        ]
      },
      {
        main: 'Week 4:',
        sub: [
          'Performance review: What\'s working?',
          'First corporate sample deliveries',
          'Event attendance tracking begins',
          'Adjust and iterate based on data'
        ]
      }
    ],
    background: 'bg-deepIndigo',
    layout: 'timeline'
  },

  // Slide 8: February 2026 Programming
  {
    id: 8,
    section: 'execution',
    title: 'February 2026 Programming',
    subtitle: '13 events validating the model',
    bullets: [
      '4 Mix & Mingle Thursdays (including Galentine\'s theme)',
      '1 Tech Tuesday (new monthly program)',
      '1 Super Bowl watch party (biggest revenue event)',
      '1 Lunar New Year celebration',
      '2 DJ Nights (including Valentine\'s Day)',
      '1 Broadway Tunes + Mix & Mingle combo',
      '1 Sake Brand Takeover education event',
      '1 Friday Night Knicks viewing party',
      '1 Whole Tuna Demo (maybe)'
    ],
    background: 'bg-gradient-to-b from-sumi to-sumi-light',
    layout: 'calendar'
  },

  // Slide 9: How We Track Success
  {
    id: 9,
    section: 'execution',
    title: 'How We Track Success',
    subtitle: 'Simple dashboard approach',
    bullets: [
      'Weekly 5-minute check-ins',
      'Monthly 15-minute reviews',
      'Data-driven adjustments, not guessing'
    ],
    background: 'bg-gradient-to-b from-sumi to-sumi-light',
    layout: 'metrics'
  },

  // Slide 10: Next Steps CTA
  {
    id: 10,
    section: 'execution',
    title: 'Next Steps',
    subtitle: 'Three Systems. One Strategy. Ready to Execute.',
    bullets: [],
    background: 'bg-gradient-to-b from-sumi to-sumi-light',
    layout: 'cta',
    ctas: [
      {
        label: 'Discuss Strategy',
        description: 'Schedule conversation with stakeholders',
        href: '#contact',
        primary: true
      },
      {
        label: 'Review Tactical Plan',
        description: 'Dive into implementation details',
        href: '/strategy-review/implementation-proposal',
        primary: false
      }
    ]
  }
]
