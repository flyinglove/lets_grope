const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
	mode: 'none',
	entry: './src/main.js',
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'dist')
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist')
	},
	module: {
		rules: [
		{
			test: /\.js$/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ["@babel/preset-env"]
				}
			}
		},
		{
			test: /\.scss$/,
			use: ['style-loader', 'css-loader', 'sass-loader']
		},
			{
				test: /\.jp(e)?g$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 30 * 1024
					}
				}
			}]
	},
	optimization: {
		usedExports: true,
		minimize: true
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'My Test Page',
			template: path.join(__dirname, 'public/index.html'),
			filename: 'index.html'
		})
	]
}
