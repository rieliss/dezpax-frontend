export default {
  head: {
    title: "product-frontend",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  css: ["bootstrap/dist/css/bootstrap.css"],
  plugins: [{ src: "~/plugins/bootstrap.js", mode: "client" }],
  components: true,
  buildModules: ["@nuxt/typescript-build"],
  modules: ["bootstrap-vue/nuxt", "@nuxtjs/axios"],
  axios: {
    baseURL: "http://localhost:3000",
  },
  build: {
    transpile: ["bootstrap"],
  },
};
