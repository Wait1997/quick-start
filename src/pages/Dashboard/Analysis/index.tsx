import React, { useEffect, useState } from 'react'
import { Row, Col } from 'antd'
import useTitle from 'Src/hooks/useTitle'
import IntroduceRow from './IntroduceRow'
import PopularityCard from './PopularityCard'
import TopSearch from './TopSearch'
import SalesRates from './SalesRates'
import OfflineData from './OfflineData'

export default function Analysis() {
  useTitle()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(false)
  }, [])
  return (
    <>
      <IntroduceRow loading={loading} />
      <PopularityCard />
      <Row gutter={[24, 24]} style={{ marginTop: 24, marginBottom: 24 }}>
        <Col xl={12} lg={24} md={24} sm={24} xs={24}>
          <TopSearch
            tableData={[
              {
                key: 1,
                rank: 1,
                keyWords: '搜索关键词1',
                user: 234,
                up: 23
              },
              {
                key: 2,
                rank: 2,
                keyWords: '搜索关键词2',
                user: 237,
                up: 23
              },
              {
                key: 3,
                rank: 2,
                keyWords: '搜索关键词2',
                user: 237,
                up: 23
              },
              {
                key: 4,
                rank: 2,
                keyWords: '搜索关键词2',
                user: 237,
                up: 23
              },
              {
                key: 5,
                rank: 2,
                keyWords: '搜索关键词2',
                user: 237,
                up: 23
              }
            ]}
          />
        </Col>
        <Col xl={12} lg={24} md={24} sm={24} xs={24}>
          <SalesRates />
        </Col>
      </Row>
      <OfflineData />
    </>
  )
}
