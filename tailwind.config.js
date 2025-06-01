/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      background: "#000",
      backgroundContrast: "#111",
      textBlack: "#1d1d1f",
      white: "#fff",
      textGray: "#A1A1A6",
    },
    fontFamily: {
      sans: [
        "SF Pro Display",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
    },
    fontSize: {
      // 12
      xs: "0.75rem",
      // 14
      sm: "0.875rem",
      // 17
      base: "1.0265rem",
      // 19
      lg: ["1.1875rem", "1.21"],
      // 21
      xl: "1.3125rem",
      // 24
      "2xl": "1.5rem",
      // 28
      "3xl": "1.75rem",
      // 40
      "4xl": ["2.5rem", "1.1"],
      // 50
      "4x": "3rem",
      // 70
      "5xl": ["4.5rem", "1.05"],
    },
    keyframes: {
      "carousel-move": {
        "0%": { transform: "translateX(0)" },
        "100%": {
          transform: "translateX(calc(-100% - var(--carousel-offset, 0px)))",
        },
      },
      "carousel-move-slow": {
        "0%": { transform: "translateX(0)" },
        "100%": {
          transform: "translateX(calc(-100% - var(--carousel-offset, 0px)))",
        },
      },
    },
    animation: {
      "carousel-move": "carousel-move var(--duration,80s) linear infinite",
      "carousel-move-slow":
        "carousel-move-slow calc(var(--duration,80s) * 2) linear infinite",
    },
    extend: {
      animation: {
        play: "running",
        pause: "paused",
      },
    },
  },
  plugins: [],
};
