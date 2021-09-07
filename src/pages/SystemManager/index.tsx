import React from 'react'
import { Redirect, Route, Switch, useLocation } from 'react-router-dom'
import loadable from '@loadable/component'
import { Spin } from 'antd'

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

  return (
    <Switch>
      <Route path='/system/useradmin' render={(props) => <UserManager />} />
      <Route path='/system/roleadmin' render={(props) => <RoleManager />} />
      <Route path='/system/poweradmin' render={(props) => <PowerManager />} />
      <Route path='/system/menuadmin' render={(props) => <MenuManager />} />
      <Route path='/403' component={NoAuth} exact />
      <Redirect to='/system/useradmin' />
    </Switch>
  )
}
