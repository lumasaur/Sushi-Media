# Design System: Ami Sushi Presentation

**Last Updated:** 2026-01-27
**Aesthetic:** Sophisticated, tasteful, premium Japanese restaurant

## Design Philosophy

The presentation should feel like stepping into a high-end omakase restaurant:
- **Restraint over excess** — Let content breathe, use whitespace generously
- **Warmth over coldness** — Muted earth tones, not clinical whites
- **Elegance over impact** — Subtle sophistication, not aggressive contrast
- **Japanese minimalism** — Clean lines, purposeful elements, nothing gratuitous

---

## Color Palette

### Primary Colors

| Name | Hex | Usage |
|------|-----|-------|
| **Sumi (Ink Black)** | `#1a1614` | Primary background, deep and warm |
| **Washi (Paper White)** | `#faf8f5` | Primary text, warm not clinical |
| **Beni (Deep Red)** | `#8b2635` | Accent, more burgundy than firebrick |

### Secondary Colors

| Name | Hex | Usage |
|------|-----|-------|
| **Kincha (Gold Tea)** | `#c4a35a` | Highlights, premium accents |
| **Hai (Ash Gray)** | `#6b6560` | Secondary text, subtle elements |
| **Kitsune (Fox Tan)** | `#d4c4a8` | Warm backgrounds, cards |

### Gradient Backgrounds

| Name | Colors | Usage |
|------|--------|-------|
| **Night** | `#1a1614` → `#2d2825` | Standard slide background |
| **Deep** | `#1a1614` → `#1f1a18` | Title slide, emphasis |
| **Warm** | `#2d2825` → `#3d3530` | Alternate slide background |

### Opacity Scale

For overlays and subtle layering:
- `washi/5` — 5% white overlay for depth
- `washi/10` — 10% for subtle separation
- `beni/20` — 20% red for hover states
- `kincha/30` — 30% gold for highlights

---

## Typography

### Font Stack

| Role | Font | Weight | Usage |
|------|------|--------|-------|
| **Headings** | Cormorant Garamond | 500, 600 | Titles, slide headers |
| **Body** | EB Garamond | 400 | Bullets, descriptions |
| **UI/Meta** | Inter | 400, 500 | Navigation, labels |

### Type Scale

| Name | Size | Line Height | Usage |
|------|------|-------------|-------|
| **Display** | 3.5rem (56px) | 1.1 | Title slide only |
| **H1** | 2.5rem (40px) | 1.2 | Slide titles |
| **H2** | 1.75rem (28px) | 1.3 | Section headers |
| **H3** | 1.25rem (20px) | 1.4 | Bullet headers |
| **Body** | 1.125rem (18px) | 1.6 | Standard text |
| **Small** | 0.875rem (14px) | 1.5 | Captions, meta |

### Letter Spacing

- Headings: `-0.02em` (slightly tighter)
- Body: `0` (default)
- UI elements: `0.02em` (slightly looser)

---

## Spacing

### Scale (8px base)

| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | 0.25rem (4px) | Tight gaps |
| `space-2` | 0.5rem (8px) | Icon gaps |
| `space-3` | 0.75rem (12px) | List item spacing |
| `space-4` | 1rem (16px) | Standard gap |
| `space-6` | 1.5rem (24px) | Section spacing |
| `space-8` | 2rem (32px) | Large gaps |
| `space-12` | 3rem (48px) | Slide padding |
| `space-16` | 4rem (64px) | Major sections |

### Container

- Max width: `1200px` for content
- Slide padding: `space-12` (48px) on all sides
- Content max-width: `900px` for readability

---

## Components

### Slide Container

```css
background: linear-gradient(180deg, #1a1614 0%, #2d2825 100%);
padding: 3rem;
min-height: 100vh;
```

### Bullet Points

```css
/* Main bullet */
color: #faf8f5;
font-size: 1.125rem;
line-height: 1.6;
margin-bottom: 0.75rem;
padding-left: 1.5rem;
border-left: 2px solid #8b2635;

/* Sub-bullet */
color: #6b6560;
font-size: 1rem;
margin-left: 1.5rem;
border-left-color: #c4a35a;
```

### Cards (for system boxes, etc.)

```css
background: rgba(250, 248, 245, 0.03);
border: 1px solid rgba(250, 248, 245, 0.08);
border-radius: 8px;
padding: 1.5rem;
```

### Buttons

