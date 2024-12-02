<template>
  <div>
    <div class="mx-auto mt-16 max-w-7xl">
      <p class="text-3xl font-bold text-center">Recently Viewed Products</p>
      <div class="grid grid-cols-1 mt-6 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div class="relative group" v-for="(card, index) in products" :key="card">
          <nuxt-link class="relative flex mx-3 mt-3 overflow-hidden h-60 rounded-xl" to="">
            <div class="relative w-full h-full">
              <img class="absolute top-0 end-0 object-cover w-full h-full transition-all duration-500 ease-in-out"
                :src="card.imgOne" />
              <img
                class="absolute top-0 end-0 object-cover w-full h-full transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100"
                :src="card.imgTwo" />
            </div>
            <div class="absolute px-2 py-1 text-xs text-white bg-opacity-50 top-2 start-2">
              <p v-if="card.sale" class="px-2 py-1 text-white bg-red-500 rounded">Sale</p>
              <p class="px-2 py-1 mt-1 text-white bg-black rounded" v-if="card.new">New</p>
            </div>
          </nuxt-link>

          <div class="transition-opacity opacity-0 group-hover:opacity-100">
            <button type="button" class="absolute z-10 mt-5 rounded-full top-2 end-5"
              @click.stop="toggleFavorite(index)">
              <icon :name="isFavorite[index] ? 'heroicons-solid:heart' : 'heroicons-outline:heart'" class="w-5 h-5"
                :class="isFavorite[index] ? 'text-red-500' : 'text-gray-500'" />
            </button>
            <button type="button" class="absolute z-10 rounded-full top-16 end-5" data-twe-toggle="tooltip"
              title="Add to Compare" data-twe-placement="bottom" @click.stop="toggleCompare(index)">
              <icon :name="isCompare[index] ? 'ion:git-compare-sharp' : 'ion:ios-git-compare'" class="w-5 h-5"
                :class="isCompare[index] ? 'text-red-400' : 'text-gray-500'" />
            </button>
          </div>

          <div
            class="absolute inset-0 flex items-center justify-center transition-opacity opacity-0 mb-28 group-hover:opacity-100">
            <new-products-dialog />
          </div>

          <div class="px-5 pb-5 mt-4">
            <nuxt-link to="">
              <h5 class="text-xs font-bold tracking-tight capitalize text-slate-900">
                {{ card.title }}
              </h5>
              <p>{{ card.subtitle }}</p>
            </nuxt-link>
            <div class="flex flex-col items-center justify-between mt-2 mb-5 font-semibold text-center">
              <p>
                <span class="mr-2 text-sm text-gray-400 line-through" v-if="card.discount">${{ card.discount }}</span>
                <span class="text-sm text-red-700">${{ card.price }}</span>
              </p>
            </div>

            <!-- Select Options Button -->
            <div class="relative transition-opacity opacity-0 group-hover:opacity-100">
              <button type="button"
                class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm text-white hover:bg-gray-700 focus:bg-red-500 focus:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 w-full capitalize font-semibold">
                Select Options
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- brands-logo component -->
      <brands-logo />
    </div>
  </div>
</template>

<script setup>
const products = ref([
  { imgOne: 'https://justfields.com/storage/projects/7M5rV059/product-01.jpg', imgTwo: 'https://justfields.com/storage/projects/7M5rV059/product-02.jpg', sale: true, new: true, title: 'Chanel', subtitle: 'Ainterdu pretium de miancelos dincidunts', price: '89.00', discount: '39.00' },
  { imgOne: 'https://justfields.com/storage/projects/7M5rV059/product-03.jpg', imgTwo: 'https://justfields.com/storage/projects/7M5rV059/product-04.jpg', sale: true, new: true, title: 'Chanel', subtitle: 'Baminos lementum disus an cras damos dincidunts', price: '89.00', discount: '39.00' },
  { imgOne: 'https://justfields.com/storage/projects/7M5rV059/product-05.jpg', imgTwo: 'https://justfields.com/storage/projects/7M5rV059/product-06.jpg', sale: false, new: true, title: 'Marc', subtitle: 'Magnis lorem darturien medros  lacniados cosmopolis', price: '86.00' },
  { imgOne: 'https://justfields.com/storage/projects/7M5rV059/product-07.jpg', imgTwo: 'https://justfields.com/storage/projects/7M5rV059/product-08.jpg', sale: true, new: true, title: 'Collette', subtitle: 'Magnis lorem darturien medros  laciniados cosmopoli', price: '86.00' },
  { imgOne: 'https://justfields.com/storage/projects/7M5rV059/product-09.jpg', imgTwo: 'https://justfields.com/storage/projects/7M5rV059/product-010.jpg', sale: false, new: true, title: 'Jimmy Choo', subtitle: 'Dinterdum pretium de milancelos cras dincidunts', price: '89.00', discount: '39.00' },
  { imgOne: 'https://justfields.com/storage/projects/7M5rV059/product-011.jpg', imgTwo: 'https://justfields.com/storage/projects/7M5rV059/product-012.jpg', sale: false, new: true, title: 'Burberry', subtitle: 'Naminos lementum disus an cras damos dincidunts', price: '39.00' }
])

const isFavorite = ref(products.value.map(() => false));
const isCompare = ref(products.value.map(() => false));

const toggleFavorite = (index) => {
  isFavorite.value[index] = !isFavorite.value[index];
};

const toggleCompare = (index) => {
  isCompare.value[index] = !isCompare.value[index];
};
</script>