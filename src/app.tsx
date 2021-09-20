import React from 'react'
import Router from 'Router/index'
import { Provider } from 'react-redux'
import LangProvider from 'Components/LangProvider'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import store from './store'
import { getLang } from './locales'

export default function App() {
  const lang = getLang()
  return (
    <LangProvider lang={lang}>
      <Provider store={store}>
        <ConfigProvider locale={zhCN}>
          <Router />
        </ConfigProvider>
      </Provider>
    </LangProvider>
  )
}
