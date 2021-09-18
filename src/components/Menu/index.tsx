import React, { useCallback, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import { Layout, Menu as AntdMenu } from 'antd'
import { MenuType } from 'Utils/menuList'
import cn from 'classnames'
import './index.less'

const { Sider } = Layout
const { SubMenu, Item } = AntdMenu

export interface MenuProps {
  data: MenuType[]
  width?: number
  collapsedWidth?: number
  theme?: 'light' | 'dark'
  collapsed: boolean
  className?: string
  fixedSider?: boolean
  style?: React.CSSProperties
}

/**
 * 为了获取打开过的subMenu数组的key
 * @param pathname location.pathname
 * @returns subMenu经过的数组的key
 */
const getPreviousPath = (pathname: string): string[] => {
  let previousPath = ''
  const parentList = []

  const pathList = pathname.split('/').filter(Boolean)
  const effectList = pathList.slice(0, -1)

  for (const item of effectList) {
    previousPath += `/${item}`
    parentList.push(previousPath)
  }
  return parentList
}

export default function MenuSide({
  data,
  width = 208,
  collapsedWidth = 48,
  theme = 'light',
  collapsed,
  className,
  fixedSider = true,
  style
}: MenuProps) {
  const history = useHistory()
  const location = useLocation()
  // 当前用户的角色
  const role = useSelector((state: any) => state.user.role)
  const [selectedKeys, setSelectedKeys] = useState<string[]>([])
  const [openKeys, setOpenKeys] = useState<string[]>([])

  useEffect(() => {
    const { pathname } = location
    // 为了打开的subMenu的路径
    const parentList = getPreviousPath(pathname)
    setSelectedKeys([pathname])
    setOpenKeys(parentList)
  }, [location])

  const hasPermisssion = useCallback(
    (item: MenuType) => {
      if (item.roles && Array.isArray(item.roles)) {
        if (Array.isArray(role)) {
          return role.some((cur) => (item.roles as string[]).includes(cur))
        }
        return item.roles.includes(role)
      }
      return true
    },
    [role]
  )

  const getMenuNodes = useCallback(
    (menu: MenuType[]) => {
      const treeDom = menu.map((item) => {
        if (hasPermisssion(item)) {
          return item.children ? (
            <SubMenu key={item.path} title={item.title}>
              {getMenuNodes(item.children)}
            </SubMenu>
          ) : (
            <Item key={item.path}>{item.title}</Item>
          )
        }
        return null
      })
      return treeDom
    },
    [hasPermisssion]
  )

  return (
    <>
      {fixedSider && (
        <div
          style={
            collapsed
              ? {
                  width: collapsedWidth,
                  minWidth: collapsedWidth,
                  maxWidth: collapsedWidth,
                  overflow: 'hidden'
                }
              : {
                  width,
                  minWidth: width,
                  maxWidth: width,
                  overflow: 'hidden'
                }
          }
        />
      )}
      <Sider
        theme={theme}
        width={width}
        collapsedWidth={collapsedWidth}
        className={cn(className, 'menu-sider', { 'fixed-sider': fixedSider })}
        style={style}
        collapsed={collapsed}
        trigger={null}
        collapsible>
        <div className='menu-wrap'>
          <AntdMenu
            theme={theme}
            selectedKeys={selectedKeys}
            openKeys={openKeys}
            onOpenChange={(keys) => {
              setOpenKeys(keys as string[])
            }}
            onSelect={(select) => {
              setSelectedKeys(select.selectedKeys)
              if (!selectedKeys.includes(select.key)) {
                history.push(select.key)
              }
            }}
            mode='inline'>
            {getMenuNodes(data)}
          </AntdMenu>
        </div>
      </Sider>
    </>
  )
}
