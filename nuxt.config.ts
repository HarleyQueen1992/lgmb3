// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  devtools: { enabled: true },
  modules: ['@element-plus/nuxt'],
  elementPlus: {
    /** Options */
  },
  ssr: false,
  nitro: {
    preset: 'service-worker',
  },
  css: [
    // SCSS file in the project
    '~/assets/style/main.scss',
  ],
});
