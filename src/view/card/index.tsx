import React from 'react'
import { useHistory } from 'react-router-dom'
import { listData } from '../../mock/list'
import styles from './index.less'

export default function Card() {
  const {
    data: { list }
  } = listData

  const history = useHistory()

  return (
    <>
      {list.map((item) => (
        <div
          className={styles.list}
          key={item.id}
          onClick={() => {
            history.push(`/content/${item.id}`)
          }}>
          <span className={styles.list_no}>{item.id}</span>
          <span className={styles.title}>{item.title}</span>
        </div>
      ))}
    </>
  )
}
