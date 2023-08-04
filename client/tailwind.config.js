/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'orange-500': '#E85253',
        'orange-600': '#D1393F',
      },
      maxWidth: {
        152: '38rem',
        208: '52rem',
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        'satoshi-md': ['Satoshi-Medium', 'sans-serif'],
        'satoshi-bold': ['Satoshi-Bold', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
