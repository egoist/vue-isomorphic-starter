'use strict'
const webpack = require('webpack')
const config = require('./webpack.bundle')

module.exports = Object.assign({}, config, {
  plugins: config.plugins.concat([
    new webpack.DefinePlugin({
      '__DEV__': false,
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      },
      comments: false
    }),
  ])
})
