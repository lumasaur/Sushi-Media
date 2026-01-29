/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'tv': '1920px',
      },
      colors: {
        // Existing (keep during migration)
        'brand-black': '#120c0d',
        'brand-white': '#f5f5f5',
        'brand-red': '#b22222',
        'light-tan': '#e8e0d5',
        'ami-primary': 'var(--ami-primary)',
        'ami-primary-dark': 'var(--ami-primary-dark)',
        'ami-primary-light': 'var(--ami-primary-light)',
        'ami-secondary': 'var(--ami-secondary)',
        'ami-secondary-dark': 'var(--ami-secondary-dark)',
        'ami-secondary-light': 'var(--ami-secondary-light)',
        'ami-accent': 'var(--ami-accent)',
        'ami-accent-dark': 'var(--ami-accent-dark)',

        // Japanese-inspired palette from DESIGN-SYSTEM.md
        'sumi': {
          DEFAULT: '#1a1614',
          deep: '#0f0d0c',
          light: '#2d2825'
        },
        'washi': '#faf8f5',       // Paper white - primary text
        'beni': '#8b2635',        // Burgundy - accent
        'kincha': '#c4a35a',      // Gold tea - highlights
        'hai': '#6b6560',         // Ash gray - secondary text
        'kitsune': '#d4c4a8',     // Fox tan - warm backgrounds

        // Premium palette additions
        'deepIndigo': '#1A1F3A',  // Primary dark background
        'warmCream': '#F5F1E8',   // Primary light background
        'coral': '#FF6B5A',       // CTA accent (replaces heavy beni)
        'softGold': '#D4AF37',    // Premium touch
        'charcoal': '#2D2D2D',    // Text on light

        // Gradient colors for Night/Deep/Warm backgrounds
        'sumi-deep': '#1f1a18',   // Deep gradient end
        'sumi-warm': '#3d3530',   // Warm gradient end
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'serif'],
        'eb-garamond': ['var(--font-eb-garamond)', 'serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      fontSize: {
        'xs-tv': 'var(--ami-text-xs-tv)',
        'sm-tv': 'var(--ami-text-sm-tv)',
        'base-tv': 'var(--ami-text-base-tv)',
        'lg-tv': 'var(--ami-text-lg-tv)',
        'xl-tv': 'var(--ami-text-xl-tv)',
        '2xl-tv': 'var(--ami-text-2xl-tv)',
        '3xl-tv': 'var(--ami-text-3xl-tv)',
        '4xl-tv': 'var(--ami-text-4xl-tv)',
        '5xl-tv': 'var(--ami-text-5xl-tv)',
        '6xl-tv': 'var(--ami-text-6xl-tv)',
      },
    },
  },
  plugins: [],
}
