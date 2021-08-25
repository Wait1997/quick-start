import React from 'react'
import { Layout, Tooltip, Menu, Dropdown } from 'antd'
import { UserInfo } from 'Src/models/type'
import { MenuUnfoldOutlined, MenuFoldOutlined, SmileOutlined } from '@ant-design/icons'
import './index.less'

const { Header } = Layout

export interface HeaderType {
  collapsed: boolean
  userinfo: UserInfo
  onToggle: (value: boolean) => void
  onLogout: () => void
}

export default function MenuHeader({ collapsed, userinfo, onLogout, onToggle }: HeaderType) {
  const { userBasicInfo } = userinfo
  return (
    <Header className='menu-header'>
      <Tooltip title={collapsed ? '展开菜单' : '收起菜单'} placement='right'>
        {collapsed ? (
          <MenuUnfoldOutlined style={{ fontSize: 20 }} onClick={() => onToggle(false)} />
        ) : (
          <MenuFoldOutlined style={{ fontSize: 20 }} onClick={() => onToggle(true)} />
        )}
      </Tooltip>
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
            <span style={{ marginLeft: 6 }}>{userBasicInfo && userBasicInfo.username}</span>
          </div>
        </Dropdown>
      </>
    </Header>
  )
}
