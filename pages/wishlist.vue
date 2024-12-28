<template>
  <div>
    <breadcrumb />

    <div class="mx-auto font-sans mt-7 max-w-7xl">
      <h2 class="text-2xl font-bold text-gray-800">{{ $t('wishlist.wishlist') }}</h2>

      <!-- skeleton-loader component -->
      <skeleton-loader v-if="store.loading" />

      <div class="overflow-x-auto" v-if="store.wishlist && store.wishlist.length > 0">
        <table class="w-[1000px] mt-12 border-collapse divide-y mx-auto">
          <thead class="text-start bg-gray-50 whitespace-nowrap">
            <tr class="">
              <th class="p-2 text-base font-medium text-gray-600">{{ $t('wishlist.product_image') }}</th>
              <th class="p-2 text-base font-medium text-gray-600">{{ $t('wishlist.product_name') }}</th>
              <th class="p-2 text-base font-medium text-gray-600">{{ $t('wishlist.unit_price') }}</th>
              <th class="p-2 text-base font-medium text-gray-600"></th>
            </tr>
          </thead>
          <tbody class="divide-y whitespace-nowrap">
            <tr v-for="item in store.wishlist" :key="item.id">
              <td class="px-2 py-4">
                <div class="flex items-center gap-4 w-max">
                  <div class="h-32 shrink-0">
                    <img :src="item.imgOne" class="object-contain w-full h-full rounded-lg" />
                  </div>
                </div>
              </td>
              <td class="px-2 py-4">
                <div>
                  <p class="text-base font-bold text-gray-800">{{ item.title }}</p>
                </div>
              </td>
              <td class="px-2 py-4">
                <h4 class="text-base font-bold text-gray-800">${{ item.price }}</h4>
              </td>
              <td class="py-4 ps-2">
                <div class="flex justify-end space-s-5">
                  <button type="button" data-twe-toggle="tooltip" data-twe-placement="bottom"
                    :title="$t('tooltip.delete_item')" @click="removeItem(item.docId)"
                    class="flex items-center justify-center h-10 bg-transparent border rounded-lg w-11">
                    <icon v-if="removingItem === item.docId" name="svg-spinners:6-dots-rotate" size="20px"
                      class="text-red-500" />
                    <icon name="material-symbols:close-rounded" class="inline w-6 text-red-500" v-else />
                  </button>
                  <div class="flex overflow-hidden border rounded-lg w-max">
                    <button type="button" @click="moveToCart(item)"
                      class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm text-white hover:bg-white hover:text-black hover:border-black border-transparent border w-full capitalize font-semibold">
                      <div class="flex items-center justify-center" v-if="loading">
                        <span class="text-center me-2">{{ $t('loading_btn.adding_to_cart') }}...</span>
                        <icon name="svg-spinners:270-ring-with-bg" />
                      </div>
                      <span v-else>{{ $t('btn.add_to_cart') }}</span>
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div v-else class="mt-8 text-center">
        <p class="text-lg text-gray-600">{{ $t('wishlist.your_wishlist_is_empty') }}</p>
      </div>

      <!-- social-media-sharing component -->
      <div class="mb-6">
        <social-media-sharing />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useWishlistStore } from '@/stores/wishlistStore';
import { useCartStore } from "@/stores/cartStore";

const store = useWishlistStore();
const cartStore = useCartStore();

onMounted(async () => {
  await store.fetchWishlist();
  await cartStore.fetchCart();
});

const removingItem = ref(null);

const removeItem = async (docId) => {
  removingItem.value = docId;
  await store.removeFromWishlist(docId);
  setTimeout(() => {
    removingItem.value = null;
  }, 3000);
};

const loading = ref(false);

const moveToCart = async (item) => {
  loading.value = true;
  setTimeout(async () => {
    const { productId, title, price, imgOne } = item;
    const existingProduct = cartStore.cart.find((product) => product.productId === productId);
    if (existingProduct) {
      const newQuantity = existingProduct.quantity + 1;
      await cartStore.updateQuantityInCart(productId, newQuantity);
    } else {
      await cartStore.addToCart(productId, title, price, price, imgOne, "", "", "0", 1);
    }
    await store.removeFromWishlist(item.docId);
    loading.value = false;
  }, 3000);
};

const { t } = useI18n()

onMounted(async () => {
  const { Tooltip, initTWE } = await import("tw-elements");
  initTWE({ Tooltip });
});

useHead({
  titleTemplate: () => t("head.wishlist"),
});
</script>