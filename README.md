<p align="center">
  <a href="https://github.com/superdev-tech/nuxt-plotly" target="_blank" rel="noopener noreferrer">
    <img style="width:400px" src="https://raw.githubusercontent.com/superdev-tech/nuxt-plotly/main/nuxt-plotly-logo.svg" alt="nuxt-plotly logo">
  </a>
</p>
<br/>
<p align="center">
  <a href="https://npmjs.com/package/nuxt-plotly"><img src="https://img.shields.io/npm/v/nuxt-plotly/latest.svg?style=flat&colorA=18181B&colorB=28CF8D" alt="npm version"></a>
  <a href="https://npmjs.com/package/nuxt-plotly"><img src="https://img.shields.io/npm/dm/nuxt-plotly.svg?style=flat&colorA=18181B&colorB=28CF8D" alt="npm download"></a>
  <a href="https://github.com/superdev-tech/nuxt-plotly/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/nuxt-plotly.svg?style=flat&colorA=18181B&colorB=28CF8D" alt="MIT license"></a>
  <a href="https://nuxt.com/modules/nuxt-plotly"><img src="https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js" alt="nuxt-plotly module on nuxt official"></a>
</p>
<br/>

# Nuxt Plotly Module

📊 `nuxt-plotly` module is thin Nuxt3 wrapper for [plotly.js](https://plotly.com/javascript/)

- [🏀 Online playground](https://stackblitz.com/edit/nuxt-starter-1bs1ke?file=app.vue)
- [📖 &nbsp;Plotly Documentation](https://plotly.com/javascript/plotly-fundamentals/)

## Features

<!-- Highlight some of the features your module provide here -->

- 🎇 &nbsp; All plotly.js methods and events
- 🗾 &nbsp; Auto redraw on screensize changes and props update
- 🚀 &nbsp; Data reactivity
- 🏝️ &nbsp; TypeScript support

## Quick Setup

1. Add `nuxt-plotly` dependency to your project

```bash
npx nuxi@latest module add nuxt-plotly
```

2. Add `nuxt-plotly` to the `modules` section of `nuxt.config.ts`

```js
// nuxt.config.js
export default defineNuxtConfig({
  /**
   * Add nuxt-plotly module
   */
  modules: ["nuxt-plotly"],

  /**
   * Add nuxt-plotly module with options
   * Set the inject option to true to use plotly function via $plotly
   */
  // modules: [["nuxt-plotly", { inject: true }]],
});
```

3. Add `plotly.js-dist-min` to the `vite.optimizeDeps.include` section of `nuxt.config.ts`

```js
// nuxt.config.js
export default defineNuxtConfig({
  vite: {
    optimizeDeps: {
      include: ["plotly.js-dist-min"],
    },
  },
});
```

That's it! You can now use Nuxt Plotly Module in your Nuxt app ✨

## Require client-side

There are two ways to use the `nuxt-plotly` module on the client-side in Nuxt3:

1. Wrap the component with the `<client-only>` tag.

```html
<client-only>
  <nuxt-plotly
    :data="pieChart.data"
    :layout="pieChart.layout"
    :config="pieChart.config"
    style="width: 100%"
  ></nuxt-plotly>
</client-only>
```

2. Create a file with the `.client.vue` extension, for example, [PieChart.client.vue](https://github.com/superdev-tech/nuxt-plotly/blob/main/playground/components/PieChart.client.vue) and then you can use the component without the `<client-only>` tag.

## Plotly Event listeners

You can access [Plotly events](https://plotly.com/javascript/plotlyjs-events) using the `@on-ready` directive to receive the `PlotlyHTMLElement` object from the `<nuxt-plotly>` component.

- HTML template example

```html
<template>
  <client-only>
    <nuxt-plotly
      :data="data"
      :layout="layout"
      :config="config"
      @on-ready="myChartOnReady"
    ></nuxt-plotly>
  </client-only>
</template>
```

- After receiving the PlotlyHTMLElement, you can access Plotly events

```typescript
function myChartOnReady(plotlyHTMLElement: NuxtPlotlyHTMLElement) {
  console.log({ plotlyHTMLElement });

  plotlyHTMLElement.on?.("plotly_afterplot", function () {
    console.log("done plotting");
  });

  plotlyHTMLElement.on?.("plotly_click", function () {
    alert("You clicked this Plotly chart!");
  });
}
```

## Plotly Functions

To use the [Plotly Function](https://plotly.com/javascript/plotlyjs-function-reference/) in your nuxt project, follow these steps:

- Step 1: Set the `inject` option to `true` in the `nuxt-plotly` module configuration of your `nuxt.config.ts` file.

```js
// nuxt.config.js
export default defineNuxtConfig({
  modules: [["nuxt-plotly", { inject: true }]],
});
```

- Step 2: After setting the inject option to true, you can now access the plotly function via `$plotly` in your nuxt project.

```ts
// app.vue

const { $plotly } = useNuxtApp();

/**
 * Show all plotly functions
 */
console.log($plotly);

/**
 * Use downloadImage function
 */
$plotly.downloadImage(plotlyHTMLElement as HTMLElement, {
  format: "png",
  width: 800,
  height: 600,
  filename: "newplot",
});
```

## Type Aliases

These type aliases simplify the usage of Plotly types in your Nuxt project:

```typescript
/**
 * Represents an array of Plotly data objects.
 */
export type NuxtPlotlyData = Array<Plotly.Data>;

/**
 * Represents a partial configuration object for Plotly charts.
 */
export type NuxtPlotlyConfig = Partial<Plotly.Config>;

/**
 * Represents a partial layout object for Plotly charts.
 */
export type NuxtPlotlyLayout = Partial<Plotly.Layout>;

/**
 * Represents a partial HTML element that holds a rendered Plotly chart.
 */
export type NuxtPlotlyHTMLElement = Partial<Plotly.PlotlyHTMLElement>;
```

With these type aliases, you can easily work with Plotly data, configurations, layouts, and HTML elements in your Nuxt application, enhancing your experience when creating interactive charts and visualizations.

## Development: If you want to contribute

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

## License

Copyright © 2023 [Supanut Dokmaithong](https://github.com/Boomgeek).

This project is [MIT licensed](https://github.com/superdev-tech/nuxt-plotly/blob/main/LICENSE).
