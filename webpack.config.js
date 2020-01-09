const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const port = process.env.PORT || 3000;

module.exports = {
  entry: ['@babel/polyfill', './src/js/main.js', './src/sass/main.scss'],
  output: {
    filename: "js/bundle.js",
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    //컴파일 + 번들링 CSS 파일이 저장될 경로와 이름 지정
    new MiniCssExtractPlugin({ filename: 'css/style.css' }),
    new HtmlWebpackPlugin({
      template: "public/index.html",
      favicon: "public/favicon.ico"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src/js')
        ],
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules:true,
              camelCase: true,
              sourceMap: true
            }
          },
          "sass-loader"
        ],
        exclude: /node_modules/
      }
    ]
  },
  devtool: "inline-source-map",
  mode: 'development',
  devServer: {
    host:'localhost',
    port: port,
    historyApiFallback: true,
    open: true
  }
};
