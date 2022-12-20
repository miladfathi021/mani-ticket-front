/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        theme: {
          1: "#27296d",
          2: "#5e63b6",
          3: "#a393eb",
          4: "#f5c7f7",
          5: "#A2A4A8",
          6: "#222438",
        },
      },
    },
  },
  plugins: [],
};
