const { Profiler } = require('react')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite/**/*.js"

  ],
  theme: {
    extend: {
      // Add your theme configuration here
      typography: (theme) => ({}),
      colors: {
        /* Primary */
        'cyan': 'hsl(167 36% 54%)',
        'dark-blue': 'hsl(205 41% 21%)',
        'grayish-dark-blue': 'hsl(245 10% 22%)',

        /* Secondary */
        'light-grey': 'hsl(240, 2%, 92%)',
        'bright-red': 'hsl(0 90% 57%)',
      },
      fontFamily: {
        serif: ["Ibarra Real Nova", 'serif'],
        sans: ["Public Sans", 'sans-serif']
      },
      backgroundImage: {
        'light-about-image': "url('/light-image-profile.webp')",
        'dark-about-image': "url('/dark-image-profile.webp')",
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ['dark'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
};