import React from 'react'
import { UserInfo } from 'Src/store/reducers/user'
import { Layout, Tooltip, Menu, Dropdown } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined, SmileOutlined } from '@ant-design/icons'
import './index.less'

const { Header } = Layout

export interface HeaderType {
  collapsed: boolean
  userInfo: UserInfo
  onToggle: (value: boolean) => void
  onLogout: () => void
}

export default function MenuHeader({
  collapsed,
  userInfo,
  onLogout,
  onToggle,
  children
}: React.PropsWithChildren<HeaderType>) {
  return (
    <Header className='menu-header'>
      <div className='head-left'>
        <Tooltip title={collapsed ? '展开菜单' : '收起菜单'} placement='right'>
          {collapsed ? (
            <MenuUnfoldOutlined style={{ fontSize: 20 }} onClick={() => onToggle(false)} />
          ) : (
            <MenuFoldOutlined style={{ fontSize: 20 }} onClick={() => onToggle(true)} />
          )}
        </Tooltip>
        {children}
      </div>
      <>
        <Dropdown
          trigger={['click']}
          overlay={
            <Menu>
              <Menu.Item key='0'>
                <a href='https://www.antgroup.com'>antgroup</a>
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item key='1'>
                <a href='https://www.aliyun.com'>aliyun</a>
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item key='3' onClick={onLogout}>
                退出登录
              </Menu.Item>
            </Menu>
          }>
          <div className='userhead'>
            <SmileOutlined style={{ fontSize: 20 }} />
            <span style={{ marginLeft: 6 }}>{userInfo && userInfo.name}</span>
          </div>
        </Dropdown>
      </>
    </Header>
  )
}
