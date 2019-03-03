const path = require('path');
const webpack = require('webpack');
const externals = require('./node-externals');

module.exports = {
  name: "server",
  entry: "./src/server/render.js",
  mode: 'production',
  output: {
    filename: 'prod-server-bundle.js', // name 会被 entry 名替换
    path: path.resolve(__dirname, '../build'),
    chunkFilename: "[name].js",
    publicPath: "/",
    libraryTarget: "commonjs2"
  },
  target: "node",
  node: {
    __dirname: false,
    __filename: false
  },
  externals,
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
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
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
            loader: 'css-loader'
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
              name: 'images/[name].[ext]',
              emitFile: false
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
      },
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
      }
    ]
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
};