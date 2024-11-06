<template>
  <div class="mt-12">
    <div class="flex flex-col items-center justify-center mt-8 space-y-2">
      <div class="flex items-center w-full justify-center">
        <div class="w-1/6 h-1 border-t-2 border-gray-400"></div>
        <span class="mx-4 text-2xl font-bold leading-10 uppercase">Cospora On Instagram</span>
        <div class="w-1/6 h-1 border-t-2 border-gray-400"></div>
      </div>
      <span class="text-xs text-red-600">#Cospora-Cosmetics</span>
    </div>

    <Carousel v-bind="config">
      <Slide v-for="(slide, index) in numberOfSlides" :key="index">
        <div class="carousel__item">
          <div class="grid grid-cols-1 gap-6 p-4 mx-auto max-w-7xl">
            <div v-for="card in getCardsForSlide(index)" :key="card.img"
              class="relative border rounded-lg shadow-md mb-36 group sm:mb-0">
              <div class="overflow-hidden h-80">
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
  </div>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';

const config = {
  itemsToShow: 1,
  wrapAround: true,
  breakpoints: {
    200: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
    400: {
      itemsToShow: 2,
      snapAlign: 'start',
    },
  }
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