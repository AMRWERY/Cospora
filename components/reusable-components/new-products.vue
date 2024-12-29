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
                <div class="absolute py-1 text-xs text-white bg-opacity-50 top-2 left-2">
                  <p class="px-2 bg-red-500 rounded" v-if="item.productTypes.includes('sale')">{{ $t('home.sale') }}</p>
                  <p class="px-2 mt-1 bg-black rounded" v-if="item.productTypes.includes('new')">{{ $t('home.new') }}
                  </p>
                  <p class="px-2 mt-1 bg-blue-600 rounded" v-if="item.productTypes.includes('bundle')">{{
                    $t('home.bundle') }}</p>
                  <p class="px-2 mt-1 bg-green-600 rounded" v-if="item.productTypes.includes('custom')">{{
                    $t('home.custom') }}</p>
                </div>
              </nuxt-link>

              <button type="button" class="absolute z-10 mt-5 rounded-full top-2 end-5"
                @click.stop="toggleWishlist(item)">
                <icon :name="isInWishlist(item.id) ? 'heroicons-solid:heart' : 'heroicons-outline:heart'"
                  class="w-5 h-5" :class="isInWishlist(item.id) ? 'text-red-600' : 'text-gray-500'" />
              </button>

              <!-- open dialog button -->
              <div
                class="absolute inset-0 flex items-center justify-center transition-opacity opacity-0 group-hover:opacity-100">
                <button @click="openDialog(item.id)"
                  class="px-3 py-2 text-xs font-medium text-black capitalize bg-white rounded hover:bg-black hover:text-white">
                  {{ $t('btn.quick_view') }}
                </button>
              </div>

              <div class="px-5 pb-5 mt-4">
                <nuxt-link to="">
                  <h5 class="text-xs font-bold tracking-tight capitalize truncate text-slate-900">
                    {{ item.title }}
                  </h5>
                  <p class="truncate">{{ item.subtitle }}</p>
                </nuxt-link>
                <div class="flex flex-col items-center justify-between mt-2 mb-5 font-semibold text-center ms-1">
                  <p>
                    <span class="text-gray-500 line-through dark:text-gray-400 me-1" v-if="item.originalPrice">${{
                      formatPrice(item.originalPrice) }}</span>
                    <span class="text-sm text-red-700">${{ formatPrice(item.price) }}</span>
                  </p>
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

    <!-- dynamic-toast component -->
    <div class="fixed z-50 pointer-events-none bottom-5 start-5">
      <div class="pointer-events-auto">
        <dynamic-toast v-if="showToast" :title="toastTitle" :message="toastMessage" :toastType="toastType"
          :duration="5000" :toastIcon="toastIcon" @toastClosed="showToast = false" />
      </div>
    </div>

    <!-- products-dialog component -->
    <div
      class="absolute inset-0 flex items-center justify-center transition-opacity opacity-0 mb-28 group-hover:opacity-100">
      <products-dialog :productId="selectedProduct" :isOpen="isDialogOpen" @update:isOpen="isDialogOpen = $event" />
    </div>
  </div>
</template>

<script setup>
const config = {
  itemsToShow: 4,
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
      itemsToShow: 3,
      snapAlign: "center",
    },
    1024: {
      itemsToShow: 4,
      snapAlign: "start",
    },
  },
};

const loading = ref(true);
const showToast = ref(false);
const toastTitle = ref('');
const toastMessage = ref('');
const toastType = ref('');
const toastIcon = ref('')

// price mask / formatPrice composables
const { formatPrice } = useFormatPrice();

const store = useNewProductsStoreStore();
const wishlistStore = useWishlistStore();

const isInWishlist = (productId) => {
  return wishlistStore.isInWishlist(productId);
};

const { t } = useI18n()

const toggleWishlist = async (product) => {
  if (!product) return;
  const authStore = useAuthStore();
  if (!authStore.isUserAuthenticated) {
    showToast.value = true;
    toastTitle.value = t('toast.ah_ah');
    toastMessage.value = t('toast.please_log_in_first_to_add_to_wishlist');
    toastType.value = 'warning';
    toastIcon.value = 'material-symbols:warning-outline-rounded'
    return;
  }
  try {
    if (!wishlistStore.isInWishlist(product.id)) {
      await wishlistStore.addToWishlist(
        product.id,
        product.title,
        product.price,
        product.imgOne
      );
    }
  } catch (error) {
    console.error("Error adding to wishlist:", error);
  }
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