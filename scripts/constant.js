const path = require('path')

const PROJECT_PATH = path.resolve(__dirname, '../')
const PROJECT_NAME = path.parse(PROJECT_PATH).name

// dev server 路径与端口
const SERVER_HOST = 'localhost'
const SERVER_PORT = 9000

// 图片资源 limit
const imageInlineSizeLimit = 4 * 1024

module.exports = {
  PROJECT_PATH,
  PROJECT_NAME,
  SERVER_HOST,
  SERVER_PORT,
  imageInlineSizeLimit
}
