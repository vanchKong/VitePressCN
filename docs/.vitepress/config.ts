import type { UserConfig } from 'vitepress'
import { defineConfig, type DefaultTheme } from 'vitepress'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)
// import { pagefindPlugin, chineseSearchOptimize } from 'vitepress-plugin-pagefind'
// import pkg from 'vitepress/package.json'
const pkg = require('vitepress/package.json')
import mdFootnote from 'markdown-it-footnote'
import mdTaskList from 'markdown-it-task-lists'

// export default defineConfig({
// 	themeConfig: {
// 		algolia: {
// 			appId: '...',
// 			apiKey: '...',
// 			indexName: '...',
// 		},
// 	},
// })
const config = defineConfig({
	vite: {
		plugins: [
			// pagefindPlugin({
			// 	btnPlaceholder: '搜索',
			// 	placeholder: '搜索文档',
			// 	emptyText: '空空如也',
			// 	heading: '共: {{searchResult}} 条结果',
			// 	// customSearchQuery: chineseSearchOptimize,
			// 	customSearchQuery(input) {
			// 		// 将搜索的每个中文单字两侧加上空格
			// 		return input
			// 			.replace(/[\u4e00-\u9fa5]/g, ' $& ')
			// 			.replace(/\s+/g, ' ')
			// 			.trim()
			// 	},
			// }),
		],
	},
	base: '/VitePressCN/',
	lang: 'zh-CN',
	// 网站标题，左上角以及meta标题
	title: 'VitePressCN',
	description: 'Vite & Vue 驱动的静态站点生成器',
	cleanUrls: true,
	// sitemap: {
	// 	hostname: 'https://vanchkong.github.io',
	// 	transformItems(items) {
	// 		return items.filter((item) => !item.url.includes('migration'))
	// 	},
	// },
	// 是否忽略死链
	ignoreDeadLinks: false,
	// 最后更新于 开关
	lastUpdated: true,
	head: [
		['link', { rel: 'icon', type: 'image/svg+xml', href: '/vitepress-logo-mini.svg' }],
		['link', { rel: 'icon', type: 'image/png', href: '/vitepress-logo-mini.png' }],
		['meta', { name: 'theme-color', content: '#5f67ee' }],
		['meta', { name: 'og:type', content: 'website' }],
		['meta', { name: 'og:locale', content: 'en' }],
		['meta', { name: 'og:site_name', content: 'VitePress' }],
		['meta', { name: 'og:image', content: 'https://vitepress.dev/vitepress-og.jpg' }],
		['script', { 'src': 'https://cdn.usefathom.com/script.js', 'data-site': 'AZBRSFGG', 'data-spa': 'auto', 'defer': '' }],
	],
	// markdown配置
	markdown: {
		math: true,
		lineNumbers: true,
		container: {
			tipLabel: '提示',
			warningLabel: '警告',
			dangerLabel: '危险',
			infoLabel: '信息',
			detailsLabel: '详细信息',
		},
		// linkify: false,
		config: (md) => {
			md.use(mdFootnote)
			md.use(mdTaskList)
		},
	},
	//  主题配置
	themeConfig: {
		logo: { src: '/vitepress-logo-mini.svg', width: 24, height: 24 },
		lastUpdated: {
			text: '最近更新时间',
			formatOptions: {
				dateStyle: 'short',
				timeStyle: 'medium',
			},
		},
		darkModeSwitchLabel: '主题',
		sidebarMenuLabel: '菜单',
		returnToTopLabel: '回到顶部',
		langMenuLabel: '多语言',
		externalLinkIcon: true,
		// aside: false,
		// outlineTitle: '当前页',
		// 显示层级
		outline: { level: 'deep', label: '当前页' },
		// lastUpdatedText: '最近更新时间',
		siteTitle: 'VitePressCN',
		// siteTitle: false, // 不显示标题
		// 上一页下一页文本
		docFooter: {
			prev: '上一篇',
			next: '下一篇',
		},
		// 顶部导航nav
		nav: nav(),
		// 侧边导航

		sidebar: {
			'/guide/': { base: '/guide/', items: sidebarGuide() },
			'/reference/': { base: '/reference/', items: sidebarReference() },
		},
		// 社交媒体跳转
		socialLinks: [
			{ icon: 'github', link: 'https://github.com/vanchKong/VitePressCN' },
			// { icon: 'twitter', link: '...' },
			// 还可以自定义icon
			// {
			//   icon: {
			//     svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
			//   },
			//   link: '...'
			// }
		],
		// 每个页面页脚的编辑此页  :path  为当前路由
		editLink: {
			text: '在GitHub上编辑此页',
			pattern: 'https://github.com/vanchKong/VitePressCN/edit/main/docs/:path',
		},

		footer: {
			message: 'Released under the MIT License.',
			copyright: 'Copyright © 2019-present Evan You',
		},
		// carbonAds: {
		// 	code: 'CEBDT27Y',
		// 	placement: 'vuejsorg',
		// },
		search: {
			provider: 'local',
		},

		// algolia: {
		// 	appId: '7WHRITCBT0',
		// 	apiKey: '066b52245563aa4ce21dad2b4c4b96c4',
		// 	indexName: 'vitepressCN',
		// 	placeholder: '请输入关键词',
		// 	buttonText: '搜索',
		// },
	},

	buildEnd(siteConfig) {
		// console.log(siteConfig)
	},
	transformHead(ctx) {
		// console.log(1111, ctx)
	},
})
function sidebarGuide(): DefaultTheme.SidebarItem[] {
	return [
		// 匹配不同路由，侧边导航有所变化，如果没有多页面需求，可以只写一个数组
		// link 字段以 / 开头，该根目录为 /docs/ 目录
		{
			text: '介绍',
			// 是否可收起
			// 初始折叠状态 true 为折叠
			collapsed: true,
			items: [
				{ text: '什么是 VitePress?', link: 'what-is-vitepress' },
				{ text: '快速开始', link: 'getting-started' },
				{ text: '路由', link: 'routing' },
				{ text: '部署', link: 'deploy' },
			],
		},
		{
			text: '编写',
			collapsed: true,
			items: [
				{ text: 'Markdown 基础语法', link: 'markdown-base' },
				{ text: 'Markdown 扩展', link: 'markdown' },
				{ text: '静态资源处理', link: 'asset-handling' },
				{ text: 'Frontmatter', link: 'frontmatter' },
				{ text: '在 Markdown 中 使用 Vue', link: 'using-vue' },
				{ text: '国际化', link: 'i18n' },
			],
		},
		{
			text: '自定义',
			collapsed: true,
			items: [
				{ text: '使用自定义主题', link: 'custom-theme' },
				{ text: '扩展默认主题', link: 'extending-default-theme' },
				{ text: '构建时数据加载', link: 'data-loading' },
				{ text: 'SSR 兼容性', link: 'ssr-compat' },
				{ text: '连接到 CMS', link: 'cms' },
			],
		},
		{
			text: '实验性的',
			collapsed: true,
			items: [
				{
					text: 'MPA Mode',
					link: '/guide/mpa-mode',
				},
				{
					text: 'Sitemap 生成器',
					link: '/guide/sitemap-generation',
				},
			],
		},
		// {
		// 	text: '迁移',
		// 	collapsed: false,
		// 	items: [
		// 		{
		// 			text: '从 VuePress 迁移',
		// 			link: '/guide/migration-from-vuepress',
		// 		},
		// 		{
		// 			text: '从 VitePress 0.x 迁移',
		// 			link: '/guide/migration-from-vitepress-0',
		// 		},
		// 	],
		// },
		{
			text: '配置 & API 参考',
			link: '/reference/site-config',
		},
	]
}

