const HtmlWebpackPlugin = require('html-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');
const port = process.env.PORT || 3000;

module.exports = {
	mode: 'development',
	entry: {
		vendor: ['semantic-ui-react'],
		app: './src/index.js'
	},
	output: {
		filename: '[name].[hash].js',
		publicPath: '/',
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
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
			}
		]
	},
	plugins: [
		new HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: 'public/index.html',
			favicon: 'public/favicon.ico'
		})
	],
	devServer: {
		host: 'localhost',
		port: port,
		historyApiFallback: true,
		open: true,
		hot: true
	},
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
