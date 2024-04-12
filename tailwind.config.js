/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'textBg': "url('/public/text.jpg')",
        
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
    
  ]
}