<template>
  <div class="max-w-2xl p-6 mx-auto bg-white border rounded-lg">
    <p>dashboard home page</p>
  </div>
</template>

<script setup>
const { t } = useI18n()

definePageMeta({
  layout: 'dashboard'
})

useHead({
  titleTemplate: t('head.dashboard'),
})
</script>