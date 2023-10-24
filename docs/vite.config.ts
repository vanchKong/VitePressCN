import { defineConfig } from 'vite'
// import { SearchPlugin } from 'vitepress-plugin-search'
// import Segment from 'segment' // 中文分词器
// // import flexSearchIndexOptions from 'flexsearch'
// // 创建实例
// const segment = new Segment()
// // 使用默认的识别模块及字典，载入字典文件需要1秒，仅初始化时执行一次即可
// segment.useDefault()
// // 开始分词
// // console.log(segment.doSegment('这是一个基于Node.js的中文分词模块。'));

// const options = {
// 	// ...flexSearchIndexOptions,
// 	// 采用分词器优化，
// 	encode: function (str) {
// 		return segment.doSegment(str, { simple: true })
// 	},
// 	tokenize: 'forward', // 解决汉字搜索问题。来源：https://github.com/emersonbottero/vitepress-plugin-search/issues/11

// 	// 以下代码返回完美的结果，但内存与空间消耗巨大，索引文件达到80M+
// 	// encode: false,
// 	// tokenize: "full",
// }

export default defineConfig({
	// plugins: [
	// 	// SearchPlugin({
	// 	// tokenize: 'full',
	// 	// }),
	// 	SearchPlugin(options),
	// ],
})
