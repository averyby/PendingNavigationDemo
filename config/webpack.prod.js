const path = require('path');
const webpack = require('webpack');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');

module.exports = env => {
  return {
    entry: {
      main: ['./src/main.js'],
    },
    mode: 'production',
    output: {
      filename: '[name]-bundle.js', // name 会被 entry 名替换
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
          test: /\.css$/,
          use: [
            {
              loader: MiniCSSExtractPlugin.loader
            },
            {
              loader: 'css-loader'
            }
          ]
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCSSExtractPlugin.loader
            },
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader'
            }
          ]
        }, {
          test: /\.styl$/,
          use: [
            {
              loader: MiniCSSExtractPlugin.loader
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true,
                localIdentName: "[name]--[local]--[hash:base64:8]"
              }
            },
            {
              loader: "postcss-loader"
            },
            {
              loader: 'stylus-loader'
            }
          ]
        }, {
          test: /\.less$/,
          use: [
            {
              loader: MiniCSSExtractPlugin.loader
            },
            {
              loader: 'css-loader'
            },
            {
              loader: 'less-loader'
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
      new MiniCSSExtractPlugin({
        filename: "[name]-[contenthash].css"
      }),
      new webpack.NamedModulesPlugin(),
      new HTMLWebpackPlugin({
        template: "./src/index.html",
        // inject: false, // 由于我们的 index.html 模板中已经手动添加了打包后的 js，所以这里不再自动注入
        title: "Link's Journal"
      }),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify(env.NODE_ENV)
        }
      }),
      new UglifyJSPlugin({
        sourceMap: true
      }),
      // new CompressionPlugin({
      //   algorithm: "gzip"
      // }),
      new BrotliPlugin()
    ]
  };
};