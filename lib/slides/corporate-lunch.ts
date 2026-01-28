/**
 * Mini Story 2: The Corporate Lunch Machine
 * Accessible from main story slide 5 via deep-dive CTA
 */

export interface MiniSlideData {
  id: number
  title: string
  subtitle?: string
  bullets: Array<string | { main: string; sub: string[] }>
  background?: string
  layout?: 'content' | 'title'
}

export const corporateLunchSlides: MiniSlideData[] = [
  // Slide 2.1: The Corporate Opportunity
  {
    id: 0,
    title: 'The Corporate Opportunity',
    bullets: [
      {
        main: 'The Math:',
        sub: [
          '15-20 office complexes within 3 miles',
          'Target: 3-5 buildings with weekly standing orders',
          'Each building = 10-20 orders per week'
        ]
      },
      {
        main: 'Why This Works:',
        sub: [
          'Office parks lack quality lunch options',
          'Premium sushi stands out from fast casual',
          'Group ordering removes friction'
        ]
      },
      {
        main: 'Current Bottleneck:',
        sub: [
          'Coordination hassle prevents orders',
          'Solution: Group ordering platforms handle logistics'
        ]
      }
    ],
    background: 'bg-gradient-to-b from-sumi to-sumi-light',
    layout: 'content'
  },

  // Slide 2.2: Group Ordering Technology
  {
    id: 1,
    title: 'Group Ordering Technology',
    bullets: [
      {
        main: 'Toast Group Ordering (Week 1):',
        sub: [
          'Already using Toast for POS',
          'Enable group ordering feature',
          'Share link with office managers',
          'Orders aggregate automatically'
        ]
      },
      {
        main: 'DoorDash for Business (Week 2):',
        sub: [
          'Enterprise ordering portal',
          'Expense management built in',
          'Scheduled delivery windows',
          'Reaches businesses already on platform'
        ]
      },
      {
        main: 'ezCater (Month 2, Passive):',
        sub: [
          'Largest corporate catering marketplace',
          'Orders come to you',
          'Good for larger group orders',
          'Set it and forget it'
        ]
      }
    ],
    background: 'bg-gradient-to-b from-sumi to-sumi-light',
    layout: 'content'
  },

  // Slide 2.3: Office Complex Outreach
  {
    id: 2,
    title: 'Office Complex Outreach',
    subtitle: 'Three-phase approach',
    bullets: [
      {
        main: 'Phase 1: Warm Introductions (Week 1-2)',
        sub: [
          'Use your network for office manager intros',
          'Personal touch beats cold outreach',
          'Offer first-order incentive'
        ]
      },
      {
        main: 'Phase 2: Physical Flyers + Direct Outreach (Week 3-4)',
        sub: [
          'Flyers in building lobbies',
          'Direct email to office managers',
          'Follow up call within 3 days'
        ]
      },
      {
        main: 'Phase 3: Sample Delivery (Week 5+)',
        sub: [
          'Free sample lunch for decision makers',
          'Include ordering instructions',
          'Follow up within 48 hours'
        ]
      }
    ],
    background: 'bg-gradient-to-b from-sumi to-sumi-light',
    layout: 'content'
  },

  // Slide 2.4: Building Recurring Revenue
  {
    id: 3,
    title: 'Building Recurring Revenue',
    bullets: [
      {
        main: 'After First Order:',
        sub: [
          'Thank you call or email within 24 hours',
          'Ask for feedback',
          'Offer standing order option'
        ]
      },
      {
        main: 'Converting to Standing Orders:',
        sub: [
          'Weekly lunch on same day',
          '10% discount for commitment',
          'Automatic reminder/confirmation'
        ]
      },
      {
        main: 'Corporate Account Management:',
        sub: [
          'Dedicated contact for large accounts',
          'Invoice vs. per-order payment',
          'Priority handling for their orders'
        ]
      }
    ],
    background: 'bg-gradient-to-b from-sumi to-sumi-light',
    layout: 'content'
  }
]

export const miniStoryTitle = 'The Corporate Lunch Machine'
export const miniStorySubtitle = 'Building recurring B2B revenue'
