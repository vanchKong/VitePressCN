---
title: Frontmatter
editLink: true
---
# {{ $frontmatter.title }} {#frontmatter}

任何包含 YAML frontmatter 块的 Markdown 文件都将由 [gray-matter](https://github.com/jonschlinkert/gray-matter) 处理。 frontmatter 必须位于 Markdown 文件的顶部，并且必须采用在三重虚线之间设置的有效 YAML 形式。例子：

```md
---
title: Docs with VitePress
editLink: true
---
```

在三重虚线之间，你可以设置预定义变量，甚至可以创建你自己的自定义变量。这些变量可以通过特殊的 `$frontmatter` 变量使用。

以下是如何在 Markdown 文件中使用它的示例：

```md
---
title: Docs with VitePress
editLink: true
---

# {{ $frontmatter.title }}

Guide content
```

## 可供选择的 Frontmatter 格式 {#alternative-frontmatter-formats}

VitePress 还支持 JSON frontmatter 语法，以花括号开头和结尾：

```json
---
{
  "title": "Blogging Like a Hacker",
  "editLink": true
}
---
```
