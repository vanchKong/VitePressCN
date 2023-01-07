
# 布局 {#layout}

你可以通过设置页面 [frontmatter](./frontmatter) 选项来选择页面布局。有 3 种布局选项 `doc`、 `page` 和 `home`。如果未指定任何内容，则该页面将被视为 `doc` 页面。

```yaml
---
layout: doc
---
```

## Doc 布局 {#doc-layout}

`doc` 是默认布局，它将整个 Markdown 内容设置为“documentation”外观。它的工作原理是将整个内容包装在 css `vp-doc` 类中，并将样式应用于它下面的元素。

几乎所有通用元素，例如 `p`, 或 `h2` 都有特殊的样式。因此，请记住，如果你在 Markdown 内容中添加任何自定义 HTML，这些内容也会受到这些样式的影响。

它还提供下面列出的文档特定功能。这些功能仅在此布局中启用。

- [编辑链接](./theme-edit-link)
- [上下页文本](./theme-prev-next-link)
- [提纲](/config/theme-configs#outline) 
- [Carbon Ads](./theme-carbon-ads)

## Page 布局 {#page-layout}

`page` 被视为“空白页”。 Markdown 仍然会被解析，所有的 [Markdown 扩展](./markdown) 都和布局一样运行，但它没有任何默认样式。

`page` 布局将使你可以自行设计所有内容，而不会受 VitePress 主题影响。当你想要创建自己的自定义页面时，这很有用。

请注意，即使在此布局中，如果页面具有匹配的侧边栏配置，侧边栏仍会显示。

## Home 布局 {#home-layout}

Option `home` will generate templated "Homepage". In this layout, you can set extra options such as `hero` and `features` to customize the content further. Please visit [Theme: Home Page](./theme-home-page) for more details.
`home` 将生成模板化的“主页”。在此布局中， 你可以设置额外的选项，例如 `hero` 和 `features` 以进一步自定义内容。请访问[Theme: 主页](./theme-home-page)了解更多详情。

## 无布局 {#no-layout}

如果你不想要任何布局，你可以通过 frontmatter 传递 `layout: false`。如果你想要一个完全可自定义的登录页面（默认情况下没有任何侧边栏、导航栏或页脚），此选项很有用。