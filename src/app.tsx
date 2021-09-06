import React from 'react'
import Router from 'Router/index'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import store from './store'

export default function App() {
  return (
    <Provider store={store}>
      <ConfigProvider locale={zhCN}>
        <Router />
      </ConfigProvider>
    </Provider>
  )
}
