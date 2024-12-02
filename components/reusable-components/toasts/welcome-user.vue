<template>
  <div>
    <div v-if="isVisible"
      class="fixed flex items-center p-4 space-s-3 text-white transition-opacity duration-500 ease-in-out transform bg-green-500 rounded-lg shadow-lg opacity-100 bottom-4 start-4">
      <icon name="mdi:check-circle" class="w-6 h-6" />
      <span class="text-lg">Welcome to our website!</span>
      <button @click="closeToast" class="mt-1.5 text-white ms-3">
        <icon name="mdi:close" class="w-6 h-6" />
      </button>
    </div>
  </div>
</template>

<script setup>
const isVisible = ref(false);

const showToast = () => {
  isVisible.value = true;
  setTimeout(() => {
    isVisible.value = false;
  }, 6000);
};

const closeToast = () => {
  isVisible.value = false;
};

onMounted(() => {
  showToast();
});

onBeforeUnmount(() => {
  isVisible.value = false;
});
</script>