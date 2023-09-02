// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // build
  devtools: { enabled: true },

  modules: [["@pinia/nuxt", { autoImports: ["defineStore", "storeToRefs"] }]],

  imports: {
    dirs: ["stores"],
  },

  // css
  css: ["~/scss/_index.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@use "@/scss/variables/_variables.scss" as *; @use "@/scss/mixin/_mixin.scss" as *;',
        },
      },
    },
  },
});
