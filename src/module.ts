import { defineNuxtModule, createResolver, addComponent } from "@nuxt/kit";
import { name, version } from "../package.json";

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: "nuxtPlotly",
    compatibility: {
      nuxt: "^3.6.0",
    },
  },
  // Default configuration options of the Nuxt module
  defaults: () => ({}),
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);

    if (process.server) {
      console.log("No work in server");
    }

    // Add component
    addComponent({
      name: "NuxtPlotly",
      filePath: resolver.resolve("./runtime/components/nuxt-plotly"),
    });
  },
});
