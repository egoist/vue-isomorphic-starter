'use strict'
const path = require('path')
const webpack = require('webpack')
const AssetsPlugin = require('assets-webpack-plugin')
const assetsPluginInstance = new AssetsPlugin({path: path.join(process.cwd(), 'build')})

module.exports = {
  entry: [
    './client/main.js'
  ],
  output: {
    path: path.join(process.cwd(), 'build'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['', '.vue', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loaders: ['vue']
      },
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: [/node_modules/]
      }
    ]
  },
  vue: {
    autoprefixer: false,
    loaders: {}
  },
  plugins: [
    assetsPluginInstance
  ]
}
