// 所有的权限数据
const powers = [
  {
    id: 1,
    menu: 3,
    title: '新增',
    code: 'user:add',
    desc: '用户管理 - 添加权限',
    sorts: 1,
    conditions: 1
  },
  {
    id: 2,
    menu: 3,
    title: '修改',
    code: 'user:up',
    desc: '用户管理 - 修改权限',
    sorts: 2,
    conditions: 1
  },
  {
    id: 3,
    menu: 3,
    title: '查看',
    code: 'user:query',
    desc: '用户管理 - 查看权限',
    sorts: 3,
    conditions: 1
  },
  {
    id: 4,
    menu: 3,
    title: '删除',
    code: 'user:del',
    desc: '用户管理 - 删除权限',
    sorts: 4,
    conditions: 1
  },
  {
    id: 5,
    menu: 3,
    title: '分配角色',
    code: 'user:role',
    desc: '用户管理 - 分配角色权限',
    sorts: 5,
    conditions: 1
  },

  {
    id: 6,
    menu: 4,
    title: '新增',
    code: 'role:add',
    desc: '角色管理 - 添加权限',
    sorts: 1,
    conditions: 1
  },
  {
    id: 7,
    menu: 4,
    title: '修改',
    code: 'role:up',
    desc: '角色管理 - 修改权限',
    sorts: 2,
    conditions: 1
  },
  {
    id: 8,
    menu: 4,
    title: '查看',
    code: 'role:query',
    desc: '角色管理 - 查看权限',
    sorts: 3,
    conditions: 1
  },
  {
    id: 18,
    menu: 4,
    title: '分配权限',
    code: 'role:power',
    desc: '角色管理 - 分配权限',
    sorts: 4,
    conditions: 1
  },
  {
    id: 9,
    menu: 4,
    title: '删除',
    code: 'role:del',
    desc: '角色管理 - 删除权限',
    sorts: 5,
    conditions: 1
  },

  {
    id: 10,
    menu: 5,
    title: '新增',
    code: 'power:add',
    desc: '权限管理 - 添加权限',
    sorts: 1,
    conditions: 1
  },
  {
    id: 11,
    menu: 5,
    title: '修改',
    code: 'power:up',
    desc: '权限管理 - 修改权限',
    sorts: 2,
    conditions: 1
  },
  {
    id: 12,
    menu: 5,
    title: '查看',
    code: 'power:query',
    desc: '权限管理 - 查看权限',
    sorts: 3,
    conditions: 1
  },
  {
    id: 13,
    menu: 5,
    title: '删除',
    code: 'power:del',
    desc: '权限管理 - 删除权限',
    sorts: 2,
    conditions: 1
  },

  {
    id: 14,
    menu: 6,
    title: '新增',
    code: 'menu:add',
    desc: '菜单管理 - 添加权限',
    sorts: 1,
    conditions: 1
  },
  {
    id: 15,
    menu: 6,
    title: '修改',
    code: 'menu:up',
    desc: '菜单管理 - 修改权限',
    sorts: 2,
    conditions: 1
  },
  {
    id: 16,
    menu: 6,
    title: '查看',
    code: 'menu:query',
    desc: '菜单管理 - 查看权限',
    sorts: 3,
    conditions: 1
  },
  {
    id: 17,
    menu: 6,
    title: '删除',
    code: 'menu:del',
    desc: '菜单管理 - 删除权限',
    sorts: 2,
    conditions: 1
  }
]

module.exports = powers
