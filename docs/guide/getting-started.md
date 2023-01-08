# 快速上手 {#getting-started}

本节将帮助你从头开始构建一个基本的 VitePress 文档站点。如果你已有一个现有项目并希望在项目中保留文档，请从第 2 步开始。

你也可以在 [StackBlitz](https://vitepress.new/) 上在线试用 VitePress。它直接在浏览器中运行基于 VitePress 的站点，因此它与本地设置几乎相同，不需要在你的计算机上安装任何东西。

::: warning 警告
VitePress目前处于`alpha`状态。它已经适合开箱即用的文档使用，但是配置和 theme API仍然可能在minor版本之间发生变化。
:::

## 步骤. 1: 创建新项目 {#step-1-create-a-new-project}

创建新目录并转到该目录下。

```sh
$ mkdir vitepress-starter && cd vitepress-starter
```

然后，使用你喜欢的包管理器进行初始化。

```sh
$ yarn init
```

## 步骤. 2: 安装 VitePress {#step-2-install-vitepress}

添加VitePress和Vue作为项目的开发依赖项。

```sh
$ yarn add --dev vitepress vue
```

::: details 有缺少peer deps的警告?
`@docsearch/js` 的peer dependencies关系存在某些问题。如果你看到一些命令由于它们而失败，你可以尝试此解决方法

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

## 步骤. 3: 启动开发环境 {#step-3-boot-up-dev-environment}

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

VitePress将在 `http://localhost:5173` 启动热重载开发服务器.

## 步骤. 4: 添加更多页面 {#step-4-add-more-pages}

让我们向站点添加另一个页面。创建文件名`getting-started.md`以及在步骤中创建的`index.md`。2.现在你的目录结构应该是这样的。

```
.
├─ docs
│  ├─ getting-started.md
│  └─ index.md
└─ package.json
```

然后，尝试访问`http://localhost:5173/getting-started.html`，你应该会看到`getting-started.md`的内容。

这就是VitePress的基本工作方式。目录结构与URL路径相对应。你添加文件，然后尝试访问它。

## 接下来做什么? {#what-s-next}

现在，你应该有一个基本但功能强大的 VitePress 文档站点。但目前，用户无法在网站上导航，因为它缺少例如我们在这个网站上的侧边栏菜单。

要启用这些导航，我们必须向站点添加一些配置。前往[配置指南](./configuration)，了解如何配置 VitePress。

如果你想了解更多关于你可以在页面中执行的操作，例如，编写 Markdown内容或使用 Vue Component，请查看文档的“编写”部分。[Markdown 指南](./markdown)将是一个很好的起点。

如果你想了解如何自定义网站外观（ theme ），并了解VitePress默认 theme 提供的功能，请访问[ theme -介绍](./theme-introduction)。

当你的文档站点开始成形时，请务必阅读[部署指南](./deploying)。
