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
        @on-ready="myChartOnReady"
      ></nuxt-plotly>
    </client-only>
    <pie-chart></pie-chart>
  </div>
</template>

<script setup lang="ts">
import { useNuxtApp } from "nuxt/app";
import {
  NuxtPlotlyConfig,
  NuxtPlotlyData,
  NuxtPlotlyLayout,
  NuxtPlotlyHTMLElement,
} from "../src/module";

// When you install the nuxt-plotly module please use the following syntax
// import { NuxtPlotlyConfig, NuxtPlotlyData, NuxtPlotlyLayout } from 'nuxt-plotly'

const x = [1, 2, 3, 4, 5];
const y = [10, 20, 30, 20, 10];
const data: NuxtPlotlyData = [
  { x: x, y: y, type: "scatter", mode: "markers", marker: { size: 20 } },
];
const layout: NuxtPlotlyLayout = {
  title: "My graph on app.vue with <client-only>",
};

const config: NuxtPlotlyConfig = { scrollZoom: true, displayModeBar: false };

function myChartOnReady(plotlyHTMLElement: NuxtPlotlyHTMLElement) {
  const { $plotly } = useNuxtApp();
  console.log({ $plotly });
  console.log({ plotlyHTMLElement });

  plotlyHTMLElement.on?.("plotly_afterplot", function () {
    console.log("done plotting");
  });

  plotlyHTMLElement.on?.("plotly_click", function () {
    alert("You clicked this Plotly chart!");

    // use plotly function via `$plotly` to download chart image
    $plotly.downloadImage(plotlyHTMLElement as HTMLElement, {
      format: "png",
      width: 800,
      height: 600,
      filename: "newplot",
    });
  });
}
</script>
