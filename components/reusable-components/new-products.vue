<template>
  <div>
    <ClientOnly>
      <!-- loading-spinner component -->
      <loading-spinner v-if="loading" @loaded="loading = false" />

      <Carousel v-bind="config" v-else>
        <Slide v-for="(item, index) in products" :key="index">
          <div class="carousel__item">
            <div class="relative flex flex-col w-full max-w-xs my-10 overflow-hidden bg-white group">
              <nuxt-link class="relative flex mx-3 mt-3 overflow-hidden h-60 rounded-xl" to="">
                <div class="relative w-full h-full">
                  <img class="absolute top-0 object-cover w-full h-full transition-all duration-500 ease-in-out end-0"
                    :src="item.imgOne" />
                  <img
                    class="absolute top-0 object-cover w-full h-full transition-all duration-500 ease-in-out opacity-0 end-0 group-hover:opacity-100"
                    :src="item.imgTwo" />
                </div>
                <div class="absolute py-1 text-xs text-white bg-opacity-50 top-2 start-2">
                  <p class="px-2 bg-red-500 rounded" v-if="item.productTypes.includes('sale')">Sale</p>
                  <p class="px-2 mt-1 bg-black rounded" v-if="item.productTypes.includes('new')">New</p>
                  <p class="px-2 mt-1 bg-blue-600 rounded" v-if="item.productTypes.includes('bundle')">Bundle</p>
                  <p class="px-2 mt-1 bg-green-600 rounded" v-if="item.productTypes.includes('custom-label')">Custom
                    Label</p>
                </div>
              </nuxt-link>

              <button type="button" class="absolute z-10 mt-5 rounded-full top-2 end-5"
                @click.stop="toggleFavorite(index)">
                <icon :name="isFavorite[index] ? 'heroicons-solid:heart' : 'heroicons-outline:heart'" class="w-5 h-5"
                  :class="isFavorite[index] ? 'text-red-500' : 'text-gray-500'" />
              </button>

              <!-- open dialog button -->
              <div
                class="absolute inset-0 flex items-center justify-center transition-opacity opacity-0 group-hover:opacity-100">
                <button @click="openDialog(item.id)"
                  class="px-3 py-2 text-xs font-medium text-black capitalize bg-white rounded hover:bg-black hover:text-white">
                  Quick View
                </button>
              </div>

              <div class="px-5 pb-5 mt-4">
                <nuxt-link to="">
                  <h5 class="text-xs font-bold tracking-tight capitalize truncate text-slate-900">
                    {{ item.title }}
                  </h5>
                  <p class="truncate">{{ item.subtitle }}</p>
                </nuxt-link>
                <div class="flex flex-col items-center justify-between mt-2 mb-5 font-semibold text-center">
                  <p>
                    <span class="text-sm text-gray-400 line-through me-2" v-if="item.discount">${{
                      formatPrice(item.discount)
                    }}</span>
                    <span class="text-sm text-red-700">${{ formatPrice(item.price) }}</span>
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
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </ClientOnly>

    <!-- products-dialog component -->
    <div
      class="absolute inset-0 flex items-center justify-center transition-opacity opacity-0 mb-28 group-hover:opacity-100">
      <products-dialog :productId="selectedProduct" :isOpen="isDialogOpen" @update:isOpen="isDialogOpen = $event" />
    </div>
  </div>
</template>

<script setup>
const config = {
  itemsToShow: 5,
  wrapAround: true,
  snapAlign: "center",
  breakpoints: {
    200: {
      itemsToShow: 1.5,
      snapAlign: "center",
    },
    400: {
      itemsToShow: 2,
      snapAlign: "start",
    },
    700: {
      itemsToShow: 3.5,
      snapAlign: "center",
    },
    1024: {
      itemsToShow: 5,
      snapAlign: "start",
    },
  },
};

const loading = ref(true);

// price mask / formatPrice composables
const { formatPrice } = useFormatPrice();

const store = useNewProductsStoreStore();

const isFavorite = ref(store.products.makeup?.map(() => false) || []);

const toggleFavorite = (index) => {
  isFavorite.value[index] = !isFavorite.value[index];
};

const props = defineProps({
  products: {
    type: Array,
    default: () => [],
    required: true,
  },
})

const isDialogOpen = ref(false)
const isLoading = ref(false)
const selectedProduct = ref(null);

const openDialog = async (productId) => {
  isDialogOpen.value = true;
  isLoading.value = true;
  await store.fetchProductDetail(productId);
  selectedProduct.value = productId;
  isLoading.value = false;
};
</script>