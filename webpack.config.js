const path = require('path');
const merge = require('webpack-merge')

const PATHS = {
  build: path.join(__dirname, 'build'),
  dev: __dirname
}

const common = {
  entry: ['./src/index.js'],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      }, {
        test: /\.(sass|scss)$/,
        loaders: ['style', 'css', 'sass']
      }, {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
        loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.sass']
  },
  devtool: 'source-map'
}

var config
switch (process.env.npm_lifecycle_event) {
  case 'build':
  case 'stats':
    config = merge(common, {
      output: {
        path: PATHS.build,
        publicPath: '/five-forecast/',
        filename: '[name].[chunkhash].js',
        chunkFilename: '[chunkhash].js'
      }
    })
  default:
    config = merge(common, {
      output: {
        path: PATHS.dev,
        publicPath: '/',
        filename: 'bundle.js'
      },
      devServer: {
        historyApiFallback: true,
        contentBase: './'
      }
    })
}

module.exports = config
