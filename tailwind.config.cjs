/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        'screen/small': ['100vh', '100svh'],
        'screen/large': ['100vh', '100lvh'],
        'screen/dynamic': ['100vh', '100dvh'],
      },
    },
  },
  plugins: [],
};
