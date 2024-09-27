import { colorPalette } from "./src/styles/color-palette";

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
        ...colorPalette.colors,
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("flowbite/plugin")],
};
