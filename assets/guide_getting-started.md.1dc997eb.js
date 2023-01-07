import{_ as s,o as a,c as n,a as e}from"./app.1352c6c7.js";const u=JSON.parse('{"title":"起步","description":"","frontmatter":{},"headers":[{"level":2,"title":"步骤. 1: 创建新项目","slug":"step-1-create-a-new-project","link":"#step-1-create-a-new-project","children":[]},{"level":2,"title":"步骤. 2: 安装 VitePress","slug":"step-2-install-vitepress","link":"#step-2-install-vitepress","children":[]},{"level":2,"title":"步骤. 3: 启动开发环境","slug":"step-3-boot-up-dev-environment","link":"#step-3-boot-up-dev-environment","children":[]},{"level":2,"title":"步骤. 4: 添加更多页面","slug":"step-4-add-more-pages","link":"#step-4-add-more-pages","children":[]},{"level":2,"title":"接下来做什么?","slug":"what-s-next","link":"#what-s-next","children":[]}],"relativePath":"guide/getting-started.md","lastUpdated":1673082999000}'),p={name:"guide/getting-started.md"},l=e(`<h1 id="getting-started" tabindex="-1">起步 <a class="header-anchor" href="#getting-started" aria-hidden="true">#</a></h1><p>本节将帮助你从头开始构建一个基本的 VitePress 文档站点。如果你已有一个现有项目并希望在项目中保留文档，请从第 2 步开始。</p><p>你也可以在 <a href="https://vitepress.new/" target="_blank" rel="noreferrer">StackBlitz</a> 上在线试用 VitePress。它直接在浏览器中运行基于 VitePress 的站点，因此它与本地设置几乎相同，不需要在你的计算机上安装任何东西。</p><div class="warning custom-block"><p class="custom-block-title">警告</p><p>VitePress目前处于<code>alpha</code>状态。它已经适合开箱即用的文档使用，但是配置和 theme API仍然可能在minor版本之间发生变化。</p></div><h2 id="step-1-create-a-new-project" tabindex="-1">步骤. 1: 创建新项目 <a class="header-anchor" href="#step-1-create-a-new-project" aria-hidden="true">#</a></h2><p>创建新目录并转到该目录下。</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mkdir</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vitepress-starter</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vitepress-starter</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>然后，使用你喜欢的包管理器进行初始化。</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="step-2-install-vitepress" tabindex="-1">步骤. 2: 安装 VitePress <a class="header-anchor" href="#step-2-install-vitepress" aria-hidden="true">#</a></h2><p>添加VitePress和Vue作为项目的开发依赖项。</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--dev</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vitepress</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vue</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><details class="details custom-block"><summary>有缺少peer deps的警告?</summary><p><code>@docsearch/js</code> 的peer dependencies关系存在某些问题。如果你看到一些命令由于它们而失败，你可以尝试此解决方法</p><p>如果你使用pnpm，将以下代码添加到 <code>package.json</code>:</p><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">pnpm</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">peerDependencyRules</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">ignoreMissing</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@algolia/client-search</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></details><p>创建你的第一个Markdown文件。</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mkdir</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"># Hello VitePress</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs/index.md</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="step-3-boot-up-dev-environment" tabindex="-1">步骤. 3: 启动开发环境 <a class="header-anchor" href="#step-3-boot-up-dev-environment" aria-hidden="true">#</a></h2><p>添加一些脚本到 <code>package.json</code>.</p><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">scripts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">docs:dev</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vitepress dev docs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">docs:build</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vitepress build docs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">docs:preview</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vitepress preview docs</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>在本地服务器上启动文档站点服务。</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs:dev</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>VitePress将在 <code>http://localhost:5173</code> 启动热重载开发服务器.</p><h2 id="step-4-add-more-pages" tabindex="-1">步骤. 4: 添加更多页面 <a class="header-anchor" href="#step-4-add-more-pages" aria-hidden="true">#</a></h2><p>让我们向站点添加另一个页面。创建文件名<code>getting-started.md</code>以及在步骤中创建的<code>index.md</code>。2.现在你的目录结构应该是这样的。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ docs</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ getting-started.md</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─ index.md</span></span>
<span class="line"><span style="color:#A6ACCD;">└─ package.json</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>然后，尝试访问<code>http://localhost:5173/getting-started.html</code>，你应该会看到<code>getting-started.md</code>的内容。</p><p>这就是VitePress的基本工作方式。目录结构与URL路径相对应。你添加文件，然后尝试访问它。</p><h2 id="what-s-next" tabindex="-1">接下来做什么? <a class="header-anchor" href="#what-s-next" aria-hidden="true">#</a></h2><p>现在，你应该有一个基本但功能强大的 VitePress 文档站点。但目前，用户无法在网站上导航，因为它缺少例如我们在这个网站上的侧边栏菜单。</p><p>要启用这些导航，我们必须向站点添加一些配置。前往<a href="./configuration">配置指南</a>，了解如何配置 VitePress。</p><p>如果你想了解更多关于你可以在页面中执行的操作，例如，编写 Markdown内容或使用 Vue Component，请查看文档的“编写”部分。<a href="./markdown">Markdown 指南</a>将是一个很好的起点。</p><p>如果你想了解如何自定义网站外观（ theme ），并了解VitePress默认 theme 提供的功能，请访问<a href="./theme-introduction"> theme -介绍</a>。</p><p>当你的文档站点开始成形时，请务必阅读<a href="./deploying">部署指南</a>。</p>`,32),o=[l];function t(r,c,i,d,D,y){return a(),n("div",null,o)}const F=s(p,[["render",t]]);export{u as __pageData,F as default};