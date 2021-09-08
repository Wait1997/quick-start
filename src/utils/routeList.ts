import loadable from '@loadable/component'

const Dashboard = loadable(() => import('Pages/Dashboard'))
const Doc = loadable(() => import('Pages/Doc'))
const Guide = loadable(() => import('Pages/Guide'))
const Explanation = loadable(() => import('Pages/Permission'))
const AdminPage = loadable(() => import('Pages/Permission/Admin'))
const UserPage = loadable(() => import('Pages/Permission/User'))
const RichText = loadable(() => import('Pages/Component/RichText'))
const Markdown = loadable(() => import('Pages/Component/Markdown'))
const Draggable = loadable(() => import('Pages/Component/Draggable'))

export default [
  {
    path: '/dashboard',
    component: Dashboard,
    roles: ['admin', 'user']
  },
  {
    path: '/desc',
    component: Doc,
    roles: ['admin', 'user']
  },
  {
    path: '/guide',
    component: Guide,
    roles: ['admin', 'user']
  },
  {
    path: '/permission/explanation',
    component: Explanation,
    roles: ['admin']
  },
  {
    path: '/permisson/admin',
    component: AdminPage,
    roles: ['admin']
  },
  {
    path: '/permission/user',
    component: UserPage,
    roles: ['user']
  },
  {
    path: '/component/richtext',
    component: RichText,
    roles: ['admin']
  },
  {
    path: '/component/markdown',
    component: Markdown,
    roles: ['admin', 'user']
  },
  {
    path: '/component/draggable',
    component: Draggable,
    roles: ['admin', 'user']
  }
]
