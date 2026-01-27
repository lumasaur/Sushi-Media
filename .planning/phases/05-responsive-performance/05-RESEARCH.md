# Phase 5: Presentation Rebuild - Research

**Researched:** 2026-01-27
**Domain:** Multi-level presentation rebuild with design system migration
**Confidence:** HIGH

## Summary

This phase rebuilds the presentation from 8 slides to 28 slides (10 main story + 18 mini-story) with multi-level navigation, a sophisticated Japanese-inspired color palette (Sumi, Washi, Beni, Kincha, Hai, Kitsune), and responsive optimization for iPad landscape viewing.

The research identifies four critical technical domains:
1. **Multi-level navigation** - Next.js App Router nested routes with state preservation
2. **Color palette migration** - Tailwind config extension for Japanese-inspired semantic colors
3. **Content data structure** - TypeScript interface extension for mini-story slides
4. **Animation optimization** - Reduce Framer Motion stagger from 150ms to 100ms

**Primary recommendation:** Use Next.js file-system routing (`app/presentation/social-media/page.tsx`) for mini-stories, extend Tailwind config with new color palette while preserving old classes during migration, extend existing SlideData interface with optional miniStoryLink property, and update animation variants globally.

## Standard Stack

All libraries already installed and in use:

| Library | Version | Purpose | Migration Notes |
|---------|---------|---------|-----------------|
| Next.js | 14.x | Multi-level routing | Use nested folders in app/ directory |
| Tailwind CSS | 3.4.3 | Design tokens | Extend colors in tailwind.config.js |
| Framer Motion | Latest | Animations | Reduce staggerChildren from 0.15 to 0.1 |
| TypeScript | 5.x | Type safety | Extend SlideData interface |

## Architecture Patterns

### Pattern 1: File-System Based Multi-Level Navigation

**Structure:**
```
app/
├── page.tsx                    # Main presentation (10 slides)
├── presentation/
│   ├── social-media/
│   │   └── page.tsx           # Mini Story 1 (7 slides)
│   ├── corporate-lunch/
│   │   └── page.tsx           # Mini Story 2 (4 slides)
│   └── weekday-bar/
│       └── page.tsx           # Mini Story 3 (7 slides)
└── globals.css

lib/slides/
├── content.ts                  # Main story (existing)
├── social-media.ts            # Mini story 1 (new)
├── corporate-lunch.ts         # Mini story 2 (new)
└── weekday-bar.ts             # Mini story 3 (new)
```

**Navigation pattern:**
- Main slides 4, 5, 6 have `<Link href="/presentation/social-media?returnSlide=4">`
- Mini-story pages have back button that reads `?returnSlide` param
- Main presentation reads `?slide=X` param on mount to restore position

