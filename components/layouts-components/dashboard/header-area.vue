<template>
  <div>
    <header class="sticky top-0 flex w-full bg-white z-999 drop-shadow-1">
      <div class="flex items-center justify-between flex-grow px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div class="flex items-center gap-2 sm:gap-4 lg:hidden">
          <!-- Hamburger Toggle BTN -->
          <button class="z-50 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm lg:hidden"
            @click="() => { toggleSidebar() }">
            <span class="relative block h-[1.375rem] w-[1.375rem] cursor-pointer">
              <icon name="material-symbols:menu-rounded" />
            </span>
          </button>
        </div>
        <!-- <div class="hidden sm:block">
          <form action="" method="POST">
            <div class="relative">
              <input type="text" placeholder="Type to search..."
                class="w-full bg-transparent xl:w-125 pe-10 ps-4 focus:outline-none" />
              <button type="button" class="absolute -translate-y-1/2 top-1/2 end-2">
                <icon name="heroicons-outline:magnifying-glass"
                  class="mt-1 fill-body hover:fill-primary" />
              </button>
            </div>
          </form>
        </div> -->
      </div>
    </header>
  </div>
</template>

<script setup>
const { toggleSidebar } = useSidebarStore()
</script>