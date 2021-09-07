const users = require('./data/user')

const token = {
  admin: 'admin-token',
  user: 'user-token'
}

// 登录获取token
const onLogin = (p) => {
  const { username, password } = p
  if (!username) {
    return { code: 204, data: null, message: '该用户不存在' }
  }
  if (password !== '123456') {
    return { code: 204, data: null, message: '密码错误' }
  }
  // 登录成功返回用户token
  return { code: 200, data: { token: token[username] }, message: '登录成功' }
}

// 根据token获取用户信息
const userInfo = (p) => {
  if (p.token) {
    return { code: 200, data: users[p.token], message: 'success' }
  }
  return { code: 400, data: null, message: 'token错误或者token为空' }
}

exports.mockApi = (obj) => {
  const { url, body } = obj
  let params = typeof body === 'string' ? JSON.parse(body) : body
  let path = url

  // 是get请求 解析参数
  if (url.includes('?')) {
    // eslint-disable-next-line prefer-destructuring
    path = url.split('?')[0]
    const s = url.split('?')[1].split('&') // ['a=1','b=2']
    params = {}

    for (const element of s) {
      if (element) {
        const ss = element.split('=')
        // eslint-disable-next-line prefer-destructuring
        params[ss[0]] = ss[1]
      }
    }
  }
  // 如果是完整的url,则替换为路径
  if (path.includes('http')) {
    path = path.replace(`${globalThis.location.protocol}//${globalThis.location.host}`, '')
  }

  switch (path) {
    case '/api/login':
      return onLogin(params)
    case '/api/userInfo':
      return userInfo(params)
    default:
      return { code: 404, data: null, message: 'api not found' }
  }
}
