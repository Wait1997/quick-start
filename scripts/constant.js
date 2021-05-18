const path = require('path')

const PROJECT_PATH = path.resolve(__dirname, '../')
const PROJECT_NAME = path.parse(PROJECT_PATH).name

// dev server 路径与端口
const SERVER_HOST = 'localhost'
const SERVER_PORT = 9000

const shouldOpenAnalyzer = false
const ANALYZER_HOST = 'localhost'
const ANALYZER_PORT = '8888'

// 图片资源 limit
const imageInlineSizeLimit = 4 * 1024

module.exports = {
  PROJECT_PATH,
  PROJECT_NAME,
  SERVER_HOST,
  SERVER_PORT,
  ANALYZER_HOST,
  ANALYZER_PORT,
  shouldOpenAnalyzer,
  imageInlineSizeLimit
}
