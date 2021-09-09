import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import loadable from '@loadable/component'
import { Layout, Spin } from 'antd'
import './UserLayout.less'

const { Content, Footer } = Layout

const [Login, NotFound] = [() => import('../pages/Login'), () => import('../pages/ErrorPage/404')].map((item) => {
  return loadable(item, {
    fallback: <Spin />
  })
})

const UserLayout: React.FC = () => {
  return (
    <Layout className='user-layout'>
      <div className='user-header' />
      <Content className='user-content'>
        <div className='user-content-top'>
          <div className='user-content-top-header'>antd design</div>
          <div className='user-content-top-desc'>Ant Design admin template</div>
        </div>
        <Switch>
          <Redirect from='/user' to='/user/login' exact />
          <Route path='/user/login' component={Login} />
          <Route path='/404' component={NotFound} />
          <Redirect to='/404' />
        </Switch>
      </Content>
      <Footer className='user-footer'>Ant Design</Footer>
    </Layout>
  )
}

export default UserLayout
