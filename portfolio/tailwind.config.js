/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],

      },
      backgroundColor: {
        'chillblack': '#252525'
      },
      screens: {
        'phone': '640px',
        // => @media (min-width: 640px) { ... }

        'tablet': '768px',
        // => @media (min-width: 768px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
    plugins: [require('tailwind-scrollbar'),],
  }
}