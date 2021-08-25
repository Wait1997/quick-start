// 所有的菜单数据
const menus = [
  {
    id: 1,
    title: '首页',
    icon: 'icon-home',
    url: '/dashboard',
    parent: null,
    desc: '首页',
    sorts: 0,
    conditions: 1
  },
  {
    id: 2,
    title: '系统管理',
    icon: 'icon-setting',
    url: '/system',
    parent: null,
    desc: '系统管理目录分支',
    sorts: 1,
    conditions: 1
  },
  {
    id: 3,
    title: '用户管理',
    icon: 'icon-user',
    url: '/system/useradmin',
    parent: 2,
    desc: '系统管理/用户管理',
    sorts: 0,
    conditions: 1
  },
  {
    id: 4,
    title: '角色管理',
    icon: 'icon-team',
    url: '/system/roleadmin',
    parent: 2,
    desc: '系统管理/角色管理',
    sorts: 1,
    conditions: 1
  },
  {
    id: 5,
    title: '权限管理',
    icon: 'icon-safetycertificate',
    url: '/system/poweradmin',
    parent: 2,
    desc: '系统管理/权限管理',
    sorts: 2,
    conditions: 1
  },
  {
    id: 6,
    title: '菜单管理',
    icon: 'icon-appstore',
    url: '/system/menuadmin',
    parent: 2,
    desc: '系统管理/菜单管理',
    sorts: 3,
    conditions: 1
  },
  {
    id: 7,
    title: '列表',
    icon: 'icon-table',
    url: '/table',
    parent: null,
    desc: '列表',
    sorts: 2,
    conditions: 1
  }
]

module.exports = menus
