import{_ as s,o as a,c as e,V as n}from"./chunks/framework.95d47618.js";const F=JSON.parse('{"title":"资源处理","description":"","frontmatter":{},"headers":[],"relativePath":"guide/asset-handling.md","lastUpdated":1681591701000}'),l={name:"guide/asset-handling.md"},o=n(`<h1 id="asset-handling" tabindex="-1">资源处理 <a class="header-anchor" href="#asset-handling" aria-label="Permalink to &quot;资源处理 {#asset-handling}&quot;">​</a></h1><h2 id="referencing-static-assets" tabindex="-1">引用静态资源 <a class="header-anchor" href="#referencing-static-assets" aria-label="Permalink to &quot;引用静态资源 {#referencing-static-assets}&quot;">​</a></h2><p>所有的 Markdown 文件都会被编译成 Vue 组件，并由 <a href="https://vitejs.dev/guide/assets.html" target="_blank" rel="noreferrer">Vite</a> 处理。你可以，<strong>并且应该</strong>使用相对路径来引用任何资源：</p><div class="language-md line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">![</span><span style="color:#C3E88D;">An image</span><span style="color:#89DDFF;">](</span><span style="color:#A6ACCD;text-decoration:underline;">./image.png</span><span style="color:#89DDFF;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>你可以在 Markdown 文件、主题中的 <code>*.vue</code> 组件、样式和普通的 <code>.css</code> 文件中引用静态资源，通过使用绝对路径 (基于项目根目录) 或者相对路径 (基于文件系统)。后者类似于 Vite，Vue CLI，或者 webpack 的 <code>file-loader</code>的行为。</p><p>常见的图像，媒体和字体文件会被自动检测并包含为资源。</p><p>所有引用的资源，包括那些使用绝对路径的，都会在生产构建过程中被复制到输出目录，并具有哈希文件名。从未使用过的资源将不会被复制。小于 4kb 的图像资源将会被使用 base64 内联 - 这可以通过 <a href="./../reference/site-config#vite"><code>vite</code></a> 配置选项进行配置。</p><p>所有<strong>静态</strong>路径引用，包括绝对路径，都应基于你的工作目录结构。</p><h2 id="the-public-directory" tabindex="-1">public 目录 <a class="header-anchor" href="#the-public-directory" aria-label="Permalink to &quot;public 目录 {#the-public-directory}&quot;">​</a></h2><p>有时你可能需要提供一些静态资源，但这些资源没有直接被 Markdown 或主题组件直接引用，或者你可能想以原始文件名提供提供某些文件。此类文件的例子包括 <code>robot.txt</code>，favicons 和 PWA 图标。</p><p>你可以将这些文件放置在<a href="./routing#source-directory">源目录</a>的 <code>public</code> 目录中。例如，如果你的项目根目录是 <code>./docs</code>，并且使用默认源目录位置，那么你的 public 目录将是 <code>./docs/public</code>。</p><p>放置在 <code>public</code> 中的资源将按原样复制到输出目录的根目录中。</p><p>请注意，你应使用根绝对路径来引用放置在 <code>public</code> 中的文件 - 例如，<code>public/icon.png</code> 应始终在源代码中作为 <code>/icon.png</code> 引用。</p><p>但有一个例外：如果你在 <code>public</code> 中有一个 HTML 页面，并从主站点链接到它，路由默认会产生 404 错误。为了解决这个问题，VitePress 提供了 <code>pathname：//</code> 协议，它允许你像链接外部页面一样链接到同一域名的另一个页面。比较这两个链接：</p><ul><li><a href="/VitePressCN/pure.html">/pure.html</a></li><li><a href="/pure.html" target="_blank" rel="noreferrer">pathname:///pure.html</a></li></ul><h2 id="base-url" tabindex="-1">根 URL <a class="header-anchor" href="#base-url" aria-label="Permalink to &quot;根 URL {#base-url}&quot;">​</a></h2><p>如果你的网站部署在非根 URL 上，则需要在 <code>.vitepress/config.js</code> 中设置 <code>base</code> 选项。例如，如果你计划将网站部署到 <code>https://foo.github.io/bar/</code>，则 <code>base</code> 应设置为 <code>&#39;/bar/&#39;</code>(它应始终以斜杠开头和结尾)。</p><p>所有静态资源路径都会被自动处理，来适应不同的 <code>base</code> 配置值。例如，如果你的 markdown 中有一个对 <code>public</code> 中的资源的绝对引用：</p><div class="language-md line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">![</span><span style="color:#C3E88D;">An image</span><span style="color:#89DDFF;">](</span><span style="color:#A6ACCD;text-decoration:underline;">/image-inside-public.png</span><span style="color:#89DDFF;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>在这种情况下，更改 <code>base</code> 配置值时，你<strong>无需</strong>更新该引用。</p><p>但是如果你正在编写一个主题组件，它动态的链接到资源，例如一个图片，它的 <code>src</code> 基于主题配置值：</p><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">img</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">theme</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">logoPath</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">/&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>在这种情况下，建议使用 VitePress 提供的 <a href="./../reference/runtime-api#withbase"><code>withBase</code> helper</a> 来包装路径：</p><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">withBase</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useData</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vitepress</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> theme </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useData</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">img</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">withBase(theme.logoPath)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,24),p=[o];function t(c,r,i,d,D,u){return a(),e("div",null,p)}const b=s(l,[["render",t]]);export{F as __pageData,b as default};