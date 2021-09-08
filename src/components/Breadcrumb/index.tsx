import React, { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { Breadcrumb as AntdBreadcrumb } from 'antd'
import { MenuType } from 'Utils/menuList'
import './index.less'

const { Item } = AntdBreadcrumb

export interface BreadType {
  menuList: MenuType[]
}

export default function Breadcrumb({ menuList }: BreadType) {
  const location = useLocation()

  return (
    <div className='breadcrumb'>
      <AntdBreadcrumb>
        <Item>首页</Item>
        <Item>权限</Item>
        <Item>管理员</Item>
      </AntdBreadcrumb>
    </div>
  )
}
