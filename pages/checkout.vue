<template>
  <div>
    <section class="py-8 antialiased bg-white dark:bg-gray-900 md:py-16">
      <form action="#" class="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <ol
          class="flex items-center w-full max-w-2xl text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
          <li
            class="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
            <span
              class="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
              <icon name="material-symbols:check-circle-outline-rounded" class="w-4 h-4 me-2 sm:h-5 sm:w-5"
                aria-hidden="true" />
              Cart
            </span>
          </li>

          <li
            class="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
            <span
              class="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
              <icon name="material-symbols:check-circle-outline-rounded" class="w-4 h-4 me-2 sm:h-5 sm:w-5"
                aria-hidden="true" />
              Checkout
            </span>
          </li>

          <li class="flex items-center shrink-0">
            <icon name="material-symbols:check-circle-outline-rounded" class="w-4 h-4 me-2 sm:h-5 sm:w-5"
              aria-hidden="true" />
            Order summary
          </li>
        </ol>

        <div class="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
          <div class="flex-1 min-w-0 space-y-8">
            <div class="space-y-4">
              <h2 class="text-xl font-semibold text-gray-900 dark:text-white">Delivery Details</h2>
              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label for="your_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Your name
                  </label>
                  <input type="text" id="your_name"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    placeholder="Bonnie Green" required />
                </div>

                <div>
                  <label for="your_email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Your
                    email <span class="text-red-500">*</span>
                  </label>
                  <input type="email" id="your_email"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    placeholder="name@flowbite.com" required />
                </div>

                <div>
                  <div class="flex items-center gap-2 mb-2">
                    <label for="select-country-input-3" class="block text-sm font-medium text-gray-900 dark:text-white">
                      Country <span class="text-red-500">*</span>
                    </label>
                  </div>
                  <select id="select-country-input-3"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                    <option selected>United States</option>
                    <option value="AS">Australia</option>
                    <option value="FR">France</option>
                    <option value="ES">Spain</option>
                    <option value="UK">United Kingdom</option>
                  </select>
                </div>

                <div>
                  <div class="flex items-center gap-2 mb-2">
                    <label for="select-city-input-3" class="block text-sm font-medium text-gray-900 dark:text-white">
                      City <span class="text-red-500">*</span></label>
                  </div>
                  <select id="select-city-input-3"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                    <option selected>San Francisco</option>
                    <option value="NY">New York</option>
                    <option value="LA">Los Angeles</option>
                    <option value="CH">Chicago</option>
                    <option value="HU">Houston</option>
                  </select>
                </div>

                <div>
                  <label for="phone-input-3" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Phone
                    Number <span class="text-red-500">*</span>
                  </label>
                  <div class="flex items-center">
                    <button id="dropdown-phone-button-3" data-dropdown-toggle="dropdown-phone-3"
                      class="z-10 inline-flex shrink-0 items-center rounded-s-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                      type="button">
                      <icon name="cif:us" class="w-[19.5px] h-[14px] me-2" aria-hidden="true" />
                      +1
                      <icon name="material-symbols:keyboard-arrow-down-rounded" class="-me-0.5 ms-2 h-5 w-5"
                        aria-hidden="true" />
                    </button>
                    <div id="dropdown-phone-3"
                      class="z-10 hidden w-56 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
                      <ul class="p-2 text-sm font-medium text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdown-phone-button-2">
                        <li>
                          <button type="button"
                            class="inline-flex w-full px-3 py-2 text-sm text-gray-500 rounded-md hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem">
                            <span class="inline-flex items-center">
                              <icon name="cif:us" class="w-[19.5px] h-[14px] me-2" aria-hidden="true" />
                              United States (+1)
                            </span>
                          </button>
                        </li>
                        <li>
                          <button type="button"
                            class="inline-flex w-full px-3 py-2 text-sm text-gray-500 rounded-md hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem">
                            <span class="inline-flex items-center">
                              <icon name="twemoji:flag-for-flag-united-kingdom" class="w-[19.5px] h-[14px] me-2"
                                aria-hidden="true" />
                              United Kingdom (+44)
                            </span>
                          </button>
                        </li>
                        <li>
                          <button type="button"
                            class="inline-flex w-full px-3 py-2 text-sm text-gray-500 rounded-md hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem">
                            <span class="inline-flex items-center">
                              <icon name="flagpack:au" class="w-[19.5px] h-[14px] me-2" aria-hidden="true" />
                              Australia (+61)
                            </span>
                          </button>
                        </li>
                        <li>
                          <button type="button"
                            class="inline-flex w-full px-3 py-2 text-sm text-gray-500 rounded-md hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem">
                            <span class="inline-flex items-center">
                              <icon name="flagpack:de" class="w-[19.5px] h-[14px] me-2" aria-hidden="true" />
                              Germany (+49)
                            </span>
                          </button>
                        </li>
                        <li>
                          <button type="button"
                            class="inline-flex w-full px-3 py-2 text-sm text-gray-500 rounded-md hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem">
                            <span class="inline-flex items-center">
                              <icon name="flagpack:fr" class="w-[19.5px] h-[14px] me-2" aria-hidden="true" />
                              France (+33)
                            </span>
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div class="relative w-full">
                      <input type="text" id="phone-input"
                        class="z-20 block w-full rounded-e-lg border border-s-0 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:border-s-gray-700  dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" required />
                    </div>
                  </div>
                </div>

                <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Email</label>
                  <input type="email" id="email"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    placeholder="name@flowbite.com" required />
                </div>

                <div>
                  <label for="company_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Company name
                  </label>
                  <input type="text" id="company_name"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    placeholder="Flowbite LLC" required />
                </div>

                <div>
                  <label for="vat_number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> VAT
                    number
                  </label>
                  <input type="text" id="vat_number"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    placeholder="DE42313253" required />
                </div>

                <div class="sm:col-span-2">
                  <button type="submit"
                    class="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
                    <icon name="ic:baseline-plus" class="w-5 h-5" aria-hidden="true" />
                    Add new address
                  </button>
                </div>
              </div>
            </div>

            <div class="space-y-4">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Payment</h3>
              <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div
                  class="p-4 border border-gray-200 rounded-lg bg-gray-50 ps-4 dark:border-gray-700 dark:bg-gray-800">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input id="credit-card" aria-describedby="credit-card-text" type="radio" name="payment-method"
                        value=""
                        class="w-4 h-4 bg-white border-gray-300 text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                        checked />
                    </div>
                    <div class="text-sm ms-4">
                      <label for="credit-card" class="font-medium leading-none text-gray-900 dark:text-white"> Credit
                        Card
                      </label>
                      <p id="credit-card-text" class="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400">Pay
                        with
                        your credit card</p>
                    </div>
                  </div>
                  <div class="flex items-center gap-2 mt-4">
                    <button type="button"
                      class="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Delete</button>
                    <div class="w-px h-3 bg-gray-200 shrink-0 dark:bg-gray-700"></div>
                    <button type="button"
                      class="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Edit</button>
                  </div>
                </div>

                <div
                  class="p-4 border border-gray-200 rounded-lg bg-gray-50 ps-4 dark:border-gray-700 dark:bg-gray-800">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input id="pay-on-delivery" aria-describedby="pay-on-delivery-text" type="radio"
                        name="payment-method" value=""
                        class="w-4 h-4 bg-white border-gray-300 text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                    </div>
                    <div class="text-sm ms-4">
                      <label for="pay-on-delivery" class="font-medium leading-none text-gray-900 dark:text-white">
                        Payment on
                        delivery </label>
                      <p id="pay-on-delivery-text" class="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400">
                        +$15
                        payment processing fee</p>
                    </div>
                  </div>
                  <div class="flex items-center gap-2 mt-4">
                    <button type="button"
                      class="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Delete</button>
                    <div class="w-px h-3 bg-gray-200 shrink-0 dark:bg-gray-700"></div>
                    <button type="button"
                      class="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Edit</button>
                  </div>
                </div>

                <div
                  class="p-4 border border-gray-200 rounded-lg bg-gray-50 ps-4 dark:border-gray-700 dark:bg-gray-800">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input id="paypal-2" aria-describedby="paypal-text" type="radio" name="payment-method" value=""
                        class="w-4 h-4 bg-white border-gray-300 text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                    </div>
                    <div class="text-sm ms-4">
                      <label for="paypal-2" class="font-medium leading-none text-gray-900 dark:text-white"> Paypal
                        account </label>
                      <p id="paypal-text" class="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400">Connect to
                        your account</p>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-4">
                    <button type="button"
                      class="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Delete</button>
                    <div class="w-px h-3 bg-gray-200 shrink-0 dark:bg-gray-700"></div>
                    <button type="button"
                      class="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Edit</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="space-y-4">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Delivery Methods</h3>
              <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div
                  class="p-4 border border-gray-200 rounded-lg bg-gray-50 ps-4 dark:border-gray-700 dark:bg-gray-800">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input id="dhl" aria-describedby="dhl-text" type="radio" name="delivery-method" value=""
                        class="w-4 h-4 bg-white border-gray-300 text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                        checked />
                    </div>
                    <div class="text-sm ms-4">
                      <label for="dhl" class="font-medium leading-none text-gray-900 dark:text-white">
                        $15 - DHL Fast Delivery </label>
                      <p id="dhl-text" class="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400">Get it by
                        Tomorrow</p>
                    </div>
                  </div>
                </div>

                <div
                  class="p-4 border border-gray-200 rounded-lg bg-gray-50 ps-4 dark:border-gray-700 dark:bg-gray-800">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input id="fedex" aria-describedby="fedex-text" type="radio" name="delivery-method" value=""
                        class="w-4 h-4 bg-white border-gray-300 text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                    </div>
                    <div class="text-sm ms-4">
                      <label for="fedex" class="font-medium leading-none text-gray-900 dark:text-white"> Free
                        Delivery - FedEx </label>
                      <p id="fedex-text" class="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400">Get it by
                        Friday, 13 Dec 2023</p>
                    </div>
                  </div>
                </div>

                <div
                  class="p-4 border border-gray-200 rounded-lg bg-gray-50 ps-4 dark:border-gray-700 dark:bg-gray-800">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input id="express" aria-describedby="express-text" type="radio" name="delivery-method" value=""
                        class="w-4 h-4 bg-white border-gray-300 text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                    </div>
                    <div class="text-sm ms-4">
                      <label for="express" class="font-medium leading-none text-gray-900 dark:text-white"> $49 -
                        Express Delivery </label>
                      <p id="express-text" class="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400">Get it
                        today</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label for="voucher" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Enter
                a gift card, voucher or promotional code </label>
              <div class="flex items-center max-w-md gap-4">
                <input type="text" id="voucher"
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  placeholder="" required />
                <button type="button"
                  class="flex items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Apply</button>
              </div>
            </div>
          </div>

          <div class="w-full mt-6 space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
            <div class="flow-root">
              <div class="-my-3 divide-y divide-gray-200 dark:divide-gray-800">
                <dl class="flex items-center justify-between gap-4 py-3">
                  <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Subtotal</dt>
                  <dd class="text-base font-medium text-gray-900 dark:text-white">$8,094.00</dd>
                </dl>
                <dl class="flex items-center justify-between gap-4 py-3">
                  <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Savings</dt>
                  <dd class="text-base font-medium text-green-500">0</dd>
                </dl>
                <dl class="flex items-center justify-between gap-4 py-3">
                  <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Store Pickup</dt>
                  <dd class="text-base font-medium text-gray-900 dark:text-white">$99</dd>
                </dl>
                <dl class="flex items-center justify-between gap-4 py-3">
                  <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Tax</dt>
                  <dd class="text-base font-medium text-gray-900 dark:text-white">$199</dd>
                </dl>
                <dl class="flex items-center justify-between gap-4 py-3">
                  <dt class="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                  <dd class="text-base font-bold text-gray-900 dark:text-white">$8,392.00</dd>
                </dl>
              </div>
            </div>

            <div class="space-y-3">
              <nuxt-link to="/payment" type="submit"
                class="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Proceed
                to Payment</nuxt-link>
              <p class="text-sm font-normal text-gray-500 dark:text-gray-400">One or more items in your cart
                require an account.
                <nuxt-link to="" title=""
                  class="font-medium underline text-primary-700 hover:no-underline dark:text-primary-500">Sign
                  in or create an account now.</nuxt-link>
              </p>
            </div>
          </div>
        </div>
      </form>
    </section>
  </div>
</template>

<script setup>

</script>