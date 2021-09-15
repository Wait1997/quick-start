import React from 'react'
import { Switch } from 'antd'
import StandardTable from './EditTable'
import './index.less'

export default class EditTable extends React.Component {
  state = {}

  render() {
    return (
      <>
        <div className='switch'>
          <Switch checked />
        </div>
        <StandardTable />
      </>
    )
  }
}
