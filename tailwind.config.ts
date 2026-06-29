/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', '[class~="dark"]'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        eductome: {
          magenta: '#D81B60',
          marine: '#1A3557',
          sky: '#1976D2',
          green: '#1B5E20',
          orange: '#E65100',
          red: '#B71C1C',
          violet: '#6A1B9A',
          cream: '#FFF8F0',
          dark: '#0a1628',
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        caveat: ['Caveat', 'cursive'],
        reader: ['Newsreader', 'Georgia', 'Cambria', 'serif'],
      }
    },
  },
  plugins: [],
}
