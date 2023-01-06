import{_ as s,o as a,c as n,a as l}from"./app.828c3a0a.js";const C=JSON.parse('{"title":"部署","description":"","frontmatter":{},"headers":[{"level":2,"title":"本地构建与测试","slug":"本地构建与测试","link":"#本地构建与测试","children":[]},{"level":2,"title":"Netlify, Vercel, AWS Amplify, Cloudflare Pages, Render","slug":"netlify-vercel-aws-amplify-cloudflare-pages-render","link":"#netlify-vercel-aws-amplify-cloudflare-pages-render","children":[]},{"level":2,"title":"GitHub Pages","slug":"github-pages","link":"#github-pages","children":[{"level":3,"title":"使用 GitHub Actions","slug":"使用-github-actions","link":"#使用-github-actions","children":[]}]},{"level":2,"title":"GitLab Pages","slug":"gitlab-pages","link":"#gitlab-pages","children":[{"level":3,"title":"Using GitLab CI","slug":"using-gitlab-ci","link":"#using-gitlab-ci","children":[]}]},{"level":2,"title":"Azure Static Web Apps","slug":"azure-static-web-apps","link":"#azure-static-web-apps","children":[]},{"level":2,"title":"Firebase","slug":"firebase","link":"#firebase","children":[]},{"level":2,"title":"Surge","slug":"surge","link":"#surge","children":[]},{"level":2,"title":"Heroku","slug":"heroku","link":"#heroku","children":[]},{"level":2,"title":"Layer0","slug":"layer0","link":"#layer0","children":[]}],"relativePath":"guide/deploying.md","lastUpdated":1672998325000}'),o={name:"guide/deploying.md"},e=l(`<h1 id="部署" tabindex="-1">部署 <a class="header-anchor" href="#部署" aria-hidden="true">#</a></h1><p>以下指南基于一些共识：</p><ul><li><p>你将文档放在项目的目录<code>docs</code>中。</p></li><li><p>你使用的是默认构建输出位置 (<code>.vitepress/dist</code>)。</p></li><li><p>VitePress 作为本地依赖项安装在项目中，并且你已在 <code>package.json</code>中设置了以下脚本：</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">scripts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">docs:build</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vitepress build docs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">docs:preview</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vitepress preview docs</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></li></ul><div class="tip custom-block"><p class="custom-block-title">提示</p><p>如果要在子目录 （<code>https://example.com/subdir/</code>） 中提供站点，则必须在 (<code>docs/.vitepress/config.js</code>)中, 将<a href="./../config/app-configs#base"><code>base</code></a>设置为 <code>&#39;/subdir/&#39;</code>。</p><p><strong>例:</strong> 如果你使用的是 Github（或 GitLab）页面并部署到 <code>user.github.io/repo/</code>，请将你的 <code>base</code> 设置为 <code>/repo/</code>.</p></div><h2 id="本地构建与测试" tabindex="-1">本地构建与测试 <a class="header-anchor" href="#本地构建与测试" aria-hidden="true">#</a></h2><ul><li><p>你可以运行以下命令来构建文档：</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs:build</span></span>
<span class="line"></span></code></pre></div></li><li><p>构建文档后，可以通过运行以下命令在本地测试它们：</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs:preview</span></span>
<span class="line"></span></code></pre></div><p><code>preview</code> 命令将启动一个本地静态 Web 服务器<code>http://localhost:4173</code>，该服务器以 <code>.vitepress/dist</code> 作为源文件。这是检查生产版本在本地环境中是否正常的一种简单方法。</p></li><li><p>你可以通过传递<code>--port</code>作为参数来配置服务器的端口。</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">scripts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">docs:preview</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vitepress preview docs --port 8080</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>现在<code>docs:preview</code>方法将在<code>http://localhost:8080</code>启动服务器。</p></li></ul><h2 id="netlify-vercel-aws-amplify-cloudflare-pages-render" tabindex="-1">Netlify, Vercel, AWS Amplify, Cloudflare Pages, Render <a class="header-anchor" href="#netlify-vercel-aws-amplify-cloudflare-pages-render" aria-hidden="true">#</a></h2><p>设置一个新项目并使用 dashboard 更改这些设置：</p><ul><li><strong>构建命令：</strong> <code>yarn docs:build</code></li><li><strong>输出目录：</strong> <code>docs/.vitepress/dist</code></li><li><strong>Node 版本：</strong> <code>14</code> (或者更高，默认情况下，它通常是14或16, 但是在Cloudflare Pages Node版本还处在12，所以你可能要<a href="https://developers.cloudflare.com/pages/platform/build-configuration/" target="_blank" rel="noreferrer">更改它</a>)</li></ul><div class="warning custom-block"><p class="custom-block-title">警告</p><p>不要为 HTML 代码启用 Auto Minify 等选项。它将从输出中删除对 Vue 有意义的注释。如果移除它们，你可能会收到 hydration mismatch 错误。</p></div><h2 id="github-pages" tabindex="-1">GitHub Pages <a class="header-anchor" href="#github-pages" aria-hidden="true">#</a></h2><h3 id="使用-github-actions" tabindex="-1">使用 GitHub Actions <a class="header-anchor" href="#使用-github-actions" aria-hidden="true">#</a></h3><ol><li><p>在你的主题配置文件中, <code>docs/.vitepress/config.js</code>, 设置 <code>base</code> 为GitHub仓库的名称。如果你打算把站点部署到 <code>https://foo.github.io/bar/</code>，那你就需要把 <code>base</code> 设置为 <code>&#39;/bar/&#39;</code>。它始终以 <code>/</code> 开头结尾。</p></li><li><p>在项目目录 <code>.github/workflows</code> 下创建一个名为 <code>deploy.yml</code> 的文件，包含以下内容：</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Deploy</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF9CAC;">on</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">push</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">branches</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">jobs</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">deploy</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">runs-on</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ubuntu-latest</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">steps</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">uses</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">actions/checkout@v3</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">with</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">fetch-depth</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">uses</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">actions/setup-node@v3</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">with</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">node-version</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">16</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">cache</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yarn</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">run</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yarn install --frozen-lockfile</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Build</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">run</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yarn docs:build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Deploy</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">uses</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">peaceiris/actions-gh-pages@v3</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">with</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">github_token</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">\${{ secrets.GITHUB_TOKEN }}</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">publish_dir</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs/.vitepress/dist</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#676E95;font-style:italic;"># cname: example.com # if wanna deploy to custom domain</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">提示</p><p>请替换相应的分支名称。比如你要建的分支是 <code>master</code> ，那么你要把上面文件中的 <code>main</code> 换成 <code>master</code>。</p></div></li><li><p>现在提交您的代码并将其推送到 <code>main</code> 分支。</p></li><li><p>等待 Actions 完成。</p></li><li><p>在页面菜单项下的仓库设置中，选择 <code>gh-pages</code> 分支作为 GitHub 页面源。现在，您的文档将在您每次推送时自动部署。</p></li></ol><h2 id="gitlab-pages" tabindex="-1">GitLab Pages <a class="header-anchor" href="#gitlab-pages" aria-hidden="true">#</a></h2><h3 id="using-gitlab-ci" tabindex="-1">Using GitLab CI <a class="header-anchor" href="#using-gitlab-ci" aria-hidden="true">#</a></h3><ol><li><p>Set <code>outDir</code> in <code>docs/.vitepress/config.js</code> to <code>../public</code>.</p></li><li><p>Create a file called <code>.gitlab-ci.yml</code> in the root of your project with the content below. This will build and deploy your site whenever you make changes to your content:</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#F07178;">image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">node:16</span></span>
<span class="line"><span style="color:#F07178;">pages</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">cache</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">paths</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">node_modules/</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yarn install</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yarn docs:build</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">artifacts</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">paths</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">public</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">only</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">main</span></span>
<span class="line"></span></code></pre></div></li></ol><h2 id="azure-static-web-apps" tabindex="-1">Azure Static Web Apps <a class="header-anchor" href="#azure-static-web-apps" aria-hidden="true">#</a></h2><ol><li><p>Follow the <a href="https://docs.microsoft.com/en-us/azure/static-web-apps/build-configuration" target="_blank" rel="noreferrer">official documentation</a>.</p></li><li><p>Set these values in your configuration file (and remove the ones you don&#39;t require, like <code>api_location</code>):</p><ul><li><strong><code>app_location</code></strong>: <code>/</code></li><li><strong><code>output_location</code></strong>: <code>docs/.vitepress/dist</code></li><li><strong><code>app_build_command</code></strong>: <code>yarn docs:build</code></li></ul></li></ol><h2 id="firebase" tabindex="-1">Firebase <a class="header-anchor" href="#firebase" aria-hidden="true">#</a></h2><ol><li><p>Create <code>firebase.json</code> and <code>.firebaserc</code> at the root of your project:</p><p><code>firebase.json</code>:</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">hosting</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">public</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">docs/.vitepress/dist</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">ignore</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p><code>.firebaserc</code>:</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">projects</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">default</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&lt;YOUR_FIREBASE_ID&gt;</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></li><li><p>After running <code>yarn docs:build</code>, run this command to deploy:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">firebase</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">deploy</span></span>
<span class="line"></span></code></pre></div></li></ol><h2 id="surge" tabindex="-1">Surge <a class="header-anchor" href="#surge" aria-hidden="true">#</a></h2><ol><li><p>After running <code>yarn docs:build</code>, run this command to deploy:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">npx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">surge</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs/.vitepress/dist</span></span>
<span class="line"></span></code></pre></div></li></ol><h2 id="heroku" tabindex="-1">Heroku <a class="header-anchor" href="#heroku" aria-hidden="true">#</a></h2><ol><li><p>Follow documentation and guide given in <a href="https://elements.heroku.com/buildpacks/heroku/heroku-buildpack-static" target="_blank" rel="noreferrer"><code>heroku-buildpack-static</code></a>.</p></li><li><p>Create a file called <code>static.json</code> in the root of your project with the below content:</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">root</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">docs/.vitepress/dist</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></li></ol><h2 id="layer0" tabindex="-1">Layer0 <a class="header-anchor" href="#layer0" aria-hidden="true">#</a></h2><p>Refer <a href="https://docs.layer0.co/guides/vitepress" target="_blank" rel="noreferrer">Creating and Deploying a VitePress App with Layer0</a>.</p>`,26),p=[e];function c(t,r,i,y,d,D){return a(),n("div",null,p)}const u=s(o,[["render",c]]);export{C as __pageData,u as default};
