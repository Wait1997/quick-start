export interface MenuType {
  title: string
  path: string
  icon: string
  roles?: string[]
  children?: MenuType[]
}

export const menuList: MenuType[] = [
  {
    title: '首页',
    path: '/dashboard',
    icon: 'home'
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
  }
]
