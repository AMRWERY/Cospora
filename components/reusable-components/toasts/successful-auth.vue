<template>
  <div>
    <transition name="toast-slide" @before-leave="beforeLeave" @after-leave="afterLeave">
      <div v-if="visible"
        class="fixed flex items-center w-full max-w-md p-4 space-x-4 text-white bg-blue-500 rounded-lg shadow-lg bottom-5 left-5">
        <div class="bg-blue-500 rounded-full">
          <icon :name="icon" class="w-10 h-10 text-white" />
        </div>

        <div class="flex-1 space-y-2">
          <p class="text-sm font-semibold">{{ title }}</p>
          <p class="text-xs">{{ message }}</p>
        </div>

        <button @click="hideToast" class="absolute mt-2 mr-2 text-white top-1 right-1 hover:text-gray-200">
          <icon name="material-symbols:close-small" class="text-lg" />
        </button>
      </div>
    </transition>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'Success',
  },
  message: {
    type: String,
    default: 'Operation completed successfully.',
  },
  duration: {
    type: Number,
    default: 6000,
  },
  icon: {
    type: String,
    default: 'material-symbols:check-circle',
  },
});

const emit = defineEmits(['close']);
const visible = ref(true);

const hideToast = () => {
  visible.value = false;
  emit('close');
};

setTimeout(() => {
  hideToast();
}, props.duration);

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