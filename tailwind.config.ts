import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    backgroundImage: {
      'img_bg_hero': "url('../assets/logo-black.png')",
      'img_bg_contact': "url(..assets/contact-shape.png"
 
    },

    extend: {
      
      boxShadow: {
        'xl': '5px 0px 150px -80px rgba(107, 0, 254, 1)',
      },
      colors: {
        'primary-blue': '#0d0d23',
        'secundary-blue': '#090918',
        'border-blue': '#14142d',
        'primary-gray': '#b1b3c3'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',

      },
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      heading: ['Poppins','sans-serif']
    }
  },
  plugins: [],
}
export default config
