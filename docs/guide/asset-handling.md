# 静态资源处理 {#asset-handling}

所有 Markdown 文件都编译成 Vue 组件并由 [Vite](https://github.com/vitejs/vite) 处理。你可以**而且应该**使用相对 URL 引用静态资源：

```md
![An image](./image.png)
```

你可以使用绝对公共路径（基于项目根目录）或相对路径（基于你的文件系统）在 markdown 文件中引用静态资源、 theme 中的 `*.vue` 组件、样式和纯 `.css` 文件。这类似于你使用 `vue-cli` 或 webpack 的 `file-loader`。
常见的图像、媒体和字体文件会被自动检测并作为静态资源包含在内。
所有引用的静态资源，包括那些使用绝对路径的静态资源，都将被复制到生产构建中具有hash文件名的 dist 文件夹。不会复制从未引用的静态资源。与 `vue-cli` 类似，小于 4kb 的图像资源将被 base64 inlined。
所有静态路径引用，包括绝对路径，都应基于你的工作目录结构。

## 公共文件 {#public-files}

有时你可能需要提供未在任何 Markdown 或 theme 组件中直接引用的静态资源（例如，网站图标和 PWA 图标）。项目根目录下的`public`目录（`docs` 文件夹，如果你正在运行 `vitepress build docs`）可以用作escape hatch来提供静态资源，这些静态资源要么在源代码中从未被引用（例如 `robots.txt`），要么必须保持完全相同文件名(未被 hashing)。

放在 `public` 中的静态资源将按原样复制到 `dist` 目录的根目录中。

请注意，你应该使用根绝对路径引用放置在 `public` 中的文件 - 例如，`public/icon.png` 应该始终在源代码中引用为 `/icon.png`。

有一个例外：如果你有一个 `public` 目录中的 HTML 页面并从主站点链接到它，默认情况下路由器将产生 404。为了解决这个问题，VitePress 提供了一个 `pathname://` 协议，它允许你链接到同一域中的另一个页面，就好像链接是外部链接一样。对比这两个链接：

- [/pure.html](/pure.html)
- <pathname:///VitePressCN/pure.html>

## Base URL {#base-url}

如果你的站点部署到非根 URL，则需要在 `.vitepress/config.js` 中设置 `base` 选项。例如，如果你计划将你的站点部署到 `https://foo.github.io/bar/`，则 `base` 应设置为 `'/bar/'`（它应始终以斜杠开头和结尾）。

针对不同的 `base` 配置值,你的所有静态资源路径都会自动调整。例如，如果你在 markdown 中对 `public` 下的静态资源进行绝对引用：

```md
![An image](/image-inside-public.png)
```

在这种情况下，更改基本配置值时**无需**更新它。

但是，如果你正在编写动态链接到静态资源的 theme 组件，例如其 `src` 基于 theme 配置值的图像：

```vue
<img :src="theme.logoPath" />
```

在这种情况下，建议使用 VitePress 提供的 [withBase helper](./api#withbase) 包装路径：

```vue
<script setup>
import { withBase, useData } from 'vitepress'

const { theme } = useData()
</script>

<template>
  <img :src="withBase(theme.logoPath)" />
</template>
```
