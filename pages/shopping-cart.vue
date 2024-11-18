<template>
  <div>
    <breadcrumb />

    <section class="py-8 antialiased bg-white dark:bg-gray-900 md:py-16">
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
            <div class="hidden xl:mt-8 xl:block">
              <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">People also bought</h3>
              <div class="grid grid-cols-3 gap-4 mt-6 sm:mt-8">
                <div
                  class="p-6 space-y-6 overflow-hidden bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
                  <nuxt-link to="" class="overflow-hidden rounded">
                    <img class="mx-auto h-44 w-44 dark:hidden"
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" />
                    <img class="hidden mx-auto h-44 w-44 dark:block"
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg" />
                  </nuxt-link>
                  <div>
                    <nuxt-link to=""
                      class="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">iMac
                      27”</nuxt-link>
                    <p class="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">This generation has some
                      improvements, including a longer continuous battery life.</p>
                  </div>
                  <div>
                    <p class="text-lg font-bold text-gray-900 dark:text-white">
                      <span class="line-through"> $399,99 </span>
                    </p>
                    <p class="text-lg font-bold leading-tight text-red-600 dark:text-red-500">$299</p>
                  </div>
                  <div class="mt-6 flex items-center gap-2.5">
                    <button data-tooltip-target="favourites-tooltip-1" type="button"
                      class="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
                      <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"></path>
                      </svg>
                    </button>
                    <div id="favourites-tooltip-1" role="tooltip"
                      class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                      Add to favourites
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                    <button type="button"
                      class="inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium  text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                      <svg class="w-5 h-5 -ms-2 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                        height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4" />
                      </svg>
                      Add to cart
                    </button>
                  </div>
                </div>
                <div
                  class="p-6 space-y-6 overflow-hidden bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
                  <nuxt-link to="" class="overflow-hidden rounded">
                    <img class="mx-auto h-44 w-44 dark:hidden"
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-light.svg" />
                    <img class="hidden mx-auto h-44 w-44 dark:block"
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-dark.svg" />
                  </nuxt-link>
                  <div>
                    <nuxt-link to=""
                      class="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">Playstation
                      5</nuxt-link>
                    <p class="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">This generation has some
                      improvements, including a longer continuous battery life.</p>
                  </div>
                  <div>
                    <p class="text-lg font-bold text-gray-900 dark:text-white">
                      <span class="line-through"> $799,99 </span>
                    </p>
                    <p class="text-lg font-bold leading-tight text-red-600 dark:text-red-500">$499</p>
                  </div>
                  <div class="mt-6 flex items-center gap-2.5">
                    <button data-tooltip-target="favourites-tooltip-2" type="button"
                      class="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
                      <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"></path>
                      </svg>
                    </button>
                    <div id="favourites-tooltip-2" role="tooltip"
                      class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                      Add to favourites
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                    <button type="button"
                      class="inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium  text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                      <svg class="w-5 h-5 -ms-2 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                        height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4" />
                      </svg>
                      Add to cart
                    </button>
                  </div>
                </div>
                <div
                  class="p-6 space-y-6 overflow-hidden bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
                  <nuxt-link to="" class="overflow-hidden rounded">
                    <img class="mx-auto h-44 w-44 dark:hidden"
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg" />
                    <img class="hidden mx-auto h-44 w-44 dark:block"
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-dark.svg" />
                  </nuxt-link>
                  <div>
                    <nuxt-link to=""
                      class="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">Apple
                      Watch Series 8</nuxt-link>
                    <p class="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">This generation has some
                      improvements, including a longer continuous battery life.</p>
                  </div>
                  <div>
                    <p class="text-lg font-bold text-gray-900 dark:text-white">
                      <span class="line-through"> $1799,99 </span>
                    </p>
                    <p class="text-lg font-bold leading-tight text-red-600 dark:text-red-500">$1199</p>
                  </div>
                  <div class="mt-6 flex items-center gap-2.5">
                    <button data-tooltip-target="favourites-tooltip-3" type="button"
                      class="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
                      <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"></path>
                      </svg>
                    </button>
                    <div id="favourites-tooltip-3" role="tooltip"
                      class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                      Add to favourites
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>

                    <button type="button"
                      class="inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium  text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                      <svg class="w-5 h-5 -ms-2 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                        height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4" />
                      </svg>
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
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
                  <label for="voucher" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Do you have
                    a voucher or gift card? </label>
                  <input type="text" id="voucher"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    placeholder="" required />
                </div>
                <button type="submit"
                  class="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Apply
                  Code</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>

</script>