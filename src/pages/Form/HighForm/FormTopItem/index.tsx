import React from 'react'
import { Form, Row, Col, Input, Select, DatePicker } from 'antd'
import './index.less'

const { Option } = Select
const { RangePicker } = DatePicker

const formColResponsiveProps = {
  xs: 24,
  sm: 24,
  md: 12,
  lg: 12,
  xl: 8
}

export default function FormTopItem() {
  return (
    <Row gutter={16}>
      <Col {...formColResponsiveProps}>
        <Form.Item
          name='capsuleName'
          label='仓库名'
          labelAlign='left'
          className='form-item'
          colon={false}
          rules={[{ required: true, message: '请输入仓库名' }]}>
          <Input placeholder='请输入' />
        </Form.Item>
      </Col>
      <Col {...formColResponsiveProps}>
        <Form.Item
          name='capsuleDomain'
          labelAlign='left'
          label='仓库域名'
          className='form-item'
          colon={false}
          rules={[{ required: true, message: '请输入仓库域名' }]}>
          <Input addonBefore='http://' addonAfter='.com' placeholder='请输入' />
        </Form.Item>
      </Col>
      <Col {...formColResponsiveProps}>
        <Form.Item
          name='capsuleAdmin'
          labelAlign='left'
          label='仓库管理员'
          className='form-item'
          colon={false}
          rules={[{ required: true, message: '请选择仓库管理员' }]}>
          <Select placeholder='请选择'>
            <Option value='fengfeng'>凤凤</Option>
            <Option value='afeng'>阿凤</Option>
          </Select>
        </Form.Item>
      </Col>
      <Col {...formColResponsiveProps}>
        <Form.Item
          name='reviewPerson'
          labelAlign='left'
          label='审批人'
          className='form-item'
          colon={false}
          rules={[{ required: true, message: '请选择审批人' }]}>
          <Select placeholder='请选择'>
            <Option value='fengfeng'>凤凤</Option>
            <Option value='afeng'>阿凤</Option>
          </Select>
        </Form.Item>
      </Col>
      <Col {...formColResponsiveProps}>
        <Form.Item
          name='effectiveDate'
          labelAlign='left'
          label='生效日期'
          className='form-item'
          colon={false}
          rules={[{ required: true, message: '请选择生效日期' }]}>
          <RangePicker style={{ width: '100%' }} />
        </Form.Item>
      </Col>
      <Col {...formColResponsiveProps}>
        <Form.Item
          name='capsuleType'
          labelAlign='left'
          label='仓库类型'
          className='form-item'
          colon={false}
          rules={[{ required: true, message: '请选择仓库类型' }]}>
          <Select placeholder='请选择'>
            <Option value='private'>私密</Option>
            <Option value='public'>公开</Option>
          </Select>
        </Form.Item>
      </Col>
    </Row>
  )
}
