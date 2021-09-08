/* eslint-disable array-callback-return */
import React, { useCallback, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import { Layout, Menu as AntdMenu } from 'antd'
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { MenuType } from 'Utils/menuList'
import cn from 'classnames'

const { Sider } = Layout
const { SubMenu, Item } = AntdMenu

export interface MenuProps {
  data: MenuType[]
  width?: number
  theme?: 'light' | 'dark'
  collapsed: boolean
  className?: string
  style?: React.CSSProperties
}

export default function MenuSide({ data, width = 200, theme = 'dark', collapsed, className, style }: MenuProps) {
  const history = useHistory()
  const location = useLocation()
  // 当前用户的角色
  const role = useSelector((state: any) => state.user.role)
  const [chosedKey, setChosedKey] = useState<string[]>([])
  const [openKeys, setOpenKeys] = useState<string[]>([])

  useEffect(() => {
    const paths = location.pathname.split('/').filter(Boolean)
    setChosedKey([location.pathname])
    setOpenKeys(paths.map((item) => `/${item}`))
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
      // eslint-disable-next-line consistent-return
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
      })
      return treeDom
    },
    [hasPermisssion]
  )

  return (
    <Sider width={width} className={cn(className)} style={style} collapsed={collapsed} trigger={null} collapsible>
      <AntdMenu
        theme={theme}
        selectedKeys={chosedKey}
        openKeys={openKeys}
        onOpenChange={(keys) => setOpenKeys(keys as string[])}
        onSelect={(select) => history.push(select.key)}
        mode='inline'>
        {getMenuNodes(data)}
      </AntdMenu>
    </Sider>
  )
}
