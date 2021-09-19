/* eslint-disable react/display-name */
import React, { useEffect, useMemo, useState } from 'react'
import { Divider, Tooltip } from 'antd'
import { EyeOutlined, ToolOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
import PermissionTable from '../component/PermissionTable'

export type RoleListType = {
  key: number
  roleName: string
  sort: number
  desc: string
  status: 'enable' | 'disable'
}

export default function RolePermission() {
  const [dataList, setDataList] = useState<RoleListType[]>([])

  const columns = useMemo(() => {
    return [
      {
        title: '序号',
        key: 'sign',
        render: (text: RoleListType, recond: RoleListType) => recond.key
      },
      {
        title: '角色名',
        dataIndex: 'roleName'
      },
      {
        title: '描述',
        dataIndex: 'desc'
      },
      {
        title: '排序',
        dataIndex: 'sort'
      },
      {
        title: '状态',
        dataIndex: 'status',
        render: (text: string) => {
          return (
            <span style={{ color: text === 'enable' ? '#1890ff' : '#ff4d4f' }}>
              {text === 'enable' ? '启用' : '禁用'}
            </span>
          )
        }
      },
      {
        title: '操作',
        key: 'action',
        render: (text: RoleListType, recond: RoleListType) => {
          return (
            <>
              <Tooltip title='查看'>
                <EyeOutlined style={{ color: '#00a854' }} onClick={() => {}} />
              </Tooltip>
              <Divider type='vertical' />
              <Tooltip title='修改'>
                <ToolOutlined style={{ color: '#1890ff' }} />
              </Tooltip>
              <Divider type='vertical' />
              <Tooltip title='分配角色'>
                <EditOutlined style={{ color: '#1890ff' }} />
              </Tooltip>
              <Divider type='vertical' />
              <Tooltip title='删除'>
                <DeleteOutlined style={{ color: '#ff4d4f' }} />
              </Tooltip>
            </>
          )
        }
      }
    ]
  }, [])

  useEffect(() => {
    setDataList([
      {
        key: 1,
        roleName: '管理员',
        desc: '管理员拥有全部权限',
        sort: 1,
        status: 'enable'
      },
      {
        key: 2,
        roleName: '普通用户',
        desc: '普通用户拥有部分权限',
        sort: 2,
        status: 'disable'
      }
    ])
  }, [])
  return (
    <PermissionTable<RoleListType> title='添加角色' placeholder='请输入角色名' columns={columns} dataList={dataList} />
  )
}
