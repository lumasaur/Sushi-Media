# Phase 5: Responsive & Performance - Research

**Researched:** 2026-01-26
**Domain:** Responsive Design & Web Performance Optimization
**Confidence:** HIGH

## Summary

This phase optimizes a Next.js 14 presentation for landscape viewing (tablets, desktops, TV) with portfolio-quality performance and accessibility. The standard approach uses Tailwind CSS's mobile-first breakpoint system (inverted to landscape-first for this use case), Next.js 14's built-in optimization features, and Framer Motion's performance-conscious animation patterns. Core Web Vitals compliance requires under 2 seconds load time on 3G connections, 60fps animations using GPU-accelerated properties, and WCAG 2.2 Level AA accessibility standards (minimum 24px touch targets, keyboard navigation, ARIA labels).

The project already has TypeScript strict mode enabled (`"strict": true` in tsconfig.json) and uses performance-conscious patterns (CSS-only RevenueChart avoiding heavy libraries, individual Lucide icon imports for tree-shaking). Focus should be on responsive breakpoints for landscape viewports, touch target sizing, reduced motion support, and verifying existing performance meets Core Web Vitals thresholds.

**Primary recommendation:** Implement landscape-first responsive design using Tailwind's existing breakpoints (lg: 1024px for iPad landscape minimum, xl: 1280px for desktop, 2xl/tv: 1536px-1920px for large displays), add `prefers-reduced-motion` support to all Framer Motion animations, ensure 44px minimum touch targets, and measure Core Web Vitals with Lighthouse testing on throttled 3G connections.

## Standard Stack

The established libraries/tools for this domain:

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Tailwind CSS | 3.4.3 | Responsive utilities | Industry standard with mobile-first breakpoint system, container queries in v4+, built-in responsive prefixes (sm:, md:, lg:, etc.) |
| Framer Motion | 12.28.1 | GPU-accelerated animations | 60fps performance out-of-box, React integration, `useReducedMotion` hook for accessibility |
| Next.js Image | 16.1.4 (built-in) | Lazy loading & optimization | Automatic WebP/AVIF conversion, lazy loading by default, responsive srcset generation |
| TypeScript | 5.4.0 | Type safety | Strict mode catches runtime errors at compile time, required for portfolio-quality code |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| Lighthouse CLI | Latest | Performance testing | Measure Core Web Vitals on 3G throttled connections, LCP/INP/CLS scoring |
| React DevTools Profiler | Built-in | Animation performance | Detect unnecessary re-renders, measure component render times |
| Chrome DevTools Performance | Built-in | 60fps verification | Record animations, identify jank, verify GPU layers |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Tailwind breakpoints | CSS Container Queries | Container queries better for component-level responsiveness, but Tailwind v3.4.3 requires plugin; v4 has built-in support. Breakpoints sufficient for full-screen slides. |
| Framer Motion | GSAP | GSAP 50kb smaller (69kb vs 119kb) and slightly faster, but Framer Motion better React integration, built-in reduced motion support, simpler API. Already in use. |
| Lighthouse | WebPageTest | WebPageTest more comprehensive (real devices, multiple locations), but Lighthouse sufficient for CI/CD integration and local testing. |

**Installation:**
```bash
# Core dependencies already installed (package.json)
npm install  # Ensure latest versions

# Development tools for testing
npm install --save-dev lighthouse
```

## Architecture Patterns

### Recommended Responsive Structure
```
Landscape-First Breakpoints (Inverted Mobile-First):
├── Base styles (portrait mobile fallback)  # Functional but unoptimized
├── lg: 1024px (iPad landscape minimum)     # Primary optimization target
├── xl: 1280px (Desktop)                    # Enhanced spacing, larger text
└── tv: 1920px (Large displays/projectors) # Maximum scale, full impact
```

**Key insight:** Tailwind is mobile-first by default (unprefixed = mobile, sm: = 640px+), but this project needs landscape-first. Solution: Use base styles for minimal portrait fallback, then `lg:` as primary styling layer.

