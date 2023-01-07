# Markdown 扩展 {#markdown-extensions}

VitePress 带有内置的 Markdown 扩展。

## 标题锚点 {#header-anchors}

标头自动应用锚点链接。可以使用 `markdown.anchor` 选项配置锚点的渲染。

## 链接 {#links}

内部和外部链接都得到特殊处理。

### 内部链接 {#internal-links}

内部链接转换为 SPA 导航的路由器链接。此外，每个子目录中包含的每个 `index.md` 都会自动转换为 `index.html`，并带有相应的 URL `/`。

例如，给定以下目录结构：

```
.
├─ index.md
├─ foo
│  ├─ index.md
│  ├─ one.md
│  └─ two.md
└─ bar
   ├─ index.md
   ├─ three.md
   └─ four.md
```

如果你在 `foo/one.md` 中：

```md
[Home](/) <!-- 将用户导航到根 index.md -->
[foo](/foo/) <!-- 将用户导航到目录 foo 的 index.html -->
[foo heading](./#heading) <!-- 将用户锚定到 foo 索引文件中的标题 -->
[bar - three](../bar/three) <!-- 你可以省略扩展名 -->
[bar - three](../bar/three.md) <!-- 你可以追加 .md -->
[bar - four](../bar/four.html) <!-- 或者你可以追加 .html -->
```

### 页面后缀 {#page-suffix}

默认情况下，生成的页面和内部链接带有 `.html` 后缀。

### 外部链接 {#external-links}

出站链接自动应用此属性 `target="_blank" rel="noreferrer"`：

