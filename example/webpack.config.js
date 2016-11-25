'use strict'
const webpack = require('webpack')
const { resolve } = require('path')


module.exports = {
  entry: {
    index: [
      'webpack-hot-middleware/client',
      resolve('./example/src/index.js')
    ]
  },
  output: {
    path: resolve('../example/build'), // 执行webpack的时候输出的文件路径
    publicPath: '/js/',
    filename: '[name].js', // 执行webpack的时候输出的文件名
    chunkFilename: '[name].js'
  },
  plugins: [
    // Webpack 1.0
    new webpack.optimize.OccurenceOrderPlugin(),
    // Webpack 2.0 fixed this mispelling
    // new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}
