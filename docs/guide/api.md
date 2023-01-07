# API 参考 {#api-reference}

VitePress 提供了几个内置 API 来获取应用程序数据。 VitePress 还提供了一些可以可全局使用的内置组件。

可从 `vitepress` 全局引入辅助函数，通常用于自定义主题 Vue 组件。但是，它们也可以在 `.md` 页面内使用，因为 markdown 文件会被编译成 Vue 单文件组件。

以 `use*` 开头的方法表示它是一个[ Vue 3 Composition API](https://vuejs.org/guide/introduction.html#composition-api) 函数，只能在 `setup()` 或 `<script setup>` 内部使用。

## `useData`

返回特定于页面的数据。返回的对象具有以下类型：

```ts
interface VitePressData {
  site: Ref<SiteData>
  page: Ref<PageData>
  theme: Ref<any> // themeConfig from .vitepress/config.js
  frontmatter: Ref<PageData['frontmatter']>
  lang: Ref<string>
  title: Ref<string>
  description: Ref<string>
  localePath: Ref<string>
  isDark: Ref<boolean>
}
```

**例子：**

```vue
<script setup>
import { useData } from 'vitepress'

const { theme } = useData()
</script>

<template>
  <h1>{{ theme.footer.copyright }}</h1>
</template>
```

## `useRoute`

返回具有以下类型的当前 route 对象：

```ts
interface Route {
  path: string
  data: PageData
  component: Component | null
}
```

## `useRouter`

返回 VitePress 路由器实例，以便你可以以编程方式导航到另一个页面。

```ts
interface Router {
  route: Route
  go: (href?: string) => Promise<void>
}
```

## `withBase`

- **类型**: `(path: string) => string`

将配置的 [`base`](../config/app-configs#base) 附加到给定的 URL 路径。另请参阅 [Base URL](./asset-handling#base-url)。

## `<Content />`

The `<Content />` component displays the rendered markdown contents. Useful [when creating your own theme](./theme-introduction).

`<Content />` 组件显示渲染的 markdown 内容。在[创建自己的主题时](./theme-introduction)很有用。

```vue
<template>
  <h1>Custom Layout!</h1>
  <Content />
</template>
```
## `<ClientOnly />`

`<ClientOnly /> `组件仅在客户端呈现其插槽。

由于 VitePress 应用程序在生成静态构建时是在 Node.js 中服务器渲染的，因此任何 Vue 使用都必须符合常规代码要求。简而言之，确保仅在 `beforeMount` 或 `mounted` 挂钩中访问浏览器 / DOM APIs。

如果你正在使用或演示对 SSR 不友好的组件（例如，包含自定义指令），你可以将它们包装在 `ClientOnly` 组件中。

```vue-html
<ClientOnly>
  <NonSSRFriendlyComponent />
</ClientOnly>
```
