/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "my-primary": "rgba(255, 100, 0, 0.95)",
        "my-primary-dark": "rgb(114, 32, 6)"
      }
    },
  },
  plugins: [],
}

