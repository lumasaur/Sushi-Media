# Roadmap: Sushi-Media Presentation Site

**Created:** 2026-01-24
**Depth:** Standard (7 phases)
**Coverage:** 47/47 v1 requirements mapped + Phase 5.5 design enhancement

## Overview

Transform the Sushi-Media site from fragmented multi-page portfolio into a cohesive slide-based presentation that guides stakeholders through the "Premium Sushi with Social Soul" strategic narrative. Leverages Kangaroo's proven presentation architecture to deliver scannable, visual-first storytelling with smooth navigation.

## Phases

### Phase 1: Foundation & Migration

**Goal:** Existing content is archived and Kangaroo presentation components are integrated into Sushi-Media codebase.

**Dependencies:** None (starting point)

**Requirements:** ARCH-01, ARCH-02, ARCH-03

**Plans:** 3 plans in 2 waves

Plans:
- [x] 01-01-PLAN.md - Archive existing content to /archive route
- [x] 01-02-PLAN.md - Migrate Kangaroo presentation components
- [x] 01-03-PLAN.md - Integration testing and build verification

**Success Criteria:**
1. Existing 50-initiative portfolio is accessible at `/archive` route
2. Implementation proposal page remains functional at existing route
3. Kangaroo SlideContainer and navigation components are copied into Sushi-Media with TypeScript compliance
4. Project builds without errors after migration

---

### Phase 2: Core Navigation System

**Goal:** Users can navigate slides using multiple input methods with persistent state.

**Dependencies:** Phase 1 (requires SlideContainer foundation)

**Requirements:** NAV-01, NAV-02, NAV-03, NAV-04, NAV-05, NAV-06, NAV-07, NAV-08, NAV-09

**Plans:** 3 plans in 2 waves

Plans:
- [x] 02-01-PLAN.md - Navigation hook with keyboard controls and URL state
- [x] 02-02-PLAN.md - Touch gesture system (double-tap and swipe)
- [x] 02-03-PLAN.md - Integration and visual polish

**Success Criteria:**
1. User can navigate forward by double-tapping right 75% of slide or using right arrow key
2. User can navigate backward by double-tapping left 25% of slide or using left arrow key
3. User can swipe horizontally on touch devices to navigate slides
4. User can scroll within slides using vertical swipes (no navigation triggered)
5. User sees current position indicator showing "X / Y" slide counter
6. User sees visual progress bar showing completion percentage
7. URL updates with slide number and browser back/forward buttons work correctly
8. Slide transitions complete in under 300ms with smooth fade + slide animations

---

### Phase 3: Content Architecture

**Goal:** Strategic narrative flows through scannable, headline-driven slides covering Three Systems framework.

**Dependencies:** Phase 2 (requires navigation to view slides)

**Requirements:** CONT-01, CONT-02, CONT-03, CONT-04, CONT-05, CONT-06, CONT-07, CONT-08, CONT-09, CONT-10, CONT-11, CONT-12

**Plans:** 4 plans in 3 waves

Plans:
- [x] 03-01-PLAN.md - Slide data structure + Title + Empty Hours slides
- [x] 03-02-PLAN.md - Three Systems overview + Social Media deep dive
- [x] 03-03-PLAN.md - Corporate Lunch + Weekday Bar deep dives
- [x] 03-04-PLAN.md - Timeline + Next Steps with CTAs

**Success Criteria:**
1. User encounters title slide introducing "Premium Sushi with Social Soul" as first slide
2. User sees "Capturing the Empty Hours" opportunity framing on second slide
3. User views Three Systems overview (Social Media Engine, Corporate Lunch Machine, Weekday Bar Activation) with clear progression
4. User can access dedicated deep dive slides for each of the three systems
5. User sees First 30 Days execution timeline presented as week-by-week graphic
6. User views scrollable February 2026 events calendar with all key dates
7. All slide content uses headlines and bullets (no paragraph blocks)
8. Final "Next Steps" slide presents two clear decision paths

---

### Phase 4: Visual Storytelling

**Goal:** Graphics, animations, and visual hierarchy make complex strategy scannable and engaging.

**Dependencies:** Phase 3 (requires content structure to visualize)

**Requirements:** VIS-01, VIS-02, VIS-03, VIS-04, VIS-05, VIS-06, VIS-07, VIS-08

**Plans:** 3 plans in 2 waves

Plans:
- [x] 04-01-PLAN.md - Timeline visualization with Framer Motion animations
- [x] 04-02-PLAN.md - System diagram with icons and flow arrows
- [x] 04-03-PLAN.md - Staggered animations and revenue chart

**Success Criteria:**
1. User sees First 30 Days timeline with week-by-week visual breakdown
2. User views February 2026 calendar component showing event distribution
3. User sees system diagram illustrating connections between Social Media, Corporate Lunch, and Weekday Bar
4. User views revenue opportunity chart contrasting empty hours vs filled hours
5. Slide content appears with staggered entry animations (items reveal sequentially, not all at once)
6. Icons from Lucide React provide visual hierarchy for key concepts
7. Red/dark brand color scheme is consistent across all slides

