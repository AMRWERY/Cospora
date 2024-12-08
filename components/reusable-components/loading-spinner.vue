<template>
  <div>
    <div v-if="store.isLoading" class="flex items-center justify-center text-red-700">
      <icon name="svg-spinners:6-dots-rotate" size="80px" />
    </div>
    <slot v-else></slot>
  </div>
</template>

<script setup>
import {useLoaderStore} from '@/stores/loadingStore'
const emit = defineEmits(["loaded"]);

const store = useLoaderStore()

const simulateLoading = () => {
  setTimeout(() => {
    store.hideLoader();
    emit("loaded");
  }, 10000);
};

onMounted(simulateLoading);
</script>