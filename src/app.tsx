import React, { useEffect } from 'react'
import Header from 'Components/Header'
import styles from './app.less'
import { apiGetBanner } from './config/apiModule/main'

interface IProps {
  name: string
  age: number
  sex?: boolean
}

export default function App(props: IProps): JSX.Element {
  const { name, age } = props
  useEffect(() => {
    apiGetBanner({ type: 0 })
  })
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
