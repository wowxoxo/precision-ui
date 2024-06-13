/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  safelist: ['dark'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--precision-ui-tw-border))',
        input: 'hsl(var(--precision-ui-tw-input))',
        ring: 'hsl(var(--precision-ui-tw-ring))',
        background: 'hsl(var(--precision-ui-tw-background))',
        foreground: 'hsl(var(--precision-ui-tw-foreground))',
        primary: {
          DEFAULT: 'hsl(var(--precision-ui-tw-primary))',
          foreground: 'hsl(var(--precision-ui-tw-primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--precision-ui-tw-secondary))',
          foreground: 'hsl(var(--precision-ui-tw-secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--precision-ui-tw-destructive))',
          foreground: 'hsl(var(--precision-ui-tw-destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--precision-ui-tw-muted))',
          foreground: 'hsl(var(--precision-ui-tw-muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--precision-ui-tw-accent))',
          foreground: 'hsl(var(--precision-ui-tw-accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--precision-ui-tw-popover))',
          foreground: 'hsl(var(--precision-ui-tw-popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--precision-ui-tw-card))',
          foreground: 'hsl(var(--precision-ui-tw-card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--precision-ui-tw-radius)',
        md: 'calc(var(--precision-ui-tw-radius) - 2px)',
        sm: 'calc(var(--precision-ui-tw-radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
  corePlugins: {
    preflight: false,
  },
}
