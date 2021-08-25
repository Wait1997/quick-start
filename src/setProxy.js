const proxySettings = {
  // 接口代理1
  '/api/': {
    target: 'localhost:9001',
    changeOrigin: true
  },
  // 接口代理2
  '/api-2/': {
    target: 'localhost:9001',
    changeOrigin: true,
    pathRewrite: {
      '^/api-2': ''
    }
  }
}

module.exports = proxySettings
