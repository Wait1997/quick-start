import React from 'react'
import { Form, Row, Col, Input, Select, DatePicker } from 'antd'
import './index.less'

const { Option } = Select
const { TimePicker } = DatePicker

const formColResponsiveProps = {
  xs: 24,
  sm: 24,
  md: 12,
  lg: 12,
  xl: 8
}

export default function FormBottomItem() {
  return (
    <Row gutter={16}>
      <Col {...formColResponsiveProps}>
        <Form.Item label='任务名' labelAlign='left' className='form-item' colon={false}>
          <Input placeholder='请输入' />
        </Form.Item>
      </Col>
      <Col {...formColResponsiveProps}>
        <Form.Item labelAlign='left' label='任务描述' className='form-item' colon={false}>
          <Input placeholder='请输入' />
        </Form.Item>
      </Col>
      <Col {...formColResponsiveProps}>
        <Form.Item labelAlign='left' label='执行人' className='form-item' colon={false}>
          <Select placeholder='请选择'>
            <Option value='fengfeng'>凤凤</Option>
            <Option value='afeng'>阿凤</Option>
          </Select>
        </Form.Item>
      </Col>
      <Col {...formColResponsiveProps}>
        <Form.Item labelAlign='left' label='责任人' className='form-item' colon={false}>
          <Select placeholder='请选择'>
            <Option value='fengfeng'>凤凤</Option>
            <Option value='afeng'>阿凤</Option>
          </Select>
        </Form.Item>
      </Col>
      <Col {...formColResponsiveProps}>
        <Form.Item labelAlign='left' label='生效日期' className='form-item' colon={false}>
          <TimePicker style={{ width: '100%' }} />
        </Form.Item>
      </Col>
      <Col {...formColResponsiveProps}>
        <Form.Item labelAlign='left' label='任务类型' className='form-item' colon={false}>
          <Select placeholder='请选择'>
            <Option value='private'>私密</Option>
            <Option value='public'>公开</Option>
          </Select>
        </Form.Item>
      </Col>
    </Row>
  )
}
