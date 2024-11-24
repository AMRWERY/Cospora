<template>
  <div>
    <div v-if="showCookiesToast"
      class="fixed flex flex-col p-7 space-y-4 text-white rounded-lg shadow-lg bottom-2 right-2 w-96 bg-black/70 h-[200px]">
      <div>
        <p class="text-sm">
          The cookie settings on this website are set to 'allow all cookies' to give you the very best experience.
          Please click Accept Cookies to continue to use the site.
        </p>
      </div>

      <div class="flex items-center justify-start space-s-4">
        <button @click="acceptCookies"
          class="px-8 py-4 text-sm font-semibold text-black bg-white rounded hover:bg-gray-200">
          Accept Cookies
        </button>
        <nuxt-link to="" class="text-sm font-semibold underline underline-offset-2">Privacy Policy</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
const showCookiesToast = ref(false);

const acceptCookies = () => {
  // document.cookie = "cookies_accepted=true; path=/; max-age=31536000";
  showCookiesToast.value = false;
};

onMounted(() => {
  const cookiesToastShown = JSON.parse(localStorage.getItem("cookiesToastShown")) === true;
  if (!cookiesToastShown) {
    showCookiesToast.value = true;
    localStorage.setItem("cookiesToastShown", true);
  }
});
</script>