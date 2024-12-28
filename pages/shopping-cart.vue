<template>
  <div>
    <breadcrumb />

    <section class="py-8 dark:bg-gray-900 md:py-7">
      <div class="p-4 space-y-4" v-if="cartStore.cart.length === 0">
        <p class="text-[13px] text-center text-gray-800">{{ $t('cart.your_cart_is_currently_empty') }}</p>
        <button type="button"
          class="block w-full px-5 py-2 text-sm font-medium text-black transition duration-300 bg-white border border-black rounded-md hover:bg-black hover:text-white">
          {{ $t('cart.continue_shopping') }}
        </button>
      </div>

      <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <div class="flex items-center justify-between">
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">{{ $t('cart.your_cart') }}</h2>
          <nuxt-link to="" class="inline-flex items-center text-sm cursor-pointer hover:underline">
            {{ $t('cart.continue_shopping') }}
            <icon name="material-symbols:keyboard-arrow-right" class="w-4 h-4 mt-0.5" />
          </nuxt-link>
        </div>

        <div class="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <div class="flex-none w-full mx-auto lg:max-w-2xl xl:max-w-4xl">
            <div class="space-y-6">
              <div
                class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6"
                v-if="cartStore.cart.length > 0" v-for="item in cartStore.cart" :key="item.id">
                <div class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-4">
                  <nuxt-link to="" class="shrink-0 md:order-1">
                    <img class="w-20 h-20 dark:hidden" :src="item.imgOne" />
                  </nuxt-link>
                  <div class="flex-1 w-full min-w-0 space-y-4 md:order-2">
                    <div class="flex">
                      <nuxt-link to="" class="text-base font-medium text-gray-900 hover:underline dark:text-white">{{
                        item.title }}</nuxt-link>
                      <div class="flex justify-center text-end md:order-4 md:w-32 space-s-2 ms-auto">
                        <p class="text-base font-bold text-gray-900 dark:text-white">${{ item.price }}</p>
                        <p class="mt-0.5 text-sm text-gray-400 line-through dark:text-white" v-if="item.originalPrice">
                          ${{ item.originalPrice }}</p>
                      </div>
                    </div>

                    <div class="flex space-s-2">
                      <p class="text-[13px] italic text-gray-600" v-if="item.categoryTitle">{{ item.categoryTitle }}</p>
                      <span class="text-[13px] italic text-gray-600" v-if="item.subCategoryTitle">/</span>
                      <p class="text-[13px] italic text-gray-600" v-if="item.subCategoryTitle">{{ item.subCategoryTitle
                        }}</p>
                    </div>
                    <div class="flex items-center gap-4">
                      <button type="button" @click="removeItem(item.docId)"
                        class="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                        <icon v-if="removingItem === item.docId" name="svg-spinners:6-dots-rotate" size="20px"
                          class="text-red-500" />
                        <icon name="material-symbols:close-small-rounded" class="w-5 h-5 me-0.5" v-else />
                        {{ $t('btn.remove') }}
                      </button>
                      <label for="counter-input" class="sr-only">Choose quantity:</label>
                      <div class="flex items-center justify-between md:order-3 md:justify-end ms-auto">
                        <div class="flex flex-col items-start md:order-3 md:justify-end">
                          <p class="text-lg font-normal ms-2">{{ $t('cart.quantity') }} <span
                              class="font-semibold text-blue-600">{{
                                item.quantity }}</span></p>
                          <div class="flex items-center mt-2 space-x-2">
                            <button type="button" @click="decrementQuantity(item)"
                              class="inline-flex items-center justify-center w-5 h-5 bg-gray-100 border border-gray-300 rounded-md shrink-0 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                              <icon name="ic:twotone-minus" class="w-3 h-3 text-gray-900 dark:text-white"
                                aria-hidden="true" />
                            </button>
                            <input type="number" v-model="quantity"
                              @change="updateQuantityInStore(item.id, item.quantity)"
                              class="text-sm font-medium text-center text-gray-900 bg-transparent border-0 w-14 shrink-0 focus:outline-none focus:ring-0 dark:text-white"
                              placeholder="1" />
                            <button type="button" @click="incrementQuantity(item)"
                              class="inline-flex items-center justify-center w-5 h-5 bg-gray-100 border border-gray-300 rounded-md shrink-0 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                              <icon name="ic:twotone-plus" class="w-3 h-3 text-gray-900 dark:text-white"
                                aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="p-4">
              <div class="flex items-center space-s-2">
                <icon name="solar:shield-bold-duotone" />
                <p class="m-0 text-gray-700">{{ $t('cart.secure_shopping_guarantee') }}</p>
              </div>
              <img src="https://justfields.com/storage/projects/7M5rV059/shield.jpg" class="mt-4">
            </div>

            <!-- social-media-sharing component -->
            <social-media-sharing />

            <!-- may-also-like -->
            <may-also-like />
          </div>

          <div class="flex-1 max-w-4xl mx-auto mt-6 space-y-6 lg:mt-0 lg:w-full">
            <div
              class="p-4 space-y-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
              <div class="text-center">
                <p class="text-xl font-semibold text-gray-900 dark:text-white">{{ $t('cart.subtotal') }}</p>
                <span class="text-xl font-semibold text-gray-900 dark:text-white">${{ totalAmount }}</span>
              </div>
              <div class="inline-flex items-center">
                <span
                  class="inline-flex items-center px-1.5 py-0.5 text-xs font-medium text-white rounded-full bg-[#03c083] ring-1 ring-inset ring-green-600/20">{{
                    $t('cart.note') }}</span>
                <p class="ms-2 text-[12px]">{{ $t('cart.additional_comments') }}</p>
              </div>
              <div class="col-span-full">
                <div class="mt-2">
                  <textarea id="comments" name="comments" rows="3"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6" />
                </div>
              </div>
              <nuxt-link to="/checkout" type="button"
                class="block w-full px-5 py-2 text-sm font-medium text-center text-white transition duration-300 bg-black border border-black rounded-md hover:bg-red-600 hover:text-white">{{
                  $t('btn.proceed_to_checkout') }}</nuxt-link>
            </div>

            <div
              class="p-4 space-y-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
              <form class="space-y-4">
                <p class="text-center text-[14px] font-medium">{{ $t('cart.get_shipping_estimates') }}</p>
                <div>
                  <label for="country" class="block font-medium text-gray-900 text-sm/6">{{ $t('form.country')
                    }}</label>
                  <div class="mt-2">
                    <select id="country" name="country" autocomplete="country-name" v-model="selectedCountry"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6">
                      <option v-for=" country in countriesData" :key="country.country" :value="country.country">
                        {{ country.country }}</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label for="province" class="block font-medium text-gray-900 text-sm/6">{{ $t('form.province')
                    }}</label>
                  <div class="mt-2">
                    <select id="province" name="province" autocomplete="province-name" v-model="selectedProvince"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6">
                      <option v-for="city in getCitiesForSelectedCountry" :key="city" :value="city">
                        {{ city }}</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label for="zip-code" class="block font-medium text-gray-900 text-sm/6">{{ $t('form.postal_zip_code')
                    }}</label>
                  <div class="mt-2">
                    <input id="zip-code" name="zip-code" type="text" autocomplete="zip-code"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6" />
                  </div>
                </div>
                <nuxt-link to="" type="submit"
                  class="block w-full px-5 py-2 text-sm font-medium text-center text-black transition duration-300 bg-white border border-black rounded-md hover:bg-black hover:text-white">
                  {{ $t('btn.calculate_shipping') }}
                </nuxt-link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cartStore';
