<template>
  <div>
    <breadcrumb />

    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <p class="mt-8 text-2xl font-bold capitalize">brands</p>
      <div class="flex flex-wrap gap-0 p-4">
        <div v-for="letter in extendedAlphabet" :key="letter"
          class="flex items-center justify-center w-10 h-10 text-sm font-normal rounded shadow cursor-pointer"
          :class="{ 'underline decoration-black underline-offset-2': letter === 'All' }">
          {{ letter }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const alphabet = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
const extendedAlphabet = ['All', ...alphabet, '#'];
</script>