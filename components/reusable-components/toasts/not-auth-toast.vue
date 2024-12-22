<template>
    <div>
        <div v-if="visible" class="relative w-full max-w-lg p-5 bg-red-100 rounded-lg shadow sm:max-w-lg">
            <button @click="closeToast" class="absolute mt-2 text-gray-500 top-2 end-2 hover:text-gray-700">
                <icon name="material-symbols:close" class="w-5 h-5" />
            </button>

            <div class="flex">
                <div>
                    <icon name="material-symbols:warning-outline-rounded"
                        class="w-6 h-6 text-yellow-500 fill-current" />
                </div>
                <div class="ms-3">
                    <h2 class="font-semibold text-gray-800">Oh Not A User</h2>
                    <p class="mt-2 text-sm leading-relaxed text-gray-600">
                        {{ message }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    message: {
        type: String,
        required: true,
    },
    toastType: {
        type: String,
        default: 'green-500',
    },
    duration: {
        type: Number,
        default: 5000,
    },
});

const visible = ref(true);
const emit = defineEmits(['toastClosed']);

const closeToast = () => {
    visible.value = false;
};

setTimeout(() => {
    closeToast();
}, props.duration);

watchEffect(() => {
    if (!visible.value) {
        setTimeout(() => {
            emit('toastClosed');
        }, 500);
    }
});
</script>