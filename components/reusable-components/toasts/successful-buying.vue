<template>
  <div>
    <transition name="toast-fade" @before-leave="beforeLeave" @after-leave="afterLeave">
      <div v-if="isToastVisible"
        class="fixed flex items-center w-full max-w-md p-4 space-s-4 bg-white rounded-lg shadow-lg bottom-5 start-5">
        <img src="https://justfields.com/storage/projects/7M5rV059/product-01.jpg"
          class="object-cover w-20 h-20 rounded-full">
        <div class="flex-1 space-y-2">
          <p class="text-sm font-normal text-gray-800">Someone recently bought a</p>
          <p class="font-semibold text-gray-800 underline underline-offset-2">Chanel</p>
          <p class="text-sm leading-relaxed text-gray-600">in Cairo, Egypt</p>
          <p class="text-sm text-gray-600">about 50 minutes ago</p>
        </div>

        <button @click="closeToast" class="absolute mt-2 mr-2 text-gray-500 top-1 end-1 hover:text-gray-700">
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
.toast-fade-enter-active,
.toast-fade-leave-active {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
}

.toast-fade-enter,
.toast-fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>