'use strict'
const webpack = require('webpack')
const config = require('./webpack.client')
config.entry.push('webpack-hot-middleware/client')
config.devtool = 'inline-eval-cheap-source-map'
config.plugins = config.plugins.concat([
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    '__DEV__': true,
    'process.env.NODE_ENV': JSON.stringify('development')
  })
])

module.exports = config
