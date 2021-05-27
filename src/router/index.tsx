import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { routes } from './route'

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((router) => (
          <Route
            key={router.path}
            exact={router.exact}
            path={router.path}
            render={(props) => <router.component {...props} routes={router.children} />}
          />
        ))}
      </Switch>
    </BrowserRouter>
  )
}
