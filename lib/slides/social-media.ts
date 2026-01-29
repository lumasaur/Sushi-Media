/**
 * Mini Story 1: The Social Media Engine
 *
 * 7-slide deep dive into social media strategy per PRESENTATION-STRUCTURE.md
 * Covers content calendar, event marketing, Meta Business Suite, creation workflow,
 * revenue-enabling content, and performance tracking.
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

export const socialMediaSlides: MiniSlideData[] = [
  // Slide 0: Mini-story title
  {
    id: 0,
    title: 'Social Media Engine',
    subtitle: 'Building your digital presence systematically',
    layout: 'fullBleed',
    imageSrc: '/images/main-story/smartphone-insta.png',
    imageAlt: 'Smartphone displaying Instagram sushi post',
    overlayOpacity: 0.5,
    textPosition: 'center',
    bullets: []
  },

  // Slide 1: Why social media matters (content with image)
  {
    id: 1,
    title: 'Why Social Media First',
    subtitle: 'The foundation for all other initiatives',
    layout: 'asymmetric',
    imageSrc: '/images/mini-story/meta-insights.png',
    imageAlt: 'Meta Business Suite analytics dashboard',
    imagePosition: 'right',
    splitRatio: '60-40',
    bullets: [
      'Zero cost to implement',
      'Full control - we own the channels',
      'Drives awareness for events and specials',
      'Partner amplification multiplies reach'
    ]
  },

  // Slide 2: Content Pillars
  {
    id: 2,
    title: 'Five Content Pillars',
    subtitle: 'Structured variety for consistent posting',
    layout: 'content',
    background: 'bg-gradient-to-b from-sumi to-sumi-light',
    bullets: [
      { main: 'Behind the Scenes', sub: ['Chef prep, kitchen action', 'Humanizes the brand'] },
      { main: 'Menu Highlights', sub: ['Signature dishes', 'Seasonal specials'] },
      { main: 'Event Promotion', sub: ['2-week cycle', 'Day-of reminders'] },
      { main: 'Customer Moments', sub: ['UGC reposts', 'Celebrations'] },
      { main: 'Local Connection', sub: ['Community events', 'Partner features'] }
    ]
  },

  // Slide 3: Posting Rhythm
  {
    id: 3,
    title: 'Posting Rhythm',
    subtitle: 'Consistent presence without burnout',
    layout: 'centered',
    background: 'bg-premium-dark',
    bullets: []
  },

  // Slide 4: Content Creation Process
  {
    id: 4,
    title: 'Content Creation Process',
    subtitle: 'Batch production for efficiency',
    layout: 'content',
    background: 'bg-gradient-to-b from-sumi to-sumi-light',
    bullets: [
      'Monthly batch session (2-3 hours)',
      'Schedule 2+ weeks ahead via Meta Business Suite',
      'Capture opportunities through daily operations',
      'Partner content reduces your creation burden'
    ]
  },

  // Slide 5: Partner Amplification
  {
    id: 5,
    title: 'Partner Amplification',
    subtitle: 'Leveraging your network',
    layout: 'imageBackground',
    imageSrc: '/images/main-story/smartphone-insta.png',
    imageAlt: 'Social media engagement',
    overlayType: 'gradient-bottom',
    overlayIntensity: 'heavy',
    contentPosition: 'bottom',
    bullets: [
      'DJs and artists share to their followers',
      'Local businesses cross-promote events',
      'Your personal network amplifies reach',
      'Each partner = hundreds of new eyes'
    ]
  },

  // Slide 6: Summary/CTA
  {
    id: 6,
    title: 'Ready to Start This Week',
    subtitle: 'Social media is the engine that powers everything else',
    layout: 'centered',
    background: 'bg-premium-dark',
    bullets: []
  }
]
