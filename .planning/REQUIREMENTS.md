# Requirements: Sushi-Media Presentation Site

**Defined:** 2026-01-24
**Core Value:** Clear communication of complex multi-system strategy through visual storytelling and concise messaging that drives stakeholder decision-making.

## v1 Requirements

Requirements for slide-based presentation rebuild. Each maps to roadmap phases.

### Navigation & UX

- [ ] **NAV-01**: User can navigate slides via click (left 25% back, right 75% forward)
- [ ] **NAV-02**: User can navigate slides via keyboard (arrow keys, spacebar, Home/End)
- [ ] **NAV-03**: User can navigate slides via touch gestures (swipe horizontal/vertical)
- [ ] **NAV-04**: User sees current position (slide counter: "3 / 12")
- [ ] **NAV-05**: User sees overall progress (progress bar visualization)
- [ ] **NAV-06**: User can jump to sections via breadcrumbs
- [ ] **NAV-07**: Slide transitions are smooth (fade + slide animations, <300ms)
- [ ] **NAV-08**: Navigation state persists (URL updates with slide number)

### Content Structure

- [ ] **CONT-01**: Title slide introduces "Premium Sushi with Social Soul"
- [ ] **CONT-02**: Opportunity slide presents "Capturing the Empty Hours" framing
- [ ] **CONT-03**: Three Systems overview slide (Social Media → Corporate Lunch → Weekday Bar)
- [ ] **CONT-04**: System 1 deep dive slide (Social Media Engine details)
- [ ] **CONT-05**: System 2 deep dive slide (Corporate Lunch Machine details)
- [ ] **CONT-06**: System 3 deep dive slide (Weekday Bar Activation details)
- [ ] **CONT-07**: Timeline slide shows First 30 Days execution calendar
- [ ] **CONT-08**: Calendar slide shows February 2026 events (scrollable)
- [ ] **CONT-09**: Brand pillars embedded throughout narrative (not standalone section)
- [ ] **CONT-10**: Success metrics slide shows tracking dashboard
- [ ] **CONT-11**: Next steps slide with decision routing (discuss vs dive into tactics)
- [ ] **CONT-12**: All slide content is scannable (headlines + bullets, no paragraphs)

### Visual Components

- [ ] **VIS-01**: Timeline graphic visualizes First 30 Days execution (week-by-week)
- [ ] **VIS-02**: Calendar component displays February 2026 events (interactive or static)
- [ ] **VIS-03**: System diagram shows three interconnected systems with flow arrows
- [ ] **VIS-04**: Revenue opportunity chart (empty hours vs filled hours)
- [ ] **VIS-05**: Staggered entry animations for slide content (items appear sequentially)
- [ ] **VIS-06**: Icon usage for visual hierarchy (Lucide React)
- [ ] **VIS-07**: Color coding consistent with brand (existing red/dark theme)
- [ ] **VIS-08**: Data visualizations are mobile-readable (no tiny text)

### Responsive Design

- [ ] **RESP-01**: Optimized for landscape viewing (tablet, desktop, TV presentation)
- [ ] **RESP-02**: Touch targets minimum 44px for tablet tap accuracy
- [ ] **RESP-03**: Portrait mobile functional but unoptimized (fallback support)
- [ ] **RESP-04**: Text/charts readable in landscape presentation format
- [ ] **RESP-05**: Horizontal swipes navigate, vertical swipes scroll (on scrollable slides)
- [ ] **RESP-06**: Images/charts scale appropriately for landscape viewports

### Decision Routing

- [ ] **DEC-01**: Final slide presents two clear paths (discuss with stakeholders / tactical planning)
- [ ] **DEC-02**: "Discuss" path provides contact/share capability
- [ ] **DEC-03**: "Tactical planning" path links to implementation proposal page
- [ ] **DEC-04**: CTA buttons visually distinct and mobile-friendly

### Portfolio Quality