### Pattern 1: Landscape-First Responsive Classes
**What:** Apply base styles for portrait fallback, then layer landscape optimizations at `lg:` and above.
**When to use:** All layout, typography, and spacing decisions.
**Example:**
```tsx
// ❌ WRONG: Mobile-first approach (default Tailwind pattern)
<div className="text-2xl md:text-4xl lg:text-6xl">

// ✅ CORRECT: Landscape-first approach (this project's needs)
<div className="text-base lg:text-4xl xl:text-5xl tv:text-6xl">
```

**Rationale:** Base styles provide portrait mobile fallback (requirement RESP-03), `lg:` targets iPad 10.9" landscape (~1024px), `xl:` enhances desktop, `tv:` maximizes projector impact.

### Pattern 2: Touch Target Sizing (WCAG 2.5.8 Level AA)
**What:** Minimum 24px touch targets (WCAG 2.2 Level AA) or 44px for AAA and platform guidelines.
**When to use:** All interactive elements (buttons, navigation, slide controls).
**Example:**
```tsx
// Source: WCAG 2.5.8 + Apple/Android platform guidelines
// WCAG AA requires 24px minimum, but iOS/Android require 44px

// Navigation controls
<button className="min-w-[44px] min-h-[44px] flex items-center justify-center">
  <ChevronRight className="w-6 h-6" />
</button>

// Slide counter dots
<button
  aria-label={`Go to slide ${index + 1}`}
  className="w-[44px] h-[44px] flex items-center justify-center"
>
  <span className="w-3 h-3 rounded-full bg-current" />
</button>
```

**Rationale:** While WCAG 2.2 Level AA requires 24px, iOS Human Interface Guidelines and Android Material Design require 44px. Using 44px ensures cross-platform usability for tablet stakeholders. Visual element (icon/dot) can be smaller, but interactive hit area must be 44px.

### Pattern 3: GPU-Accelerated Animations (60fps)
**What:** Use `transform` and `opacity` for animations (GPU-accelerated), avoid layout-triggering properties.
**When to use:** All Framer Motion animations.
**Example:**
```tsx
// ✅ CORRECT: GPU-accelerated properties (already in use)
<motion.div
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
/>

// ❌ WRONG: Layout-triggering properties (causes jank)
<motion.div
  initial={{ width: 0 }}
  animate={{ width: '100%' }}
/>

// ✅ CORRECT: Use scale instead of width/height
<motion.div
  initial={{ scaleX: 0 }}
  animate={{ scaleX: 1 }}
  style={{ originX: 0 }}  // Control transform origin
/>
```

**Rationale:** CSS `transform` (translate, scale, rotate) and `opacity` are GPU-accelerated and don't trigger reflows. Properties like `width`, `height`, `top`, `left` cause layout recalculations on every frame, preventing 60fps.

### Pattern 4: Reduced Motion Support (WCAG 2.3.3)
**What:** Respect `prefers-reduced-motion` for users with vestibular disorders.
**When to use:** All motion animations (slides, bullets, charts).
**Example:**
```tsx
// Source: Framer Motion docs - motion.dev/docs/react-use-reduced-motion
import { motion, useReducedMotion } from 'framer-motion'

export function AnimatedSlide({ children }: { children: React.ReactNode }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 50 }}
      animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
      transition={{ duration: shouldReduceMotion ? 0.05 : 0.25 }}
    >
      {children}
    </motion.div>
  )
}
```

**Rationale:** Moving content triggers physical reactions for people with vestibular dysfunctions. Framer Motion's `useReducedMotion` hook detects OS-level setting (`prefers-reduced-motion: reduce`). Fallback to opacity-only transitions (still premium feel) or extremely short durations (50ms).

### Pattern 5: Container Width Toggle (User-Configurable)
**What:** Allow toggling between max-width constrained and full-viewport layouts.
**When to use:** Slide containers to test which looks better during stakeholder demos.
**Example:**
```tsx
// Source: Context decision - "toggleable max-width vs full-viewport"
'use client'

import { useState } from 'react'

export function PresentationContainer() {
  const [isFullWidth, setIsFullWidth] = useState(false)

  // Persist preference (localStorage or URL param)
  const handleToggle = () => {
    const newValue = !isFullWidth
    setIsFullWidth(newValue)
    localStorage.setItem('presentation-full-width', String(newValue))
  }

  return (
    <div className={`w-full h-full ${isFullWidth ? '' : 'max-w-[1400px]'} mx-auto px-4 lg:px-8 xl:px-16`}>
      {/* Slide content */}
    </div>
  )
}
```

