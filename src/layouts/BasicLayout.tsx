import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { logout } from 'Src/store/actions/auth'
import { menuList } from 'Utils/menuList'
import routeList from 'Utils/routeList'
import { Layout } from 'antd'
import MenuSide from 'Components/Menu'
import Breadcrumb from 'Components/Breadcrumb'
import Header from 'Components/Header'
import Content from 'Components/Content'
import './BasicLayout.less'

const BasicLayout: React.FC<any> = (props) => {
  const { userInfo } = props
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
        <Content className='content' list={routeList} />
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
