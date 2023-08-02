import {
  defineNuxtModule,
  createResolver,
  addComponent,
  addPlugin,
} from "@nuxt/kit";
import { name, version } from "../package.json";
export type {
  NuxtPlotlyData,
  NuxtPlotlyConfig,
  NuxtPlotlyLayout,
  NuxtPlotlyHTMLElement,
} from "./runtime/components/nuxt-plotly";

export interface ModuleOptions {
  inject: boolean;
}

export default defineNuxtModule<ModuleOptions>({
  defaults: () => ({
    inject: false,
  }),
  meta: {
    name,
    version,
    configKey: "nuxtPlotly",
    compatibility: {
      nuxt: "^3.6.0",
    },
  },
  setup(options) {
    const resolver = createResolver(import.meta.url);

    // Add component
    addComponent({
      name: "NuxtPlotly",
      filePath: resolver.resolve("./runtime/components/nuxt-plotly"),
    });

    // Add runtime plugin
    if (options.inject) {
      addPlugin({ src: resolver.resolve("./runtime/plugin"), mode: "client" });
    }
  },
});
