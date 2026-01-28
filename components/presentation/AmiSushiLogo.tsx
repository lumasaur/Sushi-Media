'use client'

interface AmiSushiLogoProps {
  currentSlide: number
}

export function AmiSushiLogo({ currentSlide }: AmiSushiLogoProps) {
  const isDarkBackground = [0].includes(currentSlide)

  return (
    <div
      className={'fixed top-6 left-6 z-40 pointer-events-none ' + (isDarkBackground ? 'text-white' : 'text-ami-primary')}
    >
      <h1 className="text-2xl tv:text-4xl-tv font-bold font-cormorant">
        Ami Sushi
      </h1>
      <p className="text-xs tv:text-base-tv font-eb-garamond">
        Marketing Strategy
      </p>
    </div>
  )
}
