<template>
  <div>
    <div class="bg-white">
      <div>
        <!-- Mobile filter dialog -->
        <HeadlessTransitionRoot as="template" :show="mobileFiltersOpen">
          <HeadlessDialog class="relative z-50 lg:hidden" @close="mobileFiltersOpen = false">
            <HeadlessTransitionChild as="template" enter="transition-opacity ease-linear duration-300"
              enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300"
              leave-from="opacity-100" leave-to="opacity-0">
              <div class="fixed inset-0 bg-black/25" />
            </HeadlessTransitionChild>

            <div class="fixed inset-0 z-40 flex">
              <HeadlessTransitionChild as="template" enter="transition ease-in-out duration-300 transform"
                enter-from="translate-x-full" enter-to="translate-x-0"
                leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0"
                leave-to="translate-x-full">
                <HeadlessDialogPanel
                  class="relative flex flex-col max-w-xs py-4 pb-12 ml-auto overflow-y-auto bg-white shadow-xl size-full">
                  <div class="flex items-center justify-between px-4">
                    <h2 class="text-lg font-medium text-gray-900">Filters</h2>
                    <button type="button"
                      class="flex items-center justify-center p-2 -mr-2 text-gray-400 bg-white rounded-md size-10"
                      @click="mobileFiltersOpen = false">
                      <span class="sr-only">Close menu</span>
                      <icon name="material-symbols:close-small-outline-rounded" class="size-6" aria-hidden="true" />
                    </button>
                  </div>

                  <!-- Filters -->
                  <form class="border-t border-gray-200 ">
                    <h3 class="sr-only">Categories</h3>
                    <ul role="list" class="px-2 py-3 font-medium text-gray-900">
                      <li v-for="category in subCategories" :key="category.name">
                        <nuxt-link :to="category.route" class="block px-2 py-3">{{ category.name }}</nuxt-link>
                      </li>
                    </ul>

                    <HeadlessDisclosure as="div" class="px-4 py-6 border-b border-gray-200" v-slot="{ open }">
                      <h3 class="flow-root -my-3">
                        <HeadlessDisclosureButton
                          class="flex items-center justify-between w-full py-3 text-sm text-gray-400 bg-white hover:text-gray-500">
                          <span class="font-medium text-gray-900">Color</span>
                          <span class="flex items-center ml-6">
                            <icon name="flowbite:plus-outline" v-if="!open" class="size-5" aria-hidden="true" />
                            <icon name="system-uicons:minus" v-else class="size-5" aria-hidden="true" />
                          </span>
                        </HeadlessDisclosureButton>
                      </h3>
                      <HeadlessDisclosurePanel class="pt-6 ps-4">
                        <div class="flex flex-wrap gap-4 max-w-[220px]">
                          <button
                            class="border rounded-full border-black/100 hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-400">
                            <div class="w-6 h-6 bg-[#ffffcd] rounded-full"></div>
                          </button>
                          <button
                            class="border rounded-full border-black/100 hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-400">
                            <div class="w-6 h-6 bg-[#b59c80] rounded-full"></div>
                          </button>
                          <button
                            class="border rounded-full border-black/100 hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-400">
                            <div class="w-6 h-6 bg-white rounded-full"></div>
                          </button>
                          <button
                            class="border rounded-full border-black/100 hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-400">
                            <div class="w-6 h-6 bg-[#f53d7f] rounded-full"></div>
                          </button>
                          <button
                            class="border rounded-full border-black/100 hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-400">
                            <div class="w-6 h-6 bg-[#506cbb] rounded-full"></div>
                          </button>
                          <button
                            class="border rounded-full border-black/100 hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-400">
                            <div class="w-6 h-6 bg-[#232323] rounded-full"></div>
                          </button>
                          <button
                            class="border rounded-full border-black/100 hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-400">
                            <div class="w-6 h-6 bg-[#ff0100] rounded-full"></div>
                          </button>
                          <button
                            class="border rounded-full border-black/100 hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-400">
                            <div class="w-6 h-6 bg-[#e9e9e9] rounded-full"></div>
                          </button>
                        </div>
                      </HeadlessDisclosurePanel>
                    </HeadlessDisclosure>
                    <HeadlessDisclosure as="div" class="px-4 py-6 border-b border-gray-200" v-slot="{ open }">
                      <h3 class="flow-root -my-3">
                        <HeadlessDisclosureButton
                          class="flex items-center justify-between w-full py-3 text-sm text-gray-400 bg-white hover:text-gray-500">
                          <span class="font-medium text-gray-900">Size</span>
                          <span class="flex items-center ml-6">
                            <icon name="flowbite:plus-outline" v-if="!open" class="size-5" aria-hidden="true" />
                            <icon name="system-uicons:minus" v-else class="size-5" aria-hidden="true" />
                          </span>
                        </HeadlessDisclosureButton>
                      </h3>
                      <HeadlessDisclosurePanel class="pt-6 ps-4">
                        <div class="grid grid-cols-2 gap-4">
                          <div class="flex items-center">
                            <input id="size-xs" value="XS" type="checkbox"
                              class="text-indigo-600 border-gray-300 rounded size-4 focus:ring-indigo-500" />
                            <label for="size-xs" class="ml-3 text-sm text-gray-600">XS</label>
                          </div>
                          <div class="flex items-center">
                            <input id="size-sm" value="SM" type="checkbox"
                              class="text-indigo-600 border-gray-300 rounded size-4 focus:ring-indigo-500" />
                            <label for="size-sm" class="ml-3 text-sm text-gray-600">SM</label>
                          </div>
                          <div class="flex items-center">
                            <input id="size-m" value="M" type="checkbox"
                              class="text-indigo-600 border-gray-300 rounded size-4 focus:ring-indigo-500" />
                            <label for="size-m" class="ml-3 text-sm text-gray-600">M</label>
                          </div>
                          <div class="flex items-center">
                            <input id="size-l" value="L" type="checkbox"
                              class="text-indigo-600 border-gray-300 rounded size-4 focus:ring-indigo-500" />
                            <label for="size-l" class="ml-3 text-sm text-gray-600">L</label>
                          </div>
                          <div class="flex items-center">
                            <input id="size-2x" value="2X" type="checkbox"
                              class="text-indigo-600 border-gray-300 rounded size-4 focus:ring-indigo-500" />
                            <label for="size-2x" class="ml-3 text-sm text-gray-600">2X</label>
                          </div>
                        </div>
                      </HeadlessDisclosurePanel>
                    </HeadlessDisclosure>
                    <HeadlessDisclosure as="div" v-for="section in filters" :key="section.id"
                      class="px-4 py-6 border-t border-gray-200" v-slot="{ open }">
                      <h3 class="flow-root -mx-2 -my-3">
                        <HeadlessDisclosureButton
                          class="flex items-center justify-between w-full px-2 py-3 text-gray-400 bg-white hover:text-gray-500">
                          <span class="font-medium text-gray-900">{{ section.name }}</span>
                          <span class="flex items-center ml-6">
                            <icon name="flowbite:plus-outline" v-if="!open" class="size-5" aria-hidden="true" />
                            <icon name="system-uicons:minus" v-else class="size-5" aria-hidden="true" />
                          </span>
                        </HeadlessDisclosureButton>
                      </h3>
                      <HeadlessDisclosurePanel class="pt-6 ps-4">
                        <div class="space-y-6">
                          <div v-for="(option, optionIdx) in section.options" :key="option.value"
                            class="flex items-center">
                            <input :id="`filter-mobile-${section.id}-${optionIdx}`" :name="`${section.id}[]`"
                              :value="option.value" type="checkbox" :checked="option.checked"
                              class="text-indigo-600 border-gray-300 rounded size-4 focus:ring-indigo-500" />
                            <label :for="`filter-mobile-${section.id}-${optionIdx}`"
                              class="flex-1 min-w-0 ml-3 text-gray-500">{{ option.label }}</label>
                          </div>
                        </div>
                      </HeadlessDisclosurePanel>
                    </HeadlessDisclosure>
                  </form>
                </HeadlessDialogPanel>
              </HeadlessTransitionChild>
            </div>
          </HeadlessDialog>
        </HeadlessTransitionRoot>

        <!-- banner component -->
        <banner />

        <main class="px-4 mx-auto max-w-[1400px] sm:px-6 lg:px-8">
          <div class="flex items-baseline justify-between p-3 border-b border-gray-200 bg-[#f7f7f7]">
            <div class="flex items-center space-s-3">
              <p>View as</p>
              <button class="w-5 h-5" :class="{ 'text-black': view === 'grid', 'text-gray-500': view !== 'grid' }"
                @click="setView('grid')">
                <icon name="gridicons:grid" size="22px" />
              </button>
              <button class="w-5 h-5" :class="{ 'text-black': view === 'table', 'text-gray-500': view !== 'table' }"
                @click="setView('table')">
                <icon name="material-symbols:table-rows-narrow" size="22px" />
              </button>
            </div>
            <div class="flex items-center space-s-4">
              <HeadlessMenu as="div" class="relative inline-block text-left">
                <div>
                  <HeadlessMenuButton
                    class="inline-flex justify-center text-sm font-medium text-gray-700 group hover:text-gray-900">
                    Items per page
                    <icon name="ic:twotone-keyboard-arrow-down"
                      class="ml-1 -mr-1 text-gray-400 size-5 shrink-0 group-hover:text-gray-500" aria-hidden="true" />
                  </HeadlessMenuButton>
                </div>
                <transition enter-active-class="transition duration-100 ease-out"
                  enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                  leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
                  leave-to-class="transform scale-95 opacity-0">
                  <HeadlessMenuItems
                    class="absolute right-0 z-10 w-20 mt-2 origin-top-right bg-white rounded-md shadow-2xl ring-1 ring-black/5 focus:outline-none">
                    <div class="py-1">
                      <HeadlessMenuItem v-for="option in sortPagesOptions" :key="option.name" v-slot="{ active }">
                        <nuxt-link :to="option.route"
                          :class="[option.current ? 'font-medium text-gray-900' : 'text-gray-500', active ? 'bg-gray-100 outline-none' : '', 'block px-4 py-2 text-sm']">{{
                            option.name }}</nuxt-link>
                      </HeadlessMenuItem>
                    </div>
                  </HeadlessMenuItems>
                </transition>
              </HeadlessMenu>

              <HeadlessMenu as="div" class="relative inline-block text-left">
                <div>
                  <HeadlessMenuButton
                    class="inline-flex justify-center text-sm font-medium text-gray-700 group hover:text-gray-900">
                    Sort by
                    <icon name="ic:twotone-keyboard-arrow-down"
                      class="ml-1 -mr-1 text-gray-400 size-5 shrink-0 group-hover:text-gray-500" aria-hidden="true" />
                  </HeadlessMenuButton>
                </div>
                <transition enter-active-class="transition duration-100 ease-out"
                  enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                  leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
                  leave-to-class="transform scale-95 opacity-0">
                  <HeadlessMenuItems
                    class="absolute right-0 z-10 mt-2 origin-top-right bg-white rounded-md shadow-2xl w-44 ring-1 ring-black/5 focus:outline-none">
                    <div class="py-1">
                      <HeadlessMenuItem v-for="option in sortByOptions" :key="option.name" v-slot="{ active }">
                        <nuxt-link :to="option.route"
                          :class="[option.current ? 'font-medium text-gray-900' : 'text-gray-500', active ? 'bg-gray-100 outline-none' : '', 'block px-4 py-2 text-sm']">{{
                            option.name }}</nuxt-link>
                      </HeadlessMenuItem>
                    </div>
                  </HeadlessMenuItems>
                </transition>
              </HeadlessMenu>

              <button type="button" class="p-2 ml-4 -m-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                @click="mobileFiltersOpen = true">
                <span class="sr-only">Filters</span>
                <icon name="flowbite:filter-solid" class="size-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" class="pt-6 pb-24">
            <h2 id="products-heading" class="sr-only">Products</h2>
            <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              <!-- Filters -->
              <form class="hidden lg:block">
                <h3 class="mb-3 font-bold underline underline-offset-4">Categories</h3>
                <div class="sticky overflow-hidden top-16">
                  <HeadlessDisclosure as="div" class="py-6 border-b border-gray-200" v-slot="{ open }">
                    <h3 class="flow-root -my-3">
                      <HeadlessDisclosureButton
                        class="flex items-center justify-between w-full py-3 text-sm text-gray-400 bg-white hover:text-gray-500">
                        <span class="font-medium text-gray-900">Lorem Dorus</span>
                        <span class="flex items-center ml-6">
                          <icon name="flowbite:plus-outline" v-if="!open" class="size-5" aria-hidden="true" />
                          <icon name="system-uicons:minus" v-else class="size-5" aria-hidden="true" />
                        </span>
                      </HeadlessDisclosureButton>
                    </h3>
                    <HeadlessDisclosurePanel class="pt-6">
                      <div class="space-y-4">
                        <div class="flex items-center">
                          <input id="" value="" type="checkbox" checked
                            class="text-indigo-600 border-gray-300 rounded size-4 focus:ring-indigo-500" />
                          <label for="" class="ml-3 text-sm text-gray-600">Maecenas Commodos</label>
                        </div>
                        <div class="flex items-center">
                          <input id="" value="" type="checkbox"
                            class="text-indigo-600 border-gray-300 rounded size-4 focus:ring-indigo-500" />
                          <label for="" class="ml-3 text-sm text-gray-600">Melesuada</label>
                        </div>
                        <div class="flex items-center">
                          <input id="" value="" type="checkbox"
                            class="text-indigo-600 border-gray-300 rounded size-4 focus:ring-indigo-500" />
                          <label for="" class="ml-3 text-sm text-gray-600">Fermentum Loremous</label>
                        </div>
                        <div class="flex items-center">
                          <input id="" value="" type="checkbox"
                            class="text-indigo-600 border-gray-300 rounded size-4 focus:ring-indigo-500" />
                          <label for="" class="ml-3 text-sm text-gray-600">Habitasse Molateas</label>
                        </div>
                      </div>
                    </HeadlessDisclosurePanel>
                  </HeadlessDisclosure>
                  <ul role="list"
                    class="pb-6 mt-4 space-y-1 text-sm font-medium text-gray-900 border-b border-gray-200">
                    <li v-for="category in subCategories" :key="category.name">
                      <nuxt-link :to="category.route" class="cursor-pointer hover:underline">{{ category.name
                        }}</nuxt-link>
                    </li>
                  </ul>
                  <HeadlessDisclosure as="div" class="py-6 border-b border-gray-200" v-slot="{ open }">
                    <h3 class="flow-root -my-3">
                      <HeadlessDisclosureButton
                        class="flex items-center justify-between w-full py-3 text-sm text-gray-400 bg-white hover:text-gray-500">
                        <span class="font-medium text-gray-900">Color</span>
                        <span class="flex items-center ml-6">
                          <icon name="flowbite:plus-outline" v-if="!open" class="size-5" aria-hidden="true" />
                          <icon name="system-uicons:minus" v-else class="size-5" aria-hidden="true" />
                        </span>
                      </HeadlessDisclosureButton>
                    </h3>
                    <HeadlessDisclosurePanel class="pt-6 ps-4">
                      <div class="flex flex-wrap gap-4 max-w-[220px]">
                        <button
                          class="border rounded-full border-black/100 hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-400">
                          <div class="w-6 h-6 bg-[#ffffcd] rounded-full"></div>
                        </button>
                        <button
                          class="border rounded-full border-black/100 hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-400">
                          <div class="w-6 h-6 bg-[#b59c80] rounded-full"></div>
                        </button>
                        <button
                          class="border rounded-full border-black/100 hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-400">
                          <div class="w-6 h-6 bg-white rounded-full"></div>
                        </button>
                        <button
                          class="border rounded-full border-black/100 hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-400">
                          <div class="w-6 h-6 bg-[#f53d7f] rounded-full"></div>
                        </button>
                        <button
                          class="border rounded-full border-black/100 hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-400">
                          <div class="w-6 h-6 bg-[#506cbb] rounded-full"></div>
                        </button>
                        <button
                          class="border rounded-full border-black/100 hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-400">
                          <div class="w-6 h-6 bg-[#232323] rounded-full"></div>
                        </button>
                        <button
                          class="border rounded-full border-black/100 hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-400">
                          <div class="w-6 h-6 bg-[#ff0100] rounded-full"></div>
                        </button>
                        <button
                          class="border rounded-full border-black/100 hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-400">
                          <div class="w-6 h-6 bg-[#e9e9e9] rounded-full"></div>
                        </button>
                      </div>
                    </HeadlessDisclosurePanel>
                  </HeadlessDisclosure>
                  <HeadlessDisclosure as="div" class="py-6 border-b border-gray-200" v-slot="{ open }">
                    <h3 class="flow-root -my-3">
                      <HeadlessDisclosureButton
                        class="flex items-center justify-between w-full py-3 text-sm text-gray-400 bg-white hover:text-gray-500">
                        <span class="font-medium text-gray-900">Size</span>
                        <span class="flex items-center ml-6">
                          <icon name="flowbite:plus-outline" v-if="!open" class="size-5" aria-hidden="true" />
                          <icon name="system-uicons:minus" v-else class="size-5" aria-hidden="true" />
                        </span>
                      </HeadlessDisclosureButton>
                    </h3>
                    <HeadlessDisclosurePanel class="pt-6 ps-4">
                      <div class="grid grid-cols-2 gap-4">
                        <div class="flex items-center">
                          <input id="size-xs" value="XS" type="checkbox"
                            class="text-indigo-600 border-gray-300 rounded size-4 focus:ring-indigo-500" />
                          <label for="size-xs" class="ml-3 text-sm text-gray-600">XS</label>
                        </div>
                        <div class="flex items-center">
                          <input id="size-sm" value="SM" type="checkbox"
                            class="text-indigo-600 border-gray-300 rounded size-4 focus:ring-indigo-500" />
                          <label for="size-sm" class="ml-3 text-sm text-gray-600">SM</label>
                        </div>
                        <div class="flex items-center">
                          <input id="size-m" value="M" type="checkbox"
                            class="text-indigo-600 border-gray-300 rounded size-4 focus:ring-indigo-500" />
                          <label for="size-m" class="ml-3 text-sm text-gray-600">M</label>
                        </div>
                        <div class="flex items-center">
                          <input id="size-l" value="L" type="checkbox"
                            class="text-indigo-600 border-gray-300 rounded size-4 focus:ring-indigo-500" />
                          <label for="size-l" class="ml-3 text-sm text-gray-600">L</label>
                        </div>
                        <div class="flex items-center">
                          <input id="size-2x" value="2X" type="checkbox"
                            class="text-indigo-600 border-gray-300 rounded size-4 focus:ring-indigo-500" />
                          <label for="size-2x" class="ml-3 text-sm text-gray-600">2X</label>
                        </div>
                      </div>
                    </HeadlessDisclosurePanel>
                  </HeadlessDisclosure>
                  <HeadlessDisclosure as="div" v-for="section in filters" :key="section.id"
                    class="py-6 border-b border-gray-200" v-slot="{ open }">
                    <h3 class="flow-root -my-3">
                      <HeadlessDisclosureButton
                        class="flex items-center justify-between w-full py-3 text-sm text-gray-400 bg-white hover:text-gray-500">
                        <span class="font-medium text-gray-900">{{ section.name }}</span>
                        <span class="flex items-center ml-6">
                          <icon name="flowbite:plus-outline" v-if="!open" class="size-5" aria-hidden="true" />
                          <icon name="system-uicons:minus" v-else class="size-5" aria-hidden="true" />
                        </span>
                      </HeadlessDisclosureButton>
                    </h3>
                    <HeadlessDisclosurePanel class="pt-6 ps-4">
                      <div class="space-y-4">
                        <div v-for="(option, optionIdx) in section.options" :key="option.value"
                          class="flex items-center">
                          <input :id="`filter-${section.id}-${optionIdx}`" :name="`${section.id}[]`"
                            :value="option.value" type="checkbox" :checked="option.checked"
                            class="text-indigo-600 border-gray-300 rounded size-4 focus:ring-indigo-500" />
                          <label :for="`filter-${section.id}-${optionIdx}`" class="ml-3 text-sm text-gray-600">{{
                            option.label }}</label>
                        </div>
                      </div>
                    </HeadlessDisclosurePanel>
                  </HeadlessDisclosure>
                </div>
              </form>

              <!-- Product grid -->
              <div class="lg:col-span-3">
                <!-- Your content -->
                <products-cards :view="view"></products-cards>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
