# Theme 介绍 {#theme-introduction}

VitePress 带有它的默认主题，提供了许多开箱即用的功能。在下面列出的专用页面上了解有关每个功能的更多信息。

- [顶部导航](./theme-nav)
- [侧边栏](./theme-sidebar)
- [上下页文本](./theme-prev-next-link)
- [编辑链接](./theme-edit-link)
- [最近更新时间](./theme-last-updated)
- [布局](./theme-layout)
- [主页](./theme-home-page)
- [团队](./theme-team-page)
- [徽标](./theme-badge)
- [页脚](./theme-footer)
- [搜索](./theme-search)
- [Carbon Ads](./theme-carbon-ads)

如果你没有找到你正在寻找的功能，或者你更愿意创建自己的 theme，你可以自定义 VitePress 以满足你的要求。在以下部分中，我们将介绍 VitePress 自定义 theme 的各种方式。

## 使用自定义 theme {#Using-a-Custom-Theme}

你可以通过添加 `.vitepress/theme/index.js `或 `.vitepress/theme/index.ts` 文件（“主题入口文件”）启用自定义 theme。

```
.
├─ docs
│  ├─ .vitepress
│  │  ├─ theme
│  │  │  └─ index.js
│  │  └─ config.js
│  └─ index.md
└─ package.json
```

VitePress 自定义 theme 是一个包含四个属性的对象，定义如下：

```ts
interface Theme {
  Layout: Component // Vue 3 component
  NotFound?: Component
  enhanceApp?: (ctx: EnhanceAppContext) => Awaitable<void>
  setup?: () => void
}

interface EnhanceAppContext {
  app: App // Vue 3 app instance
  router: Router // VitePress router instance
  siteData: Ref<SiteData>
}
```

theme 入口文件应将 theme 默认导出：

```js
// .vitepress/theme/index.js
import Layout from './Layout.vue'

export default {
  // root component to wrap each page
  Layout,

  // this is a Vue 3 functional component
  NotFound: () => 'custom 404',

  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from `createApp()`.
    // router is VitePress' custom router. `siteData` is
    // a `ref` of current site-level metadata.
  },

  setup() {
    // this function will be executed inside VitePressApp's
    // setup hook. all composition APIs are available here.
  }
}
```

...布局组件可能如下所示：

```vue
<!-- .vitepress/theme/Layout.vue -->
<template>
  <h1>Custom Layout!</h1>

  <!-- this is where markdown content will be rendered -->
  <Content />
</template>
```

默认导出是自定义 theme 的唯一要求。在你的自定义 theme 中，它就像普通的 Vite + Vue 3 应用程序一样运行。请注意，theme 还需要与 [SSR 兼容](./using-vue#browser-api-access-restrictions)。

::: details 要分发 theme，只需导出包入口中的对象即可。要使用外部主题，请从自定义 theme 入口文件中导入并重新导出它：
To distribute a theme, simply export the object in your package entry. To consume an external theme, import and re-export it from the custom theme entry:
:::

```js
// .vitepress/theme/index.js
import Theme from 'awesome-vitepress-theme'

export default Theme
```

## 扩展默认主题 {#extending-the-default-theme}

如果你想扩展和自定义默认 theme，你可以从 `vitepress/theme` 导入它并在自定义 theme 入口文件中扩展它。以下是常见自定义的一些示例：

### 注册全局组件 {#registering-global-components}

```js
// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    // extend default theme custom behaviour.
    DefaultTheme.enhanceApp(ctx)

    // register your custom global components
    ctx.app.component('MyGlobalComponent' /* ... */)
  }
}
```

由于我们使用的是 Vite，你还可以利用 Vite 的 [全局引入](https://cn.vitejs.dev/guide/features.html#glob-import) 自动注册组件目录。

### 自定义 CSS {#customizing-css}

默认 theme 的 CSS 可通过覆盖根 CSS 变量进行自定义：

```js
// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default DefaultTheme
```

```css
/* .vitepress/theme/custom.css */
:root {
  --vp-c-brand: #646cff;
  --vp-c-brand-light: #747bff;
}
```

查看可以覆盖的[默认主题 CSS 变量](https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/styles/vars.css)。

### 布局插槽 {#layout-slots}

默认主题的 `<Layout/>` 组件有几个插槽，可用于在页面的特定位置注入内容。下面是一个将组件注入到 sidebar 头部中的示例：

```js
// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import MyLayout from './MyLayout.vue'

export default {
  ...DefaultTheme,
  // override the Layout with a wrapper component that
  // injects the slots
  Layout: MyLayout
}
```

```vue
<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #aside-outline-before>
      My custom sidebar top content
    </template>
  </Layout>
</template>
```

或者你也可以使用渲染函数。

```js
// .vitepress/theme/index.js
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import MyComponent from './MyComponent.vue'

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'aside-outline-before': () => h(MyComponent)
    })
  }
}
```

默认主题布局中可用的插槽的完整列表：

- 当 `layout: 'doc'`（默认）通过 frontmatter 启用时：
  - `doc-footer-before`
  - `doc-before`
  - `doc-after`
  - `sidebar-nav-before`
  - `sidebar-nav-after`
  - `aside-top`
  - `aside-bottom`
  - `aside-outline-before`
  - `aside-outline-after`
  - `aside-ads-before`
  - `aside-ads-after`
- 当 `layout: 'home'`（默认）通过 frontmatter 启用时：
  - `home-hero-before`
  - `home-hero-image`
  - `home-hero-after`
  - `home-features-before`
  - `home-features-after`
- Always:
  - `layout-top`
  - `layout-bottom`
  - `nav-bar-title-before`
  - `nav-bar-title-after`
  - `nav-bar-content-before`
  - `nav-bar-content-after`
  - `nav-screen-content-before`
  - `nav-screen-content-after`
