import React from 'react'
import Router from 'Router/index'
import { Provider } from 'react-redux'
import LangProvider from 'Components/LangProvider'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
// import enUS from 'antd/es/locale/en_US'
import store from './store'

export default function App() {
  return (
    <LangProvider>
      <ConfigProvider locale={zhCN}>
        <Provider store={store}>
          <Router />
        </Provider>
      </ConfigProvider>
    </LangProvider>
  )
}
