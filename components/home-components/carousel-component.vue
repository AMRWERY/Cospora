<template>
    <div class="mx-auto mt-12 max-w-7xl">
        <div id="carouselExampleIndicators" class="relative" data-twe-carousel-init data-twe-ride="carousel"
            data-twe-interval="3000" data-twe-keyboard="true">
            <!--Carousel indicators-->
            <div class="absolute bottom-0 start-0 end-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
                data-twe-carousel-indicators>
                <button type="button" data-twe-target="#carouselExampleIndicators" data-twe-slide-to="0"
                    data-twe-carousel-active
                    class="mx-[6px] h-[10px] w-[10px] flex-initial cursor-pointer border-0 border-transparent bg-black bg-clip-padding opacity-50 rounded-full transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-twe-target="#carouselExampleIndicators" data-twe-slide-to="1"
                    class="mx-[6px] h-[10px] w-[10px] flex-initial cursor-pointer border-0 border-transparent bg-black bg-clip-padding opacity-50 rounded-full transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                    aria-label="Slide 2"></button>
                <button type="button" data-twe-target="#carouselExampleIndicators" data-twe-slide-to="2"
                    class="mx-[6px] h-[10px] w-[10px] flex-initial cursor-pointer border-0 border-transparent bg-black bg-clip-padding opacity-50 rounded-full transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                    aria-label="Slide 3"></button>
            </div>

            <!--Carousel items-->
            <div class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                <!--First item-->
                <div class="relative float-start -me-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-twe-carousel-item data-twe-carousel-active>
                    <img src="https://justfields.com/storage/projects/7M5rV059/home-01.jpg"
                        class="block mx-auto w-7xl" />
                    <div
                        class="absolute inset-y-0 flex flex-col items-center justify-center w-1/3 space-y-2 text-lg font-semibold text-center text-black ms-36 left-10">
                        <p class="text-lg font-semibold capitalize lg:text-4xl">
                            {{ $t('home.milancelos') }}
                        </p>
                        <p class="hidden text-xs font-light line-clamp-2 sm:block">{{
                            $t('home.pellentesque_posuere_morci_lobortis_scelerisque_blandit_donec_an_tellus_lacinia_an_tincidunt_risus_de_cosmopolis_consequat_velitos')
                            }}</p>
                        <div class="hidden sm:block">
                            <button class="px-10 py-3 mt-8 text-sm text-white capitalize bg-black rounded">
                                {{ $t('btn.shop_now') }}
                            </button>
                        </div>
                    </div>
                </div>
                <!--Second item-->
                <div class="relative float-start -me-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-twe-carousel-item>
                    <img src="https://justfields.com/storage/projects/7M5rV059/home-03.jpg"
                        class="block mx-auto w-7xl" />
                    <div
                        class="absolute inset-y-0 flex flex-col items-center justify-center w-1/3 space-y-2 text-lg font-semibold text-center text-black me-36 right-12">
                        <p class="text-lg font-semibold capitalize lg:text-4xl">
                            {{ $t('home.lorémica') }}
                        </p>
                        <p class="hidden text-xs font-light line-clamp-2 sm:block">{{
                            $t('home.pellentesque_posuere_morci_lobortis_scelerisque_blandit_donec_an_tellus_lacinia_an_tincidunt_risus_de_cosmopolis_consequat_velitos')
                            }}</p>
                        <div class="hidden sm:block">
                            <button class="px-10 py-3 mt-8 text-sm text-white capitalize bg-black rounded">
                                {{ $t('btn.shop_the_collection') }}
                            </button>
                        </div>
                    </div>
                </div>
                <!--Third item-->
                <div class="relative float-start -me-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-twe-carousel-item>
                    <img src="https://justfields.com/storage/projects/7M5rV059/home-02.jpg"
                        class="block mx-auto w-7xl" />
                    <div
                        class="absolute inset-y-0 flex flex-col items-center justify-center w-1/3 space-y-2 text-lg font-semibold text-center text-black ms-36 left-12">
                        <p class="text-lg font-semibold capitalize lg:text-4xl">
                            {{ $t('home.beauty_shop') }}
                        </p>
                        <p class="hidden text-xs font-light line-clamp-2 sm:block">{{
                            $t('home.pellentesque_posuere_morci_lobortis_scelerisque_blandit_donec_an_tellus_lacinia_an_tincidunt_risus_de_cosmopolis_consequat_velitos')
                            }}</p>
                        <div class="hidden sm:block">
                            <button class="px-10 py-3 mt-8 text-sm text-white capitalize bg-black rounded">
                                {{ $t('btn.shop_now') }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!--Carousel controls - prev item-->
            <button
                class="absolute bottom-0 start-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                type="button" data-twe-target="#carouselExampleIndicators" data-twe-slide="prev">
                <span class="inline-block w-8 h-8 rtl:rotate-180">
                    <icon name="material-symbols:arrow-back-ios" class="w-6 h-6 text-black" />
                </span>
                <span
                    class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Previous</span>
            </button>
            <!--Carousel controls - next item-->
            <button
                class="absolute bottom-0 end-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                type="button" data-twe-target="#carouselExampleIndicators" data-twe-slide="next">
                <span class="inline-block w-8 h-8 rtl:rotate-180">
                    <icon name="material-symbols:arrow-forward-ios-rounded" class="w-6 h-6 text-black" />
                </span>
                <span
                    class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Next</span>
            </button>
        </div>

        <div class="mt-12 space-y-6 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            <div v-for="card in cards" :key="card"
                class="relative duration-300 transform cursor-pointer group hover:scale-105" data-twe-ripple-init
                data-twe-ripple-color="dark">
                <div class="relative w-full h-48 overflow-hidden rounded-lg group-hover:opacity-75 sm:h-48">
                    <img :src="card.img" class="object-cover object-center size-full" />
                    <div class="absolute inset-0 flex items-center justify-center">
                        <h3 class="relative overflow-hidden text-xl font-semibold text-white capitalize">
                            {{ card.title }}
                            <span
                                class="absolute bottom-0 start-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full">
                            </span>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { t } = useI18n();

const cards = computed(() => [
    { img: 'https://justfields.com/storage/projects/7M5rV059/home-04.jpg', title: t('home.lipstick') },
    { img: 'https://justfields.com/storage/projects/7M5rV059/home-05.jpg', title: t('layout.makeup') },
    { img: 'https://justfields.com/storage/projects/7M5rV059/home-06.jpg', title: t('home.tools') },
]);

onMounted(async () => {
    const { Carousel, initTWE } = await import("tw-elements");
    initTWE({ Carousel });
});
</script>