import React from 'react'
import { Point } from 'View/content/components/mouse'

export default function Wind({ mouse }: { mouse: Point }) {
  const { x, y } = mouse
  return (
    <>
      <div style={{ color: 'pink' }}>
        {x}|{y}
      </div>
      <img style={{ width: 120, height: 120 }} src={require('Assets/image/wind.jpg')} alt='阿凤' />
    </>
  )
}
