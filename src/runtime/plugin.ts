import type { Plugin } from "nuxt/app";
import { defineNuxtPlugin } from "#imports";

import Plotly from "plotly.js-dist-min";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      plotly: Plotly,
    },
  };
}) as Plugin<{ plotly: typeof Plotly }>;