**Rationale:** Context decision requires both max-width and full-viewport options as toggleable. Real-time A/B testing during stakeholder presentations helps find optimal viewing experience. Persist via localStorage or URL query param (`?fullwidth=true`).

### Anti-Patterns to Avoid

- **Don't use `sm:` as primary breakpoint** - `sm: 640px` is too small for landscape optimization. Use `lg: 1024px` (iPad landscape minimum).
- **Don't animate layout properties** - Avoid animating `width`, `height`, `top`, `left`, `margin`, `padding`. Use `transform` and `opacity` only.
- **Don't use `will-change` everywhere** - Only use on elements that will actually animate. Overuse degrades performance and battery life.
- **Don't skip visual focus indicators** - Keyboard users need visible `:focus` states. Ensure `outline` or custom focus ring on all interactive elements.
- **Don't ignore portrait mobile** - RESP-03 requires functional fallback. Must be usable, even if not optimized (suggest rotation message).

## Don't Hand-Roll

Problems that look simple but have existing solutions:

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Image lazy loading | `<img loading="lazy">` + Intersection Observer | Next.js `<Image>` component | Automatic WebP/AVIF conversion, responsive srcset, blur placeholder, format detection, edge cases (Safari, old browsers) |
| Reduced motion detection | `window.matchMedia('(prefers-reduced-motion)')` + state sync | Framer Motion `useReducedMotion()` | Handles SSR/hydration, React state sync, cleanup, browser compatibility |
| Performance monitoring | Custom timing API wrappers | Lighthouse CI / `web-vitals` library | Accurate LCP/INP/CLS calculation per official spec, field data vs lab data, percentile calculations |
| Accessibility testing | Manual ARIA/keyboard checks | `axe-core` / Lighthouse accessibility audit | Covers 57% of WCAG issues automatically, detects missing labels, color contrast, landmark structure |
| Responsive breakpoint detection | `window.matchMedia` + useEffect | Tailwind responsive classes | SSR-safe, no JS bundle cost, uses standard media queries, utility-first consistency |

**Key insight:** These problems have subtle edge cases (SSR hydration, browser inconsistencies, WCAG spec compliance) that official tools handle better than custom implementations. Use battle-tested libraries.

## Common Pitfalls

### Pitfall 1: Testing Only on Fast Devices/Connections
**What goes wrong:** Site loads in <1s on MacBook Pro with fast Wi-Fi, but fails 2s requirement on 3G.
**Why it happens:** Developers test on high-end hardware with fast office internet. Real users have mid-range devices, spotty connections, congested networks.
**How to avoid:**
- Use Chrome DevTools Network throttling ("Slow 3G" preset)
- Run Lighthouse with 3G throttling: `lighthouse --throttling.requestLatencyMs=150 --throttling.downloadThroughputKbps=1638`
- Test on real mid-range Android device (not flagship iPhone)
- Use Real User Monitoring (RUM) in production to measure actual user experience

**Warning signs:** Lighthouse score 95+ on local dev but users report "slow loading", large JavaScript bundle size (>500kb), unoptimized images, no lazy loading.

### Pitfall 2: Forgetting `prefers-reduced-motion` Until Late
**What goes wrong:** All animations built, then accessibility audit requires reduced motion support. Requires refactoring every animation.
**Why it happens:** Developers add `prefers-reduced-motion` as afterthought, not upfront requirement.
**How to avoid:**
- Add `useReducedMotion()` check to first animated component
- Create wrapper components that handle reduced motion consistently
- Test with OS setting enabled early: Windows > Settings > Accessibility > Visual Effects, macOS > System Preferences > Accessibility > Display > Reduce Motion

**Warning signs:** No mentions of `prefers-reduced-motion` in codebase, animations use hard-coded motion values without condition, no testing with OS setting enabled.

