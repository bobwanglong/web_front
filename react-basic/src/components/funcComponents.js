// 函数组件
function HelloFn () {
  // 定义事件回调函数
  const clickHandler = () => {
    console.log('事件被触发')
  }
  return (
    <div>
      {' '}
      <h2> this is my first components</h2>
      <button onClick={clickHandler}>click me!</button>
    </div>
  )
}

// 函数组件的事件绑定
// 语法：on+事件名称={事件处理程序}
// const clickHandler = () => {
//   console.log("事件被组件外触发")
// }
// 获取事件对象
// 只需要在函数中补充一个参数e
const clickEventHandler = (e) => {
  console.log("事件被组件外触发", e)
}

// 传递额外参数
// 解决：改造事件绑定箭头函数，在箭头函数中完成参数的传递

const TestComponent = () => {
  const list = [
    {
      id: 1001,
      name: 'react',
    },
    {
      id: 1002,
      name: 'vue',
    },
  ]
  const onDel = (e, id) => {
    console.log(e, id)
  }

  return (
    <ul>
      {list.map((item) => (
        <li key={item.id}>
          {item.name}
          <button onClick={(e) => onDel(e, item.id)}>X</button>
        </li>
      ))}
    </ul>
  )
}

export { HelloFn, TestComponent, clickEventHandler }
// export default HelloFn
