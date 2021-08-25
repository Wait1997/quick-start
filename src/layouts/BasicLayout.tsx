import React, { useState } from 'react'
import { Redirect, Route, Switch, useLocation, useHistory, RouteProps } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Layout, Spin, message } from 'antd'
import MenuSide from 'Components/Menu'
import Breadcrumb from 'Components/Breadcrumb'
import Header from 'Components/Header'
import loadable from '@loadable/component'
import { Dispatch, RootState } from 'Src/store'
import './BasicLayout.less'
import { Menu } from 'Src/models/type'

const { Content, Footer } = Layout

const [Dashboard, SystemManager, Table, Charts, NoAuth] = [
  () => import('Pages/Dashboard'),
  () => import('Pages/SystemManager'),
  () => import('Pages/Table'),
  () => import('Pages/Charts'),
  () => import('Pages/ErrorPage/403')
].map((item) =>
  loadable(item, {
    fallback: <Spin />
  })
)

const BasicLayout: React.FC = () => {
  const location = useLocation()
  const history = useHistory()
  const dispatch = useDispatch<Dispatch>()
  const userInfo = useSelector((state: RootState) => state.app.userinfo)
  const [collapsed, setCollapsed] = useState(false) // 菜单栏是否收起

  /**
   * @description 退出登录
   */
  const onLogout = () => {
    dispatch.app.onLogout().then(() => {
      message.success('登出成功')
      history.push('/user/login')
    })
  }

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
    <Layout className='basic-layout'>
      <MenuSide data={userInfo.menus} collapsed={collapsed} />
      <Layout>
        <Header
          collapsed={collapsed}
          userinfo={userInfo}
          onToggle={(value) => setCollapsed(value)}
          onLogout={onLogout}
        />
        <Breadcrumb menus={userInfo.menus} />
        <Content className='content'>
          <Switch>
            <Route path='/dashboard' render={(props) => onEnter(Dashboard, props)} />
            <Route path='/system' render={(props) => onEnter(SystemManager, props)} />
            <Route path='/table' render={(props) => onEnter(Table, props)} />
            <Route path='/charts' render={(props) => onEnter(Charts, props)} />
            <Route path='/403' component={NoAuth} />
            <Redirect to='dashboard' />
          </Switch>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  )
}

export default BasicLayout
