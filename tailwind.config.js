/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        romantic: {
          50: '#fff5f7',
          100: '#ffe8ed',
          200: '#fed2dc',
          300: '#fbaac0',
          400: '#f6759c',
          500: '#ec487f',
          600: '#d92765',
          700: '#ba1750',
          800: '#9b1645',
          900: '#83173e',
        },
        rosewood: {
          500: '#a32845',
          700: '#75132d',
        },
        cream: {
          50: '#fffcf7',
          100: '#fdfbf5',
          200: '#f9f4e8',
          300: '#f2e8d3',
        },
        champagne: '#f7e7ce',
        gold: '#d4af37',
      },
      fontFamily: {
        handwriting: ['"Dancing Script"', '"Caveat"', '"Great Vibes"', 'cursive'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Quicksand"', '"Nunito"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(3deg)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(-2deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        flicker: {
          '0%, 100%': { transform: 'scale(1) skewX(0deg)', opacity: '1' },
          '25%': { transform: 'scale(1.1, 0.95) skewX(2deg)', opacity: '0.9' },
          '50%': { transform: 'scale(0.95, 1.05) skewX(-2deg)', opacity: '0.95' },
          '75%': { transform: 'scale(1.05, 1.02) skewX(1deg)', opacity: '0.88' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '14%': { transform: 'scale(1.15)' },
          '28%': { transform: 'scale(1)' },
          '42%': { transform: 'scale(1.15)' },
          '70%': { transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        twinkle: 'twinkle 2.5s ease-in-out infinite',
        flicker: 'flicker 0.8s ease-in-out infinite',
        heartbeat: 'heartbeat 2s ease-in-out infinite',
        shimmer: 'shimmer 3s infinite linear',
      },
    },
  },
  plugins: [],
}
