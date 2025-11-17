// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  future: {
    compatibilityVersion: 4,
  },

  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/seo',
    '@nuxt/image'
  ],

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'en'
      }
    }
  },

  site: {
    url: 'https://elaitch.dev',
    name: 'Elaitch - Professional Web Development by Phil Lane',
    description: 'Elaitch delivers expert web development services with years of experience. Specializing in modern web applications, Vue.js, Nuxt, and full-stack solutions.',
    defaultLocale: 'en'
  },

  ogImage: {
    enabled: false
  },

  sitemap: {
    enabled: true
  },

  robots: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  typescript: {
    strict: true,
    typeCheck: false
  }
})
