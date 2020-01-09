const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common,{
	mode: 'production',
	devtool: 'source-map',
	output: {
		filename: 'static/[name].[hash].js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	},
	module: {
		rules: [
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
			},
		]
	},
	plugins: [
		new ExtractTextPlugin({
			filename: 'styles/styles.[hash].css',
			allChunks: true
		})
	],
});
