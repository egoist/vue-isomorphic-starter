'use strict'
const path = require('path')
const externals = require('webpack-node-externals')
const webpack = require('webpack')

module.exports = {
  target: 'node',
  entry: [
    './server/index.js'
  ],
  output: {
    path: process.cwd(),
    filename: 'server.js'
  },
  resolve: {
    extensions: ['', '.vue', '.js', '.json'],
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loaders: ['json']
      },
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
  externals: [externals()],
  plugins: []
}
