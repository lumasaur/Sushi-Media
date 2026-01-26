---
phase: 03-content-architecture
plan: 04
subsystem: content
tags: [typescript, execution, timeline, cta, decision-routing]

# Dependency graph
requires:
  - phase: 03-content-architecture
    plan: 02
    provides: Three Systems slides with problem/solution structure
  - phase: 03-content-architecture
    plan: 03
    provides: All three system deep dives complete
provides:
  - First 30 Days timeline with week-by-week execution milestones
  - Next Steps slide with two decision paths (discuss vs tactical review)
  - CTA slide layout with clickable buttons
  - Complete 8-slide presentation narrative (problem → solution → action)
affects: [visual-storytelling, decision-routing, responsive-design]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "CTA layout pattern: Summary recap + two decision paths side-by-side"
    - "Timeline structure: Week-by-week progression showing momentum building"
    - "Decision routing: Primary vs secondary CTA styling guides user choice"

key-files:
  created: []
  modified:
    - lib/slides/content.ts
    - app/page.tsx
    - components/presentation/Breadcrumbs.tsx

key-decisions:
  - "Timeline uses relative timing (Week 1-4) rather than fixed dates for flexibility"
  - "Next Steps slide recaps Three Systems with one-liner summaries before CTAs"
  - "Primary CTA (Discuss Strategy) uses brand red, secondary (Review Tactical) uses white"
  - "CTA buttons centered on slide with minimum 280px width for touch-friendly targets"
  - "Breadcrumbs updated to reflect actual Ami Sushi narrative: Introduction / Three Systems / Execution"

patterns-established:
  - "CTA slide layout: Centered title/subtitle + summary bullets + button CTAs"
  - "Execution section structure: Timeline + Next Steps (action-oriented finale)"
  - "Complete narrative arc: Hook (Empty Hours) → Solution (Systems) → Action (Timeline + CTAs)"

# Metrics
duration: 14min
completed: 2026-01-26
---

# Phase 3 Plan 4: Timeline and Next Steps Summary

**Complete presentation narrative with First 30 Days execution timeline and dual-path CTA driving stakeholder decision-making**

## Performance

- **Duration:** 14 min
- **Started:** 2026-01-26T10:27:43Z
- **Completed:** 2026-01-26T10:42:06Z
- **Tasks:** 4
- **Files modified:** 3
- **Commits:** 3

## Accomplishments
- Added First 30 Days timeline slide (Slide 6) with week-by-week execution milestones
- Added Next Steps slide (Slide 7) with Three Systems recap and two CTA paths
- Implemented CTA slide layout in presentation page with clickable buttons
- Updated Breadcrumbs component to reflect Ami Sushi sections (Introduction / Three Systems / Execution)
- Extended SlideData interface to support CTA buttons with label, description, href, and primary flag
- Completed 8-slide presentation with full narrative arc from problem to action

## Task Commits

1. **Tasks 1-2: Timeline and Next Steps slides** - `9784c9a` (feat)
   - Added slide 6 (First 30 Days) with 4-week timeline structure
   - Added slide 7 (Next Steps) with summary bullets and CTA configuration
   - Extended SlideData interface with optional ctas field
   - Updated execution section in sections array to include slides [6, 7]

2. **Task 3: CTA layout rendering** - `62494a8` (feat)
   - Added CTA slide layout handling in app/page.tsx
   - Centered title and subtitle for visual impact
   - Summary bullets with brand-red markers
   - Two CTA buttons with responsive stacking (side-by-side on desktop, vertical on mobile)
   - Hover effects with scale transform for interactivity

3. **Task 4: Breadcrumbs sections update** - `6a12f66` (feat)
   - Replaced Kangaroo sections with Ami Sushi narrative structure
   - Introduction (0-1), Three Systems (2-5), Execution (6-7)
   - Navigation now matches actual slide content

## Files Created/Modified

- `lib/slides/content.ts` - Added slides 6-7 (Timeline + Next Steps). Extended SlideData interface with ctas field for CTA buttons. Updated execution section to include slides [6, 7]. Timeline shows week-by-week progression from Foundation → Activation → Optimization → Scale. Next Steps slide recaps Three Systems with one-liners and presents two decision paths: Discuss Strategy (primary CTA) and Review Tactical Plan (secondary CTA linking to implementation proposal).

- `app/page.tsx` - Added CTA slide layout rendering with centered title/subtitle, summary bullets, and clickable CTA buttons. Buttons are responsive (flex-col on mobile, flex-row on desktop), minimum 280px width for touch targets, with hover scale effects. Primary CTA uses brand-red background, secondary uses white.

