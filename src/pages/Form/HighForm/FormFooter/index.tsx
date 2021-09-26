import React from 'react'
import { Layout, Button, Space } from 'antd'
import cn from 'classnames'
import './index.less'

const { Footer } = Layout

export interface FormFooterProp {
  className?: string
}

export default function FormFooter({ className }: FormFooterProp) {
  return (
    <>
      <div className='form-footer-place' />
      <Footer className={cn('form-footer', className)} style={{ width: 'calc(100% - 208px)' }}>
        <Space>
          <Button>重置</Button>
          <Button type='primary'>提交</Button>
        </Space>
      </Footer>
    </>
  )
}
