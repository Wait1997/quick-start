/* eslint-disable no-console */
/* eslint-disable unicorn/consistent-function-scoping */
import React, { useState } from 'react'
import { Form, message, Popover } from 'antd'
import { CloseCircleOutlined } from '@ant-design/icons'
import FormCard from './FormCard'
import FormTopItem from './FormTopItem'
import FormBottomItem from './FormBottomItem'
import FormTable from './FormTable'
import FormFooter from './FormFooter'
import './index.less'

export default function HighForm() {
  const [form] = Form.useForm()
  const [errorList, setErrorList] = useState<number[]>([])

  const submit = (values: any) => {
    console.log(values)
    message.success('success')
  }

  const submitFailed = ({ errorFields }: { values: any; errorFields: any; outOfDate: any }) => {
    console.log(errorFields)
    setErrorList([1])
  }

  return (
    <Form form={form} onFinish={submit} onFinishFailed={submitFailed}>
      <FormCard title='仓库管理' className='card-wrap'>
        <FormTopItem />
      </FormCard>
      <FormCard title='任务管理' className='card-wrap'>
        <FormBottomItem />
      </FormCard>
      <FormCard title='成员管理'>
        <FormTable />
      </FormCard>
      <FormFooter
        htmltype='submit'
        reset={() => {
          form.resetFields()
        }}>
        {errorList && errorList.length > 0 && (
          <Popover placement='top' title={<span>表单验证信息</span>} content={<div>111</div>} trigger='click'>
            <span className='footer-form-icon-wrap'>
              <CloseCircleOutlined className='footer-form-icon-tip' />
              <span className='footer-form-num'>12</span>
            </span>
          </Popover>
        )}
      </FormFooter>
    </Form>
  )
}
