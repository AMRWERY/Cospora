<template>
  <div>
    <div id="chart">
      <apexchart type="area" height="350" :options="chartOptions" :series="series"></apexchart>
    </div>
  </div>
</template>

<script setup>
const generateDayWiseTimeSeries = (baseval, count, yrange) => {
  let i = 0;
  const series = [];
  while (i < count) {
    const x = baseval;
    const y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    series.push({ x, y });
    baseval += 86400000;
    i++;
  }
  return series;
};

const series = ref([
  {
    name: "Orders",
    data: generateDayWiseTimeSeries(
      new Date("11 Feb 2017 GMT").getTime(),
      20,
      { min: 10, max: 60 }
    ),
  },
  {
    name: "Inventory",
    data: generateDayWiseTimeSeries(
      new Date("11 Feb 2017 GMT").getTime(),
      20,
      { min: 10, max: 20 }
    ),
  },
  {
    name: "Customers",
    data: generateDayWiseTimeSeries(
      new Date("11 Feb 2017 GMT").getTime(),
      20,
      { min: 10, max: 15 }
    ),
  },
]);

const chartOptions = ref({
  chart: {
    type: "area",
    height: 350,
    stacked: true,
    toolbar: {
      show: false,
    },
    events: {
      selection: function (chart, e) {
        console.log(new Date(e.xaxis.min));
      },
    },
  },
  colors: ["#008FFB", "#00E396", "#CED4DC"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "monotoneCubic",
  },
  fill: {
    type: "gradient",
    gradient: {
      opacityFrom: 0.6,
      opacityTo: 0.8,
    },
  },
  legend: {
    position: "top",
    horizontalAlign: "left",
  },
  xaxis: {
    type: "datetime",
  },
});
</script>