<template>
  <div>
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="flex flex-col gap-4 p-4 sm:flex-row sm:gap-4">
        <div class="w-full sm:w-1/4">
          <label for="category" class="block mb-2 text-sm font-medium text-gray-700">
            Category
          </label>
          <select id="category" v-model="selectedCategory" @change="applyFilter"
            class="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
            <option value="" disabled selected>Select a Category</option>
            <option v-for="category in uniqueCategories" :key="category" :value="category">{{ category }}</option>
          </select>
        </div>

        <div class="w-full sm:w-1/4">
          <label for="availability" class="block mb-2 text-sm font-medium text-gray-700">
            Availability
          </label>
          <select id="availability" v-model="selectedAvailability" @change="applyFilter"
            class="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
            <option value="" disabled selected>Select Availability</option>
            <option v-for="available in uniqueAvailability" :key="available" :value="available">{{ available }}</option>
          </select>
        </div>

        <div class="w-full sm:w-1/4">
          <label for="brand" class="block mb-2 text-sm font-medium text-gray-700">
            Brand
          </label>
          <select id="brand" v-model="selectedBrand" @change="applyFilter"
            class="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
            <option value="" disabled selected>Select Brand</option>
            <option v-for="brand in uniqueBrand" :key="brand" :value="brand">{{ brand }}</option>
          </select>
        </div>

        <div class="flex items-end w-full sm:w-auto ms-auto">
          <nuxt-link to="/products/add-products" type="button"
            class="flex items-center px-4 py-2.5 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            <icon name="ep:plus" class="w-5 h-5 me-2" />
            <span>Add Product</span>
          </nuxt-link>
        </div>
      </div>

      <!-- Loading Spinner -->
      <div v-if="loading" class="flex items-center justify-center h-48 text-gray-600">
        <icon name="svg-spinners:blocks-shuffle-3" class="w-24 h-24" />
      </div>

      <div v-else-if="filteredProducts.length === 0" class="flex items-center justify-center h-48 text-gray-600">
        <p class="text-2xl font-semibold">No products available</p>
      </div>

      <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-6" v-else>
        <div
          class="flex flex-col w-full max-w-xs mx-auto overflow-hidden border border-gray-100 rounded-lg shadow-md group"
          v-for="product in paginatedProducts" :key="product.id">
          <!-- Card Body with Flex Layout -->
          <div class="flex flex-col h-full">
            <nuxt-link to="" class="relative flex mx-3 mt-3 overflow-hidden h-60 rounded-xl">
              <img class="absolute top-0 right-0 object-cover w-full h-full peer" :src="product.imgOne" />
              <img
                class="absolute top-0 object-cover w-full h-full transition-all duration-1000 delay-100 peer -right-96 hover:right-0 peer-hover:right-0"
                :src="product.imgTwo" />
              <nuxt-link :to="`/products/edit-product/${product.id}`" type="button"
                class="absolute bg-white rounded-full shadow-lg top-2 end-2" data-twe-toggle="tooltip"
                data-twe-placement="top" title="Edit Product">
                <icon name="ep:edit" class="text-gray-600" />
              </nuxt-link>
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
const currentPage = ref(1);
const perPage = 10;
const selectedCategory = ref('');
const selectedAvailability = ref('');
const selectedBrand = ref('');
const loading = ref(false);

onMounted(() => {
  if (store.products.length === 0) {
    store.fetchProducts();
  }
});

const applyFilter = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 2000);
};

const uniqueCategories = computed(() => {
  return [...new Set(store.products.map((product) => product.categoryTitle))];
});

const uniqueAvailability = computed(() => {
  return [...new Set(store.products.map((product) => product.availability))];
});

const uniqueBrand = computed(() => {
  return [...new Set(store.products.map((product) => product.brand))];
});

const filteredProducts = computed(() => {
  return store.products.filter((product) => {
    const matchesCategory =
      !selectedCategory.value || product.categoryTitle === selectedCategory.value;
    const matchesAvailability =
      !selectedAvailability.value || product.availability === selectedAvailability.value
    const matchesBrand =
      !selectedBrand.value || product.brand === selectedBrand.value
    return matchesCategory && matchesAvailability && matchesBrand;
  });
});


const totalPages = computed(() => {
  return Math.ceil(filteredProducts.value.length / perPage);
});

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * perPage;
  const end = start + perPage;
  return filteredProducts.value.slice(start, end);
});

const onPageChanged = (pageNumber) => {
  currentPage.value = pageNumber;
};

onMounted(async () => {
  const { Tooltip, initTWE } = await import("tw-elements");
  initTWE({ Tooltip });
});
</script>