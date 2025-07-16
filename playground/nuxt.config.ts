export default defineNuxtConfig({
  modules: [["../../src/module", { inject: true }]],
  devtools: { enabled: true },
  vite: {
    optimizeDeps: {
      include: ["plotly.js-dist-min"],
    },
  },
  compatibilityDate: "2024-07-08",
});
