'use strict'
const path = require('path')
const defaultSettings = require('./src/settings')

function resolve(dir) {
  return path.join(__dirname, dir)
}

// page title
const name = defaultSettings.title || 'Vue Family Learning'
// dev port
const port = process.env.port || process.env.npm_config_port || 9898

module.exports = {
  publicPath: '/',
  outputDir: 'build',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    port: port,
    open: false,
    overlay: {
      warnings: false,
      errors: true
    },
    //before: require('./mock/mock-server.js')
  }
}
