<!-- eslint-disable vue/html-self-closing -->
<template>
  <div>
    <h1>nuxt-plotly module playground!</h1>
    <client-only>
      <nuxt-plotly
        :data="data"
        :layout="layout"
        :config="{ scrollZoom: true, displayModeBar: false }"
        style="width: 100%"
      ></nuxt-plotly>
    </client-only>
    <pie-chart></pie-chart>
  </div>
</template>

<script setup>
const trace1 = {
  type: "scatter",
  mode: "lines",
  x: ["2018-01-01", "2018-08-31"],
  y: [10, 5],
  line: { color: "#17BECF" },
};

const trace2 = {
  type: "scatter",
  mode: "lines",
  x: ["2018-01-01", "2018-08-31"],
  y: [3, 7],
  line: { color: "#7F7F7F" },
};

const data = [trace1, trace2];
const layout = {
  title: "My graph on app.vue with <client-only>",
};
</script>