---

### Phase 5: Responsive & Performance

**Goal:** Presentation delivers portfolio-quality performance across landscape devices with optimized touch interactions.

**Dependencies:** Phase 4 (requires complete visual implementation to optimize)

**Requirements:** RESP-01, RESP-02, RESP-03, RESP-04, RESP-05, PORT-01, PORT-02, PORT-03, PORT-04, PORT-05

**Plans:** 7 plans

Plans:
- [x] 05-01-PLAN.md - Japanese design system foundation
- [x] 05-02-PLAN.md - Main story color migration
- [x] 05-03-PLAN.md - Calendar and metrics layouts
- [x] 05-04-PLAN.md - Mini Story 1: Social Media Engine (7 slides)
- [x] 05-05-PLAN.md - Mini Story 2: Corporate Lunch (4 slides)
- [x] 05-06-PLAN.md - Mini Story 3: Weekday Bar Activation (7 slides)
- [x] 05-07-PLAN.md - Visualization color migration

**Success Criteria:**
1. User experiences optimized viewing on landscape tablets, desktops, and TV presentation mode
2. All interactive elements have minimum 44px touch targets for tablet accuracy
3. Portrait mobile displays functional fallback (not optimized but usable)
4. Charts and text remain readable in landscape presentation format (no tiny text on projectors)
5. Images and charts scale appropriately for landscape viewports
6. Page loads in under 2 seconds on 3G connection
7. All animations run at 60fps without jank
8. TypeScript strict mode enabled with zero errors
9. Keyboard navigation and ARIA labels support accessible usage

---

### Phase 5.5: Presentation Visual Design & Polish

**Goal:** Transform all 29 slides from generic layouts to portfolio-quality visual design with creative layouts, integrated images, and sophisticated color usage.

**Dependencies:** Phase 5 (requires Japanese palette and mini-stories complete)

**Requirements:** User feedback (2026-01-28) - design quality issues

**Plans:** 5 plans in 4 waves

Plans:
- [ ] 05.5-01-PLAN.md - Foundation: Fix truncation, refine colors, prepare images
- [ ] 05.5-02-PLAN.md - Layout components: Create 5 reusable layout patterns
- [ ] 05.5-03-PLAN.md - Main story redesign (11 slides with new layouts and images)
- [ ] 05.5-04-PLAN.md - Mini-stories redesign (18 slides with new layouts and images)
- [ ] 05.5-05-PLAN.md - Visual polish, accessibility audit, user verification

**Success Criteria:**
1. No content truncation on any of the 29 slides
2. Red used only as tasteful accents (bullets, links) - NOT backgrounds
3. All 8 images integrated strategically across slides
4. Minimum 5 different layout patterns implemented (fullBleed, asymmetric, bento, centered, imageBackground)
5. Visual variety across slides - no two adjacent slides use identical patterns
6. Modern, portfolio-quality design approved by user
7. WCAG AA accessibility compliance (4.5:1 contrast minimum)
8. 60fps animations that respect prefers-reduced-motion

---

### Phase 6: Decision Routing

**Goal:** Final slide guides stakeholders to actionable next steps with clear CTAs.

**Dependencies:** Phase 3 (requires content structure), Phase 5.5 (requires polished CTAs)

**Requirements:** DEC-01, DEC-02, DEC-03, DEC-04

**Success Criteria:**
1. User sees two distinct paths on final slide: "Discuss with Stakeholders" and "Dive into Tactical Planning"
2. "Discuss" path provides contact or share capability
3. "Tactical Planning" path links to implementation proposal page at existing route
4. CTA buttons are visually distinct with sufficient size for mobile tapping

---

## Progress

| Phase | Status | Requirements | Completion |
|-------|--------|--------------|------------|
| 1 - Foundation & Migration | Complete | 3 | 100% |
| 2 - Core Navigation | Complete | 9 | 100% |
| 3 - Content Architecture | Complete | 12 | 100% |
| 4 - Visual Storytelling | Complete | 8 | 100% |
| 5 - Responsive & Performance | Complete | 10 | 100% |
| 5.5 - Visual Design & Polish | **In Progress** | N/A | 0% |
| 6 - Decision Routing | Pending | 4 | 0% |

**Overall:** 42/47 requirements complete (89%) + Phase 5.5 design enhancement

---

## Dependencies

```
Phase 1: Foundation & Migration
    |
Phase 2: Core Navigation System
    |
Phase 3: Content Architecture <----|
    |                               |
Phase 4: Visual Storytelling        |
    |                               |
Phase 5: Responsive & Performance   |
    |                               |
Phase 5.5: Visual Design & Polish <-+
    |
Phase 6: Decision Routing
```

---

*Last updated: 2026-01-28 (Phase 5.5 planned)*
