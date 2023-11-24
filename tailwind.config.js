/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        "danger": "#ed252f",
        "danger-light": "#ff9595",
        "danger-dark": "#920000",
        "primary": "#0365FF",
        "primary-light": "#8F95FF",
        "primary-dark": "#000888",
        "safe": "#24e138",
        "safe-light": "#bbffcc",
        "safe-dark": "#004800",
        "info": "#e6ea0c",
        "info-light": "#feffbf",
        "info-dark": "#656200",
        "focus": "#06b6d4",
        "focus-light": "#3edbf7",
        "focus-dark": "#037d93",
      },
    },
  },
  plugins: [],
}
