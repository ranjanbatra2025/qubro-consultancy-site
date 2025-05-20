/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        midnight: 'rgb(var(--midnight) / <alpha-value>)',
        'dark-blue': 'rgb(var(--dark-blue) / <alpha-value>)',
        'teal-custom': 'rgb(var(--teal-custom) / <alpha-value>)', // #59c173
        'purple-light': 'rgb(var(--purple-light) / <alpha-value>)', // #a17fe0
        'purple-deep': 'rgb(var(--purple-deep) / <alpha-value>)', // #5d26c1
        'violet-400': 'rgb(var(--violet-400) / <alpha-value>)',
        'cyan-300': 'rgb(var(--cyan-300) / <alpha-value>)',
        white: 'rgb(var(--white) / <alpha-value>)',
        card: 'rgb(var(--card) / <alpha-value>)',
        background: 'rgb(var(--background) / <alpha-value>)',
        foreground: 'rgb(var(--foreground) / <alpha-value>)',
        'blue-violet': '#8A2BE2', // Added for second sentence color
      },
    },
  },
  plugins: [],
};