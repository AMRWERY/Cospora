<template>
  <div>
    <div class="mx-auto max-w-7xl">
      <nav class="flex" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-s-1 md:space-s-2 rtl:space-s-reverse">
          <li class="inline-flex items-center">
            <nuxt-link to="/"
              class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
              <icon name="material-symbols:home-outline-rounded" class="w-5 h-5 me-2.5" />
              {{ $t('breadcrumb.home') }}
            </nuxt-link>
          </li>
          <li v-if="breadcrumbLabel">
            <div class="flex items-center">
              <icon name="material-symbols:arrow-forward-ios-rounded"
                class="w-3 h-3 mx-1 text-gray-400 rtl:rotate-180" />
              <nuxt-link to=""
                class="text-sm font-medium text-gray-700 ms-1 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">{{
                  breadcrumbLabel }}</nuxt-link>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const { t } = useI18n();

const breadcrumbLabel = computed(() => {
  if (route.meta && route.meta.breadcrumb) {
    return t(`breadcrumb.${route.meta.breadcrumb}`);
  }
  if (route.name) {
    const formattedName = route.name
      .replace(/-/g, '_')
      .toLowerCase();
    return t(`breadcrumb.${formattedName}`);
  }
  const pathSegments = route.path.split('/');
  return pathSegments[pathSegments.length - 1] || 'Unknown';
});
</script>