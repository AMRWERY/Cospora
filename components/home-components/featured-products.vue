<template>
  <div class="mx-auto max-w-7xl">
    <div class="flex items-center justify-center mt-8 mb-3">
      <div class="w-1/12 h-1 border-t-2 border-gray-700"></div>
      <span class="mx-4 text-2xl font-bold leading-10 capitalize">Featured Products</span>
      <div class="w-1/12 h-1 border-t-2 border-gray-700"></div>
    </div>

    <!-- new-products component -->
    <new-products :products="filteredProducts('Featured Products')" />

  </div>
</template>

<script setup>
const store = useNewProductsStoreStore();

onMounted(() => {
  if (store.products.length === 0) {
    store.fetchProducts();
  }
});

// Use computed property to get products from the store
const products = computed(() => store.products);

const filteredProducts = (categoryTitle) => {
  return products.value.filter((product) => product.categoryTitle === categoryTitle);
};
</script>