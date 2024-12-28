<template>
  <div>
    <!-- Footer container -->
    <footer class="text-center text-white bg-black lg:text-start">
      <div class="py-10 mx-auto text-center md:text-start max-w-7xl">
        <div class="grid gap-8 grid-1 md:grid-cols-2 lg:grid-cols-5">
          <!-- Navigate section -->
          <div>
            <h6 class="flex justify-center mb-4 text-sm font-semibold capitalize md:justify-start">
              {{ $t('footer.navigate') }}
            </h6>
            <p class="mb-2.5 text-xs">
              <nuxt-link to="">{{ $t('footer.blog') }}</nuxt-link>
            </p>
            <p class="mb-2.5 text-xs">
              <nuxt-link to="">{{ $t('footer.about_us') }}</nuxt-link>
            </p>
            <p class="mb-2.5 text-xs">
              <nuxt-link to="">{{ $t('footer.contact_us') }}</nuxt-link>
            </p>
            <p class="mb-2.5 text-xs">
              <nuxt-link to="">{{ $t('footer.shipping_returns') }}</nuxt-link>
            </p>
            <p class="mb-2.5 text-xs">
              <nuxt-link to="">{{ $t('footer.sitemap') }}</nuxt-link>
            </p>
          </div>
          <!-- Categories section -->
          <div>
            <h6 class="flex justify-center mb-4 text-sm font-semibold capitalize md:justify-start">
              {{ $t('footer.categories') }}
            </h6>
            <p class="mb-2.5 text-xs">
              <nuxt-link to="">{{ $t('footer.new_in') }}</nuxt-link>
            </p>
            <p class="mb-2.5 text-xs">
              <nuxt-link to="">{{ $t('footer.makeup') }}</nuxt-link>
            </p>
            <p class="mb-2.5 text-xs">
              <nuxt-link to="">{{ $t('footer.nail') }}</nuxt-link>
            </p>
            <p class="mb-2.5 text-xs">
              <nuxt-link to="">{{ $t('footer.beauty_accessories') }}</nuxt-link>
            </p>
            <p class="mb-2.5 text-xs">
              <nuxt-link to="">{{ $t('footer.body_art') }}</nuxt-link>
            </p>
            <p class="mb-2.5 text-xs">
              <nuxt-link to="">{{ $t('footer.makeup_tools') }}</nuxt-link>
            </p>
            <p class="mb-2.5 text-xs">
              <nuxt-link to="">{{ $t('footer.fragrance') }}</nuxt-link>
            </p>
          </div>
          <!-- Popular Brands section -->
          <div>
            <h6 class="flex justify-center mb-4 text-sm font-semibold capitalize md:justify-start">
              {{ $t('footer.popular_brands') }}
            </h6>
            <p class="mb-2.5 text-xs">
              <nuxt-link to="">{{ $t('footer.anna') }}</nuxt-link>
            </p>
            <p class="mb-2.5 text-xs">
              <nuxt-link to="">{{ $t('footer.benjamin_button') }}</nuxt-link>
            </p>
            <p class="mb-2.5 text-xs">
              <nuxt-link to="">{{ $t('footer.burberry') }}</nuxt-link>
            </p>
            <p class="mb-2.5 text-xs">
              <nuxt-link to="">{{ $t('footer.carhart') }}</nuxt-link>
            </p>
            <p class="mb-2.5 text-xs">
              <nuxt-link to="">{{ $t('footer.chanel') }}</nuxt-link>
            </p>
            <p class="mb-2.5 text-xs">
              <nuxt-link to="">{{ $t('footer.coco_lee') }}</nuxt-link>
            </p>
            <p class="mb-2.5 text-xs">
              <nuxt-link to="">{{ $t('btn.view_all') }}</nuxt-link>
            </p>
          </div>
          <!-- Customer Service section -->
          <div>
            <h6 class="flex justify-center mb-4 text-sm font-semibold capitalize md:justify-start">
              {{ $t('footer.customer_service') }}
            </h6>
            <p class="mb-2.5 text-xs">
              <nuxt-link to="">{{ $t('footer.search_teams') }}</nuxt-link>
            </p>
            <p class="mb-2.5 text-xs">
              <nuxt-link to="">{{ $t('footer.advanced_search') }}</nuxt-link>
            </p>
            <p class="mb-2.5 text-xs">
              <nuxt-link to="">{{ $t('footer.help_faqs') }}</nuxt-link>
            </p>
            <p class="mb-2.5 text-xs">
              <nuxt-link to="">{{ $t('footer.ask_an_beauty_expert') }}</nuxt-link>
            </p>
            <p class="mb-2.5 text-xs">
              <nuxt-link to="">{{ $t('footer.find_a_store') }}</nuxt-link>
            </p>
          </div>
          <!-- Info section -->
          <div>
            <h6 class="flex justify-center mb-4 text-sm font-semibold capitalize md:justify-start">
              {{ $t('footer.info') }}
            </h6>
            <p class="mb-2.5 text-xs">
              <nuxt-link to="">{{ $t('footer.685_market_street') }}</nuxt-link>
            </p>
            <p class="mb-2.5 text-xs">
              <nuxt-link to="">{{ $t('footer.san_francisco_ca_94105') }}</nuxt-link>
            </p>
            <p class="mb-2.5 text-xs">
              <nuxt-link to="">{{ $t('footer.united_states') }}</nuxt-link>
            </p>
            <p class="mb-2.5 text-xs mt-6">
              <nuxt-link to="">{{ $t('footer.call_us_at') }} 1-888-699-8900</nuxt-link>
            </p>
            <p class="mb-2.5 text-xs">
              <nuxt-link to="">{{ $t('footer.email') }} email@cospora.com</nuxt-link>
            </p>
          </div>
        </div>
      </div>

      <!--Copyright section-->
      <div class="p-6 mx-auto border-t-2 bg-black/5 border-neutral-50 max-w-7xl">
        <div class="grid grid-cols-1 gap-4 p-6 md:grid-cols-2">
          <!-- Column 1: Newsletter Signup -->
          <div class="flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-s-4">
            <p class="text-lg font-semibold whitespace-nowrap">{{ $t('footer.sign_up_for_our_newsletter') }}</p>
            <div class="relative w-[240px] sm:max-w-sm">
              <input type="email" :placeholder="$t('footer.your_email_address')"
                class="w-full p-2 text-gray-800 rounded-md pe-10" />
              <span class="absolute inset-y-0 flex items-center end-0 pe-2">
                <icon name="tdesign:arrow-right-circle" class="w-6 h-6 p-1 text-black" />
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
        <span class="block max-w-md mx-auto text-xs text-gray-400">{{
          $t('footer.2019_cospora_demo_all_rights_reserved_powered_by_shopify_shopify_themes_templates_by') }}
          HaloThemes.com.</span>
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