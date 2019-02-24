const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: ['./src/main.js'],
  },
  mode: 'development',
  output: {
    filename: '[name]-bundle.js', // name 会被 entry 名替换
    path: path.resolve(__dirname, '../dist'),
    publicPath: "/"
  },
  devServer: {
    // 注意这里指定 dist 目录时没有使用 .. 进入上级目录，原因是这里的相对路径
    // 是相对于 webpack-dev-server 的命令运行所处的目录的。由于 webpack-dev-server 是在
    // 项目根目录运行的，而 dist 即是在项目根目录下面，所以这里无需先进入上级目录。
    contentBase: "dist",
    overlay: true,
    hot: true
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader"
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          // {
          //   loader: 'file-loader',
          //   options: {
          //     name: "[name].html"
          //   }
          // },
          // {
          //   loader: 'extract-loader'
          // },
          {
            loader: 'html-loader',
            options: {
              attrs: ['img:src']
            }
          }
        ]
      },
      {
        test: /\.(jpg|gif|png)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({
      template: "./src/index.html",
      inject: false // 由于我们的 index.html 模板中已经手动添加了打包后的 js，所以这里不再自动注入
    })
  ]
};