import React, { useState } from 'react'
import { Redirect, Route, Switch, useLocation, useHistory, RouteComponentProps } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Layout, Spin, message } from 'antd'
import MenuSide from 'Components/Menu'
import Breadcrumb from 'Components/Breadcrumb'
import Header from 'Components/Header'
import loadable from '@loadable/component'
import './BasicLayout.less'

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

const BasicLayout: React.FC<RouteComponentProps> = () => {
  const location = useLocation()
  const history = useHistory()
  const dispatch = useDispatch()
  const userInfo = useSelector((state: any) => state.app.userinfo)
  const [collapsed, setCollapsed] = useState(false) // 菜单栏是否收起

  /**
   * @description 退出登录
   */
  // eslint-disable-next-line unicorn/consistent-function-scoping
  const onLogout = () => {}

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
            <Route path='/dashboard' render={(props) => <Dashboard />} />
            <Route path='/system' render={(props) => <SystemManager />} />
            <Route path='/table' render={(props) => <Table />} />
            <Route path='/charts' render={(props) => <Charts />} />
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
