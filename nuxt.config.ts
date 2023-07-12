import { RuntimeConfig } from 'nuxt/schema';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig:{
    public:{
      API: "https://amazon-commerce.pockethost.io/api/collections/",
      FILES: "https://amazon-commerce.pockethost.io/api/files/"
    }
  },
  app: {
    head: {
      link: [
        { rel: "icon", type: "image/png", href: "/logo.png" }
      ]
    }
  },
  routeRules: {
    '/**': { isr: 600 }
  },
  devtools: { enabled: true, },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  tailwindcss: {
    configPath: '~/tailwind.config.js'
  },
  meta: {
    title: "Maxazon"
  }
})
