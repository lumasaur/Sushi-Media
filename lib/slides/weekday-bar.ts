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
  layout?: 'content' | 'title' | 'fullBleed' | 'asymmetric' | 'imageBackground' | 'centered'
  imageSrc?: string
  imageAlt?: string
  overlayOpacity?: number
  textPosition?: 'center' | 'left' | 'right'
  imagePosition?: 'left' | 'right'
  splitRatio?: '60-40' | '70-30' | '50-50'
  overlayType?: 'gradient-bottom' | 'gradient-left' | 'full-dark' | 'blur-bottom'
  overlayIntensity?: 'light' | 'medium' | 'heavy'
  contentPosition?: 'center' | 'left' | 'right' | 'bottom'
}

export const weekdayBarSlides: MiniSlideData[] = [
  // Slide 0: Mini-story title
  {
    id: 0,
    title: 'Weekday Bar Activation',
    subtitle: 'Transforming empty evenings into revenue events',
    layout: 'fullBleed',
    imageSrc: '/images/main-story/bar-patrons.png',
    imageAlt: 'Warm bar atmosphere with engaged patrons',
    overlayOpacity: 0.45,
    textPosition: 'center',
    bullets: []
  },

  // Slide 1: January Success
  {
    id: 1,
    title: 'January Proved the Model',
    subtitle: 'Events drive weekday traffic',
    layout: 'asymmetric',
    imageSrc: '/images/mini-story/mix-mingle.png',
    imageAlt: 'Mix & Mingle networking event',
    imagePosition: 'right',
    splitRatio: '60-40',
    bullets: [
      'Mix & Mingle Thursdays established consistent draw',
      'DJ nights generated bar revenue spikes',
      'Broadway Tunes found its audience',
      'Social Hour menu proved profitable'
    ]
  },

  // Slide 2: Event Categories
  {
    id: 2,
    title: 'Event Programming',
    subtitle: 'Multiple formats for different audiences',
    layout: 'content',
    background: 'bg-gradient-to-b from-sumi to-sumi-light',
    bullets: [
      { main: 'Weekly Recurring', sub: ['Mix & Mingle every Thursday', 'Creates habitual attendance'] },
      { main: 'Monthly Specials', sub: ['Tech Tuesday', 'Broadway Tunes', 'Sake Education'] },
      { main: 'Cultural & Sports', sub: ['Lunar New Year', 'Super Bowl', 'Knicks viewing parties'] }
    ]
  },

  // Slide 3: Happy Hour Focus
  {
    id: 3,
    title: 'Happy Hour Optimization',
    subtitle: 'Weekday 4-7pm opportunity',
    layout: 'imageBackground',
    imageSrc: '/images/mini-story/happy-hour.png',
    imageAlt: 'Happy hour drinks and atmosphere',
    overlayType: 'gradient-left',
    overlayIntensity: 'heavy',
    contentPosition: 'right',
    bullets: [
      'Social Hour menu drives traffic',
      'Transition from happy hour to dinner',
      'Bar revenue during traditionally slow hours',
      'Partner DJs bring their audiences'
    ]
  },

  // Slide 4: February Programming
  {
    id: 4,
    title: 'February Calendar',
    subtitle: '13 events across the month',
    layout: 'content',
    background: 'bg-gradient-to-b from-sumi to-sumi-light',
    bullets: [
      '4 Mix & Mingle Thursdays (including Galentine\'s)',
      '2 DJ Nights (Valentine\'s Day special)',
      '1 Super Bowl watch party (biggest revenue event)',
      '1 Lunar New Year celebration',
      '1 Tech Tuesday launch',
      'Multiple combo events'
    ]
  },

  // Slide 5: Revenue Targets
  {
    id: 5,
    title: 'Revenue Opportunity',
    subtitle: 'February target: $25K-35K from events',
    layout: 'centered',
    background: 'bg-premium-dark',
    bullets: []
  },

  // Slide 6: Summary
  {
    id: 6,
    title: 'The Foundation is Set',
    subtitle: 'January validated, February scales',
    layout: 'imageBackground',
    imageSrc: '/images/main-story/bar-patrons.png',
    imageAlt: 'Successful bar atmosphere',
    overlayType: 'full-dark',
    overlayIntensity: 'medium',
    contentPosition: 'center',
    bullets: [
      'Event infrastructure proven',
      'Partner relationships established',
      'Social media promotion workflow active',
      'Ready to scale in February and beyond'
    ]
  }
]
