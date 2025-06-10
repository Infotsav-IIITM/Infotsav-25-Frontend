/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'neon-red': '#FF1744',
        'neon-cyan': '#00E5FF',
        'neon-magenta': '#E91E63',
        'neon-purple': '#9C27B0',
        'neon-yellow': '#FFD600',
        'neon-orange': '#FF6D00',
        'dark-gray': '#0A0A0A',
        'darker-gray': '#050505',
      },
      fontFamily: {
        'stranger': ['serif'],
        'mono': ['ui-monospace', 'SFMono-Regular', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'flicker': 'flicker 2s infinite',
        'glitch': 'glitch 1s infinite',
        'scanline': 'scanline 2s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100vh)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        'synthwave-grid': 'linear-gradient(to bottom, #E91E63 0%, #9C27B0 50%, #0A0A0A 100%)',
        'neon-gradient': 'linear-gradient(45deg, #FF1744, #E91E63, #9C27B0, #00E5FF)',
      },
      dropShadow: {
        'neon-red': '0 0 10px #FF1744',
        'neon-cyan': '0 0 10px #00E5FF',
        'neon-magenta': '0 0 10px #E91E63',
        'neon-purple': '0 0 10px #9C27B0',
      },
      boxShadow: {
        'neon-red': '0 0 20px #FF1744',
        'neon-cyan': '0 0 20px #00E5FF',
        'neon-magenta': '0 0 20px #E91E63',
        'neon-purple': '0 0 20px #9C27B0',
      },
    },
  },
  plugins: [],
};