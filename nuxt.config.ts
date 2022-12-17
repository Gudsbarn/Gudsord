import { defineNuxtConfig } from 'nuxt/config'
import { fileURLToPath } from 'url'
import { resolve } from 'path'
import svgLoader from 'vite-svg-loader'
import pkg from './package.json'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  content: {
    documentDriven: true,
  },
  alias: {
    '@svg': fileURLToPath(new URL('./assets/svg', import.meta.url)),
  },
  modules: [
    '@nuxt/content', 
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss', 
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-icon'
  ],
  build: {
    transpile: [
      '@tailwindcss/typography', 
      '@headlessui/vue', 
      '@heroicons/vue' ,
    ],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  },
  colorMode: {
    classSuffix: '',
  },
  components: {
       global: true,
      dirs: ['~/components']
  },
  plugins: [],
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/main.css'
  ],
  app: {
    head: {
      htmlAttrs: { lang: "en" },
      title: pkg.name,
      titleTemplate: '%s - v.' + pkg.version,
      bodyAttrs: {
        class: 'antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 min-h-screen'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: pkg.description },
        { name: 'author', content: pkg.author },
        { name: 'format-detection', content: 'telephone=no' },
        { hid: 'keywords', name: 'keywords', content: pkg.keywords },
        { name: 'theme-color' , content: '#AD2DA5'},
        { name: 'apple-mobile-web-app-status-bar-style' , content: '#AD2DA5' },
        { property: 'og:site_name', content: pkg.name },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'img/preview.gif' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:title', content: pkg.name },
        { property: 'og:url', content: process.env.API_WEBSITE_URL },
      ],
    }
  },
  tailwindcss: {
    config: {
      content: [
        'content/**.md',
        'content/**/**.md',
      ]
    }
  },
  vite: {
    plugins: [
      svgLoader(),
    ]
  },
})
