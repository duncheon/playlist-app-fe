/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        danger: '#f44336',
        success: '#04AA6D',
        baseblack: '#0f0f0f',
        hoverblack: '#2b2b2b',
        gray: {
          first: '#282828',
          second: '#aaa',
        },
        white: {
          heavy: '#f1f1f1',
        },
        active: {
          playlist: 'rgba(12,34,38,0.949)',
        },
      },
    },
  },
  plugins: [],
};
