ex ...`,l:"config/app-configs.html",a:"app-configs"},"0.1":{t:"亮暗模式 ",p:`
Type: boolean | 'dark'
Default: true

是否启用深色模式。

如果该选项设置为 tru ...`,l:"config/app-configs.html#appearance",a:"appearance"},"0.2":{t:"base ",p:`
Type: string
Default: /

部署站点的 base URL。如果你计划在子路径（例如 GitHub 页 ...`,l:"config/app-configs.html#base",a:"base"},"0.3":{t:"网站描述 ",p:`
Type: string
Default: A VitePress site

网站的描述。 这将在页面 HTML 中呈现 ...`,l:"config/app-configs.html#description",a:"description"},"0.4":{t:"head",p:`
Type: HeadConfig[]
Default: []

附加元素将会在 &lt;head&gt; 标签中渲染。用户 ...`,l:"config/app-configs.html#head",a:"head"},"0.5":{t:"忽略无效链接 ",p:`
Type: boolean | 'localhostLinks'
Default: false

当设置为 true 时， ...`,l:"config/app-configs.html#ignoredeadlinks",a:"ignoredeadlinks"},"0.6":{t:"语言 ",p:`
Type: string
Default: en-US

站点的 lang 属性。 这将在页面 HTML 中呈现为 &lt ...`,l:"config/app-configs.html#lang",a:"lang"},"0.7":{t:"最近更新时间 ",p:`
Type: boolean
Default: false

使用 git commit 获取时间戳。 此选项启用默认主题以 ...`,l:"config/app-configs.html#lastupdated",a:"lastupdated"},"0.8":{t:"markdown",p:`
Type: MarkdownOption

配置 Markdown 解析器选项。 VitePress 使用 Markdow ...`,l:"config/app-configs.html#markdown",a:"markdown"},"0.9":{t:"outdir",p:`
Type: string
Default: ./.vitepress/dist

站点的构建输出位置，相对于项目根目录（如 ...`,l:"config/app-configs.html#outdir",a:"outdir"},"0.10":{t:"cachedir",p:`
Type: string
Default: ./.vitepress/cache

缓存文件的目录，相对于项目根目录（如果 ...`,l:"config/app-configs.html#cachedir",a:"cachedir"},"0.11":{t:"srcdir",p:`
Type: string
Default: .

存储 markdown 页面的目录，相对于项目根目录 docs。
exp ...`,l:"config/app-configs.html#srcdir",a:"srcdir"},"0.12":{t:"title",p:`
Type: string
Default: VitePress

网站的标题。这将显示在导航栏中。也用作所有页面标题的后缀 ...`,l:"config/app-configs.html#title",a:"title"},"0.13":{t:"titletemplate",p:`
Type: string | boolean

标题的后缀。例如，如果将 title 设置为 VitePress，将 ti ...`,l:"config/app-configs.html#titletemplate",a:"titletemplate"},"0.14":{t:"cleanUrls ",p:`
Type: boolean
Default: false

允许从 URL 中删除后面的 .html
&lt;!-- ，并 ...`,l:"config/app-configs.html#cleanurls",a:"cleanurls"},"0.15":{t:"rewrites",p:`
Type: Record&lt;string, string&gt;

定义自定义目录 &lt;-&gt; URL 映射。 ...`,l:"config/app-configs.html#rewrites",a:"rewrites"},"0.16":{t:"build-hooks",p:`VitePress build hooks 允许您向您的网站添加新功能和表现：

Sitemap
Search Indexi ...`,l:"config/app-configs.html#build-hooks",a:"build-hooks"},"1.0":{t:"# Frontmatter 配置 ",p:"Frontmatter 支持基于页面级别的配置。在每个 Markdown 上，你可以自由地添加任何设置来覆盖任何全局应用配置 ...",l:"config/frontmatter-configs.html",a:"frontmatter-configs"},"1.1":{t:"标题 ",p:`
Type: string

页面的标题。 它与 config.title 作用相同，它会覆盖应用程序配置。
---
tit ...`,l:"config/frontmatter-configs.html#title",a:"title"},"1.2":{t:"titletemplate",p:`
Type: string | boolean

标题的后缀。 它与 config.titleTemplate 作用相同，它 ...`,l:"config/frontmatter-configs.html#titletemplate",a:"titletemplate"},"1.3":{t:"描述 ",p:`
Type: string

页面的描述。 它与 config.description 作用相同，它会覆盖应用程序配置。
- ...`,l:"config/frontmatter-configs.html#description",a:"description"},"1.4":{t:"最近更新 ",p:`
Type: boolean
Default: true

是否在当前页面显示 最近更新。
---
lastUpdated: ...`,l:"config/frontmatter-configs.html#lastupdated",a:"lastupdated"},"1.5":{t:"布局 ",p:`
Type: doc | home | page
Default: doc

指定页面的布局。

doc - 它将默认文档样 ...`,l:"config/frontmatter-configs.html#layout",a:"layout"},"1.6":{t:"hero ",p:`
Type: Hero

此选项仅在 layout 设置为 home 时生效。
它定义了 home hero 部分的内容。
 ...`,l:"config/frontmatter-configs.html#hero",a:"hero"},"1.7":{t:"特性 ",p:`
Type: Feature[]

此选项仅在 layout 设置为 home 时生效。
它定义了要在特性部分显示的内容。
 ...`,l:"config/frontmatter-configs.html#features",a:"features"},"1.8":{t:"aside ",p:`
