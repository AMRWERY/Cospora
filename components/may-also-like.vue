<template>
  <div>
    <div class="block xs:mt-8 xl:block">
      <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">You may also like</h3>
      <div class="grid gap-4 mt-6 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3">

        <div v-for="product in products" :key="product"
          class="p-3 space-y-6 overflow-hidden bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <nuxt-link to="" class="relative flex overflow-hidden rounded group">
            <div class="relative mx-auto h-44 w-44">
              <img class="absolute top-0 object-cover transition-all duration-500 ease-in-out end-0 h-44 w-44"
                :src="product.imgOne" />
              <img
                class="absolute top-0 object-cover transition-all duration-500 ease-in-out opacity-0 end-0 h-44 w-44 group-hover:opacity-100"
                :src="product.imgTwo" />
            </div>
            <div class="absolute px-2 py-1 text-xs text-white bg-opacity-50 top-2 start-2">
              <p v-if="product.sale" class="px-2 py-1 text-white bg-red-500 rounded">Sale</p>
              <p class="px-2 py-1 mt-1 text-white bg-black rounded" v-if="product.new">New</p>
            </div>
          </nuxt-link>
          <div>
            <nuxt-link to=""
              class="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">{{ product.title
              }}</nuxt-link>
            <p class="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">
              {{ product.subtitle }}
            </p>
          </div>
          <div>
            <p class="text-lg font-bold text-gray-900 dark:text-white">
              <span class="line-through">${{ product.price }}</span>
            </p>
            <p class="text-lg font-bold leading-tight text-red-600 dark:text-red-500">${{ product.discount }}</p>
          </div>
          <div class="mt-6 flex items-center gap-2.5">
            <button data-tooltip-target="favourites-tooltip-1" type="button"
              class="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
              <icon name="heroicons-outline:heart" class="w-5 h-5" />
            </button>
            <button type="button"
              class="inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              <icon name="material-symbols-light:add-shopping-cart-rounded" class="w-5 h-5 me-1" />
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const products = ref([
  { imgOne: 'https://justfields.com/storage/projects/7M5rV059/product-01.jpg', imgTwo: 'https://justfields.com/storage/projects/7M5rV059/product-02.jpg', sale: true, new: true, title: 'Chanel', subtitle: 'Ainterdu pretium de miancelos dincidunts', price: '89.00', discount: '39.00' },
  { imgOne: 'https://justfields.com/storage/projects/7M5rV059/product-03.jpg', imgTwo: 'https://justfields.com/storage/projects/7M5rV059/product-04.jpg', sale: true, new: true, title: 'Chanel', subtitle: 'Baminos lementum disus an cras damos dincidunts', price: '89.00', discount: '39.00' },
  { imgOne: 'https://justfields.com/storage/projects/7M5rV059/product-09.jpg', imgTwo: 'https://justfields.com/storage/projects/7M5rV059/product-010.jpg', sale: false, new: true, title: 'Jimmy Choo', subtitle: 'Dinterdum pretium de milancelos cras dincidunts', price: '89.00', discount: '39.00' },
])
</script>