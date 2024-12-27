<template>
  <div>
    <!-- <client-only> -->
    <apexchart type="bar" :options="chartOptions" :series="chartSeries" />
    <!-- </client-only> -->
  </div>
</template>

<script setup>
const chartOptions = ref({
  chart: {
    id: 'example',
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar'],
  },
});

const chartSeries = ref([
  {
    name: 'Sales',
    data: [30, 40, 50],
  },
]);
</script>