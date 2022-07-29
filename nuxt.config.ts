import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: [
        'primevue/resources/themes/tailwind-light/theme.css',
        'primevue/resources/primevue.css',
        'primeicons/primeicons.css',
        '~/assets/scss/app.scss',
    ],
    build: {
        transpile: ['primevue']
    },
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-graphql-client',
    ],
    buildModules: [
      '@pinia/nuxt',
    ],
    tailwindcss: {
        cssPath: '~/assets/scss/tailwindcss.css',
    }
})
