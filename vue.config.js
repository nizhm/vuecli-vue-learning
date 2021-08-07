'use strict'
const path = require('path')
const defaultSettings = require('./src/settings')

function resolve(dir) {
  return path.join(__dirname, dir)
}

// page title
const name = defaultSettings.title || 'Vue Family Learning'
// dev port
const port = process.env.port || process.env.npm_config_port || 9001

module.exports = {
  publicPath: '/',
  outputDir: 'build',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      '/': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }
    //before: require('./mock/mock-server.js')
  }
}
