import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Layout, Spin } from 'antd'
import loadable from '@loadable/component'
import './BasicLayout.less'

const { Sider, Header, Content, Footer } = Layout

const [Dashboard] = [() => import('Pages/Dashboard')].map((item) =>
  loadable(item, {
    fallback: <Spin />
  })
)

const BasicLayout: React.FC = () => {
  return (
    <Layout className='basic-layout'>
      <Sider className='basic-sider'>Sider</Sider>
      <Layout>
        <Header className='basic-header'>Header</Header>
        <Content>
          <Switch>
            <Route path='/dashboard' component={Dashboard} />
            <Redirect from='/' to='dashboard' />
          </Switch>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  )
}

export default BasicLayout
