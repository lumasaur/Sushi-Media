# Current State Analysis - Presentation Design

**Date:** 2026-01-28
**Purpose:** Baseline assessment before Phase 5.5 redesign

## Current Implementation Overview

### Slide Structure (11 Main Story Slides)

0. **Title** - "Premium Sushi with Social Soul"
1. **The Opportunity** - Empty Hours framing with RevenueChart
2. **Three Systems** - Overview with SystemDiagram
3. **What Changes, What Doesn't** - Two-column layout
4. **Social Media Engine** - Deep dive with mini-story link
5. **Corporate Lunch Machine** - Deep dive with mini-story link
6. **Weekday Bar Activation** - Deep dive with mini-story link
7. **First 30 Days** - Timeline visualization
8. **February 2026** - Calendar (INCOMPLETE - missing rendering)
9. **Tracking Metrics** - Dashboard (INCOMPLETE - missing rendering)
10. **Next Steps** - CTAs (not yet built)

### Mini-Stories
- Social Media (7 slides)
- Corporate Lunch (4 slides)
- Weekday Bar (7 slides)

**Total:** 29 slides across all stories

---

## Design Issues Inventory

### 1. Layout Problems

**Issue:** Generic, repetitive layouts
- **Current pattern:** Every content slide = title + subtitle + bullet list
- **No variety:** No split screens, asymmetric layouts, or creative compositions
- **Missing:** Image-text combinations, card layouts, visual storytelling

**Files Affected:**
- `app/page.tsx` (lines 76-140) - All layout logic
- `SlideContainer.tsx` - Container constraints

---

### 2. Content Truncation

**Issue:** Content cut off at top/bottom

**Root Causes:**
- Fixed padding: `pt-20 pb-20` in SlideContainer.tsx:43
- Center alignment: `items-center justify-center` in app/page.tsx:74
- No overflow handling for tall content
- Horizontal padding: `px-12 md:px-24` may be too aggressive

**Visual Impact:**
- Bullets at bottom get cut off
- No scrolling affordance for overflowing content
- Inconsistent spacing between slides

**Files Affected:**
- `components/presentation/SlideContainer.tsx` (line 43)
- `app/page.tsx` (line 74)

---

### 3. Color Usage Issues

**Issue:** Red backgrounds feel overwhelming, not tasteful

**Current Color Strategy:**
- Background: `bg-night` gradient (dark) - GOOD
- Most slides: `from-gray-900 to-black` - Generic
- Accent color: `beni (#8b2635)` - Being overused?
- Text colors: `text-washi` (cream), `text-hai` (gray), `text-kincha` (gold)

**Problem Areas:**
- Need to audit where red is used as background vs. accent
- Should be: Red for highlights, CTAs, emphasis - NOT full backgrounds
- Japanese palette exists but not being used creatively

**Files Affected:**
- `lib/slides/content.ts` - Background definitions per slide
- `app/globals.css` - Color token definitions
- All visualization components

---

### 4. Typography

**Current:**
- Headings: Cormorant Garamond (serif, elegant)
- Body: EB Garamond (serif)
- Sizing: `text-4xl md:text-5xl` for titles, `text-xl md:text-2xl` for subtitles

**Issues:**
- No creative type treatments
- No size variation for emphasis
- No use of font weight for hierarchy beyond bold
- Missing: Large display type, small caps, letter spacing

---

### 5. Image Integration

**Available Assets (Unused):**
```
Assets/
├── Bar patrons warm.png      - Weekday Bar story
├── Empty Space.png            - Opportunity slide
├── Happy Hour.png             - Weekday Bar story
├── Meta Insights.png          - Social Media story
├── Mix n Mingle.png           - Weekday Bar story
├── Office park.png            - Corporate Lunch story
├── Smartphone Insta.png       - Social Media story
└── Sushi Platter.png          - Title/brand imagery
```

**Current Image Usage:** ZERO
- No images integrated into any slides
- Major missed opportunity for visual storytelling
- Could dramatically improve engagement

**Potential Uses:**
- Slide 0 (Title): Sushi Platter as hero image
- Slide 1 (Opportunity): Empty Space to show problem
- Slide 4 (Social Media): Smartphone Insta + Meta Insights
- Slide 5 (Corporate Lunch): Office park
- Slide 6 (Weekday Bar): Bar patrons, Happy Hour, Mix n Mingle
- Mini-stories: Use images within deep dives

---

### 6. Visual Hierarchy

**Current Approach:**
- Title at top
- Subtitle below
- Bullets in vertical list
- Everything centered or left-aligned

**Missing:**
- Visual weight variation
- Asymmetric compositions
- Grid-based layouts
- Focal points and flow
- Whitespace as design element

---

### 7. Animation & Motion

**Current:**
- Staggered bullet animations (100ms stagger, 300ms duration)
- Slide transitions (250ms)
- Material Design easing

**Good:** Timing is solid
**Missing:**
- Entrance animations for images
- Parallax or depth effects
- More sophisticated transitions for different content types
- Fade-in effects for backgrounds

---

## Technical Constraints

### Responsive Requirements
- **Primary device:** iPad landscape (1024px)
- **Secondary:** Desktop, tablets
- **Fallback:** Portrait mobile (functional, not optimized)

### Performance Requirements
- 60fps animations
- Fast page loads (<2s on 3G)
- Smooth transitions

### Tech Stack
- Next.js 14 App Router
- TypeScript (strict mode)
- Tailwind CSS
- Framer Motion
- Lucide React icons

---

## Opportunities for Improvement

### High Impact, Lower Effort
1. **Fix truncation** - Adjust padding, add overflow handling
2. **Integrate images** - 8 images ready to use
3. **Reduce red backgrounds** - Use as accents only
4. **Add split-screen layouts** - Image + text side-by-side

### High Impact, Higher Effort
1. **Create layout variety** - 5-6 different slide templates
2. **Visual storytelling** - Images as narrative elements
3. **Typography treatments** - Creative use of type hierarchy
4. **Custom visualizations** - Beyond basic charts

### Polish & Refinement
1. **Whitespace optimization** - Breathing room for content
2. **Color gradient sophistication** - Beyond simple dark backgrounds
3. **Micro-interactions** - Hover states, subtle animations
4. **Content hierarchy** - Visual weight, contrast, flow

---

## Files Requiring Changes

### Core Files
- `app/page.tsx` - All layout rendering logic
- `components/presentation/SlideContainer.tsx` - Container structure
- `lib/slides/content.ts` - Slide data and background definitions
- `app/globals.css` - Color tokens, utilities

### Visualization Components
- `components/presentation/visualizations/SystemDiagram.tsx`
- `components/presentation/visualizations/Timeline.tsx`
- `components/presentation/visualizations/RevenueChart.tsx`

### Mini-Story Pages
- `app/presentation/social-media/page.tsx`
- `app/presentation/corporate-lunch/page.tsx`
- `app/presentation/weekday-bar/page.tsx`

---

## Success Criteria for Redesign

### Must Haves
- [ ] No content truncation on any slide
- [ ] Red used as tasteful accent (not backgrounds)
- [ ] All 8 images integrated strategically
- [ ] Minimum 4 different layout patterns
- [ ] Modern, visually compelling design

### Should Haves
- [ ] Creative typography treatments
- [ ] Asymmetric/split-screen layouts
- [ ] Visual hierarchy that guides eye flow
- [ ] Professional color usage (Japanese palette)

### Nice to Haves
- [ ] Parallax or depth effects
- [ ] Advanced micro-interactions
- [ ] Custom illustration elements
- [ ] Animated transitions between layout types

---

*Next: Await research findings, then discuss with user*
