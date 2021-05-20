import React from 'react'
import Header from 'Components/Header'
import { mathA } from 'Utils/math'
import styles from './app.less'

interface IProps {
  name: string
  age: number
}

function App(props: IProps) {
  const { name, age } = props
  return (
    <div className={styles.app}>
      <Header />
      傻逼玩意---hahahahxasdlkasleqwiueqiu
      <span>{`Hello! I'm ${name}, ${age} yearssss old!!`}</span>
      {mathA(0, 11)}
    </div>
  )
}

export default App
