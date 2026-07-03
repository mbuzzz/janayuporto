/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['"Nunito"', 'sans-serif'],
        poppins: ['"Poppins"', 'sans-serif'],
      },
      colors: {
        pinkPrimary: '#C85A73',
        pinkHighlight: '#F3A0B1',
        navyOutline: '#1B2A4A',
        creamBg: '#F7F4F0',
        sparkle: '#FF7CA8',
      },
      animation: {
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'float-slow': 'float 8s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { transform: 'scale(1)', filter: 'drop-shadow(0 0 4px rgba(243, 160, 177, 0.4))' },
          '50%': { transform: 'scale(1.03)', filter: 'drop-shadow(0 0 12px rgba(243, 160, 177, 0.8))' },
        },
        float: {
          '0%': { transform: 'translateY(-10px) rotate(0deg)' },
          '50%': { transform: 'translateY(15px) rotate(10deg)' },
          '100%': { transform: 'translateY(-10px) rotate(0deg)' },
        }
      }
    },
  },
  plugins: [],
}