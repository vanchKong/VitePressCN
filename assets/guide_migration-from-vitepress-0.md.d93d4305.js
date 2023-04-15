import{_ as e,o,c as t,V as a}from"./chunks/framework.6ceb6c0f.js";const u=JSON.parse('{"title":"从 VitePress 0.x 迁移","description":"","frontmatter":{},"headers":[],"relativePath":"guide/migration-from-vitepress-0.md","lastUpdated":1681591701000}'),i={name:"guide/migration-from-vitepress-0.md"},r=a('<h1 id="migration-from-vitepress-0-x" tabindex="-1">从 VitePress 0.x 迁移 <a class="header-anchor" href="#migration-from-vitepress-0-x" aria-label="Permalink to &quot;从 VitePress 0.x 迁移 {#migration-from-vitepress-0-x}&quot;">​</a></h1><p>如果你来自 VitePress 0.x 版本，由于新功能和增强功能，VitePress 有了一些重大更改。 请按照本指南了解如何将你的应用程序迁移到最新的 VitePress。</p><h2 id="app-config" tabindex="-1">应用配置 <a class="header-anchor" href="#app-config" aria-label="Permalink to &quot;应用配置 {#app-config}&quot;">​</a></h2><ul><li>The internationalization feature is not yet implemented.</li></ul><h2 id="theme-config" tabindex="-1">主题配置 <a class="header-anchor" href="#theme-config" aria-label="Permalink to &quot;主题配置 {#theme-config}&quot;">​</a></h2><ul><li><code>sidebar</code> 选项改变了它的结构。 <ul><li><code>children</code> 现在命名为 <code>items</code>。</li><li>顶级侧边栏不包含 <code>link</code>。 我们打算把它改回来。</li></ul></li><li>删除了 <code>repo</code>、<code>repoLabel</code>、<code>docsDir</code>、<code>docsBranch</code>、<code>editLinks</code>、<code>editLinkText</code>，以支持更灵活的api。 <ul><li>要将带有图标的 GitHub 链接添加到导航，请使用 <a href="./../reference/default-theme-config#nav">社交链接</a> 功能。</li><li>要添加“编辑此页面”功能，请使用 <a href="./../reference/default-theme-edit-link">编辑链接</a> 功能。</li></ul></li><li><code>lastUpdated</code> 选项现在分为<code> config.lastUpdated</code> 和 <code>themeConfig.lastUpdatedText</code>。</li><li><code>carbonAds.carbon</code> 更改为 <code>carbonAds.code</code>.</li></ul><h2 id="frontmatter-config" tabindex="-1">Frontmatter 配置 <a class="header-anchor" href="#frontmatter-config" aria-label="Permalink to &quot;Frontmatter 配置 {#frontmatter-config}&quot;">​</a></h2><ul><li><code>home: true</code> 选项已更改为 <code>layout: home</code>。此外，还修改了许多与主页相关的设置以提供附加功能。 详情请参阅 <a href="./../reference/default-theme-home-page">主页指南</a>。</li><li><code>footer</code> 选项移至 <a href="./../reference/default-theme-footer"><code>themeConfig.footer</code></a>.</li></ul>',8),c=[r];function d(n,l,s,f,h,m){return o(),t("div",null,c)}const _=e(i,[["render",d]]);export{u as __pageData,_ as default};
