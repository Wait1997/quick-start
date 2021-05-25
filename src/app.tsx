import React, { useEffect } from 'react'
import Header from 'Components/Header'
import styles from './app.less'
import { apiGetBanner, apiPostLogin } from './config/apiModule/main'

interface IProps {
  name: string
  age: number
  sex?: boolean
}

export default function App(props: IProps): JSX.Element {
  const { name, age } = props
  // useEffect(() => {
  //   apiGetBanner({ type: 0 }).then((res) => {})
  // })
  // useEffect(() => {
  //   apiPostLogin({ phone: '18815610633', password: 'xiong20151202108' }).then((res) => {
  //     console.log(res)
  //   })
  // })
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
