import loadable, { LoadableComponent } from '@loadable/component'

const UserLayout = loadable(() => import('Src/layouts/UserLayout'))
const BasicLayout = loadable(() => import('Src/layouts/BasicLayout'))
const Login = loadable(() => import('Pages/Login'))
const Analysis = loadable(() => import('Pages/Dashboard/Analysis'))
const Workplace = loadable(() => import('Pages/Dashboard/Workplace'))
const Doc = loadable(() => import('Pages/Doc'))
const Guide = loadable(() => import('Pages/Guide'))
const Explanation = loadable(() => import('Pages/Permission'))
const AdminPage = loadable(() => import('Pages/Permission/Admin'))
const UserPage = loadable(() => import('Pages/Permission/User'))
const RichText = loadable(() => import('Pages/Component/RichText'))
const Markdown = loadable(() => import('Pages/Component/Markdown'))
const Draggable = loadable(() => import('Pages/Component/Draggable'))
const TableQuery = loadable(() => import('Pages/Table/Query'))
const TableStandard = loadable(() => import('Src/pages/Table/Standard'))
const NoFound = loadable(() => import('Pages/ErrorPage/404'))
const NoAuth = loadable(() => import('Pages/ErrorPage/403'))

export interface RouteListType {
  path?: string
  redirect?: string
  roles?: string[]
  children?: RouteListType[]
  component?: LoadableComponent<any>
}

const routerList: RouteListType[] = [
  {
    path: '/user',
    component: UserLayout,
    children: [
      {
        path: '/user',
        redirect: '/user/login'
      },
      {
        path: '/user/login',
        component: Login
      },
      {
        path: '',
        component: NoFound
      }
    ]
  },
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/dashboard',
        roles: ['admin', 'user'],
        children: [
          {
            path: '/dashboard',
            redirect: '/dashboard/analysis'
          },
          {
            path: '/dashboard/analysis',
            component: Analysis,
            roles: ['admin', 'user']
          },
          {
            path: '/dashboard/workplace',
            component: Workplace,
            roles: ['admin', 'user']
          }
        ]
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
        path: '/permission',
        children: [
          {
            path: '/permission',
            redirect: '/permission/explanation'
          },
          {
            path: '/permission/explanation',
            component: Explanation,
            roles: ['admin', 'user']
          },
          {
            path: '/permission/admin',
            component: AdminPage,
            roles: ['admin']
          },
          {
            path: '/permission/user',
            component: UserPage,
            roles: ['user']
          }
        ]
      },
      {
        path: '/component',
        children: [
          {
            path: '/component',
            redirect: '/component/richtext'
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
      },
      {
        path: '/table',
        children: [
          {
            path: '/table',
            redirect: '/table/query'
          },
          {
            path: '/table/query',
            component: TableQuery,
            roles: ['admin', 'user']
          },
          {
            path: '/table/standard',
            component: TableStandard,
            roles: ['admin']
          }
        ]
      },
      {
        path: '/error',
        children: [
          {
            path: '/error',
            redirect: '/error/404'
          },
          {
            path: '/error/404',
            component: NoFound
          },
          {
            path: '/error/403',
            component: NoAuth
          }
        ]
      }
    ]
  }
]

export default routerList
