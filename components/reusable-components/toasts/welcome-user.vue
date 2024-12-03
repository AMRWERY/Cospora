<template>
  <div>
    <div v-if="visible"
      class="fixed flex items-center p-4 text-white transition-opacity duration-500 ease-in-out transform bg-green-500 rounded-lg shadow-lg opacity-100 space-s-3 bottom-4 start-4">
      <icon name="mdi:check-circle" class="w-6 h-6" />
      <span class="text-lg">Welcome {{ firstName }} {{ lastName }} to our website!</span>
      <button @click="hideToast" class="mt-1.5 text-white ms-3">
        <icon name="mdi:close" class="w-6 h-6" />
      </button>
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n()

const props = defineProps({
  // title: {
  //   type: String,
  //   default: 'Success',
  // },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    default: 'Welcome to our website!',
  },
  duration: {
    type: Number,
    default: 6000,
  },
  // icon: {
  //   type: String,
  //   default: 'mdi:check-circle',
  // },
});

const visible = ref(false);

const showToast = () => {
  visible.value = true;
  setTimeout(() => {
    visible.value = false;
  }, 6000);
};

const hideToast = () => {
  visible.value = false;
  emit('close');
};

onMounted(() => {
  showToast();
});

onBeforeUnmount(() => {
  visible.value = false;
});
</script>