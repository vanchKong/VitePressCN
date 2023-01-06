# Layout

You may choose the page layout by setting `layout` option to the page [frontmatter](./frontmatter). There are 3 layout options, `doc`, `page`, and `home`. If nothing is specified, then the page is treated as `doc` page.

```yaml
---
layout: doc
---
```

## Doc Layout

Option `doc` is the default layout and it styles the whole Markdown content into "documentation" look. It works by wrapping whole content within `vp-doc` css class, and applying styles to elements underneath it.

Almost all generic elements such as `p`, or `h2` get special styling. Therefore, keep in mind that if you add any custom HTML inside a Markdown content, those will get affected by those styles as well.

It also provides documentation specific features listed below. These features are only enabled in this layout.

- Edit Link
- Prev Next Link
- Outline
- [Carbon Ads](./theme-carbon-ads)

## Page Layout

Option `page` is treated as "blank page". The Markdown will still be parsed, and all of the [Markdown Extensions](./markdown) work as same as `doc` layout, but it wouldn't get any default stylings.

The page layout will let you style everything by you without VitePress theme affecting the markup. This is useful when you want to create your own custom page.

Note that even in this layout, sidebar will still show up if the page has a matching sidebar config.

## Home Layout

Option `home` will generate templated "Homepage". In this layout, you can set extra options such as `hero` and `features` to customize the content further. Please visit [Theme: Home Page](./theme-home-page) for more details.

## No Layout

If you don't want any layout, you can pass `layout: false` through frontmatter. This option is helpful if you want a fully-customizable landing page (without any sidebar, navbar, or footer by default).
