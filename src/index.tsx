import React from 'react'
import ReactDom from 'react-dom'
import App from './app'

ReactDom.render(<App name='vortesnail' age={25} />, document.querySelector('#root'))
