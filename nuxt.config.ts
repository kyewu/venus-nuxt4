// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@unocss/nuxt',
    '@nuxt/icon',
    '@nuxt/eslint',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@vueuse/nuxt'
  ],
  css: ['@unocss/reset/normalize.css'],
  app: {
    head: {
      title: 'Venus Nuxt4 Sample',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Venus Nuxt4 Sample' }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  },
  ssr: true,
  devServer: {
    port: 3000
  },
  nitro: {
    // devProxy: {
    //   '/api': {
    //     target: 'https://jsonplaceholder.typicode.com',
    //     changeOrigin: true,
    //     prependPath: true,
    //     rewrite: (path) => path.replace(/^\/api/, '')
    //   }
    // }
  }
})
