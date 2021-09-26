import React, { useMemo } from 'react'
import { Table } from 'antd'
import { ColumnsType } from 'antd/es/table/interface'

export default function FormTable() {
  const columns: ColumnsType<any> = useMemo(() => {
    return [
      {
        title: '成员姓名',
        key: 'name',
        dataIndex: 'name'
      },
      {
        title: '工号',
        key: 'worknum',
        dataIndex: 'worknum'
      },
      {
        title: '所属部门',
        key: 'department',
        dataIndex: 'department'
      },
      {
        title: '操作',
        key: 'action',
        render: (text, recond) => <span>编辑</span>
      }
    ]
  }, [])
  return <Table columns={columns} />
}
