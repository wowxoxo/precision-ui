const defaultTheme = require('tailwindcss/defaultTheme')

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
    // todo: test in next app before use here
    // screens: {
    //   mobile: '360px',
    //   xs: '360px',
    //   sm: '640px',
    //   tablet: '768px',
    //   md: '768px',
    //   lg: '1024px',
    //   laptop: '1024px', // not used in design
    //   xl: '1280px',
    //   desktop: '1440px',
    //   '2xl': '1440px',
    // },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        // todo: add more screen sizes
        '2xl': '1400px',
      },
    },
    colors: {
      ...defaultTheme.colors,
      navy: {
        DEFAULT: 'hsl(var(--precision-ui-tw-navy))',
        'opacity-4': 'hsl(var(--precision-ui-tw-navy-opacity-4))',
        'opacity-16': 'hsl(var(--precision-ui-tw-navy-opacity-16))',
        'opacity-32': 'hsl(var(--precision-ui-tw-navy-opacity-32))',
        'opacity-40': 'hsl(var(--precision-ui-tw-navy-opacity-40))',
        'opacity-60': 'hsl(var(--precision-ui-tw-navy-opacity-60))',
      },
      sapphire: 'hsl(var(--precision-ui-tw-sapphire))',
      turquoise: {
        DEFAULT: 'hsl(var(--precision-ui-tw-turquoise))',
        'opacity-16': 'hsl(var(--precision-ui-tw-turquoise-opacity-16))',
      },
      whitish: {
        DEFAULT: 'hsl(var(--precision-ui-tw-whitish))',
        'opacity-8': 'hsl(var(--precision-ui-tw-whitish-opacity-8))',
        'opacity-16': 'hsl(var(--precision-ui-tw-whitish-opacity-16))',
        'opacity-32': 'hsl(var(--precision-ui-tw-whitish-opacity-32))',
        'opacity-60': 'hsl(var(--precision-ui-tw-whitish-opacity-60))',
      },
      grey: {
        1: 'hsl(var(--precision-ui-tw-grey-1))',
        2: 'hsl(var(--precision-ui-tw-grey-2))',
      },
      danger: 'hsl(var(--precision-ui-tw-danger))',
    },
    extend: {
      colors: {
        border: 'hsl(var(--precision-ui-tw-border))',
        input: 'hsl(var(--precision-ui-tw-input))',
        ring: 'hsl(var(--precision-ui-tw-ring))',
        background: 'hsl(var(--precision-ui-tw-background))',
        foreground: 'hsl(var(--precision-ui-tw-foreground))',
        primary: {
          DEFAULT: 'hsl(var(--precision-ui-tw-navy))',
          // foreground: 'hsl(var(--precision-ui-tw-primary-foreground))',
          foreground: 'hsl(var(--precision-ui-tw-navy-opacity-4))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--precision-ui-tw-sapphire))',
          // foreground: 'hsl(var(--precision-ui-tw-secondary-foreground))',
          foreground: 'hsl(var(--precision-ui-tw-danger))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--precision-ui-tw-danger))',
          foreground: 'hsl(var(--precision-ui-tw-destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--precision-ui-tw-muted))',
          foreground: 'hsl(var(--precision-ui-tw-muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--precision-ui-tw-turquoise))',
          // foreground: 'hsl(var(--precision-ui-tw-accent-foreground))',
          foreground: 'hsl(var(--precision-ui-tw-turquoise-opacity-16))',
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
