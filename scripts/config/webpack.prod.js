const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { resolve } = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const { PROJECT_PATH } = require('../constant')

module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  output: {
    filename: 'js/[name].[contenthash:8].js',
    path: resolve(PROJECT_PATH, './build'),
    assetModuleFilename: 'images/[name].[contenthash:8].[ext]'
    // clean: true
  },
  plugins: [new CleanWebpackPlugin()].filter(Boolean)
})
