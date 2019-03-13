const path = require('path');
const APPCONFIG = require('../appConfig.json');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractCSSChunks = require('extract-css-chunks-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const ReactLoadablePlugin = require('react-loadable/webpack').ReactLoadablePlugin;
const styleLoaders = require('./style-loaders-dev');

const devClientConfig = {
  name: "client",
  entry: {
    main: [
      '@babel/runtime/regenerator',
      'webpack-hot-middleware/client?reload=true',
      './src/clientEntry.js'
    ],
  },
  externals: {
    jquery: 'jQuery'
  },
  mode: 'development',
  output: {
    filename: '[name]-bundle.js', // name 会被 entry 名替换
    chunkFilename: "[name].js",
    path: path.resolve(__dirname, '../dist'),
    publicPath: "/"
  },
  devServer: {
    // 注意这里指定 dist 目录时没有使用 .. 进入上级目录，原因是这里的相对路径
    // 是相对于 webpack-dev-server 的命令运行所处的目录的。由于 webpack-dev-server 是在
    // 项目根目录运行的，而 dist 即是在项目根目录下面，所以这里无需先进入上级目录。
    // contentBase: "dist",
    overlay: true,
    hot: true,
    watchOptions: {
      ignored: [
        path.resolve(__dirname, '../react-loadable.json')
      ]
    },
    writeToDisk: true
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /font-awesome\.config\.js/,
        use: [
          { loader: 'style-loader' },
          { loader: 'font-awesome-loader' }
        ]
      },
      {
        test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
          }
        }]
      },
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
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: "markdown-with-front-matter-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([
      path.resolve(__dirname, '../dist')
    ]),
    new ReactLoadablePlugin({
      filename: path.join(__dirname, '../react-loadable.json')
    }),
    new ExtractCSSChunks({ hot: true }),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(['dist', 'build'], {
      root: path.join(__dirname, '..')
    }),
    new OpenBrowserPlugin({
      url: 'http://localhost:8080'
    })
  ]
};

devClientConfig.module.rules = devClientConfig.module.rules.concat(styleLoaders);

if (APPCONFIG.type === 'SPA') {
  devClientConfig.plugins.push(
    new HTMLWebpackPlugin({
      template: "./src/index.html",
      // inject: false, // 由于我们的 index.html 模板中已经手动添加了打包后的 js，所以这里不再自动注入
      title: "Link's Journal"
    })
  );
}

module.exports = devClientConfig;