import type { UserConfig } from 'vitepress'
// import { defineConfig } from 'vitepress'
import pkg from 'vitepress/package.json'
import mdFootnote from 'markdown-it-footnote'
import mdTaskList from 'markdown-it-task-lists'
const config: UserConfig = {
	base: '/VitePressCN/',
	lang: 'zh-CN',
	// 网站标题，左上角以及meta标题
	title: 'VitePressCN',
	description: 'Vite & Vue 驱动的静态站点生成器',
	cleanUrls: 'without-subfolders',
	// 是否忽略死链
	ignoreDeadLinks: false,
	// 最后更新于 开关
	lastUpdated: true,
	head: [
		['link', { rel: 'icon', href: '/VitePressCN/logo.svg' }],
		['meta', { name: 'google-site-verification', content: 'Wzz07XeBKMnNRNwUcsw6hEgpGoTkggTxORUtLRm6rns' }],
	],
	// markdown配置
	markdown: {
		lineNumbers: true,
		config: md => {
			md.use(mdFootnote)
			md.use(mdTaskList)
		},
	},
	//  主题配置
	themeConfig: {
		outlineTitle: '当前页',
		logo: '/logo.svg',
		lastUpdatedText: '最近更新时间',
		siteTitle: 'VitePressCN',
		// siteTitle: false, // 不显示标题
		// 上一页下一页文本
		docFooter: {
			prev: '上一篇',
			next: '下一篇',
		},
		// 顶部导航nav
		nav: [
			{ text: '指引', link: '/guide/what-is-vitepress', activeMatch: '/guide/' },
			{ text: '配置', link: '/config/introduction', activeMatch: '/config/' },
			{
				text: pkg.version,
				items: [
					// { text: 'itemA', link: '/item-1' },
					{ text: '更新日志', link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md' },
					{ text: '贡献', link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md' },
				],
			},
		],
		// 侧边导航
		sidebar: {
			// 匹配不同路由，侧边导航有所变化，如果没有多页面需求，可以只写一个数组
			// link 字段以 / 开头，该根目录为 /docs/ 目录
			// sidebar: [
			// 	{
			// 		text: '介绍',
			// 		items: [
			// 			{ text: '什么是VitePress', link: '/guide/what-is-vitepress' },
			// 			{ text: 'Hello2', link: '/hello2' },
			// 			{ text: 'Hello3', link: '/hello3' },
			// 		],
			// 	},
			// ]
			'/guide/': [
				{
					// 主标题
					text: '介绍',
					// 是否可收起
					collapsible: true,
					// link: '/guide/configuration',
					// 初始折叠状态 true 为折叠
					// collapsed: true,
					items: [
						// 副标题以及链接
						{ text: '什么是 VitePress？', link: '/guide/what-is-vitepress' },
						{ text: '快速上手', link: '/guide/getting-started' },
						{ text: '配置', link: '/guide/configuration' },
						{ text: '部署', link: '/guide/deploying' },
						{ text: 'markdown 基础语法', link: '/guide/markdown-base' },
					],
				},
				{
					text: '编写',
					collapsible: true,
					items: [
						{ text: 'Markdown', link: '/guide/markdown' },
						{ text: '静态资源处理', link: '/guide/asset-handling' },
						{ text: 'Frontmatter', link: '/guide/frontmatter' },
						{ text: '在 Markdown 中使用 Vue', link: '/guide/using-vue' },
						{ text: 'API 参考', link: '/guide/api' },
					],
				},
				{
					text: '主题',
					collapsible: true,
					items: [
						{ text: '介绍', link: '/guide/theme-introduction' },
						{ text: '导航栏', link: '/guide/theme-nav' },
						{ text: '侧边栏', link: '/guide/theme-sidebar' },
						{ text: '上（下）一篇', link: '/guide/theme-prev-next-link' },
						{ text: '编辑链接', link: '/guide/theme-edit-link' },
						{ text: '最近更新时间', link: '/guide/theme-last-updated' },
						{ text: '布局', link: '/guide/theme-layout' },
						{ text: '主页', link: '/guide/theme-home-page' },
						{ text: '团队', link: '/guide/theme-team-page' },
						{ text: '徽标', link: '/guide/theme-badge' },
						{ text: '页脚', link: '/guide/theme-footer' },
						{ text: '搜索', link: '/guide/theme-search' },
						{ text: 'Carbon Ads', link: '/guide/theme-carbon-ads' },
					],
				},
				{
					text: 'Migrations',
					collapsible: true,
					items: [
						{
							text: '从 VuePress 迁移',
							link: '/guide/migration-from-vuepress',
						},
						{
							text: '从 VitePress 0.x 迁移',
							link: '/guide/migration-from-vitepress-0',
						},
					],
				},
			],
			'/config/': [
				{
					text: '配置项',
					items: [
						{ text: '介绍', link: '/config/introduction' },
						{ text: '应用配置', link: '/config/app-configs' },
						{ text: ' 主题配置', link: '/config/theme-configs' },
						{ text: 'Frontmatter 配置', link: '/config/frontmatter-configs' },
					],
				},
			],
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
	},

	buildEnd(siteConfig) {
		console.log(siteConfig)
	},
}
export default config