**Primary (CTA):**
```css
background: #8b2635;
color: #faf8f5;
padding: 0.75rem 1.5rem;
border-radius: 4px;
font-weight: 500;
transition: background 200ms ease;

&:hover {
  background: #6d1e2a;
}
```

**Secondary:**
```css
background: transparent;
color: #faf8f5;
border: 1px solid rgba(250, 248, 245, 0.3);
padding: 0.75rem 1.5rem;
border-radius: 4px;

&:hover {
  border-color: #c4a35a;
  color: #c4a35a;
}
```

### Progress Indicator

```css
/* Track */
background: rgba(250, 248, 245, 0.1);
height: 2px;

/* Fill */
background: linear-gradient(90deg, #8b2635, #c4a35a);
```

### Navigation Dots

```css
/* Inactive */
width: 8px;
height: 8px;
border-radius: 50%;
background: rgba(250, 248, 245, 0.2);

/* Active */
background: #c4a35a;
```

---

## Animation

### Principles

- **Subtle** — Animations should feel natural, not attention-grabbing
- **Purposeful** — Every animation communicates something
- **Fast** — Under 300ms for most transitions
- **Eased** — Use ease-out for enters, ease-in for exits

### Timing

| Animation | Duration | Easing |
|-----------|----------|--------|
| Slide transition | 250ms | cubic-bezier(0.4, 0, 0.2, 1) |
| Fade in | 200ms | ease-out |
| Stagger delay | 100ms | — |
| Hover states | 150ms | ease |

### Stagger Pattern

For bullet lists:
```javascript
delay: index * 100, // 100ms between items
duration: 300,
ease: [0.4, 0, 0.2, 1]
```

---

## Visual Elements

### Icons

- Source: Lucide React
- Size: 20px for inline, 24px for standalone
- Color: `hai` (#6b6560) for subtle, `kincha` (#c4a35a) for emphasis
- Stroke width: 1.5px (thinner than default for elegance)

### Dividers

```css
/* Subtle line */
height: 1px;
background: linear-gradient(
  90deg,
  transparent 0%,
  rgba(250, 248, 245, 0.1) 20%,
  rgba(250, 248, 245, 0.1) 80%,
  transparent 100%
);
```

### System Diagram Connections

```css
/* Arrow lines */
stroke: #c4a35a;
stroke-width: 1px;
stroke-dasharray: 4 4;
opacity: 0.5;
```

---

## Responsive Behavior

### Breakpoints

| Name | Width | Usage |
|------|-------|-------|
| `sm` | 640px | Portrait tablets |
| `md` | 768px | Landscape tablets (primary) |
| `lg` | 1024px | Small desktops |
| `xl` | 1280px | Standard desktops |
| `tv` | 1920px | Presentation mode |

### Primary Target: iPad Landscape (1024×768)

- All slides must fit without scrolling
- Touch targets minimum 44px
- Font sizes optimized for arm's length viewing

---

## CSS Custom Properties

```css
:root {
  /* Colors */
  --color-sumi: #1a1614;
  --color-washi: #faf8f5;
  --color-beni: #8b2635;
  --color-kincha: #c4a35a;
  --color-hai: #6b6560;
  --color-kitsune: #d4c4a8;

  /* Typography */
  --font-heading: 'Cormorant Garamond', serif;
  --font-body: 'EB Garamond', serif;
  --font-ui: 'Inter', sans-serif;

  /* Spacing */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;

  /* Animation */
  --ease-out: cubic-bezier(0.4, 0, 0.2, 1);
  --duration-fast: 150ms;
  --duration-normal: 250ms;
  --duration-slow: 400ms;
}
```

---

## Color Comparison: Before & After

| Element | Before (Striking) | After (Sophisticated) |
|---------|-------------------|----------------------|
| Background | `#120c0d` (pure dark) | `#1a1614` (warm dark) |
| Text | `#f5f5f5` (gray-white) | `#faf8f5` (cream) |
| Accent | `#b22222` (firebrick) | `#8b2635` (burgundy) |
| Highlight | — | `#c4a35a` (gold tea) |
| Secondary text | `#9ca3af` (gray-400) | `#6b6560` (warm gray) |

The key shifts:
1. **Warmer blacks** — Less stark, more inviting
2. **Cream over white** — Softer on eyes, feels premium
3. **Burgundy over red** — More sophisticated, less aggressive
4. **Added gold** — Premium accent without being flashy
5. **Warm grays** — Cohesive with overall warmth

---

*Design system created: 2026-01-27*
*Reference this document when implementing styles*
