<!-- eslint-disable vue/html-self-closing -->
<template>
  <div>
    <h1>nuxt-plotly module playground!</h1>
    <client-only>
      <nuxt-plotly
        :data="data"
        :layout="layout"
        :config="config"
        style="width: 100%"
      ></nuxt-plotly>
    </client-only>
    <pie-chart></pie-chart>
  </div>
</template>

<script setup lang="ts">
import {
  NuxtPlotlyConfig,
  NuxtPlotlyData,
  NuxtPlotlyLayout,
} from "../src/module";

// When you install the nuxt-plotly module please use the following syntax
// import { NuxtPlotlyConfig, NuxtPlotlyData, NuxtPlotlyLayout } from 'nuxt-plotly'

const data: NuxtPlotlyData = [
  {
    type: "scatter",
    mode: "lines",
    x: ["2018-01-01", "2018-08-31"],
    y: [10, 5],
    line: { color: "#17BECF" },
  },
  {
    type: "scatter",
    mode: "lines",
    x: ["2018-01-01", "2018-08-31"],
    y: [3, 7],
    line: { color: "#7F7F7F" },
  },
];
const layout: NuxtPlotlyLayout = {
  title: "My graph on app.vue with <client-only>",
};

const config: NuxtPlotlyConfig = { scrollZoom: true, displayModeBar: false };
</script>
