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
    axios: {
      baseURL: "http://localhost:3000/api",
    },
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: ["@nuxt/typescript-build"],
  modules: ["bootstrap-vue/nuxt"],
  build: {},
};
