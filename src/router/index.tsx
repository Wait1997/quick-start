import React, { FC, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { HashRouter, Switch, Route, Redirect, RouteProps } from 'react-router-dom'
import UserLayout from 'Src/layouts/UserLayout'
import BasicLayout from 'Src/layouts/BasicLayout'
import { RootState, Dispatch } from 'Src/store'

export default function Router() {
  const dispatch = useDispatch<Dispatch>()
  const userinfo = useSelector((state: RootState) => state.app.userinfo)

  const routeEnter = (Component: FC, props: RouteProps) => {
    const user = localStorage.getItem('user')
    return user ? <Component {...props} /> : <Redirect to='/user' />
  }
  // 同步信息
  useEffect(() => {
    const lastUserInfo = sessionStorage.getItem('userinfo')
    if (lastUserInfo && !userinfo.userBasicInfo) {
      dispatch.app.setUserInfo(JSON.parse(lastUserInfo))
    }
  }, [dispatch.app, userinfo.userBasicInfo])
  return (
    <HashRouter>
      <Switch>
        <Route path='/user' component={UserLayout} />
        <Route path='/' render={(props) => routeEnter(BasicLayout, props)} />
      </Switch>
    </HashRouter>
  )
}
