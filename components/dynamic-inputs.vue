<template>
  <div>
    <FormKit type="form" :actions="false">
      <label :for="id" class="block text-sm font-medium text-gray-700">{{ label }}</label>
      <FormKit :id="id" :type="type" :placeholder="placeholder" v-model="internalValue" :validation="validation"
        class="w-full py-2 text-gray-800 transition duration-100 border rounded outline-none ring-indigo-300 focus:ring bg-gray-50" />
    </FormKit>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: ''
  },
  id: {
    type: String,
    default: () => `input-${Math.random().toString(36).substr(2, 9)}`
  },
  validation: {
    type: [Object, String],
    default: () => { }
  },
});

const emit = defineEmits(['update:modelValue']);

const internalValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
});
</script>