# 路由 {#routing}

VitePress 构建了基于文件系统的路由，这意味着源文件的目录结构对应于最终的 URL。你也可以自定义目录结构和 URL 的映射。通读此页面以了解有关 VitePress 路由系统的所有信息。

## 基础路由 {#basic-routing}

默认情况下，VitePress 假定你的页面文件存储在项目根目录中。你可以在此处添加 markdown 文件，名称为 URL 路径。例如，当你具有以下目录结构时：

```
.
├─ guide
│  ├─ getting-started.md
│  └─ index.md
├─ index.md
└─ prologue.md
```

然后你可以通过以下 URL 访问这些页面。

```
index.md           -> /
prologue.md        -> /prologue.html
guide/index.md     -> /guide/
getting-started.md -> /guide/getting-started.html
```

如你所见，目录结构与最终 URL 相对应，与典型 Web 服务器的纯 HTML 相同。

## 更改根目录 {#changing-the-root-directory}

要更改页面文件的根目录，你可以将目录名称传递给 vitepress 命令。例如，如果你想将页面文件存储在 `docs` 目录下，那么你应该运行 `vitepress dev docs` 命令。

```
.
├─ docs
│  ├─ getting-started.md
│  └─ index.md
└─ ...
```

```
vitepress dev docs
```

这将按如下方式映射 URL。

```
docs/index.md           -> /
docs/getting-started.md -> /getting-started.html
```

你也可以通过 [`srcDir`](/config/app-configs#srcdir) 选项在配置文件中自定义根目录。使用以下设置时运行 `vitepress dev`与运行 `vitepress dev docs` 命令结果相同。

```ts
export default {
	srcDir: './docs',
}
```

## 页面之间链接 {#linking-between-pages}

在页面中添加链接时，省略路径的扩展名并使用来自根的绝对路径或页面的相对路径。 VitePress 将根据你的配置设置 handle the extension。

```md
<!-- Do -->

[Getting Started](/guide/getting-started)
[Getting Started](../guide/getting-started)

<!-- Don't -->

[Getting Started](/guide/getting-started.md)
[Getting Started](/guide/getting-started.html)
```

在 [Asset Handling](asset-handling) 中，了解有关页面链接和静态资源链接（例如图像链接）的更多信息。

## 生成干净的 URL {#generate-clean-url}

“Clean URL”通常称为不带 `.html` 扩展名的 URL，例如，`example.com/path` 而不是 `example.com/path.html`。

默认情况下，VitePress 通过为每个文件添加 `.html` 扩展名来生成最终的静态页面文件。如果你想要干净的 URL，你可以只使用 `index.html` 文件来构建你的目录。

```
.
├─ getting-started
│  └─ index.md
├─ installation
│  └─ index.md
└─ index.md
```

但是，你也可以通过设置 [`cleanUrls`](/config/app-configs#cleanurls) 选项来生成干净的 URL。

```ts
export default {
	cleanUrls: true,
}
```

## 自定义映射 {#customize-the-mappings}

你可以自定义目录结构和 URL 之间的映射。当你有复杂的文档结构时，它很有用。例如，假设你有多个包，并希望像这样将文档与源文件一起放置。

```
.
├─ packages
│  ├─ pkg-a
│  │  └─ src
│  │      ├─ pkg-a-code.ts
│  │      └─ pkg-a-code.md
│  └─ pkg-b
│     └─ src
│         ├─ pkg-b-code.ts
│         └─ pkg-b-code.md
```

并且你希望按如下方式生成 VitePress 页面。

```
packages/pkg-a/src/pkg-a-code.md -> /pkg-a/pkg-a-code.md
packages/pkg-b/src/pkg-b-code.md -> /pkg-b/pkg-b-code.md
```

你可以像这样通过 [`rewrites`](/config/app-configs#rewrites) 选项配置映射。

```ts
export default {
	rewrites: {
		'packages/pkg-a/src/pkg-a-code.md': 'pkg-a/pkg-a-code',
		'packages/pkg-b/src/pkg-b-code.md': 'pkg-b/pkg-b-code',
	},
}
```

`rewrites` 选项也可以有动态路由参数。在这个例子中，我们有固定的路径包和 src 在所有页面上保持相同，并且在添加页面时必须列出配置中的所有页面可能会很冗长。你可以如下配置上述映射并获得相同的结果。

```ts
export default {
	rewrites: {
		'packages/:pkg/src/:page': ':pkg/:page',
	},
}
```

路由参数以 `:` 为前缀（例如 `:pkg`）。参数的名称只是一个占位符，可以是任何内容。

此外，你可以在参数末尾添加 `*` 以映射从那里开始的所有子目录。

```ts
export default {
	rewrites: {
		'packages/:pkg/src/:page*': ':pkg/:page*',
	},
}
```

以上将创建如下映射。

```
packages/pkg-a/src/pkg-a-code.md  -> /pkg-a/pkg-a-code
packages/pkg-b/src/folder/file.md -> /pkg-b/folder/file
```

::: warning 你需要在添加页面时重启服务
目前，VitePress 不会检测到映射目录中的页面添加。在开发模式下从目录中添加或删除文件时需要重新启动服务器。更新已经存在的文件会照常更新。
:::

### 页面中的相对链接处理 {#relative-link-handling-in-page}

请注意，启用重写时，**markdown 中的相对链接是相对于最终路径解析的**。例如，为了创建从 `packages/pkg-a/src/pkg-a-code.md` 到 `packages/pkg-b/src/pkg-b-code.md` 的相对链接，你应该如下定义链接。

```md
[Link to PKG B](../pkg-b/pkg-b-code)
```