const sortPagesOptions = [
  { name: '12', route: '', current: true },
  { name: '16', route: '', current: false },
  { name: '20', route: '', current: false },
  { name: '24', route: '', current: false },
  { name: '30', route: '', current: false },
  { name: '50', route: '', current: false },
]

const sortByOptions = [
  { name: 'Featured', route: '', current: true },
  { name: 'Price, low to high', route: '', current: false },
  { name: 'Price, high to low', route: '', current: false },
  { name: 'Alphabetically, A-Z', route: '', current: false },
  { name: 'Alphabetically, Z-A', route: '', current: false },
  { name: 'Date, old to new', route: '', current: false },
  { name: 'Date, new to old', route: '', current: false },
  { name: 'Best Selling', route: '', current: false },
]

const subCategories = [
  { name: 'Milancelos', route: '' },
  { name: 'Cosmopolis', route: '' },
  { name: 'Nor Loremirus', route: '' },
  { name: 'Comos Milano', route: '' },
  { name: 'Dapibor', route: '' },
]

const filters = [
  {
    id: 'price',
    name: 'Price',
    options: [
      { value: 'less-than-100', label: 'Less than $1000.00', checked: false },
      { value: '100-200', label: '$100.00 - $200.00', checked: false },
      { value: '200-400', label: '$200.00 - $400.00', checked: true },
      { value: 'above-400', label: 'Above $400.00', checked: false },
    ],
  },
  {
    id: 'brand',
    name: 'Brand',
    options: [
      { value: 'anna', label: 'Anna', checked: false },
      { value: 'benjamin-button', label: 'Benjamin Button', checked: false },
      { value: 'burberry', label: 'Burberry', checked: false },
      { value: 'coco-lee', label: 'Coco Lee', checked: false },
      { value: 'cosmopolis', label: 'Cosmopolis', checked: false },
      { value: 'mango', label: 'Mango', checked: true },
    ],
  },
  {
    id: 'product-type',
    name: 'Product Type',
    options: [
      { value: 'dincidunteros', label: 'Dincidunteros', checked: false },
      { value: 'cosmopolis', label: 'Cosmopolis', checked: false },
      { value: 'solutmades', label: 'Solutmades', checked: false },
      { value: 'comodous', label: 'Comodous', checked: true },
    ],
  },
]

const mobileFiltersOpen = ref(false)

const view = ref('grid')

const setView = (newView) => {
  view.value = newView
  // console.log(`Current view: ${newView}`)
}

useHead({
  titleTemplate: 'Products',
})
</script>