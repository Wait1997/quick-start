import React, { memo } from 'react'
import { Tabs, Row, Col } from 'antd'
import { RingProgress, Line } from '@ant-design/charts'
import ProCard from 'Pages/Dashboard/component/ProCard'

const { TabPane } = Tabs

const CustomTab = memo(function CustomTab() {
  return (
    <Row gutter={8} style={{ width: 138, margin: '8px 0' }}>
      <Col span={12}>
        <div>
          <div>门店1</div>
          <div>转化率</div>
          <div>20%</div>
        </div>
      </Col>
      <Col span={12} style={{ paddingTop: 36 }}>
        <RingProgress radius={1} innerRadius={0.8} percent={0.8} height={60} width={60} />
      </Col>
    </Row>
  )
})

export default function OfflineData() {
  return (
    <ProCard loading={false} bodyStyle={{ padding: 24 }}>
      <Tabs>
        <TabPane tab={<CustomTab />}>
          <Line
            data={[
              {
                date: '10:00',
                value: 123
              }
            ]}
            xField='date'
            yField='value'
          />
        </TabPane>
      </Tabs>
    </ProCard>
  )
}
