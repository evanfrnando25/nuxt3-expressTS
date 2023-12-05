// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    devProxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        prependPath: true,
      },
    },
  },
  modules: ["nuxt-quasar-ui", "nuxt-icon", "vue3-carousel-nuxt", "@pinia/nuxt"],
  css: ["~/assets/style/index.scss"],
  carousel: {
    prefix: "MyPrefix",
  },
});
