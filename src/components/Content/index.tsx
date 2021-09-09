import React from 'react'
import { Layout } from 'antd'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Redirect, Switch, Route, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import routeList from 'Src/utils/routeList'
import NoAuth from 'Src/pages/ErrorPage/403'

const { Content } = Layout

export type ContentType = typeof routeList

export interface ContentProps {
  list: ContentType
  className: string
}

export default function LayoutContent({ list, className }: ContentProps) {
  const location = useLocation()
  const role = useSelector((state: any) => state.user.role)

  /**
   * @description 这里匹配相应权限的路由、如果不匹配则到403(必须保证routelist和menulist权限相同)
   * @param Component 路由组件
   * @param roles 当前路由组件的权限
   * @returns 路由组件
   */
  const checkPermission = (Component: any, roles?: string[]) => {
    if (roles && Array.isArray(roles)) {
      if (Array.isArray(role)) {
        if (role.some((item) => roles.includes(item))) {
          return <Component />
        }
        return <NoAuth />
      }
      if (roles.includes(role)) {
        return <Component />
      }
    }
    return <Component />
  }
  return (
    <Content className={className}>
      <TransitionGroup>
        <CSSTransition classNames='fade' key={location.pathname} timeout={300} exit={false}>
          <Switch>
            <Redirect exact from='/' to='/dashboard/analysis' />
            {list.map((route) => {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  render={() => checkPermission(route.component, route?.roles)}
                />
              )
            })}
            <Redirect to='/error/404' />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </Content>
  )
}
