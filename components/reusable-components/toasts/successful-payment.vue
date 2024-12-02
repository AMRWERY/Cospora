<template>
  <div>
    <transition name="toast-slide" @before-leave="beforeLeave" @after-leave="afterLeave">
      <div v-if="isToastVisible"
        class="fixed flex items-center w-full max-w-md p-4 space-s-4 text-white bg-green-500 rounded-lg shadow-lg bottom-5 start-5">
        <div class="bg-green-500 rounded-full">
          <icon name="mdi:check-circle" class="w-10 h-10 text-white" />
        </div>
        <div class="flex-1 space-y-2">
          <p class="text-sm font-semibold">Payment Successful</p>
          <p class="text-xs">Your payment was processed successfully. Thank you for your purchase!</p>
        </div>

        <button @click="closeToast" class="absolute mt-2 mr-2 text-white top-1 end-1 hover:text-gray-200">
          <icon name="material-symbols:close" class="text-lg" />
        </button>
      </div>
    </transition>
  </div>
</template>

<script setup>
const isToastVisible = ref(true)

const closeToast = () => {
  isToastVisible.value = false
};

setTimeout(() => {
  isToastVisible.value = false
}, 5000)

const beforeLeave = (el) => {
  el.style.transition = "transform 0.5s ease-in-out, opacity 0.5s ease-in-out";
  el.style.transform = "translateX(100%)";
  el.style.opacity = "0";
};

const afterLeave = (el) => {
  el.style.transition = "";
  el.style.transform = "";
  el.style.opacity = "";
};
</script>

<style scoped>
.toast-slide-enter-active,
.toast-slide-leave-active {
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
}

.toast-slide-enter,
.toast-slide-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>