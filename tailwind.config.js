/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx, html, css}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
      }
    },
    colors: {
      'BlackBackground': '#0D0D0D',
      'GrayBackground': '#161616',
      'GoldCardBackground': '#DAA520',
      'DiamondCardBackground': '#B9F2FF',
      'GrayText': '#161616',
      'WhiteText': '#F5F5F5',
    },

    fontFamily: {
      title:["Syncopate", "sans-serif"],
      subtitle:["Outfit", "sans-serif"]
    }
  },
  plugins: [],
}