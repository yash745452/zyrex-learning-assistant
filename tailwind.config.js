/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#FFFFFF',
        'rich-black': '#111111',
        'near-black': '#171613',
        cream: {
          DEFAULT: '#F7F3EB',
          pale: '#F0E9DD',
        },
        beige: {
          DEFAULT: '#E9DFD0',
          border: '#D8CEBE',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      borderRadius: {
        'card': '2rem',
        'btn': '1rem',
      },
    },
  },
  plugins: [],
}
