import React, { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Dispatch } from 'Src/store'
import { Button, Form, Input, Checkbox, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { LoginReqType } from 'Api/login'
import { Menu, Power, Role, MenuAndPower, UserBasicInfo, UserInfo } from 'Src/models/type'
import './index.less'

export type FormType = LoginReqType & { remember: boolean }

export default function Login() {
  const history = useHistory()
  const dispatch = useDispatch<Dispatch>()
  const [form] = Form.useForm()
  const elUserRef = useRef<Input>(null)
  const elPassRef = useRef<Input>(null)
  const [checked, setChecked] = useState(true)
  const [loading, setLoading] = useState(false)

  const loginIn = async ({ username, password }: LoginReqType) => {
    let userBasicInfo: UserBasicInfo | null = null
    let roles: Role[] = []
    let menus: Menu[] = []
    let powers: Power[] = []

    const loginRes = await dispatch.app.onLogin({
      username,
      password
    })
    if (loginRes?.code !== 200 || !loginRes.data) {
      return loginRes
    }
    userBasicInfo = loginRes.data
    // 2.根据角色id获取角色信息 (角色信息中有该角色拥有的菜单id和权限id)
    const rolesData = await dispatch.sys.getRoleById(userBasicInfo.roles)
    if (!rolesData || rolesData.code !== 200) {
      return rolesData
    }
    roles = rolesData.data.filter((item) => item.conditions === 1) // conditions 1启用 -1禁用
    // 3.根据菜单id 获取菜单信息
    const menuAndPowers = roles.reduce((a: MenuAndPower[], b: Role): MenuAndPower[] => [...a, ...b.menuAndPowers], [])
    const menusData = await dispatch.sys.getMenusById([...new Set(menuAndPowers.map((item) => item.menuId))])
    if (!menusData || menusData.code !== 200) {
      return menusData
    }
    menus = menusData.data.filter((item) => item.conditions === 1)

    const powerData = await dispatch.sys.getPowerById([
      ...new Set(menuAndPowers.reduce((a: number[], b: MenuAndPower): number[] => [...a, ...b.powers], []))
    ])
    if (!powerData || powerData.code !== 200) {
      return powerData
    }
    powers = powerData.data.filter((item) => item.conditions === 1)
    return { code: 200, data: { userBasicInfo, roles, menus, powers } }
  }

  const onSubmit = async (values: FormType): Promise<void> => {
    setLoading(true)
    const res = await loginIn({ username: values.username, password: values.password })
    if (res && res.code === 200) {
      message.success('登录成功')
      if (checked) {
        localStorage.setItem('user', JSON.stringify({ username: values.username, password: values.password }))
      } else {
        localStorage.removeItem('user')
      }
      sessionStorage.setItem('userinfo', JSON.stringify(res.data))
      await dispatch.app.setUserInfo(res.data as UserInfo)
      // 跳转到首页
      history.push('/')
    } else {
      message.error('登录失败')
    }
    setLoading(false)
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
        <Form.Item name='remember'>
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
