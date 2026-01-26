'use client'

import { useEffect, useRef } from 'react'

/**
 * Options for configuring touch gesture detection
 */
export interface UseTouchGesturesOptions {
  /** Callback fired when user navigates forward (swipe left or double-tap right side) */
  onNavigateForward: () => void
  /** Callback fired when user navigates backward (swipe right or double-tap left side) */
  onNavigateBackward: () => void
  /** Maximum time between taps to count as double-tap (ms). Default: 600ms per CONTEXT.md */
  doubleTapThreshold?: number
  /** Minimum swipe distance to trigger navigation (px). Default: 100px per CONTEXT.md */
  swipeThreshold?: number
  /** Maximum angle from horizontal for swipe (degrees). Default: 30 degrees per CONTEXT.md */
  angleThreshold?: number
  /** Whether touch gestures are enabled. Default: true */
  enabled?: boolean
}

/**
 * Hook for detecting touch gestures (double-tap and swipe) for slide navigation.
 *
 * Features:
 * - Double-tap zones: Left 25% goes back, Right 75% goes forward
 * - Horizontal swipe: Left swipe advances, right swipe goes back
 * - Angle detection: Vertical/diagonal swipes (>30°) preserved for scrolling
 * - Haptic feedback: Subtle vibration on successful navigation
 * - Scrollable content detection: Stricter swipe angle on scrollable elements
 *
 * @example
 * ```tsx
 * useTouchGestures({
 *   onNavigateForward: () => setSlide(s => s + 1),
 *   onNavigateBackward: () => setSlide(s => s - 1),
 * })
 * ```
 */
export function useTouchGestures(options: UseTouchGesturesOptions) {
  const {
    onNavigateForward,
    onNavigateBackward,
    doubleTapThreshold = 600,
    swipeThreshold = 100,
    angleThreshold = 30,
    enabled = true,
  } = options

  // Track last tap for double-tap detection
  const lastTapRef = useRef<{ time: number; x: number; y: number } | null>(null)

  // Track touch start for swipe detection
  const touchStartRef = useRef<{ x: number; y: number; time: number; target: EventTarget | null } | null>(null)

  useEffect(() => {
    if (!enabled) return

    /**
     * Check if touch target is on scrollable content that overflows
     */
    const isOnScrollableContent = (target: EventTarget | null): boolean => {
      if (!(target instanceof HTMLElement)) return false

      // Check if target or any parent has scrollable-slide class
      const scrollableParent = target.closest('.scrollable-slide')
      if (!scrollableParent) return false

      // Check if content actually overflows (needs scrolling)
      return scrollableParent.scrollHeight > scrollableParent.clientHeight
    }

    /**
     * Trigger haptic feedback on successful navigation
     */
    const triggerHaptic = () => {
      if ('vibrate' in navigator) {
        navigator.vibrate(10) // Subtle 10ms vibration
      }
    }

    /**
     * Handle touch start - record position for swipe detection
     */
    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0]
      touchStartRef.current = {
        x: touch.clientX,
        y: touch.clientY,
        time: Date.now(),
        target: e.target,
      }
    }

    /**
     * Handle touch end - detect swipes and double-taps
     */
    const handleTouchEnd = (e: TouchEvent) => {
      const touch = e.changedTouches[0]
      const now = Date.now()
      const touchStart = touchStartRef.current

      if (!touchStart) return

      const deltaX = touch.clientX - touchStart.x
      const deltaY = touch.clientY - touchStart.y
      const elapsed = now - touchStart.time

      // Calculate angle from horizontal (0° = pure horizontal)
      const angle = Math.abs(Math.atan2(deltaY, deltaX) * (180 / Math.PI))
      const isHorizontal = angle < angleThreshold || angle > (180 - angleThreshold)

      // Check if on scrollable content (requires stricter horizontal angle)
      const onScrollable = isOnScrollableContent(touchStart.target)
      const strictAngle = 20 // Stricter angle for scrollable content

      // SWIPE DETECTION: Check first (takes priority over double-tap)
      if (Math.abs(deltaX) > swipeThreshold && elapsed < 500) {
        // For scrollable content, require stricter horizontal angle
        if (onScrollable) {
          if (!isHorizontal || angle > strictAngle) {
            // Let vertical/diagonal touch events pass through for scrolling
            touchStartRef.current = null
            return
          }
        } else {
          // For non-scrollable content, use standard angle threshold
          if (!isHorizontal) {
            touchStartRef.current = null
            return
          }
        }

        // Valid horizontal swipe detected
        if (deltaX < 0) {
          // Swipe left = go forward
          onNavigateForward()
          triggerHaptic()
        } else {
          // Swipe right = go back
          onNavigateBackward()
          triggerHaptic()
        }

        // Clear both refs after successful swipe
        touchStartRef.current = null
        lastTapRef.current = null
        return
      }

      // DOUBLE-TAP DETECTION: Only if swipe wasn't detected
      const lastTap = lastTapRef.current

      if (
        lastTap &&
        now - lastTap.time < doubleTapThreshold &&
        Math.abs(touch.clientX - lastTap.x) < 30 && // Same spot tolerance
        Math.abs(touch.clientY - lastTap.y) < 30
      ) {
        // Double-tap detected - determine zone (left 25% vs right 75%)
        const screenWidth = window.innerWidth
        const tapX = touch.clientX

        if (tapX < screenWidth * 0.25) {
          // Left 25% zone = go back
          onNavigateBackward()
          triggerHaptic()
        } else {
          // Right 75% zone = go forward
          onNavigateForward()
          triggerHaptic()
        }

        // Reset after double-tap
        lastTapRef.current = null
      } else {
        // First tap - record for potential double-tap
        lastTapRef.current = {
          time: now,
          x: touch.clientX,
          y: touch.clientY,
        }
      }

      touchStartRef.current = null
    }

    // Add event listeners
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })

    // Cleanup
    return () => {
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [
    enabled,
    onNavigateForward,
    onNavigateBackward,
    doubleTapThreshold,
    swipeThreshold,
    angleThreshold,
  ])
}
