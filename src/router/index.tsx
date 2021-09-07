import React, { FC } from 'react'
import { connect } from 'react-redux'
import { HashRouter, Switch, Route, Redirect, RouteComponentProps } from 'react-router-dom'
import { getUserInfo } from 'Src/store/actions/user'
import UserLayout from 'Src/layouts/UserLayout'
import BasicLayout from 'Src/layouts/BasicLayout'

function Router(props: any) {
  const { token, role } = props
  const { userInfo } = props

  // eslint-disable-next-line consistent-return
  const routeEnter = (Component: FC<RouteComponentProps>, p: RouteComponentProps) => {
    if (!token) {
      return <Redirect to='/user' />
    }
    if (role) {
      return <Component {...p} />
    }
    userInfo(token).then(() => {
      return <Component {...p} />
    })
  }

  return (
    <HashRouter>
      <Switch>
        <Route path='/user' component={UserLayout} />
        <Route path='/' render={(p) => routeEnter(BasicLayout, p)} />
      </Switch>
    </HashRouter>
  )
}

export default connect((state: any) => state.user, { userInfo: getUserInfo })(Router)
