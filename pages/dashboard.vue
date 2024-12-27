<template>
  <div>
    <div class="p-2 mx-auto">
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        <!-- Card 1 - Orders -->
        <div class="p-4 bg-white rounded-lg shadow-md">
          <h3 class="text-xl font-semibold text-center">Orders Placed</h3>
          <div class="flex items-center justify-between mt-4">
            <icon name="material-symbols:shopping-cart-checkout" class="text-gray-700 h-7 w-7" />
            <p class="text-xl font-semibold text-gray-700">{{ totalCheckouts }}</p>
          </div>
          <div class="mt-6 text-center">
            <nuxt-link to="" type="button" class="px-4 py-2 text-white bg-blue-500 rounded-md">View Details</nuxt-link>
          </div>
        </div>

        <!-- Card 2 - Inventory -->
        <div class="p-4 bg-white rounded-lg shadow-md">
          <h3 class="text-xl font-semibold text-center">Inventory</h3>
          <div class="flex items-center justify-between mt-4">
            <icon name="lucide:boxes" class="text-gray-700 h-7 w-7" />
            <p class="text-xl font-semibold text-gray-700">{{ inStockCount }}</p>
          </div>
          <div class="mt-6 text-center">
            <nuxt-link to="/products" type="button" class="px-4 py-2 text-white bg-blue-500 rounded-md">View
              Details</nuxt-link>
          </div>
        </div>

        <!-- Card 3 - Customers -->
        <div class="p-4 bg-white rounded-lg shadow-md">
          <h3 class="text-xl font-semibold text-center">Customers</h3>
          <div class="flex items-center justify-between mt-4">
            <icon name="ci:users-group" class="text-gray-700 h-7 w-7" />
            <p class="text-xl font-semibold text-gray-700">{{ totalCustomers }}</p>
          </div>
          <div class="mt-6 text-center">
            <nuxt-link to="/users" type="button" class="px-4 py-2 text-white bg-blue-500 rounded-md">View
              Details</nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-4 p-4 md:grid-cols-12">
      <div class="col-span-12 p-4 bg-white rounded-lg shadow-md md:col-span-9 h-[400px]">
        <div class="mt-4">
          <!-- charts component -->
          <charts :totalOrders="totalCheckouts" :totalInventory="inStockCount" :totalCustomers="totalCustomers" />
        </div>
      </div>

      <div class="col-span-12 p-4 bg-white rounded-lg shadow-md md:col-span-3 h-[400px]">
        <h3 class="text-xl font-semibold text-center">Top Products</h3>
        <div class="h-full overflow-y-auto scrollbar-hidden">
          <ul role="list" class="divide-y divide-gray-100">
            <li v-for="product in topProducts" :key="product.id" class="flex justify-between py-5 gap-x-6">
              <div class="flex min-w-0 gap-x-4">
                <img class="flex-none rounded-full size-12 bg-gray-50" :src="product.imgOne" />
                <div class="flex-auto min-w-0">
                  <p class="font-semibold text-gray-900 truncate text-sm/6">{{ product.title }}</p>
                  <div class="flex items-center justify-between">
                    <p class="mt-1 text-gray-500 text-xs/5">{{ product.categoryTitle }}</p>
                    <p class="mt-1 font-semibold text-gray-700 text-xs/5">${{ product.price }}</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const checkoutStore = useCheckoutStore();
const userStore = useUserStore();
const productStore = useNewProductsStoreStore();

onMounted(() => {
  checkoutStore.fetchTotalCheckouts();
  userStore.fetchUsers();
  productStore.fetchProducts();
});

const totalCheckouts = computed(() => checkoutStore.getTotalCheckouts);

const totalCustomers = computed(() => userStore.totalCustomers);

const inStockCount = computed(() => productStore.inStockProducts);

const topProducts = computed(() => productStore.products.slice(0, 6));

const { t } = useI18n()

definePageMeta({
  layout: 'dashboard'
})

useHead({
  titleTemplate: () => t("head.dashboard"),
});
</script>

<style scoped>
.scrollbar-hidden::-webkit-scrollbar {
  display: none;
}

.scrollbar-hidden {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>