**Source:** [Next.js App Router Routing](https://nextjs.org/docs/app/building-your-application/routing)

### Pattern 2: Tailwind Color Palette Extension

**Current colors (keep during migration):**
```js
// tailwind.config.js
colors: {
  'brand-black': '#120c0d',
  'brand-white': '#f5f5f5',
  'brand-red': '#b22222',
}
```

**Add new colors:**
```js
colors: {
  // Old (keep for gradual migration)
  'brand-black': '#120c0d',
  'brand-white': '#f5f5f5',
  'brand-red': '#b22222',

  // New Japanese-inspired palette
  'sumi': '#1a1614',        // Ink black
  'washi': '#faf8f5',       // Paper white
  'beni': '#8b2635',        // Burgundy
  'kincha': '#c4a35a',      // Gold tea
  'hai': '#6b6560',         // Ash gray
  'kitsune': '#d4c4a8',     // Fox tan
}
```

**Migration approach:** Add new colors first, then find-replace class names incrementally.

**Source:** [Tailwind CSS Customizing Colors](https://tailwindcss.com/docs/customizing-colors)

### Pattern 3: Extended SlideData Interface

**Current interface (lib/slides/content.ts):**
```typescript
export interface SlideData {
  id: number
  section: string
  title: string
  subtitle?: string
  bullets: Array<string | { main: string; sub: string[] }>
  background?: string
  layout?: 'title' | 'content' | 'cta' | 'timeline' | 'systems'
  ctas?: Array<CTA>
}
```

**Extended for mini-stories:**
```typescript
export interface SlideData {
  id: number
  section: string
  title: string
  subtitle?: string
  bullets: Array<string | { main: string; sub: string[] }>
  background?: string
  layout?: 'title' | 'content' | 'cta' | 'timeline' | 'systems' | 'calendar'
  ctas?: Array<CTA>

  // NEW: Link to mini-story
  miniStoryLink?: 'social-media' | 'corporate-lunch' | 'weekday-bar'

  // NEW: For mini-story slides
  parentStory?: 'social-media' | 'corporate-lunch' | 'weekday-bar'
}
```

**Usage:**
```typescript
// Slide 4 (Main Story)
{
  id: 4,
  title: 'Social Media Engine',
  miniStoryLink: 'social-media',  // Renders CTA button
  ...
}

// Mini story slide
{
  id: 0,
  parentStory: 'social-media',
  title: 'Why Social Media First',
  ...
}
```

### Pattern 4: Animation Optimization

**Current (app/page.tsx line 21):**
```typescript
const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.15,  // 150ms
      delayChildren: 0.2
    }
  }
}
```

**Updated per DESIGN-SYSTEM.md:**
```typescript
const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.1,   // 100ms (faster)
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  visible: {
    transition: {
      duration: 0.3,  // Reduced from 0.4s
      ease: [0.4, 0, 0.2, 1]
    }
  }
}
```

## Common Pitfalls

### Pitfall 1: Breaking Gradients During Color Migration
**Problem:** Find-replace `#120c0d` → `#1a1614` breaks gradient definitions
**Solution:** Use Tailwind arbitrary values: `from-[#1a1614] to-[#2d2825]`

### Pitfall 2: Losing Main Slide Position on Return
**Problem:** Back button from mini-story returns to slide 0, not original slide
**Solution:** Pass `?returnSlide=4` param, read with `useSearchParams()` on return

### Pitfall 3: Tailwind Purging New Color Classes
**Problem:** New colors work in dev but vanish in production
**Solution:** Ensure `content: ['./app/**/*.tsx', './lib/**/*.ts']` in config

### Pitfall 4: Touch Targets Too Small for iPad
**Problem:** Navigation buttons hard to tap on tablet
**Solution:** Use `min-h-11 min-w-11` (44px minimum) for all interactive elements

## Don't Hand-Roll

| Problem | Use Instead | Why |
|---------|-------------|-----|
| URL-based navigation | Next.js `useSearchParams` + `useRouter` | Browser history, back button work automatically |
| Slide state preservation | Next.js Layout components | Layouts don't rerender, state persists naturally |
| Color opacity variants | Tailwind `/20` syntax (`bg-beni/20`) | Automatic for all colors |
| Touch gestures | Existing `useTouchGestures` hook | Already implemented in codebase |

## Code Examples

### Multi-Level Navigation
```typescript
// app/page.tsx - Main presentation
import Link from 'next/link'

{slide.miniStoryLink && (
  <Link href={`/presentation/${slide.miniStoryLink}?returnSlide=${currentSlide}`}>
    Explore the full playbook →
  </Link>
)}

// app/presentation/social-media/page.tsx
import { useRouter, useSearchParams } from 'next/navigation'

const router = useRouter()
const returnSlide = useSearchParams().get('returnSlide') || '4'

<button onClick={() => router.push(`/?slide=${returnSlide}`)}>
  ← Back to Main Story
</button>
```

### Color Migration (VSCode Find-Replace)
```
Step 1: Add new colors to tailwind.config.js
Step 2: Find-replace class names:
  brand-black → sumi
  brand-white → washi
  brand-red → beni
Step 3: Find-replace hex codes:
  #120c0d → #1a1614
  #f5f5f5 → #faf8f5
  #b22222 → #8b2635
```

## Open Questions

1. **Calendar visualization for Slide 8**
   - Need February 2026 calendar with 13 events
   - Recommendation: Start with static CSS Grid layout, add interactivity later

2. **Breadcrumb UI pattern**
   - "Main Story > Social Media Engine" navigation hint
   - Recommendation: Always visible in top-left, use Lucide `ChevronRight` icon

3. **Portrait mode behavior**
   - iPad portrait (810px width) is "functional fallback"
   - Recommendation: Disable animations, smaller fonts, allow scroll

## Sources

### Primary (HIGH confidence)
- [Next.js App Router Documentation](https://nextjs.org/docs/app/building-your-application/routing)
- [Tailwind CSS Customizing Colors](https://tailwindcss.com/docs/customizing-colors)
- [Framer Motion Performance](https://app.studyraid.com/en/read/7850/206073/best-practices-for-performant-animations)
- [WCAG 2.5.8 Touch Target Size](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)

### Secondary (MEDIUM confidence)
- [iPad UX Design Guide](https://asoleap.com/ipad/development/monetization/improve-ipad-ux-design-user-experience-optimization-guide)
- [Tailwind Best Practices 2025-2026](https://www.frontendtools.tech/blog/tailwind-css-best-practices-design-system-patterns)
- [Next.js useSearchParams](https://nextjs.org/docs/app/api-reference/functions/use-search-params)

## Metadata

**Confidence breakdown:**
- Multi-level navigation: HIGH (Next.js official pattern)
- Color migration: HIGH (Tailwind standard approach)
- TypeScript extension: HIGH (existing interface, simple extension)
- Animation optimization: HIGH (change one value)

**Research date:** 2026-01-27
**Valid until:** ~30 days (stable domain)

**Additional resources:**
- See `05-CONTEXT.md` for locked decisions
- See `.planning/PRESENTATION-STRUCTURE.md` for complete 28-slide content
- See `.planning/DESIGN-SYSTEM.md` for color palette and typography specs
- See `05-RESEARCH.md.backup-old-scope` for detailed responsive/performance research (still relevant)

---

**Research complete. Ready for planning phase.**
