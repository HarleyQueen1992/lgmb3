// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  devtools: { enabled: true },
  modules: ['@element-plus/nuxt', 'nuxt-icon'],
  elementPlus: {
    /** Options */
  },
  spaLoadingTemplate: './app-loading.html',
  ssr: false,
  nitro: {
    preset: 'service-worker',
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/style/variables.scss" as *;',
        },
      },
    },
  },
  css: ['~/assets/style/main.scss'],
});
