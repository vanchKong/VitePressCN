# 顶部导航 {#nav}

Nav 是显示在页面顶部的导航栏。它包含站点标题、全局菜单链接等。

## 网站标题和图标 {#site-title-and-logo}

默认情况下，nav 显示 `config.title` 作为站点的标题。如果您想更改 `nav` 上显示的内容，您可以在 `themeConfig.siteTitle` 选项中定义自定义文本。

```js
export default {
  themeConfig: {
    siteTitle: 'My Custom Title'
  }
}
```

如果您的站点有图标，则可以通过传递图片路径来显示它。您应该将图标直接放在 `public` 中，并赋值该绝对路径。

```js
export default {
  themeConfig: {
    logo: '/my-logo.svg'
  }
}
```

添加图标时，它会与站点标题一起显示。如果您只需要图标并且想要隐藏站点标题文本，请将 `siteTitle` 选项设置为 `false`。

```js
export default {
  themeConfig: {
    logo: '/my-logo.svg',
    siteTitle: false
  }
}
```

You can also pass an object as logo if you want to add `alt` attribute or customize it based on dark/light mode. Refer [`themeConfig.logo`](../config/theme-configs#logo) for details.

## Navigation Links

You may define `themeConfig.nav` option to add links to your nav.

```js
export default {
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide' },
      { text: 'Configs', link: '/configs' },
      { text: 'Changelog', link: 'https://github.com/...' }
    ]
  }
}
```

The `text` is the actual text displayed in nav, and the `link` is the link that will be navigated to when the text is clicked. For the link, set path to the actual file without `.md` prefix, and always start with `/`.

Nav links can also be dropdown menus. To do this, set `items` key on link option.

```js
export default {
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide' },
      {
        text: 'Dropdown Menu',
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' }
        ]
      }
    ]
  }
}
```

Note that dropdown menu title (`Dropdown Menu` in the above example) can not have `link` property since it becomes a button to open dropdown dialog.

You may further add "sections" to the dropdown menu items as well by passing in more nested items.

```js
export default {
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide' },
      {
        text: 'Dropdown Menu',
        items: [
          {
            // Title for the section.
            text: 'Section A Title',
            items: [
              { text: 'Section A Item A', link: '...' },
              { text: 'Section B Item B', link: '...' }
            ]
          }
        ]
      },
      {
        text: 'Dropdown Menu',
        items: [
          {
            // You may also omit the title.
            items: [
              { text: 'Section A Item A', link: '...' },
              { text: 'Section B Item B', link: '...' }
            ]
          }
        ]
      }
    ]
  }
}
```

### Customize link's "active" state

Nav menu items will be highlighted when the current page is under the matching path. if you would like to customize the path to be matched, define `activeMatch` property and regex as a string value.

```js
export default {
  themeConfig: {
    nav: [
      // This link gets active state when the user is
      // on `/config/` path.
      {
        text: 'Guide',
        link: '/guide',
        activeMatch: '/config/'
      }
    ]
  }
}
```

::: warning
`activeMatch` is expected to be a regex string, but you must define it as a string. We can't use actual RegExp object here because it isn't serializable during the build time.
:::

## Social Links

Refer [`socialLinks`](../config/theme-configs#sociallinks).
