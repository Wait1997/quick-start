import React, { useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { menuList } from 'Utils/menuList'
import routeList from 'Utils/routeList'
import { Layout } from 'antd'
import MenuSide from 'Components/Menu'
import Breadcrumb from 'Components/Breadcrumb'
import Header from 'Components/Header'
import Content from 'Components/Content'
import './BasicLayout.less'

const { Footer } = Layout

const BasicLayout: React.FC<RouteComponentProps> = () => {
  const userInfo = useSelector((state: any) => state.user)
  const [collapsed, setCollapsed] = useState(false) // 菜单栏是否收起

  /**
   * @description 退出登录
   */
  // eslint-disable-next-line unicorn/consistent-function-scoping
  const onLogout = () => {}

  return (
    <Layout className='basic-layout'>
      <MenuSide className='basic-sider' data={menuList} collapsed={collapsed} />
      <Layout>
        <Header
          collapsed={collapsed}
          userInfo={userInfo}
          onToggle={(value) => setCollapsed(value)}
          onLogout={onLogout}
        />
        <Breadcrumb menuList={menuList} />
        <Content className='content' list={routeList} />
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  )
}

export default BasicLayout