Type: boolean
Default: true

如果你不想在 doc 布局中显示右边的组件，设置该选项为 fal ...`,l:"config/frontmatter-configs.html#aside",a:"aside"},"1.9":{t:"outline",p:`
Type: number | [number, number] | 'deep' | false
Default: 2

 ...`,l:"config/frontmatter-configs.html#outline",a:"outline"},"2.0":{t:"# 介绍 ",p:`将配置文件放在 .vitepress/config.js 中。 这是放置所有 VitePress 特定文件的地方。
.
├─ ...`,l:"config/introduction.html",a:"introduction"},"2.1":{t:"配置智能提示 ",p:`由于 VitePress 附带 TypeScript 配置文件，您可以利用 IDE 的智能提示和 jsdoc 类型提示：
/ ...`,l:"config/introduction.html#config-intellisense",a:"config-intellisense"},"2.2":{t:"主题配置种类 ",p:`::: details 默认情况下，defineConfig 辅助函数采用默认主题的主题配置类型：
By default,  ...`,l:"config/introduction.html#typed-theme-config",a:"typed-theme-config"},"3.0":{t:"# 主题配置 ",p:`主题配置可让您自定义主题。 您可以通过将 themeConfig 添加到配置文件来定义主题配置。
export defaul ...`,l:"config/theme-configs.html",a:"theme-configs"},"3.1":{t:"i18nRouting ",p:`
Type: boolean

将本地语言更改为 zh 会将 URL 从 /foo（或 /en/foo/）更改为 /zh/f ...`,l:"config/theme-configs.html#i18nrouting",a:"i18nrouting"},"3.2":{t:"图标 ",p:`
Type: ThemeableImage

显示在导航栏中的 logo 文件，位于站点标题之前。接受路径字符串或包含亮/暗 ...`,l:"config/theme-configs.html#logo",a:"logo"},"3.3":{t:"站点标题 ",p:`
Type: string | false

您可以自定义此项以替换导航中的默认站点标题（应用配置中的 title）。 当设 ...`,l:"config/theme-configs.html#sitetitle",a:"sitetitle"},"3.4":{t:"导航栏 ",p:`
Type: NavItem

