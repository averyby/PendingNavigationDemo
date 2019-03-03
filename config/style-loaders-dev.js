const ExtractCSSChunks = require('extract-css-chunks-webpack-plugin');

module.exports = [
  {
    test: /\.css$/,
    use: [
      'css-hot-loader',
      {
        loader: ExtractCSSChunks.loader
      },
      {
        loader: 'css-loader'
      }
    ]
  },
  {
    test: /\.scss$/,
    use: [
      'css-hot-loader',
      {
        loader: ExtractCSSChunks.loader
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
      'css-hot-loader',
      {
        loader: ExtractCSSChunks.loader
      },
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          // modules: true,
          // localIdentName: "[name]--[local]--[hash:base64:8]"
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
      'css-hot-loader',
      {
        loader: ExtractCSSChunks.loader
      },
      {
        loader: 'css-loader'
      },
      {
        loader: 'less-loader'
      }
    ]
  }
];