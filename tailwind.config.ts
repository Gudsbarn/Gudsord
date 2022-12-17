const defaultTheme = require('tailwindcss/defaultTheme')
const primary =  {
  light: '#C140B7',
  DEFAULT: '#A3229C',
  dark: '#82007E',
  100: '#FFD7F4', 200: '#FFABF0', 300: '#FF77F0', 400: '#DF5CD3', 500: '#C140B7', 600: '#A3229C', 700: '#82007E', 800: '#5C0059', 900: '#390036',
}

module.exports = {
  content: [
    `assets/**/*.{js,css}`,
    `app/*.ts`,
    `app.vue`,
    `components/**/*.{vue,js}`,
    `composables/**/*.{js,ts}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `plugins/**/*.{js,ts}`,
    `nuxt.config.{js,ts}`,
    `error.{js,ts,vue}`,
    `content/**.md`,
    `content/**/**.md`
  ],
  darkMode: 'class', // or 'class'
  theme: { 
    ...defaultTheme,
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        primary,
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
    },
  },
  presets: [],
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui")
  ],
  daisyui: {
    themes: [
      "cupcake",
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: primary.DEFAULT,
          "primary-focus": primary[600],
        }
      },
      {
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          primary: primary.DEFAULT,
          "primary-focus": primary[600],
        }
      },
    ],
  },
}
