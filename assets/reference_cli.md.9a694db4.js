import{_ as e,o as t,c as a,V as s}from"./chunks/framework.6214194c.js";const m=JSON.parse('{"title":"命令行接口","description":"","frontmatter":{},"headers":[],"relativePath":"reference/cli.md","filePath":"reference/cli.md","lastUpdated":1681591701000}'),o={name:"reference/cli.md"},d=s('<h1 id="command-line-interface" tabindex="-1">命令行接口 <a class="header-anchor" href="#command-line-interface" aria-label="Permalink to &quot;命令行接口 {#command-line-interface}&quot;">​</a></h1><h2 id="vitepress-dev" tabindex="-1"><code>vitepress dev</code> <a class="header-anchor" href="#vitepress-dev" aria-label="Permalink to &quot;`vitepress dev`&quot;">​</a></h2><p>使用指定目录作为根目录来启动 VitePress 开发服务器。默认为当前目录。在当前目录下运行时也可以省略 <code>dev</code> 命令。</p><h3 id="用法" tabindex="-1">用法 <a class="header-anchor" href="#用法" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 从当前目录开始，省略 `dev`</span></span>\n<span class="line"><span style="color:#FFCB6B;">vitepress</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># 从子目录开始</span></span>\n<span class="line"><span style="color:#FFCB6B;">vitepress</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dev</span><span style="color:#A6ACCD;"> [root]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-label="Permalink to &quot;选项&quot;">​</a></h3><table><thead><tr><th>选项</th><th>说明</th></tr></thead><tbody><tr><td><code>--open [path]</code></td><td>启动时打开浏览器 (<code>boolean | string</code>)</td></tr><tr><td><code>--port &lt;port&gt;</code></td><td>指定端口 (<code>number</code>)</td></tr><tr><td><code>--base &lt;path&gt;</code></td><td>公共基础路径 (default: <code>/</code>) (<code>string</code>)</td></tr><tr><td><code>--cors</code></td><td>启用 CORS</td></tr><tr><td><code>--strictPort</code></td><td>如果指定的端口已被占用则退出 (<code>boolean</code>)</td></tr><tr><td><code>--force</code></td><td>强制优化程序忽略缓存并重新绑定 (<code>boolean</code>)</td></tr></tbody></table><h2 id="vitepress-build" tabindex="-1"><code>vitepress build</code> <a class="header-anchor" href="#vitepress-build" aria-label="Permalink to &quot;`vitepress build`&quot;">​</a></h2><p>构建用于生产的 VitePress 站点。</p><h3 id="usage" tabindex="-1">用法 <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;用法 {#usage}&quot;">​</a></h3><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">vitepress</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build</span><span style="color:#A6ACCD;"> [root]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="options" tabindex="-1">选项 <a class="header-anchor" href="#options" aria-label="Permalink to &quot;选项 {#options}&quot;">​</a></h3><table><thead><tr><th>选项</th><th>说明</th></tr></thead><tbody><tr><td><code>--mpa</code> (experimental)</td><td>在没有客户端 hydration 的 <a href="./../guide/mpa-mode">MPA 模式</a> 下构建 (<code>boolean</code>)</td></tr><tr><td><code>--base &lt;path&gt;</code></td><td>公共基础路径 (default: <code>/</code>) (<code>string</code>)</td></tr><tr><td><code>--target &lt;target&gt;</code></td><td>转译目标 (default: <code>&quot;modules&quot;</code>) (<code>string</code>)</td></tr><tr><td><code>--outDir &lt;dir&gt;</code></td><td>输出目录 (default: <code>.vitepress/dist</code>) (<code>string</code>)</td></tr><tr><td><code>--minify [minifier]</code></td><td>启用/禁用压缩，或指定要使用的压缩程序 (default: <code>&quot;esbuild&quot;</code>) (<code>boolean | &quot;terser&quot; | &quot;esbuild&quot;</code>)</td></tr><tr><td><code>--assetsInlineLimit &lt;number&gt;</code></td><td>静态资源 base64 内联阈值（以字节为单位） (default: <code>4096</code>) (<code>number</code>)</td></tr></tbody></table><h2 id="vitepress-preview" tabindex="-1"><code>vitepress preview</code> <a class="header-anchor" href="#vitepress-preview" aria-label="Permalink to &quot;`vitepress preview`&quot;">​</a></h2><p>在本地预览生产版本。</p><h3 id="usage-1" tabindex="-1">用法 <a class="header-anchor" href="#usage-1" aria-label="Permalink to &quot;用法 {#usage-1}&quot;">​</a></h3><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">vitepress</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">preview</span><span style="color:#A6ACCD;"> [root]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="options-1" tabindex="-1">选项 <a class="header-anchor" href="#options-1" aria-label="Permalink to &quot;选项 {#options-1}&quot;">​</a></h3><table><thead><tr><th>选项</th><th>说明</th></tr></thead><tbody><tr><td><code>--base &lt;path&gt;</code></td><td>公共基础路径 (default: <code>/</code>) (<code>string</code>)</td></tr><tr><td><code>--port &lt;port&gt;</code></td><td>指定端口 (<code>number</code>)</td></tr></tbody></table><h2 id="vitepress-init" tabindex="-1"><code>vitepress init</code> <a class="header-anchor" href="#vitepress-init" aria-label="Permalink to &quot;`vitepress init`&quot;">​</a></h2><p>在当前目录中启动<a href="./../guide/getting-started#setup-wizard">安装向导</a>。</p><h3 id="用法-1" tabindex="-1">用法 <a class="header-anchor" href="#用法-1" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">vitepress</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',23),r=[d];function n(l,i,c,p,h,u){return t(),a("div",null,r)}const v=e(o,[["render",n]]);export{m as __pageData,v as default};
