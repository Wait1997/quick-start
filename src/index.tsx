import React from 'react'
import ReactDom from 'react-dom'
import App from './app'
import 'normalize.css'

if (module && module.hot) {
  module.hot.accept()
}

ReactDom.render(<App name='vortesnail' age={30} />, document.querySelector('#root'))
