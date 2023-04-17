/**
 * 使用依赖项控制副作用的执行时机
 */
import { useEffect, useState } from "react"

function EffectApp () {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // 1.不添加依赖项：组件首次渲染执行一次，以及不管是哪个状态更改引起组件更新时都会重新执行
    // a.组件初始渲染
    // b.组件更新(不管是哪个状态引起的更新)
    // console.log("副作用执行了")


    // 2.添加空数组，组件只在首次渲染时执行一次
    console.log("副作用执行了")
  }, [])
  return (
    <button onClick={() => { setCount(count + 1) }}>{count}</button>
  )
}
// 3.添加特定依赖项
// 副作用函数在首次渲染时执行，在依赖项发生变化时重新执行
// 注意事项：useEffect回调函数中用到的数据，比如下面函数的count就是依赖数据，就应该出现在依赖项数组中
function EffectAppMore () {
  const [count, setCount] = useState(1)
  const [name, setName] = useState("bob")

  useEffect(() => {
    console.log("副作用执行了")
  }, [count]) // count代表依赖项数据
  return (
    <>
      <button onClick={() => { setCount(count + 1) }}>{count}</button>
      <button onClick={() => { setName("wang") }}>{name}</button>
    </>

  )
}

// 4.清除副作用
// 如果想清楚副作用，可以在副作用函数中的末尾return一个新的函数，在新的函数中编写清理副作用的逻辑
// 需要注意执行时机为：
// 1.组件卸载时自动执行
// 2.组件更新时，下一个useEffect副作用函数执行之前自动执行

const EffectAppPro = () => {
  const [count, setCount] = useState(10)
  useEffect(() => {

    const timerId = setInterval(() => {
      setCount(count + 1)
    }, 1000)
    return () => {
      // 用来清理副作用的事情
      clearInterval(timerId)
    }
  }, [count])

  return (
    <div>
      {count}
    </div>
  )
}
export { EffectApp, EffectAppMore, EffectAppPro }