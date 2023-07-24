<!-- eslint-disable vue/html-self-closing -->
<template>
  <button :onClick="changeData">Change Data</button>
  <nuxt-plotly
    :data="pieChart.data"
    :layout="pieChart.layout"
    style="width: 100%"
  ></nuxt-plotly>
</template>

<script setup>
import { reactive } from "vue";

const data0 = [
  {
    values: [19, 26, 55],
    labels: ["Residential", "Non-Residential", "Utility"],
    type: "pie",
  },
];

const data1 = [
  {
    values: [16, 15, 12, 6, 5, 4, 42],
    labels: [
      "US",
      "China",
      "European Union",
      "Russian Federation",
      "Brazil",
      "India",
      "Rest of World",
    ],
    domain: { column: 0 },
    name: "GHG Emissions",
    hoverinfo: "label+percent+name",
    hole: 0.4,
    type: "pie",
  },
  {
    values: [27, 11, 25, 8, 1, 3, 25],
    labels: [
      "US",
      "China",
      "European Union",
      "Russian Federation",
      "Brazil",
      "India",
      "Rest of World",
    ],
    text: "CO2",
    textposition: "inside",
    domain: { column: 1 },
    name: "CO2 Emissions",
    hoverinfo: "label+percent+name",
    hole: 0.4,
    type: "pie",
  },
];

const pieChart = reactive({
  changeNo: 1,
  data: data0,
  layout: {
    title: "Pie Chart on `PieChart.client.vue`",
  },
});

function changeData() {
  if (pieChart.changeNo === 1) {
    pieChart.data = data1;
    pieChart.changeNo = 0;
  } else {
    pieChart.data = data0;
    pieChart.changeNo = 1;
  }
}
</script>
