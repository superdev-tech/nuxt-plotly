# Nuxt Plotly Module

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

📊 `nuxt-plotly` module is thin Nuxt3 wrapper for [plotly.js](https://plotly.com/javascript/)

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
- [🏀 Online playground](https://stackblitz.com/edit/nuxt-starter-1bs1ke?file=app.vue)
- [📖 &nbsp;Plotly Documentation](https://plotly.com/javascript/plotly-fundamentals/)

## Features

<!-- Highlight some of the features your module provide here -->

- 🎇 &nbsp; All plotly.js methods and events
- 🗾 &nbsp; Auto redraw on screensize changes and props update
- 🚀 &nbsp; Data reactivity
- 🏝️ &nbsp; TypeScript support

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

2. Create a file with the `.client.vue` extension, for example, `PlotlyPieChart.client.vue` and then you can use the component without the `<client-only>` tag.

- 🎯 &nbsp; [See Example](/playground/app.vue)

## Quick Setup

1. Add `nuxt-plotly` dependency to your project

```bash
# Using pnpm
pnpm add -D nuxt-plotly

# Using yarn
yarn add --dev nuxt-plotly

# Using npm
npm install --save-dev nuxt-plotly
```

2. Add `nuxt-plotly` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: ["nuxt-plotly"],
});
```

3. Add `plotly.js-dist-min` to the `vite.optimizeDeps.include` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  vite: {
    optimizeDeps: {
      include: ["plotly.js-dist-min"],
    },
  },
});
```

That's it! You can now use Nuxt Plotly Module in your Nuxt app ✨

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

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/nuxt-plotly/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt-plotly
[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-plotly.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-plotly
[license-src]: https://img.shields.io/npm/l/nuxt-plotly.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/nuxt-plotly
[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
