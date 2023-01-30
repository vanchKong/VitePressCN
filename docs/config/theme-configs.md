# 主题配置 {#theme-configs}

主题配置可让你自定义主题。 你可以通过将 `themeConfig` 添加到配置文件来定义主题配置。

```ts
export default {
  lang: 'en-US',
  title: 'VitePress',
  description: 'Vite & Vue powered static site generator.',

  // Theme related configurations.
  themeConfig: {
    logo: '/logo.svg',
    nav: [...],
    sidebar: { ... }
  }
}
```

这里描述了 VitePress 默认主题的设置。 如果你使用的是其他人创建的自定义主题，这些设置可能没有任何效果，或者可能表现不同。

## i18nRouting {#i18nrouting}

- Type: `boolean`

将本地语言更改为 `zh` 会将 URL 从 `/foo`（或 `/en/foo/`）更改为 `/zh/foo`。你可以通过将 `themeConfig.i18nRouting` 设置为 `false` 来禁用此行为。

## 图标 {#logo}

- Type: `ThemeableImage`

显示在导航栏中的 logo 文件，位于站点标题之前。接受路径字符串或包含亮/暗模式不同 logo 的对象。

```ts
export default {
	themeConfig: {
		logo: '/logo.svg',
	},
}
```

```ts
type ThemeableImage = string | { src: string; alt?: string } | { light: string; dark: string; alt?: string }
```

## 站点标题 {#sitetitle}

- Type: `string | false`

你可以自定义此项以替换导航中的默认站点标题（应用配置中的 `title`）。 当设置为 `false` 时，导航中的标题将被禁用。 这在当你的 `logo` 已经包含网站标题文本时很有用。

```ts
export default {
	themeConfig: {
		siteTitle: 'Hello World',
	},
}
```

## 导航栏 {#nav}

- Type: `NavItem`

导航菜单项的配置。 你可以在[主题: 导航栏](../guide/theme-nav#navigation-links) 了解更多详情。

```js
export default {
	themeConfig: {
		nav: [
			{ text: 'Guide', link: '/guide' },
			{
				text: 'Dropdown Menu',
				items: [
					{ text: 'Item A', link: '/item-1' },
					{ text: 'Item B', link: '/item-2' },
					{ text: 'Item C', link: '/item-3' },
				],
			},
		],
	},
}
```

```ts
type NavItem = NavItemWithLink | NavItemWithChildren

type NavItemWithLink = {
	text: string
	link: string
	activeMatch?: string
}

interface NavItemWithChildren {
	text?: string
	items: NavItemWithLink[]
	activeMatch?: string
}
```

## 侧边栏 {#sidebar}

- Type: `Sidebar`

侧边栏菜单项的配置。 你可以在[主题: 侧边栏](../guide/theme-sidebar) 了解更多详情。

```js
export default {
  themeConfig: {
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' },
          ...
        ]
      }
    ]
  }
}
```

```ts
export type Sidebar = SidebarItem[] | SidebarMulti

export interface SidebarMulti {
	[path: string]: SidebarItem[]
}

export type SidebarItem = {
	/**
	 * The text label of the item.
	 */
	text?: string

	/**
	 * The link of the item.
	 */
	link?: string

	/**
	 * The children of the item.
	 */
	items?: SidebarItem[]

	/**
	 * 如果是 `true`, 折叠按钮就会显示。
	 *
	 * @default false
	 */
	collapsible?: boolean

	/**
	 * 如果是 `true`, 可折叠组默认折叠。
	 *
	 * @default false
	 */
	collapsed?: boolean
}
```

## 大纲 {#outline}

- Type: `number | [number, number] | 'deep' | false`
- Default: `2`

配置在大纲中显示的标题级别。你可以通过传递一个数字来指定一个特定的级别，或者你可以通过传递一个包含下限和上限的元组来提供一个级别范围。当传递等于 `[2, 6]` 的 `deep` 时，除 `h1` 外，所有标题级别都显示在轮廓中。设置 `false` 以隐藏轮廓。

## 大纲标题 {#outlinetitle}

- Type: `string`
- Default: `On this page`

可用于自定义右侧边栏的标题（在大纲链接的顶部）。 这在用另一种语言编写文档时很有用。

```js
export default {
	themeConfig: {
		outlineTitle: 'In hac pagina',
	},
}
```

## 社交链接 {#sociallinks}

- Type: `SocialLink[]`

你可以定义此选项以在导航栏中展示带有图标的社交帐户链接。

```js
export default {
	themeConfig: {
		socialLinks: [
			{ icon: 'github', link: 'https://github.com/vuejs/vitepress' },
			{ icon: 'twitter', link: '...' },
			// You can also add custom icons by passing SVG as string:
			{
				icon: {
					svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>',
				},
				link: '...',
			},
		],
	},
}
```

```ts
interface SocialLink {
	icon: SocialLinkIcon
	link: string
}

type SocialLinkIcon = 'discord' | 'facebook' | 'github' | 'instagram' | 'linkedin' | 'mastodon' | 'slack' | 'twitter' | 'youtube' | { svg: string }
```

## 页脚 {#footer}

- Type: `Footer`

页脚配置。 你可以添加 message 和 copyright。 由于设计原因，仅当页面不包含侧边栏时才会显示页脚。

```ts
export default {
	themeConfig: {
		footer: {
			message: 'Released under the MIT License.',
			copyright: 'Copyright © 2019-present Evan You',
		},
	},
}
```

```ts
export interface Footer {
	message?: string
	copyright?: string
}
```

## 编辑链接 {#editlink}

- Type: `EditLink`

编辑链接可让你显示链接以编辑 Git 管理服务（例如 GitHub 或 GitLab）上的页面。 有关详细信息，请参阅 [主题：编辑链接](../guide/theme-edit-link)。

```js
export default {
	themeConfig: {
		editLink: {
			pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
			text: 'Edit this page on GitHub',
		},
	},
}
```

```ts
export interface EditLink {
	pattern: string
	text?: string
}
```

## 最近更新时间文本 {#lastupdatedtext}

- Type: `string`
- Default: `Last updated`

显示最近更新时间之前的前缀文本。

```ts
export default {
	themeConfig: {
		lastUpdatedText: 'Updated Date',
	},
}
```

## carbonAds {#carbon-ads}

- Type: `CarbonAds`

一个配置即可展示 [Carbon Ads](https://www.carbonads.net/)。

```ts
export default {
	themeConfig: {
		carbonAds: {
			code: 'your-carbon-code',
			placement: 'your-carbon-placement',
		},
	},
}
```

```ts
export interface CarbonAds {
	code: string
	placement: string
}
```

了解更多 [主题: Carbon Ads](../guide/theme-carbon-ads)

## docFooter

- Type: `DocFooter`

可用于自定义出现在上一篇和下一篇链接上方的文本。 如果不是用英语编写文档，这很有帮助。

```js
export default {
	themeConfig: {
		docFooter: {
			prev: 'Pagina prior',
			next: 'Proxima pagina',
		},
	},
}
```

```ts
export interface DocFooter {
	prev?: string
	next?: string
}
```
