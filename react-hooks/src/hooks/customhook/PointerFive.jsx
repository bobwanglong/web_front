import React from 'react'
import { usePointerPosition } from './usePointerPosition.js'
import { useEffect, useState } from 'react'

function useDelayedValue(value, delay) {
  const [delayValue, setDelayValue] = useState(value)

  useEffect(() => {
    setTimeout(() => {
      setDelayValue(value)
    }, delay)
  }, [value, delay])
  return delayValue
}

const PointerFive = () => {
  const pos1 = usePointerPosition()
  const pos2 = useDelayedValue(pos1, 100)
  const pos3 = useDelayedValue(pos2, 100)
  const pos4 = useDelayedValue(pos3, 100)
  const pos5 = useDelayedValue(pos4, 50)
  return (
    <div
      className="w-[500px] h-[500px] bg-slate-300
    ">
      <Dot position={pos1} opacity={1} />
      <Dot position={pos2} opacity={0.8} />
      <Dot position={pos3} opacity={0.6} />
      <Dot position={pos4} opacity={0.4} />
      <Dot position={pos5} opacity={0.2} />
      PointerFive
    </div>
  )
}
function Dot({ position, opacity }) {
  return (
    <div
      className={`absolute bg-pink-500 rounded-full w-[40px] h-[40px] top-[-20px] left-[-20px] pointer-events-none opacity-[${opacity}]
      `}
      style={{
        // position: 'absolute',
        // backgroundColor: 'pink',
        // borderRadius: '50%',
        // opacity,
        transform: `translate(${position.x}px, ${position.y}px)`,
        // pointerEvents: 'none',
        // left: -20,
        // top: -20,
        // width: 40,
        // height: 40,
      }}
    />
  )
}
export default PointerFive
