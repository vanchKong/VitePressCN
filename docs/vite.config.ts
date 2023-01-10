import { defineConfig } from 'vite'
import { SearchPlugin } from 'vitepress-plugin-search'

export default defineConfig({
	plugins: [
		SearchPlugin({
			encode: false,
			tokenize: 'full',
			// previewLength: 62,
			// buttonLabel: '搜索',
			// placeholder: '搜索文档',
		}),
	],
})
