module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    sceens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      serif: ['Merryweather', 'serif']
    },
    extend: {
      colors: {
        // https://colorhunt.co/palette/4e6e81f9dbbbff03032e3840

        // red
        "primary": {
          50: "#FFE5E5",
          100: "#FFCCCC",
          200: "#FF9999",
          300: "#FF6666",
          400: "#FF3333",
          DEFAULT: "#FF0303",
          600: "#CC0000",
          700: "#990000",
          800: "#660000",
          900: "#330000"
        },

        // black
        "dark": {
          50: "#E7EBEE",
          100: "#D0D7DD",
          200: "#A3B1BD",
          300: "#73899B",
          400: "#4F606E",
          DEFAULT: "#2E3840",
          600: "#242C32",
          700: "#1C2227",
          800: "#13171B",
          900: "#090A0C"
        },

        // blue
        "secondary": {
          50: "#ECF1F3",
          100: "#D9E2E8",
          200: "#B3C6D1",
          300: "#8DA9BA",
          400: "#668DA3",
          DEFAULT: "#4E6E81",
          600: "#3E5766",
          700: "#2E414C",
          800: "#1F2B33",
          900: "#0F1619"
        },

        // beige
        "light": {
          50: "#FFFDFA",
          100: "#FEF8F1",
          200: "#FDF0E3",
          300: "#FBE9D5",
          400: "#FAE1C7",
          DEFAULT: "#F9DBBB",
          600: "#F2B069",
          700: "#EB8619",
          800: "#9F590E",
          900: "#502D07"
        }




        // pink
        // primary: {
        //   light: '#E4245F',
        //   DEFAULT: '#E4245F',
        //   dark: '#CF193B'
        // },

        // beige: {
        //   DEFAULT: '#ECEBE6'
        // },

        // // black
        // grey: {
        //   light: '#474747',
        //   lighter: '#2e2e2e',
        //   DEFAULT: '#2b2b2b',
        //   darker: '#262626',
        //   dark: '#222',
        //   darkest: '#1b1b1b'
        // }
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
