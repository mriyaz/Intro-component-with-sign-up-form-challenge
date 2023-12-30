/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary-red': 'hsl(0, 100%, 74%)',
        'primary-green': 'hsl(154, 59%, 51%)',
        'accent-blue': 'hsl(248, 32%, 49%)',
        'neutral-dark-blue': 'hsl(249, 10%, 26%)',
        'neutral-grayish-blue': 'hsl(246, 25%, 77%)',
        // Add other colors from the design here
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
    screens: {
      'sm': '640px', // Tailwind's default, adjust if needed for your design
      // ... other breakpoints if needed
    },
  },
  plugins: [],
}

