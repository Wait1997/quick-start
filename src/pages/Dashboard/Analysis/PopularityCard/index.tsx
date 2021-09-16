import React, { useCallback, useMemo, useState } from 'react'
import { Row, Col, DatePicker } from 'antd'
import cn from 'classnames'
import ProCard from '../../component/ProCard'
import ColumnCharts from './Charts'
import './index.less'

const { RangePicker } = DatePicker

export default function PopularityCard() {
  const tabList = useMemo(() => {
    return [
      {
        key: 'sales',
        tab: '销售额'
      },
      {
        key: 'views',
        tab: '访问量'
      }
    ]
  }, [])

  const [activeTabKey, setActiveKey] = useState('sales')

  const onTabChange = useCallback((key: string) => {
    setActiveKey(key)
  }, [])

  return (
    <ProCard
      className='pro-card'
      loading={false}
      activeTabKey={activeTabKey}
      tabList={tabList}
      tabBarExtraContent={
        <div className='extra-card'>
          <div className='extra-title'>
            <span className={cn('title', 'active')} onClick={() => {}}>
              今日
            </span>
            <span className={cn('title')} onClick={() => {}}>
              本周
            </span>
            <span className={cn('title')} onClick={() => {}}>
              本月
            </span>
            <span className={cn('title')} onClick={() => {}}>
              本年
            </span>
          </div>
          <RangePicker />
        </div>
      }
      onTabChange={onTabChange}>
      <Row>
        <Col xl={16} lg={12} md={12} sm={24} xs={24}>
          <ColumnCharts<string, number>
            style={{ padding: '0 0 32px 32px' }}
            xField='type'
            yField='value'
            data={[
              { value: 30, type: '1月' },
              { value: 40, type: '2月' },
              { value: 50, type: '3月' },
              { value: 40, type: '4月' },
              { value: 30, type: '5月' },
              { value: 40, type: '6月' },
              { value: 52, type: '7月' },
              { value: 40, type: '8月' },
              { value: 30, type: '9月' },
              { value: 40, type: '10月' },
              { value: 50, type: '11月' },
              { value: 40, type: '12月' }
            ]}
            isGroup={false}
          />
        </Col>
        <Col xl={8} lg={12} md={12} sm={24} xs={24}>
          <div className='count-rank'>
            <h4 className='count-title'>门店销售额排名</h4>
            <div className='count-list'>
              <div className='count-item'>
                <div className='count-left'>
                  <span className={cn('count-num', { 'count-ranking': true })}>1</span>
                  <span className='count-content'>工专路 0 号店</span>
                </div>
                <span className='count-right'>323,234</span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </ProCard>
  )
}
