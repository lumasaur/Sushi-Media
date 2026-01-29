# Visual Design Specification - Ami Sushi Marketing Portal

**Last Updated:** 2026-01-29
**Status:** Ready for Google Antigravity Review
**Site URL:** https://sushi-media-ami.vercel.app (or preview deployment)

---

## 🎯 Purpose of This Document

This document provides **complete visual design specifications** for the Ami Sushi Marketing Portal presentation site. It is designed for **Google Antigravity** (Chrome extension) to:

1. **Audit** the current implementation against design specifications
2. **Identify** visual inconsistencies or missing elements
3. **Recommend** improvements to match the intended design
4. **Implement** CSS/styling fixes directly through the browser extension

---

## 📋 Instructions for Google Antigravity

### How to Use This Document:

1. **Open the site** in Chrome: https://amimarketingstrategy-git-feature-ami-dc16de-lumasaurs-projects.vercel.app/#1
2. **Activate Google Antigravity extension**
3. **Reference this document** for design specifications
4. **Compare** actual implementation vs. specifications below
5. **Identify gaps** in sections marked "⚠️ CRITICAL ISSUE" or "🔍 NEEDS REVIEW"
6. **Propose fixes** using CSS/HTML modifications
7. **Test changes** in browser before recommending code updates

---

## ⚠️ CRITICAL ISSUES TO ADDRESS

### Issue #1: Missing Mini-Story Navigation Links
**Location:** Site header (app/layout.tsx lines 40-77)
**Current State:** Header shows "Presentation | Archive | Implementation Proposal"
**Expected State:** Header should show mini-story links under Presentation as a dropdown 

**Specification:**
```html
<!-- Header should have dropdown under "Presentation" link -->
<div className="relative group">
  <a href="/" className="text-gray-300 hover:text-white font-medium">
    Presentation
  </a>
  <div className="dropdown-menu"> <!-- styled similar to Archive dropdown -->
    <a href="/presentation/social-media">Social Media Engine</a>
    <a href="/presentation/corporate-lunch">Corporate Lunch Machine</a>
    <a href="/presentation/weekday-bar">Weekday Bar Activation</a>
  </div>
</div>
```

