/**
 * Mini Story 3: Weekday Bar Activation
 *
 * Deep dive into the third system - builds on January event success.
 * 7 slides per PRESENTATION-STRUCTURE.md.
 */

export interface MiniSlideData {
  id: number
  title: string
  subtitle?: string
  bullets: Array<string | { main: string; sub: string[] }>
  background?: string
  layout?: 'content' | 'title'
}

export const weekdayBarSlides: MiniSlideData[] = [
  // Slide 3.1: January Foundation - What's Working
  {
    id: 0,
    title: 'January Foundation',
    subtitle: 'What\'s working already',
    bullets: [
      {
        main: 'Mix & Mingle Format:',
        sub: [
          'Every Thursday event structure',
          '$20 entry creates premium positioning',
          'Consistent schedule builds expectations'
        ]
      },
      {
        main: 'Social Hour Menu:',
        sub: [
          '$8 signature snacks (accessible premium)',
          'Drink specials drive bar revenue',
          'Menu tested and operational'
        ]
      },
      {
        main: '"Ami Sushi Lounge" Positioning:',
        sub: [
          'Bar transforms into social venue',
          'Different identity from dinner service',
          'Attracts new customer segment'
        ]
      }
    ],
    background: 'bg-gradient-to-b from-sumi to-sumi-light',
    layout: 'content'
  },

  // Slide 3.2: February 2026 Full Calendar
  {
    id: 1,
    title: 'February 2026 Full Calendar',
    subtitle: '12-13 events validating the model',
    bullets: [
      {
        main: 'Recurring Programs:',
        sub: [
          '4 Mix & Mingle Thursdays',
          '1 Tech Tuesday (first Tuesday)',
          '2 DJ Nights (bi-weekly Saturdays)',
          '1 Broadway Tunes + Mix & Mingle combo'
        ]
      },
      {
        main: 'Special Events:',
        sub: [
          'Super Bowl LX (Feb 8) - biggest revenue event',
          'Lunar New Year (Feb 17)',
          'Galentine\'s Day (Feb 12)',
          'Sake Brand Takeover (Feb 18)',
          'Friday Night Knicks (Feb 20)',
          'Whole Tuna Demo (maybe)'
        ]
      },
'Total: 12-13 events testing different formats and customer segments'
    ],
    background: 'bg-gradient-to-b from-sumi to-sumi-light',
    layout: 'content'
  },

  // Slide 3.3: Recurring Event Programming
  {
    id: 2,
    title: 'Recurring Event Programming',
    subtitle: 'Building predictable weekday traffic',
    bullets: [
      {
        main: 'Mix & Mingle (Every Thursday):',
        sub: [
          'Anchor weekly program',
          '$20 entry with premium snacks',
          'Different themes each week (Galentine\'s, Broadway pairing)',
          'Builds Thursday habit'
        ]
      },
      {
        main: 'Tech Tuesday (First Tuesday):',
        sub: [
          'New monthly program launching February',
          'Targets local tech/startup community',
          'Lower barrier to entry than Thursday events'
        ]
      },
      {
        main: 'Broadway Tunes (Monthly):',
        sub: [
          'Niche event with dedicated audience',
          'Can pair with Mix & Mingle for dual appeal',
          'Cultural positioning'
        ]
      },
      {
        main: 'DJ Nights (Bi-weekly Saturdays):',
        sub: [
          'Weekend bar activation',
          'Builds on weekday momentum',
          'Valentine\'s Day special edition'
        ]
      }
    ],
    background: 'bg-gradient-to-b from-sumi to-sumi-light',
    layout: 'content'
  },

  // Slide 3.4: Special February Events
  {
    id: 3,
    title: 'Special February Events',
    subtitle: 'One-time programming testing demand',
    bullets: [
      {
        main: 'Super Bowl LX (Feb 8):',
        sub: [
          'Biggest revenue event of the month',
          '$8K-12K target',
          'Capacity stress test',
          'Watch party format validation'
        ]
      },
      {
        main: 'Lunar New Year (Feb 17):',
        sub: [
          'Cultural celebration aligns with brand',
          'Special menu items',
          'Family and community focus'
        ]
      },
      {
        main: 'Galentine\'s Day (Feb 12):',
        sub: [
          'Mix & Mingle with Valentine\'s theme',
          '$30 special pricing',
          'Targets female friend groups'
        ]
      },
      {
        main: 'Sake Brand Takeover (Feb 18):',
        sub: [
          'Education event with partner brand',
          'Premium positioning',
          'Sake knowledge as attraction'
        ]
      },
      {
        main: 'Friday Night Knicks (Feb 20):',
        sub: [
          'Sports viewing test',
          'Different format from Super Bowl',
          'Local team loyalty play'
        ]
      }
    ],
    background: 'bg-gradient-to-b from-sumi to-sumi-light',
    layout: 'content'
  },

  // Slide 3.5: Updated Social Hour Menu & Pricing
  {
    id: 4,
    title: 'Social Hour Menu & Pricing',
    subtitle: 'Accessible premium model',
    bullets: [
      {
        main: '$8 Signature Snacks:',
        sub: [
          'Premium quality at accessible price point',
          'Shareables encourage social interaction',
          'Bar revenue focus (food drives drinks)'
        ]
      },
      {
        main: 'Social Sips Pricing:',
        sub: [
          'Drink specials drive bar traffic',
          'Competitive with casual dining',
          'Premium cocktails remain full price'
        ]
      },
      {
        main: 'Event Entry Pricing:',
        sub: [
          '$20 Mix & Mingle standard',
          '$30 Galentine\'s Special',
          'Entry includes snacks, creates commitment'
        ]
      },
      {
        main: 'Strategy: Low barrier to entry, high value perception'
      }
    ],
    background: 'bg-gradient-to-b from-sumi to-sumi-light',
    layout: 'content'
  },

  // Slide 3.6: Event Marketing Timeline
  {
    id: 5,
    title: 'Event Marketing Timeline',
    subtitle: 'Standard promotion cycle',
    bullets: [
      {
        main: 'Standard Events (10-14 day cycle):',
        sub: [
          'Day 1: Event announced on social',
          'Day 3-5: Second wave promotion',
          'Day 7: One week reminder',
          'Day 10-12: Final push',
          'Day of: Real-time Stories coverage'
        ]
      },
      {
        main: 'Super Bowl Exception:',
        sub: [
          '2+ week promotion cycle',
          'Higher stakes require longer runway',
          'Multiple touchpoints needed for big event'
        ]
      },
      {
        main: 'Partner Amplification:',
        sub: [
          'DJs share to their networks',
          'Artists promote their performance',
          'Leverages existing audiences'
        ]
      },
      {
        main: 'Social Media Engine drives all event marketing'
      }
    ],
    background: 'bg-gradient-to-b from-sumi to-sumi-light',
    layout: 'content'
  },

  // Slide 3.7: February Revenue Targets & Tracking
  {
    id: 6,
    title: 'February Revenue Targets',
    subtitle: '$25K-35K from events alone',
    bullets: [
      {
        main: 'Expected Revenue by Event Type:',
        sub: [
          'Super Bowl: $8K-12K (capacity event)',
          'Mix & Mingle (4x): $1.5-2K each = $6-8K',
          'DJ Nights (2x): $2-3K each = $4-6K',
          'Special events: $1-2K each = $5-8K',
          'Total target: $25K-35K'
        ]
      },
      {
        main: 'Tracking Metrics:',
        sub: [
          'Event attendance vs. target',
          'Bar revenue: event nights vs. normal nights',
          'Customer retention (repeat attendees)',
          'Per-person spend average'
        ]
      },
      {
        main: 'Success Criteria:',
        sub: [
          'Hit 70%+ of revenue targets',
          'Identify 2-3 winning formats to repeat',
          'Build email list of 200+ event attendees',
          'February data informs March planning'
        ]
      },
      {
        main: 'Simple tracking: One spreadsheet, 5 min per event'
      }
    ],
    background: 'bg-gradient-to-b from-sumi to-sumi-light',
    layout: 'content'
  }
]
