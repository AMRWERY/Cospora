<template>
  <div>
    <div v-if="isLoading">
      <skeleton-loader-main />
    </div>

    <div v-else>
      <NuxtRouteAnnouncer />
      <!-- <NuxtLoadingIndicator /> -->
      <!-- <ClientOnly> -->
        <NuxtLayout>
          <progress-bar />
          <our-mail-list />
          <NuxtPage />
          <scroll-to-top />
        </NuxtLayout>
      <!-- </ClientOnly> -->
    </div>
  </div>
</template>

<script setup>
const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 5000);
});

// Use SSR-safe IDs for Headless UI
provideHeadlessUseId(() => useId())

// tailwind-elements referance
// onMounted(async () => {
//   const { Tooltip, initTWE } = await import("tw-elements");
//   initTWE({ Tooltip });
// });

useHead({
  titleTemplate: 'Cospora',
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}

.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}
</style>