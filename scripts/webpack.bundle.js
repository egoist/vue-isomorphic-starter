'use strict'
const webpack = require('webpack')
const base = require('./webpack.client')
const externals = require('webpack-node-externals')

module.exports = Object.assign({}, base, {
  target: 'node',
  devtool: null,
  externals: [externals()],
  entry: [
    './client/server-entry.js'
  ],
  output: Object.assign({}, base.output, {
    filename: 'server-bundle.js',
    libraryTarget: 'commonjs2'
  }),
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"server"'
    })
  ]
})
