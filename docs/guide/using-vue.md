# 在 Markdown 中使用 Vue

在 VitePress 中，每个 markdown 文件都被编译成 HTML，然后作为 Vue 单文件组件处理。这意味着您可以在 markdown 中使用任何 Vue 功能，包括动态模板、使用 Vue 组件或通过添加 `<script>` 标签使用任意页面内 Vue 组件逻辑。

同样重要的是 `VitePress` 利用 `Vue 3` 的编译器来自动检测和优化 markdown 的纯静态部分。静态内容被优化为单个占位节点，并排除页面中的 JavaScript 负载。在客户端 hydration 期间也会跳过它们。简而言之，您只需为页面上的动态部分付出性能。

## 模板化

### 插值

每个 Markdown 文件首先被编译成 HTML，然后作为 Vue 组件传递给 Vite 进程。这意味着您可以在文本中使用 Vue-style 的插值：

**输入**

```md
{{ 1 + 1 }}
```

**输出**

<div class="language-text"><pre><code>{{ 1 + 1 }}</code></pre></div>

### 指令

指令同样能够运行：

**输入**

```html
<span v-for="i in 3">{{ i }}</span>
```

**输出**

<div class="language-text"><pre><code><span v-for="i in 3">{{ i }} </span></code></pre></div>

### 访问站点和页面数据

您可以在 `<script>` 块中使用 [`useData` helper](./api#usedata) 将数据暴露到页面。

**输入**

```html
<script setup>
import { useData } from 'vitepress'

const { page } = useData()
</script>

<pre>{{ page }}</pre>
```

**输出**

```json
{
  "path": "/using-vue.html",
  "title": "Using Vue in Markdown",
  "frontmatter": {}
}
```

## 忽略

默认情况下，插值代码块 会自动用 `v-pre` 包装，除非你设置了一些带有 `-vue` 后缀的语言，比如 `js-vue`（在这种情况下你可以在 `插值表达式` 内使用 Vue 风格的插值）。要在内联代码片段或纯文本中显示原始插值表达式或特定于 Vue 的语法，您需要使用 v-pre 自定义容器包装一个段落：

**Input**

```md
::: v-pre
`{{ 这将按原样显示 }}`
:::
```

**Output**

::: v-pre
`{{ 这将按原样显示 }}`
:::

## 使用组件

当您需要更大的灵活性时，VitePress 允许您使用自己的 Vue 组件扩展您 coding 的工具箱。

### 在 Markdown 中导入组件

如果您的组件将只在少数几个地方使用，那么推荐的使用方式是在使用它的文件中导入组件。

```md
<script setup>
import CustomComponent from '../components/CustomComponent.vue'
</script>

# Docs

This is a .md using a custom component

<CustomComponent />

## More docs

...
```

### 在 theme 中注册全局组件

如果组件将在文档的多个页面中使用，则可以在theme中全局注册它们（或作为一部分扩展 VitePress 默认的 theme）。查看[主题指南](./theme-introduction)了解更多信息。

在 `.vitepress/theme/index.js` 中，`enhanceApp` 函数接收 Vue `app` 实例，因此您可以像在常规 Vue 应用程序中一样[注册组件](https://vuejs.org/guide/components/registration.html)。

```js
import DefaultTheme from 'vitepress/theme'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.component('VueClickAwayExample', VueClickAwayExample)
  }
}
```

Later in your markdown files, the component can be interleaved between the content

```md
# Vue Click Away

<VueClickAwayExample />
```

::: warning IMPORTANT
Make sure a custom component's name either contains a hyphen or is in PascalCase. Otherwise, it will be treated as an inline element and wrapped inside a `<p>` tag, which will lead to hydration mismatch because `<p>` does not allow block elements to be placed inside it.
:::

### Using Components In Headers <ComponentInHeader />

You can use Vue components in the headers, but note the difference between the following syntaxes:

| Markdown                                                | Output HTML                               | Parsed Header |
| ------------------------------------------------------- | ----------------------------------------- | ------------- |
| <pre v-pre><code> # text &lt;Tag/&gt; </code></pre>     | `<h1>text <Tag/></h1>`                    | `text`        |
| <pre v-pre><code> # text \`&lt;Tag/&gt;\` </code></pre> | `<h1>text <code>&lt;Tag/&gt;</code></h1>` | `text <Tag/>` |

The HTML wrapped by `<code>` will be displayed as-is; only the HTML that is **not** wrapped will be parsed by Vue.

::: tip
The output HTML is accomplished by [markdown-it](https://github.com/markdown-it/markdown-it), while the parsed headers are handled by VitePress (and used for both the sidebar and document title).
:::

## Using CSS Pre-processors

VitePress has [built-in support](https://vitejs.dev/guide/features.html#css-pre-processors) for CSS pre-processors: `.scss`, `.sass`, `.less`, `.styl` and `.stylus` files. There is no need to install Vite-specific plugins for them, but the corresponding pre-processor itself must be installed:

```
# .scss and .sass
npm install -D sass

# .less
npm install -D less

# .styl and .stylus
npm install -D stylus
```

Then you can use the following in Markdown and theme components:

```vue
<style lang="sass">
.title
  font-size: 20px
</style>
```

## Script & Style Hoisting

Sometimes you may need to apply some JavaScript or CSS only to the current page. In those cases, you can directly write root-level `<script>` or `<style>` blocks in the Markdown file. These will be hoisted out of the compiled HTML and used as the `<script>` and `<style>` blocks for the resulting Vue single-file component:

<p class="demo" :class="$style.example"></p>

<style module>
.example {
  color: #41b883;
}
</style>

<script>
import ComponentInHeader from '../components/ComponentInHeader.vue'

export default {
  props: ['slot-key'],
  components: { ComponentInHeader },
  mounted () {
    document.querySelector(`.${this.$style.example}`)
      .textContent = 'This is rendered by inline script and styled by inline CSS'
  }
}
</script>

## Built-In Components

VitePress provides Built-In Vue Components like `ClientOnly`, check out the [Global Component Guide](./api) for more information.

**Also see:**

- [Using Components In Headers](#using-components-in-headers)

## Browser API Access Restrictions

Because VitePress applications are server-rendered in Node.js when generating static builds, any Vue usage must conform to the [universal code requirements](https://vuejs.org/guide/scaling-up/ssr.html). In short, make sure to only access Browser / DOM APIs in `beforeMount` or `mounted` hooks.

If you are using or demoing components that are not SSR-friendly (for example, contain custom directives), you can wrap them inside the built-in `<ClientOnly>` component:

```md
<ClientOnly>
  <NonSSRFriendlyComponent />
</ClientOnly>
```

Note this does not fix components or libraries that access Browser APIs **on import**. To use code that assumes a browser environment on import, you need to dynamically import them in proper lifecycle hooks:

```vue
<script>
export default {
  mounted() {
    import('./lib-that-access-window-on-import').then((module) => {
      // use code
    })
  }
}
</script>
```

If your module `export default` a Vue component, you can register it dynamically:

```vue
<template>
  <component
    v-if="dynamicComponent"
    :is="dynamicComponent">
  </component>
</template>

<script>
export default {
  data() {
    return {
      dynamicComponent: null
    }
  },

  mounted() {
    import('./lib-that-access-window-on-import').then((module) => {
      this.dynamicComponent = module.default
    })
  }
}
</script>
```

**Also see:**

- [Vue.js > Dynamic Components](https://vuejs.org/guide/essentials/component-basics.html#dynamic-components)
