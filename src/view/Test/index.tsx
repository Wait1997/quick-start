import React, { useEffect } from 'react'

export class Index extends React.Component {
  componentDidMount() {
    // console.log('zide')
  }

  render() {
    return <div>sadsadadaqdwdq</div>
  }
}

export default function Test() {
  useEffect(() => {
    // console.log('fude')
  }, [])
  return (
    <div>
      <Index />
    </div>
  )
}
