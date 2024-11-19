<template>
  <div>
    <breadcrumb />

    <section class="py-8 dark:bg-gray-900 md:py-7">
      <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <div class="flex items-center justify-between">
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Your Cart</h2>
          <nuxt-link to="" class="inline-flex items-center text-sm cursor-pointer hover:underline">
            Continue Shopping
            <icon name="material-symbols:keyboard-arrow-right" class="w-4 h-4 mt-0.5" />
          </nuxt-link>
        </div>

        <div class="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <div class="flex-none w-full mx-auto lg:max-w-2xl xl:max-w-4xl">
            <div class="space-y-6">
              <div
                class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                <div class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                  <nuxt-link to="" class="shrink-0 md:order-1">
                    <img class="w-20 h-20 dark:hidden"
                      src="https://justfields.com/storage/projects/7M5rV059/cart-01.jpg" />
                  </nuxt-link>
                  <label for="counter-input" class="sr-only">Choose quantity:</label>
                  <div class="flex items-center justify-between md:order-3 md:justify-end">
                    <div class="flex items-center">
                      <button type="button" id="decrement-button" data-input-counter-decrement="counter-input"
                        class="inline-flex items-center justify-center w-5 h-5 bg-gray-100 border border-gray-300 rounded-md shrink-0 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                        <icon name="ic:twotone-minus" class="w-3 h-3 text-gray-900 dark:text-white"
                          aria-hidden="true" />
                      </button>
                      <input type="text" id="counter-input" data-input-counter
                        class="w-10 text-sm font-medium text-center text-gray-900 bg-transparent border-0 shrink-0 focus:outline-none focus:ring-0 dark:text-white"
                        placeholder="" value="2" required />
                      <button type="button" id="increment-button" data-input-counter-increment="counter-input"
                        class="inline-flex items-center justify-center w-5 h-5 bg-gray-100 border border-gray-300 rounded-md shrink-0 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                        <icon name="ic:twotone-plus" class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" />
                      </button>
                    </div>
                    <div class="text-end md:order-4 md:w-32">
                      <p class="text-base font-bold text-gray-900 dark:text-white">$33.15</p>
                    </div>
                  </div>
                  <div class="flex-1 w-full min-w-0 space-y-4 md:order-2 md:max-w-md">
                    <nuxt-link to=""
                      class="text-base font-medium text-gray-900 hover:underline dark:text-white">Ainterdum pretium de
                      milancelos dincidunts</nuxt-link>
                    <p class="text-[13px] italic text-gray-600">DarkGray / XS / Strap</p>
                    <p class="text-[13px] italic text-gray-600">Chanel</p>
                    <div class="flex items-center gap-4">
                      <button type="button"
                        class="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white">
                        <icon name="material-symbols:add-shopping-cart" class="w-5 h-5 me-0.5" aria-hidden="true" />
                        Update Cart
                      </button>
                      <button type="button"
                        class="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                        <icon name="material-symbols:close-small-rounded" class="w-5 h-5 me-0.5" aria-hidden="true" />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                <div class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                  <nuxt-link to="" class="shrink-0 md:order-1">
                    <img class="w-20 h-20 dark:hidden"
                      src="https://justfields.com/storage/projects/7M5rV059/cart-02.jpg" />
                  </nuxt-link>
                  <label for="counter-input" class="sr-only">Choose quantity:</label>
                  <div class="flex items-center justify-between md:order-3 md:justify-end">
                    <div class="flex items-center">
                      <button type="button" id="decrement-button" data-input-counter-decrement="counter-input"
                        class="inline-flex items-center justify-center w-5 h-5 bg-gray-100 border border-gray-300 rounded-md shrink-0 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                        <icon name="ic:twotone-minus" class="w-3 h-3 text-gray-900 dark:text-white"
                          aria-hidden="true" />
                      </button>
                      <input type="text" id="counter-input" data-input-counter
                        class="w-10 text-sm font-medium text-center text-gray-900 bg-transparent border-0 shrink-0 focus:outline-none focus:ring-0 dark:text-white"
                        placeholder="" value="3" required />
                      <button type="button" id="increment-button" data-input-counter-increment="counter-input"
                        class="inline-flex items-center justify-center w-5 h-5 bg-gray-100 border border-gray-300 rounded-md shrink-0 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                        <icon name="ic:twotone-plus" class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" />
                      </button>
                    </div>
                    <div class="text-end md:order-4 md:w-32">
                      <p class="text-base font-bold text-gray-900 dark:text-white">$66.30</p>
                    </div>
                  </div>
                  <div class="flex-1 w-full min-w-0 space-y-4 md:order-2 md:max-w-md">
                    <nuxt-link to=""
                      class="text-base font-medium text-gray-900 hover:underline dark:text-white">Ainterdum pretium de
                      milancelos dincidunts</nuxt-link>
                    <p class="text-[13px] italic text-gray-600">Bisque / S</p>
                    <p class="text-[13px] italic text-gray-600">Chanel</p>
                    <div class="flex items-center gap-4">
                      <button type="button"
                        class="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white">
                        <icon name="material-symbols:add-shopping-cart" class="w-5 h-5 me-0.5" aria-hidden="true" />
                        Update Cart
                      </button>
                      <button type="button"
                        class="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                        <icon name="material-symbols:close-small-rounded" class="w-5 h-5 me-0.5" aria-hidden="true" />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="p-4">
              <div class="flex items-center space-x-2">
                <icon name="solar:shield-bold-duotone" />
                <p class="m-0 text-gray-700">Secure Shopping Guarantee.</p>
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
                <p class="text-xl font-semibold text-gray-900 dark:text-white">Subtotal</p>
                <span class="text-xl font-semibold text-gray-900 dark:text-white">$99.45</span>
              </div>
              <div class="inline-flex items-center">
                <span
                  class="inline-flex items-center px-1.5 py-0.5 text-xs font-medium text-white rounded-full bg-[#03c083] ring-1 ring-inset ring-green-600/20">Note</span>
                <p class="ms-2 text-[12px]">Additional comments</p>
              </div>
              <div class="col-span-full">
                <div class="mt-2">
                  <textarea id="comments" name="comments" rows="3"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6" />
                </div>
                <div class="flex items-center mt-3">
                  <input type="checkbox" class="text-indigo-600 border-gray-300 rounded size-4" />
                  <label for="" class="flex-1 min-w-0 text-[12px] text-gray-700 ms-3">I agree with the terms and
                    conditions</label>
                </div>
              </div>
              <nuxt-link to="" type="button"
                class="block w-full px-5 py-2 text-sm font-medium text-center text-white transition duration-300 bg-black border border-black rounded-md hover:bg-red-600 hover:text-white">Proceed
                to Checkout</nuxt-link>
            </div>

            <div
              class="p-4 space-y-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
              <form class="space-y-4">
                <p class="text-center text-[14px] font-medium">Get Shipping Estimates</p>
                <div>
                  <label for="country" class="block font-medium text-gray-900 text-sm/6">Country</label>
                  <div class="mt-2">
                    <select id="country" name="country" autocomplete="country-name" v-model="selectedCountry"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"">
                      <option v-for=" country in countriesData" :key="country.country" :value="country.country">
                      {{ country.country }}</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label for="province" class="block font-medium text-gray-900 text-sm/6">Province</label>
                  <div class="mt-2">
                    <select id="province" name="province" autocomplete="province-name" v-model="selectedProvince"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6">
                      <option v-for="city in getCitiesForSelectedCountry" :key="city" :value="city">
                        {{ city }}</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label for="zip-code" class="block font-medium text-gray-900 text-sm/6">Postal/Zip Code</label>
                  <div class="mt-2">
                    <input id="zip-code" name="zip-code" type="text" autocomplete="zip-code"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6" />
                  </div>
                </div>
                <nuxt-link to="" type="submit"
                  class="block w-full px-5 py-2 text-sm font-medium text-center text-black transition duration-300 bg-white border border-black rounded-md hover:bg-black hover:text-white">
                  Calculate Shipping
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
import dataBase from '@/assets/countries.json';

const countriesData = ref(dataBase);
const selectedCountry = ref(null);
const selectedProvince = ref(null);

const getCitiesForSelectedCountry = computed(() => {
  const selected = countriesData.value.find(country => country.country === selectedCountry.value);
  return selected ? selected.cities : [];
});
</script>