/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2E0C59",
        secondary: "#5C0CB8",
        tertiary: "#A193CC",
        ligth: "#F4F4F5",
        borders: "#C5CDD4",
        gray: "#6C757D",
      },
    },
  },
  plugins: [],
};

