import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { logout } from 'Src/store/actions/auth'
import { menuList } from 'Utils/menuList'
import { Layout } from 'antd'
import ErrorBoundary from 'Src/components/ErrorBoundary'
import MenuSide from 'Components/Menu'
import Breadcrumb from 'Components/Breadcrumb'
import Header from 'Components/Header'
import Content from 'Components/Content'
import './BasicLayout.less'

const BasicLayout: React.FC<any> = (props) => {
  const { userInfo, children } = props
  const history = useHistory()
  const [collapsed, setCollapsed] = useState(false) // 菜单栏是否收起

  return (
    <Layout className='basic-layout'>
      <MenuSide className='basic-sider' data={menuList} collapsed={collapsed} />
      <Layout className='content-layout'>
        <Header
          collapsed={collapsed}
          userInfo={userInfo}
          onToggle={(value) => {
            setCollapsed(value)
          }}
          onLogout={async () => {
            await props.logout(userInfo.token)
            history.replace('/user/login')
          }}>
          <Breadcrumb menuList={menuList} />
        </Header>
        <ErrorBoundary>
          <Content className='content' list={children} />
        </ErrorBoundary>
      </Layout>
    </Layout>
  )
}

export default connect(
  (state: any) => {
    return {
      userInfo: state.user
    }
  },
  { logout }
)(BasicLayout)
