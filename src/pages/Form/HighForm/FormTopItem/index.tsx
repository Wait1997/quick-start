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
        <Form.Item label='仓库名' labelAlign='left' className='form-item' colon={false}>
          <Input placeholder='请输入' />
        </Form.Item>
      </Col>
      <Col {...formColResponsiveProps}>
        <Form.Item labelAlign='left' label='仓库域名' className='form-item' colon={false}>
          <Input placeholder='请输入' />
        </Form.Item>
      </Col>
      <Col {...formColResponsiveProps}>
        <Form.Item labelAlign='left' label='仓库管理员' className='form-item' colon={false}>
          <Select placeholder='请选择'>
            <Option value='fengfeng'>凤凤</Option>
            <Option value='afeng'>阿凤</Option>
          </Select>
        </Form.Item>
      </Col>
      <Col {...formColResponsiveProps}>
        <Form.Item labelAlign='left' label='审批人' className='form-item' colon={false}>
          <Select placeholder='请选择'>
            <Option value='fengfeng'>凤凤</Option>
            <Option value='afeng'>阿凤</Option>
          </Select>
        </Form.Item>
      </Col>
      <Col {...formColResponsiveProps}>
        <Form.Item labelAlign='left' label='生效日期' className='form-item' colon={false}>
          <RangePicker style={{ width: '100%' }} />
        </Form.Item>
      </Col>
      <Col {...formColResponsiveProps}>
        <Form.Item labelAlign='left' label='仓库类型' className='form-item' colon={false}>
          <Select placeholder='请选择'>
            <Option value='private'>私密</Option>
            <Option value='public'>公开</Option>
          </Select>
        </Form.Item>
      </Col>
    </Row>
  )
}
