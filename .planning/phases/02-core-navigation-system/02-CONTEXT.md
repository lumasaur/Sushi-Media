# Phase 2: Core Navigation System - Context

**Gathered:** 2026-01-25
**Status:** Ready for planning

<domain>
## Phase Boundary

Multi-input navigation system enabling users to navigate through presentation slides using touch gestures (double-tap, swipe), keyboard shortcuts, and mouse clicks. Includes URL state persistence with browser history integration, visual feedback during transitions, and smooth animations. Navigation must feel responsive (<300ms transitions) while preventing accidental triggers during vertical scrolling.

</domain>

<decisions>
## Implementation Decisions

### Touch Gesture Tuning

- **Double-tap timing**: Generous 600ms threshold - easier for users with slower tap speeds
- **Swipe distance**: Medium threshold (100-150px) - clear intent required, balanced responsiveness
- **Scroll vs navigation conflict**: Angle detection - if swipe angle >30° from horizontal, treat as vertical scroll not navigation
- **Visual affordances**: Subtle hints on first visit (faint edge gradients or icons), fade after user interaction - cleaner than always-visible indicators

### Navigation Feedback

- **Tap feedback**: Slide preview - brief peek at next/previous slide edge before full transition
- **Transition duration**: Standard 250-350ms - smooth, noticeable transition within <300ms requirement
- **Haptic feedback**: Yes, subtle - light haptic tap on mobile for successful navigation
- **Animation style**: Fade + slide combo - slides move horizontally AND fade for smooth, polished transition

### URL & History Behavior

- **URL format**: Hash fragment (#3) - simple, works without server routing config
- **History entries**: Only forward navigation creates history entries - prevents back button spam, backward nav uses existing history
- **Deep linking**: Jump directly to requested slide (e.g., /#5 loads on slide 5)
- **Invalid slides**: Redirect to first slide - invalid slide numbers (e.g., /#99) redirect to slide 1

### Keyboard Controls

- **Forward keys**: Right Arrow, Down Arrow, Spacebar, Page Down, Enter
- **Backward keys**: Left Arrow, Up Arrow, Page Up, Backspace
- **Focus management**: Keyboard nav disabled when user is in input/textarea/select elements - prevents conflicts with typing

### Claude's Discretion

- Jump-to-first/last keyboard shortcuts (Home/End keys) - Claude decides if standard
- Exact implementation of slide preview peek animation
- Edge gradient/hint design for touch zones
- Easing curves for fade + slide transitions
- Accessibility ARIA labels and screen reader announcements

</decisions>

<specifics>
## Specific Ideas

No specific product references mentioned - implementation follows modern presentation UX patterns (PowerPoint/Google Slides/Keynote style navigation with mobile-friendly enhancements).

</specifics>

<deferred>
## Deferred Ideas

None - discussion stayed within phase scope.

</deferred>

---

*Phase: 02-core-navigation-system*
*Context gathered: 2026-01-25*
