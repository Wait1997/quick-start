import React from 'react'
import Header from 'Components/Header'
import styles from './app.less'

interface IProps {
  name: string
  age: number
}

function App(props: IProps) {
  const { name, age } = props
  return (
    <>
      <div className={styles.app}>
        <Header />
        <span>{`Hello! I'm ${name}, ${age} yearssss old!!`}</span>
      </div>
      我是朱艳老公我是朱艳老公
      <div className={styles.wrap} />
    </>
  )
}

export default App
