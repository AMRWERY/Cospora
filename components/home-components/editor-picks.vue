<template>
  <div class="mx-auto max-w-7xl">
    <div class="flex items-center justify-center">
      <div class="w-1/12 h-1 border-t-2 border-gray-700"></div>
      <span class="mx-4 text-2xl font-bold leading-10 uppercase">Editor's Picks</span>
      <div class="w-1/12 h-1 border-t-2 border-gray-700"></div>
    </div>

    <Carousel v-bind="config">
      <Slide v-for="card in products" :key="card">
        <div class="carousel__item">
          <div class="flex flex-col w-full max-w-xs overflow-hidden bg-white my-7 group">
            <nuxt-link class="relative flex mx-3 overflow-hidden h-60 rounded-xl" to="">
              <img class="absolute top-0 right-0 object-cover w-full h-full peer" :src="card.imgOne" />
              <img
                class="absolute top-0 object-cover w-full h-full transition-all duration-1000 delay-100 peer -right-96 hover:right-0 peer-hover:right-0"
                :src="card.imgTwo" />
              <div class="absolute px-2 py-1 text-xs text-white bg-opacity-50 top-2 left-2">
                <p v-if="card.sale" class="px-2 py-1 text-white bg-red-500 rounded">Sale</p>
                <p class="px-2 py-1 mt-1 text-white bg-black rounded" v-if="card.new">New</p>
              </div>
              <div class="absolute text-gray-500 top-2 right-2">
                <button type="button">
                  <icon name="heroicons-outline:heart" />
                </button>
              </div>

              <!-- Quick View Button Container -->
              <new-products-dialog />
            </nuxt-link>

            <div class="px-5 pb-5 mt-4">
              <nuxt-link to="">
                <h5 class="text-xs font-bold tracking-tight uppercase text-slate-900">
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

              <!-- Select Options Button Container -->
              <div class="relative transition-opacity opacity-0 group-hover:opacity-100">
                <button type="button"
                  class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm text-white hover:bg-gray-700 focus:bg-red-500 focus:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 w-full uppercase font-semibold">
                  Select Options
                </button>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script setup>
const config = {
  itemsToShow: 5,
  wrapAround: true,
  snapAlign: 'center',
  breakpoints: {
    200: {
      itemsToShow: 1.5,
      snapAlign: 'center',
    },
    400: {
      itemsToShow: 2,
      snapAlign: 'start',
    },
    700: {
      itemsToShow: 3.5,
      snapAlign: 'center',
    },
    1024: {
      itemsToShow: 5,
      snapAlign: 'start',
    },
  },
};

const products = ref([
  { imgOne: 'https://justfields.com/storage/projects/7M5rV059/product-01.jpg', imgTwo: 'https://justfields.com/storage/projects/7M5rV059/product-02.jpg', sale: true, new: true, title: 'Chanel', subtitle: 'Ainterdu pretium de miancelos dincidunts', price: '89.00', discount: '39.00' },
  { imgOne: 'https://justfields.com/storage/projects/7M5rV059/product-03.jpg', imgTwo: 'https://justfields.com/storage/projects/7M5rV059/product-04.jpg', sale: true, new: true, title: 'Chanel', subtitle: 'Baminos lementum disus an cras damos dincidunts', price: '89.00', discount: '39.00' },
  { imgOne: 'https://justfields.com/storage/projects/7M5rV059/product-05.jpg', imgTwo: 'https://justfields.com/storage/projects/7M5rV059/product-06.jpg', sale: false, new: true, title: 'Marc', subtitle: 'Magnis lorem darturien medros  lacniados cosmopolis', price: '86.00' },
  { imgOne: 'https://justfields.com/storage/projects/7M5rV059/product-07.jpg', imgTwo: 'https://justfields.com/storage/projects/7M5rV059/product-08.jpg', sale: true, new: true, title: 'Collette', subtitle: 'Magnis lorem darturien medros  laciniados cosmopoli', price: '86.00' },
  { imgOne: 'https://justfields.com/storage/projects/7M5rV059/product-09.jpg', imgTwo: 'https://justfields.com/storage/projects/7M5rV059/product-010.jpg', sale: false, new: true, title: 'Jimmy Choo', subtitle: 'Dinterdum pretium de milancelos cras dincidunts', price: '89.00', discount: '39.00' },
  { imgOne: 'https://justfields.com/storage/projects/7M5rV059/product-011.jpg', imgTwo: 'https://justfields.com/storage/projects/7M5rV059/product-012.jpg', sale: false, new: true, title: 'Burberry', subtitle: 'Naminos lementum disus an cras damos dincidunts', price: '39.00' }
])
</script>