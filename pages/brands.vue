<template>
  <div>
    <breadcrumb />

    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <p class="mt-8 text-2xl font-bold capitalize">Brands</p>
      <!-- Alphabet Cards -->
      <div class="flex flex-wrap gap-0 p-8">
        <div v-for="letter in extendedAlphabet" :key="letter"
          class="flex items-center justify-center w-10 h-10 text-sm font-normal rounded shadow cursor-pointer"
          :class="{ 'font-semibold': isActiveLetter(letter), 'underline underline-offset-4': letter === 'All' }">
          {{ letter }}
        </div>
      </div>

      <!-- Brand List -->
      <div class="mt-6 border-t border-gray-100">
        <dl class="divide-y divide-gray-100">
          <div v-for="(group, index) in groupedBrands" :key="index"
            class="flex flex-wrap items-start px-4 py-6 space-y-2 sm:space-y-0 sm:px-0">
            <!-- Alphabet Letter -->
            <dt class="mt-[5px] text-lg font-semibold text-gray-900 sm:w-1/6">
              {{ group.letter }}
            </dt>

            <!-- Brand Names -->
            <dd class="flex flex-wrap gap-4 text-gray-700 text-sm/6 sm:w-5/6 space-s-10">
              <span v-for="(brand, i) in group.brands" :key="i" class="cursor-pointer">
                {{ brand }}
              </span>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
const alphabet = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
const extendedAlphabet = ['All', ...alphabet, '#'];

const brands = [
  { letter: 'A', brands: ['Anna'] },
  { letter: 'B', brands: ['Burberry'] },
  { letter: 'C', brands: ['Chanel', 'Coco Lee', 'Collette'] },
  { letter: 'F', brands: ['French Connection'] },
  { letter: 'J', brands: ['Jimmy Choo'] },
  { letter: 'M', brands: ['Marc'] },
  { letter: 'T', brands: ['Tomorrow'] },
];

const activeLetter = ref('All');

const groupedBrands = ref(brands);

const isActiveLetter = (letter) => {
  return groupedBrands.value.some((group) => group.letter === letter);
};
</script>

<style scoped>
dt {
  min-width: 50px;
}

dd span {
  white-space: nowrap;
}
</style>