<template>
  <div>
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-6">
        <div
          class="flex flex-col w-full max-w-xs mx-auto overflow-hidden border border-gray-100 rounded-lg shadow-md group"
          v-for="product in paginatedProducts" :key="product">
          <!-- Card Body with Flex Layout -->
          <div class="flex flex-col h-full">
            <nuxt-link to="" class="relative flex mx-3 mt-3 overflow-hidden h-60 rounded-xl">
              <img class="absolute top-0 right-0 object-cover w-full h-full peer" :src="product.imgOne" />
              <img
                class="absolute top-0 object-cover w-full h-full transition-all duration-1000 delay-100 peer -right-96 hover:right-0 peer-hover:right-0"
                :src="product.imgTwo" />
            </nuxt-link>
            <div class="flex flex-col justify-end flex-grow px-5 pb-2 mt-6">
              <nuxt-link to="">
                <h5 class="text-xl tracking-tight text-slate-900">
                  {{ product.title }}
                </h5>
              </nuxt-link>
              <div class="flex items-center justify-between mt-2">
                <p>
                  <span class="text-3xl font-bold text-slate-900 me-2">${{ product.price }}</span>
                  <span class="text-sm line-through text-slate-900" v-if="product.originalPrice">
                    ${{ product.originalPrice }}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center mt-10">
        <!-- pagination-component -->
        <pagination-component :total-pages="totalPages" :current-page="currentPage" @page-changed="onPageChanged" />
      </div>
    </div>
  </div>
</template>

<script setup>
const store = useNewProductsStoreStore();

onMounted(() => {
  if (store.products.length === 0) {
    store.fetchProducts();
  }
});

const currentPage = ref(1);
const perPage = 10

const totalPages = computed(() => {
  return Math.ceil(store.products.length / perPage);
});

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * perPage;
  const end = start + perPage;
  return store.products.slice(start, end);
});

const onPageChanged = (pageNumber) => {
  currentPage.value = pageNumber;
};

const { t } = useI18n()

definePageMeta({
  layout: 'dashboard'
})

useHead({
  titleTemplate: () => t("head.products"),
});
</script>