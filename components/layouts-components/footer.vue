<template>
  <div>
    <!-- Footer container -->
    <footer class="text-center text-white bg-black lg:text-left">
      <div class="py-10 mx-auto text-center md:text-left max-w-7xl">
        <div class="grid gap-8 grid-1 md:grid-cols-2 lg:grid-cols-5">
          <!-- Navigate section -->
          <div>
            <h6 class="flex justify-center mb-4 text-sm font-semibold capitalize md:justify-start">
              Navigate
            </h6>
            <p class="mb-2.5 text-xs">
              <nuxt-link to="">Blog</nuxt-link>
            </p>
            <p class="mb-2.5 text-xs">
              <nuxt-link to="">About Us</nuxt-link>
            </p>
            <p class="mb-2.5 text-xs">
              <nuxt-link to="">Contact Us</nuxt-link>
            </p>
            <p class="mb-2.5 text-xs">
              <nuxt-link to="">Shipping & Returns</nuxt-link>
            </p>
            <p class="mb-2.5 text-xs">
              <nuxt-link to="">Sitemap</nuxt-link>
            </p>
          </div>
          <!-- Categories section -->
          <div>
            <h6 class="flex justify-center mb-4 text-sm font-semibold capitalize md:justify-start">
              Categories
            </h6>
            <p class="mb-2.5 text-xs">
              <nuxt-link to="">New in</nuxt-link>
            </p>
            <p class="mb-2.5 text-xs">
              <nuxt-link to="">Makeup</nuxt-link>
            </p>
            <p class="mb-2.5 text-xs">
              <nuxt-link to="">Nail</nuxt-link>
            </p>
            <p class="mb-2.5 text-xs">
              <nuxt-link to="">Beauty & Accessories</nuxt-link>
            </p>
            <p class="mb-2.5 text-xs">
              <nuxt-link to="">Body Art</nuxt-link>
            </p>
            <p class="mb-2.5 text-xs">
              <nuxt-link to="">Makeup Tools</nuxt-link>
            </p>
            <p class="mb-2.5 text-xs">
              <nuxt-link to="">Fragrance</nuxt-link>
            </p>
          </div>
          <!-- Popular Brands section -->
          <div>
            <h6 class="flex justify-center mb-4 text-sm font-semibold capitalize md:justify-start">
              Popular Brands
            </h6>
            <p class="mb-2.5 text-xs">
              <nuxt-link to="">Anna</nuxt-link>
            </p>
            <p class="mb-2.5 text-xs">
              <nuxt-link to="">Benjamin Button</nuxt-link>
            </p>
            <p class="mb-2.5 text-xs">
              <nuxt-link to="">Burberry</nuxt-link>
            </p>
            <p class="mb-2.5 text-xs">
              <nuxt-link to="">Carhart</nuxt-link>
            </p>
            <p class="mb-2.5 text-xs">
              <nuxt-link to="">Chanel</nuxt-link>
            </p>
            <p class="mb-2.5 text-xs">
              <nuxt-link to="">Coco Lee</nuxt-link>
            </p>
            <p class="mb-2.5 text-xs">
              <nuxt-link to="">View All</nuxt-link>
            </p>
          </div>
          <!-- Customer Service section -->
          <div>
            <h6 class="flex justify-center mb-4 text-sm font-semibold capitalize md:justify-start">
              Customer Service
            </h6>
            <p class="mb-2.5 text-xs">
              <nuxt-link to="">Search Teams</nuxt-link>
            </p>
            <p class="mb-2.5 text-xs">
              <nuxt-link to="">Advanced Search</nuxt-link>
            </p>
            <p class="mb-2.5 text-xs">
              <nuxt-link to="">Help & FAQs</nuxt-link>
            </p>
            <p class="mb-2.5 text-xs">
              <nuxt-link to="">Ask An Beauty Expert</nuxt-link>
            </p>
            <p class="mb-2.5 text-xs">
              <nuxt-link to="">Find A Store</nuxt-link>
            </p>
          </div>
          <!-- Info section -->
          <div>
            <h6 class="flex justify-center mb-4 text-sm font-semibold capitalize md:justify-start">
              Info
            </h6>
            <p class="mb-2.5 text-xs">
              <nuxt-link to="">685 Market Street</nuxt-link>
            </p>
            <p class="mb-2.5 text-xs">
              <nuxt-link to="">San Francisco, CA 94105,</nuxt-link>
            </p>
            <p class="mb-2.5 text-xs">
              <nuxt-link to="">United States</nuxt-link>
            </p>
            <p class="mb-2.5 text-xs mt-6">
              <nuxt-link to="">Call us at: 1-888-699-8900</nuxt-link>
            </p>
            <p class="mb-2.5 text-xs">
              <nuxt-link to="">Email: email@domain.com</nuxt-link>
            </p>
          </div>
        </div>
      </div>

      <!--Copyright section-->
      <div class="p-6 mx-auto border-t-2 bg-black/5 border-neutral-50 max-w-7xl">
        <div class="grid grid-cols-1 gap-4 p-6 md:grid-cols-2">
          <!-- Column 1: Newsletter Signup -->
          <div class="flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <p class="text-lg font-semibold whitespace-nowrap">Sign up for our Newsletter</p>
            <div class="relative w-[240px] sm:max-w-sm">
              <input type="email" placeholder="Your email address" class="w-full p-2 pr-10 text-gray-800 rounded-md" />
              <span class="absolute inset-y-0 right-0 flex items-center pr-2">
                <icon name="material-symbols:arrow-circle-right-rounded" class="w-6 h-6 p-1 text-black" />
              </span>
            </div>
          </div>

          <!-- Column 2: Social Media Buttons -->
          <div class="flex mx-0 mt-4 space-s-5 sm:justify-center md:justify-end">
            <button class="flex items-center justify-center w-10 h-10 text-white bg-black rounded-full">
              <icon name="mdi:facebook-box" size="20px" />
            </button>
            <button class="flex items-center justify-center w-10 h-10 text-white bg-black rounded-full">
              <icon name="mdi:twitter" size="20px" />
            </button>
            <button class="flex items-center justify-center w-10 h-10 text-white bg-black rounded-full">
              <icon name="bx:bxl-pinterest-alt" size="20px" />
            </button>
            <button class="flex items-center justify-center w-10 h-10 text-white bg-black rounded-full">
              <icon name="jam:google-plus" size="20px" />
            </button>
            <button class="flex items-center justify-center w-10 h-10 text-white bg-black rounded-full">
              <icon name="mdi:instagram" size="20px" />
            </button>
            <button class="flex items-center justify-center w-10 h-10 text-white bg-black rounded-full">
              <icon name="mingcute:snapchat-fill" size="20px" />
            </button>
          </div>

        </div>
      </div>
      <div class="text-center">
        <span class="block max-w-md mx-auto text-xs text-gray-400">© 2019 Cospora Demo. All Rights Reserved. Powered by
          Shopify.
          Shopify Themes & Templates by HaloThemes.com.</span>
        <div class="flex justify-center pb-8 mx-0 mt-5 space-s-5">
          <img src="https://justfields.com/storage/projects/7M5rV059/footer-01.jpg" class="w-[35px] h-[24px]">
          <img src="https://justfields.com/storage/projects/7M5rV059/footer-02.jpg" class="w-[35px] h-[24px]">
          <img src="https://justfields.com/storage/projects/7M5rV059/footer-03.jpg" class="w-[35px] h-[24px]">
          <img src="https://justfields.com/storage/projects/7M5rV059/footer-04.jpg" class="w-[35px] h-[24px]">
          <img src="https://justfields.com/storage/projects/7M5rV059/footer-05.jpg" class="w-[35px] h-[24px]">
          <img src="https://justfields.com/storage/projects/7M5rV059/footer-06.jpg" class="w-[35px] h-[24px]">
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>

</script>