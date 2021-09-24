import React, { useEffect, useState, useMemo } from 'react'
import { Table, Modal, Checkbox } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import { CheckboxValueType } from 'antd/lib/checkbox/Group'
import TableRole from 'Pages/Permission/Role/TableRole'
import useTableRole, { TableRoleType } from 'Src/hooks/useTableRole'
import PermissionForm from '../PermissionForm'
import ModalForm from '../ModalForm'
import './index.less'

export type SelectedList = Array<{ value: 'enable' | 'disable'; title: string }>

export interface PermissionTableProps<T> {
  type: 'user' | 'role'
  title: string
  placeholder?: string
  dataList: T[]
  columns: ColumnsType<any>
  visible: boolean
  handleAdduser: () => void
  handleSearch: (values: any) => void
  modalTitle: React.ReactNode
  selectedList: SelectedList
  onOk: () => void
  onCancel: () => void
  pageIndex: number
  pageSize: number
  onChange: (pageIndex: number, pageSize?: number) => void
  roleVisible: boolean
  roleTitle: React.ReactNode
  currentRole?: string
  defaultCheckedValue?: CheckboxValueType[]
  onRoleSubmit: (checkedValue: CheckboxValueType[] | TableRoleType[]) => void
  roleCancel: () => void
}

export default function PermissionTable<T>({
  type,
  title,
  placeholder = '请输入',
  dataList,
  columns,
  visible,
  modalTitle,
  selectedList,
  handleAdduser,
  onOk,
  onCancel,
  pageIndex,
  pageSize,
  onChange,
  roleVisible,
  roleTitle,
  defaultCheckedValue,
  currentRole,
  onRoleSubmit,
  roleCancel,
  handleSearch,
  children
}: React.PropsWithChildren<PermissionTableProps<T>>) {
  const tableRole = useTableRole()
  const [checkedValue, setCheckedValue] = useState<CheckboxValueType[]>([])
  const [tableCheckedKeys, setTableCheckedKeys] = useState<string[]>([])
  const [treeTableData, setTreeTableData] = useState<TableRoleType[]>(tableRole)

  useEffect(() => {
    if (defaultCheckedValue) {
      setCheckedValue(defaultCheckedValue)
    }
  }, [defaultCheckedValue])

  useEffect(() => {
    if (treeTableData && treeTableData.length > 0) {
      const getKeys = (treeList: TableRoleType[]) => {
        return treeList.reduce((all: string[], item: TableRoleType) => {
          if (item.children) {
            all.push(...getKeys(item.children))
          }
          all.push(item.key as string)
          return all
        }, [])
      }
      const keys = getKeys(treeTableData)
      setTableCheckedKeys(keys)
    }
  }, [treeTableData])

  const permissionEl = useMemo(() => {
    if (type === 'user') {
      return (
        <Checkbox.Group
          options={[
            {
              label: '管理员',
              value: 'admin'
            },
            {
              label: '普通用户',
              value: 'user'
            }
          ]}
          value={checkedValue}
          onChange={(values) => {
            setCheckedValue(values)
          }}
        />
      )
    }
    return (
      <TableRole
        currentRole={currentRole as string}
        treeTableData={treeTableData}
        tableCheckedKeys={tableCheckedKeys}
        selectedTable={(values) => {
          setTreeTableData(values)
        }}
        setTableCheckedKeys={(keys) => {
          setTableCheckedKeys(keys)
        }}
      />
    )
  }, [currentRole, checkedValue, type, treeTableData, tableCheckedKeys])

  return (
    <>
      <PermissionForm
        title={title}
        placeholder={placeholder}
        selectedList={selectedList}
        handleAdduser={handleAdduser}
        handleSearch={handleSearch}
      />
      <div className='permission-table'>
        <Table columns={columns} dataSource={dataList} pagination={{ current: pageIndex, pageSize, onChange }} />
      </div>
      <Modal
        width={type === 'role' ? 840 : 520}
        visible={roleVisible}
        title={roleTitle}
        onOk={() => {
          onRoleSubmit(type === 'role' ? treeTableData : checkedValue)
        }}
        onCancel={roleCancel}
        mask={false}
        maskClosable={false}>
        {permissionEl}
      </Modal>
      <ModalForm visible={visible} title={modalTitle} onOk={onOk} onCancel={onCancel}>
        {children}
      </ModalForm>
    </>
  )
}
