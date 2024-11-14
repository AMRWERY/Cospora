<template>
  <div class="mt-12">
    <div class="flex items-center justify-center mt-8 mb-3">
      <div class="w-1/12 h-1 border-t-2 border-gray-700"></div>
      <span class="mx-4 text-2xl font-bold leading-10 uppercase">Recent Posts</span>
      <div class="w-1/12 h-1 border-t-2 border-gray-700"></div>
    </div>

    <Carousel v-bind="config">
      <Slide v-for="(slide, index) in numberOfSlides" :key="index">
        <div class="carousel__item">
          <div class="grid grid-cols-1 gap-6 p-4 px-4 mx-auto sm:grid-cols-2 lg:grid-cols-2 max-w-7xl">
            <div v-for="card in getCardsForSlide(index)" :key="card.img"
              class="relative border rounded-lg shadow-md group sm:mb-0">
              <div class="overflow-hidden h-80">
                <img :src="card.img"
                  class="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div
                class="absolute bottom-0 w-full p-4 text-center transform -translate-x-1/2 translate-y-0 bg-black bg-opacity-50 left-1/2">
                <p class="text-[10px] font-semibold text-gray-200">{{ card.subtitle }}</p>
                <h2 class="mt-2 mb-4 text-lg font-semibold text-white">{{ card.title }}</h2>
                <span class="text-[9px] line-clamp-3 leading-loose text-gray-200">{{ card.content }}</span>
                <div class="mt-4">
                  <button
                    class="text-sm font-bold text-white bg-transparent hover:bg-black hover:text-white px-5 py-2.5 rounded-md focus:outline-none focus:ring-2">
                    {{ card.btn }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      <template #addons>
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination } from 'vue3-carousel';

const config = {
  itemsToShow: 1,
  wrapAround: true,
  breakpoints: {
    200: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
    400: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
  }
};

const cards = ref([
  { img: 'https://justfields.com/storage/projects/7M5rV059/home-011.jpg', subtitle: 'By Halo Themes on September 24, 2019', title: 'Commodo De Quis Magna Rutrum Delos Placerat Milancelos', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis risus leo, elementum in malesuada an darius ut augue. Cras sit amet lectus et justo feugiat euismod sed non erat. Nulla non felis id metus...', btn: 'Read More' },
  { img: 'https://justfields.com/storage/projects/7M5rV059/home-012.jpg', subtitle: 'By Halo Themes on September 24, 2019', title: 'Naminos Delementum Disumos An Cosmo Tincidunts Loremous', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis risus leo, elementum in malesuada an darius ut augue. Cras sit amet lectus et justo feugiat euismod sed non erat. Nulla non felis id metus...', btn: 'Read More' },
  { img: 'https://justfields.com/storage/projects/7M5rV059/home-013.jpg', subtitle: 'By Halo Themes on September 24, 2019', title: 'Loremous Cosmopolis', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis risus leo, elementum in malesuada an darius ut augue. Cras sit amet lectus et justo feugiat euismod sed non erat. Nulla non felis id metus...', btn: 'Read More' },
  { img: 'https://justfields.com/storage/projects/7M5rV059/home-011.jpg', subtitle: 'By Halo Themes on September 24, 2019', title: 'Commodo De Quis Magna Rutrum Delos Placerat Milancelos', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis risus leo, elementum in malesuada an darius ut augue. Cras sit amet lectus et justo feugiat euismod sed non erat. Nulla non felis id metus...', btn: 'Read More' },
]);

const numberOfSlides = computed(() => {
  return Math.ceil(cards.value.length / 2);
});

function getCardsForSlide(slideIndex) {
  const start = slideIndex * 2;
  return cards.value.slice(start, start + 2);
}
</script>
