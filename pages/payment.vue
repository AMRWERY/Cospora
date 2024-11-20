<template>
  <div>
    <section class="py-8 antialiased bg-white dark:bg-gray-900 md:py-16">
      <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <div class="max-w-5xl mx-auto">
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Payment</h2>
          <div class="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12">
            <form action="#"
              class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 lg:max-w-xl lg:p-8">
              <div class="grid grid-cols-2 gap-4 mb-6">
                <div class="col-span-2 sm:col-span-1">
                  <label for="full_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Full name
                    (as displayed on card) <span class="text-red-500">*</span></label>
                  <input type="text" id="full_name"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    placeholder="Bonnie Green" required />
                </div>

                <div class="col-span-2 sm:col-span-1">
                  <label for="card-number-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Card
                    number <span class="text-red-500">*</span></label>
                  <input type="text" id="card-number-input"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pe-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    placeholder="xxxx-xxxx-xxxx-xxxx" pattern="^4[0-9]{12}(?:[0-9]{3})?$" required />
                </div>

                <div>
                  <label for="card-expiration-input"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Card
                    expiration <span class="text-red-500">*</span></label>
                  <div class="relative">
                    <div class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
                      <icon name="ic:baseline-calendar-month" class="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true" />
                    </div>
                    <input datepicker datepicker-format="mm/yy" id="card-expiration-input" type="text"
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-9 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      placeholder="12/23" required />
                  </div>
                </div>
                <div>
                  <label for="cvv-input"
                    class="flex items-center gap-1 mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    CVV <span class="text-red-500">*</span>
                    <button data-tooltip-target="cvv-desc" data-tooltip-trigger="hover"
                      class="text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white">
                      <icon name="flowbite:exclamation-circle-solid" class="w-4 h-4" aria-hidden="true" />
                    </button>
                    <div id="cvv-desc" role="tooltip"
                      class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                      The last 3 digits on back of card
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </label>
                  <input type="number" id="cvv-input" aria-describedby="helper-text-explanation"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    placeholder="•••" required />
                </div>
              </div>

              <button type="submit"
                class="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Pay
                now</button>
            </form>

            <div class="mt-6 grow sm:mt-8 lg:mt-0">
              <div
                class="p-6 space-y-4 border border-gray-100 rounded-lg bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
                <div class="space-y-2">
                  <dl class="flex items-center justify-between gap-4">
                    <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Original
                      price</dt>
                    <dd class="text-base font-medium text-gray-900 dark:text-white">$6,592.00</dd>
                  </dl>

                  <dl class="flex items-center justify-between gap-4">
                    <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Savings</dt>
                    <dd class="text-base font-medium text-green-500">-$299.00</dd>
                  </dl>

                  <dl class="flex items-center justify-between gap-4">
                    <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Store Pickup
                    </dt>
                    <dd class="text-base font-medium text-gray-900 dark:text-white">$99</dd>
                  </dl>

                  <dl class="flex items-center justify-between gap-4">
                    <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Tax</dt>
                    <dd class="text-base font-medium text-gray-900 dark:text-white">$799</dd>
                  </dl>
                </div>

                <dl class="flex items-center justify-between gap-4 pt-2 border-t border-gray-200 dark:border-gray-700">
                  <dt class="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                  <dd class="text-base font-bold text-gray-900 dark:text-white">$7,191.00</dd>
                </dl>
              </div>

              <div class="flex items-center justify-center gap-8 mt-6">
                <img class="w-auto h-8 dark:hidden"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal.svg" />
                <img class="hidden w-auto h-8 dark:flex"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal-dark.svg" />
                <img class="w-auto h-8 dark:hidden"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa.svg" />
                <img class="hidden w-auto h-8 dark:flex"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa-dark.svg" />
                <img class="w-auto h-8 dark:hidden"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard.svg" />
                <img class="hidden w-auto h-8 dark:flex"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard-dark.svg" />
              </div>
            </div>
          </div>

          <p class="mt-6 text-center text-gray-500 dark:text-gray-400 sm:mt-8 lg:text-left">
            Payment processed by
            <nuxt-link to="" title=""
              class="font-medium underline text-primary-700 hover:no-underline dark:text-primary-500">Paddle</nuxt-link>
            for
            <nuxt-link to="" title=""
              class="font-medium underline text-primary-700 hover:no-underline dark:text-primary-500">Cospora
              LLC</nuxt-link>
            - United States Of America
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>

</script>