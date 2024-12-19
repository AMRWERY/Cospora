<template>
  <div>
    <filter-products />
  </div>
</template>

<script setup>
const { t } = useI18n()

useHead({
  titleTemplate: () => t("head.products"),
});
</script>