导航菜单项的配置。 您可以在主题: 导航栏 了解更多详情。
export default { ...`,l:"config/theme-configs.html#nav",a:"nav"},"3.5":{t:"侧边栏 ",p:`
Type: Sidebar

侧边栏菜单项的配置。 您可以在主题: 侧边栏 了解更多详情。
export default  ...`,l:"config/theme-configs.html#sidebar",a:"sidebar"},"3.6":{t:"大纲 ",p:`
Type: number | [number, number] | 'deep' | false
Default: 2

 ...`,l:"config/theme-configs.html#outline",a:"outline"},"3.7":{t:"大纲标题 ",p:`
Type: string
Default: On this page

可用于自定义右侧边栏的标题（在大纲链接的顶部）。  ...`,l:"config/theme-configs.html#outlinetitle",a:"outlinetitle"},"3.8":{t:"社交链接 ",p:`
Type: SocialLink[]

您可以定义此选项以在导航栏中展示带有图标的社交帐户链接。
export defau ...`,l:"config/theme-configs.html#sociallinks",a:"sociallinks"},"3.9":{t:"页脚 ",p:`
Type: Footer

页脚配置。 您可以添加 message 和 copyright。 由于设计原因，仅当页面不包含 ...`,l:"config/theme-configs.html#footer",a:"footer"},"3.10":{t:"编辑链接 ",p:`
Type: EditLink

编辑链接可让您显示链接以编辑 Git 管理服务（例如 GitHub 或 GitLab）上的 ...`,l:"config/theme-configs.html#editlink",a:"editlink"},"3.11":{t:"最近更新时间文本 ",p:`
Type: string
Default: Last updated

显示最近更新时间之前的前缀文本。
export d ...`,l:"config/theme-configs.html#lastupdatedtext",a:"lastupdatedtext"},"3.12":{t:"carbonAds ",p:`
Type: CarbonAds

一个配置即可展示 Carbon Ads。
export default {
	theme ...`,l:"config/theme-configs.html#carbon-ads",a:"carbon-ads"},"3.13":{t:"docfooter",p:`
Type: DocFooter

可用于自定义出现在上一篇和下一篇链接上方的文本。 如果不是用英语编写文档，这很有帮助。
 ...`,l:"config/theme-configs.html#docfooter",a:"docfooter"},"4.0":{t:"# API 参考 ",p:"VitePress 提供了几个内置 API 来获取应用程序数据。 VitePress 还提供了一些可以可全局使用的内置组件。 ...",l:"guide/api.html",a:"api-reference"},"4.1":{t:"useroute",p:`返回具有以下类型的当前 route 对象：
interface Route {
  path: string
  data: ...`,l:"guide/api.html#useroute",a:"useroute"},"4.2":{t:"userouter",p:`返回 VitePress 路由器实例，以便你可以以编程方式导航到另一个页面。
interface Router {
  ro ...`,l:"guide/api.html#userouter",a:"userouter"},"4.3":{t:"withbase",p:`
类型: (path: string) =&gt; string

将配置的 base 附加到给定的 URL 路径。另请参阅 ...`,l:"guide/api.html#withbase",a:"withbase"},"4.4":{t:"content",p:"The &lt;Content /&gt; component displays the rendered markdown ...",l:"guide/api.html#content",a:"content"},"4.5":{t:"clientonly",p:`&lt;ClientOnly /&gt; 组件仅在客户端呈现其插槽。
由于 VitePress 应用程序在生成静态构建时是在 ...`,l:"guide/api.html#clientonly",a:"clientonly"},"5.0":{t:"# 静态资源处理 ",p:`所有 Markdown 文件都编译成 Vue 组件并由 Vite 处理。你可以而且应该使用相对 URL 引用静态资源：
!A ...`,l:"guide/asset-handling.html",a:"asset-handling"},"5.1":{t:"公共文件 ",p:"有时你可能需要提供未在任何 Markdown 或 theme 组件中直接引用的静态资源（例如，网站图标和 PWA 图标）。项 ...",l:"guide/asset-handling.html#public-files",a:"public-files"},"5.2":{t:"Base URL ",p:"如果你的站点部署到非根 URL，则需要在 .vitepress/config.js 中设置 base 选项。例如，如果你计划 ...",l:"guide/asset-handling.html#base-url",a:"base-url"},"6.0":{t:"# 配置 ",p:"在没有任何配置的情况下，页面非常小，用户无法在站点中导航。为了自定义你的网站，让我们首先在docs目录中创建一个.vitep ...",l:"guide/configuration.html",a:"configuration"},"7.0":{t:"# 部署 ",p:`以下指南基于一些共识：


你将文档放在项目的目录docs中。


你使用的是默认构建输出位置 (.vitepress/di ...`,l:"guide/deploying.html",a:"deploying"},"7.1":{t:"本地构建与测试 ",p:`

你可以运行以下命令来构建文档：
yarn docs:build



构建文档后，可以通过运行以下命令在本地测试它们：
 ...`,l:"guide/deploying.html#build-and-test-locally",a:"build-and-test-locally"},"7.2":{t:"Netlify, Vercel, AWS Amplify, Cloudflare Pages, Render ",p:`设置一个新项目并使用 dashboard 更改这些设置：

构建命令： yarn docs:build
输出目录： docs ...`,l:"guide/deploying.html#netlify-vercel-aws-amplify-cloudflare-pages-render",a:"netlify-vercel-aws-amplify-cloudflare-pages-render"},"7.3":{t:"GitHub Pages ",p:`使用 GitHub Actions {#using-github-actions}


在你的 theme 配置文件中, d ...`,l:"guide/deploying.html#github-pages",a:"github-pages"},"7.4":{t:"GitLab Pages ",p:`Using GitLab CI {#using-gitlab-ci}


将 docs/.vitepress/config. ...`,l:"guide/deploying.html#gitlab-pages",a:"gitlab-pages"},"7.5":{t:"Azure Static Web Apps ",p:`

遵循官方文档。


在配置文件中设置这些值（并删除不需要的值，如 api_location）：

app_locatio ...`,l:"guide/deploying.html#azure-static-web-apps",a:"azure-static-web-apps"},"7.6":{t:"Firebase ",p:`

在项目的根目录下创建 firebase.json 和 .firebaserc：
firebase.json:
{
  & ...`,l:"guide/deploying.html#firebase",a:"firebase"},"7.7":{t:"surge",p:`

运行 yarn docs:build 后，运行此命令进行部署：
npx surge docs/.vitepress/di ...`,l:"guide/deploying.html#surge",a:"surge"},"7.8":{t:"heroku",p:`

遵循 heroku-buildpack-static 中给出的文档和指南。


使用以下内容在项目的根目录中创建一个名为 ...`,l:"guide/deploying.html#heroku",a:"heroku"},"7.9":{t:"layer0",p:`请参阅使用 Layer0 创建和部署 VitePress 应用程序。
`,l:"guide/deploying.html#layer0",a:"layer0"},"8.0":{t:"",p:`title: Frontmatter
editLink: true
{{ $frontmatter.title }} {#f ...`,l:"guide/frontmatter.html",a:""},"8.1":{t:"可供选择的 Frontmatter 格式 ",p:`VitePress 还支持 JSON frontmatter 语法，以花括号开头和结尾：
---
{
  &quot;tit ...`,l:"guide/frontmatter.html#alternative-frontmatter-formats",a:"alternative-frontmatter-formats"},"9.0":{t:"# 快速上手 ",p:"本节将帮助你从头开始构建一个基本的 VitePress 文档站点。如果你已有一个现有项目并希望在项目中保留文档，请从第 2  ...",l:"guide/getting-started.html",a:"getting-started"},"9.1":{t:"步骤. 1: 创建新项目 ",p:`创建新目录并转到该目录下。
$ mkdir vitepress-starter &amp;&amp; cd vitepres ...`,l:"guide/getting-started.html#step-1-create-a-new-project",a:"step-1-create-a-new-project"},"9.2":{t:"步骤. 2: 安装 VitePress ",p:`添加VitePress和Vue作为项目的开发依赖项。
$ yarn add --dev vitepress vue

::: ...`,l:"guide/getting-started.html#step-2-install-vitepress",a:"step-2-install-vitepress"},"9.3":{t:"步骤. 3: 启动开发环境 ",p:`添加一些脚本到 package.json.
{
  ...
  &quot;scripts&quot;: {
    &qu ...`,l:"guide/getting-started.html#step-3-boot-up-dev-environment",a:"step-3-boot-up-dev-environment"},"9.4":{t:"步骤. 4: 添加更多页面 ",p:"让我们向站点添加另一个页面。创建文件名getting-started.md以及在步骤中创建的index.md。2.现在你的目 ...",l:"guide/getting-started.html#step-4-add-more-pages",a:"step-4-add-more-pages"},"9.5":{t:"接下来做什么? ",p:"现在，你应该有一个基本但功能强大的 VitePress 文档站点。但目前，用户无法在网站上导航，因为它缺少例如我们在这个网站 ...",l:"guide/getting-started.html#what-s-next",a:"what-s-next"},"10.0":{t:"# 国际化 ",p:`要使用内置的 i18n 功能，需要创建如下目录结构：
docs/
├─ es/
│  ├─ foo.md
├─ fr/
│  ...`,l:"guide/i18n.html",a:"internationalization"},"10.1":{t:"每个语言环境的单独目录 ",p:`以下是一个完美的精细结构：
docs/
├─ en/
│  ├─ foo.md
├─ es/
│  ├─ foo.md
├─ ...`,l:"guide/i18n.html#separate-directory-for-each-locale",a:"separate-directory-for-each-locale"},"10.2":{t:"RTL 支持 (试验性的) ",p:"对于 RTL 支持，请在配置中指定 dir: 'rtl' 并使用一些 RTLCSS PostCSS 插件，例如 https: ...",l:"guide/i18n.html#rtl-support-experimental",a:"rtl-support-experimental"},"11.0":{t:"# markdown 基础语法 ",p:"",l:"guide/markdown-base.html",a:"markdown-base"},"11.1":{t:"标题 ",p:`# 一级标题
`,l:"guide/markdown-base.html#title",a:"title"},"11.2":{t:"二级标题",p:`三级标题
...
::: details 示例
### 三级标题
#### 四级标题
##### 五级标题
###### 六 ...`,l:"guide/markdown-base.html#二级标题",a:"二级标题"},"11.3":{t:"字体",p:`加粗
**加粗**

斜体
*斜体*

斜体加粗
***斜体加粗***

删除线
~~删除线~~

::: details  ...`,l:"guide/markdown-base.html#字体",a:"字体"},"11.4":{t:"引用",p:`&gt;这是引用的内容
&gt;&gt;这是引用的内容
&gt;&gt;&gt;&gt;&gt;&gt;这是引用的内容
&l ...`,l:"guide/markdown-base.html#引用",a:"引用"},"11.5":{t:"分割线",p:`---
***
可以在一行中使用三个或更多的 * 、 - 或者 _ 来添加分隔线

::: details 示例

:::
`,l:"guide/markdown-base.html#分割线",a:"分割线"},"11.6":{t:"换行",p:`&lt;p&gt;&lt;/p&gt; 或者
&lt;br&gt;

`,l:"guide/markdown-base.html#换行",a:"换行"},"11.7":{t:"链接",p:`&lt;!-- 注：Markdown本身语法不支持链接在新页面中打开, VitePress 做了处理 --&gt;
链接文本 ...`,l:"guide/markdown-base.html#链接",a:"链接"},"11.8":{t:"图片",p:`!alt
alt就是显示在图片下面的文字，相当于对图片内容的解释。
title是图片的标题，当鼠标移到图片上时显示的内容。
 ...`,l:"guide/markdown-base.html#图片",a:"图片"},"11.9":{t:"列表 ",p:`无序列表 {#unordered-list}
&lt;!-- 注意：序号跟内容之间要有空格 --&gt;
&lt;!-- 无 ...`,l:"guide/markdown-base.html#list",a:"list"},"11.10":{t:"表格",p:`| 居左 | 居中  | 居右 |
| :--- | :---: | ---: |
| 内容 | 内容  | 内容 |
|  ...`,l:"guide/markdown-base.html#表格",a:"表格"},"11.11":{t:"代码块",p:"单行代码块\n`单行代码块`\n\n多行代码块\n&lt;!-- ```之后可以指定语言类型, ~~~ 可以替换 ``` --&gt ...",l:"guide/markdown-base.html#代码块",a:"代码块"},"11.12":{t:"转义字符",p:`要显示原义字符，否则将用于设置Markdown文档中的文本格式 \\，请在字符前面添加反斜杠。
\\* 如果没有反斜杠，这将是无 ...`,l:"guide/markdown-base.html#转义字符",a:"转义字符"},"11.13":{t:"脚注",p:`&lt;!-- 脚注基于 mit 插件 markdown-it-footnote 实现 --&gt;
&lt;!-- 注解始 ...`,l:"guide/markdown-base.html#脚注",a:"脚注"},"12.0":{t:"# Markdown 扩展 ",p:`VitePress 带有内置的 Markdown 扩展。
`,l:"guide/markdown.html",a:"markdown-extensions"},"12.1":{t:"标题锚点 ",p:`标头自动应用锚点链接。可以使用 markdown.anchor 选项配置锚点的渲染。
`,l:"guide/markdown.html#header-anchors",a:"header-anchors"},"12.2":{t:"链接 ",p:`内部和外部链接都得到特殊处理。
内部链接 {#internal-links}
内部链接转换为 SPA 导航的路由器链接。此外 ...`,l:"guide/markdown.html#links",a:"links"},"12.3":{t:"Frontmatter ",p:`YAML frontmatter 是开箱即用的：
---
title: Blogging Like a Hacker
lan ...`,l:"guide/markdown.html#frontmatter",a:"frontmatter"},"12.4":{t:"GitHub 风格的表格 ",p:`输入
| Tables    |  Are   |  Cool |
| --------- | :----: | ----: ...`,l:"guide/markdown.html#github-style-tables",a:"github-style-tables"},"12.5":{t:"表情符号 :tada: ",p:`输入
:tada: :100:

输出
:tada: :100:
提供所有表情符号的列表。
`,l:"guide/markdown.html#emoji",a:"emoji"},"12.6":{t:"目录 ",p:`输入
[[toc]]

输出
[[toc]]
可以使用 markdown.toc选项配置 TOC 的渲染。
`,l:"guide/markdown.html#table-of-contents",a:"table-of-contents"},"12.7":{t:"自定义容器 ",p:`自定义容器可以通过它们的类型、标题和内容来定义。
默认标题 {#default-title}
输入
::: info
Thi ...`,l:"guide/markdown.html#custom-containers",a:"custom-containers"},"12.8":{t:"代码块中的语法高亮 ",p:"VitePress 使用 Shiki 在 Markdown 代码块中使用彩色文本高亮显示语法。 Shiki 支持多种编程语言 ...",l:"guide/markdown.html#syntax-highlighting-in-code-blocks",a:"syntax-highlighting-in-code-blocks"},"12.9":{t:"代码块中的行高亮显示 ",p:`输入
\`\`\`js{4}
export default {
  data () {
    return {
      ms ...`,l:"guide/markdown.html#line-highlighting-in-code-blocks",a:"line-highlighting-in-code-blocks"},"12.10":{t:"代码块聚焦 ",p:`在一行上添加 // [!code focus] 注释将聚焦它并模糊代码的其他部分。
此外，你可以使用 // [!code f ...`,l:"guide/markdown.html#focus-in-code-blocks",a:"focus-in-code-blocks"},"12.11":{t:"代码块中的彩色差异 ",p:`在一行中添加 // [!code --] 或 // [!code ++] 注释将创建该行的差异，同时保持代码块的颜色。
输入 ...`,l:"guide/markdown.html#colored-diffs-in-code-blocks",a:"colored-diffs-in-code-blocks"},"12.12":{t:"代码块中的错误和警告 ",p:`在一行中添加 // [!code warning] 或 // [!code error] 注释会相应地为其着色。
输入
注意 ...`,l:"guide/markdown.html#errors-and-warnings-in-code-blocks",a:"errors-and-warnings-in-code-blocks"},"12.13":{t:"行号 ",p:`你可以通过配置为每个代码块启用行号：
export default {
  markdown: {
    lineNumb ...`,l:"guide/markdown.html#line-numbers",a:"line-numbers"},"12.14":{t:"导入代码片段 ",p:`你可以通过以下语法从现有文件导入代码片段：
&lt;&lt;&lt; @/filepath

它还支持行高亮显示：
&lt; ...`,l:"guide/markdown.html#import-code-snippets",a:"import-code-snippets"},"12.15":{t:"代码组 ",p:`你可以像这样对多个代码块进行分组：
输入
::: code-group

\`\`\`js [config.js]
/**
 *  ...`,l:"guide/markdown.html#code-groups",a:"code-groups"},"12.16":{t:"Markdown 文件嵌套 ",p:`你可以像这样在一个 markdown 文件中嵌套另一个 markdown 文件：
输入
# Docs

`,l:"guide/markdown.html#markdown-file-inclusion",a:"markdown-file-inclusion"},"12.17":{t:"basics",p:`&lt;!--@include: ./parts/basics.md--&gt;

Part file (\`parts/ba ...`,l:"guide/markdown.html#basics",a:"basics"},"12.18":{t:"basics",p:`Some getting started stuff.
Configuration
Can be created using ...`,l:"guide/markdown.html#basics",a:"basics"},"12.19":{t:"高级配置 ",p:"VitePress 使用 markdown-it 作为 Markdown 渲染器。上面的很多扩展都是通过自定义插件实现的。你 ...",l:"guide/markdown.html#advanced-configuration",a:"advanced-configuration"},"13.0":{t:"# 从 VitePress 0.x 迁移 ",p:"如果您来自 VitePress 0.x 版本，由于新功能和增强功能，VitePress 有了一些重大更改。 请按照本指南了解 ...",l:"guide/migration-from-vitepress-0.html",a:"migration-from-vitepress-0-x"},"13.1":{t:"应用配置 ",p:`
The internationalization feature is not yet implemented.

`,l:"guide/migration-from-vitepress-0.html#app-config",a:"app-config"},"13.2":{t:"主题配置 ",p:`
sidebar 选项改变了它的结构。

children 现在命名为 items。
顶级侧边栏不包含 link。 我们打算 ...`,l:"guide/migration-from-vitepress-0.html#theme-config",a:"theme-config"},"13.3":{t:"Frontmatter 配置 ",p:`
home: true 选项已更改为 layout: home。此外，还修改了许多与主页相关的设置以提供附加功能。 详情请参 ...`,l:"guide/migration-from-vitepress-0.html#frontmatter-config",a:"frontmatter-config"},"14.0":{t:"# 从 VuePress 迁移 ",p:"",l:"guide/migration-from-vuepress.html",a:"migration-from-vuepress"},"14.1":{t:"配置 ",p:`侧边栏 {#sidebar}
侧边栏不再从 frontmatter 中自动获取。 你可以自行阅读 frontmatter 来 ...`,l:"guide/migration-from-vuepress.html#config",a:"config"},"14.2":{t:"Markdown ",p:`图片 {#images}
与 VuePress 不同，在使用静态图片时，VitePress 会根据你的配置自动处理这些 ba ...`,l:"guide/migration-from-vuepress.html#markdown",a:"markdown"},"15.0":{t:"routing",p:"VitePress is built with file system based routing, which means ...",l:"guide/routing.html",a:"routing"},"15.1":{t:"basic-routing",p:"By default, VitePress assumes your page files are stored in pr ...",l:"guide/routing.html#basic-routing",a:"basic-routing"},"15.2":{t:"changing-the-root-directory",p:"To change the root directory for your page files, you may pass ...",l:"guide/routing.html#changing-the-root-directory",a:"changing-the-root-directory"},"15.3":{t:"linking-between-pages",p:"When adding links in pages, omit extension from the path and u ...",l:"guide/routing.html#linking-between-pages",a:"linking-between-pages"},"15.4":{t:"generate-clean-url",p:"A &quot;Clean URL&quot; is commonly known as URL without .html ...",l:"guide/routing.html#generate-clean-url",a:"generate-clean-url"},"15.5":{t:"customize-the-mappings",p:"You may customize the mapping between directory structure and  ...",l:"guide/routing.html#customize-the-mappings",a:"customize-the-mappings"},"16.0":{t:"",p:`layout: page
&lt;VPTeamPage&gt;
&lt;VPTeamPageTitle&gt;
&lt;te ...`,l:"guide/team.html",a:""},"17.0":{t:"# 徽标 ",p:`徽标可让你为标题添加状态。例如，指定部分的类型或支持的版本可能很有用。
`,l:"guide/theme-badge.html",a:"badge"},"17.1":{t:"用法 ",p:`你可以使用全局组件 Badge 。
### Title &lt;Badge type=&quot;info&quot; te ...`,l:"guide/theme-badge.html#usage",a:"usage"},"17.2":{t:"自定义子节点 ",p:`&lt;Badge&gt; 接受 子节点, 这将显示在徽标中。
### Title &lt;Badge type=&quot ...`,l:"guide/theme-badge.html#custom-children",a:"custom-children"},"17.3":{t:"自定义不同类型徽标的背景色 ",p:"你可以通过覆盖 css 变量 background-color 来自定义不同类型 &lt;Badge /&gt; 的背景色。 ...",l:"guide/theme-badge.html#customize-type-color",a:"customize-type-color"},"17.4":{t:"badge",p:`&lt;Badge&gt; 组件接受以下属性：
interface Props {
  // When \`&lt;slot& ...`,l:"guide/theme-badge.html#badge",a:"badge"},"18.0":{t:"carbon-ads",p:"VitePress has built in native support for Carbon Ads. By defin ...",l:"guide/theme-carbon-ads.html",a:"carbon-ads"},"19.0":{t:"# 编辑链接 ",p:"编辑链接让你可以显示一个链接，以在 GitHub 或 GitLab 等 Git 管理服务上编辑页面。要启用它，请将 them ...",l:"guide/theme-edit-link.html",a:"edit-link"},"20.0":{t:"# 页脚 ",p:`配置好 themeConfig.footer， VitePress 将在全局页面底部显示页脚。
export default ...`,l:"guide/theme-footer.html",a:"footer"},"21.0":{t:"# 主页 ",p:"VitePress 默认主题提供了一个首页布局，你也可以在此网站首页看到。你可以通过frontmatter指定 layout ...",l:"guide/theme-home-page.html",a:"home-page"},"21.1":{t:"hero-section",p:`Hero section 位于主页顶部。以下是配置 Hero 的方法。
---
layout: home

hero:
   ...`,l:"guide/theme-home-page.html#hero-section",a:"hero-section"},"21.2":{t:"features-section",p:"在 Features section， 你可以在 Hero section 之后列出任意数量的 Features。可以在 f ...",l:"guide/theme-home-page.html#features-section",a:"features-section"},"22.0":{t:"# Theme 介绍 ",p:`VitePress 带有它的默认主题，提供了许多开箱即用的功能。在下面列出的专用页面上了解有关每个功能的更多信息。

导航栏 ...`,l:"guide/theme-introduction.html",a:"theme-introduction"},"22.1":{t:"使用自定义 theme ",p:"你可以通过添加 .vitepress/theme/index.js 或 .vitepress/theme/index.ts  ...",l:"guide/theme-introduction.html#using-a-custom-theme",a:"using-a-custom-theme"},"22.2":{t:"扩展默认主题 ",p:"如果你想扩展和自定义默认 theme，你可以从 vitepress/theme 导入它并在自定义 theme 入口文件中扩展 ...",l:"guide/theme-introduction.html#extending-the-default-theme",a:"extending-the-default-theme"},"23.0":{t:"最近更新时间",p:`最近一条内容的更新时间会显示在页面右下角。要启用它，请将 lastUpdated 选项添加到你的配置中。
`,l:"guide/theme-last-updated.html",a:"最近更新时间"},"23.1":{t:"全局配置",p:`将 lastUpdated 选项添加到你的配置中。
export default {
  lastUpdated: true ...`,l:"guide/theme-last-updated.html#全局配置",a:"全局配置"},"23.2":{t:"frontmatter-配置",p:`如果你想隐藏上次更新的文本，请将 lastUpdated 选项设置为 false。
---
lastUpdated: fal ...`,l:"guide/theme-last-updated.html#frontmatter-配置",a:"frontmatter-配置"},"24.0":{t:"# 布局 ",p:"你可以通过设置页面 frontmatter 选项来选择页面布局。有 3 种布局选项 doc、 page 和 home。如果未 ...",l:"guide/theme-layout.html",a:"layout"},"24.1":{t:"Doc 布局 ",p:"doc 是默认布局，它将整个 Markdown 内容设置为“documentation”外观。它的工作原理是将整个内容包装在 ...",l:"guide/theme-layout.html#doc-layout",a:"doc-layout"},"24.2":{t:"Page 布局 ",p:"page 被视为“空白页”。 Markdown 仍然会被解析，所有的 Markdown 扩展 都和布局一样运行，但它没有任何 ...",l:"guide/theme-layout.html#page-layout",a:"page-layout"},"24.3":{t:"Home 布局 ",p:"home 将生成模板化的“主页”。在此布局中， 你可以设置额外的选项，例如 hero 和 features 以进一步自定义内 ...",l:"guide/theme-layout.html#home-layout",a:"home-layout"},"24.4":{t:"无布局 ",p:"如果你不想要任何布局，你可以通过 frontmatter 传递 layout: false。如果你想要一个完全可自定义的登录 ...",l:"guide/theme-layout.html#no-layout",a:"no-layout"},"25.0":{t:"# 导航栏 ",p:`Nav 是显示在页面顶部的导航栏。它包含站点标题、全局菜单链接等。
`,l:"guide/theme-nav.html",a:"nav"},"25.1":{t:"网站标题和图标 ",p:"默认情况下，nav 显示 config.title 作为站点的标题。如果 你想更改 nav 上显示的内容，你可以在 them ...",l:"guide/theme-nav.html#site-title-and-logo",a:"site-title-and-logo"},"25.2":{t:"导航链接 ",p:`你可以定义 themeConfig.nav 选项以将链接添加到你的导航栏。
export default {
  theme ...`,l:"guide/theme-nav.html#navigation-links",a:"navigation-links"},"25.3":{t:"社交链接 ",p:`参考 社交链接.
`,l:"guide/theme-nav.html#social-links",a:"social-links"},"26.0":{t:"# 上（下）一篇 ",p:"你可以自定义上（下）一篇链接的文本。如果 你想在 上（下）一篇 链接上显示与侧边栏上不同的文本(默认显示侧边栏的文本)，这将 ...",l:"guide/theme-prev-next-link.html",a:"prev-next-link"},"26.1":{t:"prev",p:`

类型： string


更多：
指定要在指向上一篇的链接上显示的文本。
如果你没有在 frontmatter 中设置它 ...`,l:"guide/theme-prev-next-link.html#prev",a:"prev"},"26.2":{t:"next",p:`

类型： string


更多：
与 prev 相同，但用于下一篇。


`,l:"guide/theme-prev-next-link.html#next",a:"next"},"27.0":{t:"# 搜索 ",p:"VitePress 支持使用 Algolia DocSearch 搜索您的文档站点。请参阅他们的入门指南。在您的 .vite ...",l:"guide/theme-search.html",a:"search"},"27.1":{t:"i18n",p:`您可以使用这样的配置来使用多语言搜索：
import { defineConfig } from 'vitepress'

 ...`,l:"guide/theme-search.html#i18n",a:"i18n"},"28.0":{t:"# 侧边栏 ",p:`侧边栏是文档的主要导航块。 你可以在 themeConfig.sidebar. 中配置侧边栏菜单。
export defau ...`,l:"guide/theme-sidebar.html",a:"sidebar"},"28.1":{t:"基础 ",p:"侧边栏菜单的最简单形式是传入一个链接数组。第一级项目定义侧边栏的“部分”。它应该包含作为小标题的 text 和作为实际导航链 ...",l:"guide/theme-sidebar.html#the-basics",a:"the-basics"},"28.2":{t:"多个侧边栏 ",p:"你可能会根据页面路径显示不同的侧边栏。例如，如本网站所示，你可能希望在文档中创建单独的侧边栏，例如“指引”页面和“配置”页面 ...",l:"guide/theme-sidebar.html#multiple-sidebars",a:"multiple-sidebars"},"28.3":{t:"可折叠的侧边栏组 ",p:`通过向侧边栏组添加 collapsible 选项，它会显示一个切换按钮来隐藏/显示每个部分。
export default  ...`,l:"guide/theme-sidebar.html#collapsible-sidebar-groups",a:"collapsible-sidebar-groups"},"29.0":{t:"# 团队页面 ",p:"如果你想介绍你的团队，你可以使用 Team components 来构建团队页面。有两种使用这些组件的方法。一种是将其嵌入文 ...",l:"guide/theme-team-page.html",a:"team-page"},"29.1":{t:"在页面中显示团队成员 ",p:"你可以在任何页面上使用从 vitepress/theme 暴露出的公共组件 &lt;VPTeamMembers&gt; 显示 ...",l:"guide/theme-team-page.html#show-team-members-in-a-page",a:"show-team-members-in-a-page"},"29.2":{t:"创建一个完整的团队页面 ",p:`除了将团队成员添加到 doc 页面，你还可以创建一个完整的团队页面，类似于创建自定义主页的方式。
要创建团队页面，首先，创建 ...`,l:"guide/theme-team-page.html#create-a-full-team-page",a:"create-a-full-team-page"},"29.3":{t:"vpteammembers",p:`&lt;VPTeamMembers&gt; 组件显示给定的成员列表。
&lt;VPTeamMembers
  size=&q ...`,l:"guide/theme-team-page.html#vpteammembers",a:"vpteammembers"},"29.4":{t:"vpteampage",p:`::: details 创建完整团队页面时的根组件。它只接受一个插槽。它将设置所有传入的团队相关组件的样式。
The roo ...`,l:"guide/theme-team-page.html#vpteampage",a:"vpteampage"},"29.5":{t:"vpteampagetitle",p:"添加页面的标题。最好在一开始就在 &lt;VPTeamPage&gt; 下使用。它接受 #title 和 #lead 插槽。 ...",l:"guide/theme-team-page.html#vpteampagetitle",a:"vpteampagetitle"},"29.6":{t:"vpteampagesection",p:"在团队页面中创建一个“分段”。它接受 #title、#lead 和 #members 插槽。你可以在 &lt;VPTeamP ...",l:"guide/theme-team-page.html#vpteampagesection",a:"vpteampagesection"},"30.0":{t:"# 在 Markdown 中使用 Vue ",p:"在 VitePress 中，每个 markdown 文件都被编译成 HTML，然后作为 Vue 单文件组件处理。这意味着你可 ...",l:"guide/using-vue.html",a:"using-vue-in-markdown"},"30.1":{t:"转义 ",p:"默认情况下，插值代码块会自动用 v-pre 包装，除非你设置了一些带有 -vue 后缀的语言，比如 js-vue（在这种情况 ...",l:"guide/using-vue.html#escaping",a:"escaping"},"30.2":{t:"使用组件 ",p:`当你需要更大的灵活性时，VitePress 允许你使用自己的 Vue 组件扩展你 coding 的工具箱。
在 Markdo ...`,l:"guide/using-vue.html#using-components",a:"using-components"},"30.3":{t:"more-docs",p:`...

### 在 theme 中注册全局组件 {#registering-global-components-in-th ...`,l:"guide/using-vue.html#more-docs",a:"more-docs"},"30.4":{t:"使用 CSS 预处理器 ",p:"VitePress 内置支持 CSS 预处理器：.scss、.sass、.less、.styl 和 .stylus 文件。无 ...",l:"guide/using-vue.html#using-css-pre-processors",a:"using-css-pre-processors"},"30.5":{t:"脚本和样式提升 ",p:"有时你可能需要仅对当前页面应用一些 JavaScript 或 CSS。在这些情况下，你可以直接在 Markdown 文件中编 ...",l:"guide/using-vue.html#script-style-hoisting",a:"script-style-hoisting"},"30.6":{t:"内置组件 ",p:`VitePress 提供了内置的 Vue 组件，比如 ClientOnly，查看全局组件指南了解更多信息。
另见：

在标题 ...`,l:"guide/using-vue.html#built-in-components",a:"built-in-components"},"30.7":{t:"浏览器 API 访问限制 ",p:"由于 VitePress 应用程序在生成静态构建时是在 Node.js 中服务器渲染的，因此任何 Vue 使用都必须符合常规 ...",l:"guide/using-vue.html#browser-api-access-restrictions",a:"browser-api-access-restrictions"},"30.8":{t:"using-teleports",p:"::: details Vitepress 目前仅支持传送到 body 标签的 SSG。对于其他目标，您可以将它们包装在内置 ...",l:"guide/using-vue.html#using-teleports",a:"using-teleports"},"31.0":{t:"可单独配置是否展示最后更新时间",p:`&lt;!-- ---
lastUpdated: false
--- --&gt;
什么是VitePress？ {#what ...`,l:"guide/what-is-vitepress.html",a:"可单独配置是否展示最后更新时间"},"31.1":{t:"为什么要做VitePress ",p:"我们喜欢VuePress v1，但由于它是在Webpack之上构建的，为一个只有几个页面的简单文档站点启动开发服务器所需的时 ...",l:"guide/what-is-vitepress.html#motivation",a:"motivation"},"31.2":{t:"对 VuePress v1 的改进 ",p:`VuePress v1有一些改进。。。。
它使用vue3 {#it-uses-vue-3}
利用 Vue 3 改进的模板静态 ...`,l:"guide/what-is-vitepress.html#improvements-over-vuepress-v1",a:"improvements-over-vuepress-v1"},"31.3":{t:"这会成为下一代 vuepress 吗？ ",p:"我们已经有了vuepress-next，这将是vuepress的下一个主要版本。它还比VuePress v1做了很多改进，现 ...",l:"guide/what-is-vitepress.html#will-this-become-the-next-vuepress-in-the-future",a:"will-this-become-the-next-vuepress-in-the-future"},"32.0":{t:"",p:`layout: home
title: VitePressCN
titleTemplate: Vite &amp; Vue  ...`,l:"index.html",a:""}},i={previewLength:62,buttonLabel:"Search",placeholder:"Search docs",encode:!1,tokenize:"full"},a={INDEX_DATA:e,PREVIEW_LOOKUP:t,Options:i};export{a as default};