**Visual Requirements:**
- Dropdown should match Archive dropdown styling (bg-[#1a1416], border-gray-700)
- Links should show on hover with smooth transition
- Text: gray-300 default, white on hover
- Dropdown width: ~240px (enough for "Corporate Lunch Machine")

---

### Issue #2: Slides With Lacking Visual Design
**Location:** Various slides throughout main presentation
**User Feedback:** "Some updates are great, but other sections are a bit lacking"

**Review These Slides Specifically:**

#### Slide 2: "Three Systems We're Building"
- **Current:** Systems diagram layout
- **Expected:** Should use BentoGrid or visual card layout
- **Check:** Are system boxes visually distinct? Do they have icons? Is spacing generous?

#### Slide 3: "What Changes, What Doesn't"
- **Current:** Two-column layout with kincha (left) and beni (right)
- **Expected:** Clear visual separation, color-coded sections
- **Check:** Are colors too bold? Should columns have background cards?

#### Slide 7: "First 30 Days Timeline"
- **Current:** Timeline layout with week breakdowns
- **Expected:** Visual timeline with progression indicators
- **Check:** Does it feel modern or generic? Are icons present?

#### Slide 10: "Next Steps" (CTA slide)
- **Current:** CTA buttons
- **Expected:** Premium, compelling design
- **Check:** Button hierarchy clear? Proper hover states? Visual appeal?

---

## 🎨 Design System Reference

### Color Palette (Japanese-Inspired)

#### Primary Colors
| Token | Hex | Tailwind Class | Usage |
|-------|-----|----------------|-------|
| Sumi (Ink Black) | `#1a1614` | `bg-sumi` | Primary backgrounds, deep and warm |
| Washi (Paper White) | `#faf8f5` | `text-washi` | Primary text, warm not clinical |
| Beni (Deep Red) | `#8b2635` | `text-beni` / `bg-beni` | **Accents only, NOT full backgrounds** |

#### Secondary Colors
| Token | Hex | Tailwind Class | Usage |
|-------|-----|----------------|-------|
| Kincha (Gold Tea) | `#c4a35a` | `text-kincha` / `bg-kincha` | Highlights, premium accents |
| Hai (Ash Gray) | `#6b6560` | `text-hai` | Secondary text, subtle elements |
| Kitsune (Fox Tan) | `#d4c4a8` | `text-kitsune` / `bg-kitsune` | Warm backgrounds, cards |

#### Premium Palette (Added Phase 5.5)
| Token | Hex | Tailwind Class | Usage |
|-------|-----|----------------|-------|
| Deep Indigo | `#2d3142` | `bg-deepIndigo` | Sophisticated dark backgrounds |
| Warm Cream | `#f4f1e8` | `bg-warmCream` | Light sections, contrast |
| Coral | `#e07a5f` | `text-coral` / `bg-coral` | Warm accents (alternative to beni) |
| Soft Gold | `#f2cc8f` | `text-softGold` | Subtle highlights |
| Charcoal | `#3d405b` | `bg-charcoal` | Cards, elevated surfaces |

### 🚫 Color Usage Rules

**RED (BENI) PHILOSOPHY:** "Red like wasabi - powerful in small amounts, overwhelming in large"

✅ **DO Use Red For:**
- Accent text (CTA labels, important keywords)
- Border accents (left border on bullets)
- Icon colors (sparingly)
- Hover states (20-30% opacity overlays)
- Small UI elements (badges, dots)

❌ **DO NOT Use Red For:**
- Full slide backgrounds
- Large sections or cards
- Text blocks longer than 2-3 words
- Anything that fills >20% of screen area

---

### Typography

#### Font Stack
| Role | Font | Tailwind Class | Weights |
|------|------|----------------|---------|
| Headings | Cormorant Garamond | `font-cormorant` | 400, 600, 700 |
| Body | EB Garamond | `font-garamond` | 400, 600 |
| UI/Meta | Inter | `font-inter` | 400, 500 |

#### Type Scale
| Element | Size | Line Height | Tailwind Class |
|---------|------|-------------|----------------|
| Display (Title slide only) | 56px (3.5rem) | 1.1 | `text-5xl md:text-6xl lg:text-7xl` |
| H1 (Slide titles) | 40px (2.5rem) | 1.2 | `text-3xl md:text-4xl lg:text-5xl` |
| H2 (Section headers) | 28px (1.75rem) | 1.3 | `text-2xl md:text-3xl` |
| H3 (Bullet headers) | 20px (1.25rem) | 1.4 | `text-xl` |
| Body | 18px (1.125rem) | 1.6 | `text-lg` |
| Small | 14px (0.875rem) | 1.5 | `text-sm` |

#### Letter Spacing
- Headings: `tracking-tight` (-0.02em)
- Body: `tracking-normal` (0)
- UI: `tracking-wide` (0.02em)

---

### Spacing & Layout

#### Minimum Padding Rule
**ALL slides MUST have minimum 32px padding on all sides**
- Desktop: `px-12 py-8` (48px horizontal, 32px vertical)
- Tablet: `px-8 py-8` (32px all sides)
- Mobile: `px-6 py-6` (24px all sides)

#### Content Container
- Max width: `max-w-6xl` (1152px) for most slides
- Full bleed: `w-full` for hero/image slides
- Centered: `mx-auto` for content containment

#### Spacing Scale (8px base)
```
space-1: 4px (tight gaps)
space-2: 8px (icon gaps)
space-3: 12px (list item spacing)
space-4: 16px (standard gap)
space-6: 24px (section spacing)
space-8: 32px (large gaps)
space-12: 48px (slide padding)
space-16: 64px (major sections)
```

---

### Animation System

#### Timing Values
| Animation | Duration | Easing | Tailwind |
|-----------|----------|--------|----------|
| Slide transitions | 250ms | cubic-bezier(0.4, 0, 0.2, 1) | `duration-250` + custom easing |
| Bullet stagger | 100ms delay | — | Framer Motion |
| Bullet fade-in | 300ms | ease-out | `duration-300` |
| Hover states | 150ms | ease | `duration-150` |

#### Stagger Pattern (Framer Motion)
```javascript
// Bullet list animation
initial={{ opacity: 0, x: -20 }}
animate={{ opacity: 1, x: 0 }}
transition={{
  duration: 0.3,
  delay: index * 0.1,  // 100ms stagger
  ease: [0.4, 0, 0.2, 1]
}}
```

---

## 🎭 Layout Components Library

### Overview of 5 Layout Components

| Component | File | Purpose | When To Use |
|-----------|------|---------|-------------|
| FullBleedHero | `layouts/FullBleedHero.tsx` | Full-screen image + minimal text | Title slide, dramatic openings |
| CenteredMinimal | `layouts/CenteredMinimal.tsx` | Large typography + whitespace | Single powerful message |
| AsymmetricSplit | `layouts/AsymmetricSplit.tsx` | Image + content side-by-side | Balanced storytelling |
| ImageBackground | `layouts/ImageBackground.tsx` | Photo background + overlay text | Atmospheric slides |
| BentoGrid | `layouts/BentoGrid.tsx` | Modular card grid | Multiple items, stats, quotes |

---

### Component #1: FullBleedHero

**Purpose:** Full-screen image with minimal text overlay
**Usage:** Slide 0 (Title), impactful hero slides

**Visual Specifications:**
```tsx
<div className="relative w-full h-screen">
  <Image
    src={imageSrc}
    alt={imageAlt}
    fill
    priority
    className="object-cover"
  />
  <div className="absolute inset-0 bg-black/40"> {/* Overlay */}
    <div className="flex items-center justify-center h-full px-8">
      <motion.h1
        className="text-6xl md:text-7xl lg:text-8xl font-cormorant font-bold text-washi text-center"
      >
        {title}
      </motion.h1>
    </div>
  </div>
</div>
```

**Key Requirements:**
- Image uses Next.js `<Image>` with `fill` and `priority`
- Text overlay: 40-50% black opacity (`bg-black/40`)
- Title: Extra large (text-6xl → text-8xl), centered
- Text color: Washi (warm white) `text-washi`
- No bullets, no subtitle - single powerful message

**Current Implementation:** Slide 0 (Title slide)
- **Image:** `/images/hero/sushi-platter.png`
- **Text:** "Premium Sushi with Social Soul"

🔍 **CHECK:**
- Is image loading with proper priority?
- Is text legible against image?
- Does overlay darken enough for contrast?
- Is text perfectly centered vertically and horizontally?

---

### Component #2: CenteredMinimal

**Purpose:** Large typography with generous whitespace (Japanese "ma" principle)
**Usage:** Single powerful messages, transitions between sections

**Visual Specifications:**
```tsx
<div className="min-h-full flex items-center justify-center px-8 py-12">
  <motion.div className="max-w-4xl mx-auto text-center">
    <motion.h2 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-semibold text-washi mb-6">
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p className="text-xl md:text-2xl text-hai font-garamond">
        {subtitle}
      </motion.p>
    )}
  </motion.div>
</div>
```

**Key Requirements:**
- Maximum whitespace - don't crowd the message
- Center everything: `text-center`, `mx-auto`
- Title: Large but not as big as FullBleed (text-4xl → text-6xl)
- Subtitle: Lighter color (hai), smaller (text-xl → text-2xl)
- Background: Should be gradient (sumi → darker shade)

🔍 **CHECK:**
- Is there enough breathing room around text?
- Does title have proper font-weight (semibold)?
- Is subtitle color distinct but readable (hai #6b6560)?

---

### Component #3: AsymmetricSplit

**Purpose:** Image + content side-by-side with various ratios
**Usage:** Storytelling slides that balance visuals with text

**Visual Specifications:**
```tsx
<div className="min-h-full flex items-center">
  <div className="grid grid-cols-1 md:grid-cols-5 gap-0 w-full">

    {/* Image side (3 columns = 60%) */}
    <div className="md:col-span-3 relative min-h-[400px]">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
      />
    </div>

    {/* Content side (2 columns = 40%) */}
    <div className="md:col-span-2 bg-charcoal p-8 md:p-12 flex flex-col justify-center">
      <motion.h2 className="text-3xl md:text-4xl font-cormorant text-washi mb-6">
        {title}
      </motion.h2>
      <div className="space-y-4">
        {bullets.map((bullet, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1, duration: 0.3 }}
          >
            <p className="text-lg text-washi border-l-2 border-kincha pl-4">
              {bullet}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</div>
```

**Supported Ratios:**
- `60-40`: Image 3 cols, content 2 cols (default)
- `70-30`: Image 3.5 cols, content 1.5 cols (image emphasis)
- `50-50`: Image 2.5 cols, content 2.5 cols (balanced)
- `40-60`: Image 2 cols, content 3 cols (content emphasis)

**Key Requirements:**
- Image: Always uses `<Image fill>` with object-cover
- Content side: Dark background (charcoal #3d405b)
- Bullets: Left border accent (kincha gold)
- Layout switches: Image left or right via `imagePosition` prop
- Animations: Bullets stagger in (100ms delay each)

**Current Implementation:**
- Slide 1: The Opportunity (40-60, image left)
- Slide 4: Social Media Engine (60-40, image right)
- Slide 5: Corporate Lunch Machine (60-40, image left)
- Slide 6: Weekday Bar Activation (60-40, image right)

🔍 **CHECK:**
- Do images load properly with sharp quality?
- Is content side background too dark or too light?
- Do bullets animate sequentially with 100ms stagger?
- Is golden border (kincha) visible on left of bullets?
- Does layout alternate left-right-left pattern feel balanced?

---

### Component #4: ImageBackground

**Purpose:** Photo background with gradient overlay for atmospheric storytelling
**Usage:** Immersive slides where content sits on top of imagery

**Visual Specifications:**
```tsx
<div className="relative min-h-full w-full">
  <Image
    src={imageSrc}
    alt={imageAlt}
    fill
    className="object-cover"
  />

  {/* Gradient overlay (4 types) */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
    {/* or: gradient-to-r, bg-black/60, backdrop-blur-sm */}
  </div>

  <div className="relative z-10 min-h-full flex items-end p-8 md:p-12">
    <div className="max-w-3xl">
      <motion.h2 className="text-4xl md:text-5xl font-cormorant text-washi mb-6">
        {title}
      </motion.h2>
      <motion.p className="text-xl text-washi/90">
        {content}
      </motion.p>
    </div>
  </div>
</div>
```

**Overlay Types:**
| Type | Gradient | Usage |
|------|----------|-------|
| `gradient-bottom` | `from-black/80 to-transparent` (top→bottom) | Text at bottom |
| `gradient-left` | `from-black/70 to-transparent` (left→right) | Text on left |
| `full-dark` | `bg-black/60` (uniform) | Text anywhere |
| `blur-bottom` | `backdrop-blur-sm` + gradient | Frosted effect |

**Key Requirements:**
- Background image always fills container
- Overlay darkness: 60-80% based on image brightness
- Text position: Usually bottom-left or center
- Text color: Washi (warm white) with high contrast
- Content max-width: `max-w-3xl` for readability

🔍 **CHECK:**
- Is text always legible against background?
- Does gradient create proper contrast zone?
- Is overlay too dark (feels oppressive) or too light (can't read)?

---

### Component #5: BentoGrid

**Purpose:** Japanese-inspired modular grid for stats, quotes, images
**Usage:** Slide 9 (metrics), any multi-item showcase

**Visual Specifications:**
```tsx
<div className="min-h-full p-8 md:p-12">
  <motion.h2 className="text-4xl font-cormorant text-washi mb-8">
    {title}
  </motion.h2>

  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
    {items.map((item, i) => (
      <motion.div
        key={i}
        className={`
          ${item.size === 'large' ? 'col-span-2 row-span-2' : ''}
          ${item.size === 'medium' ? 'col-span-1 row-span-2' : ''}
          bg-charcoal rounded-lg p-6 border border-washi/10
        `}
      >
        {/* Item content varies by type */}
      </motion.div>
    ))}
  </div>
</div>
```

**Item Types:**
| Type | Content | Example |
|------|---------|---------|
| `image` | Photo with caption | Customer photos |
| `text` | Title + description | Feature callouts |
| `stat` | Large number + label | "$25K Revenue Target" |
| `quote` | Quote + attribution | Customer testimonials |

**Item Sizes:**
- `small`: 1 col × 1 row (default)
- `medium`: 1 col × 2 rows (tall card)
- `large`: 2 col × 2 rows (hero card)

**Key Requirements:**
- Grid: 2 columns mobile, 3 columns desktop
- Gap: 16px mobile (`gap-4`), 24px desktop (`gap-6`)
- Cards: Charcoal background, subtle border, rounded corners
- Spacing: Generous internal padding (24px)

🔍 **CHECK:**
- Do cards have proper hierarchy (varying sizes)?
- Is grid responsive (stacks on mobile)?
- Are borders visible but subtle (washi/10)?
- Does layout feel balanced, not cluttered?

---

## 📊 Slide-by-Slide Design Specification

### Main Presentation (11 Slides)

#### **Slide 0: Title - "Premium Sushi with Social Soul"**

**Layout:** FullBleedHero
**Image:** `/images/hero/sushi-platter.png`
**Content:** Single line title only

**Visual Requirements:**
- Image fills entire screen (100vw × 100vh)
- Dark overlay: 40% black (`bg-black/40`)
- Title: Centered, extra large (text-6xl → text-8xl)
- Font: Cormorant Garamond Bold
- Color: Washi (warm white)
- Animation: Title fades in slowly (800ms)

🔍 **CHECK:**
- Does title feel impactful and dramatic?
- Is sushi platter image high quality and appetizing?
- Does text have enough contrast to be instantly readable?

---

#### **Slide 1: The Opportunity - "Empty Hours = Empty Tables = Empty Revenue"**

**Layout:** AsymmetricSplit (40-60, image left)
**Image:** `/images/main-story/empty-space.png`
**Content:** Problem framing + revenue loss

**Visual Requirements:**
- Image: 40% width (left side), shows empty restaurant
- Content: 60% width (right side), charcoal background
- Title includes subtitle: "Empty Hours = Empty Tables = Empty Revenue"
- Bullets:
  - "Lunch service 11am-3pm gets minimal traffic from office parks"
  - "Monday-Thursday evenings never hit capacity"
  - "These empty hours represent ~$18,000 lost monthly revenue"
- RevenueChart: CSS-only bar chart showing "Current" vs "With Three Systems"
- Bullet borders: Beni (red) for urgency/problem emphasis

**Chart Specifications:**
```css
/* Two vertical bars side by side */
.bar-current {
  height: 120px;
  background: linear-gradient(to top, #6b6560, #8b2635);
  label: "Current: $42K/month"
}
.bar-potential {
  height: 200px;
  background: linear-gradient(to top, #c4a35a, #e07a5f);
  label: "With Three Systems: $60K/month"
}
```

🔍 **CHECK:**
- Does empty restaurant image evoke the problem emotionally?
- Is revenue chart clear and impactful?
- Do numbers stand out (bold, larger font)?
- Does layout feel balanced (not image-heavy)?

---

#### **Slide 2: Three Systems - "Social Media + Corporate Lunch + Weekday Bar"**

**Layout:** Systems diagram (custom)
**Content:** 3 system boxes with icons + descriptions

**Visual Requirements:**
- Title: "Three Systems We're Building"
- Subtitle: "A flywheel that drives off-peak revenue"
- Layout: 3 equal-width boxes in a row
- Each box:
  - Icon: Lucide React (Users, Calendar, TrendingUp)
  - Title: System name (kincha gold)
  - Description: One-liner (hai gray)
  - Background: Charcoal with subtle border
  - Padding: 24px
  - Rounded corners: 8px
- Animation: Boxes appear sequentially (200ms stagger)

**System Boxes:**
1. **Social Media Engine** (Users icon)
   - "We control this completely - starts immediately, costs nothing"
2. **Corporate Lunch Machine** (Calendar icon)
   - "Target office parks with catering packages and lunch specials"
3. **Weekday Bar Activation** (TrendingUp icon)
   - "Transform Mon-Thu evenings into social gathering spot"

🔍 **CHECK:**
- Are boxes evenly spaced with equal width?
- Do icons have proper size (24px) and color (kincha)?
- Does stagger animation create "building" effect?
- Is subtitle about "flywheel" prominent enough?

---

#### **Slide 3: What Changes, What Doesn't - Two-Column Layout**

**Layout:** Two-column (custom)
**Content:** Preserve vs. Change comparison

**Visual Requirements:**
- Title: "What Changes, What Doesn't"
- Layout: Two equal columns side-by-side
- Left column:
  - Header: "What We Preserve" (kincha background badge)
  - Items: 5 bullet points (kincha left border)
  - Background: Subtle kincha/10 tint
- Right column:
  - Header: "What Changes" (beni background badge)
  - Items: 5 bullet points (beni left border)
  - Background: Subtle beni/10 tint

**Content:**
- Left (Preserve): Premium sushi quality, Omakase focus, Weekend dinner experience, High-end aesthetic, Chef's artistry
- Right (Change): Off-peak programming, Corporate outreach, Social media presence, Bar atmosphere Mon-Thu, Community engagement

🔍 **CHECK:**
- Are columns clearly separated visually?
- Is color-coding obvious (gold = preserve, red = new)?
- Are background tints subtle (not overwhelming)?
- Do badges stand out at top of each column?

---

#### **Slide 4: Social Media Engine**

**Layout:** AsymmetricSplit (60-40, image right)
**Image:** `/images/main-story/smartphone-insta.png`
**Content:** Social media strategy

**Visual Requirements:**
- Image: 60% width (right side), shows smartphone with Instagram
- Content: 40% width (left side), charcoal background
- Title: "Social Media Engine"
- Subtitle: "We control this completely - starts immediately"
- Bullets:
  - "Content: Behind-the-scenes, chef stories, daily specials"
  - "Goal: Build authentic following in Berkeley Heights community"
  - "Timeline: Start Week 1 with phone photography"
- Mini-story CTA: "View detailed plan" (kincha color, arrow icon)
- Link: `/presentation/social-media`

🔍 **CHECK:**
- Does smartphone image look modern and realistic?
- Is CTA link visible and clickable?
- Does arrow icon point right (→)?
- Is kincha gold color used for accent text?

---

#### **Slide 5: Corporate Lunch Machine**

**Layout:** AsymmetricSplit (60-40, image left)
**Image:** `/images/main-story/office-park.png`
**Content:** Corporate lunch strategy

**Visual Requirements:**
- Image: 60% width (left side), shows office park buildings
- Content: 40% width (right side), charcoal background
- Title: "Corporate Lunch Machine"
- Subtitle: "Target nearby office parks with catering packages"
- Bullets:
  - "Bento boxes, sushi platters, group orders"
  - "Special pricing for recurring corporate clients"
  - "Direct outreach to HR departments and office managers"
- Mini-story CTA: "View detailed plan" (kincha color, arrow icon)
- Link: `/presentation/corporate-lunch`

🔍 **CHECK:**
- Does office park image convey "corporate" context?
- Is layout mirror of Slide 4 (alternating pattern)?
- Are bullets clear and benefit-focused?

---

#### **Slide 6: Weekday Bar Activation**

**Layout:** AsymmetricSplit (60-40, image right)
**Image:** `/images/main-story/bar-patrons.png`
**Content:** Weekday bar strategy

**Visual Requirements:**
- Image: 60% width (right side), shows warm bar scene with patrons
- Content: 40% width (left side), charcoal background
- Title: "Weekday Bar Activation"
- Subtitle: "Transform Mon-Thu evenings into gathering spot"
- Bullets:
  - "Happy hour specials, sake tastings, bar menu"
  - "Partner with local businesses for after-work events"
  - "Create 'regulars' culture for weeknight crowd"
- Mini-story CTA: "View detailed plan" (kincha color, arrow icon)
- Link: `/presentation/weekday-bar`

🔍 **CHECK:**
- Does bar image feel warm and inviting (not empty)?
- Does layout alternate back to image-right (pattern: R-L-R)?
- Is "gathering spot" concept visually conveyed?

---

#### **Slide 7: First 30 Days - Timeline**

**Layout:** Timeline (custom)
**Content:** 4-week execution plan

**Visual Requirements:**
- Title: "First 30 Days" (large, centered at top)
- Layout: 4 vertical cards in a row (one per week)
- Each card:
  - Header: "Week [N]" (kincha badge)
  - Items: 2-3 bullet points
  - Icon: Calendar (top of card)
  - Background: Charcoal gradient
  - Border-left: 3px kincha accent
- Timeline connector: Dotted line connecting cards (subtle hai color)

**Week Content:**
1. Week 1: "Set up Instagram + content calendar, Initial corporate outreach list, Menu planning for bar program"
2. Week 2: "Daily Instagram posts begin, First corporate meetings scheduled, Happy hour menu designed"
3. Week 3: "First catering orders delivered, Soft launch Monday happy hour, Community event partnerships initiated"
4. Week 4: "Analyze first results, Expand corporate client base, Scale social content production"

🔍 **CHECK:**
- Does timeline flow left-to-right naturally?
- Are week cards equal height and width?
- Is connector line visible but subtle?
- Do kincha accents create visual progression?

---

#### **Slide 8: February 2026 Programming** *(To Be Implemented)*

**Layout:** Calendar grid (custom)
**Content:** Monthly event calendar

**Expected Visual Requirements:**
- Title: "February 2026 Programming"
- Layout: 7-column grid (days of week) × 4 rows (weeks)
- Each day cell:
  - Date number (small, top-left)
  - Event name (if applicable)
  - Color-coded by system (beni, kincha, coral)
- Legend: 3 color badges showing system types
- Background: Dark gradient

🔍 **NEEDS IMPLEMENTATION:**
- This slide currently shows title only
- Reference: `.planning/phases/05-responsive-performance/05-03-REMAINING-CODE.md`
- Should feel like modern calendar UI (Google Calendar style)

---

#### **Slide 9: How We Track Success - Metrics Dashboard**

**Layout:** BentoGrid (3 columns)
**Content:** 6 metric cards

**Expected Visual Requirements:**
- Title: "How We Track Success"
- Grid: 3 columns × 2 rows (desktop), stacks on mobile
- Card types:
  - 2 large stat cards (revenue, engagement)
  - 2 medium image cards (customer photos)
  - 2 small text cards (goals)
- Each card:
  - Charcoal background
  - Subtle border (washi/10)
  - Rounded corners (8px)
  - Generous padding (24px)

**Metric Cards:**
1. Revenue (large): "$60K/month target" (kincha number, large)
2. Social Media (large): "500 followers by end of Q1" (coral accent)
3. Corporate Clients (small): "10 recurring clients"
4. Happy Hour (small): "50% capacity Mon-Thu by Feb"
5. Image: Customer dining
6. Image: Social media phone

🔍 **CHECK:**
- Do large cards feel more important (visual hierarchy)?
- Are numbers prominent and readable?
- Is grid responsive (stacks nicely on mobile)?
- Does layout avoid symmetry (feels more dynamic)?

---

#### **Slide 10: Next Steps - CTAs**

**Layout:** CenteredMinimal + CTA buttons
**Content:** 2 primary CTAs

**Visual Requirements:**
- Title: "Next Steps" (large, centered)
- Subtitle: "Let's transform your off-peak hours into revenue opportunities"
- Button layout: 2 buttons horizontally centered, equal prominence
- Button 1: "Review Detailed Plans" → `/archive`
  - Background: Beni (red)
  - Text: Washi (white)
  - Padding: 16px 32px
  - Hover: Darken 10%
- Button 2: "Schedule Strategy Session" → (external link)
  - Background: Transparent
  - Border: 2px kincha
  - Text: Kincha
  - Padding: 16px 32px
  - Hover: Fill kincha background

🔍 **CHECK:**
- Are buttons properly sized (not too small)?
- Do hover states work smoothly?
- Is hierarchy clear (both feel equally important)?
- Does subtitle feel compelling and action-oriented?

---

## 🔗 Mini-Story Deep Dives (18 Slides Total)

### Navigation Pattern

**Entry Points:** CTAs on Slides 4, 5, 6 (main story)
**Routes:**
- `/presentation/social-media` (7 slides)
- `/presentation/corporate-lunch` (7 slides)
- `/presentation/weekday-bar` (7 slides)

**Shared Components:**
- Back button (top-left): "← Back to Main Story"
- Title badge: System name (e.g., "Social Media Engine")
- Return parameter: `?returnSlide=4` preserves position

---

### Mini-Story #1: Social Media Engine (7 slides)

**Slide 0:** Title - "Social Media Engine" (FullBleedHero)
**Slide 1:** Content Pillars (BentoGrid - 3 pillars)
**Slide 2:** Platform Strategy (ImageBackground with phone)
**Slide 3:** Content Calendar (Timeline - weekly view)
**Slide 4:** Engagement Tactics (AsymmetricSplit)
**Slide 5:** Success Metrics (CenteredMinimal with large numbers)
**Slide 6:** Next Actions (CTA back to main story)

🔍 **CHECK:**
- Does title slide use image: `/images/mini-story/smartphone-insta.png`?
- Are content pillars visually distinct in grid?
- Does navigation back to main story preserve scroll position?

---

### Mini-Story #2: Corporate Lunch Machine (7 slides)

**Slide 0:** Title - "Corporate Lunch Machine" (FullBleedHero)
**Slide 1:** Target Office Parks (ImageBackground - office buildings)
**Slide 2:** Menu Packages (BentoGrid - 4 package types)
**Slide 3:** Pricing Strategy (AsymmetricSplit)
**Slide 4:** Outreach Timeline (Timeline - 4 weeks)
**Slide 5:** January Success Story (CenteredMinimal - testimonial)
**Slide 6:** Next Actions (CTA back to main story)

🔍 **CHECK:**
- Does title slide reuse image: `/images/main-story/office-park.png`?
- Are menu packages displayed as cards with pricing?
- Is January success story compelling (includes quote or stat)?

---

### Mini-Story #3: Weekday Bar Activation (7 slides)

**Slide 0:** Title - "Weekday Bar Activation" (FullBleedHero)
**Slide 1:** Current State (ImageBackground - empty bar)
**Slide 2:** Happy Hour Program (AsymmetricSplit)
**Slide 3:** Event Programming (Calendar - monthly view)
**Slide 4:** Partnership Strategy (BentoGrid - local businesses)
**Slide 5:** Revenue Targets (CenteredMinimal - $25-35K range)
**Slide 6:** Next Actions (CTA back to main story)

🔍 **CHECK:**
- Does title slide use image: `/images/main-story/bar-patrons.png`?
- Is calendar view color-coded by event type?
- Do revenue targets feel achievable and specific?

---

## 🎯 Common Issues to Look For

### Issue Type 1: Color Misuse

❌ **Anti-Patterns:**
- Red (beni) used as full background on any slide
- Backgrounds that are too bright (feels cheap, not premium)
- Pure white (#ffffff) instead of washi (#faf8f5)
- Pure black (#000000) instead of sumi (#1a1614)

✅ **Correct Usage:**
- Red only for accents: borders, badges, small UI elements
- Dark backgrounds: sumi, charcoal, deepIndigo gradients
- Text: washi (warm white) for primary, hai (warm gray) for secondary
- Accents: kincha (gold) for highlights, coral for warm touches

---

### Issue Type 2: Typography Problems

❌ **Anti-Patterns:**
- Inconsistent font families (mixing too many)
- Text too small for presentation context (<16px body)
- Poor line-height (feels cramped or too loose)
- Missing letter-spacing adjustments

✅ **Correct Usage:**
- Headings: Always Cormorant Garamond
- Body: Always EB Garamond
- UI/meta: Always Inter
- Minimum body size: 18px (text-lg)
- Headings: tracking-tight
- Body: tracking-normal

---

### Issue Type 3: Layout & Spacing

❌ **Anti-Patterns:**
- Content touching edges (no padding)
- Slides that require scrolling (content overflow)
- Inconsistent spacing between elements
- Cramped layouts (no breathing room)

✅ **Correct Usage:**
- Minimum 32px padding on all slides
- All slides fit in viewport without scroll
- Consistent spacing scale (8px base: 4, 8, 12, 16, 24, 32, 48, 64px)
- Generous whitespace (Japanese "ma" principle)

---

### Issue Type 4: Animation Issues

❌ **Anti-Patterns:**
- Animations too fast (feels jarring)
- Animations too slow (feels sluggish)
- Everything animating at once (overwhelming)
- Animations that loop infinitely (distracting)

✅ **Correct Usage:**
- Bullet stagger: 100ms delay between items
- Fade-in duration: 300ms
- Slide transitions: 250ms
- Hover states: 150ms
- Animations play once on slide entry

---

### Issue Type 5: Image Quality

❌ **Anti-Patterns:**
- Images pixelated or low resolution
- Images not loading (broken src paths)
- Images too large (slow loading)
- Images missing alt text (accessibility)

✅ **Correct Usage:**
- All images optimized (Next.js Image component)
- Minimum 1920×1080 resolution for full-bleed
- Proper alt text for screen readers
- Priority loading for above-fold images (title slide)

---

## 📱 Responsive Design Requirements

### Breakpoints

| Device | Width | Tailwind | Priority |
|--------|-------|----------|----------|
| Mobile | 320-640px | Default / `sm:` | Medium |
| Tablet Portrait | 640-768px | `sm:` | Low |
| **Tablet Landscape** | **768-1024px** | `md:` | **HIGH** (Primary target) |
| Desktop | 1024-1280px | `lg:` | Medium |
| Large Desktop | 1280px+ | `xl:` | Low |

### Primary Target: iPad Landscape (1024×768)

**Critical Requirements:**
- All slides must fit without scrolling
- Touch targets minimum 44px × 44px
- Font sizes optimized for arm's length viewing
- Navigation controls easily reachable
- Gesture support (swipe left/right for slides)

### Responsive Patterns

**Typography:**
```
Mobile → Tablet → Desktop
text-2xl → text-3xl → text-4xl (h1)
text-xl → text-2xl → text-3xl (h2)
text-base → text-lg → text-xl (body)
```

**Spacing:**
```
Mobile → Tablet → Desktop
px-6 py-6 → px-8 py-8 → px-12 py-8
gap-4 → gap-6 → gap-8
```

**Layout:**
```
Mobile: Stack everything vertically
Tablet: Some side-by-side (AsymmetricSplit works)
Desktop: Full layout fidelity
```

🔍 **CHECK:**
- Test all slides on 1024×768 viewport (iPad landscape)
- Verify no horizontal scroll on any breakpoint
- Confirm touch targets are 44px minimum
- Test swipe gestures work smoothly

---

## ♿ Accessibility Requirements

### WCAG 2.1 AA Compliance

**Color Contrast:**
- Text on dark backgrounds: Minimum 4.5:1 ratio
- Large text (24px+): Minimum 3:1 ratio
- Washi (#faf8f5) on Sumi (#1a1614): 18.5:1 ✓
- Kincha (#c4a35a) on Sumi (#1a1614): 7.2:1 ✓
- Hai (#6b6560) on Sumi (#1a1614): 4.8:1 ✓

**Keyboard Navigation:**
- Left/Right arrows: Navigate slides
- Home/End: Jump to first/last slide
- Tab: Focus interactive elements
- Escape: Exit mini-stories
- Spacebar: Progress to next slide

**Screen Reader Support:**
- All images have descriptive alt text
- Slides have ARIA labels: `aria-label="Slide 3 of 11: What Changes, What Doesn't"`
- Navigation controls have ARIA labels
- Focus management on slide transitions
- Skip links for main content

**Focus Indicators:**
- All interactive elements have visible focus ring
- Focus ring color: Kincha (gold) at 2px width
- Focus ring never removed (outline: 0 is prohibited)

🔍 **CHECK:**
- Run aXe DevTools or Lighthouse accessibility audit
- Test keyboard-only navigation (unplug mouse)
- Test with screen reader (NVDA or VoiceOver)
- Verify all images have meaningful alt text
- Confirm focus indicators are visible

---

## ⚡ Performance Requirements

### Core Web Vitals Targets

| Metric | Target | Current | Status |
|--------|--------|---------|--------|
| **LCP** (Largest Contentful Paint) | < 2.5s | TBD | 🔍 Check |
| **FID** (First Input Delay) | < 100ms | TBD | 🔍 Check |
| **CLS** (Cumulative Layout Shift) | < 0.1 | TBD | 🔍 Check |

### Image Optimization

**Requirements:**
- All images use Next.js `<Image>` component
- Title slide image: `priority` prop (preload)
- Below-fold images: `loading="lazy"` (default)
- Image formats: WebP with PNG fallback
- Responsive sizes: `sizes="(max-width: 768px) 100vw, 50vw"`

**Image Checklist:**
```
✓ /images/hero/sushi-platter.png → <Image priority>
✓ /images/main-story/empty-space.png → <Image>
✓ /images/main-story/smartphone-insta.png → <Image>
✓ /images/main-story/office-park.png → <Image>
✓ /images/main-story/bar-patrons.png → <Image>
✓ /images/mini-story/happy-hour.png → <Image>
✓ /images/mini-story/mix-mingle.png → <Image>
✓ /images/mini-story/meta-insights.png → <Image>
```

### Bundle Optimization

**Current Choices:**
- ✅ Individual Lucide icon imports (tree-shaking)
- ✅ No chart libraries (CSS-only RevenueChart)
- ✅ Framer Motion (necessary for animations)
- ✅ No date libraries (custom calendar component)

**Bundle Size Target:** < 250kb gzipped JS

🔍 **CHECK:**
- Run Lighthouse performance audit
- Check Network tab: total page weight < 2MB
- Verify images are WebP format
- Confirm no unnecessary libraries in bundle

---

## 🛠️ Technical Implementation Notes

### File Structure
```
app/
├── layout.tsx              ← ADD MINI-STORY DROPDOWN HERE
├── page.tsx                ← Main presentation (11 slides)
├── globals.css             ← Design tokens defined here
└── presentation/
    ├── social-media/
    │   └── page.tsx        ← Mini-story 1 (7 slides)
    ├── corporate-lunch/
    │   └── page.tsx        ← Mini-story 2 (7 slides)
    └── weekday-bar/
        └── page.tsx        ← Mini-story 3 (7 slides)

components/
└── presentation/
    ├── SlideContainer.tsx  ← Wrapper for all slides
    ├── Logo.tsx            ← Site logo
    └── layouts/
        ├── index.ts        ← Barrel export
        ├── FullBleedHero.tsx
        ├── CenteredMinimal.tsx
        ├── AsymmetricSplit.tsx
        ├── ImageBackground.tsx
        └── BentoGrid.tsx

lib/
└── slides/
    ├── content.ts          ← Main story slide data
    ├── social-media.ts     ← Mini-story 1 data
    ├── corporate-lunch.ts  ← Mini-story 2 data
    └── weekday-bar.ts      ← Mini-story 3 data

public/
└── images/
    ├── hero/
    │   └── sushi-platter.png
    ├── main-story/
    │   ├── empty-space.png
    │   ├── smartphone-insta.png
    │   ├── office-park.png
    │   └── bar-patrons.png
    └── mini-story/
        ├── happy-hour.png
        ├── mix-mingle.png
        └── meta-insights.png
```

### Tailwind Config
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        sumi: '#1a1614',
        washi: '#faf8f5',
        beni: '#8b2635',
        kincha: '#c4a35a',
        hai: '#6b6560',
        kitsune: '#d4c4a8',
        // Phase 5.5 premium additions
        deepIndigo: '#2d3142',
        warmCream: '#f4f1e8',
        coral: '#e07a5f',
        softGold: '#f2cc8f',
        charcoal: '#3d405b',
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'serif'],
        garamond: ['var(--font-eb-garamond)', 'serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
}
```

---

## 📝 Action Items for Google Antigravity

### High Priority (Fix Immediately)

1. **Add Mini-Story Navigation Links to Header**
   - Location: `app/layout.tsx` lines 47-53
   - Create dropdown under "Presentation" similar to Archive
   - Links: Social Media Engine, Corporate Lunch Machine, Weekday Bar Activation
   - Styling: Match Archive dropdown (gray-300 text, hover white)

2. **Audit Slide Visual Quality**
   - Review each of the 11 main slides
   - Identify which feel "lacking" or generic
   - Compare against layout component specifications above
   - Note specific issues: spacing, colors, typography, hierarchy

3. **Check Red (Beni) Usage**
   - Scan all slides for red backgrounds
   - Flag any red usage >20% of screen area
   - Recommend alternative colors (charcoal, deepIndigo, coral)
   - Ensure red only used for accents

### Medium Priority (Improve Visual Quality)

4. **Typography Consistency Check**
   - Verify all headings use Cormorant Garamond
   - Verify all body text uses EB Garamond
   - Check font sizes match type scale (18px min for body)
   - Confirm letter-spacing (tight for headings, normal for body)

5. **Spacing & Layout Audit**
   - Measure padding on all slides (minimum 32px?)
   - Check for content overflow (does anything get cut off?)
   - Verify consistent spacing between elements
   - Test on 1024×768 viewport (iPad landscape)

6. **Animation Review**
   - Test bullet stagger timing (100ms feel right?)
   - Check slide transition speed (250ms)
   - Verify hover states on buttons/links (150ms)
   - Confirm animations don't feel too fast or slow

### Low Priority (Polish & Refinement)

7. **Image Quality Check**
   - Verify all 8 images load properly
   - Check for pixelation or low quality
   - Confirm Next.js Image component used everywhere
   - Test lazy loading behavior

8. **Accessibility Audit**
   - Run aXe DevTools scan
   - Check keyboard navigation works
   - Verify alt text on all images
   - Test focus indicators visible

9. **Performance Audit**
   - Run Lighthouse performance test
   - Check Core Web Vitals (LCP, FID, CLS)
   - Verify bundle size < 250kb
   - Confirm no unnecessary libraries

---

## 🎬 How to Proceed

### Step 1: Initial Scan
1. Open site in Chrome: https://sushi-media-ami.vercel.app
2. Activate Google Antigravity extension
3. Navigate through all 11 main slides
4. Take notes on what feels "off" or "lacking"

### Step 2: Header Fix (Quick Win)
1. Locate header navigation in app/layout.tsx
2. Add dropdown menu under "Presentation" link
3. Test hover behavior matches Archive dropdown
4. Verify links route correctly to mini-stories

### Step 3: Slide-by-Slide Review
1. For each slide, reference specification above
2. Compare actual vs. expected:
   - Layout (correct component used?)
   - Colors (following palette rules?)
   - Typography (correct fonts and sizes?)
   - Spacing (minimum 32px padding?)
   - Animations (100ms stagger, 300ms duration?)
3. Document discrepancies

### Step 4: Recommend Fixes
1. Prioritize issues: Critical → High → Medium → Low
2. For each issue, provide:
   - Current state (screenshot if helpful)
   - Expected state (reference specification)
   - Proposed CSS/HTML changes
   - Impact (visual quality, UX, accessibility)

### Step 5: Test & Validate
1. Apply changes in browser via Antigravity
2. Test across breakpoints (mobile, tablet, desktop)
3. Verify animations and interactions work
4. Confirm accessibility not broken

---

## 📚 Reference Documents

**Project Documentation:**
- `.planning/DESIGN-SYSTEM.md` - Core design tokens and principles
- `.planning/STATE.md` - Project status and progress
- `.planning/USER-FEEDBACK-2026-01-28.md` - User's original feedback on design issues

**Implementation Files:**
- `app/layout.tsx` - Site header and footer
- `app/page.tsx` - Main presentation logic
- `lib/slides/content.ts` - Slide content and metadata
- `components/presentation/layouts/` - 5 layout components

**Visual Assets:**
- `public/images/` - All 8 presentation images (58MB total)
- `Assets/` - Original unprocessed images (if needed)

---

## ✅ Success Criteria

**This design will be successful when:**

1. **Navigation is complete** - Mini-story links accessible from header
2. **Visual variety is strong** - No slide feels generic or template-driven
3. **Red usage is tasteful** - Beni used for accents only, never backgrounds
4. **Typography is consistent** - Correct fonts, sizes, spacing throughout
5. **Spacing feels premium** - Generous whitespace, Japanese "ma" principle
6. **Animations feel polished** - Smooth, purposeful, not jarring
7. **Images enhance story** - High quality, properly integrated, meaningful
8. **Responsive works** - Perfect on iPad landscape (1024×768)
9. **Accessible** - WCAG AA compliant, keyboard navigable
10. **Performant** - Core Web Vitals green, fast load times

---

**Document Version:** 1.0
**Created:** 2026-01-29
**For:** Google Antigravity visual audit and improvement
**Contact:** Reference this document when proposing changes
