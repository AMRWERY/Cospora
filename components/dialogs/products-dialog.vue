<template>
  <div>
    <!-- Show spinner while loading -->
    <div v-if="isLoading" class="absolute inset-0 z-50 flex items-center justify-center bg-gray-200 bg-opacity-50">
      <icon name="svg-spinners:6-dots-rotate" class="bg-blue-800 spinner" />
    </div>

    <HeadlessTransitionRoot appear :show="isOpen" as="template">
      <HeadlessDialog as="div" @close="handleClose" class="relative z-10">
        <HeadlessTransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0"
          enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-black/25" />
        </HeadlessTransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div class="flex items-center justify-center min-h-full p-4 text-center">
            <HeadlessTransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95">
              <HeadlessDialogPanel
                class="w-full max-w-5xl p-4 overflow-y-scroll text-start align-middle transition-all transform bg-white shadow-xl rounded-2xl max-h-[80vh] custom-scroll">
                <button @click="handleClose"
                  class="sticky z-50 flex items-center justify-center p-2 text-black bg-white rounded-full outline-none focus:outline-none top-1 start-1 hover:bg-black hover:text-white">
                  <icon name="material-symbols:close" />
                </button>
                <section class="overflow-hidden bg-white font-poppins dark:bg-gray-800">
                  <div class="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
                    <div class="flex flex-wrap -mx-4">
                      <div class="w-full px-4 md:w-1/2">
                        <div class="relative mb-6 lg:mb-10">
                          <img :src="selectedImage" class="object-contain w-full h-[350px]" />
                        </div>
                        <p class="my-6 text-xs text-center text-gray-600">Roll over or click image to zoom in</p>
                        <div class="flex-wrap hidden md:flex">
                          <ClientOnly>
                            <Carousel v-bind="config">
                              <Slide v-for="(image, index) in imageList" :key="index">
                                <div class="carousel__item">
                                  <button @click="setSelectedImage(image)" type="button" class="block">
                                    <img :src="image" class="object-cover w-full h-32" />
                                  </button>
                                </div>
                              </Slide>
                              <template #addons>
                                <Navigation />
                              </template>
                            </Carousel>
                          </ClientOnly>
                        </div>
                      </div>
                      <div class="w-full px-4 md:w-1/2">
                        <div class="lg:ps-20">
                          <div class="pb-6 mb-8">
                            <h2 class="max-w-xl mb-6 text-xl font-bold dark:text-gray-300 md:text-xl">
                              {{ store.selectedProduct?.title }}
                            </h2>
                            <div class="flex">
                              <div class="ms-auto text-[#e7040f] flex">
                                <icon name="fa-solid:fire" size="13px" class="me-2" />
                                <p class="text-xs">15 sold in last 18 hours</p>
                              </div>
                            </div>
                            <div class="my-8">
                              <p class="text-sm font-semibold">Brand: <span class="font-normal ms-20">{{ store.selectedProduct?.brand }}</span></p>
                              <p class="text-sm font-semibold" v-if="store.selectedProduct?.productCode">Product Code: <span class="font-normal ms-7">{{ store.selectedProduct?.productCode }}</span>
                              </p>
                              <p class="text-sm font-semibold">Availability: <span class="font-normal ms-12">{{ store.selectedProduct?.availability }}</span>
                                </p>
                            </div>
                            <div class="mb-5">
                              <p class="text-xs font-thin underline">Limited-Time Offers, End in:</p>
                            </div>
                            <div class="pb-6 mb-4">
                              <div class="flex flex-wrap -mb-2">
                                <nuxt-link to="" class="w-16 p-4 mb-2 text-xs text-center border rounded-full me-4">
                                  <span class="block">00</span>
                                  <span class="block">days</span>
                                </nuxt-link>
                                <nuxt-link to="" class="w-16 p-4 mb-2 text-xs text-center border rounded-full me-4">
                                  <span class="block">00</span>
                                  <span class="block">hours</span>
                                </nuxt-link>
                                <nuxt-link to="" class="w-16 p-4 mb-2 text-xs text-center border rounded-full me-4">
                                  <span class="block">00</span>
                                  <span class="block">mins</span>
                                </nuxt-link>
                                <nuxt-link to="" class="w-16 p-4 mb-2 text-xs text-center border rounded-full me-4">
                                  <span class="block">00</span>
                                  <span class="block">secs</span>
                                </nuxt-link>
                              </div>
                            </div>
                            <p class="inline-flex items-center text-2xl font-semibold text-gray-700 dark:text-gray-400">
                              <span class="text-gray-500 line-through dark:text-gray-400">${{ store.selectedProduct?.price }}</span>
                              <span class="text-red-600 ms-3" v-if="store.selectedProduct?.originalPrice">${{ store.selectedProduct?.originalPrice }}</span>
                              <span class="px-2 py-1 text-sm text-white bg-red-500 ms-3" v-if="store.selectedProduct?.discount">-{{ store.selectedProduct?.discount }}%</span>
                            </p>
                          </div>
                          <div class="mb-6 -mt-7">
                            <p class="max-w-md text-xs text-gray-700">
                              {{ store.selectedProduct?.subtitle }}
                            </p>
                          </div>
                          <div class="mb-8">
                            <h2 class="mb-2 text-sm font-bold">Color <span class="text-red-500">*</span></h2>
                            <div class="flex flex-wrap -mb-2">
                              <button class="p-1 mb-2 border border-transparent rounded-full me-2">
                                <div class="w-8 h-8 bg-red-600 rounded-full"></div>
                              </button>
                              <button class="p-1 mb-2 border border-transparent rounded-full me-2">
                                <div class="w-8 h-8 bg-green-600 rounded-full"></div>
                              </button>
                              <button class="p-1 mb-2 border border-transparent rounded-full">
                                <div class="w-8 h-8 bg-yellow-500 rounded-full"></div>
                              </button>
                              <button class="p-1 mb-2 border border-transparent rounded-full">
                                <div class="w-8 h-8 rounded-full bg-sky-400"></div>
                              </button>
                            </div>
                          </div>
                          <div class="mb-8">
                            <h2 class="mb-2 text-sm font-bold">Size <span class="text-red-500">*</span></h2>
                            <div class="flex flex-wrap items-center gap-3 mt-3 select-none">
                              <label class="">
                                <input type="radio" name="type" value="Powder" class="sr-only peer" checked />
                                <p
                                  class="flex items-center justify-center w-10 h-10 p-4 font-bold border border-black rounded-full cursor-pointer peer-checked:bg-gray-800 peer-checked:text-white">
                                  S
                                </p>
                              </label>
                              <label class="">
                                <input type="radio" name="type" value="Whole Bean" class="sr-only peer" />
                                <p
                                  class="flex items-center justify-center w-10 h-10 p-4 font-bold border border-black rounded-full cursor-pointer peer-checked:bg-gray-800 peer-checked:text-white">
                                  L
                                </p>
                              </label>
                              <label class="">
                                <input type="radio" name="type" value="Groud" class="sr-only peer" />
                                <p
                                  class="flex items-center justify-center w-10 h-10 p-4 font-bold border border-black rounded-full cursor-pointer peer-checked:bg-gray-800 peer-checked:text-white">
                                  XS
                                </p>
                              </label>
                              <label class="">
                                <input type="radio" name="type" value="Groud" class="sr-only peer" />
                                <p
                                  class="flex items-center justify-center w-10 h-10 p-4 font-bold border border-black rounded-full cursor-pointer peer-checked:bg-gray-800 peer-checked:text-white">
                                  M
                                </p>
                              </label>
                              <label class="">
                                <input type="radio" name="type" value="Groud" class="sr-only peer" />
                                <p
                                  class="flex items-center justify-center w-10 h-10 p-4 font-bold border border-black rounded-full cursor-pointer peer-checked:bg-black peer-checked:text-white">
                                  XL
                                </p>
                              </label>
                            </div>
                          </div>

                          <div class="mb-8">
                            <h2 class="mb-2 text-sm font-bold">Quantity:</h2>
                            <div class="flex flex-wrap items-center">
                              <div class="mb-4 me-4 lg:mb-0">
                                <div class="w-28">
                                  <div class="relative flex flex-row w-full h-10 bg-transparent rounded-lg ">
                                    <button
                                      class="flex items-center justify-center w-20 h-full text-gray-600 bg-gray-100 border-r rounded-l outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-300">
                                      <icon name="system-uicons:minus" />
                                    </button>
                                    <input type="number"
                                      class="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-100 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
                                      placeholder="1" />
                                    <button
                                      class="flex items-center justify-center w-20 h-full text-gray-600 bg-gray-100 border-r rounded-l outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-300">
                                      <icon name="system-uicons:plus" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="mb-6">
                            <p class="text-xs">Subtotal: <span class="font-semibold">${{ store.selectedProduct?.price }}</span></p>
                          </div>

                          <div class="flex flex-wrap items-center gap-4 mb-6">
                            <button
                              class="flex-grow h-10 p-2 font-semibold capitalize bg-black text-gray-50 dark:text-gray-200 hover:bg-red-700">
                              Add to Cart
                            </button>
                            <button
                              class="flex items-center justify-center h-10 p-2 text-gray-700 border border-gray-300 w-11 hover:text-gray-50 hover:bg-black">
                              <icon name="clarity:heart-line" size="20px" />
                            </button>
                          </div>

                          <div class="flex items-center text-xs space-s-2">
                            <icon name="entypo:eye" class="text-lg" />
                            <p>193 customers are viewing this product</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </HeadlessDialogPanel>
            </HeadlessTransitionChild>
          </div>
        </div>
      </HeadlessDialog>
    </HeadlessTransitionRoot>
  </div>
