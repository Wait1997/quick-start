import React from 'react'
import Header from 'Components/Header'
import styles from './app.less'

interface IProps {
  name: string
  age: number
  sex?: boolean
}

export default function App(props: IProps): JSX.Element {
  const { name, age } = props
  return (
    <>
      <div className={styles.app}>
        <Header />
        <span>{`Hello! I'm ${name}, ${age} yearssss old!!`}</span>
      </div>
      <div className={styles.wrap} />
    </>
  )
}
