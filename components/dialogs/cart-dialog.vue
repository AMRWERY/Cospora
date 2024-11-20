<template>
  <div>
    <div class="p-4 space-y-4">
      <p class="text-[13px] text-center text-gray-800">Your cart is currently empty.</p>
      <button type="button"
        class="block w-full px-5 py-2 text-sm font-medium text-black transition duration-300 bg-white border border-black rounded-md hover:bg-black hover:text-white">
        Continue Shopping
      </button>
    </div>

    <div>
      <div class="max-w-md mx-auto">
        <div class="px-4 py-6 sm:px-8 sm:py-10">
          <div class="flow-root">
            <ul class="-my-8">
              <li class="flex flex-col py-6 space-y-3 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                <div class="relative shrink-0">
                  <span
                    class="absolute flex items-center justify-center w-6 h-6 text-sm font-medium text-gray-500 bg-white border rounded-full shadow top-1 left-1 sm:-top-2 sm:-right-2">1</span>
                  <img class="object-cover w-24 h-24 max-w-full rounded-lg"
                    src="https://images.unsplash.com/photo-1588484628369-dd7a85bfdc38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNuZWFrZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=150&q=60" />
                </div>
                <div class="relative flex flex-col justify-between flex-1">
                  <div class="sm:col-gap-5 sm:grid sm:grid-cols-2">
                    <div class="pr-8 sm:pr-5">
                      <p class="text-base font-semibold text-gray-900">
                        Nike Air Max 2019
                      </p>
                      <p class="mx-0 mt-1 mb-0 text-sm text-gray-400">
                        36EU - 4US
                      </p>
                      <div class="flex items-center space-s-1">
                        <span class="text-sm font-medium text-gray-600 shrink-0">1</span>
                        <span class="text-sm font-medium text-gray-600 shrink-0">x</span>
                        <p class="text-base font-semibold text-gray-900 shrink-0 sm:order-2">
                          $1259.00
                        </p>
                      </div>
                    </div>
                    <div class="flex items-end justify-between mt-4 sm:mt-0 sm:items-start sm:justify-end">
                      <button type="button"
                        class="flex text-center text-gray-500 transition-all duration-200 ease-in-out rounded focus:shadow hover:text-gray-900">
                        <icon name="ci:close-small" class="w-6 h-6" />
                      </button>
                    </div>
                  </div>
                </div>
              </li>

              <li class="flex flex-col py-6 space-y-3 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                <div class="relative shrink-0">
                  <span
                    class="absolute flex items-center justify-center w-6 h-6 text-sm font-medium text-gray-500 bg-white border rounded-full shadow top-1 left-1 sm:-top-2 sm:-right-2">1</span>
                  <img class="object-cover w-24 h-24 max-w-full rounded-lg"
                    src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=150&q=60" />
                </div>
                <div class="relative flex flex-col justify-between flex-1">
                  <div class="sm:col-gap-5 sm:grid sm:grid-cols-2">
                    <div class="pr-8 sm:pr-5">
                      <p class="text-base font-semibold text-gray-900">
                        Nike Air Max 2019
                      </p>
                      <p class="mx-0 mt-1 mb-0 text-sm text-gray-400">
                        36EU - 4US
                      </p>
                      <div class="flex items-center space-s-1">
                        <span class="text-sm font-medium text-gray-600 shrink-0">2</span>
                        <span class="text-sm font-medium text-gray-600 shrink-0">x</span>
                        <p class="text-base font-semibold text-gray-900 shrink-0 sm:order-2">
                          $1259.00
                        </p>
                      </div>
                    </div>
                    <div class="flex items-end justify-between mt-4 sm:mt-0 sm:items-start sm:justify-end">
                      <button type="button"
                        class="flex text-center text-gray-500 transition-all duration-200 ease-in-out rounded focus:shadow hover:text-gray-900">
                        <icon name="ci:close-small" class="w-6 h-6" />
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div class="py-8 mt-6 space-y-3 border-t border-b">
            <div class="flex items-center justify-between">
              <p class="font-semibold text-gray-800">Total</p>
              <p class="text-lg font-semibold text-gray-900">$2399.00</p>
            </div>
            <div class="flex items-center">
              <input type="checkbox" class="text-indigo-600 border-gray-300 rounded size-4" />
              <label for="" class="flex-1 min-w-0 text-[14px] text-gray-700 ms-3">I agree with the terms and
                conditions</label>
            </div>
          </div>

          <div class="space-y-3">
            <nuxt-link to="/checkout" type="button"
              class="flex items-center justify-center w-full px-5 py-2 text-sm font-medium text-white transition duration-300 border rounded-md bg-rose-500">
              Checkout Now
              <icon name="ci:arrow-right-md" class="w-5 h-5 transition-all ms-2" />
            </nuxt-link>
            <nuxt-link to="/shopping-cart" type="button"
              class="block w-full px-5 py-2 text-sm font-medium text-center text-black transition duration-300 bg-white border border-black rounded-md hover:bg-black hover:text-white">
              View Cart
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>