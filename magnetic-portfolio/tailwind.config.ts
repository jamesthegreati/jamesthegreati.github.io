import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'midnight-blue': '#0A192F',
        'coral-accent': '#FF6B6B',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-poppins)'],
        mono: ['var(--font-fira-code)'],
      },
    },
  },
  plugins: [],
}
export default config
