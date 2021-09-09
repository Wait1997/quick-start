import React from 'react'
import ProForm from '../component/ProForm'

export default function QueryTable() {
  // eslint-disable-next-line unicorn/consistent-function-scoping
  const handleQuery = (values: any) => {}
  return (
    <>
      <ProForm count={2} handleQuery={handleQuery} isExpand />
    </>
  )
}
