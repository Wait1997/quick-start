import React, { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { Breadcrumb as AntdBreadcrumb } from 'antd'
import './index.less'

const { Item } = AntdBreadcrumb

export interface BreadType {
  menus: []
}

export default function Breadcrumb({ menus }: BreadType) {
  const location = useLocation()

  return (
    <div className='breadcrumb'>
      <AntdBreadcrumb>12121</AntdBreadcrumb>
    </div>
  )
}
