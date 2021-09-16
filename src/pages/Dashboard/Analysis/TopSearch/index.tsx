import React, { memo, useMemo } from 'react'
import { Dropdown, Menu, Tooltip, Row, Col, Table } from 'antd'
import { TinyArea } from '@ant-design/charts'
import ProCard from 'Pages/Dashboard/component/ProCard'
import { EllipsisOutlined, InfoCircleOutlined, CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons'
import './index.less'

const { Item } = Menu

const Title = memo(function Title({ title }: { title: React.ReactNode }) {
  return (
    <div>
      <span>{title}</span>
      <Tooltip title='指标说明'>
        <InfoCircleOutlined />
      </Tooltip>
    </div>
  )
})

const TopSign = memo(function TopSign({ count, rate, flag }: { count: number; rate: number; flag: 'up' | 'down' }) {
  return (
    <div>
      <span>{count}</span>
      <span>
        {rate}
        {flag === 'up' ? <CaretUpOutlined /> : <CaretDownOutlined />}
      </span>
    </div>
  )
})

export interface TopSearchProps {
  tableData: Array<{ key: number; rank: number; keyWords: string; user: number; up: number }>
}

export default function TopSearch({ tableData }: TopSearchProps) {
  const columns = useMemo(() => {
    return [
      {
        title: '排名',
        dataIndex: 'rank',
        key: 'rank'
      },
      {
        title: '搜索关键词',
        dataIndex: 'keyWords',
        key: 'keyWords'
      },
      {
        title: '用户数',
        dataIndex: 'user',
        key: 'user'
      },
      {
        title: '周涨幅',
        dataIndex: 'up',
        key: 'up'
      }
    ]
  }, [])

  const extraEl = useMemo(() => {
    return (
      <Dropdown
        overlay={
          <Menu>
            <Item key='1'>操作一</Item>
            <Item key='2'>操作一</Item>
          </Menu>
        }
        placement='bottomRight'>
        <EllipsisOutlined />
      </Dropdown>
    )
  }, [])

  return (
    <ProCard loading={false} title='线上热门搜索' extra={extraEl} bodyStyle={{ padding: 24 }}>
      <Row gutter={[24, 24]}>
        <Col span={12}>
          <Title title='搜索用户数' />
          <TopSign flag='down' count={12321} rate={25.1} />
          <div className='tiny-wrap'>
            <TinyArea data={[264, 417, 438, 887, 309, 397, 550, 575, 563, 430]} autoFit smooth />
          </div>
        </Col>
        <Col span={12}>
          <Title title='人均搜索次数' />
          <TopSign flag='up' count={2.7} rate={26.1} />
          <div className='tiny-wrap'>
            <TinyArea data={[264, 417, 438, 887, 309, 397, 550, 575, 563, 430]} autoFit smooth />
          </div>
        </Col>
      </Row>
      <Table
        size='small'
        columns={columns}
        dataSource={tableData}
        pagination={{ total: 10, current: 1, pageSize: 10, onChange: () => {} }}
      />
    </ProCard>
  )
}
