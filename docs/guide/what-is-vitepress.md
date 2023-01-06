<!-- 可单独配置是否展示最后更新时间 -->
<!-- ---
lastUpdated: false
--- -->
# 什么是VitePress？
VitePress 是 [VuePress](https://vuepress.vuejs.org/) 的小弟，建立在 [Vite](https://vitejs.dev/) 之上。
::: warning 警告⚠️
VitePress 目前处于 `alpha` 状态。它已经适合开箱即用的文档使用，但配置和主题 API 可能仍会在次要版本之间发生变化。
:::

## 为什么要做VitePress
我们喜欢VuePress v1，但由于它是在Webpack之上构建的，为一个只有几个页面的简单文档站点启动开发服务器所需的时间变得难以忍受。即使是HMR更新也需要几秒钟才能在浏览器中反映出来！


从根本上说，这是因为 VuePress v1 是一个底层为 `Webpack` 的应用程序。即使只有两页，它也是一个完整的正在编译的 `Webpack` 项目（包括所有主题源文件）。当项目有很多页面时，情况会变得更糟————每个页面都必须先完全编译，然后服务器才能显示内容！


顺便说一句，Vite 很好地解决了这些问题：近乎即时的服务器启动、仅编译所服务页面的按需编译以及闪电般快速的 HMR。另外，随着时间的推移，我在 VuePress v1 中注意到了一些额外的设计问题，但从来没有时间修复由于它，因为这需要大量的重构。


现在，有了 Vite 和 Vue 3，是时候重新思考“Vue 驱动的静态站点生成器”到底是什么了。

## 对 VuePress v1 的改进
VuePress v1有一些改进。。。。
### 它使用vue3
利用 Vue 3 改进的模板静态分析来尽可能地对静态内容进行字符串化。静态内容作为字符串文字而不是 JavaScript 渲染函数代码发送——因此 JS 有效负载的解析成本更低，hydration也变得更快。

在应用优化的同时仍然允许用户在 Markdown 中自由混合 Vue 组件——编译器会自动为你进行静态/动态分离，你不需要去关注它。

### 底层使用 Vite
- 更快的开发服务器启动
- 更快的热更新
- 更快的构建（内部使用Rollup）

### 更轻量化的页面
Vue 3 tree-shaking + Rollup代码拆分
- 不为每个请求的每个页面发送元数据。这将使页面权重与页面总数分离开来。仅发送当前页面的元数据。客户端导航同时获取新页面的组件和元数据。
- 不使用vue-router，因为VitePress的需求非常简单和具体——使用一个简单的自定义路由器（低于200行源码）。

### 其他不同
VitePress更简单，更少的配置：VitePress旨在降低当前VuePress的复杂性，并从其极简主义的根源重新开始。

VitePress是面向未来的：VitePress只针对支持原生ES模块导入的浏览器。它鼓励使用无需转译的原生 JavaScript，以及用于主题的 CSS 变量。

## 这会成为下一代 vuepress 吗？
我们已经有了[vuepress-next](https://github.com/vuepress/vuepress-next)，这将是vuepress的下一个主要版本。它还比VuePress v1做了很多改进，现在也支持Vite。

VitePress与当前的VuePress生态系统（主要是主题和插件）不兼容。总的想法是，VitePress将有一个非常小的主题API（更喜欢JavaScript API而不是文件布局约定），并且可能没有插件（所有定制都是在主题中完成的）。

关于这个话题[正在进行讨论](https://github.com/vuejs/vitepress/discussions/548)。如果你很好奇，请留下你的想法！
