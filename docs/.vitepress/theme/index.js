import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import AdComponent from './AdComponent.vue'
import './custom.css'

export default {
	...DefaultTheme,
	Layout() {
		return h(DefaultTheme.Layout, null, {
			'doc-before': () => h(AdComponent),
		})
	},
}
