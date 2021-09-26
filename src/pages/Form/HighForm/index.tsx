import React from 'react'
import { Form } from 'antd'
import FormCard from './FormCard'
import FormTopItem from './FormTopItem'
import FormBottomItem from './FormBottomItem'
import FormTable from './FormTable'
import FormFooter from './FormFooter'
import './index.less'

export default function HighForm() {
  const [form] = Form.useForm()
  return (
    <Form form={form}>
      <FormCard title='仓库管理' className='card-wrap'>
        <FormTopItem />
      </FormCard>
      <FormCard title='任务管理' className='card-wrap'>
        <FormBottomItem />
      </FormCard>
      <FormCard title='成员管理'>
        <FormTable />
      </FormCard>
      <FormFooter />
    </Form>
  )
}
