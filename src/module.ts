import { defineNuxtModule, createResolver, addComponent } from "@nuxt/kit";
import { name, version } from "../package.json";
export type {
  NuxtPlotlyData,
  NuxtPlotlyConfig,
  NuxtPlotlyLayout,
} from "./runtime/components/nuxt-plotly";

export default defineNuxtModule({
  meta: {
    name,
    version,
    configKey: "nuxtPlotly",
    compatibility: {
      nuxt: "^3.6.0",
    },
  },
  // Default configuration options of the Nuxt module
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);

    // Add component
    addComponent({
      name: "NuxtPlotly",
      filePath: resolver.resolve("./runtime/components/nuxt-plotly"),
    });
  },
});
