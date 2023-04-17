/**
 * 副作用：
 * 副作用是相对主作用来说的，一个函数除了主作用，其他的作用都是副作用。对于react组件来说，主作用就是根据数据(state/props)渲染UI，除此之外的都是副作用(比如手动修改DOM)
 * 常见的副作用：
 * 1，数据请求ajax发送
 * 2.手动修改DOM
 * 3.localstorage操作
 * useEffect函数的作用就是为react函数组件提供副作用处理的
 */

// 基础使用
// 使用步骤：
// 1.导入useEffect函数
// 2.调用useEffect函数，并传入回调函数
// 3.在回调函数中编写副作用处理(dom操作)
// 4.修改数据状态
// 检测副作用是否生效


import { useEffect, useState } from "react"

function EffectApp () {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // dom操作
    document.title = `当前已经点击了${count}次` // 反引号
  })
  return (
    <button onClick={() => { setCount(count + 1) }}>{count}</button>
  )
}

export default EffectApp