- `components/presentation/Breadcrumbs.tsx` - Updated sections array from Kangaroo (Title/Situation/Complication/Question/Answer) to Ami Sushi (Introduction/Three Systems/Execution). Breadcrumb navigation now reflects actual 8-slide structure with correct slide ranges.

## Decisions Made

**First 30 Days Timeline (Slide 6):**
- Relative timing format: "Week 1", "Week 2", etc. (works regardless of actual start date)
- High-level milestones only (not granular tasks) to show confidence and clarity
- Progression narrative: Foundation → Activation → Optimization → Scale
- Week 1 focus: Launch fundamentals (social presence, corporate lunch announcement, initial promotions)
- Week 2 focus: First activation (weekday bar event, corporate outreach, content rhythm)
- Week 3 focus: Data-driven optimization (refine based on feedback, double down on winners)
- Week 4 focus: Scale and lock-in (expand programs, corporate partnerships, community momentum)
- Brand red background for visual impact and consistency with Three Systems overview

**Next Steps CTA Slide (Slide 7):**
- Positioned as slide 8 (final slide) to complete problem → solution → action arc
- Three Systems recap with one-liner summaries to reinforce key messages before decision
- Two clear decision paths: "Discuss Strategy" (primary) and "Review Tactical Plan" (secondary)
- Primary CTA uses #contact anchor (placeholder for actual contact method)
- Secondary CTA links to `/strategy-review/implementation-proposal` (tactical deep dive)
- Dark gradient background for premium finale aesthetic
- Layout: 'cta' triggers centered treatment with button rendering

**CTA Layout Implementation:**
- Centered title and subtitle for visual hierarchy on final slide
- Summary bullets positioned centrally (max-width-2xl) for focused recap
- CTA buttons use flex layout: column on mobile, row on desktop (responsive)
- Minimum 280px width ensures touch-friendly targets (44px+ tap area)
- Primary CTA: brand-red background, white text, gray-200 description text
- Secondary CTA: white background, gray-900 text, gray-600 description text
- Hover effects: bg darken + scale-105 for interactivity feedback
- Gap-6 spacing between buttons for clear separation

**Breadcrumbs Update:**
- Introduction section: slides 0-1 (Title + Empty Hours hook)
- Three Systems section: slides 2-5 (Overview + 3 deep dives)
- Execution section: slides 6-7 (Timeline + Next Steps)
- Matches actual slide structure for accurate navigation context
- Preserves existing visual treatment (dot indicators, hover labels, brand-red active state)

## Deviations from Plan

None - plan executed exactly as written. All four tasks completed according to specifications in 03-04-PLAN.md and 03-CONTEXT.md decisions.

---

**Total deviations:** 0

## Issues Encountered

None - TypeScript compilation successful, all layouts render correctly, CTA buttons are functional.

## User Setup Required

None - no external service configuration required. Primary CTA uses #contact anchor (can be updated to actual contact method: mailto, Calendly, contact form).

## Next Phase Readiness

**Phase 3 (Content Architecture) COMPLETE:**
- All 8 slides implemented with cohesive narrative arc
- Title (0) → Empty Hours (1) → Three Systems overview (2) → System deep dives (3-5) → Timeline (6) → Next Steps (7)
- Complete problem → solution → action storytelling structure
- Decision routing established with two clear paths

**Ready for Phase 4 (Visual Storytelling):**
- Slide content structure complete and stable
- Layout patterns established (title, content, cta)
- Visual enhancement opportunities identified:
  - Add visual elements (icons, graphics) to system slides
  - Enhance timeline with visual progress indicators
  - Polish CTA button styling and animations
  - Add slide transitions and motion design

**Ready for Phase 5 (Responsive & Performance):**
- Responsive patterns already implemented (flex-col → flex-row)
- Touch-friendly targets established (280px+ button widths)
- Mobile-first approach used throughout
- Performance optimization opportunities available

**Ready for Phase 6 (Decision Routing):**
- CTA structure in place with href links
- Primary/secondary decision pattern established
- Implementation proposal link functional
- Contact method placeholder ready for actual integration

**Content strategy validated:**
- 8 slides tell complete story without overwhelming
- Each section has clear purpose: introduce, explain, activate
- Timeline shows confidence and clarity with high-level milestones
- CTAs provide two paths matching different stakeholder readiness levels
- Narrative arc drives toward decision-making

---
*Phase: 03-content-architecture*
*Completed: 2026-01-26*
