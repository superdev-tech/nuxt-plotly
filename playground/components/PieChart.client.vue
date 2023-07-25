<!-- eslint-disable vue/html-self-closing -->
<template>
  <div>
    <h1>Test Re-Draw</h1>
    <button :onClick="changeData" style="width: 100%">Change Data</button>
    <button :onClick="changeLayout" style="width: 100%">Change Layout</button>
    <button :onClick="changeConfig" style="width: 100%">Change Config</button>
    <nuxt-plotly
      :data="pieChart.data"
      :layout="pieChart.layout"
      :config="pieChart.config"
      style="width: 100%"
    ></nuxt-plotly>
  </div>
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

const layout0 = {
  title: "[layout0] Pie Chart on `PieChart.client.vue`",
};
const layout1 = {
  title: "[layout1] Pie Chart on `PieChart.client.vue`",
};

const config0 = { scrollZoom: true, displayModeBar: true };
const config1 = { scrollZoom: false, displayModeBar: false };

const pieChart = reactive({
  changeDataNo: 1,
  data: data0,
  changeConfigNo: 1,
  config: config0,
  changeLayoutNo: 1,
  layout: layout0,
});

function changeData() {
  if (pieChart.changeDataNo === 1) {
    pieChart.data = data1;
    pieChart.changeDataNo = 0;
  } else {
    pieChart.data = data0;
    pieChart.changeDataNo = 1;
  }
}

function changeLayout() {
  if (pieChart.changeLayoutNo === 1) {
    pieChart.layout = layout1;
    pieChart.changeLayoutNo = 0;
  } else {
    pieChart.layout = layout0;
    pieChart.changeLayoutNo = 1;
  }
}

function changeConfig() {
  if (pieChart.changeConfigNo === 1) {
    pieChart.config = config1;
    pieChart.changeConfigNo = 0;
  } else {
    pieChart.config = config0;
    pieChart.changeConfigNo = 1;
  }
}
</script>
