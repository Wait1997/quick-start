import React, { useCallback, useMemo, useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Layout, Menu as AntdMenu } from 'antd'
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
  const [chosedKey, setChosedKey] = useState<string[]>([])
  const [openKeys, setOpenKeys] = useState<string[]>([])

  return (
    <Sider width={width} className={cn(className)} style={style} collapsed={collapsed} trigger={null} collapsible>
      <AntdMenu
        theme={theme}
        selectedKeys={chosedKey}
        openKeys={openKeys}
        onOpenChange={(keys) => setOpenKeys(keys as string[])}
        onClick={(select) => history.push(select.key)}
        mode='inline'>
        11111
      </AntdMenu>
    </Sider>
  )
}
