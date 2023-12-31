import type { Config } from 'tailwindcss'
import {nextui} from "@nextui-org/react";
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {},
  darkMode: "class",
  plugins: [nextui({
    prefix: "investing-tips", // prefix for themes variables
    addCommonColors: true, // override common colors (e.g. "blue", "green", "pink").
    layout: {
      disabledOpacity: "0.3",
      radius: {
        small: "4px",
        medium: "6px",
        large: "8px",
      },
      borderWidth: {
        small: "1px",
        medium: "2px",
        large: "3px",
      },
    }, // common layout tokens (applied to all themes)
    themes: {
      light: {
        layout: {}, // light theme layout tokens
        colors: {
          background: "#fff",
          foreground: "#0F0024",
          primary: {
            DEFAULT: "#B550C9",
            foreground: "#000",
          },
        }, // light theme colors
      },
      dark: {
        layout: {}, // dark theme layout tokens
        colors: {
          background: "#0D001A",
          foreground: "#ffffff",
          primary: {
            50: "#3B096C",
            100: "#520F83",
            200: "#7318A2",
            300: "#9823C2",
            400: "#c031e2",
            500: "#DD62ED",
            600: "#F182F6",
            700: "#FCADF9",
            800: "#FDD5F9",
            900: "#FEECFE",
            DEFAULT: "#DD62ED",
            foreground: "#ffffff",
          },

        },
        }, // dark theme colors
      // ... custom themes
    },
  }
  )],
}
export default config
