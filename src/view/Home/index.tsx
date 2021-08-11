import React, { useEffect, useState } from 'react'

type Func = () => void

const renderQueue: Func[] = []
let isFirstrender = false

const tryRender = () => {
  const render = renderQueue.shift()
  if (!render) {
    return
  }
  setTimeout(() => {
    render() /* 执行下一段渲染 */
  }, 300)
}

export function renderHoc(WrapComponent: React.ComponentType<{ name: string; tryRender: () => void }>) {
  return function Index(props: { name: string }) {
    const [isRender, setRender] = useState(false)
    useEffect(() => {
      renderQueue.push(() => {
        setRender(true)
      })
      if (!isFirstrender) {
        tryRender()
        isFirstrender = true
      }
    }, [])
    return isRender ? <WrapComponent tryRender={tryRender} {...props} /> : <div>朱艳我老婆</div>
  }
}

export class Index extends React.Component<{ name: string; tryRender: () => void }> {
  componentDidMount() {
    // eslint-disable-next-line no-shadow
    const { name, tryRender } = this.props
    tryRender()
    // eslint-disable-next-line no-console
    console.log(`${name}hahah`)
  }

  render() {
    return <div>今天就拉屎deal</div>
  }
}

const Item = renderHoc(Index)

export default function Home() {
  return (
    <div>
      <Item name='zhuyan' />
      <Item name='djaskdja' />
    </div>
  )
}
