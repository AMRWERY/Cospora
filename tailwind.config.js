/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./node_modules/tw-elements/js/**/*.js",
  ],
  corePlugins: {
    aspectRatio: false,
  },
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [
    require("tw-elements/plugin.cjs"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
    require("tailwindcss-rtl"),
    require("@tailwindcss/line-clamp"),
  ],
};
