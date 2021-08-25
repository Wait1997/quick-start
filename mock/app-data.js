const users = require('./data/user')
const menus = require('./data/menus')
const roles = require('./data/roles')
const powers = require('./data/powers')

// 登录
const onLogin = (p) => {
  const u = users.find((item) => {
    return item.username === p.username
  })
  if (!u) {
    return { code: 204, data: null, message: '该用户不存在' }
  }
  if (u.password !== p.password) {
    return { code: 204, data: null, message: '密码错误' }
  }
  // 登录成功返回用户token
  return { code: 200, data: u, message: '登录成功' }
}

// 获取所有菜单
const getMenus = () => {
  return { code: 200, data: menus, message: 'success' }
}
// 获取菜单（根据ID）
const getMenusById = (p) => {
  let res = []
  if (Array.isArray(p.id)) {
    res = menus.filter((item) => p.id.includes(item.id))
  } else {
    const t = menus.find((item) => item.id === Number(p.id))
    res.push(t)
  }
  return { code: 200, data: res, message: 'success' }
}
// 查询角色(所有)
const getAllRoles = () => {
  return { code: 200, data: roles, message: 'success' }
}

// 查询角色(id)
const getRoleById = (p) => {
  let res = []
  if (Array.isArray(p.id)) {
    res = roles.filter((item) => p.id.includes(item.id))
  } else {
    const t = roles.find((item) => item.id === p.id)
    res.push(t)
  }
  return { code: 200, data: res, message: 'success' }
}

// 根据权限id查询对应的权限
const getPowerById = (p) => {
  let res = []
  if (Array.isArray(p.id)) {
    res = powers.filter((item) => {
      return p.id.includes(item.id)
    })
  } else {
    const t = powers.find((item) => {
      return item.id === p.id
    })
    res.push(t)
  }
  return { code: 200, data: res, message: 'success' }
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
    case '/api/getmenus':
      return getMenus()
    case '/api/getMenusById':
      return getMenusById(params)
    case '/api/getAllRoles':
      return getAllRoles()
    case '/api/getRoleById':
      return getRoleById(params)
    case '/api/getPowerById':
      return getPowerById(params)
    default:
      return { code: 404, data: null, message: 'api not found' }
  }
}