</template>

<script setup>
const emit = defineEmits(['update:isOpen'])

const handleClose = () => {
  emit('update:isOpen', false);
}
const isLoading = ref(false)

const config = {
  itemsToShow: 4,
  wrapAround: true,
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
      itemsToShow: 4,
      snapAlign: 'start',
    },
  },
};

const store = useNewProductsStoreStore()
const selectedImage = ref('');

watch(
  () => store.selectedProduct,
  (newProduct) => {
    if (newProduct) {
      selectedImage.value = newProduct.imgOne || "";
    }
  },
  { immediate: true }
);

const setSelectedImage = (image) => {
  selectedImage.value = image;
};

const productDetails = ref(null);

watch(() => store.selectedProduct, (newProduct) => {
  if (newProduct) {
    productDetails.value = newProduct;
  }
});

const props = defineProps({
  isOpen: {
    type: Boolean,
  },
  productId: {
    type: [String, Number],
    default: null,
  },
})

const imageList = computed(() =>
  [
    store.selectedProduct?.imgOne,
    store.selectedProduct?.imgTwo,
    store.selectedProduct?.imgThree,
    store.selectedProduct?.imgFour,
  ].filter(Boolean)
);
</script>

<style scoped>
.custom-scroll {
  overflow-y: scroll;
}

.custom-scroll::-webkit-scrollbar {
  display: none;
}

.custom-scroll {
  scrollbar-width: none;
}

.spinner {
  border: 4px solid transparent;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>