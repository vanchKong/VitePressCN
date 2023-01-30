# 应用配置 {#app-configs}

应用配置是定义站点的全局配置的地方。应用配置定义了不仅限于主题配置的基本设置，例如“基本目录”的配置或站点的“标题”。

```ts
export default {
  // These are app level configs.
  lang: 'en-US',
  title: 'VitePress',
  description: 'Vite & Vue powered static site generator.',
  ...
}
```

## 亮暗模式 {#appearance}

- Type: `boolean | 'dark'`
- Default: `true`

是否启用深色模式。

- 如果该选项设置为 `true`，则默认主题将由用户的首选配色方案决定。
- 如果该选项设置为 `dark`，则默认情况下主题将是深色的，除非用户手动切换它。
- 如果该选项设置为 `false`，用户将无法切换主题

同时还注入内联样式脚本，并尝试通过 `vitepress-theme-appearance` key 从本地存储读取用户设置，并恢复用户首选的颜色模式。

```ts
export default {
	appearance: true,
}
```

## base {#base}

- Type: `string`
- Default: `/`

部署站点的 base URL。如果你计划在子路径（例如 GitHub 页面）下部署站点，则需要设置此项。 如果你打算将你的站点部署到https://foo.github.io/bar/，那么你应该将base设置为'/bar/'。 它应该始终以斜线开头和结尾。

base 会自动添加到其他所有中以 / 开头的所有 URL，因此你只需指定一次。

```ts
export default {
	base: '/base/',
}
```

## 网站描述 {#description}

- Type: `string`
- Default: `A VitePress site`

网站的描述。 这将在页面 HTML 中呈现为 `<meta>` 标签。

```ts
export default {
	description: 'A VitePress site',
}
```

## head

- Type: `HeadConfig[]`
- Default: `[]`

附加元素将会在 `<head>` 标签中渲染。用户添加的标签在 `head` 标签结束之前 VitePress 标签之后呈现。

```ts
export default {
	head: [
		['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
		// 将会渲染为: <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	],
}
```

```ts
type HeadConfig = [string, Record<string, string>] | [string, Record<string, string>, string]
```

## 忽略无效链接 {#ignoredeadlinks}

- Type: `boolean | 'localhostLinks'`
- Default: `false`

当设置为 `true` 时，VitePress 不会因为无效链接而导致构建失败。当设置为 `localhostLinks` 时，构建将在死链接上失败，但不会检查 `localhost` 链接。

```ts
export default {
	ignoreDeadLinks: true,
}
```

## 语言 {#lang}

- Type: `string`
- Default: `en-US`

站点的 lang 属性。 这将在页面 HTML 中呈现为 `<html lang="en-US">` 标签。

```ts
export default {
	lang: 'en-US',
	// lang: 'zh-CN',
}
```

## 最近更新时间 {#lastupdated}

- Type: `boolean`
- Default: `false`

