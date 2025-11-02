module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Web Design World - Modern Retro
        'web': {
          'cream': '#F5F1DE',
          'mustard': '#D4A574',
          'navy': '#1A3A52',
          'coral': '#E8897B',
          'sage': '#7A9D7F',
        },
        // Cloud Engineering - Tech Noir
        'cloud': {
          'charcoal': '#2C3E50',
          'silver': '#BDC3C7',
          'electric': '#3498DB',
          'copper': '#B87333',
          'steel': '#708090',
        },
        // AI Expert - Retrofuture
        'ai': {
          // Legacy retrofuture accents (kept for backward compatibility)
          'purple': '#3D1A5C',
          'cyan': '#00D9FF',
          'cream': '#F0E6D2',
          'gold': '#FFD700',
          'magenta': '#FF006E',
          // Vintage Lab palette
          'parchment': '#F2EDDE',
          'charcoal': '#2E2A24',
          'brass': '#8B6F47',
          'copper': '#B87333',
          'navy': '#1A3A52',
          'ink': '#1C1C1C',
        },
      },
      fontFamily: {
        'display': ['Bebas Neue', 'Atomic Age', 'sans-serif'],
        'retro': ['Bigelow Rules', 'cursive'],
        'body': ['Source Sans Pro', 'Lato', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'scan': 'scan 8s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%, 100%': { textShadow: '0 0 10px rgba(0, 217, 255, 0.5)' },
          '50%': { textShadow: '0 0 20px rgba(0, 217, 255, 0.8)' },
        },
        scan: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 100%' },
        },
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(10px)',
      },
    },
  },
  plugins: [],
}