function sidebarReference() {
	return [
		{
			text: '参考',
			items: [
				{ text: '站点配置', link: 'site-config' },
				{ text: 'Frontmatter 配置', link: 'frontmatter-config' },
				{ text: 'Runtime API', link: 'runtime-api' },
				{ text: 'CLI', link: 'cli' },
				{
					text: '默认主题',
					// collapsed: true,
					base: '/reference/default-theme-',
					items: [
						{ text: '概览', link: 'config' },
						{ text: '导航栏', link: 'nav' },
						{ text: '侧边栏', link: 'sidebar' },
						{ text: '主页', link: 'home-page' },
						{ text: '页脚', link: 'footer' },
						{ text: '布局', link: 'layout' },
						{ text: '徽标', link: 'badge' },
						{ text: '团队', link: 'team-page' },
						{ text: '上（下）一篇', link: 'prev-next-links' },
						{ text: '编辑链接', link: 'edit-link' },
						{ text: '最近更新时间', link: 'last-updated' },
						{ text: '搜索', link: 'search' },
						{ text: 'Carbon Ads', link: 'carbon-ads' },
					],
				},
			],
		},
	]
}
function nav(): DefaultTheme.NavItem[] {
	return [
		{ text: '指引', link: '/guide/what-is-vitepress', activeMatch: '/guide/' },
		{ text: '配置参考', link: '/reference/site-config', activeMatch: '/reference/' },
		{
			text: pkg.version,
			items: [
				// { text: 'itemA', link: '/item-1' },
				{ text: '更新日志', link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md' },
				{ text: '贡献', link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md' },
			],
		},
	]
}

export default config
