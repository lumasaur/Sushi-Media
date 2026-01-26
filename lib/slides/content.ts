/**
 * Centralized slide content structure for Ami Sushi presentation
 *
 * This file defines the complete slide deck following the strategic narrative:
 * 1. Title slide - Premium positioning
 * 2. Empty Hours hook - Core opportunity framing
 * 3. Three Systems overview (added in subsequent plans)
 * 4. System deep dives (added in subsequent plans)
 * 5. Timeline (added in subsequent plans)
 * 6. Next Steps CTA (added in subsequent plans)
 */

export interface SlideData {
  id: number
  section: string
  title: string
  subtitle?: string
  bullets: Array<string | { main: string; sub: string[] }>
  background?: string  // Tailwind class like 'bg-brand-black'
  layout?: 'title' | 'content' | 'cta'  // Hint for rendering pattern
}

export const sections = [
  { id: 'intro', name: 'Introduction', slides: [0, 1] },
  { id: 'systems', name: 'Three Systems', slides: [2, 3, 4, 5] },  // Overview + all 3 system deep dives
  { id: 'execution', name: 'Execution', slides: [] }     // Will populate in subsequent plans
]

export const slides: SlideData[] = [
  // Slide 0: Title
  {
    id: 0,
    section: 'intro',
    title: 'Premium Sushi with Social Soul',
    bullets: [],
    background: 'bg-brand-black',
    layout: 'title'
  },

  // Slide 1: Empty Hours Hook
  {
    id: 1,
    section: 'intro',
    title: 'Capturing the Empty Hours',
    subtitle: 'Untapped revenue in lunch and weekday evenings',
    bullets: [
      'Weekday lunchtimes sit empty',
      'Evening hours slow Monday-Thursday',
      'Premium kitchen ready, audience missing',
      'Three systems turn downtime into revenue'
    ],
    background: 'bg-gradient-to-br from-gray-900 to-black',
    layout: 'content'
  },

  // Slide 2: Three Systems Overview
  {
    id: 2,
    section: 'systems',
    title: 'Three Interconnected Systems',
    subtitle: 'Each system reinforces the others — a revenue flywheel',
    bullets: [
      {
        main: 'Social Media Engine',
        sub: ['Build daily presence, create buzz, fill empty seats']
      },
      {
        main: 'Corporate Lunch Machine',
        sub: ['Transform dead lunchtimes into recurring revenue']
      },
      {
        main: 'Weekday Bar Activation',
        sub: ['Turn slow evenings into social destination']
      }
    ],
    background: 'bg-brand-red',
    layout: 'content'
  },

  // Slide 3: Social Media Engine Deep Dive
  {
    id: 3,
    section: 'systems',
    title: 'Social Media Engine',
    subtitle: 'Daily presence drives discovery and fills empty seats',
    bullets: [
      'Problem: Hidden gem with no voice in noisy market',
      'Solution: Consistent daily content on social platforms',
      {
        main: 'Showcase premium quality and social atmosphere',
        sub: ['Behind-the-scenes content', 'Event highlights', 'Community stories']
      },
      'Drive lunchtime traffic and weekday evening bookings',
      'Build loyalty beyond transactions'
    ],
    background: 'bg-gradient-to-br from-gray-900 to-black',
    layout: 'content'
  },

  // Slide 4: Corporate Lunch Machine Deep Dive
  {
    id: 4,
    section: 'systems',
    title: 'Corporate Lunch Machine',
    subtitle: 'Transform empty lunchtimes into recurring revenue',
    bullets: [
      'Problem: Premium kitchen sits idle during lunch hours',
      'Solution: Target nearby corporate offices with value proposition',
      {
        main: 'Executive lunch appeal: Quality meets convenience',
        sub: ['Premium sushi at accessible pricing', 'Quick service for busy schedules', 'Private dining for client meetings']
      },
      'Build weekday lunch momentum',
      'Create loyal corporate client base'
    ],
    background: 'bg-gradient-to-br from-gray-900 to-black',
    layout: 'content'
  },

  // Slide 5: Weekday Bar Activation Deep Dive
  {
    id: 5,
    section: 'systems',
    title: 'Weekday Bar Activation',
    subtitle: 'Turn slow evenings into social destination',
    bullets: [
      'Problem: Monday-Thursday bar sits empty after dinner rush',
      'Solution: Create compelling reasons to visit midweek',
      {
        main: 'Social programming drives repeat traffic',
        sub: ['Happy hour offerings', 'Community events and gatherings', 'Relaxed atmosphere for regulars']
      },
      'Fill empty evening hours with consistent traffic',
      'Build neighborhood loyalty and word-of-mouth'
    ],
    background: 'bg-gradient-to-br from-gray-900 to-black',
    layout: 'content'
  }

  // Additional slides will be added in subsequent Phase 3 plans:
  // - Slide 6: Timeline (First 30 Days)
  // - Slide 7: Next Steps CTA
]
