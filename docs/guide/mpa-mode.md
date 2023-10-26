# MPA 模式 <Badge type="warning" text="experimental" /> {#mpa-mode}

可以通过命令行输入 `vitepress build --mpa` 或在配置文件中指定 `mpa: true` 配置选项来启用 MPA (Multi-Page Application) 模式。

在 MPA 模式下，所有页面都会默认不包含任何 JavaScript。因此，站点可能评估工具中获得更好的初始访问性能分数。

但是，由于 SPA 导航的缺失，跨页面链接将导致重新加载整个页面。MPA 模式下的导航不会像 SPA 模式那样立即响应。

同时请注意，默认情况下不使用 JavaScript 意味着你实际上只是将 Vue 作为服务器端模板语言。浏览器不会附加任何事件处理程序，因此将不会有任何交互性。要加载客户端 JavaScript，你需要使用特殊的 `<script client>` 标签：

```html
<script client>
	document.querySelector('h1').addEventListener('click', () => {
		console.log('client side JavaScript!')
	})
</script>

# Hello
```

`<script client>` 是 VitePress 独有的功能，而不是 Vue 的功能。它可以在 `.md` 和 `.vue` 文件中使用，但只能在 MPA 模式下使用。所有主题组件中的客户端脚本将被打包在一起，而特定页面的客户端脚本将会分开处理。

请注意，`<script client>` **不会被视为 Vue 组件代码**：它会看做普通的 JavaScript 模块来处理。因此，只有在你的站点需要绝对最小的客户端交互性时，才应该使用 MPA 模式。
