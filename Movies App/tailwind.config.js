/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "760px",
      // => @media (min-width: 640px) { ... }

      md: "808px",
      // => @media (min-width: 768px) { ... }

      lg: "900px",
      // => @media (min-width: 1024px) { ... }
    },
  },
  plugins: [],
};
