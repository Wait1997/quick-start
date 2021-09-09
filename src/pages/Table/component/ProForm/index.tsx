import React, { useEffect, useState, useMemo } from 'react'
import { Form, Input, Select, DatePicker, Button, Row, Col, Space } from 'antd'
import Collapse from '../Collapse'
import './index.less'

const { Option } = Select

export default function ProForm({
  count = 2,
  isExpand = true,
  handleQuery
}: {
  count?: number
  isExpand?: boolean
  handleQuery: (values: any) => void
}) {
  const formElement = useMemo(() => {
    return [
      <Col xl={6} lg={8} key='name'>
        <Form.Item label='规则名称' name='name'>
          <Input placeholder='请输入' />
        </Form.Item>
      </Col>,
      <Col xl={6} lg={8} key='desc'>
        <Form.Item label='描述' name='desc'>
          <Input placeholder='请输入' />
        </Form.Item>
      </Col>,
      <Col xl={6} lg={8} key='serveCount'>
        <Form.Item label='服务调用次数' name='serveCount'>
          <Input placeholder='请输入' />
        </Form.Item>
      </Col>,
      <Col xl={6} lg={8} key='status'>
        <Form.Item label='状态' name='status'>
          <Select placeholder='请选择'>
            <Option value='jack'>Jack</Option>
            <Option value='lucy'>Lucy</Option>
          </Select>
        </Form.Item>
      </Col>,
      <Col xl={6} lg={8} key='serveTime'>
        <Form.Item label='上次调用时间' name='serveTime'>
          <DatePicker style={{ width: '100%' }} placeholder='请选择' />
        </Form.Item>
      </Col>
    ]
  }, [])
  const [form] = Form.useForm()
  const [expand, setExpand] = useState(() => isExpand)
  const [formList, setFormList] = useState(formElement)

  useEffect(() => {
    if (expand) {
      setFormList([...formElement])
    } else {
      setFormList(formElement.slice(0, count))
    }
  }, [expand, count, formElement])

  const queryForm = (values: any) => {
    const serveTime = values.serveTime && values.serveTime.format('YYYY-MM-DD')
    handleQuery({
      ...values,
      serveTime
    })
  }

  return (
    <div className='table-form'>
      <Form form={form} onFinish={queryForm}>
        <Row gutter={16} style={{ justifyContent: 'space-between' }}>
          {formList.map((Item) => Item)}
          <Col xl={6} lg={8}>
            <Row justify='end'>
              <Col>
                <Form.Item>
                  <Space>
                    <Button
                      onClick={() => {
                        form.resetFields()
                        handleQuery({
                          name: '',
                          desc: '',
                          serveCount: '',
                          serveTime: ''
                        })
                      }}>
                      重置
                    </Button>
                    <Button htmlType='submit' type='primary'>
                      查询
                    </Button>
                    <Collapse
                      expand={expand}
                      handleCollapse={(value) => {
                        setExpand(value)
                      }}
                    />
                  </Space>
                </Form.Item>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </div>
  )
}
