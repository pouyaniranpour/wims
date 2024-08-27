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
        'ibm-plex-mono': ['"IBM Plex Mono"', 'regular'],
        'pangolin': ['Pangolin', 'regular']
      },
      boxShadow: {
        'custom-dark': '0 4px 8px rgba(0, 0, 0, 0.5)', // Darker shadow
        'custom-darker': '0 2px 2px rgba(0, 0, 0, 0.8)', // Even darker shadow
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
