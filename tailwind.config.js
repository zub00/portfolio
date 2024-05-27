/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-light-start': '#6dd5fa',
        'custom-light-mid': '#8e44ad',
        'custom-light-end': '#ff5f6d',
        'custom-dark-start': '#2c3e50',
        'custom-dark-end': '#4b79a1',
      },
      backgroundImage: theme => ({
        'custom-light-gradient': 'linear-gradient(to bottom right, #6dd5fa, #8e44ad, #ff5f6d)',
        'custom-dark-gradient': 'linear-gradient(to bottom right, #2c3e50, #4b79a1)',
      })
    },
  },
  plugins: [],
}