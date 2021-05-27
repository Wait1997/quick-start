import React from 'react'
import { Switch, Route, useHistory, useLocation } from 'react-router-dom'
import { RouterType } from 'Router/route'
import Mouse from 'View/content/components/mouse'
import Wind from 'View/content/components/wind'
import styles from './index.less'

export default function Content(props: any) {
  const { routes } = props
  const { pathname } = useLocation()
  const history = useHistory()
  return (
    <>
      <div
        className={styles.desc}
        onClick={() => {
          history.push(`${pathname}/desc`)
        }}>
        hello,ts
      </div>
      <Mouse render={(mouse) => <Wind mouse={mouse} />} />
      <Switch>
        {routes.map((item: RouterType) => (
          <Route key={item.path} path={item.path} component={item.component} />
        ))}
      </Switch>
    </>
  )
}
