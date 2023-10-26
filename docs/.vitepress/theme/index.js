import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import AdComponent from './AdComponent.vue'
import './custom.css'
import Layout from './Layout.vue'

export default {
	...DefaultTheme,
	Layout() {
		return h(Layout, null, {
			'doc-before': () => h(AdComponent),
		})
	},
}
