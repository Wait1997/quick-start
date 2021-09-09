export interface MenuType {
  title: string
  path: string
  icon?: string
  roles?: string[]
  children?: MenuType[]
}

export const menuList: MenuType[] = [
  {
    title: '首页',
    path: '/dashboard',
    icon: 'home',
    children: [
      {
        path: '/dashboard/analysis',
        title: '分析页',
        roles: ['admin', 'user']
      },
      {
        path: '/dashboard/workplace',
        title: '工作台',
        roles: ['admin', 'user']
      }
    ]
  },
  {
    title: '开发文档',
    path: '/desc',
    icon: 'file'
  },
  {
    title: '引导页',
    path: '/guide',
    icon: 'key',
    roles: ['admin', 'user']
  },
  {
    title: '权限测试',
    path: '/permission',
    icon: 'lock',
    children: [
      {
        title: '权限说明',
        path: '/permission/explanation',
        roles: ['admin']
      },
      {
        title: '管理员页面',
        path: '/permission/admin',
        roles: ['admin']
      },
      {
        title: '用户页面',
        path: '/permission/user',
        roles: ['user']
      }
    ]
  },
  {
    title: '组件',
    path: '/components',
    icon: 'appstore',
    roles: ['admin', 'user'],
    children: [
      {
        title: '富文本',
        path: '/components/richtext',
        roles: ['admin']
      },
      {
        title: 'Markdown',
        path: '/components/markdown',
        roles: ['admin', 'user']
      },
      {
        title: '拖拽组件',
        path: '/components/draggable',
        roles: ['admin', 'user']
      }
    ]
  },
  {
    title: '表格',
    path: '/table',
    icon: 'table',
    roles: ['admin', 'editor'],
    children: [
      {
        path: '/table/query',
        title: '查询表格',
        roles: ['admin', 'user']
      },
      {
        path: '/table/standard',
        title: '标准表格',
        roles: ['admin']
      }
    ]
  },
  {
    title: '图表',
    path: '/charts',
    icon: 'area-chart',
    roles: ['admin', 'user'],
    children: [
      {
        title: '键盘图表',
        path: '/charts/keyboard',
        roles: ['admin']
      },
      {
        title: '折线图',
        path: '/charts/line',
        roles: ['admin']
      },
      {
        title: '混合图表',
        path: '/charts/mix-chart',
        roles: ['admin', 'user']
      }
    ]
  },
  {
    title: '路由嵌套',
    path: '/nested',
    icon: 'cluster',
    roles: ['admin', 'user'],
    children: [
      {
        title: '菜单1',
        path: '/nested/menu1',
        children: [
          {
            title: '菜单1-1',
            path: '/nested/menu1/menu1-1',
            roles: ['user']
          },
          {
            title: '菜单1-2',
            path: '/nested/menu1/menu1-2',
            children: [
              {
                title: '菜单1-2-1',
                path: '/nested/menu1/menu1-2/menu1-2-1',
                roles: ['admin', 'user']
              }
            ]
          }
        ]
      }
    ]
  },
  {
    title: 'Excel',
    path: '/excel',
    icon: 'file-excel',
    roles: ['admin', 'editor'],
    children: [
      {
        title: '导出Excel',
        path: '/excel/export',
        roles: ['admin', 'editor']
      },
      {
        title: '上传Excel',
        path: '/excel/upload',
        roles: ['admin', 'editor']
      }
    ]
  },
  {
    title: 'Zip',
    path: '/zip',
    icon: 'file-zip',
    roles: ['admin', 'editor']
  },
  {
    title: '剪贴板',
    path: '/clipboard',
    icon: 'copy',
    roles: ['admin', 'editor']
  },
  {
    title: '用户管理',
    path: '/user',
    icon: 'usergroup-add',
    roles: ['admin']
  },
  {
    title: '异常页',
    path: '/error',
    icon: 'error',
    children: [
      {
        title: '404',
        path: '/error/404',
        roles: ['admin', 'user']
      },
      {
        title: '403',
        path: '/error/403',
        roles: ['admin', 'user']
      }
    ]
  },
  {
    title: '关于作者',
    path: '/about',
    icon: 'user',
    roles: ['admin', 'user']
  }
]
