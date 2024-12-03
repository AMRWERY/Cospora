<template>
  <div>
    <p class="text-gray-800 dark:text-gray-100">dashboard home page</p>
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