const HtmlWebpackPlugin = require('html-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const port = process.env.PORT || 3000;

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	output: {
		filename: '[name].[hash].js',
		publicPath: '/',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{ loader: 'style-loader' },
					{
						loader: 'css-loader',
						options: {
							modules: true,
							localsConvention: 'camelCase',
							sourceMap: true
						}
					}
				]
			},
		]
	},
	plugins: [
		new HotModuleReplacementPlugin(),
	],
	devServer: {
		host: 'localhost',
		port: port,
		historyApiFallback: true,
		open: true,
		hot: true
	},
});
