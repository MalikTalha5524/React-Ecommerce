/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('/public/assets/images/brand/hero4.png')",
        'button-image': "url('/public/assets/images/brand/button.png')",
        'banner-image': "url('/public/assets/images/banner/b2.jpg')",
      },

    },
  },
  plugins: [],
}


