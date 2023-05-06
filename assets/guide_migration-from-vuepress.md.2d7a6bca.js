import{_ as e,o as a,c as s,V as r}from"./chunks/framework.6214194c.js";const f=JSON.parse('{"title":"从 VuePress 迁移","description":"","frontmatter":{},"headers":[],"relativePath":"guide/migration-from-vuepress.md","filePath":"guide/migration-from-vuepress.md","lastUpdated":1675050154000}'),o={name:"guide/migration-from-vuepress.md"},t=r(`<h1 id="migration-from-vuepress" tabindex="-1">从 VuePress 迁移 <a class="header-anchor" href="#migration-from-vuepress" aria-label="Permalink to &quot;从 VuePress 迁移 {#migration-from-vuepress}&quot;">​</a></h1><h2 id="config" tabindex="-1">配置 <a class="header-anchor" href="#config" aria-label="Permalink to &quot;配置 {#config}&quot;">​</a></h2><h3 id="sidebar" tabindex="-1">侧边栏 <a class="header-anchor" href="#sidebar" aria-label="Permalink to &quot;侧边栏 {#sidebar}&quot;">​</a></h3><p>侧边栏不再从 frontmatter 中自动获取。 你可以自行阅读 <a href="https://github.com/vuejs/vitepress/issues/572#issuecomment-1170116225" target="_blank" rel="noreferrer"><code>frontmatter</code></a> 来动态填充侧边栏。 <a href="https://github.com/vuejs/vitepress/issues/96" target="_blank" rel="noreferrer">迁移工具</a>将来可能会提供。</p><h2 id="markdown" tabindex="-1">Markdown <a class="header-anchor" href="#markdown" aria-label="Permalink to &quot;Markdown {#markdown}&quot;">​</a></h2><h3 id="images" tabindex="-1">图片 <a class="header-anchor" href="#images" aria-label="Permalink to &quot;图片 {#images}&quot;">​</a></h3><p>与 VuePress 不同，在使用静态图片时，VitePress 会根据你的配置自动处理这些 <code>base</code>(./asset-handling#base-url)。</p><p>因此，现在你可以在没有 <code>img</code> 标签的情况下渲染图像。</p><div class="language-diff line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> &lt;img :src=&quot;$withBase(&#39;/foo.png&#39;)&quot; alt=&quot;foo&quot;&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;"> ![foo](/foo.png)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="warning custom-block"><p class="custom-block-title">警告</p><p>对于动态图像，你仍然需要 <code>withBase</code>，如 <a href="./asset-handling#base-url">Base URL</a> 中所示。</p></div><p>使用 <code>&lt;img.*withBase\\(&#39;(.*)&#39;\\).*alt=&quot;([^&quot;]*)&quot;.*&gt;</code> 正则表达式查找并替换为 <code>![$2]($1)</code> 用 <code>![](...)</code> 语法替换所有图像。</p><hr><p>更多请继续关注...</p>`,13),i=[t];function n(l,c,d,p,u,m){return a(),s("div",null,i)}const g=e(o,[["render",n]]);export{f as __pageData,g as default};
