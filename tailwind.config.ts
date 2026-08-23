import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#0a0a0a',
        'primary-charcoal': '#1a1a1a',
        'secondary-charcoal': '#252525',
        'accent-gold': '#d4af37',
        'accent-bronze': '#b8860b',
        'text-primary': '#ffffff',
        'text-secondary': '#f5f5f5',
        'text-muted': '#a89968',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      fontSize: {
        'hero': ['4rem', { lineHeight: '1.1', fontWeight: '700' }],
        'section-title': ['3rem', { lineHeight: '1.2', fontWeight: '700' }],
        'card-title': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      spacing: {
        'section': '6rem',
        'section-mobile': '3rem',
      },
    },
  },
  plugins: [],
};

export default config;
