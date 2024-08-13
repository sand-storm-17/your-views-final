const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        text: {
          50: '#0d0a10',
          100: '#19141f',
          200: '#33283e',
          300: '#4c3c5d',
          400: '#66507c',
          500: '#7f639c',
          600: '#9983af',
          700: '#b3a2c3',
          800: '#ccc1d7',
          900: '#e6e0eb',
          950: '#f2eff5',
        },
        background: {
          50: '#0d0910',
          100: '#191221',
          200: '#332442',
          300: '#4c3663',
          400: '#664884',
          500: '#7f5ba4',
          600: '#997bb7',
          700: '#b29cc9',
          800: '#ccbddb',
          900: '#e6deed',
          950: '#f2eff6',
        },
        primary: {
          50: '#0e0911',
          100: '#1b1221',
          200: '#372442',
          300: '#523663',
          400: '#6d4785',
          500: '#8859a6',
          600: '#a07ab8',
          700: '#b89cc9',
          800: '#d0bddb',
          900: '#e7deed',
          950: '#f3eef6',
        },
        secondary: {
          50: '#0e0911',
          100: '#1b1122',
          200: '#372244',
          300: '#523366',
          400: '#6e4488',
          500: '#8955aa',
          600: '#a177bb',
          700: '#b899cc',
          800: '#d0bbdd',
          900: '#e7ddee',
          950: '#f3eef6',
        },
        accent: {
          50: '#0e0811',
          100: '#1c1023',
          200: '#372145',
          300: '#533168',
          400: '#6f418b',
          500: '#8a52ad',
          600: '#a274be',
          700: '#b997ce',
          800: '#d0bade',
          900: '#e8dcef',
          950: '#f3eef7',
        },
      },

      fontSize: {
        sm: '0.750rem',
        base: '1rem',
        xl: '1.333rem',
        '2xl': '1.777rem',
        '3xl': '2.369rem',
        '4xl': '3.158rem',
        '5xl': '4.210rem',
      },
      fontFamily: {
        heading: ['var(--font-yusei)'],
        body: ['var(--font-yusei)'],
      },
      fontWeight: {
        normal: '400',
        bold: '700',
      },
    },
  },
  plugins: [require('daisyui')],
};
