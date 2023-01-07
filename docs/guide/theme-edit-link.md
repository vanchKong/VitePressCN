# 编辑链接 {#edit-link}

编辑链接让你可以显示一个链接，以在 GitHub 或 GitLab 等 Git 管理服务上编辑页面。要启用它，请将 `themeConfig.editLink` 选项添加到你的配置中。

```js
export default {
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path'
    }
  }
}
```

`pattern` 选项定义链接的 URL 结构，并且 `:path` 将被替换为页面路径。

默认情况下，这将在文档页面底部添加链接文本"Edit this page"。你可以通过定义 `text` 选项来自定义此文本。

```js
export default {
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    }
  }
}
```
