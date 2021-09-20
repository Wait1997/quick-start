/* eslint-disable react/display-name */
import React, { useEffect, useMemo, useState } from 'react'
import { Divider, Tooltip } from 'antd'
import { EyeOutlined, ToolOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
import useTitle from 'Src/hooks/useTitle'
import PermissionTable from '../component/PermissionTable'

export type DataListType = {
  key: number
  user: string
  phone: string
  email: string
  desc: string
  status: 'enable' | 'disable'
}

export default function User() {
  useTitle()
  const [dataList, setDataList] = useState<DataListType[]>([])

  const columns = useMemo(() => {
    return [
      {
        title: '序号',
        key: 'sign',
        render: (text: DataListType, recond: DataListType) => recond.key
      },
      {
        title: '用户名',
        dataIndex: 'user'
      },
      {
        title: '联系方式',
        dataIndex: 'phone'
      },
      {
        title: '邮箱',
        dataIndex: 'email'
      },
      {
        title: '描述',
        dataIndex: 'desc'
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
        render: (text: DataListType, recond: DataListType) => {
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
        user: 'admin',
        phone: '15000558443',
        email: '1433193222@qq.com',
        desc: '管理员',
        status: 'enable'
      },
      {
        key: 2,
        user: 'user',
        phone: '13978230124',
        email: '1433193222@qq.com',
        desc: '普通用户',
        status: 'disable'
      },
      {
        key: 3,
        user: 'user',
        phone: '18815610633',
        email: '171371923@qq.com',
        desc: '普通用户',
        status: 'enable'
      },
      {
        key: 4,
        user: 'user',
        phone: '15000000000',
        email: '1433193222@qq.com',
        desc: '普通用户',
        status: 'disable'
      }
    ])
  }, [])

  return (
    <PermissionTable<DataListType> title='添加用户' placeholder='请输入用户名' columns={columns} dataList={dataList} />
  )
}
