/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#08080c',
        'bg-secondary': '#0d0d14',
        'bg-elevated': '#14141e',
        'accent': '#f5f5f7',
        'muted': '#86868b',
        'muted-soft': '#6e6e73',
        'gold': {
          DEFAULT: '#d4a853',
          light: '#e8c67a',
          dim: '#a07d3a',
        },
        'glass-bg': 'rgba(255,255,255,0.025)',
        'glass-border': 'rgba(255,255,255,0.10)',
      },
      fontFamily: {
        grotesk: ['var(--font-space-grotesk)', 'sans-serif'],
        outfit: ['var(--font-outfit)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'spin-reverse': 'spin 15s linear infinite reverse',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'grain': 'grain 8s steps(10) infinite',
        'pulse-gold': 'pulseGold 2.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { opacity: '0.4' },
          '100%': { opacity: '1' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-2%, -3%)' },
          '20%': { transform: 'translate(3%, 2%)' },
          '30%': { transform: 'translate(-1%, 4%)' },
          '40%': { transform: 'translate(4%, -1%)' },
          '50%': { transform: 'translate(-3%, 3%)' },
          '60%': { transform: 'translate(2%, -4%)' },
          '70%': { transform: 'translate(-4%, 1%)' },
          '80%': { transform: 'translate(1%, -2%)' },
          '90%': { transform: 'translate(-2%, 4%)' },
        },
        pulseGold: {
          '0%, 100%': { opacity: '0.6', boxShadow: '0 0 8px rgba(212, 168, 83, 0.3)' },
          '50%': { opacity: '1', boxShadow: '0 0 20px rgba(212, 168, 83, 0.6)' },
        },
      },
      screens: {
        'xs': '480px',
        '3xl': '1920px',
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
        '3xl': '20px',
      },
    },
  },
  plugins: [],
}
