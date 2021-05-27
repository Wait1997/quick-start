import React, { useState } from 'react'

export type Point = {
  x: number
  y: number
}

export default function Mouse({ render }: { render: (mouse: Point) => JSX.Element }) {
  const [point, setPoint] = useState<Point>({ x: 0, y: 0 })
  return (
    <div
      onClick={(e) => {
        setPoint({ x: e.clientX, y: e.clientY })
      }}>
      {render(point)}
    </div>
  )
}
