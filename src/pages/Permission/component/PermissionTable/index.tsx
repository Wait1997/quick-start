import React from 'react'
import { Table } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import PermissionForm from '../PermissionForm'
import './index.less'

const selectedList = [
  { value: 'enable', title: '启用' },
  { value: 'disable', title: '禁用' }
]

export interface PermissionTableProps<T> {
  title: string
  placeholder?: string
  dataList: T[]
  columns: ColumnsType<any>
}

export default function PermissionTable<T>({
  title,
  placeholder = '请输入',
  dataList,
  columns
}: PermissionTableProps<T>) {
  return (
    <>
      <PermissionForm title={title} placeholder={placeholder} selectedList={selectedList} />
      <div className='permission-table'>
        <Table columns={columns} dataSource={dataList} />
      </div>
    </>
  )
}
