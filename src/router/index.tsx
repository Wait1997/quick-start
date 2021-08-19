import React, { FC, useEffect } from 'react'
import { HashRouter, Switch, Route, Redirect, RouteProps } from 'react-router-dom'
import UserLayout from 'Src/layouts/UserLayout'
import BasicLayout from 'Src/layouts/BasicLayout'

export default function Router() {
  // useEffect(() => {}, [])
  const routeEnter = (Component: FC, props: RouteProps) => {
    const userInfo = localStorage.getItem('userInfo') ?? 'admin'
    return userInfo ? <Component {...props} /> : <Redirect to='/user' />
  }
  return (
    <HashRouter>
      <Switch>
        <Route path='/user' component={UserLayout} />
        <Route path='/' render={(props) => routeEnter(BasicLayout, props)} />
      </Switch>
    </HashRouter>
  )
}
