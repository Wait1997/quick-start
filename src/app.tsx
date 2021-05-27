import React from 'react'
import Router from 'Router/index'
import styles from './app.less'

export default function App() {
  return (
    <div className={styles.app}>
      <Router />
    </div>
  )
}
