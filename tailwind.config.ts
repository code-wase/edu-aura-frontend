import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
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
        /* ===============================
				   SHADCN BASE COLORS (UNCHANGED)
				================================ */
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',

        /* ===============================
				   BRAND COLORS (UPDATED)
				================================ */
        primary: {
          DEFAULT: '#7B4CBB', // PRIMARY
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#546CCC', // SECONDARY
          foreground: '#FFFFFF',
        },

        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: '#546CCC',
          foreground: '#FFFFFF',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },

        /* ===============================
				   SIDEBAR COLORS (BRAND MAPPED)
				================================ */
        sidebar: {
          DEFAULT: '#F5F3FF',
          foreground: '#1F2937',
          primary: '#7B4CBB',
          'primary-foreground': '#FFFFFF',
          accent: '#546CCC',
          'accent-foreground': '#FFFFFF',
          border: '#E5E7EB',
          ring: '#7B4CBB',
        },

        /* ===============================
				   COLLEGE THEME (UPDATED)
				================================ */
        college: {
          blue: '#546CCC', // earlier blue → secondary
          lightBlue: '#EEF2FF',
          navy: '#4338CA',
          purple: '#7B4CBB', // primary
          lightPurple: '#F3E8FF',
          gray: '#6B7280',
          lightGray: '#F3F4F6',
        },
      },

      /* ===============================
			   RADIUS (UNCHANGED)
			================================ */
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },

      /* ===============================
			   ANIMATIONS (UNCHANGED)
			================================ */
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-in-left': 'slide-in-left 0.6s ease-out',
        'slide-in-right': 'slide-in-right 0.6s ease-out',
        float: 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
