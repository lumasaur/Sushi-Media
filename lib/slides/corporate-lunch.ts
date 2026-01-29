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
  layout?: 'content' | 'title' | 'fullBleed' | 'asymmetric' | 'imageBackground' | 'centered'
  imageSrc?: string
  imageAlt?: string
  overlayOpacity?: number
  textPosition?: 'center' | 'bottom-left' | 'bottom-center'
  imagePosition?: 'left' | 'right'
  splitRatio?: '60-40' | '70-30' | '50-50'
  overlayType?: 'gradient-bottom' | 'gradient-left' | 'full-dark' | 'blur-bottom'
  overlayIntensity?: 'light' | 'medium' | 'heavy'
  contentPosition?: 'center' | 'left' | 'right' | 'bottom'
}

export const corporateLunchSlides: MiniSlideData[] = [
  // Slide 0: Mini-story title
  {
    id: 0,
    title: 'Corporate Lunch Machine',
    subtitle: 'Filling weekday lunch hours with recurring revenue',
    layout: 'fullBleed',
    imageSrc: '/images/main-story/office-park.png',
    imageAlt: 'Modern office park buildings',
    overlayOpacity: 0.5,
    textPosition: 'center',
    bullets: []
  },

  // Slide 1: The Opportunity
  {
    id: 1,
    title: 'The Opportunity',
    subtitle: 'Office parks within 3 miles',
    layout: 'asymmetric',
    imageSrc: '/images/main-story/office-park.png',
    imageAlt: 'Office buildings representing target customers',
    imagePosition: 'left',
    splitRatio: '60-40',
    bullets: [
      'Clear demand from local businesses',
      'Fills specific empty hours: 11:30am-1:30pm weekdays',
      'Your sales network enables warm introductions',
      'Premium sushi differentiates from typical lunch options'
    ]
  },

  // Slide 2: The System
  {
    id: 2,
    title: 'The System',
    subtitle: 'Multi-channel ordering infrastructure',
    layout: 'content',
    background: 'bg-gradient-to-b from-sumi to-sumi-light',
    bullets: [
      { main: 'Group Ordering Platforms', sub: ['Toast group ordering enabled', 'DoorDash Business setup', 'ezCater consideration'] },
      { main: 'Direct Outreach', sub: ['Office manager contact list', 'Sample delivery program', 'Recurring order incentives'] },
      { main: 'Account Management', sub: ['Regular check-ins', 'Special corporate pricing', 'Holiday and event catering'] }
    ]
  },

  // Slide 3: Target & Timeline
  {
    id: 3,
    title: 'Target Outcomes',
    subtitle: 'Measurable goals for Month 1-3',
    layout: 'centered',
    background: 'bg-premium-dark',
    bullets: []
  }
]

export const miniStoryTitle = 'The Corporate Lunch Machine'
export const miniStorySubtitle = 'Building recurring B2B revenue'
