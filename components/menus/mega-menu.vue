<template>
  <div>
    <ul class="flex flex-row me-auto">
      <li class="relative group" data-twe-dropdown-ref>
        <nuxt-link class="relative text-base font-bold cursor-pointer hover:underline hover:underline-offset-2 group"
          to="" id="dropdownMenuButtonX" aria-expanded="false">
          {{ title }}
        </nuxt-link>
        <div
          class="absolute mx-auto top-full z-[100] mt-0 hidden w-[1100px] border-none bg-white bg-clip-padding shadow-lg group-hover:block"
          aria-labelledby="dropdownMenuButtonX" data-twe-dropdown-menu-ref>
          <div class="px-6 py-5 lg:px-8">
            <div class="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-5">
              <div v-for="(category, index) in categories" :key="index">
                <p class="px-5 mb-2 text-[13px] font-semibold w-full">{{ category.title }}</p>
                <nuxt-link v-for="(link, index) in category.links" :key="index" to=""
                  class="flex w-full px-4 py-1 text-sm font-normal transition-transform transform bg-white cursor-pointer whitespace-nowrap text-neutral-700 hover:translate-x-1 hover:text-zinc-800 focus:outline-none active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25">
                  <icon name="solar:alt-arrow-down-line-duotone"
                    class="hidden text-sm text-gray-500 me-2 group-hover:inline-block dark:text-gray-300" size="15px" />
                  <span>{{ link.title }}</span>
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="w-full py-1 bg-blue-100">
            <p class="text-sm font-normal text-center text-black">
              Free Sample With Any Purchases
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  categories: {
    type: Array,
    required: true,
  },
});

onMounted(async () => {
  const { Dropdown, Collapse, initTWE } = await import("tw-elements");
  initTWE({ Dropdown, Collapse });
});
</script>