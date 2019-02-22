const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: '#cheap-module-eval-source-map',
  mode: 'development',
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  devServer: {
    // quiet: true,
    // noInfo: true,
    port: 8888,
    host: '0.0.0.0',
    inline: true,
    hot: true,
    disableHostCheck: true,
    stats: {
      colors: true,
    },
  },
}

