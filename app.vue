<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <progress-bar />
      <NuxtPage />
      <scroll-to-top />
    </NuxtLayout>
  </div>
</template>

<script setup>
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