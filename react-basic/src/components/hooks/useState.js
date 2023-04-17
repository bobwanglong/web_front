/** useState
 * 作用：为函数组件提供状态(state)
 * 使用步骤：
 * 1.导入useState函数
 * 2.调用useState函数，并传入状态的初始值
 * 3.从useState函数的返回值中，拿到状态和修改状态的方法
 * 4.在JSX中展示状态
 * 5.调用修改状态的方法更新状态
 */
import { useState } from "react"
// 基础使用
function UseApp () {
  // 参数：状态初始值，比如传人1，表示该状态的初始值为1
  // 返回值：数组，包含两个变量，1:状态值，2：改变状态的函数
  const [count, setCount] = useState(1)
  console.log(count)
  return (
    <button onClick={() => {
      setCount(count + 1)
    }}>{count}</button>
  )
}
// 状态读取和修改
/**
 * 修改状态
 * 1.setCount是一个函数，参数表示 最新的状态
 * 2.调用该函数后，将使用新值替代旧值
 * 3.修改状态后，由于状态发生变化，会引起试图变化
 * 注意事项：
 * 修改状态的时候，一定要用新值替换旧的状态，不能直接修改旧的状态，尤其是引用类型
 
组件的更新过程
* 函数组件使用 useState hook 后的执行过程，以及状态值的变化
● 组件第一次渲染 
  a. 从头开始执行该组件中的代码逻辑
  b. 调用 useState(0) 将传入的参数作为状态初始值，即：0
  c. 渲染组件，此时，获取到的状态 count 值为： 0
● 组件第二次渲染 
  a. 点击按钮，调用 setCount(count + 1) 修改状态，因为状态发生改变，所以，该组件会重新渲染
  b. 组件重新渲染时，会再次执行该组件中的代码逻辑
  c. 再次调用 useState(0)，此时 React 内部会拿到最新的状态值而非初始值，比如，该案例中最新的状态值为 1
  d. 再次渲染组件，此时，获取到的状态 count 值为：1

  4、使用分组
  1，useState函数可以执行多次，每次执行互相独立，每调用一次为函数组件提供一个状态
  2.useState注意事项：
    a: 职能出现在函数组件或者其他hook函数中
    b: 不能嵌套在if/for/其他函数中(react按照hooks的调用顺序识别每一个hook)
    
 */
export default UseApp