const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = [
  {
    test: /\.css$/,
    use: [
      {
        loader: MiniCSSExtractPlugin.loader
      },
      {
        loader: 'css-loader'
      },
      {
        loader: 'postcss-loader',
        options: {
          plugins: function () {
            return [
              require('precss'),
              require('autoprefixer')
            ]
          }
        }
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
        loader: 'postcss-loader',
        options: {
          plugins: function () {
            return [
              require('precss'),
              require('autoprefixer')
            ]
          }
        }
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
          // modules: true,
          // localIdentName: "[name]--[local]--[hash:base64:8]"
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          plugins: function () {
            return [
              require('precss'),
              require('autoprefixer')
            ]
          }
        }
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
        loader: 'postcss-loader',
        options: {
          plugins: function () {
            return [
              require('precss'),
              require('autoprefixer')
            ]
          }
        }
      },
      {
        loader: 'less-loader'
      }
    ]
  }
];