- [ ] **PORT-01**: Animations run at 60fps (no jank)
- [ ] **PORT-02**: Page load time <2 seconds on 3G
- [ ] **PORT-03**: TypeScript strict mode with no errors
- [ ] **PORT-04**: Accessible (keyboard navigation, semantic HTML, ARIA labels)
- [ ] **PORT-05**: Code demonstrates clean architecture (reusable components, clear patterns)

### Archive & Migration

- [ ] **ARCH-01**: Existing 50-initiative portfolio moved to /archive route
- [ ] **ARCH-02**: Implementation proposal page preserved at existing route
- [ ] **ARCH-03**: Kangaroo components migrated to Sushi-Media (SlideContainer, etc.)

## v2 Requirements

Deferred to future iterations.

### Enhanced Interactivity

- **INT-01**: Interactive timeline (click events to expand details)
- **INT-02**: Animated system diagram (flow visualization on load)
- **INT-03**: Live metrics dashboard (connects to real data source)
- **INT-04**: Video embed capability for stakeholder testimonials

### Advanced Navigation

- **ADV-01**: Slide thumbnails view (overview mode)
- **ADV-02**: Search/filter slides by keyword
- **ADV-03**: Share specific slide via URL
- **ADV-04**: Presenter notes mode (hidden second screen)

## Out of Scope

| Feature | Reason |
|---------|--------|
| Auto-advance slides | Stakeholders need self-paced review |
| Background music/audio | Distracting, unprofessional for business context |
| Multiple language versions | English-only audience initially |
| Real-time collaboration | Single-viewer presentation, not collaborative |
| Print-optimized version | Digital-first experience, PDFs can export later |
| Heavy 3D animations | Performance cost, diminishing returns on storytelling |

## Traceability

Which phases cover which requirements. Updated during roadmap creation.

| Requirement | Phase | Status |
|-------------|-------|--------|
| NAV-01 | TBD | Pending |
| NAV-02 | TBD | Pending |
| NAV-03 | TBD | Pending |
| NAV-04 | TBD | Pending |
| NAV-05 | TBD | Pending |
| NAV-06 | TBD | Pending |
| NAV-07 | TBD | Pending |
| NAV-08 | TBD | Pending |
| CONT-01 | TBD | Pending |
| CONT-02 | TBD | Pending |
| CONT-03 | TBD | Pending |
| CONT-04 | TBD | Pending |
| CONT-05 | TBD | Pending |
| CONT-06 | TBD | Pending |
| CONT-07 | TBD | Pending |
| CONT-08 | TBD | Pending |
| CONT-09 | TBD | Pending |
| CONT-10 | TBD | Pending |
| CONT-11 | TBD | Pending |
| CONT-12 | TBD | Pending |
| VIS-01 | TBD | Pending |
| VIS-02 | TBD | Pending |
| VIS-03 | TBD | Pending |
| VIS-04 | TBD | Pending |
| VIS-05 | TBD | Pending |
| VIS-06 | TBD | Pending |
| VIS-07 | TBD | Pending |
| VIS-08 | TBD | Pending |
| RESP-01 | TBD | Pending |
| RESP-02 | TBD | Pending |
| RESP-03 | TBD | Pending |
| RESP-04 | TBD | Pending |
| RESP-05 | TBD | Pending |
| RESP-06 | TBD | Pending |
| DEC-01 | TBD | Pending |
| DEC-02 | TBD | Pending |
| DEC-03 | TBD | Pending |
| DEC-04 | TBD | Pending |
| PORT-01 | TBD | Pending |
| PORT-02 | TBD | Pending |
| PORT-03 | TBD | Pending |
| PORT-04 | TBD | Pending |
| PORT-05 | TBD | Pending |
| ARCH-01 | TBD | Pending |
| ARCH-02 | TBD | Pending |
| ARCH-03 | TBD | Pending |

**Coverage:**
- v1 requirements: 47 total
- Mapped to phases: 0 (roadmap not created yet)
- Unmapped: 47 ⚠️

---
*Requirements defined: 2026-01-24*
*Last updated: 2026-01-24 after initial definition*
