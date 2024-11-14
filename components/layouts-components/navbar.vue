<template>
  <div>
    <div v-if="isNavVisible">
      <nav class="fixed top-0 left-0 right-0 py-1.5 flex justify-center z-50 whitespace-nowrap nav-img">
        <icon name="ci:close-sm" @click="isNavVisible = false" class="absolute text-white cursor-pointer right-4" />
        <p class="mt-0.5 text-sm text-white nav-title uppercase tracking-wider font-normal">
          Sale up to 70% off on selected items. End in: 00D.00H.00M.00S
        </p>
      </nav>
    </div>

    <HeadlessDisclosure as="nav" class="mt-10 bg-[#f7f7f7]" v-slot="{ open }">
      <div class="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <HeadlessDisclosureButton
              class="relative inline-flex items-center justify-center p-2 text-gray-400 rounded-md">
              <span class="absolute -inset-0.5" />
              <span class="sr-only">Open main menu</span>
              <icon name="heroicons-outline:menu" v-if="!open" class="block w-6 h-6" aria-hidden="true" />
              <icon name="heroicons-outline:x-mark" v-else class="block w-6 h-6" aria-hidden="true" />
            </HeadlessDisclosureButton>
          </div>
          <!-- Left Section - Currency Menu -->
          <div class="flex items-center justify-start flex-1">
            <HeadlessMenu as="div" class="relative hidden ml-3 sm:flex">
              <div class="flex items-center space-x-5">
                <!-- Currency Menu Button -->
                <HeadlessMenuButton class="relative flex items-center text-sm">
                  <span class="sr-only">Open currency menu</span>
                  <span class="flex items-center space-x-2">
                    <p class="text-xs">USD</p>
                    <icon name="ep:arrow-down" size="15px" />
                  </span>
                </HeadlessMenuButton>

                <!-- Find A Store Section -->
                <span class="flex items-center space-x-2">
                  <icon name="ep:location" size="30px" />
                  <p class="text-xs uppercase">Find A Store</p>
                </span>
              </div>
              <!-- Currency menu items -->
              <transition enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0">
                <HeadlessMenuItems
                  class="absolute left-0 z-10 w-32 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <HeadlessMenuItem v-slot="{ active }">
                    <nuxt-link to=""
                      :class="[active ? 'bg-gray-100 underline' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer']">
                      <span class="flex items-center space-x-2">
                        <icon name="flagpack:us" size="15px" />
                        <p class="text-xs">USD</p>
                      </span>
                    </nuxt-link>
                  </HeadlessMenuItem>
                  <HeadlessMenuItem v-slot="{ active }">
                    <nuxt-link to=""
                      :class="[active ? 'bg-gray-100 underline' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer']">
                      <span class="flex items-center space-x-2">
                        <icon name="flag:eu-4x3" size="15px" />
                        <p class="text-xs">EUR</p>
                      </span>
                    </nuxt-link>
                  </HeadlessMenuItem>
                  <HeadlessMenuItem v-slot="{ active }">
                    <nuxt-link to=""
                      :class="[active ? 'bg-gray-100 underline' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer']">
                      <span class="flex items-center space-x-2">
                        <icon name="flag:gb-4x3" size="15px" />
                        <p class="text-xs">GBP</p>
                      </span>
                    </nuxt-link>
                  </HeadlessMenuItem>
                  <HeadlessMenuItem v-slot="{ active }">
                    <nuxt-link to=""
                      :class="[active ? 'bg-gray-100 underline' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer']">
                      <span class="flex items-center space-x-2">
                        <icon name="flag:ro-4x3" size="15px" />
                        <p class="text-xs">CHF</p>
                      </span>
                    </nuxt-link>
                  </HeadlessMenuItem>
                </HeadlessMenuItems>
              </transition>
            </HeadlessMenu>
          </div>

          <!-- Middle Section - Cospora -->
          <div class="flex justify-center flex-1">
            <p class="text-3xl font-semibold uppercase opacity-100 max-h-7">Cospora</p>
          </div>

          <!-- Right Section - Notifications & Profile -->
          <div class="flex items-center justify-end flex-1 space-x-3">
            <HeadlessMenu as="div" class="relative ml-3">
              <HeadlessMenuButton class="relative flex items-center text-sm">
                <span class="sr-only">Open Sign In menu</span>
                <span class="flex items-center space-x-1">
                  <p class="text-xs uppercase whitespace-nowrap">Sign In</p>
                  <!-- `whitespace-nowrap` keeps it on one line -->
                  <icon name="ep:arrow-down" size="15px" />
                </span>
              </HeadlessMenuButton>
              <transition enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0">
                <HeadlessMenuItems
                  class="absolute left-0 z-10 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg w-80 ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <HeadlessMenuItem v-slot="{ active }">
                    <p>auth form</p>
                  </HeadlessMenuItem>
                </HeadlessMenuItems>
              </transition>
            </HeadlessMenu>

            <button type="button" class="relative hidden mt-1 text-gray-700 rounded-full sm:flex">
              <span class="absolute -inset-1.5" />
              <span class="sr-only">View wishlist</span>
              <icon name="clarity:heart-line" size="26px" />
            </button>

            <HeadlessMenu as="div" class="relative ml-3">
              <HeadlessMenuButton class="relative flex items-center text-sm">
                <span class="sr-only">Open Sign In menu</span>
                <span class="flex items-center space-x-1">
                  <div class="relative">
                    <span
                      class="absolute top-0 inline-flex items-center justify-center w-5 h-5 -mt-2 -mr-4 text-xs text-white bg-black rounded-full end-2">
                      0
                    </span>
                    <button type="button" class="relative mt-1 text-gray-700 rounded-full">
                      <span class="absolute -inset-1.5" />
                      <span class="sr-only">View cart</span>
                      <icon name="clarity:shopping-cart-line" size="26px" />
                    </button>
                  </div>
                </span>
              </HeadlessMenuButton>
              <transition enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0">
                <HeadlessMenuItems
                  class="absolute left-0 z-10 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg w-80 ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <HeadlessMenuItem>
                    <p>cart</p>
                  </HeadlessMenuItem>
                </HeadlessMenuItems>
              </transition>
            </HeadlessMenu>
            <div class="relative w-48 max-w-xs">
              <input type="text" placeholder="Search"
                class="w-48 py-2 pl-3 pr-10 ml-5 text-sm text-gray-700 placeholder-gray-400 border border-gray-300 rounded-md" />
              <icon name="heroicons:magnifying-glass" size="20px"
                class="absolute text-gray-500 transform -translate-y-1/2 -right-1 top-1/2" />
            </div>
          </div>
        </div>
      </div>
    </HeadlessDisclosure>
  </div>
</template>

<script setup>
const isNavVisible = ref(true)

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]
</script>