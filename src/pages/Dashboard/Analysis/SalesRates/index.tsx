import React, { useMemo } from 'react'
import { Radio, Dropdown, Menu } from 'antd'
import ProCard from 'Pages/Dashboard/component/ProCard'
import { Pie } from '@ant-design/charts'
import { EllipsisOutlined } from '@ant-design/icons'
import './index.less'

const { Item } = Menu

export default function SalesRates() {
  const extraEl = useMemo(() => {
    return (
      <div className='sales-extra'>
        <div className='sales-radio'>
          <Radio.Group defaultValue='all' size='middle'>
            <Radio.Button value='all'>全部渠道</Radio.Button>
            <Radio.Button value='online'>线上</Radio.Button>
            <Radio.Button value='stores'>门店</Radio.Button>
          </Radio.Group>
        </div>
        <div className='sales-drop'>
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
        </div>
      </div>
    )
  }, [])
  return (
    <ProCard title='销售额类别占比' extra={extraEl} loading={false} bodyStyle={{ padding: 24 }}>
      <div className='sales-pie'>
        <span className='sales-title'>销售额</span>
        <Pie
          style={{ height: 340 }}
          angleField='value'
          colorField='type'
          radius={1}
          innerRadius={0.64}
          legend={{
            layout: 'vertical',
            position: 'right-top'
          }}
          data={[
            {
              type: '分类一',
              value: 27
            },
            {
              type: '分类二',
              value: 25
            },
            {
              type: '分类三',
              value: 18
            },
            {
              type: '分类四',
              value: 15
            },
            {
              type: '分类五',
              value: 10
            },
            {
              type: '其他',
              value: 5
            }
          ]}
          autoFit
        />
      </div>
    </ProCard>
  )
}
