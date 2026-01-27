# Phase 5: Presentation Rebuild - Context

**Gathered:** 2026-01-27
**Status:** Ready for planning

<domain>
## Phase Boundary

**SCOPE CHANGE:** This phase is now a comprehensive presentation rebuild, not just responsive optimization.

Rebuild the presentation to match the canonical PRESENTATION-STRUCTURE.md with the sophisticated DESIGN-SYSTEM.md aesthetic. This includes:

1. **Content restructure**: 10-slide main story (currently 8), multi-level navigation to Mini Stories
2. **Design refresh**: New color palette (Sumi, Washi, Beni, Kincha), typography refinements, component restyling
3. **Responsive optimization**: Landscape tablet primary target, touch optimization, performance

**Reference documents:**
- `.planning/PRESENTATION-STRUCTURE.md` — Canonical slide content and navigation structure
- `.planning/DESIGN-SYSTEM.md` — Color palette, typography, component styles, animation specs

</domain>

<decisions>
## Implementation Decisions

### Content Structure
- **Main Story**: 10 slides (add Slides 3 "What Changes" and 8 "February Calendar", restructure existing)
- **Mini Stories**: 3 sub-presentations accessible via deep-dive CTAs from main slides 4, 5, 6
- **Navigation**: Multi-level with ability to enter/exit Mini Stories, return to main flow
- **Tactical Appendix**: Linked reference pages, not slides (use existing /strategy-review routes)

### Color Palette (from DESIGN-SYSTEM.md)
- **Sumi** `#1a1614` — Primary background (replaces `#120c0d`)
- **Washi** `#faf8f5` — Primary text (replaces `#f5f5f5`)
- **Beni** `#8b2635` — Accent color (replaces `#b22222` firebrick)
- **Kincha** `#c4a35a` — Premium gold highlights (new)
- **Hai** `#6b6560` — Secondary text (replaces gray-400)
- **Kitsune** `#d4c4a8` — Warm card backgrounds (new)

### Typography
- Keep Cormorant Garamond for headings, EB Garamond for body
- Add Inter for UI/navigation elements
- Tighter letter-spacing on headings (-0.02em)
- Larger body text (1.125rem/18px)

### Component Styling
- Gradient backgrounds: `#1a1614` → `#2d2825` (Night gradient)
- Cards: 3% white overlay with 8% white border
- Buttons: Burgundy primary, gold-accent secondary hover
- Progress indicator: Burgundy → gold gradient
- Navigation dots: Gold when active

### Animation
- Reduce stagger delay from 150ms to 100ms
- Keep 250ms slide transitions
- Subtler, more purposeful animations

### Viewport Priorities (unchanged from prior context)
- **Primary device:** Tablet (iPad 10.9" in landscape)
- **Minimum supported:** iPad 10.9" (~1024px landscape width)
- **Portrait mobile:** Functional fallback
- **TV/Projector:** Same experience scales up

### Claude's Discretion
- Specific breakpoint implementation details
- Mini Story navigation UI pattern (tabs, back button, breadcrumbs)
- How to handle slide content that's longer than provided spec
- Performance optimization techniques
- Accessibility implementation depth

</decisions>

<specifics>
## Specific Ideas

- Japanese-inspired color naming (Sumi, Washi, Beni, Kincha, Hai, Kitsune) for semantic clarity
- "Always fits one screen" philosophy — no scrolling within slides
- Multi-level navigation should feel like exploring deeper, not leaving the presentation
- Gold accents used sparingly for premium feel, not everywhere
- Warmer overall palette creates "stepping into a high-end omakase" feeling

</specifics>

<deferred>
## Deferred Ideas

- Interactive February calendar component with click-to-expand events
- Tactical Appendix as slide sections (keeping as linked pages for now)
- Print/export to PDF functionality

</deferred>

---

*Phase: 05-presentation-rebuild*
*Context gathered: 2026-01-27*
