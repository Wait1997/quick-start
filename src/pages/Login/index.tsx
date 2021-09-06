/* eslint-disable unicorn/consistent-function-scoping */
import React, { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Button, Form, Input, Checkbox, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { LoginReqType } from 'Api/login'
import { onLogin } from 'Src/store/actions/auth'
import './index.less'

export type FormType = LoginReqType & { remember: boolean }

export default function Login() {
  const history = useHistory()
  const dispatch = useDispatch()
  const [form] = Form.useForm()
  const elUserRef = useRef<Input>(null)
  const elPassRef = useRef<Input>(null)
  const [checked, setChecked] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleUserInfo = (token: string) => {}

  const onSubmit = (values: FormType) => {
    const { username, password } = values
    setLoading(true)
    try {
      message.success('登录成功')
      dispatch(onLogin({ username, password }))
      // handleUserInfo(token)
    } catch (error) {
      message.error(error)
    }
  }

  useEffect(() => {
    if (localStorage.getItem('user')) {
      const user = JSON.parse(localStorage.getItem('user') as string)
      if (user) {
        setChecked(true)
        form.setFieldsValue({
          username: user.username,
          password: user.password
        })
      }
    } else if (elUserRef.current) {
      elUserRef.current.focus()
    }
  }, [form])

  return (
    <div className='login-form'>
      <Form form={form} initialValues={{ remember: true }} onFinish={onSubmit}>
        <div className='login-name'>账号密码登录</div>
        <Form.Item
          name='username'
          rules={[
            {
              min: 3,
              message: '最少字符为3个字符'
            },
            {
              max: 12,
              message: '最大长度为12个字符'
            },
            { required: true, message: '请输入账号' }
          ]}>
          <Input
            ref={elUserRef}
            size='large'
            prefix={<UserOutlined className='username-icon' />}
            placeholder='admin/user'
          />
        </Form.Item>
        <Form.Item
          name='password'
          rules={[
            {
              min: 6,
              message: '最少字符为3个字符'
            },
            {
              max: 18,
              message: '最大长度为18个字符'
            },
            { required: true, message: '请输入密码' }
          ]}>
          <Input
            ref={elPassRef}
            size='large'
            prefix={<LockOutlined className='password-icon' />}
            type='password'
            placeholder='123456/123456'
          />
        </Form.Item>
        <Form.Item name='remember' valuePropName='checked'>
          <Checkbox
            checked={checked}
            onChange={(e) => {
              setChecked(e.target.value)
            }}>
            记住密码
          </Checkbox>
        </Form.Item>
        <Form.Item>
          <Button className='login-button' type='primary' loading={loading} htmlType='submit'>
            {loading ? '请稍后' : '登录'}
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
