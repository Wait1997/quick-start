import React from 'react'
import Loading from 'Components/Loading'
import loadable, { LoadableComponent } from '@loadable/component'

const UserLayout = loadable(() => import('Src/layouts/UserLayout'), { fallback: <Loading size='large' /> })
const BasicLayout = loadable(() => import('Src/layouts/BasicLayout'), { fallback: <Loading size='large' /> })

// 登录页
const Login = loadable(() => import('Pages/Login'))

// 首页
const Analysis = loadable(() => import('Pages/Dashboard/Analysis'), { fallback: <Loading size='large' /> })
const Workplace = loadable(() => import('Pages/Dashboard/Workplace'), { fallback: <Loading size='large' /> })

// 权限
const Explanation = loadable(() => import('Pages/Permission'), { fallback: <Loading size='large' /> })
const AdminPage = loadable(() => import('Pages/Permission/Admin'), { fallback: <Loading size='large' /> })
const UserPage = loadable(() => import('Pages/Permission/User'), { fallback: <Loading size='large' /> })

// 表单
const BasicForm = loadable(() => import('Pages/Form/BasicForm'), { fallback: <Loading size='large' /> })
const StepForm = loadable(() => import('Pages/Form/StepForm'), { fallback: <Loading size='large' /> })
const HighForm = loadable(() => import('Pages/Form/HighForm'), { fallback: <Loading size='large' /> })

// 表格
const TableArticle = loadable(() => import('Pages/Table/TableSearch/Article'), {
  fallback: <Loading size='large' />
})
const TableProject = loadable(() => import('Pages/Table/TableSearch/Project'), { fallback: <Loading size='large' /> })
const TableApplication = loadable(() => import('Pages/Table/TableSearch/Application'), {
  fallback: <Loading size='large' />
})
const TableQuery = loadable(() => import('Pages/Table/Query'), { fallback: <Loading size='large' /> })
const TableStandard = loadable(() => import('Src/pages/Table/Standard'), { fallback: <Loading size='large' /> })

// 组件
const Guide = loadable(() => import('Src/pages/Component/Guide'), { fallback: <Loading size='large' /> })
const RichText = loadable(() => import('Pages/Component/RichText'), { fallback: <Loading size='large' /> })
const Markdown = loadable(() => import('Pages/Component/Markdown'), { fallback: <Loading size='large' /> })
const Draggable = loadable(() => import('Pages/Component/Draggable'), { fallback: <Loading size='large' /> })

// 异常页
const NoFound = loadable(() => import('Pages/ErrorPage/404'), { fallback: <Loading size='large' /> })
const NoAuth = loadable(() => import('Pages/ErrorPage/403'), { fallback: <Loading size='large' /> })

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
        path: '/',
        redirect: '/dashboard'
      },
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
          },
          {
            redirect: '/dashboard/analysis'
          }
        ]
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
          },
          {
            redirect: '/permission/explanation'
          }
        ]
      },
      {
        path: '/form',
        children: [
          {
            path: '/form',
            redirect: '/form/basic-form'
          },
          {
            path: '/form/basic-form',
            component: BasicForm
          },
          {
            path: '/form/step-form',
            component: StepForm
          },
          {
            path: '/form/high-form',
            component: HighForm
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
            path: '/table/search',
            children: [
              {
                path: '/table/search',
                redirect: '/table/search/article'
              },
              {
                path: '/table/search/article',
                component: TableArticle
              },
              {
                path: '/table/search/project',
                component: TableProject,
                roles: ['admin']
              },
              {
                path: '/table/search/application',
                component: TableApplication
              },
              {
                redirect: '/table/search/article'
              }
            ]
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
          },
          {
            redirect: '/table/query'
          }
        ]
      },
      {
        path: '/component',
        children: [
          {
            path: '/component',
            redirect: '/component/guide'
          },
          {
            path: '/component/guide',
            component: Guide,
            roles: ['admin', 'user']
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
          },
          {
            redirect: '/component/richtext'
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
          },
          {
            redirect: '/error/404'
          }
        ]
      },
      {
        redirect: '/error/404'
      }
    ]
  }
]

export default routerList
