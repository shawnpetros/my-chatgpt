import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Enable dark mode with class strategy
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1abc9c", // Primary color
          light: "#16a085", // Darker shade for light mode
          dark: "#48c9b0", // Lighter shade for dark mode
        },
        secondary: {
          DEFAULT: "#7f8c8d", // Secondary color
          light: "#2c3e50", // Darker shade for light mode
          dark: "#95a5a6", // Lighter shade for dark mode
        },
        background: {
          dark: "#1f2937", // Background for dark mode
          light: "#f8fafc", // Background for light mode
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["dark"],
      textColor: ["dark"],
    },
  },
  plugins: [],
};
export default config;
