<template>
  <div>
    <carousel-component />
    <new-products-tabs />
    <featured-products />
    <editor-picks />
    <trending-now />
    <recent-posts />
    <on-instagram />

    <!-- welcome-user alert -->
    <welcome-user v-if="store.showWelcomeMessage" :first-name="store.firstName" :last-name="store.lastName"
      @close="setWelcomeMessageVisibility = false" />
  </div>
</template>

<script setup>
const store = useAuthStore()

watch(
  () => store.showWelcomeMessage,
  (newValue) => {
    store.showWelcomeMessage = true
    // console.log('Show welcome message changed:', newValue);
  }
);
</script>