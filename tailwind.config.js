/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Neo Tokyo Obsidian Palette
        'obsidian': '#05060a',
        'asphalt': '#0a0c14',
        'chrome': '#1a1d28',
        'chrome-200': '#e6e9f2',
        'chrome-300': '#c8ccd9',
        'chrome-500': '#7a8299',
        'chrome-700': '#4a5066',
        // Neon Signals
        'neon-cyan': '#00e5ff',
        'neon-magenta': '#ff2bd6',
        'neon-amber': '#ffb547',
        // Legacy Tokyo-Night tokens (for TerminalContact)
        'bg-base': '#1a1b26',
        'bg-surface': '#24283b',
        'neon-blue': '#7aa2f7',
        'neon-purple': '#bb9af7',
        'neon-pink': '#f7768e',
        'neon-green': '#9ece6a',
        'neon-yellow': '#e0af68',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Bebas Neue', 'Impact', 'sans-serif'],
        sub: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'blob': 'blob 10s infinite',
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'scan-sweep': 'scanSweep 2.5s ease-in-out infinite',
        'rain-drift': 'rainDrift 15s linear infinite',
        'horizon-pulse': 'horizonPulse 4s ease-in-out infinite',
        'rail-pulse': 'railPulse 2s ease-in-out infinite',
        'chrome-sweep': 'chromeSweep 3s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        scanSweep: {
          '0%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        rainDrift: {
          '0%': { transform: 'translateX(-10%) translateY(-10%)' },
          '100%': { transform: 'translateX(10%) translateY(10%)' },
        },
        horizonPulse: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.6' },
        },
        railPulse: {
          '0%, 100%': { opacity: '0.4', boxShadow: '0 0 10px currentColor' },
          '50%': { opacity: '1', boxShadow: '0 0 20px currentColor, 0 0 40px currentColor' },
        },
        chromeSweep: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      boxShadow: {
        'glow-blue': '0 0 20px rgba(122, 162, 247, 0.5), 0 0 40px rgba(122, 162, 247, 0.3)',
        'glow-blue-lg': '0 0 30px rgba(122, 162, 247, 0.6), 0 0 60px rgba(122, 162, 247, 0.4)',
        'glow-purple': '0 0 20px rgba(187, 154, 247, 0.5), 0 0 40px rgba(187, 154, 247, 0.3)',
        'glow-purple-lg': '0 0 30px rgba(187, 154, 247, 0.6), 0 0 60px rgba(187, 154, 247, 0.4)',
        'glow-pink': '0 0 20px rgba(247, 118, 142, 0.5), 0 0 40px rgba(247, 118, 142, 0.3)',
        'glow-cyan': '0 0 20px rgba(0, 229, 255, 0.5), 0 0 40px rgba(0, 229, 255, 0.3)',
        'glow-cyan-lg': '0 0 30px rgba(0, 229, 255, 0.6), 0 0 60px rgba(0, 229, 255, 0.4)',
        'glow-magenta': '0 0 20px rgba(255, 43, 214, 0.5), 0 0 40px rgba(255, 43, 214, 0.3)',
        'glow-magenta-lg': '0 0 30px rgba(255, 43, 214, 0.6), 0 0 60px rgba(255, 43, 214, 0.4)',
        'glow-green': '0 0 20px rgba(158, 206, 106, 0.5), 0 0 40px rgba(158, 206, 106, 0.3)',
        'glow-yellow': '0 0 20px rgba(224, 175, 104, 0.5), 0 0 40px rgba(224, 175, 104, 0.3)',
        'glow-amber': '0 0 20px rgba(255, 181, 71, 0.5), 0 0 40px rgba(255, 181, 71, 0.3)',
        'glow-amber-lg': '0 0 30px rgba(255, 181, 71, 0.6), 0 0 60px rgba(255, 181, 71, 0.4)',
      },
    },
  },
  plugins: [],
}
