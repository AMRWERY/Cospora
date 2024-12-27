<template>
  <div>
    <div class="container p-2 mx-auto">
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
        <!-- Card 1 - Sales -->
        <div class="p-4 bg-white rounded-lg shadow-md">
          <h3 class="text-xl font-semibold text-center">Total Sales This Month</h3>
          <div class="flex items-center justify-between mt-4">
            <icon name="material-symbols:attach-money" class="text-gray-700 h-7 w-7" />
            <p class="text-xl font-semibold text-gray-700">{{ totalCheckouts }}</p>
          </div>
          <div class="mt-6 text-center">
            <nuxt-link to="" type="button" class="px-4 py-2 text-white bg-blue-500 rounded-md">View Details</nuxt-link>
          </div>
        </div>

        <!-- Card 2 - Orders -->
        <div class="p-4 bg-white rounded-lg shadow-md">
          <h3 class="text-xl font-semibold text-center">Orders Placed</h3>
          <div class="flex items-center justify-between mt-4">
            <icon name="material-symbols:shopping-cart-checkout" class="text-gray-700 h-7 w-7" />
            <p class="text-xl font-semibold text-gray-700">20</p>
          </div>
          <div class="mt-6 text-center">
            <nuxt-link to="" type="button" class="px-4 py-2 text-white bg-blue-500 rounded-md">View Details</nuxt-link>
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

        <!-- Card 4 - Inventory -->
        <div class="p-4 bg-white rounded-lg shadow-md">
          <h3 class="text-xl font-semibold text-center">Inventory</h3>
          <div class="flex items-center justify-between mt-4">
            <icon name="si:inventory-line" class="text-gray-700 h-7 w-7" />
            <p class="text-xl font-semibold text-gray-700">40</p>
          </div>
          <div class="mt-6 text-center">
            <nuxt-link to="" type="button" class="px-4 py-2 text-white bg-blue-500 rounded-md">View Details</nuxt-link>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
const checkoutStore = useCheckoutStore();
const userStore = useUserStore();

onMounted(() => {
  checkoutStore.fetchTotalCheckouts();
  userStore.fetchUsers();
});

const totalCheckouts = computed(() => checkoutStore.getTotalCheckouts);

const totalCustomers = computed(() => userStore.totalCustomers);

const { t } = useI18n()

definePageMeta({
  layout: 'dashboard'
})

useHead({
  titleTemplate: () => t("head.dashboard"),
});
</script>