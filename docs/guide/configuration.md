# 配置

在没有任何配置的情况下，页面非常小，用户无法在站点中导航。为了自定义你的网站，让我们首先在docs目录中创建一个`.vitepress`目录。这是所有vitepress特定文件将放置的地方。你的项目结构可能是这样的:

```
.
├─ docs
│  ├─ .vitepress
│  │  └─ config.js
│  └─ index.md
└─ package.json
```

配置VitePress站点的必不可少的文件是`.VitePress/config.js`，它应该导出一个JavaScript对象：

```js
export default {
  title: 'VitePress',
  description: 'Just playing around.'
}
```

在上面的示例中，该站点的标题为`VitePress`，和`Just playing around.`作为描述元标签。

在[主题-简介](./theme-introduction)中了解有关VitePress功能的所有信息，了解如何在此配置文件中配置特定功能。

你还可以在[配置](../config/introduction)中找到所有配置参考。
