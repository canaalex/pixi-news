/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        background: "url('../src/assets/images/background.svg')",
      },
      fontSize: {
        144: "144px",
      },
    },
  },
  plugins: [],
};
