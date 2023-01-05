# 什么是VitePress？
VitePress 是 [VuePress](https://vuepress.vuejs.org/) 的小弟弟，建立在 [Vite](https://vitejs.dev/) 之上。
::: warning 警告⚠️
VitePress 目前处于状态。它已经适合开箱即用的文档使用，但配置和主题 API 仍可能在次要版本之间更改。`alpha`
:::

## 初心
我们喜欢VuePress v1，但由于它是在Webpack之上构建的，为一个只有几个页面的简单文档站点启动开发服务器所需的时间变得难以忍受。即使是HMR更新也需要几秒钟才能在浏览器中反映出来！


从根本上说，这是因为VuePress v1是一个隐藏的Webpack应用程序。即使只有两页，它也是一个完整的Webpack项目（包括所有主题源文件）正在编译中。当项目有很多页面时，情况就更糟了——在服务器显示任何内容之前，必须首先对每个页面进行完全编译


顺便说一句，Vite很好地解决了这些问题：几乎即时启动服务器，只编译所服务页面的按需编译，以及极快的HMR。此外，随着时间的推移，我在VuePress v1中注意到了一些额外的设计问题，但由于需要大量的重构，这些问题一直没有时间解决。


现在，有了Vite和Vue 3，是时候重新思考“Vue供电的静态站点生成器”到底是什么了。

## 对 VuePress v1 的改进
VuePress v1有一些改进。。。。
### 它使用vue3
利用Vue 3改进的模板静态分析，尽可能丰富静态内容。静态内容以字符串文本的形式发送，而不是JavaScript呈现函数代码-因此，JS有效负载的解析成本要低得多，水合作用也变得更快。

注意，在应用优化的同时，仍然允许用户在markdown内容中自由混合Vue组件-编译器自动为您进行静态/动态分离，您无需考虑。

### 底层使用 Vite
- 更快的开发服务器启动
- 更快的热更新
- 更快的构建（内部使用Rollup）

### 页面轻量化
Vue 3 tree-shaking + Rollup代码拆分
- 不为每个请求的每个页面发送元数据。这将使页面权重与页面总数脱钩。仅发送当前页面的元数据。客户端导航同时获取新页面的组件和元数据。
- 不使用vue路由器，因为VitePress的需求非常简单和具体——而是使用一个简单的自定义路由器（低于200 LOC）。

### 其他不同
VitePress更简单，更少的配置：VitePress旨在降低当前VuePress的复杂性，并从其极简主义根源重新开始。

VitePress面向未来：VitePress只针对支持本地ES模块导入的浏览器。它鼓励使用本机JavaScript而不进行转换，并使用CSS变量进行主题化。

## 这会成为未来的下一个 vuepress 吗？
我们已经有了[vuepress next](https://github.com/vuepress/vuepress-next)，这将是vuepress的下一个主要版本。它还比VuePress v1做了很多改进，现在也支持Vite。

VitePress与当前的VuePress生态系统（主要是主题和插件）不兼容。总的想法是，VitePress将有一个非常小的主题API（更喜欢JavaScript API而不是文件布局约定），并且可能没有插件（所有定制都是在主题中完成的）。

关于这个话题[正在进行讨论](https://github.com/vuejs/vitepress/discussions/548)。如果你很好奇，请留下你的想法！
