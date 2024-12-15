<template>
  <div class="mx-auto max-w-7xl">
    <div class="flex items-center justify-center mt-8 mb-3">
      <div class="w-1/12 h-1 border-t-2 border-gray-700"></div>
      <span class="mx-4 text-2xl font-bold leading-10 capitalize">New Products</span>
      <div class="w-1/12 h-1 border-t-2 border-gray-700"></div>
    </div>

    <!--Tabs navigation-->
    <ul class="flex flex-row flex-wrap justify-center mb-5 list-none border-b-0 space-s-2 ps-0" role="tablist"
      data-twe-nav-ref>
      <li role="presentation">
        <nuxt-link to="#tabs-makeup" class="my-2 block rounded-full px-5 py-2 text-sm font-semibold leading-tight text-neutral-500 
          border border-transparent hover:border-neutral-300 focus:border-neutral-300
          data-[twe-nav-active]:border-gray-700 data-[twe-nav-active]:text-gray-700
          dark:text-white/50 dark:hover:border-neutral-500 dark:data-[twe-nav-active]:border-gray-700"
          data-twe-toggle="pill" data-twe-target="#tabs-makeup" data-twe-nav-active role="tab"
          aria-controls="tabs-makeup" aria-selected="true">
          Makeup
        </nuxt-link>
      </li>
      <li role="presentation">
        <nuxt-link to="#tabs-nail" class="my-2 block rounded-full px-5 py-2 text-sm font-semibold leading-tight text-neutral-500 
          border border-transparent hover:border-neutral-300 focus:border-neutral-300
          data-[twe-nav-active]:border-gray-700 data-[twe-nav-active]:text-gray-700
          dark:text-white/50 dark:hover:border-neutral-500 dark:data-[twe-nav-active]:border-gray-700"
          data-twe-toggle="pill" data-twe-target="#tabs-nail" role="tab" aria-controls="tabs-nail"
          aria-selected="false">Nail</nuxt-link>
      </li>
      <li role="presentation">
        <nuxt-link to="#tabs-accessories" class="my-2 block rounded-full px-5 py-2 text-sm font-semibold leading-tight text-neutral-500
          border border-transparent hover:border-neutral-300 focus:border-neutral-300
          data-[twe-nav-active]:border-gray-700 data-[twe-nav-active]:text-gray-700
          dark:text-white/50 dark:hover:border-neutral-500 dark:data-[twe-nav-active]:border-gray-700"
          data-twe-toggle="pill" data-twe-target="#tabs-accessories" role="tab" aria-controls="tabs-accessories"
          aria-selected="false">
          Accessories
        </nuxt-link>
      </li>
      <li role="presentation">
        <nuxt-link to="#tabs-body-art" class="my-2 block rounded-full px-5 py-2 text-sm font-semibold leading-tight text-neutral-500
          border border-transparent hover:border-neutral-300 focus:border-neutral-300
          data-[twe-nav-active]:border-gray-700 data-[twe-nav-active]:text-gray-700
          dark:text-white/50 dark:hover:border-neutral-500 dark:data-[twe-nav-active]:border-gray-700"
          data-twe-toggle="pill" data-twe-target="#tabs-body-art" role="tab" aria-controls="tabs-body-art"
          aria-selected="false">
          Body Art
        </nuxt-link>
      </li>
      <li role="presentation">
        <nuxt-link to="#tabs-makeup-tools" class="my-2 block rounded-full px-5 py-2 text-sm font-semibold leading-tight text-neutral-500
          border border-transparent hover:border-neutral-300 focus:border-neutral-300
          data-[twe-nav-active]:border-gray-700 data-[twe-nav-active]:text-gray-700
          dark:text-white/50 dark:hover:border-neutral-500 dark:data-[twe-nav-active]:border-gray-700"
          data-twe-toggle="pill" data-twe-target="#tabs-makeup-tools" role="tab" aria-controls="tabs-makeup-tools"
          aria-selected="false">
          Makeup Tools
        </nuxt-link>
      </li>
      <li role="presentation">
        <nuxt-link to="#tabs-fragrance" class="my-2 block rounded-full px-5 py-2 text-sm font-semibold leading-tight text-neutral-500
          border border-transparent hover:border-neutral-300 focus:border-neutral-300
          data-[twe-nav-active]:border-gray-700 data-[twe-nav-active]:text-gray-700
          dark:text-white/50 dark:hover:border-neutral-500 dark:data-[twe-nav-active]:border-gray-700"
          data-twe-toggle="pill" data-twe-target="#tabs-fragrance" role="tab" aria-controls="tabs-fragrance"
          aria-selected="false">
          Fragrance
        </nuxt-link>
      </li>
    </ul>

    <!--Tabs content-->
    <div class="mb-2">
      <div class="hidden opacity-100 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
        id="tabs-makeup" role="tabpanel" aria-labelledby="tabs-makeup-tab" data-twe-tab-active>
        <new-products :products="filteredProducts('Makeup')" />
      </div>
      <div class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
        id="tabs-nail" role="tabpanel" aria-labelledby="tabs-nail-tab">
        <new-products :products="filteredProducts('Nail')" />
      </div>
      <div class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
        id="tabs-accessories" role="tabpanel" aria-labelledby="tabs-accessories-tab">
        <new-products :products="filteredProducts('Accessories')" />
      </div>
      <div class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
        id="tabs-body-art" role="tabpanel" aria-labelledby="tabs-body-art-tab">
        <new-products :products="filteredProducts('Body Art')" />
      </div>
      <div class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
        id="tabs-makeup-tools" role="tabpanel" aria-labelledby="tabs-makeup-tools-tab">
        <new-products :products="filteredProducts('Makeup Tools')" />
      </div>
      <div class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
        id="tabs-fragrance" role="tabpanel" aria-labelledby="tabs-fragrance-tab">
        <new-products :products="filteredProducts('Fragrance')" />
      </div>
    </div>

    <div class="grid gap-4 space-y-6 space-s-4 md:grid-cols-2 lg:gap-x-6 lg:space-y-0">
      <nuxt-link to="/collections/accessories/**" class="duration-300 transform hover:scale-105">
        <div class="h-64 overflow-hidden rounded-lg cursor-pointer" data-twe-ripple-init data-twe-ripple-color="dark">
          <img src="https://justfields.com/storage/projects/7M5rV059/home-07.jpg" class="object-cover w-full h-full">
        </div>
      </nuxt-link>

      <nuxt-link to="/collections/makeup/**" class="duration-300 transform hover:scale-105">
        <div class="h-64 overflow-hidden rounded-lg cursor-pointer" data-twe-ripple-init data-twe-ripple-color="dark">
          <img src="https://justfields.com/storage/projects/7M5rV059/home-08.jpg" class="object-cover w-full h-full">
        </div>
      </nuxt-link>
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

// Use computed property to get products from the store
const products = computed(() => store.products);

const filteredProducts = (subCategoryTitle) => {
  return products.value.filter((product) => product.subCategoryTitle === subCategoryTitle);
};

onMounted(async () => {
  const { Tab, Ripple, initTWE } = await import("tw-elements");
  initTWE({ Tab, Ripple });
});
</script>