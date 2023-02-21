// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/tailwind.css"],
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "Io's Portfolio",
      meta: [
        { name: "description", content: "Io's Portfolio" },
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [{ rel: "icon", href: "/icon.png" }],
      bodyAttrs: {
        class: "body-class",
      },
    },
  },
});
