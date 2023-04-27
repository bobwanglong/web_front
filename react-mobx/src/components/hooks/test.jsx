// import { useState, useMemo } from 'react'
// const Child = ({ data }) => {
//   console.log('child render...', data.name)
//   return (
//     <div>
//       <div>child</div>
//       <div>{data.name}</div>
//     </div>
//   )
// }

import React, { useCallback, useMemo, useState } from 'react'

// const Hook = () => {
//   console.log('Hook render...')
//   const [count, setCount] = useState(0)
//   const [name, setName] = useState('rose')

//   // const data = {
//   //   name,
//   // }
//   const data = useMemo(() => {
//     return {
//       name,
//     }
//   }, [name])
//   return (
//     <div>
//       <div>{count}</div>
//       <button onClick={() => setCount(count + 1)}>update count </button>
//       <Child data={data} />
//     </div>
//   )
// }
// export default Hook
const Hook = () => {
  const [n, setN] = useState(0)
  const [m, setM] = useState({ M: 1 })
  const [x, setX] = useState(10)
  // const nData = n
  // const mData = m
  // 使用useMemo优化
  const nData = useMemo(() => {
    return () => {
      setN(n + 1)
    }
  }, [n])
  const mData = useMemo(() => {
    return () => {
      setM({ M: m.M + 1 })
    }
  }, [m])
  console.log('执行的是hook')

  // const xAdd = useMemo(() => {
  //   return () => {
  //     setX(x + 1)
  //   }
  // }, [x])
  // useMemo 语法糖== useCallback
  const xAdd = useCallback(() => {
    setX(x + 1)
  }, [x])

  return (
    <>
      <div>
        最外层的盒子
        {/* <ChildN value={nData}></ChildN> */}
        {/* <ChildM value={mData}></ChildM> */}
        <ChildN value={n} click={nData} />
        <ChildM value={m} click={mData} />
        <ChildX value={x} click={xAdd} />
        <button onClick={nData}>n+1</button>
        <button onClick={mData}>m+1</button>
        <button onClick={xAdd}>X+1</button>
      </div>
    </>
  )
}
const ChildN = React.memo(({ value, click }) => {
  console.log('执行了N组件')
  return (
    <>
      <div>N组件上的n:{value}</div>
      <button onClick={click}>nn+1</button>
    </>
  )
})
const ChildM = React.memo(({ value, click }) => {
  console.log('执行了M组件')
  return (
    <>
      <div>M组件上的m:{value.M}</div>
      <button onClick={click}>mm+1</button>
    </>
  )
})
const ChildX = React.memo((props) => {
  console.log('执行子组件x了')
  return <div>子组件X上的X：{props.value}</div>
})

export default Hook
