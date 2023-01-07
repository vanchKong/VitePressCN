# 最近更新时间

最近一条内容的更新时间会显示在页面右下角。要启用它，请将 `lastUpdated` 选项添加到你的配置中。

## 全局配置

将 `lastUpdated` 选项添加到你的配置中。

```js
export default {
  lastUpdated: true
}
```

## Frontmatter 配置

如果你想隐藏上次更新的文本，请将 `lastUpdated` 选项设置为 false。

```yaml
---
lastUpdated: false
---
```

<!-- <script setup>
import { useData } from 'vitepress'

const { page } = useData()
</script>

<pre>{{ page }}</pre> -->

