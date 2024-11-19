<template>
  <div>
    <breadcrumb />

    <div class="mx-auto font-sans mt-7 max-w-7xl">
      <h2 class="text-2xl font-bold text-gray-800">Wishlist</h2>
      <div class="overflow-x-auto">
        <table class="w-[1000px] mt-12 border-collapse divide-y mx-auto">
          <thead class="text-left bg-gray-50 whitespace-nowrap">
            <tr class="">
              <th class="p-2 text-base font-medium text-gray-600">Product Image</th>
              <th class="p-2 text-base font-medium text-gray-600">Product Name</th>
              <th class="p-2 text-base font-medium text-gray-600">Unit Price</th>
              <th class="p-2 text-base font-medium text-gray-600"></th>
            </tr>
          </thead>
          <tbody class="divide-y whitespace-nowrap">
            <tr>
              <td class="px-2 py-4">
                <div class="flex items-center gap-4 w-max">
                  <div class="h-32 shrink-0">
                    <img src='https://readymadeui.com/images/product6.webp'
                      class="object-contain w-full h-full rounded-lg" />
                  </div>
                </div>
              </td>
              <td class="px-2 py-4">
                <div>
                  <p class="text-base font-bold text-gray-800">Black T-Shirt</p>
                </div>
              </td>
              <td class="px-2 py-4">
                <h4 class="text-base font-bold text-gray-800">$18.5</h4>
              </td>
              <td class="py-4 ps-2">
                <div class="flex justify-end space-s-5">
                  <button type="button"
                    class="flex items-center justify-center h-10 bg-transparent border rounded-lg w-11">
                    <icon name="material-symbols:close-rounded" class="inline w-6 text-red-500" />
                  </button>
                  <div class="flex overflow-hidden border rounded-lg w-max">
                    <button type="button"
                      class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm text-white hover:bg-white hover:text-black hover:border-black border-transparent border w-full capitalize font-semibold">
                      Select Options
                    </button>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="px-2 py-4">
                <div class="flex items-center gap-4 w-max">
                  <div class="h-32 shrink-0">
                    <img src='https://readymadeui.com/images/product6.webp'
                      class="object-contain w-full h-full rounded-lg" />
                  </div>
                </div>
              </td>
              <td class="px-2 py-4">
                <div>
                  <p class="text-base font-bold text-gray-800">Black T-Shirt</p>
                </div>
              </td>
              <td class="px-2 py-4">
                <h4 class="text-base font-bold text-gray-800">$18.5</h4>
              </td>
              <td class="py-4 ps-2">
                <div class="flex justify-end space-s-5">
                  <button type="button"
                    class="flex items-center justify-center h-10 bg-transparent border rounded-lg w-11">
                    <icon name="material-symbols:close-rounded" class="inline w-6 text-red-500" />
                  </button>
                  <div class="flex overflow-hidden border rounded-lg w-max">
                    <button type="button"
                      class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm text-white hover:bg-white hover:text-black hover:border-black border-transparent border w-full capitalize font-semibold">
                      Select Options
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- share via social media -->
      <div class="space-y-2 mt-7">
        <p class="text-base text-gray-700">Share my Wishlist Via:</p>
        <div class="flex items-center space-x-4">
          <SocialShare network="facebook" :styled="false" :label="false"
            class="p-0.5 text-white bg-blue-700 border rounded-md" />
          <SocialShare network="twitter" user="Amr" hashtags="my wishlist" :styled="false" :label="false"
            class="p-0.5 text-white bg-black border rounded-md" />
          <SocialShare network="whatsapp" title="Check my Wishlist!" :styled="false" :label="false"
            class="p-0.5 text-white bg-green-500 border rounded-md" />
          <!-- <SocialShare network="telegram" title="Check my Wishlist!" :styled="false" :label="false"
            class="p-0.5 text-white bg-blue-500 border rounded-md" /> -->
          <SocialShare network="email" title="Check my Wishlist!" :styled="false" :label="false"
            class="p-0.5 text-white bg-red-500 border rounded-md" />
        </div>
      </div>

      <!-- share via email only -->
      <!-- <a href="mailto:?subject=My Wishlist&body=Check out my wishlist!" class="flex items-center space-x-2 mt-7">
        <icon name="ic:outline-mail" class="text-gray-700" size="19px" />
        <p class="text-[13px] text-gray-700">Share my Wishlist Via Email</p>
      </a> -->
    </div>
  </div>
</template>

<script setup>

</script>