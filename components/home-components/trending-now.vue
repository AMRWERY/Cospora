<template>
  <div>
    <div class="flex items-center justify-center mt-8 mb-3">
      <div class="w-1/12 h-1 border-t-2 border-gray-700"></div>
      <span class="mx-4 text-2xl font-bold leading-10 uppercase">#Trending Now</span>
      <div class="w-1/12 h-1 border-t-2 border-gray-700"></div>
    </div>

    <div class="grid grid-cols-1 gap-6 p-4 px-4 mx-auto sm:grid-cols-2 lg:grid-cols-3 max-w-7xl">
      <div class="relative border rounded-lg shadow-md group" v-for="card in cards" :key="card">
        <div class="overflow-hidden h-80 sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1">
          <img :src="card.img"
            class="object-cover w-full h-full transition-transform duration-300 cursor-pointer group-hover:scale-105" />
        </div>
        <div
          class="absolute bottom-0 w-full p-4 text-center uppercase transform -translate-x-1/2 translate-y-0 bg-black bg-opacity-50 left-1/2">
          <p class="text-[10px] font-semibold text-gray-200">{{ card.subtitle }}</p>
          <h2 class="mt-2 mb-4 text-2xl font-semibold text-white">{{ card.title }}</h2>
          <span class="text-[9px] line-clamp-3 leading-loose text-gray-200">{{ card.content }}</span>
          <div class="mt-4">
            <button
              class="text-sm font-bold text-white uppercase bg-transparent hover:bg-black hover:text-white px-5 py-2.5 rounded-md focus:outline-none focus:ring-2">
              {{ card.btn }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const cards = ref([
  { img: 'https://i.imghippo.com/files/oIPR9210MdE.jpg', subtitle: 'Make up', title: 'Milancé', content: 'Pellentesque lorem denim consequat feugiat sapien delos pretium libero. Destibulum ullamcorper melito an amet cosmopolis morttitor nulla lectus.', btn: 'Browse Now' },
  { img: 'https://i.imghippo.com/files/GwH9379BVw.jpg', subtitle: 'New Arrivals', title: '#Loremis', content: 'Pellentesque lorem denim consequat feugiat sapien delos pretium libero. Destibulum ullamcorper melito an amet cosmopolis morttitor nulla lectus.', btn: 'Shop Now' },
  { img: 'https://i.imghippo.com/files/QOws8545QZc.jpg', subtitle: 'Beauty Care', title: 'Ziloues', content: 'Pellentesque lorem denim consequat feugiat sapien delos pretium libero. Destibulum ullamcorper melito an amet cosmopolis morttitor nulla lectus.', btn: 'Discover Now' },
])
</script>