# Sushi-Media Presentation Site

## What This Is

A Next.js presentation site that transforms the "Premium Sushi with Social Soul" marketing strategy into a visual, slide-based experience for Ami Sushi stakeholders. Uses Kangaroo-style navigation (click/swipe/keyboard) to guide ownership group and external stakeholders through the strategic narrative with scannable, visual-first storytelling.

## Core Value

Clear communication of a complex multi-system strategy through visual storytelling and concise messaging that drives stakeholder decision-making (discuss further vs. dive into tactical planning).

## Requirements

### Validated

- ✓ Next.js 14 App Router architecture — existing
- ✓ TypeScript + Tailwind CSS stack — existing
- ✓ Framer Motion animation library — existing (Kangaroo)
- ✓ Mobile-responsive design patterns — existing
- ✓ SlideContainer component architecture — existing (Kangaroo)

### Active

- [ ] Slide-based navigation system (Kangaroo pattern: click/swipe/keyboard)
- [ ] Consolidated strategic narrative (Pages 1+2 content + new comprehensive strategy)
- [ ] Timeline graphics (First 30 Days execution calendar, February 2026 events)
- [ ] Three Systems framework visualization (Social Media → Corporate Lunch → Weekday Bar)
- [ ] Brand pillars embedded in narrative flow (not standalone section)
- [ ] Concise messaging architecture (headlines + bullets, not paragraphs)
- [ ] Progress indicators (slide counter, progress bar, breadcrumbs)
- [ ] Decision point routing (discuss with stakeholders vs. tactical planning)
- [ ] Touch gesture support (horizontal/vertical swipes)
- [ ] Staggered entry animations for slide content
- [ ] Scrollable slide support for dense content (calendar, detailed breakdowns)
- [ ] Archive existing 50-initiative portfolio (preserve but remove from main flow)

### Out of Scope

- 50-initiative interactive filtering tool — Archive for reference
- Scrolling-based presentation experience — Using slides instead
- Long-form paragraph content — Visual-first approach
- Multiple audience-specific versions — Single narrative for all stakeholders initially
- Real-time data integration — Static presentation content

## Context

### Existing Codebase

- **Page 1 (/)**: High-level strategy overview (brand pillars, 5 revenue opportunities, 3-phase roadmap)
- **Page 2 (/strategy-review)**: 50-initiative portfolio with filtering, Phase 0 infrastructure, performance projections
- **Page 3 (/strategy-review/implementation-proposal)**: Tactical playbook (calendars, POS setup, email marketing)
- **Kangaroo project**: Proven slide-based presentation architecture with navigation patterns

### Strategic Content Source

Comprehensive strategy document from separate planning chat includes:
- "Capturing the Empty Hours" framing (lunch + weekday bar = untapped revenue)
- Three interconnected systems: Social Media Engine, Corporate Lunch Machine, Weekday Bar Activation
- Specific execution details: February 2026 calendar, Social Hour menu pricing, Mix & Mingle event structure
- First 30 Days execution timeline
- Main Story (10 slides), Mini Stories (3 deep dives), Tactical Appendix (7 sections)

### Target Audience

- **Primary**: Ownership group (needs clear ROI + risk assessment)
- **Secondary**: External stakeholders (potential partners, investors)
- **Constraint**: Limited attention span — scannable, visual-first required
- **Portfolio objective**: Demonstrate strategic thinking + technical execution capabilities

## Constraints

- **Tech stack**: Next.js 14 App Router, TypeScript 5.x, Tailwind CSS — no changes
- **Component reuse**: Leverage Kangaroo presentation components (SlideContainer, navigation, animations)
- **Content flexibility**: Story may evolve after stakeholder review — build modular slide structure
- **Mobile-first**: Touch gestures + responsive layouts required (stakeholders review on phones)
- **Performance**: Smooth 60fps animations, fast page loads
- **Timeline**: No hard deadline specified — quality over speed

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Slide-based navigation over scrolling | Stakeholder attention + scannable format + portfolio quality | — Pending |
| Consolidate Pages 1+2 into single narrative | Eliminate fragmentation, tell coherent story | — Pending |
| Kangaroo component reuse | Proven architecture, accelerate development | — Pending |
| Archive 50-initiative portfolio | Too granular for primary narrative, preserve for reference | — Pending |
| Visual-first messaging (no paragraphs) | Stakeholder constraint: limited attention | — Pending |

---
*Last updated: 2026-01-24 after initialization*
