<template>
  <div>
    <products-dashboard />
  </div>
</template>

<script setup>
const { t } = useI18n();

definePageMeta({
  layout: 'dashboard',
});

useHead({
  titleTemplate: () => t('head.products'),
});
</script>