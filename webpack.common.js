const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		vendor: ['semantic-ui-react'],
		app: './src/index.js'
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: 'public/index.html',
			favicon: 'public/favicon.ico'
		})
	],
	module: {
		rules: [
			{
				test: /\.(mjs|js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				loader: 'file-loader',
				options: {
					name: '[path][name].[ext]'
				}
			}
		]
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
