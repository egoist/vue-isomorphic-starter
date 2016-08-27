'use strict'
const path = require('path')
const webpack = require('webpack')
const AssetsPlugin = require('assets-webpack-plugin')
const assetsPluginInstance = new AssetsPlugin({path: path.join(process.cwd(), 'build')})
const postcss = [
  require('precss')(),
  require('autoprefixer')({browsers: ['last 2 versions']}),
]

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
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url?limit=10000&name=images/[hash].[ext]',
        include: path.src,
      },
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        loader: 'url-loader',
        include: path.src,
      },
    ]
  },
  postcss,
  vue: {
    postcss,
    loaders: {}
  },
  plugins: [
    assetsPluginInstance
  ]
}
