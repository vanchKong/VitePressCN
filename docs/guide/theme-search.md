# 搜索 {#search}

VitePress 支持使用 [Algolia DocSearch](https://docsearch.algolia.com/docs/what-is-docsearch) 搜索您的文档站点。请参阅他们的入门指南。在您的 `.vitepress/config.ts` 中，您至少需要提供以下内容才能使其正常工作：

```ts
import { defineConfig } from 'vitepress'

export default defineConfig({
	themeConfig: {
		algolia: {
			appId: '...',
			apiKey: '...',
			indexName: '...',
		},
	},
})
```

如果您不符合 DocSearch 的条件，您可能想使用一些社区插件，例如 [vitepress-plugin-search](https://github.com/emersonbottero/vitepress-plugin-search) 或探索 [this GitHub thread](https://github.com/vuejs/vitepress/issues/670) 上的一些自定义解决方案。

## i18n

您可以使用这样的配置来使用多语言搜索：

```ts
import { defineConfig } from 'vitepress'

export default defineConfig({
	// ...
	themeConfig: {
		// ...

		algolia: {
			appId: '...',
			apiKey: '...',
			indexName: '...',
			locales: {
				zh: {
					placeholder: '搜索文档',
					translations: {
						button: {
							buttonText: '搜索文档',
							buttonAriaLabel: '搜索文档',
						},
						modal: {
							searchBox: {
								resetButtonTitle: '清除查询条件',
								resetButtonAriaLabel: '清除查询条件',
								cancelButtonText: '取消',
								cancelButtonAriaLabel: '取消',
							},
							startScreen: {
								recentSearchesTitle: '搜索历史',
								noRecentSearchesText: '没有搜索历史',
								saveRecentSearchButtonTitle: '保存至搜索历史',
								removeRecentSearchButtonTitle: '从搜索历史中移除',
								favoriteSearchesTitle: '收藏',
								removeFavoriteSearchButtonTitle: '从收藏中移除',
							},
							errorScreen: {
								titleText: '无法获取结果',
								helpText: '你可能需要检查你的网络连接',
							},
							footer: {
								selectText: '选择',
								navigateText: '切换',
								closeText: '关闭',
								searchByText: '搜索提供者',
							},
							noResultsScreen: {
								noResultsText: '无法找到相关结果',
								suggestedQueryText: '你可以尝试查询',
								reportMissingResultsText: '你认为该查询应该有结果？',
								reportMissingResultsLinkText: '点击反馈',
							},
						},
					},
				},
			},
		},
	},
})
```

这些[选项](https://github.com/vuejs/vitepress/blob/main/types/docsearch.d.ts)可以被覆盖。请参阅官方 Algolia 文档以了解更多信息。
