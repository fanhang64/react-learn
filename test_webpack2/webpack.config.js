const HtmlWebpackPlugin = require("html-webpack-plugin"); // 引入插件

module.exports = {
	entry: {
		page1: __dirname + "/src/page1/index.js", 
		page2: __dirname + "/src/page2/index.js",
	},
	output: {
		path: __dirname + "/dist",  
		// name是文件名   chunkhash是每次打包文件的hash值
		filename: 'js/[name]-[chunkhash].js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'page1.html',
			template: './src/page1/index.html',
			minify: {
 				
			},
			chunks: ['page1']
		}),
		new HtmlWebpackPlugin({
			filename: 'page2.html',
			template: './src/page2/index.html',
			minify: {
 				
			},
			chunks: ['page2']
		})
	]
}
