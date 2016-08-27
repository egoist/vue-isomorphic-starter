'use strict'
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const config = require('./webpack.client')
const postcss = [
  require('precss')(),
  require('autoprefixer')({browsers: ['last 2 versions']}),
]
config.devtool = 'source-map'
config.output.filename = 'bundle.[chunkhash].js'
config.plugins = config.plugins.concat([
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
  new ExtractTextPlugin('[name].[contenthash].css')
])
config.vue.loaders = {
  postcss: ExtractTextPlugin.extract(
    'vue-style-loader',
    'css-loader?sourceMap'
  ),
  css: ExtractTextPlugin.extract(
    'vue-style-loader',
    'css-loader?sourceMap'
  )
}

module.exports = config
