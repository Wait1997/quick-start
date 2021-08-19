import React from 'react'
import { Button, Form, Input } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import './index.less'

export default function Login() {
  return (
    <div className='login-form'>
      <Form>
        <div className='login-name'>账号密码登录</div>
        <Form.Item>
          <Input prefix={<UserOutlined className='site-form-item-icon' />} />
        </Form.Item>
        <Form.Item>
          <Input prefix={<LockOutlined className='site-form-item-icon' />} type='password' />
        </Form.Item>
        <Form.Item>
          <Button className='login-button' type='primary' htmlType='submit'>
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
