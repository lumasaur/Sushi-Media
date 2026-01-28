# Remaining Code for 05-03

**Status:** Task 3 incomplete due to file locking during parallel execution with 05-02
**What's Done:** Slides 6-10 added to content.ts, februaryEventsData + metricsData exported
**What's Needed:** Add calendar and metrics layout rendering to app/page.tsx

## Code to Add to app/page.tsx

### 1. Update import (line 13)
```typescript
import { slides, systemsData, timelineData, februaryEventsData, februaryRevenueTarget, metricsData } from '@/lib/slides/content'
```

### 2. Add Calendar Layout (after timeline layout, around line 205)
```tsx
{/* Calendar layout (February 2026) */}
{slide.layout === 'calendar' && (
  <div className="text-washi">
    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center font-cormorant">{slide.title}</h2>
    {slide.subtitle && (
      <p className="text-xl md:text-2xl text-hai mb-8 text-center">{slide.subtitle}</p>
    )}
    <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-8">
      {februaryEventsData.map((event, i) => (
        <div key={i} className="bg-washi/5 rounded-lg p-4 border border-washi/10">
          <span className="text-2xl font-bold text-kincha mr-3">{event.count}×</span>
          <span className="text-base">{event.type}</span>
        </div>
      ))}
    </div>
    <div className="text-center text-lg">
      <span className="text-hai">Revenue Target: </span>
      <span className="text-kincha font-semibold">{februaryRevenueTarget}</span>
    </div>
  </div>
)}
```

### 3. Add Metrics Layout (after calendar layout)
```tsx
{/* Metrics layout (How We Track Success) */}
{slide.layout === 'metrics' && (
  <div className="text-washi">
    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center font-cormorant">{slide.title}</h2>
    {slide.subtitle && (
      <p className="text-xl md:text-2xl text-hai mb-8 text-center">{slide.subtitle}</p>
    )}

    {/* Tracking cadence intro */}
    <div className="max-w-2xl mx-auto mb-12 space-y-3">
      {slide.bullets.map((bullet, i) => (
        <div key={i} className="flex items-start">
          <span className="text-beni mr-3 mt-1">•</span>
          <span className="text-lg">{typeof bullet === 'string' ? bullet : bullet.main}</span>
        </div>
      ))}
    </div>

    {/* Three-column metrics grid */}
    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
      {metricsData.map((category, i) => (
        <div key={i} className="bg-washi/5 rounded-lg p-6 border border-washi/10">
          <h3 className="text-xl font-semibold mb-4 text-kincha">{category.system}</h3>
          <ul className="space-y-2">
            {category.metrics.map((metric, j) => (
              <li key={j} className="flex items-start text-sm">
                <span className="text-hai mr-2 mt-1">•</span>
                <span>{metric}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
)}
```

## How to Apply
1. Open `app/page.tsx`
2. Update the import statement on line 13 to include the new data exports
3. Add the calendar layout block after the timeline layout (around line 205)
4. Add the metrics layout block after the calendar layout
5. Test that slides 8 (February) and 9 (Metrics) render correctly

## Verification
- Navigate to slide 8 → should show February events in 2-column grid + revenue target
- Navigate to slide 9 → should show tracking cadence bullets + 3-column metrics grid
- All colors should use Japanese palette (washi, hai, beni, kincha)
