const defaultTheme = require('tailwindcss/defaultTheme')
const primary =  {
  light: '#C140B7',
  DEFAULT: '#A3229C',
  dark: '#82007E',
  100: '#FFD7F4',
  200: '#FFABF0',
  300: '#FF77F0',
  400: '#DF5CD3',
  500: '#C140B7',
  600: '#A3229C',
  700: '#82007E',
  800: '#5C0059',
  900: '#390036',
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
  presets: [],
  darkMode: 'class', // or 'class'
  variants: {
    backgroundColor: [
      "dark",
      "dark-hover",
      "dark-group-hover",
      "dark-even",
      "dark-odd"
    ],

    borderColor: ["dark", "dark-focus", "dark-focus-within"],
    textColor: ["dark", "dark-hover", "dark-active"],
  },
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
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
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      maxWidth: {
        '7xl': '80rem',
        '8xl': '90rem',
        full: '100%',
        min: 'min-content',
      },
      typography: ({ theme }: {theme: any}) => ({
        light: { css: {},},
        dark: { css: {},}
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-dark-mode')(),
    require("daisyui")
  ],
  daisyui: {
    themes: [
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
      "cupcake",
    ],
  },
}
