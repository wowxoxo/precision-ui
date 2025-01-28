import type { Config } from 'tailwindcss'

// eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-unused-vars
const { fontFamily, colors } = require('tailwindcss/defaultTheme')

const config: Config = {
  // darkMode: ['class'],
  darkMode: ['class', '[data-mode="dark"]'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  safelist: ['dark'],
  prefix: 'pui-',
  theme: {
    // todo: test in next app before use here
    screens: {
      mobile: '360px', // design
      xs: '360px',
      sm: '640px',
      tablet: '768px', // design
      md: '768px',
      lg: '990px',
      laptop: '990px', // not used in design
      xl: '1280px',
      desktop: '1440px', // design
      '2xl': '1440px',
      '3xl': '1600px',
    },
    container: {
      center: true,
      // padding: '2rem',
      padding: '1.5rem',
      // not presented in next app
      screens: {
        // todo: add more screen sizes
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        navy: {
          DEFAULT: 'hsl(var(--precision-ui-tw-navy))',
          'opacity-4': 'hsl(var(--precision-ui-tw-navy-opacity-4))',
          'opacity-4-absolute':
            'hsl(var(--precision-ui-tw-navy-opacity-4-absolute))',
          'opacity-8': 'hsl(var(--precision-ui-tw-navy-opacity-8))',
          'opacity-16': 'hsl(var(--precision-ui-tw-navy-opacity-16))',
          'opacity-32': 'hsl(var(--precision-ui-tw-navy-opacity-32))',
          'opacity-40': 'hsl(var(--precision-ui-tw-navy-opacity-40))',
          'opacity-60': 'hsl(var(--precision-ui-tw-navy-opacity-60))',
          'opacity-80': 'hsl(var(--precision-ui-tw-navy-opacity-80))',
        },
        sapphire: {
          DEFAULT: 'hsl(var(--precision-ui-tw-sapphire))',
          hover: 'hsl(var(--precision-ui-tw-sapphire-hover))',
        },
        turquoise: {
          DEFAULT: 'hsl(var(--precision-ui-tw-turquoise))',
          'opacity-16': 'hsl(var(--precision-ui-tw-turquoise-opacity-16))',
          'opacity-20': 'hsl(var(--precision-ui-tw-turquoise-opacity-20))',
        },
        article: {
          verylight: 'hsl(var(--precision-ui-tw-article-verylight))',
          ultramarine: 'hsl(var(--precision-ui-tw-article-ultramarine))',
        },
        whitish: {
          DEFAULT: 'hsl(var(--precision-ui-tw-whitish))',
          'opacity-8': 'hsl(var(--precision-ui-tw-whitish-opacity-8))',
          'opacity-16': 'hsl(var(--precision-ui-tw-whitish-opacity-16))',
          'opacity-24': 'hsl(var(--precision-ui-tw-whitish-opacity-24))',
          'opacity-32': 'hsl(var(--precision-ui-tw-whitish-opacity-32))',
          'opacity-40': 'hsl(var(--precision-ui-tw-whitish-opacity-40))',
          'opacity-60': 'hsl(var(--precision-ui-tw-whitish-opacity-60))',
          'opacity-80': 'hsl(var(--precision-ui-tw-whitish-opacity-80))',
        },
        grey: {
          1: 'hsl(var(--precision-ui-tw-grey-1))',
          2: 'hsl(var(--precision-ui-tw-grey-2))',
        },
        danger: 'hsl(var(--precision-ui-tw-danger))',
        border: 'hsl(var(--precision-ui-tw-border))',
        input: 'hsl(var(--precision-ui-tw-input))',
        ring: 'hsl(var(--precision-ui-tw-ring))',
        background: 'hsl(var(--precision-ui-tw-background))',
        foreground: 'hsl(var(--precision-ui-tw-foreground))',
        primary: {
          // DEFAULT: "hsl(var(--precision-ui-tw-navy))",
          DEFAULT: 'hsl(var(--precision-ui-tw-primary))',
          foreground: 'hsl(var(--precision-ui-tw-primary-foreground))',
        },
        secondary: {
          // DEFAULT: "hsl(var(--precision-ui-tw-sapphire))",
          DEFAULT: 'hsl(var(--precision-ui-tw-secondary))',
          foreground: 'hsl(var(--precision-ui-tw-secondary-foreground))',
        },
        destructive: {
          // DEFAULT: "hsl(var(--precision-ui-tw-danger))",
          DEFAULT: 'hsl(var(--precision-ui-tw-destructive))',
          foreground: 'hsl(var(--precision-ui-tw-destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--precision-ui-tw-muted))',
          foreground: 'hsl(var(--precision-ui-tw-muted-foreground))',
        },
        accent: {
          // DEFAULT: "hsl(var(--precision-ui-tw-turquoise))",
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
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        lg: 'var(--precision-ui-tw-radius)',
        md: 'calc(var(--precision-ui-tw-radius) - 2px)',
        sm: 'calc(var(--precision-ui-tw-radius) - 4px)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
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
    preflight: false, // FIXME: check how it works
  },
}

export default config
