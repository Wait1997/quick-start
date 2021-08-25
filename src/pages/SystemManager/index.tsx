import React from 'react'
import { Redirect, Route, Switch, RouteProps, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import loadable from '@loadable/component'
import { RootState } from 'Src/store'
import { Spin } from 'antd'
import { Menu } from 'Src/models/type'

const [UserManager, RoleManager, PowerManager, MenuManager, NoAuth] = [
  () => import('./UserManager'),
  () => import('./RoleManager'),
  () => import('./PowerManager'),
  () => import('./MenuManager'),
  () => import('Pages/ErrorPage/403')
].map((item) =>
  loadable(item, {
    fallback: <Spin />
  })
)

export default function SystemManager() {
  const location = useLocation()
  const userInfo = useSelector((state: RootState) => state.app.userinfo)

  const checkRouterPower = (pathname: string) => {
    if (userInfo.menus && userInfo.menus.length > 0) {
      const { menus } = userInfo
      const urlList = menus.map((item) => item.url)
      return urlList.includes(pathname)
    }
    if (sessionStorage.getItem('userinfo')) {
      const lastUserInfo = JSON.parse(sessionStorage.getItem('userinfo') as string)
      const { menus } = lastUserInfo
      const urlList = menus.map((item: Menu) => item.url)
      return urlList.includes(pathname)
    }
    return false
  }

  const onEnter = (Component: any, props: RouteProps) => {
    /**
     * 检查当前用户是否有该路由页面的权限
     * 没有则跳转至403页
     */
    if (checkRouterPower(location.pathname)) {
      return <Component {...props} />
    }
    return <Redirect to='/403' />
  }

  return (
    <Switch>
      <Route path='/system/useradmin' render={(props) => onEnter(UserManager, props)} />
      <Route path='/system/roleadmin' render={(props) => onEnter(RoleManager, props)} />
      <Route path='/system/poweradmin' render={(props) => onEnter(PowerManager, props)} />
      <Route path='/system/menuadmin' render={(props) => onEnter(MenuManager, props)} />
      <Route path='/403' component={NoAuth} exact />
      <Redirect to='/system/useradmin' />
    </Switch>
  )
}
