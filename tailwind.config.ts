import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    backgroundImage: {
      'img_bg_hero': "url('../assets/logo-black.png')"
    },

    extend: {
      colors: {
        'primary-blue': '#0d0d23',
        'border-blue': '#14142d',
        'primary-gray': '#b1b3c3',
      }
    },
  },
  plugins: [],
}
export default config
