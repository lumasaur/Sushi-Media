# Phase 5: Responsive & Performance - Context

**Gathered:** 2026-01-26
**Status:** Ready for planning

<domain>
## Phase Boundary

Optimize the presentation for landscape viewing devices (tablets, desktops, TV presentation mode) with portfolio-quality performance and accessibility. Portrait mobile gets functional fallback. All animations run at 60fps, page loads under 2s on 3G, TypeScript strict mode enabled.

</domain>

<decisions>
## Implementation Decisions

### Viewport Priorities
- **Primary device:** Tablet (iPad 10.9" in landscape) — stakeholders view handheld
- **Minimum supported:** iPad 10.9" (~1024px landscape width)
- **Portrait mobile:** Functional fallback — works but not optimized, suggest rotating to landscape
- **TV/Projector:** No special presentation mode — same experience scales to all sizes

### Scaling Behavior
- **Container width:** Implement both max-width and full-viewport options as toggleable — test which works better during stakeholder demos (CSS class toggle, query param or localStorage setting)
- **Charts (RevenueChart, Timeline, SystemDiagram):** Scale proportionally with viewport — larger screens get bigger charts for visual impact
- **Typography:** Fixed breakpoints, not fluid — font sizes step up at specific screen widths (more predictable)
- **Content overflow:** Truncate/condense to fit one screen — slides should never require scrolling

### Claude's Discretion
- Specific breakpoint values (tablet, desktop, large desktop)
- Touch target implementation details (44px minimum per requirement)
- Performance optimization techniques (lazy loading, code splitting, etc.)
- Accessibility implementation depth (ARIA labels, focus management)
- Reduced motion handling (prefers-reduced-motion media query)

</decisions>

<specifics>
## Specific Ideas

- Container width toggle allows real-time A/B testing during stakeholder presentations
- Tablet-first approach means touch interactions remain primary even on larger screens
- "Always fits one screen" philosophy keeps it feeling like a presentation, not a webpage

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 05-responsive-performance*
*Context gathered: 2026-01-26*
