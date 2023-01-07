# 在 Markdown 中使用 Vue {#using-vue-in-markdown}

在 VitePress 中，每个 markdown 文件都被编译成 HTML，然后作为 Vue 单文件组件处理。这意味着你可以在 markdown 中使用任何 Vue 功能，包括动态模板、使用 Vue 组件或通过添加 `<script>` 标签使用任意页面内 Vue 组件逻辑。

同样重要的是 `VitePress` 利用 `Vue 3` 的编译器来自动检测和优化 markdown 的纯静态部分。静态内容被优化为单个占位节点，并排除页面中的 JavaScript 负载。在客户端 hydration 期间也会跳过它们。简而言之，你只需为页面上的动态部分付出性能。

## 模板化 {#templating}

### 插值 {#Interpolation}

每个 Markdown 文件首先被编译成 HTML，然后作为 Vue 组件传递给 Vite 进程。这意味着你可以在文本中使用 Vue-style 的插值：

**输入**

```md
{{ 1 + 1 }}
```

**输出**

<div class="language-text"><pre><code>{{ 1 + 1 }}</code></pre></div>

### 指令 {#Directives}

指令同样能够运行：

**输入**

```html
<span v-for="i in 3">{{ i }}</span>
```

**输出**

<div class="language-text"><pre><code><span v-for="i in 3">{{ i }} </span></code></pre></div>

### 访问站点和页面数据 {#access-to-site-page-data}

你可以在 `<script>` 块中使用 [`useData` helper](./api#usedata) 将数据暴露到页面。

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

## 忽略 {#escaping}

默认情况下，插值代码块 会自动用 `v-pre` 包装，除非你设置了一些带有 `-vue` 后缀的语言，比如 `js-vue`（在这种情况下你可以在 `插值表达式` 内使用 Vue 风格的插值）。要在内联代码片段或纯文本中显示原始插值表达式或特定于 Vue 的语法，你需要使用 v-pre 自定义容器包装一个段落：

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

## 使用组件 {#using-components}

当你需要更大的灵活性时，VitePress 允许你使用自己的 Vue 组件扩展你 coding 的工具箱。

### 在 Markdown 中导入组件 {#importing-components-in-markdown}

如果你的组件将只在少数几个地方使用，那么推荐的使用方式是在使用它的文件中导入组件。

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

### 在 theme 中注册全局组件 {#registering-global-components-in-the-theme}

如果组件将在文档的多个页面中使用，则可以在theme中全局注册它们（或作为一部分扩展 VitePress 默认的 theme）。查看[ theme 指南](./theme-introduction)了解更多信息。

在 `.vitepress/theme/index.js` 中，`enhanceApp` 函数接收 Vue `app` 实例，因此你可以像在常规 Vue 应用程序中一样[注册组件](https://vuejs.org/guide/components/registration.html)。

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

然后在你的 markdown 文件中，可以使用组件

```md
# Vue Click Away

<VueClickAwayExample />
```

::: warning 重要
确保自定义组件的名称包含连字符或采用 帕斯卡 命名规则。否则，它将被视为内联元素并包裹在 `<p>` 标签内，这将导致 hydration 不匹配，因为 `<p>` 不允许将块元素放置在其中。
:::

### 在标题中使用组件 <ComponentInHeader /> {#using-components-in-headers}


你可以在标题中使用 Vue 组件，但请注意以下语法之间的区别：

| Markdown                                                | 输出的 HTML                               | 解析出的标题 |
| ------------------------------------------------------- | ----------------------------------------- | ------------- |
| <pre v-pre><code> # text &lt;Tag/&gt; </code></pre>     | `<h1>text <Tag/></h1>`                    | `text`        |
| <pre v-pre><code> # text \`&lt;Tag/&gt;\` </code></pre> | `<h1>text <code>&lt;Tag/&gt;</code></h1>` | `text <Tag/>` |

被 `<code>` 包裹的 HTML 将按原样显示；只有未包装的 HTML 才会被 Vue 解析。

::: tip 提示
输出的 HTML 由 [markdown-it](https://github.com/markdown-it/markdown-it) 完成，而解析后的标题由 VitePress 处理（并用于侧边栏和文档标题）。
:::

## 使用 CSS 预处理器 {#using-css-pre-processors}

VitePress [内置支持](https://vitejs.dev/guide/features.html#css-pre-processors) CSS 预处理器：`.scss`、`.sass`、`.less`、`.styl` 和 `.stylus` 文件。无需为它们安装 Vite 专用插件，但必须安装相应的预处理器本身：

```
# .scss and .sass
npm install -D sass

# .less
npm install -D less

# .styl and .stylus
npm install -D stylus
```

然后你可以在 Markdown 和 theme 组件中使用以下内容：

```vue
<style lang="sass">
.title
  font-size: 20px
</style>
```

## 脚本和样式提升 {#script-style-hoisting}

有时你可能需要仅对当前页面应用一些 JavaScript 或 CSS。在这些情况下，你可以直接在 Markdown 文件中编写根级 `<script>`块 或 `<style>` 块。这些将从编译的 HTML 中提取出来，并用作生成的 Vue 单文件组件的 `<script>` 和 `<style>` 块：

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
      .textContent = '这由内联脚本呈现并由内联 CSS 设置样式'
  }
}
</script>

## 内置组件 {#built-in-components}

VitePress 提供了内置的 Vue 组件，比如 `ClientOnly`，查看[全局组件指南](./api)了解更多信息。

**另见：**

- [在标题中使用组件](#using-components-in-headers)

## 浏览器 API 访问限制 {#browser-api-access-restrictions}

由于 VitePress 应用程序在生成静态构建时是在 Node.js 中服务器渲染的，因此任何 Vue 使用都必须符合[常规代码要求](https://vuejs.org/guide/scaling-up/ssr.html)。简而言之，确保仅在 `beforeMount` 或 `mounted` 挂钩中访问浏览器/ DOM APIs。

如果你正在使用或演示对 SSR 不友好的组件（例如，包含自定义指令），你可以将它们包装在内置的 `<ClientOnly>` 组件中：

```md
<ClientOnly>
  <NonSSRFriendlyComponent />
</ClientOnly>
```

请注意，这不会修复**在导入时**访问浏览器 API 的组件或库的限制。要使用在导入时需要浏览器环境的代码，你需要在适当的生命周期挂钩中动态导入它们：

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

如果你的模块 `export default` 一个 Vue 组件，你可以动态注册它：

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

**另见：**

- [Vue.js > Dynamic Components](https://vuejs.org/guide/essentials/component-basics.html#dynamic-components)