- [vuejs.org](https://vuejs.org)
- [VitePress on GitHub](https://github.com/vuejs/vitepress)

## Frontmatter {#frontmatter}

[YAML frontmatter](https://jekyllrb.com/docs/front-matter/) 是开箱即用的：

```yaml
---
title: Blogging Like a Hacker
lang: en-US
---
```

此数据将可用于页面的其余部分，以及所有自定义和 theme 组件。

更多详细信息，请参阅 [Frontmatter](./frontmatter)。

## GitHub 风格的表格 {#github-style-tables}

**输入**

```
| Tables    |  Are   |  Cool |
| --------- | :----: | ----: |
| 第 3 栏是 | 右对齐 | $1600 |
| 第 2 栏是 |  居中  |   $12 |
| 斑马条纹  | 很整洁 |    $1 |
```

**输出**

| Tables        |      Are      |   Cool |
| ------------- | :-----------: | -----: |
| col 3 is      | right-aligned | \$1600 |
| col 2 is      |   centered    |   \$12 |
| zebra stripes |   are neat    |    \$1 |

## 表情符号 :tada: {#emoji}

**输入**

```
:tada: :100:
```

**输出**

:tada: :100:

提供[所有表情符号的列表](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)。

## 目录 {#table-of-contents}

**输入**

```
[[toc]]
```

**输出**

[[toc]]

可以使用 `markdown.toc`选项配置 TOC 的渲染。

## 自定义容器 {#custom-containers}

自定义容器可以通过它们的类型、标题和内容来定义。

### 默认标题 {#default-title}

**输入**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**输出**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

### 自定义标题 {#custom-title}

你可以通过在容器的 `类型` 之后附加文本来设置自定义标题。

**输入**

````md
::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code
```js
console.log('Hello, VitePress!')
```
:::
````

**输出**

::: danger STOP
Danger zone, do not proceed
:::

::: details 点我查看代码
```js
console.log('Hello, VitePress!')
```
:::

### `raw` {#raw}

这是一个特殊的容器，可以用来防止与 VitePress 的样式和路由冲突。这在你记录组件库时特别有用。你可能还想查看 [whyframe](https://whyframe.dev/docs/integrations/vitepress) 以获得更好的隔离。

**语法**

```md
::: raw
Wraps in a <div class="vp-raw">
:::
```


`vp-raw` 类也可以直接用于元素。样式隔离目前是可选的：

::: details 查看更多

- 安装所需的 deps：

  ```sh
  $ yarn add -D postcss postcss-prefix-selector
  ```

- 创建一个名为 `docs/.postcssrc.cjs` 的文件并将以下代码添加到其中：

  ```js
  module.exports = {
    plugins: {
      'postcss-prefix-selector': {
        prefix: ':not(:where(.vp-raw *))',
        includeFiles: [/vp-doc\.css/],
        transform(prefix, _selector) {
          const [selector, pseudo = ''] = _selector.split(/(:\S*)$/)
          return selector + prefix + pseudo
        }
      }
    }
  }
  ```

:::

## 代码块中的语法高亮 {#syntax-highlighting-in-code-blocks}

VitePress 使用 [Shiki](https://shiki.matsu.io/) 在 Markdown 代码块中使用彩色文本高亮显示语法。 Shiki 支持多种编程语言。你需要做的就是将有效的语言别名附加到代码块的开头反引号之后：

**输入**

````
```js
export default {
  name: 'MyComponent',
  // ...
}
```
````

````
```html
<ul>
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </li>
</ul>
```
````

**输出**

```js
export default {
  name: 'MyComponent'
  // ...
}
```

```html
<ul>
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </li>
</ul>
```

Shiki 仓库中提供了一份[合法语言列表](https://github.com/shikijs/shiki/blob/main/docs/languages.md)。

你还可以在应用配置中自定义语法高亮 theme 。有关详细信息，请参阅[`markdown` 选项](../config/app-configs#markdown)。

## 代码块中的行高亮显示 {#line-highlighting-in-code-blocks}

**输入**

````
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**输出**

```js {4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

除了单行之外，你还可以指定多个单行、范围或两者：

- 行范围：例如 `{5-8}`、`{3-10}`、`{10-17}`
- 多个单行：例如 `{4,7,9}`
- 行范围和单行：例如 `{4,7-13,16,23-27,40}`

**输入**

````
```js{1,4,6-8}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum'
    }
  }
}
```
````

**输出**

```js{1,4,6-8}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum',
    }
  }
}
```

或者，可以使用 `// [!code hl]` 注释直接在行中突出显示。

**输入**

````
```js
export default {
  data () {
    return {
      msg: 'Highlighted!' // [!code  hl]
    }
  }
}
```
````

**输出**

```js
export default {
  data() {
    return {
      msg: 'Highlighted!' // [!code hl]
    }
  }
}
```

## 代码块聚焦 {#focus-in-code-blocks}

在一行上添加 `// [!code focus]` 注释将聚焦它并模糊代码的其他部分。
此外，你可以使用 `// [!code focus:<lines>]` 定义要聚焦的行数。

**输入**

注意 `!code` 后面只需要一个空格，这里加两个是为了防止被程序解析。

````
```js
export default {
  data () {
    return {
      msg: 'Focused!' // [!code  focus]
    }
  }
}
```
````

**输出**

```js
export default {
  data() {
    return {
      msg: 'Focused!' // [!code focus]
    }
  }
}
```

## 代码块中的彩色差异 {#colored-diffs-in-code-blocks}

在一行中添加 `// [!code --]` 或 `// [!code ++]` 注释将创建该行的差异，同时保持代码块的颜色。

**输入**

注意 `!code` 后面只需要一个空格，这里加两个是为了防止被程序解析。

````
```js
export default {
  data () {
    return {
      msg: 'Removed' // [!code  --]
      msg: 'Added' // [!code  ++]
    }
  }
}
```
````

**输出**

```js
export default {
  data () {
    return {
      msg: 'Removed' // [!code --]
      msg: 'Added' // [!code ++]
    }
  }
}
```

## 代码块中的错误和警告 {#errors-and-warnings-in-code-blocks}

在一行中添加 `// [!code warning]` 或 `// [!code error]` 注释会相应地为其着色。

**输入**

注意 `!code` 后面只需要一个空格，这里加两个是为了防止被程序解析。

````
```js
export default {
  data () {
    return {
      msg: 'Error', // [!code  error]
      msg: 'Warning' // [!code  warning]
    }
  }
}
```
````

**输出**

```js
export default {
  data() {
    return {
      msg: 'Error', // [!code error]
      msg: 'Warning' // [!code warning]
    }
  }
}
```

## 行号 {#line-numbers}

你可以通过配置为每个代码块启用行号：

```js
export default {
  markdown: {
    lineNumbers: true
  }
}
```

有关详细信息，请参阅[`markdown` 选项](../config/app-configs#markdown)。

你可以在围栏代码块中添加 `:line-numbers` / `:no-line-numbers` 标记以覆盖配置中设置的值。

**输入**

````md
```ts {1}
// line-numbers is disabled by default
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:line-numbers {1}
// line-numbers is enabled
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```
````

**输出**

```ts {1}
// line-numbers is disabled by default
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:line-numbers {1}
// line-numbers is enabled
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

## 导入代码片段 {#import-code-snippets}

你可以通过以下语法从现有文件导入代码片段：

```md
<<< @/filepath
```

它还支持[行高亮显示](#line-highlighting-in-code-blocks)：

```md
<<< @/filepath{highlightLines}
```

**输入**

```md
<<< @/snippets/snippet.js{2}
```

**代码文件**

<<< @/snippets/snippet.js

**输出**

<<< @/snippets/snippet.js{2}

::: tip 提示
`@` 的值对应 source root。默认情况下它是 VitePress 项目根目录，除非配置了 `srcDir`。
:::

你还可以使用 [VS Code region](https://code.visualstudio.com/docs/editor/codebasics#_folding) 仅包含代码文件的相应部分。你可以在文件路径后的 `#` 之后提供自定义 region 名称：

**输入**

```md
<<< @/snippets/snippet-with-region.js#snippet{1}
```

**代码文件**

<<< @/snippets/snippet-with-region.js

**输出**

<<< @/snippets/snippet-with-region.js#snippet{1}

你还可以像这样在大括号 (`{}`) 内指定语言：

```md
<<< @/snippets/snippet.cs{c#}

<!-- with line highlighting: -->

<<< @/snippets/snippet.cs{1,2,4-6 c#}

<!-- with line numbers: -->

<<< @/snippets/snippet.cs{1,2,4-6 c#:line-numbers}
```

如果无法从你的文件扩展名推断出源语言，这将很有帮助。

## 代码组 {#code-groups}

你可以像这样对多个代码块进行分组：

**输入**

````md
::: code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
}

export default config
```

```ts [config.ts]
import type { UserConfig } from 'vitepress'

const config: UserConfig = {
  // ...
}

export default config
```

:::
````

**输出**

::: code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
}

export default config
```

```ts [config.ts]
import type { UserConfig } from 'vitepress'

const config: UserConfig = {
  // ...
}

export default config
```

:::

## Markdown 文件嵌套 {#markdown-file-inclusion}

你可以像这样在一个 markdown 文件中嵌套另一个 markdown 文件：

**输入**

```md
# Docs

## Basics

<!--@include: ./parts/basics.md-->
```

**Part file** (`parts/basics.md`)

```md
Some getting started stuff.

### Configuration

Can be created using `.foorc.json`.
```

**等效代码**

```md
# Docs

## Basics

Some getting started stuff.

### Configuration

Can be created using `.foorc.json`.
```

::: warning 警告
请注意，如果你的文件不存在，不会报错。因此，在使用此功能时，请确保内容按预期渲染。
:::

## 高级配置 {#advanced-configuration}

VitePress 使用 [markdown-it](https://github.com/markdown-it/markdown-it) 作为 Markdown 渲染器。上面的很多扩展都是通过自定义插件实现的。你可以使用 `.vitepress/config.js` 中的 markdown 选项进一步自定义 `markdown-it` 实例：

```js
const anchor = require('markdown-it-anchor')

module.exports = {
  markdown: {
    // options for markdown-it-anchor
    // https://github.com/valeriangalliat/markdown-it-anchor#usage
    anchor: {
      permalink: anchor.permalink.headerLink()
    },

    // options for @mdit-vue/plugin-toc
    // https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-toc#options
    toc: { level: [1, 2] },

    config: (md) => {
      // use more markdown-it plugins!
      md.use(require('markdown-it-xxx'))
    }
  }
}
```
在 [配置: 程序配置#markdown](../config/app-configs#markdown) 中查看 markdown 可配置属性的完整列表。
