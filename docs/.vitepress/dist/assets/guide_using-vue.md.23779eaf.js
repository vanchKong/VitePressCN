import{_ as t,o as a,c as e,b as s,F as i,f as d,d as o,e as y,n as D,a as n,r as F,t as u}from"./app.1f872c6b.js";const h={};function g(l,p){return a(),e("span",null,"⚡")}const m=t(h,[["render",g]]),C="_example_t4bci_2",A={example:C},f={props:["slot-key"],components:{ComponentInHeader:m},mounted(){document.querySelector(`.${this.$style.example}`).textContent="This is rendered by inline script and styled by inline CSS"}},q=JSON.parse('{"title":"Using Vue in Markdown","description":"","frontmatter":{},"headers":[{"level":2,"title":"Templating","slug":"templating","link":"#templating","children":[{"level":3,"title":"Interpolation","slug":"interpolation","link":"#interpolation","children":[]},{"level":3,"title":"Directives","slug":"directives","link":"#directives","children":[]},{"level":3,"title":"Access to Site & Page Data","slug":"access-to-site-page-data","link":"#access-to-site-page-data","children":[]}]},{"level":2,"title":"Escaping","slug":"escaping","link":"#escaping","children":[]},{"level":2,"title":"Using Components","slug":"using-components","link":"#using-components","children":[{"level":3,"title":"Importing components in markdown","slug":"importing-components-in-markdown","link":"#importing-components-in-markdown","children":[]},{"level":3,"title":"Registering global components in the theme","slug":"registering-global-components-in-the-theme","link":"#registering-global-components-in-the-theme","children":[]},{"level":3,"title":"Using Components In Headers","slug":"using-components-in-headers","link":"#using-components-in-headers","children":[]}]},{"level":2,"title":"Using CSS Pre-processors","slug":"using-css-pre-processors","link":"#using-css-pre-processors","children":[]},{"level":2,"title":"Script & Style Hoisting","slug":"script-style-hoisting","link":"#script-style-hoisting","children":[]},{"level":2,"title":"Built-In Components","slug":"built-in-components","link":"#built-in-components","children":[]},{"level":2,"title":"Browser API Access Restrictions","slug":"browser-api-access-restrictions","link":"#browser-api-access-restrictions","children":[]}],"relativePath":"guide/using-vue.md","lastUpdated":1672995648000}'),b=n(`<h1 id="using-vue-in-markdown" tabindex="-1">Using Vue in Markdown <a class="header-anchor" href="#using-vue-in-markdown" aria-hidden="true">#</a></h1><p>In VitePress, each markdown file is compiled into HTML and then processed as a Vue Single-File Component. This means you can use any Vue features inside the markdown, including dynamic templating, using Vue components, or arbitrary in-page Vue component logic by adding a <code>&lt;script&gt;</code> tag.</p><p>It is also important to know that VitePress leverages Vue 3&#39;s compiler to automatically detect and optimize the purely static parts of the markdown. Static contents are optimized into single placeholder nodes and eliminated from the page&#39;s JavaScript payload. They are also skipped during client-side hydration. In short, you only pay for the dynamic parts on any given page.</p><h2 id="templating" tabindex="-1">Templating <a class="header-anchor" href="#templating" aria-hidden="true">#</a></h2><h3 id="interpolation" tabindex="-1">Interpolation <a class="header-anchor" href="#interpolation" aria-hidden="true">#</a></h3><p>Each Markdown file is first compiled into HTML and then passed on as a Vue component to the Vite process pipeline. This means you can use Vue-style interpolation in text:</p><p><strong>Input</strong></p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">{{ 1 + 1 }}</span></span>
<span class="line"></span></code></pre></div><p><strong>Output</strong></p><div class="language-text"><pre><code>2</code></pre></div><h3 id="directives" tabindex="-1">Directives <a class="header-anchor" href="#directives" aria-hidden="true">#</a></h3><p>Directives also work:</p><p><strong>Input</strong></p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">i in 3</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">{{ i }}</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p><strong>Output</strong></p>`,15),v={class:"language-text"},_=n(`<h3 id="access-to-site-page-data" tabindex="-1">Access to Site &amp; Page Data <a class="header-anchor" href="#access-to-site-page-data" aria-hidden="true">#</a></h3><p>You can use the <a href="./api#usedata"><code>useData</code> helper</a> in a <code>&lt;script&gt;</code> block and expose the data to the page.</p><p><strong>Input</strong></p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useData</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vitepress</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> page </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useData</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">pre</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">{{ page }}</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">pre</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p><strong>Output</strong></p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">path</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/using-vue.html</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Using Vue in Markdown</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">frontmatter</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="escaping" tabindex="-1">Escaping <a class="header-anchor" href="#escaping" aria-hidden="true">#</a></h2><p>By default, fenced code blocks are automatically wrapped with <code>v-pre</code>, unless you have set some language with <code>-vue</code> suffix like <code>js-vue</code> (in that case you can use Vue-style interpolation inside fences). To display raw mustaches or Vue-specific syntax inside inline code snippets or plain text, you need to wrap a paragraph with the <code>v-pre</code> custom container:</p><p><strong>Input</strong></p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">::: v-pre</span></span>
<span class="line"><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">{{ This will be displayed as-is }}</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#A6ACCD;">:::</span></span>
<span class="line"></span></code></pre></div><p><strong>Output</strong></p><div><p><code>{{ This will be displayed as-is }}</code></p></div><h2 id="using-components" tabindex="-1">Using Components <a class="header-anchor" href="#using-components" aria-hidden="true">#</a></h2><p>When you need to have more flexibility, VitePress allows you to extend your authoring toolbox with your own Vue Components.</p><h3 id="importing-components-in-markdown" tabindex="-1">Importing components in markdown <a class="header-anchor" href="#importing-components-in-markdown" aria-hidden="true">#</a></h3><p>If your components are going to be used in only a few places, the recommended way to use them is to importing the components in the file where it is used.</p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import CustomComponent from &#39;../components/CustomComponent.vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">Docs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">This is a .md using a custom component</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">&lt;CustomComponent /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">## </span><span style="color:#FFCB6B;">More docs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"></span></code></pre></div><h3 id="registering-global-components-in-the-theme" tabindex="-1">Registering global components in the theme <a class="header-anchor" href="#registering-global-components-in-the-theme" aria-hidden="true">#</a></h3><p>If the components are going to be used across several pages in the docs, they can be registered globally in the theme (or as part of extending the default VitePress theme). Check out the <a href="./theme-introduction">Theming Guide</a> for more information.</p><p>In <code>.vitepress/theme/index.js</code>, the <code>enhanceApp</code> function receives the Vue <code>app</code> instance so you can <a href="https://vuejs.org/guide/components/registration.html" target="_blank" rel="noreferrer">register components</a> as you would do in a regular Vue application.</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> DefaultTheme </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vitepress/theme</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">DefaultTheme</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">enhanceApp</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">ctx</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">DefaultTheme</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">enhanceApp</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">ctx</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">component</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">VueClickAwayExample</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">VueClickAwayExample</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>Later in your markdown files, the component can be interleaved between the content</p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">Vue Click Away</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">&lt;VueClickAwayExample /&gt;</span></span>
<span class="line"></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">IMPORTANT</p><p>Make sure a custom component&#39;s name either contains a hyphen or is in PascalCase. Otherwise, it will be treated as an inline element and wrapped inside a <code>&lt;p&gt;</code> tag, which will lead to hydration mismatch because <code>&lt;p&gt;</code> does not allow block elements to be placed inside it.</p></div>`,24),k={id:"using-components-in-headers",tabindex:"-1"},w=s("a",{class:"header-anchor",href:"#using-components-in-headers","aria-hidden":"true"},"#",-1),T=n(`<p>You can use Vue components in the headers, but note the difference between the following syntaxes:</p><table><thead><tr><th>Markdown</th><th>Output HTML</th><th>Parsed Header</th></tr></thead><tbody><tr><td><pre><code> # text &lt;Tag/&gt; </code></pre></td><td><code>&lt;h1&gt;text &lt;Tag/&gt;&lt;/h1&gt;</code></td><td><code>text</code></td></tr><tr><td><pre><code> # text \`&lt;Tag/&gt;\` </code></pre></td><td><code>&lt;h1&gt;text &lt;code&gt;&amp;lt;Tag/&amp;gt;&lt;/code&gt;&lt;/h1&gt;</code></td><td><code>text &lt;Tag/&gt;</code></td></tr></tbody></table><p>The HTML wrapped by <code>&lt;code&gt;</code> will be displayed as-is; only the HTML that is <strong>not</strong> wrapped will be parsed by Vue.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The output HTML is accomplished by <a href="https://github.com/markdown-it/markdown-it" target="_blank" rel="noreferrer">markdown-it</a>, while the parsed headers are handled by VitePress (and used for both the sidebar and document title).</p></div><h2 id="using-css-pre-processors" tabindex="-1">Using CSS Pre-processors <a class="header-anchor" href="#using-css-pre-processors" aria-hidden="true">#</a></h2><p>VitePress has <a href="https://vitejs.dev/guide/features.html#css-pre-processors" target="_blank" rel="noreferrer">built-in support</a> for CSS pre-processors: <code>.scss</code>, <code>.sass</code>, <code>.less</code>, <code>.styl</code> and <code>.stylus</code> files. There is no need to install Vite-specific plugins for them, but the corresponding pre-processor itself must be installed:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;"># .scss and .sass</span></span>
<span class="line"><span style="color:#A6ACCD;">npm install -D sass</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># .less</span></span>
<span class="line"><span style="color:#A6ACCD;">npm install -D less</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># .styl and .stylus</span></span>
<span class="line"><span style="color:#A6ACCD;">npm install -D stylus</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Then you can use the following in Markdown and theme components:</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">sass</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#FFCB6B;">.title</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font-size</span><span style="color:#A6ACCD;">: </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;font-style:italic;">px</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="script-style-hoisting" tabindex="-1">Script &amp; Style Hoisting <a class="header-anchor" href="#script-style-hoisting" aria-hidden="true">#</a></h2><p>Sometimes you may need to apply some JavaScript or CSS only to the current page. In those cases, you can directly write root-level <code>&lt;script&gt;</code> or <code>&lt;style&gt;</code> blocks in the Markdown file. These will be hoisted out of the compiled HTML and used as the <code>&lt;script&gt;</code> and <code>&lt;style&gt;</code> blocks for the resulting Vue single-file component:</p>`,11),x=n(`<h2 id="built-in-components" tabindex="-1">Built-In Components <a class="header-anchor" href="#built-in-components" aria-hidden="true">#</a></h2><p>VitePress provides Built-In Vue Components like <code>ClientOnly</code>, check out the <a href="./api">Global Component Guide</a> for more information.</p><p><strong>Also see:</strong></p><ul><li><a href="#using-components-in-headers">Using Components In Headers</a></li></ul><h2 id="browser-api-access-restrictions" tabindex="-1">Browser API Access Restrictions <a class="header-anchor" href="#browser-api-access-restrictions" aria-hidden="true">#</a></h2><p>Because VitePress applications are server-rendered in Node.js when generating static builds, any Vue usage must conform to the <a href="https://vuejs.org/guide/scaling-up/ssr.html" target="_blank" rel="noreferrer">universal code requirements</a>. In short, make sure to only access Browser / DOM APIs in <code>beforeMount</code> or <code>mounted</code> hooks.</p><p>If you are using or demoing components that are not SSR-friendly (for example, contain custom directives), you can wrap them inside the built-in <code>&lt;ClientOnly&gt;</code> component:</p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;ClientOnly&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;NonSSRFriendlyComponent /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/ClientOnly&gt;</span></span>
<span class="line"></span></code></pre></div><p>Note this does not fix components or libraries that access Browser APIs <strong>on import</strong>. To use code that assumes a browser environment on import, you need to dynamically import them in proper lifecycle hooks:</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">mounted</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">import</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./lib-that-access-window-on-import</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">module</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// use code</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>If your module <code>export default</code> a Vue component, you can register it dynamically:</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">component</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">v-if</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dynamicComponent</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">:is</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dynamicComponent</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">component</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      dynamicComponent</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">mounted</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">import</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./lib-that-access-window-on-import</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">module</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">dynamicComponent</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">module.</span><span style="color:#A6ACCD;">default</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p><strong>Also see:</strong></p><ul><li><a href="https://vuejs.org/guide/essentials/component-basics.html#dynamic-components" target="_blank" rel="noreferrer">Vue.js &gt; Dynamic Components</a></li></ul>`,14);function V(l,p,S,E,P,B){const c=F("ComponentInHeader");return a(),e("div",null,[b,s("div",v,[s("pre",null,[s("code",null,[(a(),e(i,null,d(3,r=>s("span",null,u(r)+" ",1)),64))])])]),_,s("h3",k,[o("Using Components In Headers "),y(c),o(),w]),T,s("p",{class:D(["demo",l.$style.example])},null,2),x])}const I={$style:A},H=t(f,[["render",V],["__cssModules",I]]);export{q as __pageData,H as default};
