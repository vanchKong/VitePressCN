import{_ as e,o as a,c as o,a as t}from"./app.2b8353d1.js";const y=JSON.parse('{"title":"布局","description":"","frontmatter":{},"headers":[{"level":2,"title":"Doc 布局","slug":"doc-layout","link":"#doc-layout","children":[]},{"level":2,"title":"Page 布局","slug":"page-layout","link":"#page-layout","children":[]},{"level":2,"title":"Home 布局","slug":"home-layout","link":"#home-layout","children":[]},{"level":2,"title":"无布局","slug":"no-layout","link":"#no-layout","children":[]}],"relativePath":"guide/theme-layout.md","lastUpdated":1673111354000}'),n={name:"guide/theme-layout.md"},l=t(`<h1 id="layout" tabindex="-1">布局 <a class="header-anchor" href="#layout" aria-hidden="true">#</a></h1><p>你可以通过设置页面 <a href="./frontmatter">frontmatter</a> 选项来选择页面布局。有 3 种布局选项 <code>doc</code>、 <code>page</code> 和 <code>home</code>。如果未指定任何内容，则该页面将被视为 <code>doc</code> 页面。</p><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">---</span></span>
<span class="line"><span style="color:#F07178;">layout</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">doc</span></span>
<span class="line"><span style="color:#FFCB6B;">---</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="doc-layout" tabindex="-1">Doc 布局 <a class="header-anchor" href="#doc-layout" aria-hidden="true">#</a></h2><p><code>doc</code> 是默认布局，它将整个 Markdown 内容设置为“documentation”外观。它的工作原理是将整个内容包装在 css <code>vp-doc</code> 类中，并将样式应用于它下面的元素。</p><p>几乎所有通用元素，例如 <code>p</code>, 或 <code>h2</code> 都有特殊的样式。因此，请记住，如果你在 Markdown 内容中添加任何自定义 HTML，这些内容也会受到这些样式的影响。</p><p>它还提供下面列出的文档特定功能。这些功能仅在此布局中启用。</p><ul><li><a href="./theme-edit-link">编辑链接</a></li><li><a href="./theme-prev-next-link">上下页文本</a></li><li><a href="/VitePressCN/config/theme-configs#outline">提纲</a></li><li><a href="./theme-carbon-ads">Carbon Ads</a></li></ul><h2 id="page-layout" tabindex="-1">Page 布局 <a class="header-anchor" href="#page-layout" aria-hidden="true">#</a></h2><p><code>page</code> 被视为“空白页”。 Markdown 仍然会被解析，所有的 <a href="./markdown">Markdown 扩展</a> 都和布局一样运行，但它没有任何默认样式。</p><p><code>page</code> 布局将使你可以自行设计所有内容，而不会受 VitePress 主题影响。当你想要创建自己的自定义页面时，这很有用。</p><p>请注意，即使在此布局中，如果页面具有匹配的侧边栏配置，侧边栏仍会显示。</p><h2 id="home-layout" tabindex="-1">Home 布局 <a class="header-anchor" href="#home-layout" aria-hidden="true">#</a></h2><p>Option <code>home</code> will generate templated &quot;Homepage&quot;. In this layout, you can set extra options such as <code>hero</code> and <code>features</code> to customize the content further. Please visit <a href="./theme-home-page">Theme: Home Page</a> for more details. <code>home</code> 将生成模板化的“主页”。在此布局中， 你可以设置额外的选项，例如 <code>hero</code> 和 <code>features</code> 以进一步自定义内容。请访问<a href="./theme-home-page">Theme: 主页</a>了解更多详情。</p><h2 id="no-layout" tabindex="-1">无布局 <a class="header-anchor" href="#no-layout" aria-hidden="true">#</a></h2><p>如果你不想要任何布局，你可以通过 frontmatter 传递 <code>layout: false</code>。如果你想要一个完全可自定义的登录页面（默认情况下没有任何侧边栏、导航栏或页脚），此选项很有用。</p>`,16),s=[l];function d(c,r,i,p,h,u){return a(),o("div",null,s)}const f=e(n,[["render",d]]);export{y as __pageData,f as default};