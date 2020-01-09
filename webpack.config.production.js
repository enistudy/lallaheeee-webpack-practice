const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: {
		vendor: ['semantic-ui-react'],
		app: './src/index.js'
	},
	output: {
		filename: 'static/[name].[hash].js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								modules: true,
								importLoaders: 1,
								localsConvention: 'camelCase',
								sourceMap: true
							}
						},
						{
							loader: 'postcss-loader',
							options: {
								config: {
									ctx: {
										autoprefixer: {
											browsers: 'last 2 versions'
										}
									}
								}
							}
						}
					]
				})
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'public/index.html',
			favicon: 'public/favicon.ico'
		}),
		new ExtractTextPlugin({
			filename: 'styles/styles.[hash].css',
			allChunks: true
		})
	],
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					chunks: 'initial',
					test: 'vendor',
					name: 'vendor',
					enforce: true
				}
			}
		}
	}
};
