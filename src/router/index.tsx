import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { HashRouter, Switch, Route, Redirect, RouteComponentProps } from 'react-router-dom'
import UserLayout from 'Src/layouts/UserLayout'
import BasicLayout from 'Src/layouts/BasicLayout'

export default function Router() {
  const token = useSelector((state: any) => state.user.token)
  const role = useSelector((state: any) => state.user.role)

  const routeEnter = (Component: FC<RouteComponentProps>, props: RouteComponentProps) => {
    if (!token) {
      return <Redirect to='/user' />
    }
    if (role) {
      return <Component {...props} />
    }
    return <Component {...props} />
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