### Pitfall 3: Touch Targets Smaller Than 44px
**What goes wrong:** Navigation buttons work fine with mouse but difficult to tap on tablet.
**Why it happens:** Visual size (icon) confused with interactive size (hit area). Icon can be 24px, but button must be 44px.
**How to avoid:**
- Always wrap icons in 44x44px buttons/touch targets
- Use `min-w-[44px] min-h-[44px]` classes for interactive elements
- Test with touch events in Chrome DevTools Device Mode
- Run Lighthouse accessibility audit (checks target size)

**Warning signs:** Lighthouse flags "Touch targets are not sized appropriately", small icons directly clickable (no button wrapper), interactive elements under 44px, navigation difficult on tablet.

### Pitfall 4: Abusing `will-change` for "Free Performance"
**What goes wrong:** Developer adds `will-change` to every animated element thinking it improves performance, but site becomes sluggish and battery drains faster.
**Why it happens:** Misunderstanding that `will-change` allocates GPU memory upfront. Overuse exhausts GPU memory.
**How to avoid:**
- Only use `will-change` on elements that will actually animate soon
- Remove `will-change` after animation completes
- Framer Motion handles this automatically (don't override)
- Let browser decide GPU layers (it's smart)
- Use Chrome DevTools Layers panel to verify layer count

**Warning signs:** Many elements with `will-change` in CSS, GPU memory warnings in DevTools, sluggish performance on mobile, battery drain complaints, unnecessary layer promotions.

### Pitfall 5: Ignoring TypeScript Errors in Strict Mode
**What goes wrong:** Developer enables strict mode, gets 50+ errors, starts using `any` everywhere to "fix" them.
**Why it happens:** Strict mode reveals existing type issues. Quick fix is `any`, but defeats purpose of TypeScript.
**How to avoid:**
- Project already has `strict: true` in tsconfig.json (good!)
- Never use `any` to silence errors - fix root cause
- Use `unknown` for truly dynamic data, then narrow with type guards
- Add explicit types to function parameters and return values
- Run `npm run build` to catch errors early

**Warning signs:** Many `any` types in codebase, type assertion with `as any`, `@ts-ignore` comments, build succeeds but runtime errors occur.

### Pitfall 6: Stacking Animations Without Considering Total Duration
**What goes wrong:** Slide transition (250ms) + bullet stagger (150ms delay × 5 bullets = 750ms) + chart animation (800ms) = 1.8s total animation time. Users wait almost 2 seconds to interact with slide.
**Why it happens:** Each animation tuned individually without considering cumulative user wait time.
**How to avoid:**
- Calculate total animation duration: transition + max(stagger delays) + longest animation
- Keep total under 1 second for perceived responsiveness
- Run animations in parallel where possible (chart starts with bullets, not after)
- Use Nielsen Norman guideline: 400ms max for individual transitions

**Warning signs:** Users say "presentation feels slow", long wait before interactions work, animations feel sluggish, total animation time over 1 second.

## Code Examples

Verified patterns from official sources:

### Responsive Breakpoints (Landscape-First)
```tsx
// Source: Tailwind CSS docs + project CONTEXT.md decisions
// https://tailwindcss.com/docs/responsive-design

// Slide title - steps up at each breakpoint
<h1 className="
  text-2xl          /* Portrait mobile fallback (functional) */
  lg:text-5xl       /* iPad landscape (primary target - 1024px) */
  xl:text-6xl       /* Desktop (1280px) */
  tv:text-7xl       /* TV/projector (1920px) */
  font-bold text-center
">
  Ami Sushi Presentation
</h1>

// Content container - controlled width with breakpoint-specific padding
<div className="
  max-w-[1400px] mx-auto
  px-4              /* Portrait mobile - minimal padding */
  lg:px-8           /* iPad landscape - comfortable padding */
  xl:px-16          /* Desktop - generous padding */
">
  {children}
</div>

// Chart scaling - proportional with viewport
<div className="
  w-full max-w-sm    /* Portrait fallback - constrained */
  lg:max-w-md        /* iPad landscape - medium size */
  xl:max-w-lg        /* Desktop - large */
  tv:max-w-2xl       /* TV - extra large for visual impact */
  mx-auto
">
  <RevenueChart />
</div>
```

### Touch Target Sizing (44px Minimum)
```tsx
// Source: WCAG 2.5.8 + iOS/Android guidelines
// https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html

// Navigation arrows - 44x44px hit area, visual icon smaller
<button
  onClick={handleNext}
  className="
    min-w-[44px] min-h-[44px]    /* WCAG AAA + iOS/Android requirement */
    flex items-center justify-center
    hover:bg-gray-100 active:bg-gray-200
    transition-colors rounded-lg
    focus:outline-none focus:ring-2 focus:ring-brand-red
  "
  aria-label="Next slide"
>
  <ChevronRight className="w-6 h-6 text-gray-700" />
</button>

// Slide counter dots - 44x44px touch area, 12px visual dot
<div className="flex gap-2" role="navigation" aria-label="Slide navigation">
  {slides.map((_, index) => (
    <button
      key={index}
      onClick={() => goToSlide(index)}
      className="
        w-[44px] h-[44px]           /* Hit area */
        flex items-center justify-center
        focus:outline-none focus:ring-2 focus:ring-brand-red rounded
      "
      aria-label={`Go to slide ${index + 1}`}
      aria-current={currentSlide === index ? 'true' : 'false'}
    >
      <span className={`
        w-3 h-3 rounded-full transition-colors
        ${currentSlide === index ? 'bg-brand-red' : 'bg-gray-400'}
      `} />
    </button>
  ))}
</div>
```

### Reduced Motion Support
```tsx
// Source: Framer Motion docs - https://motion.dev/docs/react-use-reduced-motion
import { motion, useReducedMotion } from 'framer-motion'

export function SlideTransition({ children, slideNumber }: SlideProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      key={slideNumber}
      initial={shouldReduceMotion
        ? { opacity: 0 }                        // Reduced: opacity only
        : { opacity: 0, x: 50 }                 // Full: slide in from right
      }
      animate={shouldReduceMotion
        ? { opacity: 1 }
        : { opacity: 1, x: 0 }
      }
      exit={shouldReduceMotion
        ? { opacity: 0 }
        : { opacity: 0, x: -50 }                // Full: slide out to left
      }
      transition={{
        duration: shouldReduceMotion ? 0.05 : 0.25,  // 50ms vs 250ms
        ease: [0.4, 0, 0.2, 1]                       // Material Design easing
      }}
    >
      {children}
    </motion.div>
  )
}

// Alternative: MotionConfig for global reduced motion handling
import { MotionConfig } from 'framer-motion'

export function Presentation({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      {/* All motion components automatically respect prefers-reduced-motion */}
      {children}
    </MotionConfig>
  )
}
```

### GPU-Accelerated Animations
```tsx
// Source: Framer Motion performance guide + Chrome DevTools best practices
// https://motion.dev/docs/performance

// ✅ CORRECT: Transform and opacity (GPU-accelerated)
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
>
  Content
</motion.div>

// ✅ CORRECT: Scale instead of width/height
<motion.div
  initial={{ scaleY: 0 }}
  animate={{ scaleY: 1 }}
  style={{ originY: 0 }}  // Transform from top
  className="h-64"         // Fixed height, scale fills it
>
  Chart bar
</motion.div>

// ✅ CORRECT: Use Tailwind transform-gpu for CSS animations
<div className="
  animate-pulse
  transform-gpu      /* Forces GPU acceleration for CSS animations */
">
  Loading...
</div>

// ❌ WRONG: Animating layout properties (causes jank)
<motion.div
  animate={{ width: '100%', height: 300 }}  // Don't do this!
/>
```

### Accessibility - Keyboard Navigation
```tsx
// Source: React Aria docs + WCAG 2.1.1
// https://react-spectrum.adobe.com/react-aria/accessibility.html

export function PresentationControls({ onNext, onPrev, canGoNext, canGoPrev }) {
  return (
    <nav
      className="fixed bottom-4 right-4 flex gap-2"
      aria-label="Slide navigation controls"
    >
      <button
        onClick={onPrev}
        disabled={!canGoPrev}
        className="
          min-w-[44px] min-h-[44px]
          flex items-center justify-center
          bg-white shadow-lg rounded-full
          hover:bg-gray-100 active:bg-gray-200
          disabled:opacity-50 disabled:cursor-not-allowed
          focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2
          transition-colors
        "
        aria-label="Previous slide"
        tabIndex={0}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={onNext}
        disabled={!canGoNext}
        className="
          min-w-[44px] min-h-[44px]
          flex items-center justify-center
          bg-white shadow-lg rounded-full
          hover:bg-gray-100 active:bg-gray-200
          disabled:opacity-50 disabled:cursor-not-allowed
          focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2
          transition-colors
        "
        aria-label="Next slide"
        tabIndex={0}
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </nav>
  )
}

// Keyboard event handling
useEffect(() => {
  const handleKeyboard = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowRight':
      case ' ':              // Space bar
      case 'PageDown':
        e.preventDefault()
        onNext()
        break
      case 'ArrowLeft':
      case 'PageUp':
        e.preventDefault()
        onPrev()
        break
      case 'Home':
        e.preventDefault()
        goToSlide(0)
        break
      case 'End':
        e.preventDefault()
        goToSlide(totalSlides - 1)
        break
    }
  }

  window.addEventListener('keydown', handleKeyboard)
  return () => window.removeEventListener('keydown', handleKeyboard)
}, [onNext, onPrev])
```

### Performance - Image Optimization
```tsx
// Source: Next.js Image docs - https://nextjs.org/docs/app/api-reference/components/image
import Image from 'next/image'

// Above-the-fold image (hero, logo) - preload with priority
<Image
  src="/ami-sushi-logo.png"
  alt="Ami Sushi logo"
  width={300}
  height={100}
  priority              // Disables lazy loading, preloads image
  className="w-auto h-16 lg:h-20"
/>

// Below-the-fold images - lazy load by default
<Image
  src="/system-diagram.png"
  alt="System architecture diagram showing POS integration"
  width={800}
  height={600}
  loading="lazy"        // Default behavior, explicit for clarity
  className="w-full max-w-2xl mx-auto"
/>

// Responsive images with multiple sizes
<Image
  src="/chart.png"
  alt="Revenue comparison chart"
  width={600}
  height={400}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
  className="w-full"
/>
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| CSS media queries only | Container queries | Tailwind v4.0 (2024) | Components respond to parent width, not viewport. More modular design. |
| `max-width` breakpoints | `min-width` (mobile-first) | Tailwind v1.0 (2019) | Unprefixed = mobile, prefixed = larger. Reduces CSS specificity issues. |
| Manual lazy loading with Intersection Observer | Next.js Image component | Next.js 10 (2020) | Automatic lazy loading, format conversion, responsive images. No manual implementation. |
| First Input Delay (FID) | Interaction to Next Paint (INP) | Core Web Vitals update (2024) | INP measures all interactions, not just first. More accurate responsiveness metric. |
| WCAG 2.1 target size 44px (AAA) | WCAG 2.2 target size 24px (AA) | WCAG 2.2 release (2023) | Lower minimum for AA compliance, but iOS/Android still require 44px. |
| `transform: translateZ(0)` hack | `transform-gpu` utility | Tailwind v3.0 (2021) | Explicit GPU acceleration without hacky Z-transform. |

**Deprecated/outdated:**
- **`next/image` legacy props**: `layout="responsive"` removed in Next.js 13, use `width`/`height` or `fill`
- **Framer Motion v6 syntax**: `layoutId` auto-animation changed in v7+, check migration guide
- **Tailwind JIT mode**: Now default in v3.0+, no need for `mode: 'jit'` in config

## Open Questions

Things that couldn't be fully resolved:

1. **What's the actual bundle size after Next.js 14 tree-shaking?**
   - What we know: Framer Motion is 119kb minified, but Next.js 14 uses React Server Components by default which reduces client bundle
   - What's unclear: Actual client-side bundle size for this specific presentation (need `npm run build` + analysis)
   - Recommendation: Run `npm run build` and check `.next/static/chunks` sizes. Target <300kb initial bundle for 2s 3G load time. Use `@next/bundle-analyzer` if over budget.

2. **Should portrait mobile show rotation prompt or just work shrunk down?**
   - What we know: RESP-03 requires functional fallback (unoptimized but usable)
   - What's unclear: Better UX is rotation prompt vs just letting portrait work (tiny but functional)
   - Recommendation: Implement both: base styles make it functional, add dismissible "Rotate for better experience" banner using `orientation: portrait` media query + localStorage to remember dismissal.

3. **What's the optimal stagger delay for chart animations on slow devices?**
   - What we know: Current system uses 200ms stagger for diagrams, 150ms for bullets
   - What's unclear: Whether slower devices (requirement: 3G connection) perceive stagger or just see delay
   - Recommendation: Test on mid-range Android device with CPU throttling (4x slowdown in Chrome DevTools). May need to reduce stagger to 100ms or run in parallel on slow devices (detect via `navigator.hardwareConcurrency`).

4. **Is 1400px max-width optimal or should it scale to viewport?**
   - What we know: Context decision says implement both as toggleable for A/B testing
   - What's unclear: Which will look better in real stakeholder demos (no data yet)
   - Recommendation: Implement toggle via URL param (`?fullwidth=true`) or localStorage. Start with `max-w-[1400px]` default (easier to read), allow toggle to test full-viewport during presentations.

## Sources

### Primary (HIGH confidence)
- [Tailwind CSS Responsive Design](https://tailwindcss.com/docs/responsive-design) - Official breakpoint system
- [Next.js 14 Optimizing Documentation](https://nextjs.org/docs/14/app/building-your-application/optimizing) - Built-in optimization features
- [Framer Motion Performance Guide](https://motion.dev/docs/performance) - GPU acceleration best practices
- [WCAG 2.5.8 Target Size (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html) - 24px requirement
- [Framer Motion useReducedMotion](https://motion.dev/docs/react-use-reduced-motion) - Accessibility hook
- [Next.js Image Component](https://nextjs.org/docs/app/api-reference/components/image) - Lazy loading & optimization

### Secondary (MEDIUM confidence)
- [Next.js 14+ Performance Optimization (DEV Community)](https://dev.to/hijazi313/nextjs-14-performance-optimization-modern-approaches-for-production-applications-3n65) - Modern approaches
- [Core Web Vitals Optimization Guide 2026 (Sky SEO)](https://skyseodigital.com/core-web-vitals-optimization-complete-guide-for-2026/) - 3G testing strategies
- [TypeScript Strict Mode Guide (Better Stack)](https://betterstack.com/community/guides/scaling-nodejs/typescript-strict-option/) - Migration best practices
- [CSS GPU Acceleration Guide (Lexo.ch)](https://www.lexo.ch/blog/2025/01/boost-css-performance-with-will-change-and-transform-translate3d-why-gpu-acceleration-matters/) - will-change best practices
- [Josh Comeau: Accessible Animations with prefers-reduced-motion](https://www.joshwcomeau.com/react/prefers-reduced-motion/) - React implementation patterns

### Tertiary (LOW confidence - WebSearch only)
- [Tailwind Container Queries](https://github.com/tailwindlabs/tailwindcss-container-queries) - Plugin for v3, built-in v4 (project uses v3.4.3)
- [Web Performance 2026 Standards (InMotion Hosting)](https://www.inmotionhosting.com/blog/web-performance-benchmarks/) - Industry benchmarks

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - All libraries verified via package.json and official docs, versions confirmed
- Architecture: HIGH - Patterns based on official Tailwind/Framer Motion/WCAG documentation with code examples
- Pitfalls: HIGH - Common issues documented across multiple sources (Lighthouse, WCAG, platform guidelines)
- Performance targets: MEDIUM - Core Web Vitals standards clear (2.5s LCP, 200ms INP, 0.1 CLS), but 3G testing needed to verify compliance
- Container width toggle: MEDIUM - Implementation pattern clear, but optimal default needs A/B testing

**Research date:** 2026-01-26
**Valid until:** 2026-02-26 (30 days - stable domain, but Core Web Vitals thresholds can change with Google updates)
