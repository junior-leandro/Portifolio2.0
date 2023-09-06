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
        'primary-blue': '#041833',
        'primary-red': '#FF0000',
      }
    },
  },
  plugins: [],
}
export default config
