const path = require('path');
const webpack = require('webpack');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ReactLoadablePlugin = require('react-loadable/webpack').ReactLoadablePlugin;
const styleLoaders = require('./style-loaders-prod');

const prodClientConfig = {
  name: "client",
  entry: {
    main: ['./src/main.js'],
  },
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js', // name 会被 entry 名替换
    chunkFilename: "[name].[contenthash].js",
    path: path.resolve(__dirname, '../dist'),
    publicPath: "/"
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
    new ReactLoadablePlugin({
      filename: path.join(__dirname, '../react-loadable.json')
    }),
    new MiniCSSExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[name].[contenthash].css'
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: {
        discardComments: {
          removeAll: true
        }
      },
      canPrint: true
    }),
    new webpack.NamedModulesPlugin(),
    // new HTMLWebpackPlugin({
    //   template: "./src/index.html",
    //   // inject: false, // 由于我们的 index.html 模板中已经手动添加了打包后的 js，所以这里不再自动注入
    //   title: "Link's Journal"
    // }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new UglifyJSPlugin({
      sourceMap: true
    }),
    // new CompressionPlugin({
    //   algorithm: "gzip"
    // }),
    new BrotliPlugin(),
    new BundleAnalyzerPlugin({
      generateStatsFile: true
    }),
    new CleanWebpackPlugin(['dist', 'build'], {
      root: path.join(__dirname, '..')
    })
  ]
};

prodClientConfig.module.rules = prodClientConfig.module.rules.concat(styleLoaders);

module.exports = prodClientConfig;