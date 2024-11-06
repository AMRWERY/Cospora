import { FormKitSchema } from "@formkit/vue";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("FormKitSchema", FormKitSchema);
});
