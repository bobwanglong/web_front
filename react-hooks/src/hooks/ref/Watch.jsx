import { useState, useRef } from 'react'

export default function Stopwatch() {
  const [startTime, setStartTime] = useState(null)
  const [now, setNow] = useState(null)
  const intervalRef = useRef(null)

  function handleStart() {
    setStartTime(Date.now())
    setNow(Date.now())
    // 每次点击开始时要保证 interval清零
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setNow(Date.now())
    }, 10)
  }

  function handleStop() {
    clearInterval(intervalRef.current)
  }

  let secondsPassed = 0
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000
  }
  function handleReset() {
    setNow(null)
  }
  return (
    <div
      className="bg-blue-300 text-white  text-center  rounded-2xl w-[300px] h-[100px]
    ">
      <h1>时间过去了： {secondsPassed.toFixed(3)}</h1>
      <button
        className=" text-gray-900
      "
        onClick={handleStart}>
        开始
      </button>
      &nbsp; &nbsp;
      <button className=" text-red-900" onClick={handleStop}>
        停止
      </button>
      &nbsp; &nbsp;
      <button className="text-1xl text-yellow-500" onClick={handleReset}>
        重置
      </button>
    </div>
  )
}
