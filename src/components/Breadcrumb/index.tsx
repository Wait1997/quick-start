import React, { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { Breadcrumb as AntdBreadcrumb } from 'antd'
import { Menu } from 'Src/models/type'
import './index.less'

const { Item } = AntdBreadcrumb

export interface BreadType {
  menus: Menu[]
}

export default function Breadcrumb({ menus }: BreadType) {
  const location = useLocation()

  const breads = useMemo(() => {
    const breadList = []
    const { pathname } = location
    let parentId: number | null = null

    do {
      // eslint-disable-next-line no-loop-func
      const menuItem = menus.find((item) => item.id === parentId || item.url === pathname)
      if (menuItem) {
        breadList.unshift(<Item key={menuItem.id}>{menuItem.title}</Item>)
        parentId = menuItem.parent
      } else {
        parentId = null
      }
    } while (parentId)

    return breadList
  }, [location, menus])

  return (
    <div className='breadcrumb'>
      <AntdBreadcrumb>{breads}</AntdBreadcrumb>
    </div>
  )
}
