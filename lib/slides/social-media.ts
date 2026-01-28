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
  layout?: 'content' | 'title'
}

export const socialMediaSlides: MiniSlideData[] = [
  // Slide 1.1: Why Social Media First
  {
    id: 0,
    title: 'Why Social Media First',
    subtitle: 'The foundation for all other initiatives',
    bullets: [
      {
        main: 'The Problem:',
        sub: [
          'Events happen but promotion is inconsistent',
          'Ad hoc posting misses weekend opportunities',
          'Partner content not leveraged to full potential'
        ]
      },
      {
        main: 'The Solution:',
        sub: [
          'Fixed posting schedule (4-6x/week)',
          'Event-focused strategy with 2-week promotion cycle',
          'Partner amplification (DJs, artists share to their networks)'
        ]
      },
      {
        main: 'What This Unlocks:',
        sub: [
          'Weekend events promoted 2 weeks in advance',
          'Corporate lunch awareness built during week',
          'Weekday bar programming fills empty hours',
          'Consistent brand presence without paid ads'
        ]
      }
    ],
    background: 'bg-gradient-to-b from-sumi to-sumi-light',
    layout: 'content'
  },

  // Slide 1.2: The Content Calendar System
  {
    id: 1,
    title: 'The Content Calendar System',
    subtitle: 'Five pillars, structured rhythm',
    bullets: [
      {
        main: 'Five Content Pillars:',
        sub: [
          'Mastery - Chef skill, ingredient sourcing, preparation technique',
          'Social Soul - Events, community, vibes',
          'About Us - Team, values, family business story',
          'Food - Menu highlights, seasonal specials, visual appeal',
          'Updates - Hours, specials, catering availability'
        ]
      },
      {
        main: 'Key Message Categories:',
        sub: [
          'Event Promotion - 2-week cycle for weekend programming',
          'Revenue-Enabling - Corporate lunch, birthday parties, catering',
          'Community - Partner spotlights, customer stories, local ties'
        ]
      },
      {
        main: 'Weekly Posting Rhythm:',
        sub: [
          'Instagram: 4-6 posts/week (mix of pillars)',
          'Stories: Daily during service (real-time moments)',
          'Facebook: 2-3 posts/week (event focus, community engagement)'
        ]
      }
    ],
    background: 'bg-gradient-to-b from-sumi to-sumi-light',
    layout: 'content'
  },

  // Slide 1.3: Event Marketing Playbook
  {
    id: 2,
    title: 'Event Marketing Playbook',
    subtitle: 'Two-week promotion cycle',
    bullets: [
      {
        main: 'Two Weeks Before Event:',
        sub: [
          'Announce event with date, time, details',
          'Tag partners (DJs, artists) so they share to their networks',
          'Post to Instagram + Facebook',
          'Story mention with countdown sticker'
        ]
      },
      {
        main: 'One Week Before:',
        sub: [
          'Reminder post with event highlights',
          'Share partner content to Stories',
          'Engagement prompt: "Who\'s coming?"'
        ]
      },
      {
        main: 'Day Of:',
        sub: [
          'Morning reminder post',
          'Real-time Stories during event (vibes, crowd, food)',
          'Partner tag-backs when they share your content'
        ]
      },
      {
        main: 'Partner Content Approach:',
        sub: [
          'DJs and artists have their own audiences',
          'When tagged, they share to their followers',
          'Free amplification = larger reach without ad spend'
        ]
      }
    ],
    background: 'bg-gradient-to-b from-sumi to-sumi-light',
    layout: 'content'
  },

  // Slide 1.4: Meta Business Suite - Scheduling & Insights
  {
    id: 3,
    title: 'Meta Business Suite',
    subtitle: 'Your scheduling and insights hub',
    bullets: [
      {
        main: 'How to Use Scheduling:',
        sub: [
          'Batch-create 2 weeks of posts in one 30-60 minute session',
          'Schedule posts for optimal times (lunch hours, early evening)',
          'Frees you from daily posting pressure',
          'Ensures consistency even during busy weeks'
        ]
      },
      {
        main: 'Key Insights to Track:',
        sub: [
          'Reach: How many people saw your posts',
          'Engagement: Likes, comments, shares, saves',
          'Best performing posts: What content resonates',
          'Event post performance: Which events drive most interest'
        ]
      },
      {
        main: 'Simple Monthly Dashboard:',
        sub: [
          'Compare reach month-over-month',
          'Identify top 3 posts and what made them work',
          'Note which events had strongest engagement',
          'Adjust next month based on what\'s working'
        ]
      }
    ],
    background: 'bg-gradient-to-b from-sumi to-sumi-light',
    layout: 'content'
  },

  // Slide 1.5: Content Creation Workflow
  {
    id: 4,
    title: 'Content Creation Workflow',
    subtitle: 'Batch creation + real-time moments',
    bullets: [
      {
        main: 'Weekly Batch Session (30-60 minutes):',
        sub: [
          'Review content library (photos from past week)',
          'Draft 2 weeks of posts across 5 pillars',
          'Schedule in Meta Business Suite',
          'Front-loads work so weekdays are lighter'
        ]
      },
      {
        main: 'Daily Real-Time Content (Stories):',
        sub: [
          '5 minutes during lunch service: Plate shots, kitchen moments',
          '5 minutes during dinner prep: Behind-the-scenes, team',
          'Event nights: Capture vibes, crowd, highlights',
          'Stories are casual and authentic, not polished'
        ]
      },
      {
        main: 'Who Does What:',
        sub: [
          'Content capture: Anyone with a phone (chef, front-of-house, Ami)',
          'Batch scheduling: Ami or designated social media lead',
          'Real-time Stories: Whoever is working that shift',
          'Monthly review: Ami + team (15 minutes)'
        ]
      }
    ],
    background: 'bg-gradient-to-b from-sumi to-sumi-light',
    layout: 'content'
  },

  // Slide 1.6: Revenue-Enabling Content Strategy
  {
    id: 5,
    title: 'Revenue-Enabling Content',
    subtitle: 'Posts that directly drive business',
    bullets: [
      {
        main: 'Corporate Lunch Promotion:',
        sub: [
          'Bento box visuals with "Perfect for office lunch orders"',
          'Highlight group ordering options',
          'Tag nearby office parks or business districts',
          'Post mid-morning when people are planning lunch'
        ]
      },
      {
        main: 'Birthday & Celebration Marketing:',
        sub: [
          'Private dining room setup photos',
          'Omakase experience highlights',
          'Call-out for bookings: "Celebrating something special?"',
          'Customer testimonials from past celebrations'
        ]
      },
      {
        main: 'Catering & Party Tray Content:',
        sub: [
          'Sushi platter visuals with pricing ranges',
          'Holiday season push (corporate events, family gatherings)',
          'Clear CTA: "DM us for catering inquiries"',
          'Share successful catering examples (with permission)'
        ]
      }
    ],
    background: 'bg-gradient-to-b from-sumi to-sumi-light',
    layout: 'content'
  },

  // Slide 1.7: Simple Performance Tracking
  {
    id: 6,
    title: 'Simple Performance Tracking',
    subtitle: 'Weekly quick checks, monthly deep dives',
    bullets: [
      {
        main: 'Weekly Quick Check (5 minutes):',
        sub: [
          'Open Meta Business Suite',
          'Check reach and engagement for past week',
          'Note best-performing post',
          'Adjust upcoming scheduled posts if needed'
        ]
      },
      {
        main: 'Monthly Review (15 minutes):',
        sub: [
          'Compare total reach to previous month',
          'Identify top 3 posts and why they worked',
          'Review event promotion effectiveness',
          'Plan next month\'s content themes',
          'Adjust posting frequency or times if needed'
        ]
      },
      {
        main: 'What Success Looks Like:',
        sub: [
          'Month 1: Consistency established (4-6 posts/week)',
          'Month 2: Reach growing 10-20% month-over-month',
          'Month 3: Event posts driving visible attendance',
          'Month 4: Corporate lunch inquiries from social posts'
        ]
      }
    ],
    background: 'bg-gradient-to-b from-sumi to-sumi-light',
    layout: 'content'
  }
]
