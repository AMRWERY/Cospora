<template>
  <div>
    <div class="px-4 mx-auto max-w-[1400px] sm:px-6 lg:px-8">
      <div class="flex flex-col items-center space-y-2 bg-home/40 md:space-y-4">
        <div class="relative w-full h-[200px] md:h-[300px] lg:h-auto">
          <img src="https://i.imghippo.com/files/kJpC8788N.jpg" decoding="async" data-nimg="future-fill"
            class="object-cover object-center w-full h-full" loading="lazy" />
        </div>
      </div>
      <div class="space-y-2 my-7 md:space-y-4">
        <p class="text-2xl font-bold">{{ category }}</p>
        <p class="text-xs text-gray-800">Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque non nulla
          nulla,
          nec tincidunt risus morbi
          ultricies est ditae odio ultrices imperdiet. Cras accumsan dorci maces consequat blandi susto dusto
          elementum
          libero non honcus purus sem sit amet enimos.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();

const category = computed(() => {
  if (route.path.includes('accessories')) {
    return 'Accessories';
  } else if (route.path.includes('makeup')) {
    return 'Makeup';
  }
  return '';
});
</script>