---
phase: 04-visual-storytelling
plan: 03
subsystem: ui
tags: [framer-motion, animation, css, visualization, staggered-animation]

# Dependency graph
requires:
  - phase: 04-01
    provides: Timeline visualization component with staggered animations
  - phase: 04-02
    provides: SystemDiagram visualization component and IconWithLabel pattern
provides:
  - Staggered bullet animations with 150ms delay on content slides (1, 3, 4, 5)
  - RevenueChart component showing current vs with-systems capacity comparison
  - CSS-only visualization approach (no chart library dependency)
  - Sequential reveal animations that guide viewer attention
affects: [05-responsive-performance, future-visualization-components]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Staggered entry animation with containerVariants/itemVariants pattern"
    - "CSS-only chart visualization avoiding heavy dependencies"
    - "Conditional component rendering based on slide.id for one-off visuals"

key-files:
  created:
    - components/presentation/visualizations/RevenueChart.tsx
  modified:
    - app/page.tsx
    - components/presentation/visualizations/index.ts

key-decisions:
  - "150ms stagger delay for bullets (sweet spot: fast but noticeable)"
  - "CSS-only RevenueChart avoiding Recharts (~100kb savings)"
  - "Sub-bullets remain static to avoid animation fatigue"
  - "RevenueChart conditionally rendered on slide 1 via slide.id check"
  - "200ms initial delay before bullets animate (lets title settle)"
  - "400ms bullet transition duration (0.4s) per Nielsen Norman guidelines"

patterns-established:
  - "Staggered list animation: containerVariants with staggerChildren, itemVariants with opacity + x transform"
  - "CSS bar chart: height animation with Framer Motion, no external charting library"
  - "Conditional visualization: slide.id checks for one-off visual enhancements"

# Metrics
duration: 20min
completed: 2026-01-26
---

# Phase 4 Plan 3: Staggered Animations & Revenue Visualization Summary

**Staggered bullet animations with 150ms delay guide attention sequentially, plus CSS-only revenue chart shows empty vs filled hours opportunity on slide 1**

## Performance

- **Duration:** 20 min
- **Started:** 2026-01-26T19:43:30Z
- **Completed:** 2026-01-26T15:04:07Z
- **Tasks:** 3
- **Files modified:** 3

## Accomplishments
- Content slide bullets animate sequentially with smooth left-to-right fade (150ms stagger)
- RevenueChart component visualizes empty hours opportunity with animated bars
- CSS-only approach keeps bundle minimal (no Recharts dependency added)
- Animation timing feels polished: responsive but not jarring

## Task Commits

Each task was committed atomically:

1. **Task 1: Create RevenueChart component** - `27fd789` (feat)
2. **Task 2: Add staggered animations to content bullets** - `9fd5b8b` (feat)
3. **Task 3: Integrate RevenueChart into Empty Hours slide** - `87243b2` (feat)

## Files Created/Modified
- `components/presentation/visualizations/RevenueChart.tsx` - Two-bar comparison chart (Current 40% vs With Systems 100%) using CSS flexbox and Framer Motion height animations
- `app/page.tsx` - Added motion import, containerVariants/itemVariants, motion.ul/motion.li for staggered bullets, RevenueChart conditional rendering on slide 1
- `components/presentation/visualizations/index.ts` - Exported RevenueChart component

## Decisions Made

**Animation Timing:**
- 150ms stagger delay between bullets: Research-backed sweet spot (Nielsen Norman 100-150ms range)
- 200ms initial delay: Allows slide title to settle before bullets animate
- 400ms transition duration: Within recommended 200-500ms range for smooth motion
- Material Design easing [0.4, 0, 0.2, 1]: Polished acceleration/deceleration

**Chart Approach:**
- CSS-only visualization avoids Recharts (~100kb bundle bloat)
- Simple two-bar comparison sufficient for directional messaging
- Height-based bars (40% vs 100%) with 0.8s animation, 0.2s stagger
- Gray-600 for current state, brand-red for "with systems" state

**Animation Scope:**
- Applied only to 'content' layout (slides 1, 3, 4, 5)
- Sub-bullets remain static to prevent animation fatigue
- Timeline and SystemDiagram handle their own component-level animations
- CTA slide bullets stay static (no animation needed for final action slide)

**Integration:**
- RevenueChart conditionally rendered via `slide.id === 1` check
- Positioned between subtitle and bullets with mb-10 spacing
- Provides quantitative framing before qualitative bullet list

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

**File Write Tool Quirks:**
- Edit tool reported "file modified unexpectedly" requiring re-reads
- Worked around using bash echo append for index.ts export
- Used Write tool after fresh Read for page.tsx modifications
- No impact on execution outcome, just required alternate tool usage

## Next Phase Readiness

**Phase 4 Complete:**
- All visual storytelling components delivered (Timeline, SystemDiagram, RevenueChart)
- Staggered animations guide viewer attention on content slides
- CSS-only approach keeps bundle lean for Phase 5 performance optimization
- Animation timing established: 150ms stagger standard, 0.4s transitions

**Ready for Phase 5: Responsive & Performance**
- Visualization components responsive-ready (use max-w, flexbox, grid)
- No heavy dependencies added (Recharts avoided)
- Bundle size optimized (individual Lucide icon imports from 04-01/04-02)
- Animation performance: CSS transforms and opacity (GPU-accelerated)

**No blockers** - Phase 4 objectives met

---
*Phase: 04-visual-storytelling*
*Completed: 2026-01-26*
