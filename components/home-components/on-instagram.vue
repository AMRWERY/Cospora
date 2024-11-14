<template>
  <div class="mx-auto mt-12 max-w-7xl">
    <div class="flex flex-col items-center justify-center space-y-2">
      <div class="flex items-center justify-center w-full">
        <div class="w-1/12 h-1 border-t-2 border-gray-700"></div>
        <span class="mx-4 text-2xl font-bold leading-10 uppercase">Cospora On Instagram</span>
        <div class="w-1/12 h-1 border-t-2 border-gray-700"></div>
      </div>
      <span class="text-xs text-red-600">#Cospora-Cosmetics</span>
    </div>

    <Carousel v-bind="config">
      <Slide v-for="(slide, index) in numberOfSlides" :key="index">
        <div class="carousel__item">
          <div class="grid grid-cols-1 gap-6 p-4">
            <div v-for="card in getCardsForSlide(index)" :key="card.img"
              class="relative border rounded-lg shadow-md mb-36 group sm:mb-0">
              <div class="h-64 overflow-hidden">
                <img :src="card.img"
                  class="object-cover w-full h-full transition-transform duration-300 cursor-pointer group-hover:scale-105" />
              </div>
            </div>
          </div>
        </div>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>

    <div class="px-6 mx-auto mb-6 max-w-7xl lg:px-8">
      <div
        class="grid items-center max-w-lg grid-cols-4 mx-auto gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-5 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
        <img class="object-contain w-full col-span-2 max-h-12 lg:col-span-1"
          src="https://justfields.com/storage/projects/7M5rV059/logo-01.png" width="158" height="48" />
        <img class="object-contain w-full col-span-2 max-h-12 lg:col-span-1"
          src="https://justfields.com/storage/projects/7M5rV059/logo-02.png" width="158" height="48" />
        <img class="object-contain w-full col-span-2 max-h-12 lg:col-span-1"
          src="https://justfields.com/storage/projects/7M5rV059/logo-03.png" width="158" height="48" />
        <img class="object-contain w-full col-span-2 max-h-12 sm:col-start-2 lg:col-span-1"
          src="https://justfields.com/storage/projects/7M5rV059/logo-04.png" width="158" height="48" />
        <img class="object-contain w-full col-span-2 col-start-2 max-h-12 sm:col-start-auto lg:col-span-1"
          src="https://justfields.com/storage/projects/7M5rV059/logo-05.png" width="158" height="48" />
      </div>
    </div>
  </div>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';

const config = {
  itemsToShow: 5,
  wrapAround: true,
  snapAlign: 'start',
  breakpoints: {
    200: {
      itemsToShow: 1.5,
      snapAlign: 'center',
    },
    400: {
      itemsToShow: 2,
      snapAlign: 'start',
    },
    700: {
      itemsToShow: 3.5,
      snapAlign: 'center',
    },
    1024: {
      itemsToShow: 5,
      snapAlign: 'start',
    },
  },
};

const cards = ref([
  { img: 'https://justfields.com/storage/projects/7M5rV059/home-012.jpg' },
  { img: 'https://i.imghippo.com/files/RJP6577gSE.jpg' },
  { img: 'https://justfields.com/storage/projects/7M5rV059/home-014.jpg' },
  { img: 'https://justfields.com/storage/projects/7M5rV059/home-015.jpg' },
  { img: 'https://justfields.com/storage/projects/7M5rV059/home-016.jpg' },
  { img: 'https://justfields.com/storage/projects/7M5rV059/home-017.jpg' },
  { img: 'https://justfields.com/storage/projects/7M5rV059/home-018.jpg' },
  { img: 'https://justfields.com/storage/projects/7M5rV059/home-019.jpg' },
  { img: 'https://justfields.com/storage/projects/7M5rV059/home-020.jpg' },
  { img: 'https://justfields.com/storage/projects/7M5rV059/home-021.jpg' },
  { img: 'https://justfields.com/storage/projects/7M5rV059/home-022.jpg' },
]);

const numberOfSlides = computed(() => {
  return cards.value.length;
});

function getCardsForSlide(slideIndex) {
  return [cards.value[slideIndex]];
}
</script>