import React from 'react'
import { UserInfo } from 'Src/store/reducers/user'
import { Layout, Menu, Dropdown } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined, SmileOutlined } from '@ant-design/icons'
import cn from 'classnames'
import './index.less'

const { Header } = Layout

export interface HeaderType {
  width?: number
  collapsedWidth?: number
  fixedHeader?: boolean
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
  children,
  fixedHeader = true
}: React.PropsWithChildren<HeaderType>) {
  return (
    <>
      {fixedHeader && <Header style={{ height: 48, backgroundColor: 'transparent', lineHeight: 48 }} />}
      <Header
        className={cn('menu-header', { 'fixed-header': fixedHeader })}
        style={{
          height: 48,
          padding: 0,
          backgroundColor: '#fff',
          width: collapsed ? 'calc(100% - 48px)' : 'calc(100% - 208px)'
        }}>
        <div className='head-wrap'>
          <div className='head-left'>
            {collapsed ? (
              <MenuUnfoldOutlined
                style={{ fontSize: 18, color: '#1890ff' }}
                onClick={() => {
                  onToggle(false)
                }}
              />
            ) : (
              <MenuFoldOutlined
                style={{ fontSize: 18, color: '#1890ff' }}
                onClick={() => {
                  onToggle(true)
                }}
              />
            )}
            {children}
          </div>
          <div className='head-right'>
            <Dropdown
              trigger={['hover']}
              overlay={
                <Menu>
                  <Menu.Item key='0'>
                    <a href='https://ant.design/components/overview-cn/'>Ant Design</a>
                  </Menu.Item>
                  <Menu.Divider />
                  <Menu.Item key='1'>
                    <a href='https://github.com'>GitHub</a>
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
          </div>
        </div>
      </Header>
    </>
  )
}
