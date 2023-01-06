# API Reference

VitePress offers several built in API to let you access app data. VitePress also comes with few built-in component that can be used globally.

The helper methods are globally importable from `vitepress` and are typically used in custom theme Vue components. However, they are also usable inside `.md` pages because markdown files are compiled into Vue single-file components.

Methods that start with `use*` indicates that it is a [Vue 3 Composition API](https://vuejs.org/guide/introduction.html#composition-api) function that can only be used inside `setup()` or `<script setup>`.

## `useData`

Returns page-specific data. The returned object has the following type:

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

**Example:**

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

Returns the current route object with the following type:

```ts
interface Route {
  path: string
  data: PageData
  component: Component | null
}
```

## `useRouter`

Returns the VitePress router instance so you can programmatically navigate to another page.

```ts
interface Router {
  route: Route
  go: (href?: string) => Promise<void>
}
```

## `withBase`

- **Type**: `(path: string) => string`

Appends the configured [`base`](../config/app-configs#base) to a given URL path. Also see [Base URL](./asset-handling#base-url).

## `<Content />`

The `<Content />` component displays the rendered markdown contents. Useful [when creating your own theme](./theme-introduction).

```vue
<template>
  <h1>Custom Layout!</h1>
  <Content />
</template>
```

## `<ClientOnly />`

The `<ClientOnly />` component renders its slot only at client side.

Because VitePress applications are server-rendered in Node.js when generating static builds, any Vue usage must conform to the universal code requirements. In short, make sure to only access Browser / DOM APIs in beforeMount or mounted hooks.

If you are using or demoing components that are not SSR-friendly (for example, contain custom directives), you can wrap them inside the `ClientOnly` component.

```vue-html
<ClientOnly>
  <NonSSRFriendlyComponent />
</ClientOnly>
```
