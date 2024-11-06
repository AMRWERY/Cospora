<template>
    <div>
        <Carousel v-bind="config">
            <Slide v-for="(slide, index) in slides" :key="slide.img">
                <div class="relative">
                    <img :src="slide.img" class="w-11/12 h-auto mx-auto" />
                    <div :class="[
                        'absolute inset-y-0 flex flex-col items-center justify-center text-center text-black text-lg font-semibold w-1/3 space-y-2 ml-24',
                        index === slides.length - 1 ? 'right-5 mr-24' : 'left-5 ml-24'
                    ]">
                        <p class="text-lg text-4xl font-semibold uppercase lg:text-4xl">
                            {{ slide.title }}
                        </p>
                        <p class="hidden text-xs font-light line-clamp-2 sm:block">{{ slide.text }}</p>
                        <div class="hidden sm:block">
                            <button class="px-10 py-3 mt-8 text-sm text-white uppercase bg-black rounded">
                                {{ slide.btn }}
                            </button>
                        </div>
                    </div>
                    <div class="absolute bottom-0 left-0 right-0 flex justify-center pb-3">
                        <Pagination />
                    </div>
                </div>
            </Slide>

            <template #addons>
                <Navigation />
            </template>
        </Carousel>

        <div class="grid grid-cols-1 gap-4 px-12 sm:grid-cols-3">
            <div class="p-4" v-for="card in cards" :key="card">
                <div
                    class="relative mx-auto overflow-hidden duration-300 transform rounded shadow-md cursor-pointer mt-11 dark:bg-slate-800 hover:scale-105 hover:shadow-lg">
                    <img class="object-cover object-center w-full h-44" :src="card.img" />
                    <div class="absolute inset-0 flex items-center justify-center">
                        <h3 class="p-2 text-xl font-semibold text-white uppercase">
                            {{ card.title }}
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

const slides = ref([
    { img: 'https://justfields.com/storage/projects/7M5rV059/home-01.jpg', title: 'Milancelos', text: 'Pellentesque posuere morci lobortis scelerisque blandit. Donec an tellus lacinia an tincidunt risus de cosmopolis consequat velitos.', btn: 'Shop Now' },
    { img: 'https://justfields.com/storage/projects/7M5rV059/home-02.jpg', title: 'Beauty Shop', text: 'Pellentesque posuere morci lobortis scelerisque blandit. Donec an tellus lacinia an tincidunt risus de cosmopolis consequat velitos.', btn: 'Shop Now' },
    { img: 'https://justfields.com/storage/projects/7M5rV059/home-03.jpg', title: 'Lorémica', text: 'Pellentesque posuere morci lobortis scelerisque blandit. Donec an tellus lacinia an tincidunt risus de cosmopolis consequat velitos.', btn: 'Shop The Collection' },
])

const cards = ref([
    { img: 'https://justfields.com/storage/projects/7M5rV059/home-04.jpg', title: 'Lipstick' },
    { img: 'https://justfields.com/storage/projects/7M5rV059/home-05.jpg', title: 'Makeup' },
    { img: 'https://justfields.com/storage/projects/7M5rV059/home-06.jpg', title: 'Tools' },
])

const config = {
    itemsToShow: 1,
    autoplay: 4000,
    wrapAround: true,
    pauseAutoplayOnHover: true,
    snapAlign: 'center',
    transition: 300,
    breakpoints: {
        200: {
            itemsToShow: 1,
            snapAlign: 'center',
        },
        400: {
            itemsToShow: 1,
            snapAlign: 'center',
        },
    },
};
</script>

<style scoped>
.carousel__item {
    position: relative;
}
</style>