/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bebas-neue': ['"Bebas Neue"', 'regular'],
        'viga': ['Viga', 'regular'],
        'ibm-plex-sans': ['"IBM Plex Sans', 'regular']
      },
      fontSize: {
        'large': '80px',
      },
      colors: {
        'dark-orange': '#FF9B32',
        'darker-orange': '#E48226',
      },
      boxShadow: {
        'custom-dark': '0 4px 8px rgba(0, 0, 0, 0.5)', // Darker shadow
        'custom-darker': '0 3px 0 rgba(0, 0, 0, 1)', // Even darker shadow
      },
      backgroundImage: {
        'footsteps': "url('/footsteps.svg')"
      },
    },
    

  },
  plugins: [],
}
