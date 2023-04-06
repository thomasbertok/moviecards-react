module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '2rem',
        xl: '2rem',
        '2xl': '4rem'
      },
      center: true
    },
    sceens: {
      'sm': '480px',
      'md': '768px',
      'lg': '976px',
      'xl': '1440px',
      '2xl': '1920px'
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      mono: ['Menlo', 'Consolas'],
      display: ['Oswald']
    },
    extend: {
      boxShadow: {
        'large': '0 35px 60px -20px rgba(0,0,0,.75)'
      },


      colors: {
        // https://colorhunt.co/palette/4e6e81f9dbbbff03032e3840
        // palett with: https://www.tints.dev/


        // --color-background-main: #222426;
        // --color-background-secondary: #1D1F20;
        // --color-background-contrast: #3B3D40;
        // --color-background-overlay: rgba(9,10,13,0.9);
        // --color-content-lead: #FFF;
        // --color-content-main: #E1E3E6;
        // --color-content-secondary: #909499;


        // red
        "primary": {
          50: "#FFF4F0",
          100: "#FFECE5",
          200: "#FFD5C7",
          300: "#FFBAA3",
          400: "#FF9875",
          DEFAULT: "#FF6633",
          600: "#FF4000",
          700: "#E03800",
          800: "#B82E00",
          900: "#852100",
          950: "#5C1700"
        },

        // black
        "dark": {
          50: "#E7E8E9",
          100: "#D1D4D6",
          200: "#A3A8AD",
          300: "#747A81",
          400: "#4B4F53",
          DEFAULT: "#222426",
          600: "#1A1C1E",
          700: "#131416",
          800: "#0E0F10",
          900: "#070808",
          950: "#020303"
        },

        // green
        "secondary": {
          50: "#DBFFF7",
          100: "#B3FFED",
          200: "#00FFC3",
          300: "#00E6B0",
          400: "#00D1A0",
          DEFAULT: "#00B389",
          600: "#00A37D",
          700: "#008F6D",
          800: "#00755A",
          900: "#005742",
          950: "#00382B"
        },

        // lightgrey
        "light": {
          50: "#FDFCFC",
          100: "#FBFAF9",
          200: "#F7F4F3",
          300: "#F2EFED",
          400: "#EDEAE8",
          DEFAULT: "#E6E3E1",
          600: "#D5CDC8",
          700: "#C1B3A9",
          800: "#AA9282",
          900: "#846652",
          950: "#644B3A"
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
