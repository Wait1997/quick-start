import React, { useCallback, useMemo, useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Layout, Menu as AntdMenu } from 'antd'
import { cloneDeep } from 'lodash'
import { Menu } from 'Src/models/type'
import cn from 'classnames'

const { Sider } = Layout
const { SubMenu, Item } = AntdMenu

export interface MenuProps {
  data: Menu[]
  width?: number
  theme?: 'light' | 'dark'
  collapsed: boolean
  className?: string
  style?: React.CSSProperties
}

export default function MenuSide({ data, width = 200, theme = 'dark', collapsed, className, style }: MenuProps) {
  const history = useHistory()
  const location = useLocation()
  const [chosedKey, setChosedKey] = useState<string[]>([])
  const [openKeys, setOpenKeys] = useState<string[]>([])

  useEffect(() => {
    const paths = location.pathname.split('/').filter(Boolean)
    setChosedKey([location.pathname])
    setOpenKeys(paths.map((item) => `/${item}`))
  }, [location.pathname])

  const dataToJson = useCallback((one: Menu | null, menus: Menu[]): Menu[] => {
    const kids = !one
      ? menus.filter((item: Menu) => !item.parent)
      : menus.filter((item: Menu) => item.parent === one.id)
    for (const item of kids) {
      item.children = dataToJson(item, menus)
    }
    return kids
  }, [])

  const makeTreeDom = useCallback((menus: Menu[]) => {
    return menus.map((item) =>
      item.children && item.children.length > 0 ? (
        <SubMenu key={item.url} title={item.title}>
          {makeTreeDom(item.children)}
        </SubMenu>
      ) : (
        <Item key={item.url}>
          {!item.parent && item.icon ? (
            <>
              <span>{item.title}</span>
            </>
          ) : (
            <span>{item.title}</span>
          )}
        </Item>
      )
    )
  }, [])

  const treeDom: React.ReactNode = useMemo(() => {
    const menu = cloneDeep(data)
    menu.sort((a, b) => a.sorts - b.sorts)
    const sourceData = dataToJson(null, menu)
    const tree = makeTreeDom(sourceData)
    return tree
  }, [data, dataToJson, makeTreeDom])

  return (
    <Sider width={width} className={cn(className)} style={style} collapsed={collapsed} trigger={null} collapsible>
      <AntdMenu
        theme={theme}
        selectedKeys={chosedKey}
        openKeys={openKeys}
        onOpenChange={(keys) => setOpenKeys(keys as string[])}
        onClick={(select) => history.push(select.key)}
        mode='inline'>
        {treeDom}
      </AntdMenu>
    </Sider>
  )
}
