<template>
  <div class="mt-12">
    <div class="flex items-center justify-center mt-8 mb-3">
      <div class="w-1/12 h-1 border-t-2 border-gray-700"></div>
      <span class="mx-4 text-2xl font-bold leading-10 capitalize">{{ $t('home.recent_posts') }}</span>
      <div class="w-1/12 h-1 border-t-2 border-gray-700"></div>
    </div>

    <ClientOnly>
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
                  class="absolute bottom-0 w-full p-4 text-center transform -translate-x-1/2 translate-y-0 bg-black bg-opacity-50 start-1/2">
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
    </ClientOnly>
  </div>
</template>

<script setup>
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

const { t } = useI18n();

const cards = computed(() => [
  {
    img: 'https://justfields.com/storage/projects/7M5rV059/home-011.jpg',
    subtitle: t('home.by_halo_themes_on_september'),
    title: t('home.commodo_de_quis_magna_rutrum_delos_placerat_milancelos'),
    content: t('home.lorem_ipsum_dolor_sit_amet_consectetur_adipiscing_elit_duis_risus_leo_elementum_in_malesuada_an_darius_ut_augue_cras_sit_amet_lectus_et_justo_feugiat_euismod_sed_non_erat_nulla_non_felis_id_metus'),
    btn: t('btn.read_more')
  },
  {
    img: 'https://justfields.com/storage/projects/7M5rV059/home-012.jpg',
    subtitle: t('home.by_halo_themes_on_september'),
    title: t('home.naminos_delementum_disumos_an_cosmo_tincidunts_loremous'),
    content: t('home.lorem_ipsum_dolor_sit_amet_consectetur_adipiscing_elit_duis_risus_leo_elementum_in_malesuada_an_darius_ut_augue_cras_sit_amet_lectus_et_justo_feugiat_euismod_sed_non_erat_nulla_non_felis_id_metus'),
    btn: t('btn.read_more')
  },
  {
    img: 'https://justfields.com/storage/projects/7M5rV059/home-013.jpg',
    subtitle: t('home.by_halo_themes_on_september'),
    title: t('home.loremous_cosmopolis'),
    content: t('home.lorem_ipsum_dolor_sit_amet_consectetur_adipiscing_elit_duis_risus_leo_elementum_in_malesuada_an_darius_ut_augue_cras_sit_amet_lectus_et_justo_feugiat_euismod_sed_non_erat_nulla_non_felis_id_metus'),
    btn: t('btn.read_more')
  },
  {
    img: 'https://justfields.com/storage/projects/7M5rV059/home-011.jpg',
    subtitle: t('home.by_halo_themes_on_september'),
    title: t('home.commodo_de_quis_magna_rutrum_delos_placerat_milancelos'),
    content: t('home.lorem_ipsum_dolor_sit_amet_consectetur_adipiscing_elit_duis_risus_leo_elementum_in_malesuada_an_darius_ut_augue_cras_sit_amet_lectus_et_justo_feugiat_euismod_sed_non_erat_nulla_non_felis_id_metus'),
    btn: t('btn.read_more')
  }
]);

const numberOfSlides = computed(() => {
  return Math.ceil(cards.value.length / 2);
});

function getCardsForSlide(slideIndex) {
  const start = slideIndex * 2;
  return cards.value.slice(start, start + 2);
}
</script>