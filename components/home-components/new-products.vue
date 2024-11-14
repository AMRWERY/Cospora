<template>
  <div>
    <div class="flex items-center justify-center mt-8 mb-3">
      <div class="w-1/12 h-1 border-t-2 border-gray-700"></div>
      <span class="mx-4 text-2xl font-bold leading-10 uppercase">New Products</span>
      <div class="w-1/12 h-1 border-t-2 border-gray-700"></div>
    </div>

    <!--Tabs navigation-->
    <ul class="flex flex-row flex-wrap justify-center mb-5 list-none border-b-0 ps-0" role="tablist" data-twe-nav-ref>
      <li role="presentation">
        <a href="#tabs-makeup"
          class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-sm font-semibold leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
          data-twe-toggle="pill" data-twe-target="#tabs-makeup" data-twe-nav-active role="tab"
          aria-controls="tabs-makeup" aria-selected="true">Makeup</a>
      </li>
      <li role="presentation">
        <a href="#tabs-nail"
          class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-sm font-semibold leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
          data-twe-toggle="pill" data-twe-target="#tabs-nail" role="tab" aria-controls="tabs-nail"
          aria-selected="false">Nail</a>
      </li>
      <li role="presentation">
        <a href="#tabs-accessories"
          class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-sm font-semibold leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
          data-twe-toggle="pill" data-twe-target="#tabs-accessories" role="tab" aria-controls="tabs-accessories"
          aria-selected="false">Accessories</a>
      </li>
      <li role="presentation">
        <a href="#tabs-body-art"
          class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-sm font-semibold leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
          data-twe-toggle="pill" data-twe-target="#tabs-body-art" role="tab" aria-controls="tabs-body-art"
          aria-selected="false">Body Art</a>
      </li>
      <li role="presentation">
        <a href="#tabs-makeup-tools"
          class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-sm font-semibold leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
          data-twe-toggle="pill" data-twe-target="#tabs-makeup-tools" role="tab" aria-controls="tabs-makeup-tools"
          aria-selected="false">Makeup Tools</a>
      </li>
      <li role="presentation">
        <a href="#tabs-fragrance"
          class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-sm font-semibold leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
          data-twe-toggle="pill" data-twe-target="#tabs-fragrance" role="tab" aria-controls="tabs-fragrance"
          aria-selected="false">Fragrance</a>
      </li>
    </ul>

    <!--Tabs content-->
    <div class="mb-2">
      <div class="hidden opacity-100 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
        id="tabs-makeup" role="tabpanel" aria-labelledby="tabs-makeup-tab" data-twe-tab-active>
        <makeup />
      </div>
      <div class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
        id="tabs-nail" role="tabpanel" aria-labelledby="tabs-nail-tab">
        Tab 2 content
      </div>
      <div class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
        id="tabs-accessories" role="tabpanel" aria-labelledby="tabs-accessories-tab">
        Tab 3 content
      </div>
      <div class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
        id="tabs-body-art" role="tabpanel" aria-labelledby="tabs-body-art-tab">
        Tab 4 content
      </div>
      <div class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
        id="tabs-makeup-tools" role="tabpanel" aria-labelledby="tabs-makeup-tools-tab">
        Tab 5 content
      </div>
      <div class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
        id="tabs-fragrance" role="tabpanel" aria-labelledby="tabs-fragrance-tab">
        Tab 6 content
      </div>
    </div>

    <div class="grid gap-4 px-10 md:grid-cols-2">
      <div class="rounded-lg">
        <div class="h-64 overflow-hidden rounded-lg cursor-pointer" data-twe-ripple-init data-twe-ripple-color="light">
          <img src="https://justfields.com/storage/projects/7M5rV059/home-07.jpg" class="object-cover w-full h-full">
        </div>
      </div>
      <div class="rounded-lg">
        <div class="h-64 overflow-hidden rounded-lg cursor-pointer" data-twe-ripple-init data-twe-ripple-color="light">
          <img src="https://justfields.com/storage/projects/7M5rV059/home-08.jpg" class="object-cover w-full h-full">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
onMounted(async () => {
  const { Tab, Ripple, initTWE } = await import("tw-elements");
  initTWE({ Tab, Ripple });
});
</script>