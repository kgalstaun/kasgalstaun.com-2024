// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // build
  devtools: { enabled: true },

  // css
  css: ['~/scss/_index.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/scss/variables/_variables.scss" as *;',
        },
      },
    },
  },
})