import dataBase from '@/assets/countries.json';

const countriesData = ref(dataBase);
const selectedCountry = ref(null);
const selectedProvince = ref(null);

const getCitiesForSelectedCountry = computed(() => {
  const selected = countriesData.value.find(country => country.country === selectedCountry.value);
  return selected ? selected.cities : [];
});

const cartStore = useCartStore();
const removingItem = ref(null);

const removeItem = async (docId) => {
  if (!docId) {
    console.error("No docId provided for removal.");
    return;
  }
  try {
    removingItem.value = docId;
    await cartStore.removeFromCart(docId);
    setTimeout(() => {
      removingItem.value = null;
    }, 3000);
  } catch (error) {
    console.error("Error removing item:", error);
  }
};

onMounted(async () => {
  await cartStore.fetchCart();
});

const totalAmount = computed(() => {
  return cartStore.cart.reduce((total, item) => {
    return total + (parseFloat(item.price) * item.quantity);
  }, 0).toFixed(2);
});

const quantity = ref(1);

const incrementQuantity = (item) => {
  item.quantity++;
  updateQuantityInStore(item.productId, item.quantity);
};

const decrementQuantity = (item) => {
  if (item.quantity > 1) {
    item.quantity--;
    updateQuantityInStore(item.productId, item.quantity);
  }
};

const updateQuantityInStore = async (productId, newQuantity) => {
  if (productId) {
    await cartStore.updateQuantityInCart(productId, newQuantity);
  }
};
</script>