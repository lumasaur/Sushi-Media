/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-black': '#120c0d',
        'brand-white': '#f5f5f5',
        'brand-red': '#b22222',
        'light-tan': '#e8e0d5',
        'brand-gold': '#D4AF37',
        'warm-cream': '#FFF8E7',
        'sushi-orange': '#FF6B35',
        'sake-jade': '#00A86B',
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'serif'],
        'eb-garamond': ['var(--font-eb-garamond)', 'serif'],
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'medium': '0 4px 16px rgba(0, 0, 0, 0.15)',
        'strong': '0 8px 24px rgba(0, 0, 0, 0.2)',
        'glow-red': '0 0 20px rgba(178, 34, 34, 0.3)',
        'glow-gold': '0 0 20px rgba(212, 175, 55, 0.3)',
      },
    },
  },
  plugins: [],
}
