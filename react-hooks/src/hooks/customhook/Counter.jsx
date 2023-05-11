import { useState } from 'react'
import useInterval from './useInterval'

const useCounter = (delay) => {
  const [count, setCount] = useState(0)
  const onTick = () => {
    setCount((c) => c + 1)
  }
  useInterval(onTick, delay)
  return count
}

const Counter = () => {
  const count = useCounter(1000)
  const [randomColor, setRandomColor] = useState('')
  const onTick = () => {
    const randomColor = `hsla(${Math.random() * 360}, 100%, 50%, 0.2)`
    setRandomColor(randomColor)
  }

  useInterval(onTick, 2000)

  return (
    <div className="flex ">
      <h1
        className=" text-[15px] px-3"
        style={{ backgroundColor: randomColor }}>
        Seconds passed:{count}
      </h1>
    </div>
  )
}

export default Counter
