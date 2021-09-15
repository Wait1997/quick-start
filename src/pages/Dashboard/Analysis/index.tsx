import React, { useEffect, useState } from 'react'
import IntroduceRow from '../component/IntroduceRow'
import PopularityCard from '../component/PopularityCard'

export default function Analysis() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(false)
  }, [])
  return (
    <>
      <IntroduceRow loading={loading} />
      <PopularityCard />
    </>
  )
}
