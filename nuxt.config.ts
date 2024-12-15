// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@formkit/nuxt",
    "@nuxt/icon",
    "nuxt-headlessui",
    "vue3-carousel-nuxt",
    "@stefanobartoletti/nuxt-social-share",
    "@nuxtjs/i18n",
    "@vueuse/nuxt",
  ],
  hooks: {
    "pages:extend"(pages) {
      // add a route
      const routesToSameComponent = ["accessories", "makeup"];
      for (const route of routesToSameComponent) {
        pages.push({
          name: route,
          path: `/${route}/:id`,
          file: "~/pages/collections/[...slug].vue",
        });
        pages.push({
          name: `${route}-detail`,
          path: `/${route}/details/:id`,
          file: "~/pages/collections/[id].vue",
        });
      }
    },
  },
  routeRules: {
    "/accessories/(?!details).+": {
      redirect: "/collections/**",
    },
    "/makeup/**": {
      redirect: "/collections/",
    },
  },
  tailwindcss: {
    cssPath: ["~/assets/css/tailwind.css", { injectPosition: "first" }],
    configPath: "tailwind.config",
    viewer: true,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  pinia: {
    storesDirs: ["./stores/**", "./custom-folder/stores/**"],
  },
  formkit: {
    autoImport: true,
    configFile: "./formkit.config.js",
  },
  headlessui: {
    prefix: "Headless",
  },
  carousel: {
    prefix: "MyPrefix",
  },
  i18n: {
    vueI18n: "./i18n.config.js",
  },
  css: ["~/assets/css/main.css"],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  app: {
    head: {
      title: "Cospora",
      script: [
        {
          // src: "https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/datepicker.min.js",
        },
      ],
      noscript: [],
      link: [
        {
          //   rel: "stylesheet",
          //   href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css",
        },
      ],
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          charset: "utf-8",
        },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },
});