使用 git commit 获取时间戳。 此选项启用默认主题以显示页面的最近更新时间。 你可以通过 [`themeConfig.lastUpdatedText`](theme-configs#lastupdatedtext) 选项自定义文本。

```ts
export default {
	lastUpdated: true,
}
```

## markdown

- Type: `MarkdownOption`

配置 Markdown 解析器选项。 VitePress 使用 [Markdown-it](https://github.com/markdown-it/markdown-it) 作为解析器，使用 [Shiki](https://shiki.matsu.io/) 高亮语言语法。 在此选项中，你可以传递各种 Markdown 相关选项以满足你的需求。

```js
export default {
	markdown: {
		theme: 'material-palenight',
		lineNumbers: true,
	},
}
```

以下是你可以在此对象中可选的所有选项：

```ts
interface MarkdownOptions extends MarkdownIt.Options {
	// 自定义主题来高亮语法
	// 可以使用现有的主题
	// 参考: https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-themes
	// 或者添加自己的主题
	// 参考: https://github.com/shikijs/shiki/blob/main/docs/themes.md#loading-theme
	theme?: Shiki.IThemeRegistration | { light: Shiki.IThemeRegistration; dark: Shiki.IThemeRegistration }

	// 在代码块中启用行号。
	lineNumbers?: boolean

	// markdown-it-anchor plugin options.
	// See: https://github.com/valeriangalliat/markdown-it-anchor#usage
	anchor?: anchorPlugin.AnchorOptions

	// markdown-it-attrs plugin options.
	// See: https://github.com/arve0/markdown-it-attrs
	attrs?: {
		leftDelimiter?: string
		rightDelimiter?: string
		allowedAttributes?: string[]
		disable?: boolean
	}

	// specify default language for syntax highlighter
	defaultHighlightLang?: string

	// @mdit-vue/plugin-frontmatter plugin options.
	// See: https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-frontmatter#options
	frontmatter?: FrontmatterPluginOptions

	// @mdit-vue/plugin-headers plugin options.
	// See: https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-headers#options
	headers?: HeadersPluginOptions

	// @mdit-vue/plugin-sfc plugin options.
	// See: https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-sfc#options
	sfc?: SfcPluginOptions

	// @mdit-vue/plugin-toc plugin options.
	// See: https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-toc#options
	toc?: TocPluginOptions

	// Configure the Markdown-it instance.
	config?: (md: MarkdownIt) => void
}
```

## outDir

- Type: `string`
- Default: `./.vitepress/dist`

站点的构建输出位置，相对于项目根目录（如果你正在运行 `vitepress build docs`，则为 `docs` 文件夹）。

```ts
export default {
	outDir: '../public',
}
```

## cacheDir

- Type: `string`
- Default: `./.vitepress/cache`

缓存文件的目录，相对于项目根目录（如果你正在运行 `vitepress build docs`，则为 `docs` 文件夹）。另见：[cacheDir](https://vitejs.dev/config/shared-options.html#cachedir)。

```ts
export default {
	cacheDir: './.vitepress/.vite',
}
```

## srcDir

- Type: `string`
- Default: `.`

存储 markdown 页面的目录，相对于项目根目录 `docs`。

```ts
export default {
	srcDir: './src',
}
```

## title

- Type: `string`
- Default: `VitePress`

网站的标题。这将显示在导航栏中。也用作所有页面标题的后缀，除非定义了 [`titleTemplate`](#titletemplate)。

```ts
export default {
	title: 'VitePress',
}
```

## titleTemplate

- Type: `string | boolean`

标题的后缀。例如，如果将 `title` 设置为 `VitePress`，将 `titleTemplate` 设置为 `My Site`，则 html 标题将变为 `VitePress | My Site`。

设置 `false` 以禁用该功能。如果选项是 `undefined`，那么将使用 `title` 选项的值。

```ts
export default {
	title: 'VitePress',
	titleTemplate: 'Vite & Vue powered static site generator',
}
```

To configure a title separator other than `|`, you can omit `title` and use the `:title` symbol in `titleTemplate`.

```ts
export default {
	titleTemplate: ':title - Vitepress',
}
```

## cleanUrls {#cleanurls}

- Type: `boolean`
- Default: `false`

允许从 URL 中删除后面的 `.html`

<!-- ，并且可以选择生成干净的目录结构。可用模式有： -->

<!-- |          Mode          |   Page    |  Generated Page   |     URL     |
| :--------------------: | :-------: | :---------------: | :---------: |
|      `'disabled'`      | `/foo.md` |    `/foo.html`    | `/foo.html` |
| `'without-subfolders'` | `/foo.md` |    `/foo.html`    |   `/foo`    |
|  `'with-subfolders'`   | `/foo.md` | `/foo/index.html` |   `/foo`    | -->

::: warning

启用此功能可能需要在你的托管平台上进行额外配置。为了使其正常工作，你的服务器必须在请求 `/foo` 时提供生成的 `/foo.html` 页面，而**无需重定向**。

:::

```ts
export default {
	cleanUrls: true,
}
```

## rewrites

- Type: `Record<string, string>`

定义自定义目录 <-> URL 映射。有关详细信息，请参阅[路由：自定义映射](/guide/routing#customize-the-mappings)。

```ts
export default {
	rewrites: {
		'source/:page': 'destination/:page',
	},
}
```

## Build Hooks

VitePress build hooks 允许你向你的网站添加新功能和表现：

- Sitemap
- Search Indexing
- PWA
- Teleports

### buildEnd

- Type: `(siteConfig: SiteConfig) => Awaitable<void>`

`buildEnd` 是一个 CLI 构建钩子，它将在构建（SSG）完成后、在 VitePress CLI 进程退出之前运行。

```ts
export default {
	async buildEnd(siteConfig) {
		// ...
	},
}
```

### postRender

- Type: `(context: SSGContext) => Awaitable<SSGContext | void>`

`postRender` 是一个 build hook, 当 SSG 渲染完成时调用。它允许你在 SSG 期间处理 teleports 内容。

```ts
export default {
	async postRender(context) {
		// ...
	},
}
```

```ts
interface SSGContext {
	content: string
	teleports?: Record<string, string>
	[key: string]: any
}
```

### transformHead

- Type: `(context: TransformContext) => Awaitable<HeadConfig[]>`

::: details transformHead 是一个 build hook，用于在生成每个页面之前转换头部。它将允许你添加无法静态添加到你的 VitePress 配置中的头部条目。你只需要返回额外的条目，它们将自动与现有条目合并。
`transformHead` is a build hook to transform the head before generating each page. It will allow you to add head entries that cannot be statically added to your VitePress config. You only need to return extra entries, they will be merged automatically with the existing ones.
:::

::: warning 警告
不要改变 `ctx` 中的任何东西。
:::

```ts
export default {
	async transformHead(context) {
		// ...
	},
}
```

```ts
interface TransformContext {
	siteConfig: SiteConfig
	siteData: SiteData
	pageData: PageData
	title: string
	description: string
	head: HeadConfig[]
	content: string
}
```

### transformHtml

- Type: `(code: string, id: string, ctx: TransformContext) => Awaitable<string | void>`

`transformHtml` 是一个 build hook,在保存到磁盘之前转换每个页面的内容。

::: warning 警告
不要改变 `ctx` 中的任何东西。此外，修改 html 内容可能会导致运行时出现 [hydration( HTML 添加交互的过程)](https://blog.csdn.net/qq_41800366/article/details/117738916) 问题。
:::

```ts
export default {
	async transformHtml(code, id, context) {
		// ...
	},
}
```

### transformPageData

- Type: `(pageData: PageData) => Awaitable<Partial<PageData> | { [key: string]: any } | void>`

`transformPageData` 是一个 hook,转换每个页面的 `pageData`。你可以直接改变 `pageData` 或返回更改值,合并到 PageData 中。

```ts
export default {
  async transformPageData(pageData) {
    pageData.contributors = await getPageContributors(pageData.relativePath)
  }

  // or return data to be merged
  async transformPageData(pageData) {
    return {
      contributors: await getPageContributors(pageData.relativePath)
    }
  }
}
```

<!-- ### buildEnd

- Type: `(siteConfig: SiteConfig) => Awaitable<void>`

`buildEnd` 是一个 build CLI hook, 它将在构建（SSG）完成后但在 VitePress CLI 进程退出之前运行。

```ts
export default {
	async buildEnd(siteConfig) {
		// ...
	},
}
``` -->
