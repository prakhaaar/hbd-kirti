import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lavender: {
          light: "#f8d1ff",
          DEFAULT: "#d387ff",
          deep: "#6a0dad",
        },
        pinkish: {
          light: "#fff0f6",
          soft: "#fcb0e4",
          hot: "#ff69b4",
        },
      },
      fontFamily: {
        cursive: ['"Dancing Script"', "cursive"],
      },
    },
  },
  plugins: [],
};

export default config;
