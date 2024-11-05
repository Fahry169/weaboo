/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "navbar": "#2b2d42",
        "color-1": "#647380"
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
      }
    },
  },
  plugins: [],
};
