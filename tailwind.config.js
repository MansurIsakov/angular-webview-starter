/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        neutral: {
          50: 'var(--neutral-50)',
          100: 'var(--neutral-100)',
          150: 'var(--neutral-150)',
          200: 'var(--neutral-200)',
          250: 'var(--neutral-250)',
          300: 'var(--neutral-300)',
          350: 'var(--neutral-350)',
          400: 'var(--neutral-400)',
          410: 'var(--neutral-410)',
          450: 'var(--neutral-450)',
          500: 'var(--neutral-500)',
          600: 'var(--neutral-600)',
          700: 'var(--neutral-700)',
          800: 'var(--neutral-800)',
          850: 'var(--neutral-850)',
          900: 'var(--neutral-900)',
          950: 'var(--neutral-950)',
          960: 'var(--neutral-960)',
        },
        'static-gray': {
          50: 'var(--static-gray-50)',
          500: 'var(--static-gray-500)',
          900: 'var(--static-gray-900)',
        },
        primary: {
          100: 'var(--primary-100)',
          200: 'var(--primary-200)',
          300: 'var(--primary-300)',
          400: 'var(--primary-400)',
          500: 'var(--primary-500)',
          600: 'var(--primary-600)',
        },
        error: {
          100: 'var(--error-100)',
          200: 'var(--error-200)',
        },
        tips: {
          200: 'var(--tips-200)',
        },
        warning: {
          100: 'var(--warning-100)',
          200: 'var(--warning-200)',
          300: 'var(--warning-300)',
        },
        extended: {
          100: 'var(--extended-100)',
          200: 'var(--extended-200)',
          300: 'var(--extended-300)',
          400: 'var(--extended-400)',
          500: 'var(--extended-500)',
          550: 'var(--extended-550)',
          600: 'var(--extended-600)',
        },
      },
      fontSize: {
        vs: 'var(--text-vs)',
        'semi-sm': 'var(--text-semi-sm)',
        'semi-base': 'var(--text-semi-base)',
        'semi-lg': 'var(--text-semi-lg)',
        'semi-xl': 'var(--text-semi-xl)',
      },
      lineHeight: {
        'semi-4': "var('--line-height-semi-4')",
        'semi-6': 'var(--line-height-semi-6)',
        12: 'var(--line-height-12)',
      },
      height: {
        header: 'var(--header-height)',
      },
      maxWidth: {
        'web-view': 'var(--max-webview-width)',
      },
      padding: {
        'content-padding': 'var(--content-padding)',
      },
      animation: {
        'input-message': 'input-message-animation 0.3s ease-in-out',
      },
      keyframes: {
        'input-message-animation': {
          '0%': {
            opacity: 0,
            transform: 'translateY(-6px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
};
