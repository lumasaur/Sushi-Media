'use client'

import { useState, useEffect, useCallback } from 'react'

interface UseSlideNavigationOptions {
  totalSlides: number
  initialSlide?: number
}

interface UseSlideNavigationReturn {
  currentSlide: number
  nextSlide: () => void
  previousSlide: () => void
  goToSlide: (index: number) => void
  isFirst: boolean
  isLast: boolean
}

/**
 * Custom hook for managing slide navigation with URL hash state and keyboard controls.
 *
 * Features:
 * - URL hash persistence (1-indexed for human readability: #1, #2, #3...)
 * - Browser history integration (forward/backward buttons)
 * - Keyboard navigation with focus management
 * - Deep linking support
 *
 * @param options - Configuration object
 * @param options.totalSlides - Total number of slides in the presentation
 * @param options.initialSlide - Optional initial slide index (0-indexed), defaults to 0 or hash value
 * @returns Navigation state and control functions
 */
export function useSlideNavigation({
  totalSlides,
  initialSlide = 0
}: UseSlideNavigationOptions): UseSlideNavigationReturn {
  const [currentSlide, setCurrentSlide] = useState(initialSlide)

  // Helper function to check if user is focused on an input element
  const isInputFocused = useCallback(() => {
    if (typeof document === 'undefined') return false
    const activeElement = document.activeElement
    const tagName = activeElement?.tagName?.toLowerCase()
    return tagName === 'input' || tagName === 'textarea' || tagName === 'select'
  }, [])

  // Helper function to validate and parse slide number from hash
  const getSlideFromHash = useCallback((): number => {
    if (typeof window === 'undefined') return 0
    const hash = window.location.hash.slice(1)
    const slideNum = parseInt(hash, 10)

    // Validate: hash must be a number between 1 and totalSlides
    if (!isNaN(slideNum) && slideNum >= 1 && slideNum <= totalSlides) {
      return slideNum - 1 // Convert 1-indexed URL to 0-indexed state
    }
    return 0 // Default to first slide for invalid hash
  }, [totalSlides])

  // Helper function to update URL hash
  const updateHash = useCallback((slideIndex: number, createHistoryEntry: boolean = true) => {
    if (typeof window === 'undefined') return

    const hashValue = `#${slideIndex + 1}` // Convert 0-indexed to 1-indexed

    if (createHistoryEntry) {
      // Create new history entry for forward navigation
      window.history.pushState(null, '', hashValue)
    } else {
      // Replace current history entry for backward navigation
      window.history.replaceState(null, '', hashValue)
    }
  }, [])

  // Initialize slide from URL hash on mount
  useEffect(() => {
    const initialSlideFromHash = getSlideFromHash()
    setCurrentSlide(initialSlideFromHash)

    // Ensure URL hash is set correctly even if we defaulted to slide 0
    if (window.location.hash === '' || getSlideFromHash() !== initialSlideFromHash) {
      updateHash(initialSlideFromHash, false)
    }
  }, []) // Empty deps - only run once on mount

  // Navigation functions
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      if (prev < totalSlides - 1) {
        const nextIndex = prev + 1
        updateHash(nextIndex, true) // Create history entry for forward navigation
        return nextIndex
      }
      return prev
    })
  }, [totalSlides, updateHash])

  const previousSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      if (prev > 0) {
        const prevIndex = prev - 1
        updateHash(prevIndex, true) // Create history entry (user can use browser back too)
        return prevIndex
      }
      return prev
    })
  }, [updateHash])

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlide(index)
      updateHash(index, true) // Create history entry for jumps
    }
  }, [totalSlides, updateHash])

  // Handle browser back/forward buttons
  useEffect(() => {
    if (typeof window === 'undefined') return

    const handlePopState = () => {
      const slideIndex = getSlideFromHash()
      setCurrentSlide(slideIndex)
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [getSlideFromHash])

  // Keyboard navigation
  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip keyboard navigation when user is typing in an input
      if (isInputFocused()) return

      const forwardKeys = ['ArrowRight', 'ArrowDown', ' ', 'PageDown', 'Enter']
      const backwardKeys = ['ArrowLeft', 'ArrowUp', 'PageUp', 'Backspace']

      if (forwardKeys.includes(e.key)) {
        e.preventDefault()
        nextSlide()
      } else if (backwardKeys.includes(e.key)) {
        e.preventDefault()
        previousSlide()
      } else if (e.key === 'Home') {
        e.preventDefault()
        goToSlide(0)
      } else if (e.key === 'End') {
        e.preventDefault()
        goToSlide(totalSlides - 1)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [nextSlide, previousSlide, goToSlide, totalSlides, isInputFocused])

  // Derived state
  const isFirst = currentSlide === 0
  const isLast = currentSlide === totalSlides - 1

  return {
    currentSlide,
    nextSlide,
    previousSlide,
    goToSlide,
    isFirst,
    isLast
  }
}
