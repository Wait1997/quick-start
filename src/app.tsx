import React from 'react'
import Router from 'Router/index'
import { Provider } from 'react-redux'
import store from './store'

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}
