import{_ as s,o as n,c as a,a as l}from"./app.1352c6c7.js";const m=JSON.parse('{"title":"总结","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础Markdown语法","slug":"基础markdown语法","link":"#基础markdown语法","children":[]},{"level":2,"title":"代码块","slug":"代码块","link":"#代码块","children":[]},{"level":2,"title":"自定义容器","slug":"自定义容器","link":"#自定义容器","children":[]},{"level":2,"title":"目录","slug":"目录","link":"#目录","children":[]}],"relativePath":"guide/summary.md","lastUpdated":1673034995000}'),e={name:"guide/summary.md"},p=l(`<h1 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-hidden="true">#</a></h1><h2 id="基础markdown语法" tabindex="-1">基础Markdown语法 <a class="header-anchor" href="#基础markdown语法" aria-hidden="true">#</a></h2><hr><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">  ---分割线</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  # 一级标题</span></span>
<span class="line"><span style="color:#A6ACCD;">  ## 二级标题</span></span>
<span class="line"><span style="color:#A6ACCD;">  ### 三级标题</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  - 无序列表     // - 可以替换为 * 或者 +</span></span>
<span class="line"><span style="color:#A6ACCD;">  - 无序列表</span></span>
<span class="line"><span style="color:#A6ACCD;">  - 无序列表</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  1. 有序列表</span></span>
<span class="line"><span style="color:#A6ACCD;">  2. 有序列表</span></span>
<span class="line"><span style="color:#A6ACCD;">  3. 有序列表</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="代码块" tabindex="-1">代码块 <a class="header-anchor" href="#代码块" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">  \`单行代码块\`</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>单行代码块</code></p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">  \`\`\`</span></span>
<span class="line"><span style="color:#A6ACCD;">    多行代码块</span></span>
<span class="line"><span style="color:#A6ACCD;">  \`\`\`</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">  多行代码块</span></span>
<span class="line"><span style="color:#A6ACCD;">  多行代码块</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><hr><h2 id="自定义容器" tabindex="-1">自定义容器 <a class="header-anchor" href="#自定义容器" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">  ::: info 消息</span></span>
<span class="line"><span style="color:#A6ACCD;">  这是一个消息容器</span></span>
<span class="line"><span style="color:#A6ACCD;">  :::</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  ::: tip 提示</span></span>
<span class="line"><span style="color:#A6ACCD;">  这是一个提示容器</span></span>
<span class="line"><span style="color:#A6ACCD;">  :::</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  ::: warning 警告</span></span>
<span class="line"><span style="color:#A6ACCD;">  这是一个警告容器</span></span>
<span class="line"><span style="color:#A6ACCD;">  :::</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  ::: danger 危险</span></span>
<span class="line"><span style="color:#A6ACCD;">  这是一个危险容器</span></span>
<span class="line"><span style="color:#A6ACCD;">  :::</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  ::: details 更多</span></span>
<span class="line"><span style="color:#A6ACCD;">  这是一个查看更多容器</span></span>
<span class="line"><span style="color:#A6ACCD;">  :::</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><div class="info custom-block"><p class="custom-block-title">消息</p><p>这是一个消息容器</p></div><div class="tip custom-block"><p class="custom-block-title">提示</p><p>这是一个提示容器</p></div><div class="warning custom-block"><p class="custom-block-title">警告</p><p>这是一个警告容器</p></div><div class="danger custom-block"><p class="custom-block-title">危险</p><p>这是一个危险容器</p></div><details class="details custom-block"><summary>更多</summary><p>这是一个查看更多容器</p></details><h2 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-hidden="true">#</a></h2><nav class="table-of-contents"><ul><li><a href="#基础markdown语法">基础Markdown语法</a></li><li><a href="#代码块">代码块</a></li><li><a href="#自定义容器">自定义容器</a></li><li><a href="#目录">目录</a></li></ul></nav><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">  [[toc]]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><a href="https://vitepress.vuejs.org/guide/using-vue#escaping" target="_blank" rel="noreferrer">https://vitepress.vuejs.org/guide/using-vue#escaping</a> On this page frontmatter hydration theme 两个404</p>`,21),r=[p];function c(i,o,t,d,b,u){return n(),a("div",null,r)}const A=s(e,[["render",c]]);export{m as __pageData,A as default};
