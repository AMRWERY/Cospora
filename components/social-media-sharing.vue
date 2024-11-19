<template>
  <div>
    <!-- share via social media -->
    <div class="space-y-2 mt-7">
      <p class="text-base text-gray-700">Share my Wishlist via:</p>
      <div class="flex items-center space-x-4">
        <SocialShare network="facebook" :styled="false" :label="false"
          class="p-0.5 text-white bg-blue-700 border rounded-md" />
        <SocialShare network="twitter" user="Amr" hashtags="my wishlist" :styled="false" :label="false"
          class="p-0.5 text-white bg-black border rounded-md" />
        <SocialShare network="whatsapp" title="Check my Wishlist!" :styled="false" :label="false"
          class="p-0.5 text-white bg-green-500 border rounded-md" />
        <SocialShare network="telegram" title="Check my Wishlist!" url="https://web.telegram.org/a/" :styled="false"
          :label="false" class="p-0.5 text-white bg-blue-500 border rounded-md" />
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
</template>

<script setup>

</script>