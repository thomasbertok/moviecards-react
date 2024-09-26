module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "2rem",
        xl: "2rem",
        "2xl": "4rem",
      },
      center: true,
    },
    sceens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      "2xl": "1920px",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      mono: ["Menlo", "Consolas"],
      display: ["Oswald"],
    },
    extend: {
      boxShadow: {
        large: "0 35px 60px -20px rgba(0,0,0,.75)",
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
        primary: {
          50: "#F0C7CA",
          100: "#EBB7BA",
          200: "#E3979C",
          300: "#DA777D",
          400: "#D1565E",
          DEFAULT: "#CA3B44",
          600: "#B03039",
          700: "#90272E",
          800: "#742025",
          900: "#58181C",
          950: "#4C1518",
        },

        // black
        dark: {
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
          950: "#020303",
        },

        // green
        secondary: {
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
          950: "#00382B",
        },

        // lightgrey
        light: {
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
          950: "#644B3A",
        },

        blue: {
          50: "#EFF3F6",
          100: "#DBE4EB",
          200: "#B7CAD7",
          300: "#92AFC3",
          400: "#6E94AF",
          DEFAULT: "#517894",
          600: "#3E5C71",
          700: "#2D4352",
          800: "#1F2D38",
          900: "#0E151A",
          950: "#05080A",
        },
        sand: {
          50: "#FBFAF9",
          100: "#F4F3F0",
          200: "#ECE9E4",
          300: "#E1DDD5",
          400: "#D9D3CA",
          DEFAULT: "#CEC7BB",
          600: "#C5BCAE",
          700: "#9F9179",
          800: "#6B5F4D",
          900: "#353026",
          950: "#1B1813",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("flowbite/plugin")],
};
