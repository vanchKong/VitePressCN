# 起步

本节将帮助您从头开始构建一个基本的VitePress文档站点。如果您已经有一个现有的项目，并且希望将文档保存在项目中，请从步骤2开始。

你也可以在[StackBlitz](https://vitepress.new/)上在线尝试VitePress。它直接在浏览器中运行基于vitepress的站点，因此它几乎与本地设置相同，但不需要在您的机器上安装任何东西。

::: warning 警告
VitePress目前处于`alpha`状态。它已经适合开箱即用的文档使用，但是配置和主题API仍然可能在小版本之间发生变化。
:::

## 步骤. 1: 创建新项目

创建新目录并转到该目录下。

```sh
$ mkdir vitepress-starter && cd vitepress-starter
```

然后，使用首选的包管理器进行初始化。

```sh
$ yarn init
```

## 步骤. 2: 安装 VitePress

添加VitePress和Vue作为项目的开发依赖项。

```sh
$ yarn add --dev vitepress vue
```

::: details 有缺少同伴依赖的警告?
`@docsearch/js` 的对等依赖关系存在某些问题。如果您看到一些命令由于它们而失败，您可以尝试此解决方法

如果你使用pnpm，将以下代码添加到 `package.json`:

```json
"pnpm": {
  "peerDependencyRules": {
    "ignoreMissing": [
      "@algolia/client-search"
    ]
  }
}
```

:::

创建你的第一个Markdown文件。

```sh
$ mkdir docs && echo '# Hello VitePress' > docs/index.md
```

## 步骤. 3: 启动开发环境

添加一些脚本到 `package.json`.

```json
{
  ...
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  },
  ...
}
```

在本地服务器上启动文档站点服务。

```sh
$ yarn docs:dev
```

VitePress将在以下位置启动热重载开发服务器 `http://localhost:5173`.

## 步骤. 4: 添加更多页面

让我们向站点添加另一个页面。创建文件名`getting-started.md`以及在步骤中创建的`index.md`。2.现在你的目录结构应该是这样的。

```
.
├─ docs
│  ├─ getting-started.md
│  └─ index.md
└─ package.json
```

然后，尝试访问`http://localhost:5173/getting-started.html`，您应该会看到`getting-started.md`的内容。

这就是VitePress的基本工作原理。目录结构与URL路径相对应。您添加文件，然后尝试访问它。

## 接下来做什么?

现在，您应该有一个基本但功能强大的VitePress文档站点。但目前，用户无法在网站上导航，因为它缺少例如我们在这个网站上的侧边栏菜单。

要启用这些导航，我们必须向站点添加一些配置。前往[配置指南](./configuration)，了解如何配置VitePress。

如果您想了解更多关于在页面中可以做什么的信息，例如，编写markdown内容或使用Vue Component，请查看文档的“编写”部分。[Markdown guide](./markdown)将是一个很好的起点。

If you want to know how to customize how the site looks (Theme), and find out the features VitePress's default theme provides, visit [Theme: Introduction](./theme-introduction).

When your documentation site starts to take shape, be sure to read the [deployment guide](./deploying).
