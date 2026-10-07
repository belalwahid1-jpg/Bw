/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#0a0a0c',
        panel: '#111318',
        panelAlt: '#171b22',
        neon: {
          cyan: '#3ce2ff',
          emerald: '#34f5c5',
          violet: '#8b5cf6',
          pink: '#ff6ec7',
        },
      },
      boxShadow: {
        glow: '0 0 30px rgba(52, 245, 197, 0.25)',
        neon: '0 0 80px rgba(60, 226, 255, 0.18)',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        pulseSlow: 'pulseSlow 4s ease-in-out infinite',
        shimmer: 'shimmer 6s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSlow: {
          '0%, 100%': { boxShadow: '0 0 0 rgba(52, 245, 197, 0)' },
          '50%': { boxShadow: '0 0 25px rgba(52, 245, 197, 0.2)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
    },
  },
  plugins: [],
}
