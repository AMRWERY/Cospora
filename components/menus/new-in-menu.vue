<template>
  <div>
    <div class="relative group">
      <nuxt-link to="" class="text-base font-bold cursor-pointer hover:underline hover:underline-offset-2"
        id="dropdownMenuButton1" aria-expanded="false" Dropdown divider>
        New in
      </nuxt-link>

      <ul
        class="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-base shadow-lg group-hover:block dark:bg-surface-dark py-2"
        aria-labelledby="dropdownMenuButton1">
        <li class="relative group">
          <nuxt-link to=""
            class="flex w-full px-4 py-2 text-sm font-normal transition-transform transform bg-white cursor-pointer whitespace-nowrap text-neutral-700 hover:translate-x-1 hover:text-zinc-800 focus:outline-none active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25">
            <icon name="dashicons:arrow-right-alt2"
              class="hidden text-sm text-gray-500 me-2 group-hover:inline-block dark:text-gray-300" size="15px" />
            <span>Sustoproines</span>
          </nuxt-link>
        </li>
        <hr class="w-3/4 h-0 mx-auto my-1 border border-t-0 border-gray-300 border-solid dark:border-white/10" />
        <li class="relative group">
          <nuxt-link to=""
            class="flex w-full px-4 py-2 text-sm font-normal transition-transform transform bg-white cursor-pointer whitespace-nowrap text-neutral-700 hover:translate-x-1 hover:text-zinc-800 focus:outline-none active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25">
            <icon name="dashicons:arrow-right-alt2"
              class="hidden text-sm text-gray-500 me-2 group-hover:inline-block dark:text-gray-300" size="15px" />
            <span>Destetos Sarcudos</span>
          </nuxt-link>
        </li>
        <hr class="w-3/4 h-0 mx-auto my-1 border border-t-0 border-gray-300 border-solid dark:border-white/10" />
        <li class="relative group">
          <nuxt-link to=""
            class="flex w-full px-4 py-2 text-sm font-normal transition-transform transform bg-white cursor-pointer whitespace-nowrap text-neutral-700 hover:translate-x-1 hover:text-zinc-800 focus:outline-none active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25">
            <icon name="dashicons:arrow-right-alt2"
              class="hidden text-sm text-gray-500 me-2 group-hover:inline-block dark:text-gray-300" size="15px" />
            <span>Hendrer Dulamocos</span>
          </nuxt-link>
        </li>
        <hr class="w-3/4 h-0 mx-auto my-1 border border-t-0 border-gray-300 border-solid dark:border-white/10" />
        <li class="relative group">
          <nuxt-link to=""
            class="flex w-full px-4 py-2 text-sm font-normal transition-transform transform bg-white cursor-pointer whitespace-nowrap text-neutral-700 hover:translate-x-1 hover:text-zinc-800 focus:outline-none active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25">
            <icon name="dashicons:arrow-right-alt2"
              class="hidden text-sm text-gray-500 me-2 group-hover:inline-block dark:text-gray-300" size="15px" />
            <span>Loremous</span>
          </nuxt-link>
        </li>
        <hr class="w-3/4 h-0 mx-auto my-1 border border-t-0 border-gray-300 border-solid dark:border-white/10" />
        <li class="relative group">
          <nuxt-link to=""
            class="flex w-full px-4 py-2 text-sm font-normal transition-transform transform bg-white cursor-pointer whitespace-nowrap text-neutral-700 hover:translate-x-1 hover:text-zinc-800 focus:outline-none active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25">
            <icon name="dashicons:arrow-right-alt2"
              class="hidden text-sm text-gray-500 me-2 group-hover:inline-block dark:text-gray-300" size="15px" />
            <span>Maecenas Conguros</span>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
onMounted(async () => {
  const { Dropdown, initTWE } = await import("tw-elements");
  initTWE({ Dropdown });
});
</script>